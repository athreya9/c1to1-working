'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';

interface PayPalButtonProps {
  amount?: number;
  currency?: string;
  onSuccess: (details: any) => void;
  onError?: (error: any) => void;
  planId?: string;
  buttonText?: string;
  style?: {
    layout?: 'vertical' | 'horizontal';
    color?: 'gold' | 'blue' | 'silver' | 'white' | 'black';
    shape?: 'rect' | 'pill';
    height?: number;
  };
}

export default function PayPalButton({
  amount,
  currency = 'USD',
  onSuccess,
  onError,
  planId,
  buttonText = 'Subscribe',
  style = {
    layout: 'vertical',
    color: 'gold',
    shape: 'rect',
    height: 40
  }
}: PayPalButtonProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [buttonRendered, setButtonRendered] = useState(false);
  const [paypalError, setPaypalError] = useState<string | null>(null);

  // Initialize PayPal when script is loaded
  useEffect(() => {
    if (scriptLoaded && !buttonRendered && typeof window !== 'undefined') {
      try {
        const buttonContainer = document.getElementById('paypal-button-container');
        if (!buttonContainer) return;
        
        // Clear any existing buttons
        buttonContainer.innerHTML = '';
        
        if (window.paypal) {
          if (planId) {
            // Subscription button
            window.paypal.Buttons({
              style: style,
              createSubscription: function(data: any, actions: any) {
                return actions.subscription.create({
                  plan_id: planId
                });
              },
              onApprove: function(data: any, actions: any) {
                return actions.subscription.get().then(function(details: any) {
                  onSuccess({
                    ...details,
                    plan: planId,
                    value: amount
                  });
                });
              },
              onError: function(err: any) {
                setPaypalError('PayPal encountered an error. Please try again.');
                if (onError) onError(err);
              }
            }).render('#paypal-button-container');
          } else if (amount) {
            // One-time payment button
            window.paypal.Buttons({
              style: style,
              createOrder: function(data: any, actions: any) {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: amount.toString(),
                      currency_code: currency
                    }
                  }]
                });
              },
              onApprove: function(data: any, actions: any) {
                return actions.order.capture().then(function(details: any) {
                  onSuccess(details);
                });
              },
              onError: function(err: any) {
                setPaypalError('PayPal encountered an error. Please try again.');
                if (onError) onError(err);
              }
            }).render('#paypal-button-container');
          } else {
            // Fallback for demo mode when neither planId nor amount is provided
            window.paypal.Buttons({
              style: style,
              createOrder: function(data: any, actions: any) {
                // Demo mode - create a sample order
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: '0.01',
                      currency_code: currency
                    },
                    description: 'Demo Payment'
                  }]
                });
              },
              onApprove: function(data: any, actions: any) {
                // For demo, just return a success object without capturing
                onSuccess({
                  status: 'DEMO_SUCCESS',
                  id: `demo_${Date.now()}`,
                  plan: planId || 'demo_plan',
                  value: amount || 0.01
                });
                return Promise.resolve();
              },
              onError: function(err: any) {
                setPaypalError('PayPal encountered an error. Please try again.');
                if (onError) onError(err);
              }
            }).render('#paypal-button-container');
          }
          
          setButtonRendered(true);
        }
      } catch (error) {
        console.error('Error rendering PayPal button:', error);
        setPaypalError('Failed to load PayPal. Please refresh the page and try again.');
      }
    }
  }, [scriptLoaded, buttonRendered, amount, currency, onSuccess, onError, planId, style]);

  return (
    <div className="paypal-button-wrapper">
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb'}&currency=${currency}&intent=subscription&vault=true`}
        onLoad={() => setScriptLoaded(true)}
        onError={() => setPaypalError('Failed to load PayPal. Please check your internet connection and try again.')}
      />
      
      {paypalError && (
        <div className="text-red-500 text-sm mb-3">
          {paypalError}
        </div>
      )}
      
      <div id="paypal-button-container" className="w-full"></div>
      
      {!scriptLoaded && (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
          <span className="ml-2 text-gray-600">Loading payment options...</span>
        </div>
      )}
    </div>
  );
}

// Add TypeScript declarations
declare global {
  interface Window {
    paypal: any;
  }
}
