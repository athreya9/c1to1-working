'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Create a Header component for consistent navigation
const Header = () => {
  return (
    <header className="bg-[#1A4A4C] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Connect1to1 Logo" width={150} height={40} className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/how-it-works" className="hover:text-gray-300">How It Works</Link>
          <Link href="/features" className="hover:text-gray-300">Features</Link>
          <Link href="/plans" className="hover:text-gray-300">Plans</Link>
          <Link href="/resources" className="hover:text-gray-300">Resources</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-gray-300">Login</Link>
          <Link href="/signup" className="bg-white text-[#1A4A4C] px-4 py-2 rounded-md hover:bg-gray-100">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

// Create a Footer component for consistent navigation
const Footer = () => {
  return (
    <footer className="bg-[#1A4A4C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect1to1</h3>
            <p className="mb-4">92 Park Groton Pl,<br />San Jose, CA 95136</p>
            <p className="mb-2">Phone: (909) 500-3345</p>
            <p className="mb-2">Phone: (408) 657-7085</p>
            <p className="mb-4">Email: info@c1to1.com</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/c1to1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-gray-300">How It Works</Link></li>
              <li><Link href="/features" className="hover:text-gray-300">Features</Link></li>
              <li><Link href="/plans" className="hover:text-gray-300">Plans</Link></li>
              <li><Link href="/resources" className="hover:text-gray-300">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link href="/gdpr-compliance" className="hover:text-gray-300">GDPR Compliance</Link></li>
              <li><Link href="/sitemap" className="hover:text-gray-300">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help-center" className="hover:text-gray-300">Help Center</Link></li>
              <li><Link href="/submit-ticket" className="hover:text-gray-300">Submit a Ticket</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li>
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.Tawk_API) {
                      window.Tawk_API.toggle();
                    }
                  }}
                  className="hover:text-gray-300"
                >
                  Live Chat
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Connect1to1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Header section */}
      <div className="bg-[#1A4A4C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            How we use cookies and similar technologies
          </p>
        </div>
      </div>
      
      {/* Cookie Policy content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: June 1, 2025</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            This Cookie Policy explains how Connect1to1 ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website at c1to1.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p>
            This Cookie Policy should be read together with our Privacy Policy and Terms of Service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Connect1to1) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Why Do We Use Cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
          </p>
          <p>
            The specific types of first and third-party cookies served through our Website and the purposes they perform are described below:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
          </p>
          <p>
            Examples of essential cookies we use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Session cookies to operate our Website</li>
            <li>Authentication cookies to remember your login status</li>
            <li>Security cookies to prevent fraud and protect our Website</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
          </p>
          <p>
            Examples of performance and functionality cookies we use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cookies to remember your preferences and settings</li>
            <li>Cookies to personalize content</li>
            <li>Cookies to help with form completion</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
          </p>
          <p>
            Examples of analytics and customization cookies we use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics cookies to track user behavior and measure site performance</li>
            <li>Mixpanel cookies to analyze user interactions</li>
            <li>Hotjar cookies to understand user experience</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Advertising Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>
          <p>
            Examples of advertising cookies we use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Ads cookies to deliver targeted advertisements</li>
            <li>LinkedIn Insight Tag to track conversions</li>
            <li>Facebook Pixel to measure ad effectiveness</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.5 Social Media Cookies</h3>
          <p>
            These cookies are used to enable you to share pages and content that you find interesting on our Website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
          </p>
          <p>
            Examples of social media cookies we use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>LinkedIn cookies for sharing and tracking</li>
            <li>Twitter cookies for sharing and tracking</li>
            <li>Facebook cookies for sharing and tracking</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our Website.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:text-blue-800">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-blue-600 hover:text-blue-800">http://www.youronlinechoices.com</a>.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. How Often Will We Update This Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Where Can You Get Further Information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at:
          </p>
          <p className="mb-4">
            Connect1to1<br />
            92 Park Groton Pl,<br />
            San Jose, CA 95136<br />
            Email: privacy@c1to1.com<br />
            Phone: (909) 500-3345
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
