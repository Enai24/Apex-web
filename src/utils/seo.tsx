import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  schema?: object;
  noindex?: boolean;
}

/**
 * SEO Component - In Next.js, use the Metadata API instead
 * This is a placeholder that renders nothing since Next.js handles SEO at the page level
 */
export const SEO: React.FC<SEOProps> = () => {
  // In Next.js App Router, metadata should be exported from page.tsx files
  // see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  return null;
};

/**
 * LocalSEO Component for city/location-specific pages
 * In Next.js, use generateMetadata function in page.tsx files
 */
interface LocalSEOProps {
  city: string;
  region: string;
  service: string;
  latitude: number;
  longitude: number;
  cityDescription: string;
  address: string;
  postalCode: string;
  telephone: string;
  image: string;
}

export const LocalSEO: React.FC<LocalSEOProps> = () => {
  // In Next.js App Router, metadata should be exported from page.tsx files
  return null;
};

/**
 * Generate structured data for FAQ sections
 * @param faqs Array of FAQ items with question and answer
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

/**
 * Generate SoftwareApplication schema for the Apex Platform
 */
export const generatePlatformSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Apex Workforce Intelligence Platform',
    operatingSystem: 'Web-based',
    applicationCategory: 'BusinessApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR'
    }
  };
};

/**
 * Generate structured data for articles or blog posts
 */
export const generateArticleSchema = ({
  headline,
  description,
  authorName,
  publishDate,
  modifiedDate,
  image,
  articleUrl,
}: {
  headline: string;
  description: string;
  authorName: string;
  publishDate: string;
  modifiedDate?: string;
  image: string;
  articleUrl: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline,
    description,
    image,
    author: {
      '@type': 'Person',
      name: authorName,
      url: 'https://apexenterprises.net/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Apex Enterprises',
      logo: {
        '@type': 'ImageObject',
        url: 'https://apexenterprises.net/logo.svg',
      },
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    speakable: {
      '@type': 'Speakable',
      xpath: ['/html/head/title', '/html/head/meta[@name="description"]/@content']
    }
  };
};

/**
 * Generate structured data for a service
 */
export const generateServiceSchema = ({
  name,
  description,
  url,
  image,
  providerName = 'Apex Enterprises',
  providerUrl = 'https://apexenterprises.net',
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  providerName?: string;
  providerUrl?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: providerUrl,
    },
  };
};

/**
 * Generate breadcrumb structured data for improved navigation in search results
 */
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://apexenterprises.net${item.url}`
    }))
  };
};

/**
 * Generate JobPosting schema for job listings
 */
export const generateJobPostingSchema = ({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  jobLocation,
  salary,
  hiringOrganization = 'Apex Enterprises',
  jobUrl,
}: {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string; // 'FULL_TIME', 'PART_TIME', 'CONTRACTOR', etc.
  jobLocation: string; // City name
  salary?: {
    currency: string;
    value: string;
    unitText: string; // 'MONTH', 'YEAR', etc.
  };
  hiringOrganization?: string;
  jobUrl: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization,
      sameAs: 'https://apexenterprises.net',
      logo: 'https://apexenterprises.net/logo.svg'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: jobLocation,
        addressRegion: '',
        addressCountry: 'IN'
      }
    },
    ...(salary ? {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: salary.currency,
        value: {
          '@type': 'QuantitativeValue',
          value: salary.value,
          unitText: salary.unitText
        }
      }
    } : {}),
    url: jobUrl
  };
};