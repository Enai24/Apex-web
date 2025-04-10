import React from 'react';
import { Helmet } from 'react-helmet-async';

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
 * SEO Component for consistent meta tag implementation across the website
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://apexenterprises.net/og-image.jpg',
  twitterImage = 'https://apexenterprises.net/twitter-image.jpg',
  schema,
  noindex = false,
}) => {
  // Base URL for canonical links
  const baseUrl = 'https://apexenterprises.net';
  
  // Derive canonical URL if not provided
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots Meta Tag */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

/**
 * LocalSEO Component for city/location-specific pages
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

export const LocalSEO: React.FC<LocalSEOProps> = ({
  city,
  region,
  service,
  latitude,
  longitude,
  cityDescription,
  address,
  postalCode,
  telephone,
  image
}) => {
  const pageTitle = `${service} in ${city}, ${region} | Apex Enterprises`;
  const pageDescription = cityDescription;
  const canonicalUrl = `https://apexenterprises.net/locations/${city.toLowerCase()}`;
  
  // Format the structured data for LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: 'Apex Enterprises',
    image,
    '@id': canonicalUrl,
    url: canonicalUrl,
    telephone,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      addressRegion: region,
      postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: city
      },
      {
        '@type': 'City',
        name: region
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude,
        longitude
      },
      geoRadius: '50000'
    },
    description: cityDescription,
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="business:contact_data:street_address" content={address} />
      <meta property="business:contact_data:locality" content={city} />
      <meta property="business:contact_data:region" content={region} />
      <meta property="business:contact_data:postal_code" content={postalCode} />
      <meta property="business:contact_data:country_name" content="India" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* City/location specific meta tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content={city} />
      <meta name="geo.position" content={`${latitude};${longitude}`} />
      <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
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
  items: {name: string; url: string}[]
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