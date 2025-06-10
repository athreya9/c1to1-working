
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Header, Footer } from '../../../components/layout/SharedComponents'; // Corrected import path

// Define all categories and options
const logisticsCategories = [
  "Third Party Logistics", "Packing Machines", "Packaging Solutions", "Picking & Handling",
  "Goods-to-man Robots", "WMS & OMS", "Warehouse Equipment", "Inventory Management",
  "Same Day Delivery", "Economy Delivery", "Click & Collect", "Returns",
  "Cross-Border Shipping", "Reverse Logistics", "Supply Chain Visibility", "Freight Forwarding",
  "Last-Mile Delivery", "Route Optimization", "Delivery Management Platforms",
  "Cold Chain Logistics", "Fleet Management"
];

const saasSoftwareCategories = [
  "Shipping & Returns Automation", "Inventory & Stock Management", "E-commerce Integration Tools",
  "Order Management Software", "Customer Service Automation", "Analytics & Performance Dashboards",
  "POS & Retail Systems", "Marketing Automation & CRM", "Computer Vision Tools",
  "AI Chatbots & Virtual Assistants", "Pricing Optimization Software", "Marketplace Integrators"
];

const modernTechCategories = [
  "AI-powered Inventory Forecasting", "Blockchain for Supply Chain Transparency",
  "IoT Sensors for Inventory Tracking", "Augmented Reality Shopping Experiences",
  "Voice Commerce Solutions", "Subscription Management Platforms", "Omnichannel Retail Solutions",
  "Personalization Engines", "Sustainable Packaging Solutions", "Digital Shelf Analytics",
  "Product Information Management (PIM)", "Headless Commerce Platforms",
  "Progressive Web Apps (PWA)", "Mobile Commerce Solutions", "Social Commerce Platforms",
  "Visual Search Technology", "Voice Search Optimization", "Contactless Payment Solutions",
  "Buy Now Pay Later (BNPL) Services", "Loyalty Program Management", "Customer Data Platforms (CDP)"
];

const companySizeCategories = [
  "Micro (1-9 employees)", "Small (10-49 employees)", "Medium (50-249 employees)",
  "Large (250-999 employees)", "Enterprise (1000+ employees)"
];

const revenueRangeCategories = [
  "Under $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M - $10M",
  "$10M - $50M", "$50M - $100M", "$100M - $500M", "$500M - $1B", "Over $1B"
];

const geographicReachCategories = ["Local", "Regional", "National", "International", "Global"];
const businessModelCategories = ["B2B", "B2C", "D2C", "Marketplace", "Hybrid"];

interface VendorProfileData {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  bio: string;
  website: string;
  companySize: string;
  annualRevenue: string;
  yearFounded: string;
  headquarters: string;
  additionalLocations: string[];
  logisticsServices: string[];
  saasSoftwareOffered: string[];
  modernTechnologiesUsed: string[];
  keyProducts: { name: string; description: string; retailPrice: string; minimumOrder: string }[];
  fulfillmentCapabilities: string[];
  productionCapacity: string;
  certifications: string[];
  preferredRetailerSize: string[];
  preferredRetailerTypes: string[];
  preferredGeographies: string[];
  painPointsSolvedByVendor: string; // Changed from array to string for detailed text
  solutionsOffered: string; // New field for detailed solutions
  uniqueSellingPoints: string[];
  caseStudies: { retailerName: string; challenge: string; solution: string; results: string }[];
  profilePicture?: string;
  completionPercentage: number;
  // ICP Fields
  yearsInBusiness: string;
  growthRate: string;
  techAdoptionLevel: string;
  decisionMakingProcess: string;
  budgetCycle: string;
  currentTechStack: string;
  integrationRequirements: string;
  complianceRequirements: string;
  sustainabilityGoals: string;
}

export default function VendorProfilePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('general');
  const [profileData, setProfileData] = useState<VendorProfileData>({
    name: '', company: '', email: '', phone: '', role: '', bio: '', website: '',
    companySize: '', annualRevenue: '', yearFounded: '', headquarters: '', additionalLocations: [],
    logisticsServices: [], saasSoftwareOffered: [], modernTechnologiesUsed: [],
    keyProducts: [], fulfillmentCapabilities: [], productionCapacity: '', certifications: [],
    preferredRetailerSize: [], preferredRetailerTypes: [], preferredGeographies: [],
    painPointsSolvedByVendor: '', solutionsOffered: '', uniqueSellingPoints: [], caseStudies: [],
    completionPercentage: 0,
    yearsInBusiness: '', growthRate: '', techAdoptionLevel: '', decisionMakingProcess: '',
    budgetCycle: '', currentTechStack: '', integrationRequirements: '', complianceRequirements: '',
    sustainabilityGoals: '',
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setProfileData({
        name: 'Jamie Smith',
        company: 'Tech Innovations Inc.',
        email: 'jamie@techinnovations.com',
        phone: '(555) 456-7890',
        role: 'Sales Director',
        bio: 'Technology innovator with a passion for connecting vendors with the right retail partners. Specializing in inventory management systems and customer analytics platforms.',
        website: 'www.techinnovations.com',
        companySize: 'Medium (50-249 employees)',
        annualRevenue: '$5M - $10M',
        yearFounded: '2018',
        headquarters: 'San Francisco, CA',
        additionalLocations: ['Austin, TX', 'Seattle, WA'],
        logisticsServices: ["Inventory Management", "Last-Mile Delivery"],
        saasSoftwareOffered: ["Inventory & Stock Management", "Analytics & Performance Dashboards"],
        modernTechnologiesUsed: ["AI-powered Inventory Forecasting", "IoT Sensors for Inventory Tracking"],
        keyProducts: [
          { name: 'RetailFlow Inventory System', description: 'AI-powered inventory management solution for mid-size retailers', retailPrice: '$499/month', minimumOrder: '5 licenses' },
          { name: 'CustomerInsight Analytics', description: 'Customer behavior analytics platform with predictive purchasing patterns', retailPrice: '$299/month', minimumOrder: '1 license' }
        ],
        fulfillmentCapabilities: ['Cloud-based deployment', 'On-premise installation', 'API integration'],
        productionCapacity: 'Unlimited SaaS delivery',
        certifications: ['ISO 27001', 'SOC 2', 'PCI DSS'],
        preferredRetailerSize: ['Medium (50-249 employees)', 'Large (250-999 employees)'],
        preferredRetailerTypes: ['Department Stores', 'Specialty Retail', 'Electronics'],
        preferredGeographies: ['National', 'International'],
        painPointsSolvedByVendor: 'We help retailers overcome challenges related to inventory stockouts, poor visibility into customer purchasing patterns, inefficient order fulfillment processes, and lack of data-driven merchandising decisions. Our solutions provide actionable insights and automation to streamline operations and boost profitability.',
        solutionsOffered: 'Our core solutions include RetailFlow, an AI-powered inventory management system, and CustomerInsight, an advanced customer analytics platform. We also offer custom integration services and dedicated support to ensure seamless adoption and maximum ROI for our retail partners.',
        uniqueSellingPoints: ['AI-powered demand forecasting with 95% accuracy', 'Seamless integration with all major POS systems', 'Implementation in under 2 weeks', '24/7 dedicated customer support'],
        caseStudies: [
          { retailerName: 'ElectroMart', challenge: 'Frequent stockouts leading to lost sales of high-margin items', solution: 'Implemented RetailFlow with custom demand forecasting', results: 'Reduced stockouts by 78%, increased quarterly revenue by 15%' },
          { retailerName: 'Fashion Forward', challenge: 'Unable to identify emerging product trends quickly enough', solution: 'Deployed CustomerInsight with trend analysis module', results: 'Identified key trends 4 weeks earlier, increased new product success rate by 35%' }
        ],
        profilePicture: '/profile-pics/jamie.jpg',
        completionPercentage: 85,
        yearsInBusiness: '5 Years',
        growthRate: '50% YoY',
        techAdoptionLevel: 'Early Adopter',
        decisionMakingProcess: 'Standard',
        budgetCycle: 'Annual',
        currentTechStack: 'AWS, Python, React, PostgreSQL',
        integrationRequirements: 'REST APIs, Webhooks',
        complianceRequirements: 'GDPR, CCPA',
        sustainabilityGoals: 'Reduce carbon footprint by 20% by 2025, Use 100% recyclable packaging',
      });
      setIsLoading(false);
    };
    fetchProfileData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (name: string, selectedOptions: string[]) => {
    setProfileData(prev => ({ ...prev, [name]: selectedOptions }));
  };
  
  const handleProductChange = (index: number, field: string, value: string) => {
    setProfileData(prev => {
      const updatedProducts = [...prev.keyProducts];
      updatedProducts[index] = { ...updatedProducts[index], [field]: value };
      return { ...prev, keyProducts: updatedProducts };
    });
  };

  const addProduct = () => {
    setProfileData(prev => ({ ...prev, keyProducts: [...prev.keyProducts, { name: '', description: '', retailPrice: '', minimumOrder: '' }] }));
  };

  const removeProduct = (index: number) => {
    setProfileData(prev => ({ ...prev, keyProducts: prev.keyProducts.filter((_, i) => i !== index) }));
  };

  const handleCaseStudyChange = (index: number, field: string, value: string) => {
    setProfileData(prev => {
      const updatedCaseStudies = [...prev.caseStudies];
      updatedCaseStudies[index] = { ...updatedCaseStudies[index], [field]: value };
      return { ...prev, caseStudies: updatedCaseStudies };
    });
  };

  const addCaseStudy = () => {
    setProfileData(prev => ({ ...prev, caseStudies: [...prev.caseStudies, { retailerName: '', challenge: '', solution: '', results: '' }] }));
  };

  const removeCaseStudy = (index: number) => {
    setProfileData(prev => ({ ...prev, caseStudies: prev.caseStudies.filter((_, i) => i !== index) }));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameRef.current?.value) { alert('Name is required'); nameRef.current?.focus(); return; }
    if (!emailRef.current?.value) { alert('Email is required'); emailRef.current?.focus(); return; }
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newCompletionPercentage = calculateCompletionPercentage(profileData);
    setProfileData(prev => ({ ...prev, completionPercentage: newCompletionPercentage }));
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.classList.remove('hidden');
      setTimeout(() => { successMessage.classList.add('hidden'); }, 3000);
    }
    setIsSaving(false);
  };

  const calculateCompletionPercentage = (data: VendorProfileData): number => {
    const requiredFields = [
      data.name, data.company, data.email, data.phone, data.bio,
      data.companySize, data.headquarters,
      data.logisticsServices.length > 0, data.saasSoftwareOffered.length > 0, data.modernTechnologiesUsed.length > 0,
      data.keyProducts.length > 0,
      data.fulfillmentCapabilities.length > 0,
      data.preferredRetailerSize.length > 0, data.preferredRetailerTypes.length > 0,
      data.painPointsSolvedByVendor, data.solutionsOffered, data.uniqueSellingPoints.length > 0,
      data.yearsInBusiness, data.growthRate, data.techAdoptionLevel
    ];
    const filledRequiredFields = requiredFields.filter(field => field && (typeof field === 'boolean' ? field : String(field).trim() !== '')).length;
    let percentage = Math.round((filledRequiredFields / requiredFields.length) * 100);
    if (data.caseStudies.length > 0) percentage += 5;
    if (data.certifications.length > 0) percentage += 5;
    if (data.profilePicture) percentage += 5;
    return Math.min(percentage, 100);
  };

  // Helper component for multi-select dropdowns
  const MultiSelectDropdown = ({ label, name, options, selectedValues, onChange }: {
    label: string; name: string; options: string[]; selectedValues: string[]; 
    onChange: (name: string, selectedOptions: string[]) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = (option: string) => {
      const newSelectedValues = selectedValues.includes(option)
        ? selectedValues.filter(item => item !== option)
        : [...selectedValues, option];
      onChange(name, newSelectedValues);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="mb-4" ref={dropdownRef}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
          <button
            type="button"
            className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block truncate">
              {selectedValues.length > 0 ? selectedValues.join(', ') : `Select ${label.toLowerCase()}`}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map(option => (
                <div
                  key={option}
                  className={`cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 ${selectedValues.includes(option) ? 'bg-[#E6F3F3] text-[#1A4A4C]' : 'text-gray-900'}`}
                  onClick={() => handleToggle(option)}
                >
                  <span className={`block truncate ${selectedValues.includes(option) ? 'font-semibold' : 'font-normal'}`}>
                    {option}
                  </span>
                  {selectedValues.includes(option) && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#1A4A4C]">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Vendor Profile</h1>
            <p className="text-gray-600 mt-1">Manage your vendor profile to improve matchmaking with retailers</p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <form onSubmit={handleSaveProfile} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex flex-col items-center">
                  {/* Profile Picture and Completion */}
                  <div className="relative group">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 mb-4">
                      {profileData.profilePicture ? (
                        <img src={profileData.profilePicture} alt="Profile" className="h-full w-full object-cover"/>
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#1A4A4C]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <button type="button" className="absolute bottom-0 right-0 bg-[#1A4A4C] text-white rounded-full p-2 shadow-md hover:bg-[#143638] transition-colors" onClick={() => alert('File picker for profile picture')}>
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
                      <div className="bg-[#1A4A4C] h-2 rounded-full" style={{ width: `${profileData.completionPercentage}%` }}></div>
                    </div>
                    {profileData.completionPercentage < 100 && (
                      <p className="mt-2 text-xs text-gray-500">Complete your profile to improve match quality</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Sections</h3>
                <nav className="space-y-1">
                  {['general', 'company', 'products', 'capabilities', 'preferences', 'problemSolving', 'icp'].map(tab => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        activeTab === tab ? 'bg-[#1A4A4C]/10 text-[#1A4A4C]' : 'text-gray-600 hover:bg-gray-50'}
                      `}
                    >
                      {/* Add icons here if desired */}
                      {tab.charAt(0).toUpperCase() + tab.slice(1).replace('problemSolving', 'Problem Solving').replace('icp', 'ICP Details')}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'general' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">General Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" name="name" id="name" ref={nameRef} value={profileData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input type="text" name="company" id="company" value={profileData.company} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" name="email" id="email" ref={emailRef} value={profileData.email} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" id="phone" value={profileData.phone} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                      <input type="text" name="role" id="role" value={profileData.role} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>
                      <input type="url" name="website" id="website" value={profileData.website} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio / Summary</label>
                    <textarea name="bio" id="bio" rows={4} value={profileData.bio} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm"></textarea>
                  </div>
                </section>
              )}

              {activeTab === 'company' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Company Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                      <select name="companySize" id="companySize" value={profileData.companySize} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm">
                        <option value="">Select size</option>
                        {companySizeCategories.map(size => <option key={size} value={size}>{size}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-1">Annual Revenue</label>
                      <select name="annualRevenue" id="annualRevenue" value={profileData.annualRevenue} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm">
                        <option value="">Select revenue</option>
                        {revenueRangeCategories.map(rev => <option key={rev} value={rev}>{rev}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="yearFounded" className="block text-sm font-medium text-gray-700 mb-1">Year Founded</label>
                      <input type="number" name="yearFounded" id="yearFounded" value={profileData.yearFounded} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                    </div>
                    <div>
                      <label htmlFor="headquarters" className="block text-sm font-medium text-gray-700 mb-1">Headquarters Location</label>
                      <input type="text" name="headquarters" id="headquarters" value={profileData.headquarters} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <MultiSelectDropdown
                        label="Additional Locations (if any)"
                        name="additionalLocations"
                        options={['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'Other (Specify)']}
                        selectedValues={profileData.additionalLocations}
                        onChange={handleMultiSelectChange}
                    />
                  </div>
                </section>
              )}

              {activeTab === 'products' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Product / Service Information</h2>
                  <MultiSelectDropdown
                    label="Logistics Services Offered"
                    name="logisticsServices"
                    options={logisticsCategories}
                    selectedValues={profileData.logisticsServices}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="SaaS / Software Offered"
                    name="saasSoftwareOffered"
                    options={saasSoftwareCategories}
                    selectedValues={profileData.saasSoftwareOffered}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="Modern Technologies Used/Offered"
                    name="modernTechnologiesUsed"
                    options={modernTechCategories}
                    selectedValues={profileData.modernTechnologiesUsed}
                    onChange={handleMultiSelectChange}
                  />
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Key Products/Services</h3>
                    {profileData.keyProducts.map((product, index) => (
                      <div key={index} className="border p-4 rounded-md mb-4 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor={`productName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Product/Service Name</label>
                            <input type="text" id={`productName-${index}`} value={product.name} onChange={(e) => handleProductChange(index, 'name', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                          </div>
                          <div>
                            <label htmlFor={`productDesc-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <input type="text" id={`productDesc-${index}`} value={product.description} onChange={(e) => handleProductChange(index, 'description', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                          </div>
                          <div>
                            <label htmlFor={`productPrice-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Retail Price / Pricing Model</label>
                            <input type="text" id={`productPrice-${index}`} value={product.retailPrice} onChange={(e) => handleProductChange(index, 'retailPrice', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                          </div>
                          <div>
                            <label htmlFor={`productMinOrder-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Minimum Order / Contract</label>
                            <input type="text" id={`productMinOrder-${index}`} value={product.minimumOrder} onChange={(e) => handleProductChange(index, 'minimumOrder', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                          </div>
                        </div>
                        <button type="button" onClick={() => removeProduct(index)} className="mt-3 text-sm text-red-600 hover:text-red-800">Remove Product</button>
                      </div>
                    ))}
                    <button type="button" onClick={addProduct} className="mt-2 text-sm text-[#1A4A4C] hover:text-[#143638] font-medium">+ Add Product/Service</button>
                  </div>
                </section>
              )}

              {activeTab === 'capabilities' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Capabilities</h2>
                  <MultiSelectDropdown
                    label="Fulfillment Capabilities"
                    name="fulfillmentCapabilities"
                    options={['Direct Shipping', 'Dropshipping', '3PL Integration', 'Warehouse Network', 'International Shipping', 'Custom Packaging']}
                    selectedValues={profileData.fulfillmentCapabilities}
                    onChange={handleMultiSelectChange}
                  />
                  <div>
                    <label htmlFor="productionCapacity" className="block text-sm font-medium text-gray-700 mb-1">Production Capacity / Scalability</label>
                    <input type="text" name="productionCapacity" id="productionCapacity" value={profileData.productionCapacity} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" />
                  </div>
                  <div className="mt-6">
                    <MultiSelectDropdown
                        label="Certifications & Compliance"
                        name="certifications"
                        options={['ISO 9001', 'ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'FDA Approved', 'Fair Trade', 'Organic Certified', 'B Corp']}
                        selectedValues={profileData.certifications}
                        onChange={handleMultiSelectChange}
                    />
                  </div>
                </section>
              )}

              {activeTab === 'preferences' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Retailer Preferences</h2>
                  <MultiSelectDropdown
                    label="Preferred Retailer Size"
                    name="preferredRetailerSize"
                    options={companySizeCategories}
                    selectedValues={profileData.preferredRetailerSize}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="Preferred Retailer Types"
                    name="preferredRetailerTypes"
                    options={['Department Stores', 'Specialty Retail', 'Boutiques', 'Online Retailers', 'Mass Market Retailers', 'Discount Stores', 'Grocery Stores', 'Pharmacies']}
                    selectedValues={profileData.preferredRetailerTypes}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="Preferred Geographies"
                    name="preferredGeographies"
                    options={geographicReachCategories}
                    selectedValues={profileData.preferredGeographies}
                    onChange={handleMultiSelectChange}
                  />
                </section>
              )}

              {activeTab === 'problemSolving' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Problem Solving & Value Proposition</h2>
                  <div>
                    <label htmlFor="painPointsSolvedByVendor" className="block text-sm font-medium text-gray-700 mb-1">How do you help solve retailers' pain points? (Be specific)</label>
                    <textarea name="painPointsSolvedByVendor" id="painPointsSolvedByVendor" rows={5} value={profileData.painPointsSolvedByVendor} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm"></textarea>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="solutionsOffered" className="block text-sm font-medium text-gray-700 mb-1">Describe your core solutions and their benefits for retailers.</label>
                    <textarea name="solutionsOffered" id="solutionsOffered" rows={5} value={profileData.solutionsOffered} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm"></textarea>
                  </div>
                  <div className="mt-6">
                    <MultiSelectDropdown
                        label="Unique Selling Points (USPs)"
                        name="uniqueSellingPoints"
                        options={['Proprietary Technology', 'Exclusive Products', 'Faster Lead Times', 'Lower Costs', 'Superior Quality', 'Excellent Customer Service', 'Flexible Terms', 'Strong Brand Recognition']}
                        selectedValues={profileData.uniqueSellingPoints}
                        onChange={handleMultiSelectChange}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Case Studies / Success Stories</h3>
                    {profileData.caseStudies.map((study, index) => (
                      <div key={index} className="border p-4 rounded-md mb-4 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor={`caseRetailer-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Retailer Name</label>
                            <input type="text" id={`caseRetailer-${index}`} value={study.retailerName} onChange={(e) => handleCaseStudyChange(index, 'retailerName', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                          </div>
                          <div>
                            <label htmlFor={`caseChallenge-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Challenge Faced</label>
                            <input type="text" id={`caseChallenge-${index}`} value={study.challenge} onChange={(e) => handleCaseStudyChange(index, 'challenge', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                          </div>
                          <div className="md:col-span-2">
                            <label htmlFor={`caseSolution-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Solution Provided</label>
                            <textarea id={`caseSolution-${index}`} rows={2} value={study.solution} onChange={(e) => handleCaseStudyChange(index, 'solution', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                          </div>
                          <div className="md:col-span-2">
                            <label htmlFor={`caseResults-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Results Achieved</label>
                            <textarea id={`caseResults-${index}`} rows={2} value={study.results} onChange={(e) => handleCaseStudyChange(index, 'results', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                          </div>
                        </div>
                        <button type="button" onClick={() => removeCaseStudy(index)} className="mt-3 text-sm text-red-600 hover:text-red-800">Remove Case Study</button>
                      </div>
                    ))}
                    <button type="button" onClick={addCaseStudy} className="mt-2 text-sm text-[#1A4A4C] hover:text-[#143638] font-medium">+ Add Case Study</button>
                  </div>
                </section>
              )}

              {activeTab === 'icp' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Ideal Customer Profile (ICP) Details</h2>
                  <p className="text-sm text-gray-600 mb-4">Help us understand your business better for more accurate matchmaking.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700 mb-1">Years in Business</label>
                      <input type="text" name="yearsInBusiness" id="yearsInBusiness" value={profileData.yearsInBusiness} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor="growthRate" className="block text-sm font-medium text-gray-700 mb-1">Growth Rate (e.g., YoY %)</label>
                      <input type="text" name="growthRate" id="growthRate" value={profileData.growthRate} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor="techAdoptionLevel" className="block text-sm font-medium text-gray-700 mb-1">Technology Adoption Level</label>
                      <select name="techAdoptionLevel" id="techAdoptionLevel" value={profileData.techAdoptionLevel} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select level</option>
                        <option value="Early Adopter">Early Adopter</option>
                        <option value="Mainstream">Mainstream</option>
                        <option value="Conservative">Conservative</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="decisionMakingProcess" className="block text-sm font-medium text-gray-700 mb-1">Decision Making Process</label>
                      <select name="decisionMakingProcess" id="decisionMakingProcess" value={profileData.decisionMakingProcess} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select process</option>
                        <option value="Quick">Quick (Individual)</option>
                        <option value="Standard">Standard (Team-based)</option>
                        <option value="Complex">Complex (Multi-departmental)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budgetCycle" className="block text-sm font-medium text-gray-700 mb-1">Budget Cycle</label>
                      <select name="budgetCycle" id="budgetCycle" value={profileData.budgetCycle} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select cycle</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Annual">Annual</option>
                        <option value="Project-based">Project-based</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="currentTechStack" className="block text-sm font-medium text-gray-700 mb-1">Current Technology Stack (comma-separated)</label>
                      <input type="text" name="currentTechStack" id="currentTechStack" value={profileData.currentTechStack} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="integrationRequirements" className="block text-sm font-medium text-gray-700 mb-1">Integration Requirements (e.g., APIs, specific platforms)</label>
                      <textarea name="integrationRequirements" id="integrationRequirements" rows={3} value={profileData.integrationRequirements} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="complianceRequirements" className="block text-sm font-medium text-gray-700 mb-1">Specific Compliance Requirements (e.g., GDPR, HIPAA)</label>
                      <textarea name="complianceRequirements" id="complianceRequirements" rows={3} value={profileData.complianceRequirements} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="sustainabilityGoals" className="block text-sm font-medium text-gray-700 mb-1">Sustainability Goals or Initiatives</label>
                      <textarea name="sustainabilityGoals" id="sustainabilityGoals" rows={3} value={profileData.sustainabilityGoals} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                  </div>
                </section>
              )}

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                <button 
                  type="submit" 
                  className="bg-[#1A4A4C] text-white px-6 py-2 rounded-md font-medium hover:bg-[#143638] transition-colors disabled:opacity-50"
                  disabled={isSaving}
                >
                  {isSaving ? 'Saving...' : 'Save Profile'}
                </button>
              </div>
              <div id="success-message" className="hidden mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                Profile saved successfully!
              </div>
            </div>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
}

