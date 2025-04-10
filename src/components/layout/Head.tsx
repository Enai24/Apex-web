import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  twitterImage?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  locale?: string;
}

/**
 * Enhanced global head component for layout with comprehensive SEO values
 */
export default function Head({
  title = 'Apex Enterprises | Workforce Solutions Provider in India',
  description = 'India\'s leading provider of workforce solutions including contract staffing, payroll services, and regulatory compliance across all 28 states.',
  keywords = 'workforce solutions, contract staffing, payroll services, compliance management, India, manpower services',
  canonicalPath = '',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterImage = '/twitter-image.jpg',
  structuredData,
  noindex = false,
  locale = 'en_IN',
}: HeadProps) {
  const siteUrl = 'https://apexenterprises.net';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  
  // Ensure ogImage has absolute URL
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const twitterImageUrl = twitterImage.startsWith('http') ? twitterImage : `${siteUrl}${twitterImage}`;
  
  // Default organization structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Apex Enterprises',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: 'India\'s leading provider of workforce solutions including contract staffing, payroll services, and regulatory compliance across all 28 Indian states.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11, Near Hanuman Mandir, Shankar Chowk Road, Dundahera',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122016',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-0124-2340139',
      contactType: 'customer service',
      email: 'mail@apexenterprises.net'
    },
    sameAs: [
      'https://www.linkedin.com/company/apex-enterprises1/',
      'https://twitter.com/ApexEnterprisesIndia',
      'https://www.facebook.com/ApexEnterprisesIndia'
    ]
  };
  
  // Combine provided structured data with default organization data
  const finalStructuredData = structuredData || defaultStructuredData;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Apex Enterprises" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Gurgaon" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Apex Enterprises" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImageUrl} />
      <meta property="twitter:site" content="@ApexEnterprisesIndia" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="image" href={ogImageUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {typeof finalStructuredData === 'string' 
          ? finalStructuredData 
          : JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Security */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self';" />
    </Helmet>
  );
} 

// Export utility functions for structured data
export const generateServiceSchema = (serviceData: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      '@type': 'Organization',
      name: 'Apex Enterprises',
      url: 'https://apexenterprises.net',
    },
    url: serviceData.url,
    ...(serviceData.image && { image: serviceData.image }),
  };
};

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

export const generateLocalBusinessSchema = (location: {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  latitude?: number;
  longitude?: number;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: location.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      postalCode: location.postalCode,
      addressCountry: 'IN'
    },
    telephone: location.telephone,
    ...(location.latitude && location.longitude ? {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.latitude,
        longitude: location.longitude
      }
    } : {})
  };
}; 