'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A4A4C] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">How Connect1to1 Works</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-200">
                Our intelligent platform makes it easy to find the perfect business partners through a streamlined, data-driven matching process.
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Our Matching Process</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Connect1to1 uses a sophisticated algorithm to match vendors and retailers based on multiple compatibility factors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-full bg-[#C99B2D]/30 hidden md:block"></div>
                <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-[#1A4A4C] text-white text-2xl font-bold mx-auto">1</div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-[#1A4A4C]">Create Your Profile</h3>
                  <p className="mt-4 text-gray-600">
                    Sign up and build your detailed business profile. Include information about your products, services, target markets, and specific business needs.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-full bg-[#C99B2D]/30 hidden md:block"></div>
                <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-[#1A4A4C] text-white text-2xl font-bold mx-auto">2</div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-[#1A4A4C]">Define Your Criteria</h3>
                  <p className="mt-4 text-gray-600">
                    Specify what you're looking for in a business partner. Set preferences for industry, company size, location, product categories, and more.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-full bg-[#C99B2D]/30 hidden md:block"></div>
                <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-[#1A4A4C] text-white text-2xl font-bold mx-auto">3</div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-[#1A4A4C]">Get Matched</h3>
                  <p className="mt-4 text-gray-600">
                    Our AI algorithm analyzes your profile and criteria to identify potential partners with the highest compatibility scores.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-[#1A4A4C] text-white text-2xl font-bold mx-auto">4</div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-[#1A4A4C]">Connect & Grow</h3>
                  <p className="mt-4 text-gray-600">
                    Review your matches, schedule meetings, exchange information, and build valuable business relationships that drive growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Vendors Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#C99B2D]/20 px-3 py-1 text-sm font-semibold text-[#C99B2D] mb-6">
                  For Vendors
                </div>
                <h2 className="text-3xl font-bold text-[#1A4A4C] mb-6">Find the Perfect Retail Partners</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with retailers who are actively looking for products like yours. Our platform helps you:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Identify retailers that match your target market</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Showcase your products to qualified buyers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Reduce time spent on unqualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Expand your distribution network efficiently</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/signup?type=vendor" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                    Sign Up as a Vendor
                  </Link>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A4A4C]/10 to-[#1A4A4C]/5 rounded-xl"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-xl p-8 max-w-md">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center">
                        <svg className="h-6 w-6 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-[#1A4A4C]">Vendor Dashboard</h3>
                        <p className="text-sm text-gray-500">Product Management</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">Eco-Friendly Packaging</h4>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sustainable packaging solutions for retail products</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="mr-2">Retailer matches:</span>
                          <span className="font-medium text-[#1A4A4C]">12</span>
                        </div>
                      </div>
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">Smart Inventory Tags</h4>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">RFID-enabled inventory tracking solutions</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="mr-2">Retailer matches:</span>
                          <span className="font-medium text-[#1A4A4C]">8</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                        View All Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Retailers Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C99B2D]/10 to-[#C99B2D]/5 rounded-xl"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-xl p-8 max-w-md">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-[#C99B2D]/10 flex items-center justify-center">
                        <svg className="h-6 w-6 text-[#C99B2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-[#1A4A4C]">Retailer Dashboard</h3>
                        <p className="text-sm text-gray-500">Vendor Matching</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">EcoTech Solutions</h4>
                          <span className="text-xs bg-[#C99B2D]/20 text-[#C99B2D] px-2 py-1 rounded-full">95% Match</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sustainable packaging and eco-friendly retail solutions</p>
                        <div className="mt-2 flex justify-end">
                          <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-[#1A4A4C] bg-[#1A4A4C]/10 hover:bg-[#1A4A4C]/20 transition-colors">
                            View Profile
                          </button>
                        </div>
                      </div>
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">Smart Retail Tech</h4>
                          <span className="text-xs bg-[#C99B2D]/20 text-[#C99B2D] px-2 py-1 rounded-full">92% Match</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">RFID inventory solutions and smart retail technology</p>
                        <div className="mt-2 flex justify-end">
                          <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-[#1A4A4C] bg-[#1A4A4C]/10 hover:bg-[#1A4A4C]/20 transition-colors">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                        View All Matches
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-[#C99B2D]/20 px-3 py-1 text-sm font-semibold text-[#C99B2D] mb-6">
                  For Retailers
                </div>
                <h2 className="text-3xl font-bold text-[#1A4A4C] mb-6">Discover Innovative Vendors</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Find vendors that perfectly align with your business needs and values. Our platform helps you:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Source products that match your specific requirements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Discover innovative products before your competitors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Streamline your vendor selection process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Build relationships with vendors who share your values</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/signup?type=retailer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                    Sign Up as a Retailer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about how Connect1to1 works.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How does the matching algorithm work?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Our proprietary algorithm analyzes over 50 data points from your business profile and matching criteria. It considers factors like industry alignment, product categories, business size compatibility, geographic preferences, and more to generate compatibility scores.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How long does it take to get matched?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Most users receive their first matches within 24-48 hours of completing their profile. The quality and quantity of matches improve as you provide more detailed information and as new businesses join the platform.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Is my business information kept private?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Yes, your business information is kept private until you choose to connect with a match. Only basic information is visible to potential matches, and detailed information is only shared when both parties agree to connect.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I specify exactly what I'm looking for?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Absolutely. Our detailed matching criteria allow you to specify exactly what you're looking for in a business partner. You can set preferences for industry, company size, location, product categories, and more.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">What happens after I'm matched?</h3>
                <div className="mt-2 text-gray-600">
                  <p>When you receive a match, you can review their profile and decide if you want to connect. If both parties agree to connect, you can schedule meetings, exchange messages, and share more detailed information through our platform.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center px-6 py-3 border border-[#1A4A4C] text-base font-medium rounded-md text-[#1A4A4C] hover:bg-[#1A4A4C]/5 transition-colors">
                View All FAQs
              </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Find Your Perfect Business Match?</h2>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
                Join thousands of businesses that have found success with Connect 1to1.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#1A4A4C] bg-white hover:bg-gray-100 transition-colors">
                  Sign Up Now
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
                  Contact Sales
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
