'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface ProfileCompletionProps {
  userRole?: string;
}

export default function ProfileCompletion({ userRole }: ProfileCompletionProps) {
  const { user } = useAuth();
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // Use user role from auth context if not provided as prop
  const role = userRole || user?.role || 'vendor';
  
  // Mock profile completion data
  const profileSections = [
    { id: 'basic', name: 'Basic Information', completed: true },
    { id: 'company', name: 'Company Details', completed: true },
    { id: 'products', name: role === 'vendor' ? 'Products/Services' : 'Requirements', completed: false },
    { id: 'preferences', name: 'Matching Preferences', completed: true },
    { id: 'industry', name: 'Industry/Niche', completed: false },
    { id: 'verification', name: 'Business Verification', completed: false },
    { id: 'media', name: 'Photos & Media', completed: false },
  ];
  
  useEffect(() => {
    // Simulate loading profile completion data
    const timer = setTimeout(() => {
      const completedSections = profileSections.filter(section => section.completed).length;
      const percentage = Math.round((completedSections / profileSections.length) * 100);
      setCompletionPercentage(percentage);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [profileSections]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#1A4A4C]">Profile Completion</h2>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Complete your profile</span>
            <span className="text-sm font-medium text-[#1A4A4C]">{completionPercentage}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-gradient-to-r from-[#1A4A4C] to-[#C99B2D] h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          
          <div className="space-y-3 mt-4">
            {profileSections.map((section) => (
              <div key={section.id} className="flex items-center">
                <div className={`flex-shrink-0 h-5 w-5 rounded-full border ${
                  section.completed 
                    ? 'bg-[#1A4A4C] border-[#1A4A4C]' 
                    : 'bg-white border-gray-300'
                } flex items-center justify-center`}>
                  {section.completed && (
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`ml-3 text-sm ${
                  section.completed ? 'text-gray-500 line-through' : 'text-gray-700 font-medium'
                }`}>
                  {section.name}
                </span>
                {!section.completed && (
                  <a href={`/profile/${section.id}`} className="ml-auto text-xs text-[#1A4A4C] hover:text-[#143638]">
                    Complete
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <a 
              href="/profile" 
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
            >
              Update Profile
            </a>
          </div>
        </>
      )}
    </div>
  );
}
