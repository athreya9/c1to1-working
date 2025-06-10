'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../components/layout/SharedComponents';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1A4A4C] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect with the Perfect Business Partners</h1>
              <p className="text-xl mb-8">The exclusive B2B matchmaking platform that connects vendors and retailers based on real compatibility.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="bg-white text-[#1A4A4C] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center">
                  Get Started
                </Link>
                <Link href="/how-it-works" className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors text-center">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-[#F8F9FA] p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Perfect Match!</h3>
                      <p className="text-gray-600">98% compatibility score</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Retailer</span>
                      <h4 className="text-lg font-semibold mt-1">TechRetail Solutions</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Looking for inventory management solutions for multi-location stores</p>
                </div>
                
                <div className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Vendor</span>
                      <h4 className="text-lg font-semibold mt-1">InventoryPro Systems</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Specialized in multi-location inventory management software</p>
                </div>
                
                <button className="w-full bg-[#1A4A4C] text-white py-3 rounded-md font-medium hover:bg-[#143638] transition-colors">
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Rest of the homepage content remains the same */}
      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Connect1to1 Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our intelligent matchmaking platform connects retailers and vendors based on real compatibility factors, not just keywords.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1A4A4C] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Create Your Profile</h3>
              <p className="text-gray-600">Complete your detailed business profile with your specific needs, capabilities, and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#1A4A4C] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Matched</h3>
              <p className="text-gray-600">Our AI-powered algorithm analyzes your profile to find the most compatible business partners.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#1A4A4C] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Connect & Grow</h3>
              <p className="text-gray-600">Schedule meetings, exchange messages, and build profitable business relationships.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="inline-block bg-[#1A4A4C] text-white px-8 py-3 rounded-md font-medium hover:bg-[#143638] transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features and other sections remain the same */}
      
      <Footer />
    </div>
  );
}
