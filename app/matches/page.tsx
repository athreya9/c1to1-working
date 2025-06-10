'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardLayout from '../components/layout/DashboardLayout';

interface Match {
  id: string;
  company: string;
  logo?: string;
  industry: string;
  location: string;
  matchScore: number;
  status: 'new' | 'contacted' | 'meeting_scheduled' | 'in_progress' | 'deal_closed' | 'not_interested';
  lastActivity?: string;
  description: string;
  products?: string[];
  contactName?: string;
  contactRole?: string;
  matchReason?: string[];
}

export default function MatchesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [matches, setMatches] = useState<Match[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [industryFilter, setIndustryFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('matchScore');
  
  useEffect(() => {
    // Simulate API call to get matches
    const fetchMatches = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockMatches: Match[] = [
          {
            id: '1',
            company: 'EcoShop',
            logo: '/company-logos/ecoshop.png',
            industry: 'Sustainable Retail',
            location: 'Portland, OR',
            matchScore: 92,
            status: 'new',
            lastActivity: '2 days ago',
            description: 'A leading sustainable products retailer with 12 locations across the Pacific Northwest. Looking for eco-friendly tech solutions.',
            products: ['Smart Home', 'Energy Efficiency', 'Sustainable Electronics'],
            contactName: 'Sarah Johnson',
            contactRole: 'Purchasing Manager',
            matchReason: ['Industry alignment', 'Product category match', 'Geographic proximity']
          },
          {
            id: '2',
            company: 'TechMart',
            logo: '/company-logos/techmart.png',
            industry: 'Electronics Retail',
            location: 'Seattle, WA',
            matchScore: 88,
            status: 'contacted',
            lastActivity: '1 week ago',
            description: 'Major electronics retailer with 50+ stores nationwide. Seeking innovative inventory management solutions.',
            products: ['Inventory Systems', 'POS Solutions', 'Customer Analytics'],
            contactName: 'Michael Chen',
            contactRole: 'Technology Director',
            matchReason: ['Technology needs match', 'Scale compatibility', 'Previous interest in similar products']
          },
          {
            id: '3',
            company: 'GreenRetail',
            logo: '/company-logos/greenretail.png',
            industry: 'Sustainable Retail',
            location: 'San Francisco, CA',
            matchScore: 85,
            status: 'meeting_scheduled',
            lastActivity: '3 days ago',
            description: 'Eco-friendly retail chain focusing on sustainable home goods and personal care products.',
            products: ['Energy Management', 'Sustainable Tech', 'Analytics'],
            contactName: 'Emma Wilson',
            contactRole: 'Sustainability Officer',
            matchReason: ['Sustainability focus', 'Technology needs', 'Growth trajectory']
          },
          {
            id: '4',
            company: 'Urban Gadgets',
            logo: '/company-logos/urbangadgets.png',
            industry: 'Electronics Retail',
            location: 'Chicago, IL',
            matchScore: 82,
            status: 'in_progress',
            lastActivity: '1 day ago',
            description: 'Trendy electronics retailer targeting urban millennials with 15 locations in major cities.',
            products: ['Smart Retail', 'Customer Experience', 'Mobile Integration'],
            contactName: 'David Park',
            contactRole: 'Innovation Lead',
            matchReason: ['Target demographic alignment', 'Innovation focus', 'Complementary product lines']
          },
          {
            id: '5',
            company: 'NatureTech',
            logo: '/company-logos/naturetech.png',
            industry: 'Sustainable Technology',
            location: 'Austin, TX',
            matchScore: 79,
            status: 'deal_closed',
            lastActivity: '2 weeks ago',
            description: 'Specializes in bringing sustainable technology solutions to mainstream retailers.',
            products: ['Energy Solutions', 'Sustainable Electronics', 'Green Tech'],
            contactName: 'Lisa Rodriguez',
            contactRole: 'Partnerships Director',
            matchReason: ['Mission alignment', 'Complementary business model', 'Market expansion opportunity']
          },
          {
            id: '6',
            company: 'FutureMart',
            logo: '/company-logos/futuremart.png',
            industry: 'Department Store',
            location: 'New York, NY',
            matchScore: 76,
            status: 'not_interested',
            lastActivity: '1 month ago',
            description: 'Large department store chain looking to modernize their technology infrastructure.',
            products: ['Store Management', 'Customer Analytics', 'Inventory Systems'],
            contactName: 'Robert Taylor',
            contactRole: 'CTO',
            matchReason: ['Digital transformation needs', 'Scale opportunity', 'Technology gap']
          },
          {
            id: '7',
            company: 'TechHome',
            logo: '/company-logos/techhome.png',
            industry: 'Home Improvement',
            location: 'Denver, CO',
            matchScore: 74,
            status: 'new',
            lastActivity: '4 days ago',
            description: 'Home improvement retailer specializing in smart home technology and installations.',
            products: ['Smart Home', 'IoT Solutions', 'Home Security'],
            contactName: 'Jennifer Adams',
            contactRole: 'Product Manager',
            matchReason: ['Product category alignment', 'Service integration potential', 'Growth market']
          },
          {
            id: '8',
            company: 'ElectroHub',
            logo: '/company-logos/electrohub.png',
            industry: 'Electronics Retail',
            location: 'Miami, FL',
            matchScore: 71,
            status: 'new',
            lastActivity: '1 week ago',
            description: 'Fast-growing electronics retailer with strong online presence and 8 physical locations.',
            products: ['E-commerce Solutions', 'Inventory Management', 'Customer Analytics'],
            contactName: 'Carlos Mendez',
            contactRole: 'Digital Strategy Director',
            matchReason: ['Omnichannel focus', 'Growth trajectory', 'Digital transformation needs']
          }
        ];
        
        setMatches(mockMatches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMatches();
  }, []);

  const filteredMatches = matches.filter(match => {
    // Filter by search query
    if (searchQuery && !match.company.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !match.industry.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !match.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by industry
    if (industryFilter && match.industry !== industryFilter) {
      return false;
    }
    
    // Filter by location
    if (locationFilter && !match.location.includes(locationFilter)) {
      return false;
    }
    
    // Filter by tab
    if (activeTab === 'new' && match.status !== 'new') {
      return false;
    } else if (activeTab === 'contacted' && match.status !== 'contacted') {
      return false;
    } else if (activeTab === 'meetings' && match.status !== 'meeting_scheduled') {
      return false;
    } else if (activeTab === 'active' && !['in_progress', 'meeting_scheduled', 'contacted'].includes(match.status)) {
      return false;
    } else if (activeTab === 'closed' && !['deal_closed', 'not_interested'].includes(match.status)) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    if (sortBy === 'matchScore') {
      return b.matchScore - a.matchScore;
    } else if (sortBy === 'company') {
      return a.company.localeCompare(b.company);
    } else if (sortBy === 'location') {
      return a.location.localeCompare(b.location);
    } else {
      return 0;
    }
  });

  const getStatusBadge = (status: Match['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            New Match
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Contacted
          </span>
        );
      case 'meeting_scheduled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Meeting Scheduled
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            In Progress
          </span>
        );
      case 'deal_closed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Deal Closed
          </span>
        );
      case 'not_interested':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Not Interested
          </span>
        );
      default:
        return null;
    }
  };

  const industries = Array.from(new Set(matches.map(match => match.industry)));
  const locations = Array.from(new Set(matches.map(match => match.location.split(', ')[1])));

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Your Matches</h1>
            <p className="text-gray-600 mt-1">
              Connect with retailers that match your business profile
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors">
              Find New Matches
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <>
            {/* Filters and Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search matches..."
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
                  
                  <select
                    className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                  >
                    <option value="">All Industries</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  
                  <select
                    className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center space-x-2 w-full lg:w-auto">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select
                    className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="matchScore">Match Score</option>
                    <option value="company">Company Name</option>
                    <option value="location">Location</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'all'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    All Matches
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {matches.length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('new')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'new'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    New
                    <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                      {matches.filter(m => m.status === 'new').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('contacted')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'contacted'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Contacted
                    <span className="ml-2 bg-yellow-100 text-yellow-600 py-0.5 px-2 rounded-full text-xs">
                      {matches.filter(m => m.status === 'contacted').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('meetings')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'meetings'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Meetings
                    <span className="ml-2 bg-purple-100 text-purple-600 py-0.5 px-2 rounded-full text-xs">
                      {matches.filter(m => m.status === 'meeting_scheduled').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('active')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'active'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Active
                    <span className="ml-2 bg-green-100 text-green-600 py-0.5 px-2 rounded-full text-xs">
                      {matches.filter(m => ['in_progress', 'meeting_scheduled', 'contacted'].includes(m.status)).length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('closed')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'closed'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Closed
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {matches.filter(m => ['deal_closed', 'not_interested'].includes(m.status)).length}
                    </span>
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Match Cards */}
            <div className="space-y-6">
              {filteredMatches.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No matches found</h3>
                  <p className="mt-1 text-gray-500">Try adjusting your filters or search criteria.</p>
                </div>
              ) : (
                filteredMatches.map((match) => (
                  <div key={match.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center mr-4 overflow-hidden">
                            {match.logo ? (
                              <img src={match.logo} alt={match.company} className="h-full w-full object-contain" />
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold text-gray-900">{match.company}</h2>
                            <div className="flex flex-wrap items-center mt-1">
                              <span className="text-gray-500 text-sm mr-3">{match.industry}</span>
                              <span className="text-gray-500 text-sm mr-3">•</span>
                              <span className="text-gray-500 text-sm">{match.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex flex-col items-end">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-700 mr-2">Match Score:</span>
                            <span className="text-lg font-bold text-[#1A4A4C]">{match.matchScore}%</span>
                          </div>
                          <div className="mt-2">
                            {getStatusBadge(match.status)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-gray-700">{match.description}</p>
                      </div>
                      
                      {match.products && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-700">Interested In:</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {match.products.map((product, index) => (
                              <span key={index} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-[#1A4A4C]/10 text-[#1A4A4C]">
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {match.matchReason && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-700">Why We Matched:</h3>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            {match.matchReason.map((reason, index) => (
                              <li key={index} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Last activity: {match.lastActivity}
                        </div>
                        
                        <div className="mt-4 sm:mt-0 flex space-x-3">
                          <Link 
                            href={`/matches/${match.id}`}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                          >
                            View Details
                          </Link>
                          
                          <Link 
                            href={`/meetings/schedule?company=${match.company}`}
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                          >
                            Schedule Meeting
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {match.contactName && (
                      <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-[#1A4A4C]/10 flex items-center justify-center text-lg font-bold text-[#1A4A4C]">
                            {match.contactName.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{match.contactName}</p>
                            <p className="text-sm text-gray-500">{match.contactRole}</p>
                          </div>
                          <div className="ml-auto">
                            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-[#1A4A4C] bg-[#1A4A4C]/10 hover:bg-[#1A4A4C]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              Contact
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            
            {/* Pagination */}
            {filteredMatches.length > 0 && (
              <div className="mt-8 flex justify-between items-center">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredMatches.length}</span> of{' '}
                  <span className="font-medium">{filteredMatches.length}</span> results
                </div>
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-[#1A4A4C] border-[#1A4A4C] text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
