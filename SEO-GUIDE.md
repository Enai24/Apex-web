# SEO Best Practices for Apex Enterprises Website

This guide outlines the SEO implementation for the Apex Enterprises website and provides guidelines for maintaining and enhancing SEO performance.

## Table of Contents

1. [SEO Implementation Overview](#seo-implementation-overview)
2. [Page-Specific SEO Guidelines](#page-specific-seo-guidelines)
3. [Local SEO Implementation](#local-seo-implementation)
4. [Sitemap & Robots.txt](#sitemap--robotstxt)
5. [Structured Data](#structured-data)
6. [Image Optimization](#image-optimization)
7. [Performance Optimization](#performance-optimization)
8. [Monitoring & Maintenance](#monitoring--maintenance)
9. [SEO Components Usage](#seo-components-usage)

## SEO Implementation Overview

Our website implements the following SEO features:

- **Meta Tags**: Each page has unique title, description, and keyword meta tags
- **Structured Data**: JSON-LD schema markup for organization, services, FAQs
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3) and semantic elements
- **Canonical URLs**: All pages have canonical URLs to prevent duplicate content
- **Sitemap.xml**: Auto-generated sitemap with all important pages
- **Robots.txt**: Properly configured for search engine crawling
- **Open Graph & Twitter Cards**: Social media optimization
- **Local SEO**: City-specific targeting for key service areas across India
- **Breadcrumb Navigation**: Enhanced navigation structure for SEO
- **Mobile Optimization**: Responsive design with proper viewport settings

## Page-Specific SEO Guidelines

When creating or updating pages, follow these guidelines:

### Homepage

- **Title**: "Apex Enterprises | India's Leading AI-Driven Workforce Solutions Provider"
- **Description**: "Transform your workforce with Apex Enterprises' AI-powered staffing, compliance, and payroll solutions across India. Intelligent solutions for modern businesses."
- **H1**: There should be only one H1 tag on the page
- **Schema**: Use Organization and WebSite schema

### Service Pages

- **Title**: "[Service Name] Services in India | Apex Enterprises"
- **Description**: "Professional [Service Name] services across India with [unique value proposition]. [Include 1-2 benefits]"
- **URL Structure**: `/services/[service-name]`
- **Schema**: Use Service schema type
- **Keywords**: Include industry-specific terms and locations

### Industry Pages

- **Title**: "[Industry] Workforce Solutions | Apex Enterprises"
- **Description**: "Specialized workforce solutions for [industry] companies in India. [Include industry-specific benefit]."
- **URL Structure**: `/industries/[industry-name]`
- **Schema**: Use appropriate industry schema

### AI Workforce Solutions Pages

- **Title**: "AI-Powered [Solution Name] | Apex Enterprises"
- **Description**: "Transform your [workforce area] with intelligent AI solutions from Apex Enterprises. [Include key metric or benefit with percentage]."
- **URL Structure**: `/ai-workforce-solutions/[solution-name]`
- **Schema**: Use Service schema with AI-specific attributes
- **Focus Keywords**: Include terms like "AI workforce solutions," "intelligent staffing," "predictive workforce analytics," etc.
- **Content Guidelines**: 
  - Emphasize measurable results and statistics
  - Include case studies with specific metrics
  - Use structured data for FAQs about AI solutions
  - Include testimonials from companies using the AI solutions

## Local SEO Implementation

For location-specific targeting, we've implemented dedicated features:

### Location Pages

- Create location-specific pages using the LocalSEO component
- Target major Indian cities with dedicated service landing pages
- URL structure: `/locations/[city-name]`

### How to Implement Local SEO

```tsx
import { LocalSEO } from '../utils/seo';

// In your location-specific component:
<LocalSEO
  city="Mumbai"
  region="Maharashtra"
  service="Contract Staffing"
  latitude={19.0760}
  longitude={72.8777}
  cityDescription="Premier contract staffing services in Mumbai with complete regulatory compliance and industry-specific talent solutions."
/>

// Component body with city-specific content...
```

### Google Business Profile

- Maintain complete and accurate Google Business Profile listings for all office locations
- Ensure NAP (Name, Address, Phone) consistency across all platforms
- Regularly post updates and respond to reviews on Google Business

### Local Citations

- Ensure consistent business information across these directories:
  - IndiaMart
  - Justdial
  - Sulekha
  - IndiaYellowPages
  - TradeIndia

## Sitemap & Robots.txt

The sitemap.xml and robots.txt files are automatically generated:

- **Sitemap Generation**: Run `npm run generate-sitemap` to update the sitemap
- **Build with Sitemap**: Run `npm run build:with-sitemap` to build with updated sitemap

### Robots.txt Guidelines

- Do not block CSS or JavaScript files
- Only block admin areas and private sections
- Keep the Crawl-delay at 10 seconds

## Structured Data

We use structured data to enhance search results:

- **Organization**: Company information, logo, contact details
- **Service**: Individual service pages
- **FAQ**: FAQ sections use the FAQPage schema
- **Articles**: Blog posts use the Article schema
- **LocalBusiness**: For location-specific pages
- **JobPosting**: For job listings
- **BreadcrumbList**: For navigation structure

Implementation is handled through the utility functions in `src/utils/seo.tsx`:

```tsx
// Example of adding FAQ schema
import { SEO, generateFAQSchema } from '../utils/seo';

// In your component:
const faqData = [
  {
    question: "How does AI-powered talent matching work?",
    answer: "Our proprietary algorithms analyze 40+ parameters to match candidates with job requirements with 94% accuracy, reducing hiring time by 65%."
  }
];

<SEO 
  title="AI-Powered Talent Matching | Apex Enterprises"
  description="Match candidates to jobs with 94% accuracy using our intelligent AI algorithms. Reduce hiring time by 65% while improving quality."
  structuredData={generateFAQSchema(faqData)}
/>
```

## Image Optimization

Follow these guidelines for image optimization:

1. Use modern formats (WebP) with JPG/PNG fallbacks
2. Set appropriate width and height attributes
3. Use responsive images with `srcset` and `sizes`
4. Add descriptive `alt` text that includes keywords when relevant
5. Compress images before uploading
6. Use the `loading="lazy"` attribute for below-the-fold images

## Performance Optimization

SEO is affected by performance. Ensure:

1. Core Web Vitals are optimized:
   - Largest Contentful Paint (LCP) < 2.5s
   - First Input Delay (FID) < 100ms
   - Cumulative Layout Shift (CLS) < 0.1
2. CSS and JS are minified
3. Images are optimized and lazy-loaded
4. First Contentful Paint is under 2 seconds
5. Implement critical CSS for above-the-fold content
6. Enable text compression (gzip/Brotli)

## Monitoring & Maintenance

Regularly check SEO performance:

1. Set up Google Search Console and monitor coverage issues
2. Review performance in Google Analytics 4
3. Perform quarterly site audits with tools like Lighthouse
4. Update the sitemap.xml when adding new pages
5. Check for broken links and fix them promptly
6. Monitor Core Web Vitals and address any issues
7. Track keyword rankings with a professional SEO tool

## SEO Components Usage

### Basic SEO Component

Use the `SEO` component from `src/utils/seo.tsx` for consistent implementation:

```tsx
import { SEO } from '../utils/seo';

<SEO
  title="Page Title | Apex Enterprises"
  description="Page description for search engines and social sharing."
  keywords="keyword1, keyword2, keyword3"
  canonical="/current-page-path"
  schema={/* optional structured data object */}
/>
```

### Head Component

For basic layout-level SEO, the `Head` component is used in `PublicLayout`:

```tsx
import Head from './components/layout/Head';

<Head 
  title="Page Title | Apex Enterprises" 
  description="Page description"
  canonicalPath="/path"
/>
```

### Structured Data Utilities

Use the schema generator utilities for specific content types:

```tsx
import { 
  generateServiceSchema, 
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateJobPostingSchema 
} from '../utils/seo';

// Example usage
const serviceSchema = generateServiceSchema({
  name: "Contract Staffing",
  description: "Professional staffing services across India",
  url: "https://apexenterprises.net/services/contract-staffing",
  image: "https://apexenterprises.net/images/services/contract-staffing.jpg"
});

// Use in SEO component
<SEO 
  title="Service Title"
  description="Service description"
  schema={serviceSchema}
/>
```

---

*Last updated: May 23, 2023* 