'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation component with working links
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Connect1to1 Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/how-it-works" className="text-[#1A4A4C] font-medium hover:text-[#C99B2D] transition-colors">
              How It Works
            </Link>
            <Link href="/features" className="text-gray-700 font-medium hover:text-[#1A4A4C] transition-colors">
              Features
            </Link>
            <Link href="/plans" className="text-gray-700 font-medium hover:text-[#1A4A4C] transition-colors">
              Plans
            </Link>
            <Link href="/resources" className="text-gray-700 font-medium hover:text-[#1A4A4C] transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-[#1A4A4C] transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 font-medium hover:text-[#1A4A4C] transition-colors">
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors"
            >
              Sign Up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-[#1A4A4C] hover:bg-gray-50">
            How It Works
          </Link>
          <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Features
          </Link>
          <Link href="/plans" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Plans
          </Link>
          <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Resources
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Contact
          </Link>
          <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Login
          </Link>
          <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
