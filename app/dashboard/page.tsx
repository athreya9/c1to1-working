'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProfileCompletion from '../../components/ProfileCompletion';
import MatchingAnalytics from '../../components/MatchingAnalytics';
import TrendingNews from '../../components/TrendingNews';
import IndustrySelector from '../../components/IndustrySelector';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();
  const [userType, setUserType] = useState(user?.role || 'vendor'); // 'vendor' or 'retailer'

  // Toggle between vendor and retailer view (demo mode)
  const toggleUserType = () => {
    setUserType(userType === 'vendor' ? 'retailer' : 'vendor');
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">
              Welcome to your Connect1to1 Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              You're currently viewing as: <span className="font-semibold">{userType === 'vendor' ? 'Vendor' : 'Retailer'}</span>
            </p>
          </div>
          <button
            onClick={toggleUserType}
            className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-[#1A4A4C] rounded-md text-[#1A4A4C] hover:bg-[#1A4A4C] hover:text-white transition-colors"
          >
            Switch to {userType === 'vendor' ? 'Retailer' : 'Vendor'}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/matches" className="bg-gradient-to-br from-[#1A4A4C]/90 to-[#1A4A4C] rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Matches</p>
                <p className="text-3xl font-bold">20</p>
                <p className="text-sm text-white/70 mt-1">+12% vs last month</p>
              </div>
            </div>
          </Link>

          <Link href="/meetings" className="bg-gradient-to-br from-[#1A4A4C]/90 to-[#1A4A4C] rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Meetings</p>
                <p className="text-3xl font-bold">9</p>
                <p className="text-sm text-white/70 mt-1">+5% vs last month</p>
              </div>
            </div>
          </Link>

          <Link href="/messages" className="bg-gradient-to-br from-[#1A4A4C]/90 to-[#1A4A4C] rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Messages</p>
                <p className="text-3xl font-bold">34</p>
                <p className="text-sm text-white/70 mt-1">+18% vs last month</p>
              </div>
            </div>
          </Link>

          <Link href="/profile" className="bg-gradient-to-br from-[#1A4A4C]/90 to-[#1A4A4C] rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Profile Views</p>
                <p className="text-3xl font-bold">65</p>
                <p className="text-sm text-white/70 mt-1">+24% vs last month</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-[#1A4A4C]">Overview</h2>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/meetings/schedule" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="rounded-full bg-[#1A4A4C]/10 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Schedule Meeting</p>
                      <p className="text-sm text-gray-500">Set up a new meeting with a match</p>
                    </div>
                  </Link>

                  <Link href="/analytics" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="rounded-full bg-[#1A4A4C]/10 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">View Analytics</p>
                      <p className="text-sm text-gray-500">Check your performance metrics</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <Link href="/matches/details/123" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-100 p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">New Match: EcoShop</p>
                        <p className="text-sm text-gray-500">Matched 2 hours ago · 92% compatibility</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/messages/thread/456" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="rounded-full bg-blue-100 p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">New Message from GreenRetail</p>
                        <p className="text-sm text-gray-500">Received 5 hours ago</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/profile/views" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="rounded-full bg-purple-100 p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Profile viewed by 3 new retailers</p>
                        <p className="text-sm text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="mt-4 text-right">
                  <Link href="/activity" className="text-[#1A4A4C] hover:text-[#143638] font-medium text-sm">
                    View All Activity →
                  </Link>
                </div>
              </div>
            </div>

            {/* Matching Analytics */}
            <MatchingAnalytics />

            {/* Industry Selector */}
            <IndustrySelector />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <ProfileCompletion />

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Recommendations</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Recommended Matches</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800">EcoShop</p>
                          <p className="text-sm text-gray-500">Sustainable retail chain</p>
                          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            92% Match
                          </div>
                        </div>
                        <Link href="/matches/details/123" className="text-[#1A4A4C] hover:text-[#143638] text-sm font-medium">
                          View details
                        </Link>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800">GreenRetail</p>
                          <p className="text-sm text-gray-500">Eco-friendly product retailer</p>
                          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            88% Match
                          </div>
                        </div>
                        <Link href="/matches/details/456" className="text-[#1A4A4C] hover:text-[#143638] text-sm font-medium">
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <Link href="/matches" className="text-[#1A4A4C] hover:text-[#143638] font-medium text-sm">
                      View All Matches →
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Suggested Actions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-[#C99B2D]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <Link href="/profile/edit" className="ml-3 text-gray-700 hover:text-[#1A4A4C]">
                        Complete your company profile
                      </Link>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-[#C99B2D]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <Link href="/profile/documents" className="ml-3 text-gray-700 hover:text-[#1A4A4C]">
                        Upload product catalog
                      </Link>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-[#C99B2D]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <Link href="/resources" className="ml-3 text-gray-700 hover:text-[#1A4A4C]">
                        Explore resources for better matching
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trending News */}
            <TrendingNews />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
