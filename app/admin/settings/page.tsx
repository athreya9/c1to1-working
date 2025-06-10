'use client';

import React from 'react';
import Link from 'next/link';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function AdminSettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Platform Settings</h1>
            <p className="text-gray-600 mt-1">
              Configure and customize the Connect1to1 platform
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">General Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="platform-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Platform Name
                </label>
                <input
                  type="text"
                  id="platform-name"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="Connect1to1"
                />
              </div>
              
              <div>
                <label htmlFor="platform-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Platform Description
                </label>
                <textarea
                  id="platform-description"
                  rows={3}
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="Connect1to1 is a B2B matchmaking platform that connects vendors with retailers."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="support@connect1to1.com"
                />
              </div>
              
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                  Default Timezone
                </label>
                <select
                  id="timezone"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                  defaultValue="America/Los_Angeles"
                >
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                  <option value="Europe/Paris">Central European Time (CET)</option>
                  <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                  <option value="Australia/Sydney">Australian Eastern Time (AET)</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Appearance Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Appearance</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo
                </label>
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-md bg-[#1A4A4C]/10 flex items-center justify-center mr-4">
                    <img src="/Connect1to1-Logo.png" alt="Logo" className="h-12 w-12 object-contain" />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                    Change Logo
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Favicon
                </label>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-[#1A4A4C]/10 flex items-center justify-center mr-4">
                    <img src="/favicon.ico" alt="Favicon" className="h-6 w-6 object-contain" />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                    Change Favicon
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Color
                </label>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-[#1A4A4C] mr-4"></div>
                  <input
                    type="text"
                    className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-32 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    defaultValue="#1A4A4C"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secondary Color
                </label>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-[#C99B2D] mr-4"></div>
                  <input
                    type="text"
                    className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-32 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    defaultValue="#C99B2D"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Email Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="smtp-host" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Host
                </label>
                <input
                  type="text"
                  id="smtp-host"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="smtp.connect1to1.com"
                />
              </div>
              
              <div>
                <label htmlFor="smtp-port" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Port
                </label>
                <input
                  type="text"
                  id="smtp-port"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="587"
                />
              </div>
              
              <div>
                <label htmlFor="smtp-username" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Username
                </label>
                <input
                  type="text"
                  id="smtp-username"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="notifications@connect1to1.com"
                />
              </div>
              
              <div>
                <label htmlFor="smtp-password" className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Password
                </label>
                <input
                  type="password"
                  id="smtp-password"
                  className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue="••••••••••••••••"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="use-ssl"
                  name="use-ssl"
                  type="checkbox"
                  className="h-4 w-4 text-[#1A4A4C] focus:ring-[#1A4A4C] border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="use-ssl" className="ml-2 block text-sm text-gray-900">
                  Use SSL/TLS
                </label>
              </div>
              
              <div>
                <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                  Test Email Configuration
                </button>
              </div>
            </div>
          </div>
          
          {/* Integration Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Integrations</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Google Analytics</h3>
                      <p className="text-sm text-gray-500">Track user behavior and website performance</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-sm font-medium text-green-600">Connected</span>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                      Configure
                    </button>
                  </div>
                </div>
                
                <div className="pl-14">
                  <label htmlFor="ga-tracking-id" className="block text-sm font-medium text-gray-700 mb-1">
                    Tracking ID
                  </label>
                  <input
                    type="text"
                    id="ga-tracking-id"
                    className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    defaultValue="UA-123456789-1"
                  />
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Tawk.to Live Chat</h3>
                      <p className="text-sm text-gray-500">Provide real-time support to your users</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-sm font-medium text-green-600">Connected</span>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                      Configure
                    </button>
                  </div>
                </div>
                
                <div className="pl-14">
                  <label htmlFor="tawkto-site-id" className="block text-sm font-medium text-gray-700 mb-1">
                    Site ID
                  </label>
                  <input
                    type="text"
                    id="tawkto-site-id"
                    className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    defaultValue="683e9e3df71206190e2df7bf"
                  />
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-purple-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Mixpanel</h3>
                      <p className="text-sm text-gray-500">Advanced user behavior analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-sm font-medium text-green-600">Connected</span>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                      Configure
                    </button>
                  </div>
                </div>
                
                <div className="pl-14">
                  <label htmlFor="mixpanel-token" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Token
                  </label>
                  <input
                    type="text"
                    id="mixpanel-token"
                    className="mt-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    defaultValue="a1b2c3d4e5f6g7h8i9j0"
                  />
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add New Integration
                </button>
              </div>
            </div>
          </div>
          
          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1A4A4C] mb-6">Security</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Require 2FA for all admin users</p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C] bg-[#1A4A4C]"
                    role="switch"
                    aria-checked="true"
                  >
                    <span className="sr-only">Use setting</span>
                    <span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Password Requirements</h3>
                  <p className="text-sm text-gray-500">Enforce strong password policy</p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C] bg-[#1A4A4C]"
                    role="switch"
                    aria-checked="true"
                  >
                    <span className="sr-only">Use setting</span>
                    <span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Session Timeout</h3>
                  <p className="text-sm text-gray-500">Automatically log out inactive users</p>
                </div>
                <div>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>4 hours</option>
                    <option>8 hours</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Login Attempts</h3>
                  <p className="text-sm text-gray-500">Maximum failed login attempts before lockout</p>
                </div>
                <div>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md">
                    <option>3 attempts</option>
                    <option>5 attempts</option>
                    <option>10 attempts</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]">
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
