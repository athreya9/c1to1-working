'use client';

// Test file for enhanced matchmaking algorithm
import EnhancedMatchmakingService from '../utils/enhancedMatchmakingService';

// Sample vendor profiles for testing
const vendorProfiles = [
  {
    id: 'v1',
    name: 'Tech Solutions Inc.',
    company: 'Tech Solutions Inc.',
    logisticsServices: ['Inventory Management', 'Last-Mile Delivery', 'Returns'],
    saasSoftwareOffered: ['Inventory & Stock Management', 'Analytics & Performance Dashboards'],
    modernTechnologiesUsed: ['AI-powered Inventory Forecasting', 'IoT Sensors for Inventory Tracking'],
    painPointsSolvedByVendor: 'We help retailers overcome inventory stockouts, poor visibility into customer purchasing patterns, inefficient order fulfillment processes, and lack of data-driven merchandising decisions.',
    solutionsOffered: 'Our AI-powered inventory management system provides real-time visibility and predictive analytics to optimize stock levels and reduce carrying costs. Our platform integrates with all major POS systems and can be deployed in under two weeks.',
    companySize: 'Medium (50-249 employees)',
    annualRevenue: '$5M - $10M',
    yearFounded: '2018',
    headquarters: 'San Francisco, CA',
    additionalLocations: ['Austin, TX', 'Seattle, WA'],
    preferredRetailerTypes: ['Department Stores', 'Specialty Retail', 'Electronics & Appliances'],
    preferredRetailerSize: ['Medium (50-249 employees)', 'Large (250-999 employees)'],
    preferredGeographies: ['National', 'International'],
    fulfillmentCapabilities: ['Cloud-based deployment', 'On-premise installation', 'API integration'],
    certifications: ['ISO 27001', 'SOC 2', 'PCI DSS'],
    yearsInBusiness: '5 Years',
    growthRate: '50% YoY',
    techAdoptionLevel: 'Early Adopter',
    decisionMakingProcess: 'Standard',
    budgetCycle: 'Annual',
    currentTechStack: 'AWS, Python, React, PostgreSQL',
    integrationRequirements: 'REST APIs, Webhooks',
    complianceRequirements: 'GDPR, CCPA',
    sustainabilityGoals: 'Reduce carbon footprint by 20% by 2025'
  },
  {
    id: 'v2',
    name: 'EcoPackage Solutions',
    company: 'EcoPackage Solutions',
    logisticsServices: ['Packaging Solutions', 'Sustainable Packaging', 'Returns'],
    saasSoftwareOffered: [],
    modernTechnologiesUsed: ['Sustainable Packaging Solutions'],
    painPointsSolvedByVendor: 'We help retailers reduce packaging waste, improve sustainability metrics, and enhance customer perception through eco-friendly packaging solutions that don\'t compromise on protection or aesthetics.',
    solutionsOffered: 'Our sustainable packaging solutions use recycled and biodegradable materials that reduce environmental impact while maintaining product protection. We offer custom designs that enhance brand image and customer unboxing experience.',
    companySize: 'Small (10-49 employees)',
    annualRevenue: '$1M - $5M',
    yearFounded: '2020',
    headquarters: 'Portland, OR',
    additionalLocations: ['Chicago, IL'],
    preferredRetailerTypes: ['Fashion & Apparel', 'Beauty & Personal Care', 'Health & Wellness'],
    preferredRetailerSize: ['Small (10-49 employees)', 'Medium (50-249 employees)'],
    preferredGeographies: ['National'],
    fulfillmentCapabilities: ['Custom packaging design', 'Bulk ordering', 'Just-in-time delivery'],
    certifications: ['FSC Certified', 'Cradle to Cradle', 'Plastic-Free Certification'],
    yearsInBusiness: '3 Years',
    growthRate: '35% YoY',
    techAdoptionLevel: 'Mainstream',
    decisionMakingProcess: 'Quick',
    budgetCycle: 'Quarterly',
    currentTechStack: 'Shopify, QuickBooks, AutoCAD',
    integrationRequirements: 'EDI, CSV imports',
    complianceRequirements: 'FDA packaging regulations',
    sustainabilityGoals: '100% plastic-free packaging by 2024'
  },
  {
    id: 'v3',
    name: 'OmniRetail Platform',
    company: 'OmniRetail Platform',
    logisticsServices: [],
    saasSoftwareOffered: ['POS & Retail Systems', 'E-commerce Integration Tools', 'Customer Service Automation', 'Marketing Automation & CRM'],
    modernTechnologiesUsed: ['Omnichannel Retail Solutions', 'Personalization Engines', 'Mobile Commerce Solutions'],
    painPointsSolvedByVendor: 'We solve the challenges of disconnected sales channels, poor customer experience across touchpoints, and inefficient marketing spend. Our platform unifies online and offline retail operations.',
    solutionsOffered: 'Our omnichannel platform connects all sales channels into a single system, providing unified customer profiles, inventory visibility across channels, and automated marketing campaigns based on customer behavior.',
    companySize: 'Large (250-999 employees)',
    annualRevenue: '$50M - $100M',
    yearFounded: '2015',
    headquarters: 'New York, NY',
    additionalLocations: ['London, UK', 'Sydney, Australia', 'Toronto, Canada'],
    preferredRetailerTypes: ['Department Stores', 'Fashion & Apparel', 'Specialty Retail', 'Beauty & Personal Care'],
    preferredRetailerSize: ['Large (250-999 employees)', 'Enterprise (1000+ employees)'],
    preferredGeographies: ['Global'],
    fulfillmentCapabilities: ['Cloud SaaS', 'Enterprise implementation', 'White-label solutions'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'GDPR Compliant', 'PCI DSS Level 1'],
    yearsInBusiness: '8 Years',
    growthRate: '40% YoY',
    techAdoptionLevel: 'Early Adopter',
    decisionMakingProcess: 'Complex',
    budgetCycle: 'Annual',
    currentTechStack: 'AWS, Kubernetes, React, Node.js, MongoDB',
    integrationRequirements: 'REST APIs, GraphQL, Webhooks, SDK',
    complianceRequirements: 'GDPR, CCPA, PCI DSS',
    sustainabilityGoals: 'Carbon-neutral operations by 2026'
  }
];

// Sample retailer profiles for testing
const retailerProfiles = [
  {
    id: 'r1',
    name: 'FashionForward',
    company: 'FashionForward',
    productCategoriesNeeded: ['Fashion & Apparel', 'Beauty & Personal Care'],
    technologyNeeds: ['Inventory & Stock Management', 'Omnichannel Retail Solutions', 'Personalization Engines'],
    currentPainPoints: 'We struggle with inventory management across our 12 stores and online channel. Frequent stockouts of popular items and overstocking of slow-moving products are hurting our margins. We also need to improve our customer experience across channels.',
    desiredSolutions: 'Looking for an integrated inventory management system with predictive analytics and an omnichannel solution that provides a unified view of customers across all touchpoints.',
    companySize: 'Medium (50-249 employees)',
    annualRevenue: '$10M - $50M',
    yearFounded: '2012',
    headquarters: 'Chicago, IL',
    storeLocations: ['Chicago, IL', 'New York, NY', 'Los Angeles, CA'],
    preferredVendorSize: ['Medium (50-249 employees)', 'Large (250-999 employees)'],
    preferredVendorTypes: ['SaaS Provider', 'Technology Partner'],
    preferredVendorGeographies: ['National', 'International'],
    purchasingTimeline: 'Next 3-6 months',
    budgetRange: '$100K - $250K for initial implementation',
    decisionCriteria: 'Solution effectiveness, ease of integration, scalability, vendor reputation, and total cost of ownership.',
    yearsInBusiness: '11 Years',
    growthRate: '15% YoY',
    techAdoptionLevel: 'Mainstream',
    decisionMakingProcess: 'Standard',
    budgetCycle: 'Annual',
    currentTechStack: 'Shopify Plus, NetSuite, Mailchimp',
    integrationNeeds: 'Must integrate with Shopify Plus and NetSuite',
    complianceNeeds: 'PCI DSS, GDPR',
    sustainabilityFocus: 'Reducing packaging waste, sustainable sourcing',
    targetCustomerDemographics: 'Urban millennials and Gen Z, mid-to-high income',
    averageOrderValue: '$120',
    purchaseFrequency: '4 times per year',
    seasonalPatterns: 'Strong Q4 holiday peak, summer fashion surge',
    returnRate: '18%'
  },
  {
    id: 'r2',
    name: 'EcoShop',
    company: 'EcoShop',
    productCategoriesNeeded: ['Health & Wellness', 'Beauty & Personal Care', 'Home & Garden'],
    technologyNeeds: ['Sustainable Packaging Solutions', 'E-commerce Integration Tools'],
    currentPainPoints: 'Our packaging is not aligned with our eco-friendly brand values. We're using too much plastic and non-recyclable materials. Customers are increasingly commenting on this disconnect in reviews and social media.',
    desiredSolutions: 'We need sustainable packaging solutions that maintain product integrity while reflecting our brand values. The solution should be scalable as we grow and not significantly increase our costs.',
    companySize: 'Small (10-49 employees)',
    annualRevenue: '$1M - $5M',
    yearFounded: '2019',
    headquarters: 'Portland, OR',
    storeLocations: ['Portland, OR', 'Seattle, WA'],
    preferredVendorSize: ['Small (10-49 employees)', 'Medium (50-249 employees)'],
    preferredVendorTypes: ['Packaging Provider', 'Sustainability Consultant'],
    preferredVendorGeographies: ['Regional', 'National'],
    purchasingTimeline: 'Next 1-3 months',
    budgetRange: '$25K - $50K',
    decisionCriteria: 'Sustainability credentials, cost, minimum order quantities, customization options',
    yearsInBusiness: '4 Years',
    growthRate: '30% YoY',
    techAdoptionLevel: 'Early Adopter',
    decisionMakingProcess: 'Quick',
    budgetCycle: 'Quarterly',
    currentTechStack: 'Shopify, QuickBooks, Klaviyo',
    integrationNeeds: 'Simple integration with Shopify',
    complianceNeeds: 'Organic certification, plastic-free certification',
    sustainabilityFocus: '100% sustainable packaging, carbon-neutral shipping',
    targetCustomerDemographics: 'Environmentally conscious consumers, 25-45 years old',
    averageOrderValue: '$65',
    purchaseFrequency: '6 times per year',
    seasonalPatterns: 'Steady year-round with slight Q4 holiday increase',
    returnRate: '5%'
  },
  {
    id: 'r3',
    name: 'MegaMart',
    company: 'MegaMart',
    productCategoriesNeeded: ['Grocery & Food', 'Electronics & Appliances', 'Home & Garden', 'Fashion & Apparel'],
    technologyNeeds: ['AI-powered Inventory Forecasting', 'Last-Mile Delivery', 'Analytics & Performance Dashboards'],
    currentPainPoints: 'Our large-scale operations are inefficient with poor inventory forecasting leading to waste in our grocery department and stockouts in electronics. Last-mile delivery costs are too high, and we lack actionable insights from our massive customer data.',
    desiredSolutions: 'We need an AI-powered inventory and analytics platform that can handle our scale and complexity, plus optimized last-mile delivery solutions to reduce costs while maintaining customer satisfaction.',
    companySize: 'Enterprise (1000+ employees)',
    annualRevenue: 'Over $1B',
    yearFounded: '1985',
    headquarters: 'Atlanta, GA',
    storeLocations: ['Multiple locations across 35 states'],
    preferredVendorSize: ['Large (250-999 employees)', 'Enterprise (1000+ employees)'],
    preferredVendorTypes: ['Enterprise Technology Provider', 'Logistics Partner'],
    preferredVendorGeographies: ['National', 'Global'],
    purchasingTimeline: 'Next 6-12 months',
    budgetRange: '$1M - $5M for enterprise solution',
    decisionCriteria: 'Scalability, enterprise-grade security, proven track record with similar retailers, integration capabilities',
    yearsInBusiness: '38 Years',
    growthRate: '8% YoY',
    techAdoptionLevel: 'Mainstream',
    decisionMakingProcess: 'Complex',
    budgetCycle: 'Annual',
    currentTechStack: 'SAP, Oracle, IBM, Microsoft',
    integrationNeeds: 'Must integrate with SAP and legacy systems',
    complianceNeeds: 'SOC 2, PCI DSS, GDPR, CCPA',
    sustainabilityFocus: 'Reducing food waste, energy-efficient stores',
    targetCustomerDemographics: 'Broad demographic, family-focused',
    averageOrderValue: '$85 in-store, $120 online',
    purchaseFrequency: 'Weekly for grocery, quarterly for other departments',
    seasonalPatterns: 'Holiday peaks, back-to-school season, summer outdoor',
    returnRate: '12% overall, 25% for electronics'
  }
];

// Run test matches
console.log('TESTING ENHANCED MATCHMAKING ALGORITHM');
console.log('=====================================');

// Test 1: Match vendor 1 (Tech Solutions) with all retailers
console.log('\nTEST 1: Matching Tech Solutions Inc. with all retailers');
const vendor1Matches = EnhancedMatchmakingService.matchVendorWithRetailers(vendorProfiles[0], retailerProfiles);
vendor1Matches.forEach(match => {
  console.log(`Match with ${match.retailer.company}: ${match.score}%`);
  console.log(`Reasons: ${match.reasons.join(', ')}`);
});

// Test 2: Match vendor 2 (EcoPackage) with all retailers
console.log('\nTEST 2: Matching EcoPackage Solutions with all retailers');
const vendor2Matches = EnhancedMatchmakingService.matchVendorWithRetailers(vendorProfiles[1], retailerProfiles);
vendor2Matches.forEach(match => {
  console.log(`Match with ${match.retailer.company}: ${match.score}%`);
  console.log(`Reasons: ${match.reasons.join(', ')}`);
});

// Test 3: Match vendor 3 (OmniRetail) with all retailers
console.log('\nTEST 3: Matching OmniRetail Platform with all retailers');
const vendor3Matches = EnhancedMatchmakingService.matchVendorWithRetailers(vendorProfiles[2], retailerProfiles);
vendor3Matches.forEach(match => {
  console.log(`Match with ${match.retailer.company}: ${match.score}%`);
  console.log(`Reasons: ${match.reasons.join(', ')}`);
});

// Test 4: Match retailer 1 (FashionForward) with all vendors
console.log('\nTEST 4: Matching FashionForward with all vendors');
const retailer1Matches = EnhancedMatchmakingService.matchRetailerWithVendors(retailerProfiles[0], vendorProfiles);
retailer1Matches.forEach(match => {
  console.log(`Match with ${match.vendor.company}: ${match.score}%`);
  console.log(`Reasons: ${match.reasons.join(', ')}`);
});

// Test 5: Match retailer 2 (EcoShop) with all vendors
console.log('\nTEST 5: Matching EcoShop with all vendors');
const retailer2Matches = EnhancedMatchmakingService.matchRetailerWithVendors(retailerProfiles[1], vendorProfiles);
retailer2Matches.forEach(match => {
  console.log(`Match with ${match.vendor.company}: ${match.score}%`);
  console.log(`Reasons: ${match.reasons.join(', ')}`);
});

// Expected outcomes:
// - Tech Solutions should match well with FashionForward and MegaMart due to inventory needs
// - EcoPackage should match extremely well with EcoShop due to sustainability focus
// - OmniRetail should match well with FashionForward due to omnichannel needs
// - MegaMart should match with Tech Solutions and OmniRetail but not EcoPackage
