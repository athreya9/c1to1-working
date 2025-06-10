'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // Determine if the header should have a transparent background (e.g., on the homepage hero)
  const isTransparent = pathname === '/'; 

  useEffect(() => {
    // Check login status (simplified for demo)
    const checkLoginStatus = () => {
      const token = localStorage.getItem('c1to1_token'); 
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const navigation: NavLink[] = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Features', href: '/features' },
    { name: 'Plans', href: '/plans' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine button styles based on login state and transparency
  const loginButtonClass = isTransparent 
    ? 'text-white hover:text-gray-200'
    : 'text-[#1A4A4C] hover:text-[#C99B2D]';
  
  const signupButtonClass = isTransparent
    ? 'border border-white text-white hover:bg-white hover:text-[#1A4A4C]'
    : 'bg-[#1A4A4C] text-white hover:bg-[#143638]';

  return (
    // Apply conditional background and text color based on transparency
    <header className={`${isTransparent ? 'absolute' : 'sticky'} top-0 left-0 w-full z-50 transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className={`flex w-full items-center justify-between py-4 ${isTransparent ? '' : 'border-b border-gray-200 lg:border-none'}`}>
          <div className="flex items-center">
            <Link href="/" className="flex">
              <span className="sr-only">Connect1to1</span>
              {/* Use white logo on transparent background */}
              <Image
                src={isTransparent ? "/logo-white.png" : "/logo.png"}
                alt="Connect1to1 Logo"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority // Prioritize logo loading
              />
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isTransparent 
                      ? 'text-white hover:text-[#C99B2D]' 
                      : 'text-[#1A4A4C] hover:text-[#C99B2D]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className={`px-4 py-2 text-sm font-medium transition-colors ${loginButtonClass}`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-colors ${signupButtonClass}`}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-colors ${signupButtonClass}`}
              >
                Dashboard
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 ${isTransparent ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1A4A4C]`}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Panel */} 
        {isMenuOpen && (
           <div className={`md:hidden absolute top-full left-0 w-full ${isTransparent ? 'bg-[#1A4A4C]' : 'bg-white'} shadow-lg rounded-b-md`}>
             <div className="space-y-1 px-2 pt-2 pb-3">
               {navigation.map((link) => (
                 <Link
                   key={link.name}
                   href={link.href}
                   className={`block rounded-md px-3 py-2 text-base font-medium ${isTransparent ? 'text-gray-200 hover:bg-white/10 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-[#1A4A4C]'}`}
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                 >
                   {link.name}
                 </Link>
               ))}
             </div>
             <div className="border-t border-gray-200/50 px-5 py-4">
               {!isLoggedIn ? (
                 <div className="flex items-center space-x-4">
                   <Link
                     href="/login"
                     className={`flex-1 text-center rounded-md px-3 py-2 text-base font-medium ${isTransparent ? 'text-gray-200 hover:bg-white/10 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-[#1A4A4C]'}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Login
                   </Link>
                   <Link
                     href="/signup"
                     className={`flex-1 text-center rounded-md px-3 py-2 text-base font-medium ${isTransparent ? 'bg-white/90 text-[#1A4A4C] hover:bg-white' : 'bg-[#1A4A4C] text-white hover:bg-opacity-90'}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Sign Up
                   </Link>
                 </div>
               ) : (
                 <Link
                   href="/dashboard"
                   className={`block text-center rounded-md px-3 py-2 text-base font-medium ${isTransparent ? 'bg-white/90 text-[#1A4A4C] hover:bg-white' : 'bg-[#1A4A4C] text-white hover:bg-opacity-90'}`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   Go to Dashboard
                 </Link>
               )}
             </div>
           </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
