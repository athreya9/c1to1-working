'use client';

import React, { useState } from 'react';

interface IndustrySelectorProps {
  userRole?: string;
}

export default function IndustrySelector({ userRole = 'vendor' }: IndustrySelectorProps) {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Expanded list of industries/niches
  const industries = userRole === 'vendor' ? [
    // Technology
    { id: 'tech-hardware', name: 'Technology Hardware', category: 'Technology' },
    { id: 'software', name: 'Software Solutions', category: 'Technology' },
    { id: 'consumer-electronics', name: 'Consumer Electronics', category: 'Technology' },
    { id: 'ai-ml', name: 'AI & Machine Learning', category: 'Technology' },
    { id: 'cloud-services', name: 'Cloud Services', category: 'Technology' },
    { id: 'cybersecurity', name: 'Cybersecurity', category: 'Technology' },
    { id: 'iot', name: 'Internet of Things', category: 'Technology' },
    
    // Retail
    { id: 'apparel', name: 'Apparel & Fashion', category: 'Retail' },
    { id: 'home-goods', name: 'Home Goods', category: 'Retail' },
    { id: 'beauty-cosmetics', name: 'Beauty & Cosmetics', category: 'Retail' },
    { id: 'luxury-goods', name: 'Luxury Goods', category: 'Retail' },
    { id: 'sporting-goods', name: 'Sporting Goods', category: 'Retail' },
    { id: 'toys-games', name: 'Toys & Games', category: 'Retail' },
    
    // Food & Beverage
    { id: 'packaged-foods', name: 'Packaged Foods', category: 'Food & Beverage' },
    { id: 'beverages', name: 'Beverages', category: 'Food & Beverage' },
    { id: 'specialty-foods', name: 'Specialty Foods', category: 'Food & Beverage' },
    { id: 'organic-foods', name: 'Organic Foods', category: 'Food & Beverage' },
    { id: 'snacks', name: 'Snacks', category: 'Food & Beverage' },
    
    // Health & Wellness
    { id: 'pharmaceuticals', name: 'Pharmaceuticals', category: 'Health & Wellness' },
    { id: 'medical-devices', name: 'Medical Devices', category: 'Health & Wellness' },
    { id: 'supplements', name: 'Nutritional Supplements', category: 'Health & Wellness' },
    { id: 'fitness-equipment', name: 'Fitness Equipment', category: 'Health & Wellness' },
    
    // Home & Garden
    { id: 'furniture', name: 'Furniture', category: 'Home & Garden' },
    { id: 'home-appliances', name: 'Home Appliances', category: 'Home & Garden' },
    { id: 'garden-outdoor', name: 'Garden & Outdoor', category: 'Home & Garden' },
    { id: 'home-decor', name: 'Home Décor', category: 'Home & Garden' },
    
    // Automotive
    { id: 'auto-parts', name: 'Auto Parts', category: 'Automotive' },
    { id: 'car-accessories', name: 'Car Accessories', category: 'Automotive' },
    
    // Sustainable Products
    { id: 'eco-friendly', name: 'Eco-Friendly Products', category: 'Sustainable Products' },
    { id: 'renewable-energy', name: 'Renewable Energy', category: 'Sustainable Products' },
    { id: 'sustainable-packaging', name: 'Sustainable Packaging', category: 'Sustainable Products' },
  ] : [
    // Retail Stores
    { id: 'department-stores', name: 'Department Stores', category: 'Retail Stores' },
    { id: 'specialty-retail', name: 'Specialty Retail', category: 'Retail Stores' },
    { id: 'electronics-retail', name: 'Electronics Retail', category: 'Retail Stores' },
    { id: 'fashion-retail', name: 'Fashion Retail', category: 'Retail Stores' },
    { id: 'home-improvement', name: 'Home Improvement', category: 'Retail Stores' },
    { id: 'convenience-stores', name: 'Convenience Stores', category: 'Retail Stores' },
    { id: 'luxury-retail', name: 'Luxury Retail', category: 'Retail Stores' },
    
    // E-commerce
    { id: 'online-marketplaces', name: 'Online Marketplaces', category: 'E-commerce' },
    { id: 'direct-to-consumer', name: 'Direct-to-Consumer', category: 'E-commerce' },
    { id: 'subscription-services', name: 'Subscription Services', category: 'E-commerce' },
    { id: 'omnichannel-retail', name: 'Omnichannel Retail', category: 'E-commerce' },
    
    // Grocery & Food
    { id: 'supermarkets', name: 'Supermarkets', category: 'Grocery & Food' },
    { id: 'specialty-food-stores', name: 'Specialty Food Stores', category: 'Grocery & Food' },
    { id: 'organic-markets', name: 'Organic Markets', category: 'Grocery & Food' },
    { id: 'health-food-stores', name: 'Health Food Stores', category: 'Grocery & Food' },
    
    // Hospitality
    { id: 'hotels', name: 'Hotels', category: 'Hospitality' },
    { id: 'restaurants', name: 'Restaurants', category: 'Hospitality' },
    { id: 'cafes', name: 'Cafes', category: 'Hospitality' },
    { id: 'bars-nightclubs', name: 'Bars & Nightclubs', category: 'Hospitality' },
    
    // Healthcare
    { id: 'hospitals', name: 'Hospitals', category: 'Healthcare' },
    { id: 'pharmacies', name: 'Pharmacies', category: 'Healthcare' },
    { id: 'medical-clinics', name: 'Medical Clinics', category: 'Healthcare' },
    { id: 'wellness-centers', name: 'Wellness Centers', category: 'Healthcare' },
    
    // Education
    { id: 'schools', name: 'Schools', category: 'Education' },
    { id: 'universities', name: 'Universities', category: 'Education' },
    { id: 'educational-services', name: 'Educational Services', category: 'Education' },
    
    // Business Services
    { id: 'corporate-offices', name: 'Corporate Offices', category: 'Business Services' },
    { id: 'coworking-spaces', name: 'Coworking Spaces', category: 'Business Services' },
    { id: 'event-venues', name: 'Event Venues', category: 'Business Services' },
  ];
  
  // Filter industries based on search term
  const filteredIndustries = industries.filter(industry => 
    industry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    industry.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group industries by category
  const groupedIndustries = filteredIndustries.reduce((acc, industry) => {
    if (!acc[industry.category]) {
      acc[industry.category] = [];
    }
    acc[industry.category].push(industry);
    return acc;
  }, {} as Record<string, typeof industries>);
  
  const toggleIndustry = (industryId: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industryId)
        ? prev.filter(id => id !== industryId)
        : [...prev, industryId]
    );
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-c1to1-teal">
        Select Your {userRole === 'vendor' ? 'Product Categories' : 'Industry Focus'}
      </h2>
      
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search industries..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-c1to1-teal focus:border-c1to1-teal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto pr-2 space-y-4">
        {Object.entries(groupedIndustries).map(([category, categoryIndustries]) => (
          <div key={category} className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categoryIndustries.map(industry => (
                <div 
                  key={industry.id}
                  className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                    selectedIndustries.includes(industry.id)
                      ? 'bg-c1to1-teal/10 border border-c1to1-teal/30'
                      : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => toggleIndustry(industry.id)}
                >
                  <div className={`h-4 w-4 rounded border flex-shrink-0 ${
                    selectedIndustries.includes(industry.id)
                      ? 'bg-c1to1-teal border-c1to1-teal'
                      : 'bg-white border-gray-300'
                  }`}>
                    {selectedIndustries.includes(industry.id) && (
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="ml-2 text-sm">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {Object.keys(groupedIndustries).length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No industries found matching your search.
          </div>
        )}
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {selectedIndustries.length} {selectedIndustries.length === 1 ? 'industry' : 'industries'} selected
        </span>
        <button
          className="px-4 py-2 bg-c1to1-teal text-white rounded-md hover:bg-c1to1-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c1to1-teal"
        >
          Save Selections
        </button>
      </div>
    </div>
  );
}
