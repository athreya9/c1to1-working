'use client';

import React, { useState, useEffect } from 'react';
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
                    if (window && window.Tawk_API) {
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

interface Resource {
  id: string;
  title: string;
  type: 'guide' | 'template' | 'case_study' | 'webinar' | 'podcast';
  description: string;
  thumbnail?: string;
  downloadUrl?: string;
  viewUrl?: string;
  date: string;
  author?: string;
  company?: string;
  tags: string[];
  featured?: boolean;
}

export default function ResourcesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resources, setResources] = useState<Resource[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useEffect(() => {
    // Simulate API call to get resources
    const fetchResources = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockResources: Resource[] = [
          {
            id: '1',
            title: 'Sustainable Retail: A Comprehensive Guide',
            type: 'guide',
            description: 'Learn how to implement sustainable practices in your retail business. This guide covers everything from supply chain management to customer engagement strategies.',
            thumbnail: '/resource-thumbnails/sustainable-retail-guide.jpg',
            downloadUrl: '/resources/guides/sustainable-retail-guide.pdf',
            date: '2025-05-15',
            author: 'Environmental Retail Association',
            tags: ['sustainability', 'retail', 'best practices'],
            featured: true
          },
          {
            id: '2',
            title: 'Vendor Pitch Deck Template',
            type: 'template',
            description: 'A professionally designed pitch deck template for vendors to present their products to retailers. Includes slides for company overview, product details, pricing, and implementation.',
            thumbnail: '/resource-thumbnails/pitch-deck-template.jpg',
            downloadUrl: '/resources/templates/vendor-pitch-deck.pptx',
            date: '2025-04-20',
            tags: ['pitch deck', 'sales', 'presentation']
          },
          {
            id: '3',
            title: 'EcoShop Success Story: Increasing Sales by 35%',
            type: 'case_study',
            description: 'How EcoShop partnered with sustainable vendors to increase their quarterly sales by 35% while reducing their carbon footprint.',
            thumbnail: '/resource-thumbnails/ecoshop-case-study.jpg',
            downloadUrl: '/resources/case-studies/ecoshop-success-story.pdf',
            date: '2025-03-10',
            company: 'EcoShop',
            tags: ['success story', 'sustainability', 'sales growth'],
            featured: true
          },
          {
            id: '4',
            title: 'The Future of Retail Technology',
            type: 'webinar',
            description: 'Join industry experts as they discuss emerging technologies in the retail sector and how they will shape the future of shopping experiences.',
            thumbnail: '/resource-thumbnails/retail-tech-webinar.jpg',
            viewUrl: '/resources/webinars/future-retail-technology',
            date: '2025-06-01',
            author: 'Tech Retail Forum',
            tags: ['technology', 'innovation', 'future trends']
          },
          {
            id: '5',
            title: 'Retail Connections Podcast: Episode 12',
            type: 'podcast',
            description: 'Interview with Sarah Johnson, Purchasing Manager at EcoShop, discussing how to build successful vendor relationships.',
            thumbnail: '/resource-thumbnails/retail-connections-podcast.jpg',
            viewUrl: '/resources/podcasts/retail-connections-ep12',
            date: '2025-05-28',
            author: 'Connect1to1 Media',
            tags: ['podcast', 'vendor relationships', 'purchasing']
          },
          {
            id: '6',
            title: 'Inventory Management Best Practices',
            type: 'guide',
            description: 'A comprehensive guide to modern inventory management techniques for retailers of all sizes.',
            thumbnail: '/resource-thumbnails/inventory-management-guide.jpg',
            downloadUrl: '/resources/guides/inventory-management-best-practices.pdf',
            date: '2025-02-15',
            author: 'Retail Operations Institute',
            tags: ['inventory', 'operations', 'efficiency']
          },
          {
            id: '7',
            title: 'Retail-Vendor Agreement Template',
            type: 'template',
            description: 'A legally-reviewed template for creating agreements between retailers and vendors. Customizable for various product categories and business models.',
            thumbnail: '/resource-thumbnails/agreement-template.jpg',
            downloadUrl: '/resources/templates/retail-vendor-agreement.docx',
            date: '2025-01-10',
            tags: ['legal', 'agreement', 'contract']
          },
          {
            id: '8',
            title: 'TechMart Digital Transformation Case Study',
            type: 'case_study',
            description: 'How TechMart revolutionized their in-store experience by partnering with innovative technology vendors.',
            thumbnail: '/resource-thumbnails/techmart-case-study.jpg',
            downloadUrl: '/resources/case-studies/techmart-digital-transformation.pdf',
            date: '2025-04-05',
            company: 'TechMart',
            tags: ['digital transformation', 'technology', 'customer experience']
          }
        ];
        
        setResources(mockResources);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchResources();
  }, []);

  const filteredResources = resources.filter(resource => {
    // Filter by search query
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !resource.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Filter by tab
    if (activeTab !== 'all' && resource.type !== activeTab) {
      return false;
    }
    
    return true;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getResourceTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'guide':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'template':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      case 'case_study':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'webinar':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'podcast':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="p-4 sm:p-6 md:p-8 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Resources</h1>
            <p className="text-gray-600 mt-1">
              Explore our collection of guides, templates, case studies, and more
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link 
              href="/resources/submit"
              className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors"
            >
              Submit Resource
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <>
            {/* Featured Resources */}
            {featuredResources.length > 0 && activeTab === 'all' && !searchQuery && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A4A4C] mb-4">Featured Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredResources.map((resource) => (
                    <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                      <div className="h-48 bg-gray-200 relative">
                        {resource.thumbnail ? (
                          <img 
                            src={resource.thumbnail} 
                            alt={resource.title} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10">
                            {getResourceTypeIcon(resource.type)}
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A4A4C] text-white">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center mb-2">
                          {getResourceTypeIcon(resource.type)}
                          <span className="ml-2 text-sm font-medium text-gray-500 capitalize">
                            {resource.type.replace('_', ' ')}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1">{resource.description}</p>
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {resource.tags.map((tag, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A4A4C]/10 text-[#1A4A4C]">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">{formatDate(resource.date)}</span>
                            {resource.downloadUrl ? (
                              <Link 
                                href={resource.downloadUrl}
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download
                              </Link>
                            ) : resource.viewUrl ? (
                              <Link 
                                href={resource.viewUrl}
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Filters and Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div className="relative w-full lg:w-64">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A4A4C] focus:border-[#1A4A4C] w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex space-x-1 overflow-x-auto w-full lg:w-auto">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                      activeTab === 'all'
                        ? 'bg-[#1A4A4C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('all')}
                  >
                    All
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                      activeTab === 'guide'
                        ? 'bg-[#1A4A4C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('guide')}
                  >
                    Guides
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                      activeTab === 'template'
                        ? 'bg-[#1A4A4C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('template')}
                  >
                    Templates
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                      activeTab === 'case_study'
                        ? 'bg-[#1A4A4C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('case_study')}
                  >
                    Case Studies
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                      activeTab === 'webinar'
                        ? 'bg-[#1A4A4C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('webinar')}
                  >
                    Webinars
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                      activeTab === 'podcast'
                        ? 'bg-[#1A4A4C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('podcast')}
                  >
                    Podcasts
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resource Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                    <div className="h-40 bg-gray-200 relative">
                      {resource.thumbnail ? (
                        <img 
                          src={resource.thumbnail} 
                          alt={resource.title} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10">
                          {getResourceTypeIcon(resource.type)}
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center mb-2">
                        {getResourceTypeIcon(resource.type)}
                        <span className="ml-2 text-xs font-medium text-gray-500 capitalize">
                          {resource.type.replace('_', ' ')}
                        </span>
                      </div>
                      <h3 className="text-md font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-xs mb-3 flex-1 line-clamp-3">{resource.description}</p>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {resource.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#1A4A4C]/10 text-[#1A4A4C]">
                              {tag}
                            </span>
                          ))}
                          {resource.tags.length > 2 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                              +{resource.tags.length - 2}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{formatDate(resource.date)}</span>
                          {resource.downloadUrl ? (
                            <Link 
                              href={resource.downloadUrl}
                              className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download
                            </Link>
                          ) : resource.viewUrl ? (
                            <Link 
                              href={resource.viewUrl}
                              className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No resources found</h3>
                <p className="text-gray-600">
                  {searchQuery ? `No results found for "${searchQuery}"` : 'No resources available in this category yet.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#1A4A4C] bg-[#1A4A4C]/10 hover:bg-[#1A4A4C]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
