'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
interface MixpanelContextType {
  isLoaded: boolean;
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  identifyUser: (userId: string, properties?: Record<string, any>) => void;
}

// Create context with default values
const MixpanelContext = createContext<MixpanelContextType>({
  isLoaded: false,
  trackEvent: () => {},
  identifyUser: () => {},
});

// Hook to use the Mixpanel context
export const useMixpanel = () => useContext(MixpanelContext);

// Provider component
export const MixpanelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Effect to listen for Mixpanel loaded event
  useEffect(() => {
    // Check if Mixpanel is already available
    if (typeof window !== 'undefined' && window.mixpanel && typeof window.mixpanel.track === 'function') {
      setIsLoaded(true);
      return;
    }

    // Function to handle the custom event
    const handleMixpanelLoaded = () => {
      setIsLoaded(true);
    };

    // Listen for the custom event
    document.addEventListener('mixpanel:loaded', handleMixpanelLoaded);

    // Set up an interval to check for Mixpanel directly as a fallback
    const checkInterval = setInterval(() => {
      if (typeof window !== 'undefined' && window.mixpanel && typeof window.mixpanel.track === 'function') {
        setIsLoaded(true);
        clearInterval(checkInterval);
      }
    }, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('mixpanel:loaded', handleMixpanelLoaded);
      clearInterval(checkInterval);
    };
  }, []);

  // Function to track events
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isLoaded || typeof window === 'undefined') {
      console.warn(`MixpanelContext: Cannot track event "${eventName}" - Mixpanel not loaded`);
      return;
    }

    try {
      window.mixpanel.track(eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error(`MixpanelContext: Error tracking event "${eventName}":`, error);
    }
  };

  // Function to identify users
  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    if (!isLoaded || typeof window === 'undefined' || !userId) {
      console.warn(`MixpanelContext: Cannot identify user "${userId}" - Mixpanel not loaded or userId empty`);
      return;
    }

    try {
      window.mixpanel.identify(userId);
      if (properties) {
        window.mixpanel.people.set({
          ...properties,
          $last_login: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error(`MixpanelContext: Error identifying user "${userId}":`, error);
    }
  };

  // Context value
  const contextValue: MixpanelContextType = {
    isLoaded,
    trackEvent,
    identifyUser,
  };

  return (
    <MixpanelContext.Provider value={contextValue}>
      {children}
    </MixpanelContext.Provider>
  );
};
