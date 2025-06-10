'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProfilePictureUploader from '../../../components/ProfilePictureUploader';
import FileUpload from '../../../components/FileUpload';

interface ProfileData {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  bio: string;
  website: string;
  location: string;
  industry: string;
  profilePicture?: string;
  completionPercentage: number;
}

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('general');
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    bio: '',
    website: '',
    location: '',
    industry: '',
    completionPercentage: 0
  });
  
  // Form refs for validation
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Simulate API call to get profile data
    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProfileData({
          name: 'Jamie Smith',
          company: 'Tech Innovations Inc.',
          email: 'jamie@techinnovations.com',
          phone: '(555) 456-7890',
          role: 'Sales Director',
          bio: 'Technology innovator with a passion for connecting vendors with the right retail partners. Specializing in inventory management systems and customer analytics platforms.',
          website: 'www.techinnovations.com',
          location: 'San Francisco, CA',
          industry: 'Technology',
          profilePicture: '/profile-pics/jamie.jpg',
          completionPercentage: 85
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProfileData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!nameRef.current?.value) {
      alert('Name is required');
      nameRef.current?.focus();
      return;
    }
    
    if (!emailRef.current?.value) {
      alert('Email is required');
      emailRef.current?.focus();
      return;
    }
    
    setIsSaving(true);
    
    try {
      // In a real app, this would be an API call to save the profile
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update completion percentage
      const newCompletionPercentage = calculateCompletionPercentage(profileData);
      setProfileData(prev => ({
        ...prev,
        completionPercentage: newCompletionPercentage
      }));
      
      // Show success message
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        successMessage.classList.remove('hidden');
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 3000);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const calculateCompletionPercentage = (data: ProfileData): number => {
    const fields = [
      data.name,
      data.company,
      data.email,
      data.phone,
      data.role,
      data.bio,
      data.website,
      data.location,
      data.industry,
      data.profilePicture
    ];
    
    const filledFields = fields.filter(field => field && field.trim() !== '').length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const handleProfilePictureUpload = (imageUrl: string) => {
    setProfileData(prev => ({
      ...prev,
      profilePicture: imageUrl
    }));
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Your Profile</h1>
            <p className="text-gray-600 mt-1">
              Manage your personal and company information
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 mb-4">
                      {profileData.profilePicture ? (
                        <img 
                          src={profileData.profilePicture} 
                          alt="Profile" 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#1A4A4C]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <button 
                      className="absolute bottom-0 right-0 bg-[#1A4A4C] text-white rounded-full p-2 shadow-md hover:bg-[#143638] transition-colors"
                      onClick={() => {
                        // In a real app, this would open a file picker
                        alert('This would open a file picker in a real app');
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900">{profileData.name}</h2>
                  <p className="text-gray-500">{profileData.role} at {profileData.company}</p>
                  
                  <div className="mt-6 w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                      <span className="text-sm font-medium text-gray-700">{profileData.completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#1A4A4C] h-2 rounded-full" 
                        style={{ width: `${profileData.completionPercentage}%` }}
                      ></div>
                    </div>
                    {profileData.completionPercentage < 100 && (
                      <p className="mt-2 text-xs text-gray-500">
                        Complete your profile to improve match quality
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Sections</h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'general'
                        ? 'bg-[#1A4A4C]/10 text-[#1A4A4C]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`mr-3 h-5 w-5 ${activeTab === 'general' ? 'text-[#1A4A4C]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    General Information
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('company')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'company'
                        ? 'bg-[#1A4A4C]/10 text-[#1A4A4C]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`mr-3 h-5 w-5 ${activeTab === 'company' ? 'text-[#1A4A4C]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Company Details
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('preferences')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'preferences'
                        ? 'bg-[#1A4A4C]/10 text-[#1A4A4C]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`mr-3 h-5 w-5 ${activeTab === 'preferences' ? 'text-[#1A4A4C]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Preferences
                  </button>
                  
                  <Link
                    href="/profile/documents"
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Documents
                  </Link>
                  
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'security'
                        ? 'bg-[#1A4A4C]/10 text-[#1A4A4C]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`mr-3 h-5 w-5 ${activeTab === 'security' ? 'text-[#1A4A4C]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Security
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Success Message */}
                <div id="success-message" className="hidden mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline"> Your profile has been updated.</span>
                </div>
                
                {activeTab === 'general' && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">General Information</h2>
                    <form onSubmit={handleSaveProfile}>
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name *
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              ref={nameRef}
                              value={profileData.name}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address *
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              ref={emailRef}
                              value={profileData.email}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              value={profileData.phone}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Job Title
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="role"
                              id="role"
                              value={profileData.role}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-6">
                          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                            Bio
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="bio"
                              name="bio"
                              rows={4}
                              value={profileData.bio}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Tell potential business partners about yourself and your role"
                            ></textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description for your profile. URLs are hyperlinked.
                          </p>
                        </div>
                        
                        <div className="sm:col-span-6">
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="location"
                              id="location"
                              value={profileData.location}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="City, State, Country"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                          disabled={isSaving}
                        >
                          {isSaving ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Saving...
                            </>
                          ) : 'Save'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {activeTab === 'company' && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Company Details</h2>
                    <form onSubmit={handleSaveProfile}>
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="company"
                              id="company"
                              value={profileData.company}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                            Website
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="website"
                              id="website"
                              value={profileData.website}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="www.example.com"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                            Industry
                          </label>
                          <div className="mt-1">
                            <select
                              id="industry"
                              name="industry"
                              value={profileData.industry}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="">Select an industry</option>
                              <option value="Technology">Technology</option>
                              <option value="Retail">Retail</option>
                              <option value="Manufacturing">Manufacturing</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Finance">Finance</option>
                              <option value="Education">Education</option>
                              <option value="Food & Beverage">Food & Beverage</option>
                              <option value="Hospitality">Hospitality</option>
                              <option value="Real Estate">Real Estate</option>
                              <option value="Transportation">Transportation</option>
                              <option value="Energy">Energy</option>
                              <option value="Media & Entertainment">Media & Entertainment</option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="Construction">Construction</option>
                              <option value="Telecommunications">Telecommunications</option>
                              <option value="Pharmaceuticals">Pharmaceuticals</option>
                              <option value="Automotive">Automotive</option>
                              <option value="Aerospace">Aerospace</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                          <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">
                            Company Size
                          </label>
                          <div className="mt-1">
                            <select
                              id="company-size"
                              name="company-size"
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option>1-10 employees</option>
                              <option>11-50 employees</option>
                              <option>51-200 employees</option>
                              <option>201-500 employees</option>
                              <option>501-1000 employees</option>
                              <option>1001-5000 employees</option>
                              <option>5001+ employees</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="sm:col-span-6">
                          <label htmlFor="company-description" className="block text-sm font-medium text-gray-700">
                            Company Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="company-description"
                              name="company-description"
                              rows={4}
                              className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Describe your company, products, and services"
                            ></textarea>
                          </div>
                        </div>
                        
                        <div className="sm:col-span-6">
                          <label className="block text-sm font-medium text-gray-700">
                            Company Logo
                          </label>
                          <div className="mt-1 flex items-center">
                            <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <button
                              type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Change
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {activeTab === 'preferences' && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Matching Preferences</h2>
                    <form>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">Business Type</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Select the types of businesses you want to connect with
                          </p>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="retailers"
                                name="business-type"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="retailers" className="ml-3 block text-sm font-medium text-gray-700">
                                Retailers
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="wholesalers"
                                name="business-type"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="wholesalers" className="ml-3 block text-sm font-medium text-gray-700">
                                Wholesalers
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="manufacturers"
                                name="business-type"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                              />
                              <label htmlFor="manufacturers" className="ml-3 block text-sm font-medium text-gray-700">
                                Manufacturers
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="distributors"
                                name="business-type"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="distributors" className="ml-3 block text-sm font-medium text-gray-700">
                                Distributors
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-medium text-gray-900">Location Preferences</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Select your preferred business locations
                          </p>
                          <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                            <div className="flex items-center">
                              <input
                                id="local"
                                name="location-preference"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="local" className="ml-3 block text-sm font-medium text-gray-700">
                                Local (within 50 miles)
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="regional"
                                name="location-preference"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="regional" className="ml-3 block text-sm font-medium text-gray-700">
                                Regional (within state/province)
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="national"
                                name="location-preference"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="national" className="ml-3 block text-sm font-medium text-gray-700">
                                National
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="international"
                                name="location-preference"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                              />
                              <label htmlFor="international" className="ml-3 block text-sm font-medium text-gray-700">
                                International
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-medium text-gray-900">Industry Focus</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Select industries you want to focus on
                          </p>
                          <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                            <div className="flex items-center">
                              <input
                                id="technology"
                                name="industry-focus"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="technology" className="ml-3 block text-sm font-medium text-gray-700">
                                Technology
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="retail"
                                name="industry-focus"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="retail" className="ml-3 block text-sm font-medium text-gray-700">
                                Retail
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="healthcare"
                                name="industry-focus"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                              />
                              <label htmlFor="healthcare" className="ml-3 block text-sm font-medium text-gray-700">
                                Healthcare
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="finance"
                                name="industry-focus"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                              />
                              <label htmlFor="finance" className="ml-3 block text-sm font-medium text-gray-700">
                                Finance
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="manufacturing"
                                name="industry-focus"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="manufacturing" className="ml-3 block text-sm font-medium text-gray-700">
                                Manufacturing
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="food-beverage"
                                name="industry-focus"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                              />
                              <label htmlFor="food-beverage" className="ml-3 block text-sm font-medium text-gray-700">
                                Food & Beverage
                              </label>
                            </div>
                          </div>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="text-sm text-[#1A4A4C] hover:text-[#143638] font-medium"
                            >
                              Show more industries
                            </button>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-medium text-gray-900">Communication Preferences</h3>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="email-notifications"
                                name="email-notifications"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="email-notifications" className="ml-3 block text-sm font-medium text-gray-700">
                                Email notifications for new matches
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="meeting-reminders"
                                name="meeting-reminders"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="meeting-reminders" className="ml-3 block text-sm font-medium text-gray-700">
                                Meeting reminders
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="message-notifications"
                                name="message-notifications"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                                defaultChecked
                              />
                              <label htmlFor="message-notifications" className="ml-3 block text-sm font-medium text-gray-700">
                                Message notifications
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="newsletter"
                                name="newsletter"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                              />
                              <label htmlFor="newsletter" className="ml-3 block text-sm font-medium text-gray-700">
                                Weekly newsletter and platform updates
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Security Settings</h2>
                    <form>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
                          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                            <div>
                              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                                Current Password
                              </label>
                              <div className="mt-1">
                                <input
                                  type="password"
                                  name="current-password"
                                  id="current-password"
                                  className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                            
                            <div className="sm:col-span-2">
                              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                                New Password
                              </label>
                              <div className="mt-1">
                                <input
                                  type="password"
                                  name="new-password"
                                  id="new-password"
                                  className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                            
                            <div className="sm:col-span-2">
                              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                Confirm New Password
                              </label>
                              <div className="mt-1">
                                <input
                                  type="password"
                                  name="confirm-password"
                                  id="confirm-password"
                                  className="shadow-sm focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Update Password
                            </button>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Add an extra layer of security to your account
                          </p>
                          
                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              Enable Two-Factor Authentication
                            </button>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-medium text-gray-900">Sessions</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Manage your active sessions
                          </p>
                          
                          <div className="mt-4 space-y-4">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Current Session</p>
                                  <p className="text-xs text-gray-500">San Francisco, CA • Chrome on Windows</p>
                                  <p className="text-xs text-gray-500">Started 2 hours ago</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Active
                                </span>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-md">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Mobile App</p>
                                  <p className="text-xs text-gray-500">iOS • iPhone</p>
                                  <p className="text-xs text-gray-500">Last active 3 days ago</p>
                                </div>
                                <button
                                  type="button"
                                  className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                  Revoke
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <button
                              type="button"
                              className="text-sm text-red-600 hover:text-red-500 font-medium"
                            >
                              Sign out of all sessions
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
