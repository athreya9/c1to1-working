// Analytics service for Connect1to1
// Integrates Google Analytics 4, Mixpanel, and Hotjar

class AnalyticsService {
  constructor() {
    this.initialized = {
      ga: false,
      mixpanel: false,
      hotjar: false
    };
    
    this.gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    this.mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    this.hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;
  }
  
  // Initialize all analytics services
  async initialize() {
    await Promise.all([
      this.initializeGA(),
      this.initializeMixpanel(),
      this.initializeHotjar()
    ]);
    
    console.log('Analytics services initialized');
  }
  
  // Initialize Google Analytics 4
  async initializeGA() {
    if (this.initialized.ga || !this.gaId) return;
    
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
      script.async = true;
      
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', this.gaId);
        
        this.initialized.ga = true;
        resolve();
      };
      
      document.head.appendChild(script);
    });
  }
  
  // Initialize Mixpanel
  async initializeMixpanel() {
    if (this.initialized.mixpanel || !this.mixpanelToken) return;
    
    return new Promise((resolve) => {
      (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
      for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
      MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
      
      mixpanel.init(this.mixpanelToken);
      this.initialized.mixpanel = true;
      resolve();
    });
  }
  
  // Initialize Hotjar
  async initializeHotjar() {
    if (this.initialized.hotjar || !this.hotjarId) return;
    
    return new Promise((resolve) => {
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:this.hotjarId,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      
      this.initialized.hotjar = true;
      resolve();
    });
  }
  
  // Track page view
  trackPageView(pageName) {
    // Google Analytics
    if (this.initialized.ga && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
    
    // Mixpanel
    if (this.initialized.mixpanel && window.mixpanel) {
      window.mixpanel.track('Page View', {
        'Page Name': pageName,
        'URL': window.location.href
      });
    }
  }
  
  // Track event
  trackEvent(eventName, properties = {}) {
    // Google Analytics
    if (this.initialized.ga && window.gtag) {
      window.gtag('event', eventName, properties);
    }
    
    // Mixpanel
    if (this.initialized.mixpanel && window.mixpanel) {
      window.mixpanel.track(eventName, properties);
    }
  }
  
  // Identify user
  identifyUser(userId, userProperties = {}) {
    // Google Analytics
    if (this.initialized.ga && window.gtag) {
      window.gtag('set', 'user_id', userId);
      window.gtag('set', 'user_properties', userProperties);
    }
    
    // Mixpanel
    if (this.initialized.mixpanel && window.mixpanel) {
      window.mixpanel.identify(userId);
      window.mixpanel.people.set(userProperties);
    }
  }
  
  // Track conversion
  trackConversion(conversionName, value = 0, currency = 'USD', properties = {}) {
    // Google Analytics
    if (this.initialized.ga && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': this.gaId,
        'value': value,
        'currency': currency,
        ...properties
      });
    }
    
    // Mixpanel
    if (this.initialized.mixpanel && window.mixpanel) {
      window.mixpanel.track('Conversion', {
        'Conversion Name': conversionName,
        'Value': value,
        'Currency': currency,
        ...properties
      });
    }
  }
}

// Export as singleton
const analyticsService = new AnalyticsService();
export default analyticsService;
