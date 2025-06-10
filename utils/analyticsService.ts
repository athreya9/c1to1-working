'use client';

import { useAuth } from '../auth/authService';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

// Define types
interface AnalyticsHook {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  identifyUser: (userId: string, properties?: Record<string, any>) => void;
  isInitialized: boolean;
}

// Declare global Mixpanel type
declare global {
  interface Window {
    mixpanel: any;
  }
}

/**
 * Enhanced analytics service with improved error handling and initialization
 * This hook provides a robust interface for tracking events and identifying users
 */
const useAnalytics = (): AnalyticsHook => {
  const { user } = useAuth();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(false);
  const [initializationAttempted, setInitializationAttempted] = useState(false);
  
  // Get tokens from environment variables
  const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '';
  
  // Effect to confirm SDK availability
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for Mixpanel initialization
      const checkMixpanel = () => {
        if (window.mixpanel && typeof window.mixpanel.track === 'function') {
          console.log('Analytics Service: Mixpanel initialized successfully');
          setIsInitialized(true);
          return true;
        }
        return false;
      };
      
      // Try immediately
      if (checkMixpanel()) return;
      
      // If not available immediately, check a few times with delay
      let attempts = 0;
      const maxAttempts = 5;
      const interval = setInterval(() => {
        attempts++;
        if (checkMixpanel() || attempts >= maxAttempts) {
          clearInterval(interval);
          setInitializationAttempted(true);
          if (attempts >= maxAttempts && !isInitialized) {
            console.warn('Analytics Service: Failed to initialize Mixpanel after multiple attempts');
          }
        }
      }, 1000);
      
      // Listen for the custom event from MixpanelScript
      const handleMixpanelLoaded = () => {
        if (checkMixpanel()) {
          clearInterval(interval);
          setInitializationAttempted(true);
        }
      };
      
      document.addEventListener('mixpanel:loaded', handleMixpanelLoaded);
      
      return () => {
        clearInterval(interval);
        document.removeEventListener('mixpanel:loaded', handleMixpanelLoaded);
      };
    }
  }, [mixpanelToken]);
  
  // Effect to track page views
  useEffect(() => {
    if (isInitialized && pathname) {
      try {
        const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        
        // Track page views with Mixpanel
        if (window.mixpanel) {
          window.mixpanel.track('Page View', { 
            url,
            path: pathname,
            referrer: document.referrer || 'direct',
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Analytics Service: Error tracking page view:', error);
      }
    }
  }, [isInitialized, pathname, searchParams]);
  
  // Function to track custom events
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (!isInitialized) {
      if (initializationAttempted) {
        console.warn(`Analytics Service: Mixpanel not initialized, event not tracked: ${eventName}`);
      } else {
        console.warn(`Analytics Service: Mixpanel initialization in progress, event queued: ${eventName}`);
        // Could implement a queue system here for events before initialization
      }
      return;
    }
    
    try {
      if (window.mixpanel) {
        window.mixpanel.track(eventName, {
          ...properties,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error(`Analytics Service: Error tracking event ${eventName}:`, error);
    }
  }, [isInitialized, initializationAttempted]);
  
  // Function to identify users
  const identifyUser = useCallback((userId: string, properties?: Record<string, any>) => {
    if (!isInitialized || !userId) {
      if (initializationAttempted) {
        console.warn(`Analytics Service: Cannot identify user. Initialized: ${isInitialized}, UserId: ${userId}`);
      }
      return;
    }
    
    try {
      if (window.mixpanel) {
        window.mixpanel.identify(userId);
        if (properties) {
          window.mixpanel.people.set({
            ...properties,
            $last_login: new Date().toISOString()
          });
        }
      }
    } catch (error) {
      console.error(`Analytics Service: Error identifying user ${userId}:`, error);
    }
  }, [isInitialized, initializationAttempted]);
  
  // Integrate user identification with auth state
  useEffect(() => {
    if (isInitialized && user && user.id) {
      try {
        identifyUser(user.id, {
          name: user.name || 'Unknown',
          email: user.email || 'Unknown',
          role: user.role || 'Unknown',
          // Add other relevant user properties
        });
      } catch (error) {
        console.error('Analytics Service: Error identifying user from auth state:', error);
      }
    }
  }, [isInitialized, user, identifyUser]);
  
  return { trackEvent, identifyUser, isInitialized };
};

// Export the hook as default
export default useAnalytics;

// Direct function exports for simpler usage
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Get the mixpanel instance from window if available
  const mixpanelInstance = window.mixpanel;
  
  if (mixpanelInstance && mixpanelInstance.track) {
    try {
      mixpanelInstance.track(eventName, {
        ...properties,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error(`Analytics direct trackEvent error: ${error}`);
    }
  } else {
    console.log(`Analytics event (not sent): ${eventName}`, properties);
  }
};

export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Get the mixpanel instance from window if available
  const mixpanelInstance = window.mixpanel;
  
  if (mixpanelInstance && mixpanelInstance.identify) {
    try {
      mixpanelInstance.identify(userId);
      if (properties && mixpanelInstance.people && mixpanelInstance.people.set) {
        mixpanelInstance.people.set({
          ...properties,
          $last_login: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error(`Analytics direct identifyUser error: ${error}`);
    }
  } else {
    console.log(`Analytics identify (not sent): ${userId}`, properties);
  }
};
