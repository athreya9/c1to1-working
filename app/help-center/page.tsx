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

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Header section */}
      <div className="bg-[#1A4A4C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to your questions and get the support you need
          </p>
        </div>
      </div>
      
      {/* Help Center content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        {/* Search section */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-5 py-4 pr-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Popular topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#1A4A4C] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-600 mb-4">Learn the basics of Connect1to1 and how to set up your account.</p>
              <Link href="/help-center/getting-started" className="text-[#1A4A4C] font-medium hover:underline">
                View articles <span aria-hidden="true">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#1A4A4C] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scheduling Meetings</h3>
              <p className="text-gray-600 mb-4">Everything you need to know about scheduling and managing meetings.</p>
              <Link href="/help-center/scheduling-meetings" className="text-[#1A4A4C] font-medium hover:underline">
                View articles <span aria-hidden="true">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#1A4A4C] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Messaging</h3>
              <p className="text-gray-600 mb-4">Learn how to communicate effectively with your matches.</p>
              <Link href="/help-center/messaging" className="text-[#1A4A4C] font-medium hover:underline">
                View articles <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Help categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Account Management</h3>
              <ul className="space-y-2">
                <li><Link href="/help-center/account/create-account" className="text-[#1A4A4C] hover:underline">Creating an account</Link></li>
                <li><Link href="/help-center/account/profile-setup" className="text-[#1A4A4C] hover:underline">Setting up your profile</Link></li>
                <li><Link href="/help-center/account/password-reset" className="text-[#1A4A4C] hover:underline">Resetting your password</Link></li>
                <li><Link href="/help-center/account/subscription" className="text-[#1A4A4C] hover:underline">Managing your subscription</Link></li>
                <li><Link href="/help-center/account/team-members" className="text-[#1A4A4C] hover:underline">Adding team members</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Matchmaking</h3>
              <ul className="space-y-2">
                <li><Link href="/help-center/matchmaking/how-it-works" className="text-[#1A4A4C] hover:underline">How matchmaking works</Link></li>
                <li><Link href="/help-center/matchmaking/improve-matches" className="text-[#1A4A4C] hover:underline">Improving your matches</Link></li>
                <li><Link href="/help-center/matchmaking/preferences" className="text-[#1A4A4C] hover:underline">Setting match preferences</Link></li>
                <li><Link href="/help-center/matchmaking/compatibility" className="text-[#1A4A4C] hover:underline">Understanding compatibility scores</Link></li>
                <li><Link href="/help-center/matchmaking/rejected-matches" className="text-[#1A4A4C] hover:underline">Handling rejected matches</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Meetings</h3>
              <ul className="space-y-2">
                <li><Link href="/help-center/meetings/schedule" className="text-[#1A4A4C] hover:underline">Scheduling a meeting</Link></li>
                <li><Link href="/help-center/meetings/reschedule" className="text-[#1A4A4C] hover:underline">Rescheduling a meeting</Link></li>
                <li><Link href="/help-center/meetings/cancel" className="text-[#1A4A4C] hover:underline">Cancelling a meeting</Link></li>
                <li><Link href="/help-center/meetings/preparation" className="text-[#1A4A4C] hover:underline">Preparing for a meeting</Link></li>
                <li><Link href="/help-center/meetings/follow-up" className="text-[#1A4A4C] hover:underline">Following up after a meeting</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Messaging</h3>
              <ul className="space-y-2">
                <li><Link href="/help-center/messaging/send-message" className="text-[#1A4A4C] hover:underline">Sending messages</Link></li>
                <li><Link href="/help-center/messaging/attachments" className="text-[#1A4A4C] hover:underline">Sharing attachments</Link></li>
                <li><Link href="/help-center/messaging/templates" className="text-[#1A4A4C] hover:underline">Using message templates</Link></li>
                <li><Link href="/help-center/messaging/notifications" className="text-[#1A4A4C] hover:underline">Message notifications</Link></li>
                <li><Link href="/help-center/messaging/etiquette" className="text-[#1A4A4C] hover:underline">Messaging etiquette</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Analytics</h3>
              <ul className="space-y-2">
                <li><Link href="/help-center/analytics/dashboard" className="text-[#1A4A4C] hover:underline">Using the analytics dashboard</Link></li>
                <li><Link href="/help-center/analytics/reports" className="text-[#1A4A4C] hover:underline">Generating reports</Link></li>
                <li><Link href="/help-center/analytics/metrics" className="text-[#1A4A4C] hover:underline">Understanding key metrics</Link></li>
                <li><Link href="/help-center/analytics/export" className="text-[#1A4A4C] hover:underline">Exporting data</Link></li>
                <li><Link href="/help-center/analytics/insights" className="text-[#1A4A4C] hover:underline">Actionable insights</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Billing & Payments</h3>
              <ul className="space-y-2">
                <li><Link href="/help-center/billing/plans" className="text-[#1A4A4C] hover:underline">Subscription plans</Link></li>
                <li><Link href="/help-center/billing/payment-methods" className="text-[#1A4A4C] hover:underline">Managing payment methods</Link></li>
                <li><Link href="/help-center/billing/invoices" className="text-[#1A4A4C] hover:underline">Accessing invoices</Link></li>
                <li><Link href="/help-center/billing/refunds" className="text-[#1A4A4C] hover:underline">Refund policy</Link></li>
                <li><Link href="/help-center/billing/tax-info" className="text-[#1A4A4C] hover:underline">Tax information</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contact support section */}
        <div className="bg-[#1A4A4C] text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="mb-6">Our support team is here to help. Contact us through one of these channels:</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@c1to1.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(909) 500-3345</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.Tawk_API) {
                        window.Tawk_API.toggle();
                      }
                    }}
                    className="hover:underline"
                  >
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Link href="/submit-ticket" className="inline-block bg-white text-[#1A4A4C] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                Submit a Support Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
