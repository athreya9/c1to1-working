import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and company info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Connect1to1 Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Connect 1to1 is an exclusive matchmaking platform designed to connect vendors and retailers in a personalized, one-to-one way.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                Connect 1to1<br />
                92 Park Groton Pl,<br />
                San Jose, CA 95136
              </p>
              <p className="mt-2 text-sm text-gray-300">
                <a href="tel:+19095003345" className="hover:text-[#C99B2D]">(909) 500-3345</a><br />
                <a href="tel:+14086577085" className="hover:text-[#C99B2D]">(408) 657-7085</a>
              </p>
              <p className="mt-2 text-sm text-gray-300">
                <a href="mailto:info@c1to1.com" className="hover:text-[#C99B2D]">info@c1to1.com</a>
              </p>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/podcast-application" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Podcast Guest
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/resources" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Resource Center
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Guides & Tutorials
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/webinars" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-300 hover:text-[#C99B2D]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social links and copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 md:order-2">
            <a href="https://www.linkedin.com/company/c1to1/" className="text-gray-400 hover:text-[#C99B2D]" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C99B2D]">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Connect 1to1. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
