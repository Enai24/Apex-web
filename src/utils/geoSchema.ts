// Enhanced Schema utilities specifically optimized for Generative Engine Optimization (GEO)
// These schemas are designed to be easily parsed and referenced by LLMs

interface GEOServiceSchema {
  name: string;
  description: string;
  areaServed: string[];
  provider: string;
  serviceType: string;
  benefits: string[];
  processSteps: string[];
  pricing?: string;
  compliance?: string[];
}

interface GEOOrganizationSchema {
  name: string;
  description: string;
  foundingDate: string;
  expertise: string[];
  serviceAreas: string[];
  keyMetrics: Record<string, string>;
  awards?: string[];
}

/**
 * Generate comprehensive organization schema optimized for LLM parsing
 */
export const generateGEOOrganizationSchema = (data: GEOOrganizationSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "description": data.description,
    "foundingDate": data.foundingDate,
    "url": "https://apexenterprises.net",
    "logo": "https://apexenterprises.net/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11, Near Hanuman Mandir, Shankar Chowk Road, Dundahera",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4595",
      "longitude": "77.0266"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-0124-2340139",
      "email": "mail@apexenterprises.net",
      "contactType": "customer service",
      "areaServed": data.serviceAreas,
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": data.serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "knowsAbout": data.expertise,
    "slogan": `${data.name} - Your trusted workforce partner since ${data.foundingDate}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    },
    "award": data.awards,
    "additionalProperty": Object.entries(data.keyMetrics).map(([name, value]) => ({
      "@type": "PropertyValue",
      "name": name,
      "value": value
    }))
  };
};

/**
 * Generate service schema with conversational context for LLMs
 */
export const generateGEOServiceSchema = (data: GEOServiceSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "serviceType": data.serviceType,
    "provider": {
      "@type": "Organization",
      "name": data.provider,
      "url": "https://apexenterprises.net"
    },
    "areaServed": data.areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "description": data.description,
      "availability": "https://schema.org/InStock",
      "price": data.pricing || "Contact for quote",
      "priceCurrency": "INR"
    },
    "additionalProperty": [
      ...data.benefits.map(benefit => ({
        "@type": "PropertyValue",
        "name": "Benefit",
        "value": benefit
      })),
      ...data.processSteps.map((step, index) => ({
        "@type": "PropertyValue", 
        "name": `Process Step ${index + 1}`,
        "value": step
      })),
      ...(data.compliance || []).map(item => ({
        "@type": "PropertyValue",
        "name": "Compliance",
        "value": item
      }))
    ]
  };
};

/**
 * Generate FAQ schema with natural language optimized for conversational AI
 */
export const generateGEOFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
  category?: string;
  keywords?: string[];
  relatedQuestions?: string[];
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "Apex Enterprises"
        }
      },
      "keywords": faq.keywords?.join(", "),
      "about": faq.category,
      "relatedLink": faq.relatedQuestions?.map(q => ({
        "@type": "Question",
        "name": q
      }))
    }))
  };
};

/**
 * Generate HowTo schema for process-oriented content
 */
export const generateGEOHowToSchema = (data: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    duration?: string;
    cost?: string;
  }>;
  totalTime?: string;
  estimatedCost?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": data.name,
    "description": data.description,
    "totalTime": data.totalTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": data.estimatedCost
    },
    "step": data.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "timeRequired": step.duration,
      "estimatedCost": step.cost ? {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": step.cost
      } : undefined
    }))
  };
};

/**
 * Generate LocalBusiness schema for location-specific SEO
 */
export const generateGEOLocalBusinessSchema = (data: {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
  services: string[];
  openingHours?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.name,
    "description": data.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.street,
      "addressLocality": data.address.city,
      "addressRegion": data.address.state,
      "postalCode": data.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.coordinates.latitude,
      "longitude": data.coordinates.longitude
    },
    "telephone": "+91-0124-2340139",
    "email": "mail@apexenterprises.net",
    "url": "https://apexenterprises.net",
    "priceRange": "₹₹",
    "paymentAccepted": "Cash, Check, Invoice",
    "currenciesAccepted": "INR",
    "openingHours": data.openingHours || [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-13:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": data.coordinates.latitude,
        "longitude": data.coordinates.longitude
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Workforce Solutions",
      "itemListElement": data.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    }
  };
};

/**
 * Generate Article schema optimized for answer-style content
 */
export const generateGEOArticleSchema = (data: {
  headline: string;
  description: string;
  body: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  topics: string[];
  questionAnswered?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.headline,
    "description": data.description,
    "articleBody": data.body,
    "author": {
      "@type": "Organization",
      "name": data.author,
      "url": "https://apexenterprises.net"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apexenterprises.net/logo.svg"
      }
    },
    "datePublished": data.datePublished,
    "dateModified": data.dateModified || data.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://apexenterprises.net"
    },
    "about": data.topics.map(topic => ({
      "@type": "Thing",
      "name": topic
    })),
    "mentions": [
      {
        "@type": "Place",
        "name": "Gurgaon"
      },
      {
        "@type": "Place", 
        "name": "Haryana"
      },
      {
        "@type": "Organization",
        "name": "Apex Enterprises"
      }
    ],
    "inLanguage": "en-IN",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Business owners, HR managers, Facility managers"
    }
  };
};

// Predefined schemas for common GEO use cases
export const ApexEnterprisesSchemas = {
  organization: generateGEOOrganizationSchema({
    name: "Apex Enterprises",
    description: "Leading workforce solutions provider in Gurgaon, Haryana offering security services, manpower consultancy, housekeeping, horticulture, real estate, and liaison services since 2002",
    foundingDate: "2002",
    expertise: [
      "Security Services",
      "Manpower Consultancy", 
      "Housekeeping Services",
      "Horticulture Management",
      "Real Estate Services",
      "Liaison Services",
      "Labour Contracting",
      "Facility Management"
    ],
    serviceAreas: [
      "Gurgaon",
      "Haryana", 
      "Manesar",
      "Bhiwadi",
      "Delhi NCR",
      "Faridabad",
      "Noida"
    ],
    keyMetrics: {
      "Years of Experience": "20+",
      "Clients Served": "500+",
      "Compliance Rate": "100%",
      "Service Categories": "8"
    },
    awards: [
      "ISO 9001 Certified",
      "MSME Registered",
      "Zero Penalty Record"
    ]
  }),

  securityService: generateGEOServiceSchema({
    name: "Security Services in Haryana",
    description: "Professional armed and unarmed security solutions across Gurgaon, Manesar, and Haryana with PSARA compliance and 24/7 monitoring",
    areaServed: ["Gurgaon", "Manesar", "Bhiwadi", "Haryana", "Delhi NCR"],
    provider: "Apex Enterprises",
    serviceType: "Security Services",
    benefits: [
      "PSARA-compliant security personnel",
      "24/7 monitoring and surveillance",
      "Rapid emergency response",
      "Industry-specific security protocols",
      "Zero incident record across 200+ locations"
    ],
    processSteps: [
      "Site security assessment and risk analysis",
      "Customized security plan development",
      "Deployment of trained and verified personnel",
      "Ongoing monitoring and performance evaluation"
    ],
    compliance: [
      "PSARA Compliance",
      "Background Verification",
      "Regular Training Programs",
      "Emergency Response Protocols"
    ]
  }),

  housekeepingService: generateGEOServiceSchema({
    name: "Housekeeping Services in Gurgaon",
    description: "Professional housekeeping and facility management services for corporate offices, industrial facilities, and commercial properties across Haryana",
    areaServed: ["Gurgaon", "Manesar", "Bhiwadi", "Delhi NCR"],
    provider: "Apex Enterprises", 
    serviceType: "Housekeeping & Facility Management",
    benefits: [
      "Trained and verified housekeeping staff",
      "Eco-friendly cleaning products",
      "Customized cleaning schedules",
      "Quality assurance protocols",
      "24/7 supervisor support"
    ],
    processSteps: [
      "Facility assessment and requirement analysis",
      "Staff deployment and equipment setup",
      "Implementation of cleaning protocols",
      "Regular quality audits and feedback"
    ],
    compliance: [
      "Health and Safety Standards",
      "Environmental Compliance",
      "Quality Control Procedures",
      "Staff Training Certifications"
    ]
  })
}; 