import { useState, useEffect } from 'react';

// PayPal integration service for Connect1to1
export default class PayPalService {
  constructor() {
    this.isInitialized = false;
    this.clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test';
  }

  // Initialize PayPal SDK
  async initialize() {
    if (this.isInitialized) return;
    
    return new Promise((resolve, reject) => {
      // Load the PayPal SDK script
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${this.clientId}&currency=USD&intent=subscription`;
      script.async = true;
      
      script.onload = () => {
        this.isInitialized = true;
        resolve();
      };
      
      script.onerror = (err) => {
        console.error('Failed to load PayPal SDK:', err);
        reject(new Error('Failed to load PayPal SDK'));
      };
      
      document.body.appendChild(script);
    });
  }

  // Create subscription button
  async createSubscriptionButton(containerId, planId, onSuccess, onError) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }
      
      // Render the PayPal button
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: (data, actions) => {
          return actions.subscription.create({
            'plan_id': planId
          });
        },
        onApprove: (data, actions) => {
          // Subscription was approved
          console.log('Subscription approved:', data);
          if (onSuccess) {
            onSuccess(data);
          }
        },
        onError: (err) => {
          console.error('PayPal error:', err);
          if (onError) {
            onError(err);
          }
        }
      }).render(`#${containerId}`);
    } catch (error) {
      console.error('Error creating subscription button:', error);
      if (onError) {
        onError(error);
      }
    }
  }

  // Cancel subscription
  async cancelSubscription(subscriptionId, accessToken) {
    try {
      const response = await fetch(`https://api.paypal.com/v1/billing/subscriptions/${subscriptionId}/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          reason: 'Canceled by user'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to cancel subscription');
      }
      
      return true;
    } catch (error) {
      console.error('Error canceling subscription:', error);
      throw error;
    }
  }

  // Get subscription details
  async getSubscriptionDetails(subscriptionId, accessToken) {
    try {
      const response = await fetch(`https://api.paypal.com/v1/billing/subscriptions/${subscriptionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to get subscription details');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error getting subscription details:', error);
      throw error;
    }
  }
}
