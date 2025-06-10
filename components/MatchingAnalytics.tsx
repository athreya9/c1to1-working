'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface MatchingAnalyticsProps {
  userRole?: string;
}

export default function MatchingAnalytics({ userRole }: MatchingAnalyticsProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<any>(null);
  
  // Use user role from auth context if not provided as prop
  const role = userRole || user?.role || 'vendor';
  
  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => {
      // Mock data for the matching analytics
      const data = {
        matchQuality: role === 'vendor' ? 87 : 92,
        totalMatches: role === 'vendor' ? 24 : 18,
        topIndustries: role === 'vendor' 
          ? ['Electronics Retail', 'Department Stores', 'Specialty Retail'] 
          : ['Tech Hardware', 'Software Solutions', 'Consumer Electronics'],
        matchDistribution: [
          { range: '90-100%', count: role === 'vendor' ? 8 : 6, color: '#1A4A4C' },
          { range: '80-89%', count: role === 'vendor' ? 10 : 8, color: '#2D6E70' },
          { range: '70-79%', count: role === 'vendor' ? 4 : 3, color: '#5A9496' },
          { range: '< 70%', count: role === 'vendor' ? 2 : 1, color: '#8BBABB' }
        ]
      };
      
      setChartData(data);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [role]);
  
  // Calculate the maximum bar width for scaling
  const maxCount = chartData?.matchDistribution?.reduce((max: number, item: any) => 
    Math.max(max, item.count), 0) || 0;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#1A4A4C]">Matching Analytics</h2>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-24 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      ) : (
        <>
          {/* Match Quality Gauge */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Match Quality Score</span>
              <span className="text-sm font-medium text-[#1A4A4C]">{chartData.matchQuality}%</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1A4A4C] to-[#C99B2D] rounded-full"
                style={{ width: `${chartData.matchQuality}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Based on your profile completeness and matching preferences
            </p>
          </div>
          
          {/* Match Distribution Chart */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Match Distribution</h3>
            <div className="space-y-2">
              {chartData.matchDistribution.map((item: any, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="text-xs w-16 text-gray-600">{item.range}</span>
                  <div className="flex-grow mx-2">
                    <div className="relative h-6 bg-gray-100 rounded">
                      <div 
                        className="absolute top-0 left-0 h-full rounded transition-all duration-500 ease-out"
                        style={{ 
                          width: `${(item.count / maxCount) * 100}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium w-6 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Industries */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Top {role === 'vendor' ? 'Retailer' : 'Vendor'} Industries Matched
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {chartData.topIndustries.map((industry: string, index: number) => (
                <div 
                  key={index} 
                  className="px-3 py-2 bg-gray-50 border-l-4 rounded text-sm"
                  style={{ borderLeftColor: `hsl(184, 45%, ${20 + (index * 10)}%)` }}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
          
          {/* View Full Analytics Link */}
          <div className="mt-6 text-right">
            <a href="/analytics" className="text-sm font-medium text-[#1A4A4C] hover:text-[#143638]">
              View Detailed Analytics &rarr;
            </a>
          </div>
        </>
      )}
    </div>
  );
}
