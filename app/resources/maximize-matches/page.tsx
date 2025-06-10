'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MaximizeMatches() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1A4A4C] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white text-center">Maximize Your Match Potential</h1>
          <p className="mt-4 text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Learn how to get the most out of Connect1to1's matching system
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-[#1A4A4C]">Understanding How Our Matching System Works</h2>
          <p>
            Connect1to1 uses a sophisticated algorithm to create meaningful connections between vendors and retailers. 
            Unlike traditional directories or listing platforms, we don't just provide a search interface – we actively 
            match businesses based on compatibility factors to create valuable, personalized connections.
          </p>
          <p>
            Our system analyzes multiple data points from both vendors and retailers to identify potential matches 
            that have a high likelihood of successful business relationships. The more complete and detailed your 
            profile is, the better our system can match you with compatible partners.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
            <h3 className="text-[#1A4A4C] mb-4">Key Matching Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A4A4C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Product Categories</h4>
                  <p className="mt-2 text-base text-gray-500">
                    We match vendors and retailers based on product categories and subcategories to ensure relevance.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A4A4C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Geographic Regions</h4>
                  <p className="mt-2 text-base text-gray-500">
                    Service areas and target markets are analyzed to connect businesses that operate in compatible regions.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A4A4C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Business Size</h4>
                  <p className="mt-2 text-base text-gray-500">
                    We consider company size and capacity to ensure matches are appropriate for both parties' scale of operations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A4A4C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Budget Range</h4>
                  <p className="mt-2 text-base text-gray-500">
                    Price points and budget expectations are matched to connect businesses with compatible financial requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A4A4C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Quality Standards</h4>
                  <p className="mt-2 text-base text-gray-500">
                    Certifications, quality standards, and business practices are considered to ensure alignment in expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A4A4C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Specific Requirements</h4>
                  <p className="mt-2 text-base text-gray-500">
                    Custom fields and specific business requirements are analyzed to find partners that meet unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tips for Vendors */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-full bg-[#1A4A4C] flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tips for Vendors</h2>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">How to Optimize Your Vendor Profile</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Complete Your Profile 100%</h4>
                    <p className="mt-1 text-gray-600">
                      Profiles with complete information receive up to 5x more matches. Be thorough in every section, 
                      especially product descriptions, service regions, and business capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Be Specific About Your Products/Services</h4>
                    <p className="mt-1 text-gray-600">
                      Don't just list general categories. Include specific products, capabilities, minimum order quantities, 
                      and what makes your offerings unique. This helps our system match you with retailers looking for exactly what you offer.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Define Your Ideal Customer</h4>
                    <p className="mt-1 text-gray-600">
                      Use the matching preferences section to clearly define your ideal retailer in terms of size, 
                      order volume, and business type. This helps filter out incompatible matches and focus on quality connections.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Be Precise About Service Regions</h4>
                    <p className="mt-1 text-gray-600">
                      Specify exactly where you can provide products or services. If you serve globally, select the global option. 
                      If you serve specific regions, select only those regions to avoid mismatches with retailers outside your service area.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Respond Quickly to Match Alerts</h4>
                    <p className="mt-1 text-gray-600">
                      Vendors who respond to match alerts within 24 hours are 3x more likely to establish successful business relationships. 
                      Set up email notifications and check your dashboard regularly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C99B2D]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  <strong>Pro Tip:</strong> Premium plan members receive priority in the matching algorithm and are shown first to retailers when multiple vendors match their criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tips for Retailers */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-full bg-[#1A4A4C] flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tips for Retailers</h2>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1A4A4C] mb-4">How to Optimize Your Retailer Profile</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Be Specific About Your Needs</h4>
                    <p className="mt-1 text-gray-600">
                      Clearly define what products or services you're looking for, including specific categories, 
                      quality standards, and any unique requirements. The more specific you are, the better matches you'll receive.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Include Purchase Volumes</h4>
                    <p className="mt-1 text-gray-600">
                      Specify your typical order volumes and purchasing frequency. This helps match you with vendors 
                      who can accommodate your scale, whether you're looking for small batch suppliers or large-volume manufacturers.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Specify All Relevant Locations</h4>
                    <p className="mt-1 text-gray-600">
                      Indicate all locations where you need products or services, not just your headquarters. 
                      This ensures you're matched with vendors who can serve all your relevant markets.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Share Your Timeline</h4>
                    <p className="mt-1 text-gray-600">
                      Include information about your purchasing timeline and decision-making process. 
                      This helps vendors understand your needs and respond appropriately.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1A4A4C] text-white">
                      <span className="font-semibold">5</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Update Your Profile Regularly</h4>
                    <p className="mt-1 text-gray-600">
                      As your business needs change, update your profile to ensure you continue to receive relevant matches. 
                      We recommend reviewing your profile at least quarterly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C99B2D]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  <strong>Pro Tip:</strong> Retailers who include detailed product specifications and images receive 40% more relevant vendor responses.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-[#C99B2D] flex items-center justify-center mr-4 text-white font-bold text-xl">
                    V
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">EcoPackage Solutions</h3>
                    <p className="text-sm text-gray-500">Sustainable Packaging Vendor</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-600 mb-4">
                  "After completing our profile with detailed information about our sustainable packaging options and service regions, 
                  we received 7 quality matches in the first month. Three of these turned into ongoing business relationships, 
                  including a major national retailer that we had been trying to connect with for years."
                </blockquote>
                <p className="text-sm text-gray-500">— Michael Chen, Sales Director</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-[#1A4A4C] flex items-center justify-center mr-4 text-white font-bold text-xl">
                    R
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Fresh Market Co-op</h3>
                    <p className="text-sm text-gray-500">Regional Grocery Chain</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-600 mb-4">
                  "We were looking for local, organic produce suppliers for our 12 store locations. 
                  By specifying our exact requirements and locations in our profile, Connect1to1 matched us with 
                  5 vendors who perfectly fit our needs. We've now established relationships with 3 of them, 
                  cutting our sourcing time by 70%."
                </blockquote>
                <p className="text-sm text-gray-500">— Sarah Johnson, Procurement Manager</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How often does the matching algorithm run?</h3>
                <p className="text-gray-600">
                  Our matching algorithm runs daily to identify new potential matches. When a match is found, 
                  both parties receive an alert via email and on their dashboard. We also perform a comprehensive 
                  re-evaluation of all profiles weekly to account for any updates or changes.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I see all potential matches at once?</h3>
                <p className="text-gray-600">
                  No, Connect1to1 is designed to provide quality, personalized matches rather than an open directory. 
                  Matches are presented individually to ensure focused attention on each potential business relationship. 
                  This approach leads to higher success rates and more meaningful connections.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What happens after a match is made?</h3>
                <p className="text-gray-600">
                  When a match is made, both parties receive a notification. Vendors with paid subscriptions can view the 
                  retailer's full profile and initiate contact through our platform. You can schedule meetings, exchange 
                  messages, and track the progress of your relationship all within Connect1to1.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How can I improve my match quality?</h3>
                <p className="text-gray-600">
                  The most effective way to improve match quality is to complete your profile with detailed, specific information. 
                  Regularly update your profile as your business needs change, and provide feedback on matches you receive. 
                  Our system learns from this feedback to improve future matching.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a limit to how many matches I can receive?</h3>
                <p className="text-gray-600">
                  There is no limit to the number of matches you can receive. The number of matches depends on the 
                  compatibility of your profile with others in our system. However, we focus on quality over quantity, 
                  so you'll only receive matches that have a high potential for successful business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#1A4A4C] rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Maximize Your Match Potential?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Complete your profile today and start connecting with the right business partners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/profile" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#1A4A4C] bg-white hover:bg-gray-50">
                Update Your Profile
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C99B2D] hover:bg-[#b38a28]">
                View Your Matches
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
