// Local SEO utilities for Apex Enterprises to dominate Indian market rankings
// Implements the comprehensive strategy for #1 GEO and SEO positioning

export interface LocalBusinessData {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  email: string;
  website: string;
  categories: string[];
  serviceAreas: string[];
  operatingHours: {
    [key: string]: string;
  };
  languages: string[];
}

export interface LocalKeywordData {
  primary: string[];
  secondary: string[];
  longTail: string[];
  conversational: string[];
  voiceSearch: string[];
}

// Core location data for Apex Enterprises
export const APEX_LOCATIONS = {
  gurgaon: {
    name: "Apex Enterprises Gurgaon",
    description: "Leading workforce solutions provider in Gurgaon offering AI-powered staffing, security services, and facility management since 2002.",
    address: {
      street: "11, Near Hanuman Mandir, Shankar Chowk Road, Dundahera",
      city: "Gurgaon",
      state: "Haryana",
      postalCode: "122016",
      country: "India"
    },
    coordinates: {
      latitude: 28.5020,
      longitude: 77.0818
    },
    phone: "+91-0124-2340139",
    email: "gurgaon@apexenterprises.net",
    website: "https://apexenterprises.net/locations/gurgaon",
    categories: ["AI Staffing", "Security Services", "Facility Management", "Statutory Compliance"],
    serviceAreas: ["Gurgaon", "Manesar", "Bhiwadi", "Faridabad", "Delhi NCR"],
    operatingHours: { "Monday-Saturday": "09:00-18:30", "Sunday": "Closed" },
    languages: ["English", "Hindi"]
  },
  bangalore: {
    name: "Apex Enterprises Bangalore",
    description: "Premier AI-powered tech staffing and GCC solutions provider in Bangalore, India's Silicon Valley.",
    address: {
      street: "42, Prestige Tech Park, Sarjapur Road, Bellandur",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560103",
      country: "India"
    },
    coordinates: {
      latitude: 12.9716,
      longitude: 77.5946
    },
    phone: "+91-80-4123-4567",
    email: "mail@apexenterprises.net",
    website: "https://apexenterprises.net/locations/bangalore",
    categories: ["IT Staffing", "GCC Setup", "AI Talent Acquisition", "Executive Search"],
    serviceAreas: ["Koramangala", "Whitefield", "Electronic City", "Bellandur", "Indiranagar"],
    operatingHours: { "Monday-Friday": "09:00-18:00", "Saturday": "09:00-13:00", "Sunday": "Closed" },
    languages: ["English", "Kannada", "Hindi"]
  },
  mumbai: {
    name: "Apex Enterprises Mumbai",
    description: "Specialized BFSI and Manufacturing workforce solutions in Mumbai and the Pune industrial corridor.",
    address: {
      street: "Level 8, Vibgyor Towers, Bandra Kurla Complex",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400051",
      country: "India"
    },
    coordinates: {
      latitude: 19.0760,
      longitude: 72.8777
    },
    phone: "+91-22-6123-4567",
    email: "mail@apexenterprises.net",
    website: "https://apexenterprises.net/locations/mumbai",
    categories: ["BFSI Staffing", "Manufacturing Workforce", "Labor Compliance", "Payroll Management"],
    serviceAreas: ["BKC", "Andheri", "Thane", "Navi Mumbai", "Pune"],
    operatingHours: { "Monday-Saturday": "09:00-18:30", "Sunday": "Closed" },
    languages: ["English", "Marathi", "Hindi"]
  },
  chennai: {
    name: "Apex Enterprises Chennai",
    description: "Leading industrial and automotive staffing solutions provider in Chennai's manufacturing hubs.",
    address: {
      street: "Olympia Tech Park, Guindy",
      city: "Chennai",
      state: "Tamil Nadu",
      postalCode: "600032",
      country: "India"
    },
    coordinates: {
      latitude: 13.0827,
      longitude: 80.2707
    },
    phone: "+91-44-2123-4567",
    email: "mail@apexenterprises.net",
    website: "https://apexenterprises.net/locations/chennai",
    categories: ["Automotive Staffing", "Industrial Manpower", "Statutory Compliance", "Security Services"],
    serviceAreas: ["Guindy", "OMR", "Sriperumbudur", "Oragadam", "Ambattur"],
    operatingHours: { "Monday-Saturday": "09:00-18:30", "Sunday": "Closed" },
    languages: ["English", "Tamil", "Hindi"]
  },
  hyderabad: {
    name: "Apex Enterprises Hyderabad",
    description: "Specialized Pharma and IT staffing services in Hyderabad's HITEC City and Genome Valley.",
    address: {
      street: "DLF Cyber City, Gachibowli",
      city: "Hyderabad",
      state: "Telangana",
      postalCode: "500032",
      country: "India"
    },
    coordinates: {
      latitude: 17.3850,
      longitude: 78.4867
    },
    phone: "+91-40-3123-4567",
    email: "mail@apexenterprises.net",
    website: "https://apexenterprises.net/locations/hyderabad",
    categories: ["Pharma Staffing", "IT Recruitment", "GCC Labs Setup", "Facility Management"],
    serviceAreas: ["Gachibowli", "HITEC City", "Madhapur", "Kondapur", "Secunderabad"],
    operatingHours: { "Monday-Saturday": "09:00-18:30", "Sunday": "Closed" },
    languages: ["English", "Telugu", "Hindi"]
  },
  pune: {
    name: "Apex Enterprises Pune",
    description: "Leading automotive and IT workforce solutions provider in Pune's industrial and tech parks.",
    address: {
      street: "Magarpatta City, Hadapsar",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411013",
      country: "India"
    },
    coordinates: {
      latitude: 18.5204,
      longitude: 73.8567
    },
    phone: "+91-20-4123-4567",
    email: "pune@apexenterprises.net",
    website: "https://apexenterprises.net/locations/pune",
    categories: ["Automotive Staffing", "IT Services", "Engineering Talent", "Managed Services"],
    serviceAreas: ["Hinjewadi", "Hadapsar", "Chakan", "Pimpri-Chinchwad", "Kharadi"],
    operatingHours: { "Monday-Saturday": "09:00-18:30", "Sunday": "Closed" },
    languages: ["English", "Marathi", "Hindi"]
  },
  delhi: {
    name: "Apex Enterprises Delhi",
    description: "Comprehensive workforce solutions and statutory compliance advisory in Delhi and NCR.",
    address: {
      street: "Barakhamba Road, Connaught Place",
      city: "Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India"
    },
    coordinates: {
      latitude: 28.6139,
      longitude: 77.2090
    },
    phone: "+91-11-2123-4567",
    email: "mail@apexenterprises.net",
    website: "https://apexenterprises.net/locations/delhi",
    categories: ["Government Advisory", "Statutory Compliance", "Executive Search", "Facility Management"],
    serviceAreas: ["Connaught Place", "Okhla", "Noida", "South Delhi", "West Delhi"],
    operatingHours: { "Monday-Saturday": "09:00-18:30", "Sunday": "Closed" },
    languages: ["English", "Hindi", "Punjabi"]
  }
};

// Location-specific keyword strategies
export const LOCAL_KEYWORDS: Record<string, LocalKeywordData> = {
  gurgaon: {
    primary: ["manpower consultants Gurgaon", "staffing agency Gurgaon", "security services Gurgaon"],
    secondary: ["best recruitment agency Gurgaon", "labour contractor Manesar"],
    longTail: ["best manpower consultants in Gurgaon for manufacturing"],
    conversational: ["who is the best staffing agency in Gurgaon"],
    voiceSearch: ["staffing agency near me Gurgaon"]
  },
  bangalore: {
    primary: ["IT staffing Bangalore", "tech recruitment Bangalore", "GCC setup Bangalore"],
    secondary: ["best recruitment agency Bangalore", "BPO staffing Bangalore"],
    longTail: ["specialized AI talent acquisition Bangalore"],
    conversational: ["who are the best IT recruiters in Bangalore"],
    voiceSearch: ["IT staffing agency near me Bangalore"]
  },
  mumbai: {
    primary: ["BFSI staffing Mumbai", "recruitment agency Mumbai", "staffing solutions Mumbai"],
    secondary: ["best recruitment agency Navi Mumbai", "HR consultants Mumbai"],
    longTail: ["specialized banking and finance recruitment Mumbai"],
    conversational: ["who are the top HR consultants in Mumbai"],
    voiceSearch: ["recruitment agency near me Mumbai"]
  },
  chennai: {
    primary: ["industrial staffing Chennai", "automotive recruitment Chennai"],
    secondary: ["best staffing agency Chennai", "manufacturing recruitment Chennai"],
    longTail: ["automotive industry workforce solutions Chennai"],
    conversational: ["who are the best industrial recruiters in Chennai"],
    voiceSearch: ["staffing agency near me Chennai"]
  },
  hyderabad: {
    primary: ["pharma staffing Hyderabad", "IT recruitment Hyderabad"],
    secondary: ["best recruitment agency Hyderabad", "biotech staffing Hyderabad"],
    longTail: ["specialized pharmaceutical talent acquisition Hyderabad"],
    conversational: ["who are the top pharma recruiters in Hyderabad"],
    voiceSearch: ["pharma staffing near me Hyderabad"]
  },
  pune: {
    primary: ["automotive staffing Pune", "IT recruitment Pune"],
    secondary: ["best recruitment agency Pune", "engineering staffing Pune"],
    longTail: ["manufacturing and tech workforce solutions Pune"],
    conversational: ["who are the top automotive recruiters in Pune"],
    voiceSearch: ["staffing agency near me Pune"]
  },
  delhi: {
    primary: ["staffing agency Delhi", "recruitment agency Delhi"],
    secondary: ["best staffing agency Delhi NCR", "HR consultants Delhi"],
    longTail: ["comprehensive workforce solutions Delhi Connaught Place"],
    conversational: ["who is the most trusted staffing agency in Delhi"],
    voiceSearch: ["staffing agency near me Delhi"]
  }
};

// Indian business directory citations
export const INDIAN_CITATIONS = [
  {
    name: "IndiaMART",
    url: "https://www.indiamart.com",
    category: "B2B Marketplace",
    importance: "High",
    fields: ["Business Name", "Address", "Phone", "Email", "Services", "Years of Experience"]
  },
  {
    name: "JustDial",
    url: "https://www.justdial.com",
    category: "Local Business Directory",
    importance: "High",
    fields: ["Business Name", "Address", "Phone", "Ratings", "Reviews", "Photos"]
  },
  {
    name: "Sulekha",
    url: "https://www.sulekha.com",
    category: "Services Directory",
    importance: "Medium",
    fields: ["Business Profile", "Service Areas", "Contact Details", "Portfolio"]
  },
  {
    name: "NearMeTrade",
    url: "https://www.nearmetrade.com",
    category: "Trade Directory",
    importance: "Medium",
    fields: ["Company Profile", "Trade License", "GST Number", "Services"]
  },
  {
    name: "TradeIndia",
    url: "https://www.tradeindia.com",
    category: "B2B Platform",
    importance: "Medium",
    fields: ["Supplier Profile", "Product Catalog", "Certifications", "Location"]
  }
];

/**
 * Generate local business schema optimized for Google My Business and local search
 */
export const generateLocalBusinessSchema = (locationKey: keyof typeof APEX_LOCATIONS) => {
  const location = APEX_LOCATIONS[locationKey];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://apexenterprises.net/locations/${locationKey}`,
    "name": location.name,
    "description": location.description,
    "url": location.website,
    "telephone": location.phone,
    "email": location.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.street,
      "addressLocality": location.address.city,
      "addressRegion": location.address.state,
      "postalCode": location.address.postalCode,
      "addressCountry": location.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.latitude,
      "longitude": location.coordinates.longitude
    },
    "openingHoursSpecification": Object.entries(location.operatingHours).map(([day, hours]) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day,
      "opens": hours.split('-')[0],
      "closes": hours.split('-')[1] || "Closed"
    })),
    "serviceArea": location.serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Workforce Solutions",
      "itemListElement": location.categories.map(category => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": category,
          "provider": {
            "@type": "Organization",
            "name": location.name
          }
        }
      }))
    },
    "areaServed": location.serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "knowsLanguage": location.languages,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    },
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "Cheque", "Bank Transfer", "Online Payment"],
    "currenciesAccepted": "INR"
  };
};

/**
 * Generate location-specific page metadata
 */
export const generateLocationPageMeta = (
  locationKey: keyof typeof APEX_LOCATIONS,
  service?: string
) => {
  const location = APEX_LOCATIONS[locationKey];
  const keywords = LOCAL_KEYWORDS[locationKey];

  const baseTitle = service
    ? `${service} in ${location.address.city}, ${location.address.state} | Apex Enterprises`
    : `Workforce Solutions in ${location.address.city} | Apex Enterprises`;

  const description = service
    ? `Professional ${service.toLowerCase()} in ${location.address.city}, ${location.address.state}. Trusted by 500+ companies with 20+ years experience. Contact Apex Enterprises today.`
    : location.description;

  return {
    title: baseTitle,
    description: description,
    keywords: [
      ...keywords.primary,
      ...keywords.secondary,
      ...keywords.longTail.slice(0, 3)
    ].join(", "),
    canonical: `/locations/${locationKey}${service ? `/${service.toLowerCase().replace(/\s+/g, '-')}` : ''}`,
    hreflang: {
      "en-IN": location.website,
      "hi-IN": location.website,
      "x-default": location.website
    },
    geo: {
      region: `${location.address.country}-${location.address.state.substring(0, 2).toUpperCase()}`,
      placename: location.address.city,
      position: `${location.coordinates.latitude};${location.coordinates.longitude}`,
      ICBM: `${location.coordinates.latitude}, ${location.coordinates.longitude}`
    }
  };
};

/**
 * Generate FAQ content optimized for voice search and conversational queries
 */
export const generateLocalFAQs = (locationKey: keyof typeof APEX_LOCATIONS) => {
  const location = APEX_LOCATIONS[locationKey];
  const keywords = LOCAL_KEYWORDS[locationKey];

  return [
    {
      question: `What services does Apex Enterprises provide in ${location.address.city}?`,
      answer: `Apex Enterprises provides comprehensive workforce solutions in ${location.address.city} including ${location.categories.slice(0, 4).join(', ')}. We've been serving businesses in ${location.address.state} since 2002 with 100% compliance and proven results.`,
      category: "services",
      keywords: keywords.primary
    },
    {
      question: `How long has Apex Enterprises been operating in ${location.address.city}?`,
      answer: `Apex Enterprises has been providing workforce solutions in ${location.address.city}, ${location.address.state} since 2002 - over 20 years of proven expertise. We've served 500+ companies across the region with zero compliance issues.`,
      category: "experience",
      keywords: ["experience", "years", "established"]
    },
    {
      question: `What areas does Apex Enterprises serve around ${location.address.city}?`,
      answer: `We serve ${location.serviceAreas.join(', ')} and surrounding areas. Our comprehensive coverage across ${location.address.state} ensures local expertise with centralized quality control.`,
      category: "coverage",
      keywords: keywords.secondary
    },
    {
      question: `How can I contact Apex Enterprises in ${location.address.city}?`,
      answer: `You can reach our ${location.address.city} office at ${location.phone} or email us at ${location.email}. We're located at ${location.address.street}, ${location.address.city}. Our team responds within 4 hours for all inquiries.`,
      category: "contact",
      keywords: ["contact", "phone", "address"]
    },
    {
      question: `What makes Apex Enterprises the best choice in ${location.address.city}?`,
      answer: `With 20+ years in ${location.address.city}, zero compliance violations, 500+ satisfied clients, and expertise in ${location.categories.length} service categories, we're the trusted workforce partner for businesses across ${location.address.state}.`,
      category: "benefits",
      keywords: keywords.conversational
    }
  ];
};

/**
 * Generate citation data for directory submissions
 */
export const generateCitationData = (locationKey: keyof typeof APEX_LOCATIONS) => {
  const location = APEX_LOCATIONS[locationKey];

  return {
    businessName: location.name,
    address: location.address,
    phone: location.phone,
    email: location.email,
    website: location.website,
    description: location.description,
    categories: location.categories,
    serviceAreas: location.serviceAreas,
    operatingHours: location.operatingHours,
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/apex-enterprises1/",
      facebook: "https://www.facebook.com/apexenterprisesgurgaon"
    },
    certifications: [
      "ISO 9001:2015 Certified",
      "MSME Registered",
      "PSARA License",
      "Labour License"
    ],
    yearEstablished: "2002",
    employeeCount: "100-500",
    annualTurnover: "₹10-50 Crore"
  };
};

/**
 * Generate internal linking structure for local SEO
 */
export const generateInternalLinkingMap = () => {
  return {
    servicePages: [
      { path: "/services/security", anchor: "Security Services", priority: "high" },
      { path: "/services/housekeeping", anchor: "Housekeeping Services", priority: "high" },
      { path: "/services/manpower", anchor: "Manpower Consultancy", priority: "high" },
      { path: "/services/placement", anchor: "Placement Services", priority: "medium" },
      { path: "/services/facility-management", anchor: "Facility Management", priority: "medium" }
    ],
    locationPages: [
      { path: "/locations/gurgaon", anchor: "Services in Gurgaon", priority: "high" },
      { path: "/locations/manesar", anchor: "Manesar Operations", priority: "high" },
      { path: "/locations/bhiwadi", anchor: "Bhiwadi Services", priority: "medium" }
    ],
    industryPages: [
      { path: "/industries/automotive", anchor: "Automotive Sector", priority: "high" },
      { path: "/industries/manufacturing", anchor: "Manufacturing Industry", priority: "high" },
      { path: "/industries/it", anchor: "IT Services", priority: "medium" }
    ]
  };
};

/**
 * Generate review schema markup for testimonials
 */
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  company?: string;
}>) => {
  return reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author,
      "worksFor": review.company ? {
        "@type": "Organization",
        "name": review.company
      } : undefined
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "publisher": {
      "@type": "Organization",
      "name": "Apex Enterprises"
    }
  }));
};

// Export utility functions for easy use
export const LocalSEOUtils = {
  generateLocalBusinessSchema,
  generateLocationPageMeta,
  generateLocalFAQs,
  generateCitationData,
  generateInternalLinkingMap,
  generateReviewSchema,
  APEX_LOCATIONS,
  LOCAL_KEYWORDS,
  INDIAN_CITATIONS
}; 