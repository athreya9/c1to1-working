'use client';

import React, { useState } from 'react';
import { countries } from '../utils/country_data';

interface CountryRegionSelectorProps {
  selectedCountries: string[];
  onChange: (countries: string[]) => void;
  label?: string;
  isMultiple?: boolean;
  isGlobalOption?: boolean;
}

export default function CountryRegionSelector({
  selectedCountries,
  onChange,
  label = "Service Regions",
  isMultiple = true,
  isGlobalOption = true
}: CountryRegionSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleCountryToggle = (countryCode: string) => {
    if (countryCode === 'GLOBAL') {
      // If global is selected, clear all other selections
      onChange(['GLOBAL']);
      return;
    }
    
    // If any specific country is selected, remove GLOBAL if present
    let newSelection = [...selectedCountries];
    
    // Remove GLOBAL if it exists
    newSelection = newSelection.filter(code => code !== 'GLOBAL');
    
    if (isMultiple) {
      // For multiple selection
      if (newSelection.includes(countryCode)) {
        newSelection = newSelection.filter(code => code !== countryCode);
      } else {
        newSelection.push(countryCode);
      }
    } else {
      // For single selection
      newSelection = [countryCode];
    }
    
    onChange(newSelection);
  };
  
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search countries..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {isGlobalOption && (
        <div 
          className={`mb-2 p-2 border rounded-md cursor-pointer ${
            selectedCountries.includes('GLOBAL') 
              ? 'bg-[#1A4A4C] text-white border-[#1A4A4C]' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => handleCountryToggle('GLOBAL')}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
              {selectedCountries.includes('GLOBAL') ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <span className="font-medium">Global</span>
              <p className="text-xs">Worldwide service</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-h-60 overflow-y-auto border border-gray-300 rounded-md">
        {filteredCountries.length > 0 ? (
          filteredCountries.map(country => (
            <div 
              key={country.code}
              className={`p-2 border-b border-gray-200 cursor-pointer ${
                selectedCountries.includes(country.code) 
                  ? 'bg-[#1A4A4C] text-white' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleCountryToggle(country.code)}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                  {selectedCountries.includes(country.code) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <span className="ml-3">{country.name}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No countries found</div>
        )}
      </div>
      
      <div className="mt-2 text-sm text-gray-500">
        {isMultiple ? (
          <span>{selectedCountries.length} {selectedCountries.length === 1 ? 'region' : 'regions'} selected</span>
        ) : (
          <span>{selectedCountries.length > 0 ? '1 region selected' : 'No region selected'}</span>
        )}
      </div>
    </div>
  );
}
