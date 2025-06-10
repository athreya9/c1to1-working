'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface MixpanelScriptProps {
  token: string;
}

/**
 * Client component for loading Mixpanel script
 * This component handles the loading and initialization of Mixpanel
 * in a way that's compatible with Next.js 15's client/server component model
 */
const MixpanelScript: React.FC<MixpanelScriptProps> = ({ token }) => {
  // Effect to dispatch an event when Mixpanel is loaded
  useEffect(() => {
    // Create a custom event that other components can listen for
    const dispatchMixpanelLoaded = () => {
      const event = new CustomEvent('mixpanel:loaded');
      document.dispatchEvent(event);
    };

    // Check if Mixpanel is already loaded
    if (window.mixpanel && typeof window.mixpanel.track === 'function') {
      dispatchMixpanelLoaded();
    }

    // Listen for the onLoad event from the Script component
    const handleMixpanelLoaded = () => {
      dispatchMixpanelLoaded();
    };

    // Add event listener
    document.addEventListener('mixpanel:script-loaded', handleMixpanelLoaded);

    // Cleanup
    return () => {
      document.removeEventListener('mixpanel:script-loaded', handleMixpanelLoaded);
    };
  }, []);

  // Function to handle script load event
  const handleScriptLoad = () => {
    // Dispatch a custom event when the script is loaded
    const event = new CustomEvent('mixpanel:script-loaded');
    document.dispatchEvent(event);
  };

  return (
    <>
      <Script
        id="mixpanel-script"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        dangerouslySetInnerHTML={{
          __html: `
            (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(a,j,d){function c(k,l){var m=l.split('.');2==m.length&&(k=k[m[0]],l=m[1]);k[l]=function(){k.push([l].concat(Array.prototype.slice.call(arguments,0)))}};var n=f.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";var o=f.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o);b._i.push([a,j,d]);return b};b.__SV=1.2;for(e=0;e<b._i.length;e++)g=b._i[e],c(g[0],g[1]),i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify reset opt_in_tracking opt_out_tracking has_opted_in_tracking_system has_opted_out_tracking_system people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<g.length;h++)c(b,g[h]);b._i.push([a,j,d])}})(document,window.mixpanel||[]);
            mixpanel.init("${token}", {debug: true});
          `,
        }}
      />
    </>
  );
};

export default MixpanelScript;
