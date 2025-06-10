'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define interfaces for vendor and retailer profiles
interface VendorProfile {
  id: string;
  name: string;
  company: string;
  productCategories: string[];
  painPointsSolved: string[];
  preferredRetailerTypes: string[];
  preferredRetailerSize: string[];
  preferredGeographies: string[];
  fulfillmentCapabilities: string[];
  certifications: string[];
  companySize: string;
  headquarters: string;
  matchScore?: number;
}

interface RetailerProfile {
  id: string;
  name: string;
  company: string;
  productCategories: string[];
  currentChallenges: string[];
  vendorRequirements: string[];
  preferredVendorSize: string[];
  minimumRequiredCertifications: string[];
  preferredGeographies: string[];
  decisionCriteria: string[];
  companySize: string;
  headquarters: string;
}

// Enhanced matchmaking algorithm service
export default class MatchmakingService {
  // Match a vendor with retailers
  static matchVendorWithRetailers(
    vendorProfile: VendorProfile,
    retailerProfiles: RetailerProfile[]
  ): { retailer: RetailerProfile; score: number; reasons: string[] }[] {
    return retailerProfiles.map(retailer => {
      const { score, reasons } = this.calculateMatchScore(vendorProfile, retailer);
      return {
        retailer,
        score,
        reasons
      };
    }).sort((a, b) => b.score - a.score);
  }

  // Match a retailer with vendors
  static matchRetailerWithVendors(
    retailerProfile: RetailerProfile,
    vendorProfiles: VendorProfile[]
  ): { vendor: VendorProfile; score: number; reasons: string[] }[] {
    return vendorProfiles.map(vendor => {
      const { score, reasons } = this.calculateMatchScore(vendor, retailerProfile);
      return {
        vendor,
        score,
        reasons
      };
    }).sort((a, b) => b.score - a.score);
  }

  // Calculate match score between a vendor and retailer
  private static calculateMatchScore(
    vendor: VendorProfile,
    retailer: RetailerProfile
  ): { score: number; reasons: string[] } {
    let totalScore = 0;
    const reasons: string[] = [];
    const weights = {
      productCategoryMatch: 25,
      painPointMatch: 20,
      retailerTypeMatch: 15,
      sizeFit: 10,
      geographicMatch: 10,
      certificationMatch: 10,
      requirementMatch: 10
    };

    // 1. Product Category Match (25%)
    const productCategoryScore = this.calculateArrayOverlapScore(
      vendor.productCategories,
      retailer.productCategories
    );
    totalScore += productCategoryScore * weights.productCategoryMatch;
    
    if (productCategoryScore > 0.7) {
      reasons.push(`Strong product category alignment (${Math.round(productCategoryScore * 100)}%)`);
    } else if (productCategoryScore > 0.3) {
      reasons.push(`Moderate product category alignment (${Math.round(productCategoryScore * 100)}%)`);
    }

    // 2. Pain Point Match (20%)
    const painPointScore = this.calculateArrayOverlapScore(
      vendor.painPointsSolved,
      retailer.currentChallenges
    );
    totalScore += painPointScore * weights.painPointMatch;
    
    if (painPointScore > 0.7) {
      reasons.push(`Vendor directly addresses retailer's challenges`);
    } else if (painPointScore > 0.3) {
      reasons.push(`Vendor partially addresses retailer's challenges`);
    }

    // 3. Retailer Type Match (15%)
    const retailerTypeScore = vendor.preferredRetailerTypes.some(
      type => retailer.company.toLowerCase().includes(type.toLowerCase())
    ) ? 1 : 0;
    totalScore += retailerTypeScore * weights.retailerTypeMatch;
    
    if (retailerTypeScore > 0) {
      reasons.push(`Retailer type matches vendor's preferences`);
    }

    // 4. Size Fit (10%)
    const sizeFitScore = this.calculateSizeFitScore(
      vendor.preferredRetailerSize,
      retailer.companySize,
      retailer.preferredVendorSize,
      vendor.companySize
    );
    totalScore += sizeFitScore * weights.sizeFit;
    
    if (sizeFitScore > 0.7) {
      reasons.push(`Excellent company size compatibility`);
    } else if (sizeFitScore > 0.3) {
      reasons.push(`Good company size compatibility`);
    }

    // 5. Geographic Match (10%)
    const geographicScore = this.calculateGeographicMatchScore(
      vendor.preferredGeographies,
      retailer.preferredGeographies,
      vendor.headquarters,
      retailer.headquarters
    );
    totalScore += geographicScore * weights.geographicMatch;
    
    if (geographicScore > 0.7) {
      reasons.push(`Strong geographic alignment`);
    } else if (geographicScore > 0.3) {
      reasons.push(`Acceptable geographic alignment`);
    }

    // 6. Certification Match (10%)
    const certificationScore = this.calculateCertificationMatchScore(
      vendor.certifications,
      retailer.minimumRequiredCertifications
    );
    totalScore += certificationScore * weights.certificationMatch;
    
    if (certificationScore > 0.7) {
      reasons.push(`Vendor meets certification requirements`);
    } else if (certificationScore > 0.3) {
      reasons.push(`Vendor partially meets certification requirements`);
    }

    // 7. Requirement Match (10%)
    const requirementScore = this.calculateRequirementMatchScore(
      vendor.fulfillmentCapabilities,
      retailer.vendorRequirements
    );
    totalScore += requirementScore * weights.requirementMatch;
    
    if (requirementScore > 0.7) {
      reasons.push(`Vendor meets fulfillment requirements`);
    } else if (requirementScore > 0.3) {
      reasons.push(`Vendor partially meets fulfillment requirements`);
    }

    // Normalize score to 0-100
    const normalizedScore = Math.min(Math.round(totalScore), 100);
    
    return {
      score: normalizedScore,
      reasons: reasons.length > 0 ? reasons : ['Basic compatibility']
    };
  }

  // Helper function to calculate overlap between two arrays
  private static calculateArrayOverlapScore(array1: string[], array2: string[]): number {
    if (!array1.length || !array2.length) return 0;
    
    // Normalize strings for comparison
    const normalizedArray1 = array1.map(item => item.toLowerCase().trim());
    const normalizedArray2 = array2.map(item => item.toLowerCase().trim());
    
    // Count matches using fuzzy matching
    let matches = 0;
    for (const item1 of normalizedArray1) {
      for (const item2 of normalizedArray2) {
        if (this.fuzzyMatch(item1, item2)) {
          matches++;
          break;
        }
      }
    }
    
    // Calculate score based on percentage of matches
    return matches / Math.max(normalizedArray1.length, 1);
  }

  // Simple fuzzy matching to detect similar terms
  private static fuzzyMatch(str1: string, str2: string): boolean {
    // Exact match
    if (str1 === str2) return true;
    
    // Contains match
    if (str1.includes(str2) || str2.includes(str1)) return true;
    
    // Word match (check if any word in str1 matches any word in str2)
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    for (const word1 of words1) {
      if (word1.length < 4) continue; // Skip short words
      for (const word2 of words2) {
        if (word2.length < 4) continue; // Skip short words
        if (word1 === word2 || word1.includes(word2) || word2.includes(word1)) {
          return true;
        }
      }
    }
    
    return false;
  }

  // Calculate size fit score
  private static calculateSizeFitScore(
    vendorPreferredRetailerSizes: string[],
    retailerSize: string,
    retailerPreferredVendorSizes: string[],
    vendorSize: string
  ): number {
    // Check if vendor prefers this retailer size
    const vendorPrefersRetailer = vendorPreferredRetailerSizes.some(
      preferredSize => this.sizesMatch(preferredSize, retailerSize)
    );
    
    // Check if retailer prefers this vendor size
    const retailerPrefersVendor = retailerPreferredVendorSizes.some(
      preferredSize => this.sizesMatch(preferredSize, vendorSize)
    );
    
    // Calculate score
    if (vendorPrefersRetailer && retailerPrefersVendor) {
      return 1.0; // Perfect match
    } else if (vendorPrefersRetailer || retailerPrefersVendor) {
      return 0.5; // One-way match
    } else {
      return 0.0; // No match
    }
  }

  // Helper to match size categories
  private static sizesMatch(size1: string, size2: string): boolean {
    // Normalize sizes
    const s1 = size1.toLowerCase();
    const s2 = size2.toLowerCase();
    
    // Direct match
    if (s1 === s2) return true;
    
    // Check for small/medium/large/enterprise keywords
    const smallKeywords = ['small', '1-10', '11-50', 'startup'];
    const mediumKeywords = ['medium', '51-200', '50-100', '101-250', 'mid'];
    const largeKeywords = ['large', '251-500', '501-1000'];
    const enterpriseKeywords = ['enterprise', '1000+', 'global'];
    
    const matchKeywords = (keywords: string[]) => {
      return keywords.some(k => s1.includes(k)) && keywords.some(k => s2.includes(k));
    };
    
    return (
      matchKeywords(smallKeywords) ||
      matchKeywords(mediumKeywords) ||
      matchKeywords(largeKeywords) ||
      matchKeywords(enterpriseKeywords)
    );
  }

  // Calculate geographic match score
  private static calculateGeographicMatchScore(
    vendorGeographies: string[],
    retailerGeographies: string[],
    vendorHQ: string,
    retailerHQ: string
  ): number {
    // Check for direct geographic overlap
    const geographicOverlap = this.calculateArrayOverlapScore(
      vendorGeographies,
      retailerGeographies
    );
    
    // Check if headquarters are in same region
    const hqMatch = this.regionsMatch(vendorHQ, retailerHQ) ? 1 : 0;
    
    // Weight: 70% geography preferences, 30% HQ location
    return (geographicOverlap * 0.7) + (hqMatch * 0.3);
  }

  // Helper to check if regions match
  private static regionsMatch(location1: string, location2: string): boolean {
    // Normalize locations
    const loc1 = location1.toLowerCase();
    const loc2 = location2.toLowerCase();
    
    // Check for country/region matches
    const regions = [
      ['usa', 'united states', 'us', 'america'],
      ['canada', 'ca'],
      ['uk', 'united kingdom', 'england', 'britain'],
      ['europe', 'eu'],
      ['asia', 'apac'],
      ['australia', 'aus', 'nz', 'new zealand', 'oceania'],
      ['africa'],
      ['south america', 'latin america']
    ];
    
    for (const region of regions) {
      const inRegion1 = region.some(r => loc1.includes(r));
      const inRegion2 = region.some(r => loc2.includes(r));
      if (inRegion1 && inRegion2) return true;
    }
    
    // Check for state/province matches in US/Canada
    const usStates = [
      'al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
      'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md',
      'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj',
      'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc',
      'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy',
      'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
      'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
      'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
      'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
      'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
      'new hampshire', 'new jersey', 'new mexico', 'new york',
      'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon',
      'pennsylvania', 'rhode island', 'south carolina', 'south dakota',
      'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
      'west virginia', 'wisconsin', 'wyoming'
    ];
    
    for (const state of usStates) {
      if (loc1.includes(state) && loc2.includes(state)) return true;
    }
    
    // Check for exact city matches
    const cities1 = this.extractCities(loc1);
    const cities2 = this.extractCities(loc2);
    
    for (const city1 of cities1) {
      for (const city2 of cities2) {
        if (city1 === city2) return true;
      }
    }
    
    return false;
  }

  // Helper to extract city names from location string
  private static extractCities(location: string): string[] {
    // Split by common delimiters
    const parts = location.split(/[,\/\-\s]+/);
    // Filter out short parts and common non-city words
    const nonCityWords = ['inc', 'llc', 'corp', 'ltd', 'co', 'company'];
    return parts
      .filter(part => part.length > 2)
      .filter(part => !nonCityWords.includes(part))
      .map(part => part.toLowerCase());
  }

  // Calculate certification match score
  private static calculateCertificationMatchScore(
    vendorCertifications: string[],
    requiredCertifications: string[]
  ): number {
    if (requiredCertifications.length === 0) return 1.0; // No requirements
    
    // Count how many required certifications the vendor has
    let matches = 0;
    for (const required of requiredCertifications) {
      if (vendorCertifications.some(cert => 
        cert.toLowerCase().includes(required.toLowerCase()) || 
        required.toLowerCase().includes(cert.toLowerCase())
      )) {
        matches++;
      }
    }
    
    return matches / requiredCertifications.length;
  }

  // Calculate requirement match score
  private static calculateRequirementMatchScore(
    vendorCapabilities: string[],
    retailerRequirements: string[]
  ): number {
    if (retailerRequirements.length === 0) return 1.0; // No requirements
    
    // Count how many requirements the vendor meets
    let matches = 0;
    for (const requirement of retailerRequirements) {
      if (vendorCapabilities.some(capability => 
        this.fuzzyMatch(capability, requirement)
      )) {
        matches++;
      }
    }
    
    return matches / retailerRequirements.length;
  }
}
