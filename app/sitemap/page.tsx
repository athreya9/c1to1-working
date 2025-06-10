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

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Header section */}
      <div className="bg-[#1A4A4C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find all pages and resources on our website
          </p>
        </div>
      </div>
      
      {/* Sitemap content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Main Pages */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#1A4A4C]">Main Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#1A4A4C] hover:underline font-medium">Home</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#1A4A4C] hover:underline font-medium">How It Works</Link>
              </li>
              <li>
                <Link href="/features" className="text-[#1A4A4C] hover:underline font-medium">Features</Link>
              </li>
              <li>
                <Link href="/plans" className="text-[#1A4A4C] hover:underline font-medium">Plans</Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#1A4A4C] hover:underline font-medium">Resources</Link>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><Link href="/resources/guides" className="text-gray-600 hover:underline">Guides</Link></li>
                  <li><Link href="/resources/case-studies" className="text-gray-600 hover:underline">Case Studies</Link></li>
                  <li><Link href="/resources/templates" className="text-gray-600 hover:underline">Templates</Link></li>
                  <li><Link href="/resources/podcasts" className="text-gray-600 hover:underline">Podcasts</Link></li>
                  <li><Link href="/resources/webinars" className="text-gray-600 hover:underline">Webinars</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="text-[#1A4A4C] hover:underline font-medium">Contact</Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#1A4A4C] hover:underline font-medium">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* User Account & Dashboard */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#1A4A4C]">User Account & Dashboard</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-[#1A4A4C] hover:underline font-medium">Login</Link>
              </li>
              <li>
                <Link href="/signup" className="text-[#1A4A4C] hover:underline font-medium">Sign Up</Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-[#1A4A4C] hover:underline font-medium">Dashboard</Link>
              </li>
              <li>
                <Link href="/profile" className="text-[#1A4A4C] hover:underline font-medium">Profile</Link>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><Link href="/profile/vendor" className="text-gray-600 hover:underline">Vendor Profile</Link></li>
                  <li><Link href="/profile/retailer" className="text-gray-600 hover:underline">Retailer Profile</Link></li>
                  <li><Link href="/profile/documents" className="text-gray-600 hover:underline">Documents</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/matches" className="text-[#1A4A4C] hover:underline font-medium">Matches</Link>
              </li>
              <li>
                <Link href="/meetings" className="text-[#1A4A4C] hover:underline font-medium">Meetings</Link>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><Link href="/meetings/schedule" className="text-gray-600 hover:underline">Schedule Meeting</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/messages" className="text-[#1A4A4C] hover:underline font-medium">Messages</Link>
              </li>
              <li>
                <Link href="/analytics" className="text-[#1A4A4C] hover:underline font-medium">Analytics</Link>
              </li>
              <li>
                <Link href="/settings" className="text-[#1A4A4C] hover:underline font-medium">Settings</Link>
              </li>
            </ul>
          </div>
          
          {/* Admin & Support */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#1A4A4C]">Admin & Support</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/admin/dashboard" className="text-[#1A4A4C] hover:underline font-medium">Admin Dashboard</Link>
              </li>
              <li>
                <Link href="/admin/users" className="text-[#1A4A4C] hover:underline font-medium">User Management</Link>
              </li>
              <li>
                <Link href="/admin/analytics" className="text-[#1A4A4C] hover:underline font-medium">Admin Analytics</Link>
              </li>
              <li>
                <Link href="/admin/settings" className="text-[#1A4A4C] hover:underline font-medium">Admin Settings</Link>
              </li>
              <li>
                <Link href="/help-center" className="text-[#1A4A4C] hover:underline font-medium">Help Center</Link>
              </li>
              <li>
                <Link href="/submit-ticket" className="text-[#1A4A4C] hover:underline font-medium">Submit a Ticket</Link>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-6 mt-12 text-[#1A4A4C]">Legal</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-[#1A4A4C] hover:underline font-medium">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-[#1A4A4C] hover:underline font-medium">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-[#1A4A4C] hover:underline font-medium">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/gdpr-compliance" className="text-[#1A4A4C] hover:underline font-medium">GDPR Compliance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
