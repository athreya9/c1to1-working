
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// This component handles the initialization of the Mixpanel script.
// It's marked as a Client Component because it uses the `onLoad` prop
// and interacts with the `window` object.

export default function MixpanelInitializer() {
  const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  const handleMixpanelLoad = () => {
    if (window.mixpanel && MIXPANEL_TOKEN) {
      window.mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV !== 'production',
        track_pageview: false, // Page views are tracked in MixpanelContext
        persistence: 'localStorage'
      });
      // Dispatch custom event for other components (like MixpanelContext) 
      // to know Mixpanel is ready
      document.dispatchEvent(new Event('mixpanel:loaded'));
      console.log('Mixpanel initialized successfully via Client Component.');
    } else {
      console.warn('Mixpanel script loaded, but token is missing or window.mixpanel is not available.');
    }
  };

  // Effect to ensure initialization happens even if onLoad doesn't fire reliably
  // (e.g., due to browser extensions or network issues)
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.mixpanel && !window.mixpanel.__loaded) { // Check if loaded but not initialized by onLoad
        console.log('Mixpanel detected but not initialized, attempting init via useEffect.');
        handleMixpanelLoad();
        clearInterval(checkInterval); // Stop checking once initialized
      }
    }, 1000); // Check every second

    // Cleanup interval on component unmount
    return () => clearInterval(checkInterval);
  }, [MIXPANEL_TOKEN]); // Re-run if token changes (unlikely but good practice)

  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token not found in environment variables. Mixpanel will not be initialized.');
    return null; // Don't render the script if the token is missing
  }

  return (
    <Script
      id="mixpanel-script"
      strategy="afterInteractive"
      src={`https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js`}
      onLoad={handleMixpanelLoad} // Pass the handler function
      onError={(e) => {
        console.error('Failed to load Mixpanel script:', e);
      }}
    />
  );
}

