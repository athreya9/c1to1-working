'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define enhanced interfaces for vendor and retailer profiles with expanded fields
interface VendorProfile {
  id: string;
  name: string;
  company: string;
  // Core business categories
  logisticsServices: string[];
  saasSoftwareOffered: string[];
  modernTechnologiesUsed: string[];
  // Pain points and solutions
  painPointsSolvedByVendor: string; // Detailed text field
  solutionsOffered: string; // Detailed text field
  // Company details
  companySize: string;
  annualRevenue: string;
  yearFounded: string;
  headquarters: string;
  additionalLocations: string[];
  // Preferences and capabilities
  preferredRetailerTypes: string[];
  preferredRetailerSize: string[];
  preferredGeographies: string[];
  fulfillmentCapabilities: string[];
  certifications: string[];
  // ICP fields
  yearsInBusiness: string;
  growthRate: string;
  techAdoptionLevel: string;
  decisionMakingProcess: string;
  budgetCycle: string;
  currentTechStack: string;
  integrationRequirements: string;
  complianceRequirements: string;
  sustainabilityGoals: string;
  // Case studies
  caseStudies?: { retailerName: string; challenge: string; solution: string; results: string }[];
  // Match score (calculated)
  matchScore?: number;
}

interface RetailerProfile {
  id: string;
  name: string;
  company: string;
  // Core business categories
  productCategoriesNeeded: string[];
  technologyNeeds: string[];
  // Pain points and solutions
  currentPainPoints: string; // Detailed text field
  desiredSolutions: string; // Detailed text field
  // Company details
  companySize: string;
  annualRevenue: string;
  yearFounded: string;
  headquarters: string;
  storeLocations: string[];
  // Preferences and requirements
  preferredVendorSize: string[];
  preferredVendorTypes: string[];
  preferredVendorGeographies: string[];
  purchasingTimeline: string;
  budgetRange: string;
  decisionCriteria: string;
  // ICP fields
  yearsInBusiness: string;
  growthRate: string;
  techAdoptionLevel: string;
  decisionMakingProcess: string;
  budgetCycle: string;
  currentTechStack: string;
  integrationNeeds: string;
  complianceNeeds: string;
  sustainabilityFocus: string;
  targetCustomerDemographics: string;
  averageOrderValue: string;
  purchaseFrequency: string;
  seasonalPatterns: string;
  returnRate: string;
}

// Enhanced matchmaking algorithm service
export default class EnhancedMatchmakingService {
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
      productCategoryMatch: 20,
      technologyMatch: 15,
      painPointSolutionMatch: 25,
      sizeFit: 10,
      geographicMatch: 10,
      certificationMatch: 5,
      businessModelMatch: 5,
      timelineMatch: 5,
      growthCompatibility: 5
    };

    // 1. Product Category Match (20%)
    // Compare retailer's product categories with vendor's preferred retailer types
    const productCategoryScore = this.calculateCategoryMatch(
      retailer.productCategoriesNeeded,
      vendor.preferredRetailerTypes
    );
    totalScore += productCategoryScore * weights.productCategoryMatch;
    
    if (productCategoryScore > 0.7) {
      reasons.push(`Strong product category alignment (${Math.round(productCategoryScore * 100)}%)`);
    } else if (productCategoryScore > 0.3) {
      reasons.push(`Moderate product category alignment (${Math.round(productCategoryScore * 100)}%)`);
    }

    // 2. Technology Match (15%)
    // Compare retailer's technology needs with vendor's offerings (logistics, SaaS, modern tech)
    const technologyScore = this.calculateTechnologyMatch(
      retailer.technologyNeeds,
      vendor.logisticsServices,
      vendor.saasSoftwareOffered,
      vendor.modernTechnologiesUsed
    );
    totalScore += technologyScore * weights.technologyMatch;
    
    if (technologyScore > 0.7) {
      reasons.push(`Excellent technology solution match (${Math.round(technologyScore * 100)}%)`);
    } else if (technologyScore > 0.3) {
      reasons.push(`Good technology solution match (${Math.round(technologyScore * 100)}%)`);
    }

    // 3. Pain Point & Solution Match (25%) - Most important factor
    // Compare retailer's pain points with vendor's solutions using NLP techniques
    const painPointScore = this.calculatePainPointSolutionMatch(
      retailer.currentPainPoints,
      retailer.desiredSolutions,
      vendor.painPointsSolvedByVendor,
      vendor.solutionsOffered
    );
    totalScore += painPointScore * weights.painPointSolutionMatch;
    
    if (painPointScore > 0.7) {
      reasons.push(`Vendor directly addresses retailer's challenges (${Math.round(painPointScore * 100)}%)`);
    } else if (painPointScore > 0.3) {
      reasons.push(`Vendor partially addresses retailer's challenges (${Math.round(painPointScore * 100)}%)`);
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
      retailer.preferredVendorGeographies,
      vendor.headquarters,
      retailer.headquarters,
      vendor.additionalLocations,
      retailer.storeLocations
    );
    totalScore += geographicScore * weights.geographicMatch;
    
    if (geographicScore > 0.7) {
      reasons.push(`Strong geographic alignment`);
    } else if (geographicScore > 0.3) {
      reasons.push(`Acceptable geographic alignment`);
    }

    // 6. Certification Match (5%)
    const certificationScore = this.calculateCertificationMatchScore(
      vendor.certifications,
      retailer.complianceNeeds
    );
    totalScore += certificationScore * weights.certificationMatch;
    
    if (certificationScore > 0.7) {
      reasons.push(`Vendor meets certification requirements`);
    } else if (certificationScore > 0.3) {
      reasons.push(`Vendor partially meets certification requirements`);
    }

    // 7. Business Model Match (5%)
    // Compare business models, decision processes, and budget cycles
    const businessModelScore = this.calculateBusinessModelMatch(
      vendor.decisionMakingProcess,
      retailer.decisionMakingProcess,
      vendor.budgetCycle,
      retailer.budgetCycle
    );
    totalScore += businessModelScore * weights.businessModelMatch;
    
    if (businessModelScore > 0.7) {
      reasons.push(`Compatible business processes and decision making`);
    }

    // 8. Timeline Match (5%)
    // Check if vendor can deliver within retailer's purchasing timeline
    const timelineScore = this.calculateTimelineMatch(retailer.purchasingTimeline);
    totalScore += timelineScore * weights.timelineMatch;
    
    if (timelineScore > 0.7) {
      reasons.push(`Timeline compatibility`);
    }

    // 9. Growth Compatibility (5%)
    // Compare growth rates and technology adoption levels
    const growthScore = this.calculateGrowthCompatibility(
      vendor.growthRate,
      retailer.growthRate,
      vendor.techAdoptionLevel,
      retailer.techAdoptionLevel
    );
    totalScore += growthScore * weights.growthCompatibility;
    
    if (growthScore > 0.7) {
      reasons.push(`Similar growth trajectories and innovation pace`);
    }

    // Normalize score to 0-100
    const normalizedScore = Math.min(Math.round(totalScore), 100);
    
    return {
      score: normalizedScore,
      reasons: reasons.length > 0 ? reasons : ['Basic compatibility']
    };
  }

  // Enhanced category matching that considers semantic similarity
  private static calculateCategoryMatch(
    retailerCategories: string[],
    vendorPreferredTypes: string[]
  ): number {
    if (!retailerCategories.length || !vendorPreferredTypes.length) return 0;
    
    // Normalize strings for comparison
    const normalizedRetailerCats = retailerCategories.map(item => item.toLowerCase().trim());
    const normalizedVendorTypes = vendorPreferredTypes.map(item => item.toLowerCase().trim());
    
    // Define category relationships for semantic matching
    const categoryRelationships: {[key: string]: string[]} = {
      'fashion': ['apparel', 'clothing', 'accessories', 'shoes', 'jewelry'],
      'electronics': ['tech', 'gadgets', 'computers', 'phones', 'appliances'],
      'home': ['furniture', 'decor', 'garden', 'kitchen', 'bath'],
      'beauty': ['cosmetics', 'skincare', 'personal care', 'makeup'],
      'food': ['grocery', 'gourmet', 'organic', 'beverages'],
      'health': ['wellness', 'fitness', 'pharmacy', 'supplements'],
      'specialty': ['niche', 'boutique', 'artisanal', 'craft'],
      'department': ['multi-category', 'general merchandise'],
      'discount': ['value', 'budget', 'wholesale', 'outlet']
    };
    
    // Count matches using semantic matching
    let matches = 0;
    let totalPossibleMatches = normalizedRetailerCats.length;
    
    for (const retailerCat of normalizedRetailerCats) {
      for (const vendorType of normalizedVendorTypes) {
        // Direct match
        if (this.fuzzyMatch(retailerCat, vendorType)) {
          matches++;
          break;
        }
        
        // Semantic match using category relationships
        let foundSemanticMatch = false;
        for (const [category, relatedTerms] of Object.entries(categoryRelationships)) {
          const retailerHasCategory = retailerCat.includes(category) || 
                                     relatedTerms.some(term => retailerCat.includes(term));
          const vendorHasCategory = vendorType.includes(category) || 
                                   relatedTerms.some(term => vendorType.includes(term));
          
          if (retailerHasCategory && vendorHasCategory) {
            matches++;
            foundSemanticMatch = true;
            break;
          }
        }
        
        if (foundSemanticMatch) break;
      }
    }
    
    // Calculate score based on percentage of matches
    return matches / Math.max(totalPossibleMatches, 1);
  }

  // Calculate technology match score
  private static calculateTechnologyMatch(
    retailerTechNeeds: string[],
    vendorLogistics: string[],
    vendorSaaS: string[],
    vendorModernTech: string[]
  ): number {
    if (!retailerTechNeeds.length) return 0;
    
    // Combine all vendor technology offerings
    const allVendorTech = [
      ...vendorLogistics, 
      ...vendorSaaS, 
      ...vendorModernTech
    ].map(tech => tech.toLowerCase().trim());
    
    // Normalize retailer needs
    const normalizedRetailerNeeds = retailerTechNeeds.map(need => need.toLowerCase().trim());
    
    // Count matches
    let matches = 0;
    for (const need of normalizedRetailerNeeds) {
      if (allVendorTech.some(tech => this.fuzzyMatch(tech, need))) {
        matches++;
      }
    }
    
    return matches / normalizedRetailerNeeds.length;
  }

  // Enhanced pain point and solution matching using NLP techniques
  private static calculatePainPointSolutionMatch(
    retailerPainPoints: string,
    retailerDesiredSolutions: string,
    vendorPainPointsSolved: string,
    vendorSolutionsOffered: string
  ): number {
    if (!retailerPainPoints || !vendorPainPointsSolved) return 0;
    
    // Combine retailer pain points and desired solutions
    const retailerText = (retailerPainPoints + ' ' + (retailerDesiredSolutions || '')).toLowerCase();
    
    // Combine vendor pain points solved and solutions offered
    const vendorText = (vendorPainPointsSolved + ' ' + (vendorSolutionsOffered || '')).toLowerCase();
    
    // Extract key terms from both texts
    const retailerKeyTerms = this.extractKeyTerms(retailerText);
    const vendorKeyTerms = this.extractKeyTerms(vendorText);
    
    // Calculate term overlap
    let matches = 0;
    for (const retailerTerm of retailerKeyTerms) {
      if (vendorKeyTerms.some(vendorTerm => this.fuzzyMatch(retailerTerm, vendorTerm))) {
        matches++;
      }
    }
    
    // Calculate semantic similarity score
    const overlapScore = retailerKeyTerms.length > 0 ? 
      matches / retailerKeyTerms.length : 0;
    
    // Check for specific pain point phrases
    const painPointPhrases = [
      'inventory', 'stockout', 'stock out', 'out of stock',
      'customer experience', 'user experience', 'cx', 'ux',
      'shipping', 'delivery', 'fulfillment', 'logistics',
      'returns', 'reverse logistics', 'customer service',
      'data', 'analytics', 'insights', 'reporting',
      'integration', 'api', 'connect', 'platform',
      'cost', 'expense', 'budget', 'pricing',
      'efficiency', 'productivity', 'automation',
      'personalization', 'customization', 'tailored',
      'omnichannel', 'multichannel', 'cross-channel'
    ];
    
    let phraseMatches = 0;
    let relevantPhrases = 0;
    
    for (const phrase of painPointPhrases) {
      const retailerHasPhrase = retailerText.includes(phrase);
      const vendorHasPhrase = vendorText.includes(phrase);
      
      if (retailerHasPhrase) {
        relevantPhrases++;
        if (vendorHasPhrase) {
          phraseMatches++;
        }
      }
    }
    
    const phraseScore = relevantPhrases > 0 ? 
      phraseMatches / relevantPhrases : 0;
    
    // Combine scores (60% term overlap, 40% phrase matching)
    return (overlapScore * 0.6) + (phraseScore * 0.4);
  }

  // Extract key terms from text
  private static extractKeyTerms(text: string): string[] {
    // Remove common stop words
    const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 
                      'by', 'about', 'as', 'into', 'like', 'through', 'after', 'over', 'between', 
                      'out', 'of', 'we', 'us', 'our', 'ours', 'i', 'me', 'my', 'mine', 'you', 'your', 
                      'yours', 'he', 'him', 'his', 'she', 'her', 'hers', 'it', 'its', 'they', 'them', 
                      'their', 'theirs'];
    
    // Split text into words, remove punctuation, and filter out stop words and short words
    const words = text
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopWords.includes(word));
    
    // Extract phrases (2-3 word combinations)
    const phrases: string[] = [];
    for (let i = 0; i < words.length - 1; i++) {
      phrases.push(words[i] + ' ' + words[i + 1]);
      if (i < words.length - 2) {
        phrases.push(words[i] + ' ' + words[i + 1] + ' ' + words[i + 2]);
      }
    }
    
    // Combine individual words and phrases
    return [...words, ...phrases];
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
    
    // Levenshtein distance for similar words
    for (const word1 of words1) {
      if (word1.length < 4) continue;
      for (const word2 of words2) {
        if (word2.length < 4) continue;
        if (this.levenshteinDistance(word1, word2) <= 2) {
          return true;
        }
      }
    }
    
    return false;
  }

  // Calculate Levenshtein distance between two strings
  private static levenshteinDistance(str1: string, str2: string): number {
    const track = Array(str2.length + 1).fill(null).map(() => 
      Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
    }
    
    for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
    }
    
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
    
    return track[str2.length][str1.length];
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
    
    // Check for size keywords
    const sizeCategories: {[key: string]: string[]} = {
      'micro': ['1-9', 'micro', 'tiny', 'solo', 'individual'],
      'small': ['10-49', 'small', 'startup', 'boutique'],
      'medium': ['50-249', 'medium', 'mid-size', 'growing'],
      'large': ['250-999', 'large', 'established'],
      'enterprise': ['1000+', 'enterprise', 'global', 'multinational']
    };
    
    for (const [category, keywords] of Object.entries(sizeCategories)) {
      const size1InCategory = s1.includes(category) || keywords.some(k => s1.includes(k));
      const size2InCategory = s2.includes(category) || keywords.some(k => s2.includes(k));
      
      if (size1InCategory && size2InCategory) {
        return true;
      }
    }
    
    return false;
  }

  // Enhanced geographic match score
  private static calculateGeographicMatchScore(
    vendorGeographies: string[],
    retailerGeographies: string[],
    vendorHQ: string,
    retailerHQ: string,
    vendorLocations: string[],
    retailerLocations: string[]
  ): number {
    // Check for direct geographic overlap in preferred regions
    const geographicOverlap = this.calculateArrayOverlapScore(
      vendorGeographies,
      retailerGeographies
    );
    
    // Check if headquarters are in same region
    const hqMatch = this.regionsMatch(vendorHQ, retailerHQ) ? 1 : 0;
    
    // Check for location overlap (any vendor location near any retailer location)
    let locationOverlap = 0;
    if (vendorLocations.length && retailerLocations.length) {
      let locationMatches = 0;
      for (const vendorLoc of vendorLocations) {
        for (const retailerLoc of retailerLocations) {
          if (this.regionsMatch(vendorLoc, retailerLoc)) {
            locationMatches++;
            break;
          }
        }
      }
      locationOverlap = locationMatches / vendorLocations.length;
    }
    
    // Weight: 50% geography preferences, 30% HQ location, 20% additional locations
    return (geographicOverlap * 0.5) + (hqMatch * 0.3) + (locationOverlap * 0.2);
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

  // Enhanced certification match score
  private static calculateCertificationMatchScore(
    vendorCertifications: string[],
    retailerComplianceNeeds: string
  ): number {
    if (!retailerComplianceNeeds) return 1.0; // No requirements
    
    // Extract compliance needs from retailer text
    const complianceNeeds = retailerComplianceNeeds
      .toLowerCase()
      .split(/[,;\/\n]+/)
      .map(need => need.trim())
      .filter(need => need.length > 0);
    
    if (complianceNeeds.length === 0) return 1.0;
    
    // Normalize vendor certifications
    const normalizedCerts = vendorCertifications.map(cert => cert.toLowerCase().trim());
    
    // Count how many compliance needs the vendor meets
    let matches = 0;
    for (const need of complianceNeeds) {
      if (normalizedCerts.some(cert => 
        cert.includes(need) || need.includes(cert) || 
        this.certificationEquivalents(cert, need)
      )) {
        matches++;
      }
    }
    
    return matches / complianceNeeds.length;
  }

  // Check for certification equivalents
  private static certificationEquivalents(cert1: string, cert2: string): boolean {
    const certMappings: {[key: string]: string[]} = {
      'iso27001': ['iso 27001', 'iso-27001', '27001', 'information security'],
      'gdpr': ['eu data protection', 'european data protection', 'data protection'],
      'ccpa': ['california consumer privacy', 'california privacy'],
      'hipaa': ['health insurance portability', 'health data compliance'],
      'pci': ['pci dss', 'payment card industry', 'payment security'],
      'soc2': ['soc 2', 'service organization control', 'aicpa'],
      'fedramp': ['federal risk', 'federal cloud security'],
    };
    
    for (const [standard, aliases] of Object.entries(certMappings)) {
      const cert1Matches = cert1.includes(standard) || aliases.some(alias => cert1.includes(alias));
      const cert2Matches = cert2.includes(standard) || aliases.some(alias => cert2.includes(alias));
      
      if (cert1Matches && cert2Matches) {
        return true;
      }
    }
    
    return false;
  }

  // Calculate business model match score
  private static calculateBusinessModelMatch(
    vendorDecisionProcess: string,
    retailerDecisionProcess: string,
    vendorBudgetCycle: string,
    retailerBudgetCycle: string
  ): number {
    let score = 0;
    
    // Decision process compatibility
    if (vendorDecisionProcess && retailerDecisionProcess) {
      const vendorProcess = vendorDecisionProcess.toLowerCase();
      const retailerProcess = retailerDecisionProcess.toLowerCase();
      
      // Direct match
      if (vendorProcess === retailerProcess) {
        score += 0.5;
      } 
      // Compatible processes
      else if (
        (vendorProcess.includes('quick') && retailerProcess.includes('quick')) ||
        (vendorProcess.includes('standard') && retailerProcess.includes('standard')) ||
        (vendorProcess.includes('complex') && retailerProcess.includes('complex'))
      ) {
        score += 0.3;
      }
    }
    
    // Budget cycle alignment
    if (vendorBudgetCycle && retailerBudgetCycle) {
      const vendorCycle = vendorBudgetCycle.toLowerCase();
      const retailerCycle = retailerBudgetCycle.toLowerCase();
      
      // Direct match
      if (vendorCycle === retailerCycle) {
        score += 0.5;
      }
      // Compatible cycles
      else if (
        (vendorCycle.includes('annual') && retailerCycle.includes('annual')) ||
        (vendorCycle.includes('quarter') && retailerCycle.includes('quarter')) ||
        (vendorCycle.includes('month') && retailerCycle.includes('month'))
      ) {
        score += 0.3;
      }
    }
    
    return score;
  }

  // Calculate timeline match score
  private static calculateTimelineMatch(retailerTimeline: string): number {
    if (!retailerTimeline) return 0.5; // Neutral if no timeline specified
    
    const timeline = retailerTimeline.toLowerCase();
    
    // Immediate needs get higher score (assuming vendors can respond quickly)
    if (timeline.includes('immediate') || timeline.includes('urgent') || 
        timeline.includes('asap') || timeline.includes('1 month')) {
      return 0.8;
    }
    
    // Near-term needs (1-3 months) get good score
    if (timeline.includes('1-3') || timeline.includes('2-3') || 
        timeline.includes('next quarter')) {
      return 0.9;
    }
    
    // Medium-term needs (3-6 months) get moderate score
    if (timeline.includes('3-6') || timeline.includes('4-6') || 
        timeline.includes('next 6')) {
      return 1.0; // Optimal timeline for most vendors
    }
    
    // Long-term needs (6+ months) get lower score
    if (timeline.includes('6-12') || timeline.includes('next year') || 
        timeline.includes('12 month')) {
      return 0.7;
    }
    
    return 0.5; // Default moderate score
  }

  // Calculate growth compatibility score
  private static calculateGrowthCompatibility(
    vendorGrowthRate: string,
    retailerGrowthRate: string,
    vendorTechAdoption: string,
    retailerTechAdoption: string
  ): number {
    let score = 0;
    
    // Growth rate compatibility
    if (vendorGrowthRate && retailerGrowthRate) {
      const vendorGrowth = this.extractGrowthRate(vendorGrowthRate);
      const retailerGrowth = this.extractGrowthRate(retailerGrowthRate);
      
      // Similar growth rates (within 20%)
      if (Math.abs(vendorGrowth - retailerGrowth) <= 20) {
        score += 0.5;
      }
      // Somewhat similar growth rates (within 40%)
      else if (Math.abs(vendorGrowth - retailerGrowth) <= 40) {
        score += 0.3;
      }
    }
    
    // Tech adoption compatibility
    if (vendorTechAdoption && retailerTechAdoption) {
      const vendorAdoption = vendorTechAdoption.toLowerCase();
      const retailerAdoption = retailerTechAdoption.toLowerCase();
      
      // Direct match
      if (vendorAdoption === retailerAdoption) {
        score += 0.5;
      }
      // Compatible adoption levels
      else if (
        (vendorAdoption.includes('early') && retailerAdoption.includes('early')) ||
        (vendorAdoption.includes('mainstream') && retailerAdoption.includes('mainstream')) ||
        (vendorAdoption.includes('conservative') && retailerAdoption.includes('conservative'))
      ) {
        score += 0.3;
      }
      // Vendor is ahead (can guide retailer)
      else if (
        (vendorAdoption.includes('early') && retailerAdoption.includes('mainstream')) ||
        (vendorAdoption.includes('mainstream') && retailerAdoption.includes('conservative'))
      ) {
        score += 0.4;
      }
    }
    
    return score;
  }

  // Extract numeric growth rate from string
  private static extractGrowthRate(growthRateStr: string): number {
    const matches = growthRateStr.match(/(\d+)/);
    if (matches && matches[1]) {
      return parseInt(matches[1], 10);
    }
    return 0;
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
}
