
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Header, Footer } from '../../../components/layout/SharedComponents'; // Corrected import path

// Define all categories and options (should be consistent with vendor profile)
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

const storeCompanyCategories = [
    "Sports & Outdoor", "Toys & Games", "Jewelry & Watches", "Health & Wellness",
    "Pet Supplies", "Books & Stationery", "Automotive", "Food Delivery & Takeout",
    "Electronics & Appliances", "Home & Garden", "Fashion & Apparel", "Beauty & Personal Care",
    "Grocery & Food", "Department Stores", "Specialty Retail", "Luxury Goods", "Discount & Value Retail"
];

interface RetailerProfileData {
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
  storeLocations: string[]; // Changed from additionalLocations
  productCategoriesNeeded: string[]; // Specific to retailer
  technologyNeeds: string[]; // Specific to retailer (can include SaaS, modern tech)
  currentPainPoints: string; // Detailed text field
  desiredSolutions: string; // Detailed text field
  preferredVendorSize: string[];
  preferredVendorTypes: string[]; // e.g., Manufacturer, Wholesaler, SaaS Provider
  preferredVendorGeographies: string[];
  purchasingTimeline: string;
  budgetRange: string;
  decisionCriteria: string; // Text field for key decision factors
  profilePicture?: string;
  completionPercentage: number;
  // ICP Fields (similar to vendor, but from retailer perspective)
  yearsInBusiness: string;
  growthRate: string;
  techAdoptionLevel: string;
  decisionMakingProcess: string;
  budgetCycle: string;
  currentTechStack: string;
  integrationNeeds: string; // Changed from integrationRequirements
  complianceNeeds: string; // Changed from complianceRequirements
  sustainabilityFocus: string; // Changed from sustainabilityGoals
  targetCustomerDemographics: string;
  averageOrderValue: string;
  purchaseFrequency: string;
  seasonalPatterns: string;
  returnRate: string;
}

export default function RetailerProfilePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('general');
  const [profileData, setProfileData] = useState<RetailerProfileData>({
    name: '', company: '', email: '', phone: '', role: '', bio: '', website: '',
    companySize: '', annualRevenue: '', yearFounded: '', headquarters: '', storeLocations: [],
    productCategoriesNeeded: [], technologyNeeds: [],
    currentPainPoints: '', desiredSolutions: '',
    preferredVendorSize: [], preferredVendorTypes: [], preferredVendorGeographies: [],
    purchasingTimeline: '', budgetRange: '', decisionCriteria: '',
    completionPercentage: 0,
    yearsInBusiness: '', growthRate: '', techAdoptionLevel: '', decisionMakingProcess: '',
    budgetCycle: '', currentTechStack: '', integrationNeeds: '', complianceNeeds: '',
    sustainabilityFocus: '', targetCustomerDemographics: '', averageOrderValue: '',
    purchaseFrequency: '', seasonalPatterns: '', returnRate: '',
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      setProfileData({
        name: 'Alice Wonderland',
        company: 'WonderMart Retail',
        email: 'alice@wondermart.com',
        phone: '(555) 123-4567',
        role: 'Procurement Manager',
        bio: 'Experienced retail procurement manager seeking innovative solutions to enhance customer experience and streamline operations at WonderMart.',
        website: 'www.wondermart.com',
        companySize: 'Large (250-999 employees)',
        annualRevenue: '$50M - $100M',
        yearFounded: '2010',
        headquarters: 'New York, NY',
        storeLocations: ['Manhattan, NY', 'Brooklyn, NY', 'Queens, NY'],
        productCategoriesNeeded: ['Fashion & Apparel', 'Home & Garden', 'Electronics & Appliances'],
        technologyNeeds: ['Inventory & Stock Management', 'POS & Retail Systems', 'AI-powered Inventory Forecasting'],
        currentPainPoints: 'High inventory holding costs, frequent stockouts of popular items, and difficulty in managing omnichannel customer experiences. We also struggle with integrating new technologies with our legacy systems.',
        desiredSolutions: 'Looking for an AI-powered inventory management system to optimize stock levels, a modern POS system with seamless omnichannel capabilities, and solutions for better customer data analytics and personalization.',
        preferredVendorSize: ['Medium (50-249 employees)', 'Large (250-999 employees)'],
        preferredVendorTypes: ['SaaS Provider', 'Manufacturer (Direct)', 'Logistics Partner'],
        preferredVendorGeographies: ['National (USA)', 'North America'],
        purchasingTimeline: 'Next 3-6 months',
        budgetRange: '$100K - $250K for initial implementation',
        decisionCriteria: 'Solution effectiveness, ease of integration, scalability, vendor reputation, and total cost of ownership.',
        profilePicture: '/profile-pics/alice.jpg',
        completionPercentage: 90,
        yearsInBusiness: '12 Years',
        growthRate: '15% YoY',
        techAdoptionLevel: 'Mainstream',
        decisionMakingProcess: 'Standard (Team-based)',
        budgetCycle: 'Annual',
        currentTechStack: 'Oracle Retail, Salesforce Commerce Cloud, Custom OMS',
        integrationNeeds: 'API-first solutions, compatibility with Oracle and Salesforce.',
        complianceNeeds: 'PCI DSS, CCPA, ADA Accessibility.',
        sustainabilityFocus: 'Reducing packaging waste, sourcing from sustainable suppliers, improving energy efficiency in stores.',
        targetCustomerDemographics: 'Urban millennials and Gen Z, mid-to-high income, tech-savvy.',
        averageOrderValue: '$75',
        purchaseFrequency: '4 times per year',
        seasonalPatterns: 'Strong Q4 holiday peak, summer fashion surge.',
        returnRate: '18%',
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

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameRef.current?.value) { alert('Name is required'); nameRef.current?.focus(); return; }
    if (!emailRef.current?.value) { alert('Email is required'); emailRef.current?.focus(); return; }
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API save
    const newCompletionPercentage = calculateCompletionPercentage(profileData);
    setProfileData(prev => ({ ...prev, completionPercentage: newCompletionPercentage }));
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.classList.remove('hidden');
      setTimeout(() => { successMessage.classList.add('hidden'); }, 3000);
    }
    setIsSaving(false);
  };

  const calculateCompletionPercentage = (data: RetailerProfileData): number => {
    const requiredFields = [
      data.name, data.company, data.email, data.phone, data.bio,
      data.companySize, data.headquarters,
      data.productCategoriesNeeded.length > 0, data.technologyNeeds.length > 0,
      data.currentPainPoints, data.desiredSolutions,
      data.preferredVendorSize.length > 0, data.preferredVendorTypes.length > 0,
      data.purchasingTimeline, data.budgetRange,
      data.yearsInBusiness, data.growthRate, data.techAdoptionLevel
    ];
    const filledRequiredFields = requiredFields.filter(field => field && (typeof field === 'boolean' ? field : String(field).trim() !== '')).length;
    let percentage = Math.round((filledRequiredFields / requiredFields.length) * 100);
    if (data.storeLocations.length > 0) percentage += 5;
    if (data.profilePicture) percentage += 5;
    return Math.min(percentage, 100);
  };

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
          <button type="button" className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm" onClick={() => setIsOpen(!isOpen)}>
            <span className="block truncate">{selectedValues.length > 0 ? selectedValues.join(', ') : `Select ${label.toLowerCase()}`}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map(option => (
                <div key={option} className={`cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 ${selectedValues.includes(option) ? 'bg-[#E6F3F3] text-[#1A4A4C]' : 'text-gray-900'}`} onClick={() => handleToggle(option)}>
                  <span className={`block truncate ${selectedValues.includes(option) ? 'font-semibold' : 'font-normal'}`}>{option}</span>
                  {selectedValues.includes(option) && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#1A4A4C]"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Retailer Profile</h1>
            <p className="text-gray-600 mt-1">Manage your retailer profile to find the best vendor partners.</p>
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
                  <div className="relative group">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 mb-4">
                      {profileData.profilePicture ? (
                        <img src={profileData.profilePicture} alt="Profile" className="h-full w-full object-cover"/>
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#1A4A4C]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                      )}
                    </div>
                    <button type="button" className="absolute bottom-0 right-0 bg-[#1A4A4C] text-white rounded-full p-2 shadow-md hover:bg-[#143638] transition-colors" onClick={() => alert('File picker for profile picture')}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
                      <p className="mt-2 text-xs text-gray-500">Complete your profile for better vendor matches</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Sections</h3>
                <nav className="space-y-1">
                  {[
                    { id: 'general', label: 'General Information' },
                    { id: 'company', label: 'Company Details' },
                    { id: 'needs', label: 'Needs & Pain Points' },
                    { id: 'preferences', label: 'Vendor Preferences' },
                    { id: 'purchasing', label: 'Purchasing Info' },
                    { id: 'icp', label: 'ICP Details' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        activeTab === tab.id ? 'bg-[#1A4A4C]/10 text-[#1A4A4C]' : 'text-gray-600 hover:bg-gray-50'}
                      `}
                    >
                      {tab.label}
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
                      <input type="text" name="name" id="name" ref={nameRef} value={profileData.name} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input type="text" name="company" id="company" value={profileData.company} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" name="email" id="email" ref={emailRef} value={profileData.email} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" id="phone" value={profileData.phone} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                      <input type="text" name="role" id="role" value={profileData.role} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>
                      <input type="url" name="website" id="website" value={profileData.website} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio / Summary</label>
                    <textarea name="bio" id="bio" rows={4} value={profileData.bio} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                  </div>
                </section>
              )}

              {activeTab === 'company' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Company Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                      <select name="companySize" id="companySize" value={profileData.companySize} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select size</option>
                        {companySizeCategories.map(size => <option key={size} value={size}>{size}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-1">Annual Revenue</label>
                      <select name="annualRevenue" id="annualRevenue" value={profileData.annualRevenue} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select revenue</option>
                        {revenueRangeCategories.map(rev => <option key={rev} value={rev}>{rev}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="yearFounded" className="block text-sm font-medium text-gray-700 mb-1">Year Founded</label>
                      <input type="number" name="yearFounded" id="yearFounded" value={profileData.yearFounded} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor="headquarters" className="block text-sm font-medium text-gray-700 mb-1">Headquarters Location</label>
                      <input type="text" name="headquarters" id="headquarters" value={profileData.headquarters} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <MultiSelectDropdown
                        label="Store Locations (if applicable)"
                        name="storeLocations"
                        options={['Online Only', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'Other (Specify)']}
                        selectedValues={profileData.storeLocations}
                        onChange={handleMultiSelectChange}
                    />
                  </div>
                </section>
              )}

              {activeTab === 'needs' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Needs & Pain Points</h2>
                  <MultiSelectDropdown
                    label="Product Categories Needed"
                    name="productCategoriesNeeded"
                    options={storeCompanyCategories} // Use store/company categories for retailer needs
                    selectedValues={profileData.productCategoriesNeeded}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="Technology Needs (SaaS, Software, Modern Tech)"
                    name="technologyNeeds"
                    options={[...saasSoftwareCategories, ...modernTechCategories, ...logisticsCategories]} // Combine relevant tech categories
                    selectedValues={profileData.technologyNeeds}
                    onChange={handleMultiSelectChange}
                  />
                  <div className="mt-6">
                    <label htmlFor="currentPainPoints" className="block text-sm font-medium text-gray-700 mb-1">Describe your current pain points and challenges.</label>
                    <textarea name="currentPainPoints" id="currentPainPoints" rows={5} value={profileData.currentPainPoints} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="desiredSolutions" className="block text-sm font-medium text-gray-700 mb-1">What specific solutions are you looking for?</label>
                    <textarea name="desiredSolutions" id="desiredSolutions" rows={5} value={profileData.desiredSolutions} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                  </div>
                </section>
              )}

              {activeTab === 'preferences' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Vendor Preferences</h2>
                  <MultiSelectDropdown
                    label="Preferred Vendor Size"
                    name="preferredVendorSize"
                    options={companySizeCategories}
                    selectedValues={profileData.preferredVendorSize}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="Preferred Vendor Types"
                    name="preferredVendorTypes"
                    options={['Manufacturer', 'Wholesaler', 'Distributor', 'SaaS Provider', 'Consultancy', 'Logistics Partner', 'Marketing Agency']}
                    selectedValues={profileData.preferredVendorTypes}
                    onChange={handleMultiSelectChange}
                  />
                  <MultiSelectDropdown
                    label="Preferred Vendor Geographies"
                    name="preferredVendorGeographies"
                    options={['Local', 'Regional', 'National', 'International', 'No Preference']}
                    selectedValues={profileData.preferredVendorGeographies}
                    onChange={handleMultiSelectChange}
                  />
                </section>
              )}

              {activeTab === 'purchasing' && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Purchasing Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="purchasingTimeline" className="block text-sm font-medium text-gray-700 mb-1">Purchasing Timeline</label>
                      <select name="purchasingTimeline" id="purchasingTimeline" value={profileData.purchasingTimeline} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select timeline</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Next 30 days">Next 30 days</option>
                        <option value="Next 3 months">Next 3 months</option>
                        <option value="Next 6 months">Next 6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Researching">Researching</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-1">Budget Range (for this solution/product)</label>
                      <select name="budgetRange" id="budgetRange" value={profileData.budgetRange} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3">
                        <option value="">Select budget</option>
                        <option value="Under $1K">Under $1K</option>
                        <option value="$1K - $5K">$1K - $5K</option>
                        <option value="$5K - $10K">$5K - $10K</option>
                        <option value="$10K - $50K">$10K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="$100K - $250K">$100K - $250K</option>
                        <option value="$250K - $500K">$250K - $500K</option>
                        <option value="$500K+">$500K+</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="decisionCriteria" className="block text-sm font-medium text-gray-700 mb-1">Key Decision-Making Criteria (e.g., price, features, support, integration)</label>
                    <textarea name="decisionCriteria" id="decisionCriteria" rows={3} value={profileData.decisionCriteria} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
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
                      <label htmlFor="integrationNeeds" className="block text-sm font-medium text-gray-700 mb-1">Integration Needs (e.g., APIs, specific platforms)</label>
                      <textarea name="integrationNeeds" id="integrationNeeds" rows={3} value={profileData.integrationNeeds} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="complianceNeeds" className="block text-sm font-medium text-gray-700 mb-1">Specific Compliance Needs (e.g., PCI, HIPAA)</label>
                      <textarea name="complianceNeeds" id="complianceNeeds" rows={3} value={profileData.complianceNeeds} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="sustainabilityFocus" className="block text-sm font-medium text-gray-700 mb-1">Sustainability Focus or Initiatives</label>
                      <textarea name="sustainabilityFocus" id="sustainabilityFocus" rows={3} value={profileData.sustainabilityFocus} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="targetCustomerDemographics" className="block text-sm font-medium text-gray-700 mb-1">Target Customer Demographics</label>
                      <textarea name="targetCustomerDemographics" id="targetCustomerDemographics" rows={3} value={profileData.targetCustomerDemographics} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>
                     <div>
                      <label htmlFor="averageOrderValue" className="block text-sm font-medium text-gray-700 mb-1">Average Order Value (AOV)</label>
                      <input type="text" name="averageOrderValue" id="averageOrderValue" value={profileData.averageOrderValue} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                     <div>
                      <label htmlFor="purchaseFrequency" className="block text-sm font-medium text-gray-700 mb-1">Customer Purchase Frequency</label>
                      <input type="text" name="purchaseFrequency" id="purchaseFrequency" value={profileData.purchaseFrequency} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                     <div>
                      <label htmlFor="seasonalPatterns" className="block text-sm font-medium text-gray-700 mb-1">Seasonal Sales Patterns</label>
                      <input type="text" name="seasonalPatterns" id="seasonalPatterns" value={profileData.seasonalPatterns} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                     <div>
                      <label htmlFor="returnRate" className="block text-sm font-medium text-gray-700 mb-1">Average Product Return Rate</label>
                      <input type="text" name="returnRate" id="returnRate" value={profileData.returnRate} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" />
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

