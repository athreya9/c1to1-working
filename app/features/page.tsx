'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A4A4C] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Platform Features</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-200">
                Discover the powerful tools and features that make Connect1to1 the leading B2B matchmaking platform.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Core Platform Features</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive suite of features designed to streamline the B2B matchmaking process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">AI-Powered Matching</h3>
                <p className="text-gray-600">Our sophisticated algorithm analyzes over 50 data points to find the most compatible business partners for your specific needs.</p>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Private Profiles</h3>
                <p className="text-gray-600">Your business information remains private until you choose to connect with a match, protecting your sensitive data and competitive advantage.</p>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Meeting Scheduler</h3>
                <p className="text-gray-600">Seamlessly schedule and manage meetings with potential business partners directly through our integrated calendar system.</p>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Secure Messaging</h3>
                <p className="text-gray-600">Communicate directly with your matches through our encrypted messaging system, keeping all business discussions in one secure place.</p>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Analytics Dashboard</h3>
                <p className="text-gray-600">Gain valuable insights into your matching performance, profile views, and engagement metrics to optimize your business connections.</p>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Document Sharing</h3>
                <p className="text-gray-600">Securely share product catalogs, presentations, and other business documents with your matches to facilitate deeper discussions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* For Vendors Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#C99B2D]/20 px-3 py-1 text-sm font-semibold text-[#C99B2D] mb-6">
                For Vendors
              </div>
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Vendor-Specific Features</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized tools designed to help vendors showcase their products and connect with the right retailers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Product Catalog Management</h3>
                    <p className="mt-2 text-gray-600">Create and manage detailed product catalogs with images, specifications, pricing tiers, and availability information.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Retailer Requirements Matching</h3>
                    <p className="mt-2 text-gray-600">Automatically match your products with retailers' specific requirements and procurement needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Market Penetration Analytics</h3>
                    <p className="mt-2 text-gray-600">Analyze your market reach and identify opportunities to expand into new retail channels and geographic regions.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Retailer Verification</h3>
                    <p className="mt-2 text-gray-600">Connect with confidence knowing that all retailers on our platform have been verified for legitimacy and business standing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Retailers Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#C99B2D]/20 px-3 py-1 text-sm font-semibold text-[#C99B2D] mb-6">
                For Retailers
              </div>
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Retailer-Specific Features</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized tools designed to help retailers find the right vendors and products for their business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Product Discovery</h3>
                    <p className="mt-2 text-gray-600">Discover innovative products that match your specific requirements and customer demographics.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Vendor Filtering</h3>
                    <p className="mt-2 text-gray-600">Filter vendors based on specific criteria such as minimum order quantities, shipping capabilities, and sustainability practices.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Product Comparison</h3>
                    <p className="mt-2 text-gray-600">Compare similar products from different vendors side-by-side to make informed purchasing decisions.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1A4A4C]">Vendor Verification</h3>
                    <p className="mt-2 text-gray-600">Connect with confidence knowing that all vendors on our platform have been verified for legitimacy and product quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Integration & Connectivity</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Connect1to1 seamlessly integrates with your existing business tools and workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Calendar Integration</h3>
                <p className="text-gray-600">Sync with Google Calendar, Outlook, and other popular calendar tools to manage your business meetings efficiently.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">Email Notifications</h3>
                <p className="text-gray-600">Receive timely alerts about new matches, messages, meeting requests, and other important platform activities.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">API Access</h3>
                <p className="text-gray-600">Connect your existing business systems with our platform through our comprehensive API for seamless data flow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1A4A4C] to-[#143638] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Experience These Features?</h2>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
                Join thousands of businesses that have found success with Connect 1to1.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#1A4A4C] bg-white hover:bg-gray-100 transition-colors">
                  Sign Up Now
                </Link>
                <Link href="/plans" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
