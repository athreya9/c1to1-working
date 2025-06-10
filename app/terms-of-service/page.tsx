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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Header section */}
      <div className="bg-[#1A4A4C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The rules and guidelines for using Connect1to1
          </p>
        </div>
      </div>
      
      {/* Terms of Service content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: June 1, 2025</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Connect1to1 ("we," "our," or "us") governing your access to and use of the Connect1to1 website, platform, and services (collectively, the "Service").
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself and any entity you represent. By using the Service, you represent and warrant that you meet all eligibility requirements.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
          <p>
            To access certain features of the Service, you must register for an account. When you register, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your account credentials secure and confidential</li>
            <li>Notify us immediately of any unauthorized access or use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your account if we suspect any information you provide is inaccurate, incomplete, or fraudulent.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Service Description</h2>
          <p>
            Connect1to1 is a B2B matchmaking platform that connects vendors and retailers based on compatibility and business needs. Our Service includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Profile creation and management</li>
            <li>Business matchmaking algorithms</li>
            <li>Communication tools</li>
            <li>Meeting scheduling</li>
            <li>Resource libraries</li>
            <li>Analytics and reporting</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice or liability.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. User Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Infringe upon or violate the intellectual property rights of others</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
            <li>Introduce viruses, trojans, worms, or other malicious code</li>
            <li>Collect or harvest user data without permission</li>
            <li>Impersonate any person or entity</li>
            <li>Post false, misleading, or deceptive content</li>
            <li>Engage in spamming, phishing, or other manipulative behaviors</li>
            <li>Use the Service to transmit unsolicited communications</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. User Content</h2>
          <p>
            You retain ownership of any content you submit, post, or display on or through the Service ("User Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for the purpose of providing and promoting the Service.
          </p>
          <p>
            You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You own or have the necessary rights to your User Content</li>
            <li>Your User Content does not violate the rights of any third party</li>
            <li>Your User Content complies with these Terms and all applicable laws</li>
          </ul>
          <p>
            We reserve the right to remove any User Content that violates these Terms or that we find objectionable for any reason, without notice.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Fees and Payment</h2>
          <p>
            Some aspects of the Service may require payment of fees. You agree to pay all applicable fees as described on our website or as otherwise communicated to you.
          </p>
          <p>
            All fees are exclusive of taxes, which you are responsible for paying. Fees are non-refundable except as required by law or as explicitly stated in our refund policy.
          </p>
          <p>
            We may change our fees at any time. If we increase fees for a service you're currently using, we will notify you at least 30 days before the change takes effect.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are owned by Connect1to1 and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p>
            You may not copy, modify, create derivative works, publicly display, publicly perform, republish, download, store, transmit, sell, or exploit any content or material on our Service without our express prior written consent.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Links and Services</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by Connect1to1. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
          <p>
            You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, in no event shall Connect1to1, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          <p>
            Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid to us for the Service during the 12 months preceding the event giving rise to the liability.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Connect1to1 expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. We do not warrant any specific outcomes or results from using our matchmaking service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">12. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Connect1to1 and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">13. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms or the Service shall be exclusively brought in the federal or state courts located in Santa Clara County, California, and you consent to the personal jurisdiction of such courts.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">14. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">15. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">16. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-4">
            Connect1to1<br />
            92 Park Groton Pl,<br />
            San Jose, CA 95136<br />
            Email: legal@c1to1.com<br />
            Phone: (909) 500-3345
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
