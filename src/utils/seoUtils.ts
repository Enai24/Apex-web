// SEO Utilities for Apex Enterprises
// Handles canonical URLs, pagination, HTTPS enforcement, and meta tags

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  itemsPerPage: number;
  totalItems: number;
}

export interface SEOCanonicalConfig {
  path: string;
  params?: Record<string, string>;
  forceHTTPS?: boolean;
}

// Force HTTPS on all URLs to prevent SSL issues
export function enforceHTTPS(url: string): string {
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
}

// Generate canonical URL with proper HTTPS enforcement
export function generateCanonicalUrl(config: SEOCanonicalConfig): string {
  const baseUrl = 'https://apexenterprises.net'; // Always use HTTPS
  let canonicalUrl = `${baseUrl}${config.path}`;
  
  // Remove query parameters for pagination - use clean URLs instead
  if (config.params) {
    // Convert ?p= parameters to /page/X/ format
    if (config.params.p && parseInt(config.params.p) > 1) {
      canonicalUrl = `${baseUrl}${config.path}/page/${config.params.p}/`;
    }
  }
  
  return enforceHTTPS(canonicalUrl);
}

// Generate pagination meta tags for SEO
export function generatePaginationMeta(pagination: PaginationMeta): {
  canonical: string;
  prev?: string;
  next?: string;
  linkTags: string[];
} {
  const { currentPage, totalPages, baseUrl } = pagination;
  const httpsBaseUrl = enforceHTTPS(baseUrl);
  
  // Canonical always points to page 1 for consolidation
  const canonical = currentPage === 1 
    ? httpsBaseUrl 
    : `${httpsBaseUrl}/page/${currentPage}/`;
  
  const linkTags: string[] = [];
  
  // Previous page link
  let prev: string | undefined;
  if (currentPage > 1) {
    prev = currentPage === 2 
      ? httpsBaseUrl 
      : `${httpsBaseUrl}/page/${currentPage - 1}/`;
    linkTags.push(`<link rel="prev" href="${prev}" />`);
  }
  
  // Next page link
  let next: string | undefined;
  if (currentPage < totalPages) {
    next = `${httpsBaseUrl}/page/${currentPage + 1}/`;
    linkTags.push(`<link rel="next" href="${next}" />`);
  }
  
  // Self-referencing canonical
  linkTags.push(`<link rel="canonical" href="${canonical}" />`);
  
  return {
    canonical,
    prev,
    next,
    linkTags
  };
}

// Generate city guide content to avoid thin pages
export function generateCityGuideContent(city: string): {
  title: string;
  description: string;
  content: string;
  keywords: string[];
} {
  const cityGuides = {
    mumbai: {
      wages: { minimum: 348, skilled: 450, professional: 25000 },
      compliance: ['Shops & Establishment Act', 'Maharashtra Labour Welfare Fund', 'Professional Tax'],
      successStory: 'Helped TechCorp Mumbai reduce recruitment time by 60% while ensuring 100% EPF compliance across 500+ employees.'
    },
    delhi: {
      wages: { minimum: 375, skilled: 490, professional: 28000 },
      compliance: ['Delhi Shops & Establishment Act', 'Labour Welfare Fund', 'Professional Tax'],
      successStory: 'Streamlined workforce management for Manufacturing Plus Delhi, covering 800+ blue-collar workers with zero compliance issues.'
    },
    bangalore: {
      wages: { minimum: 325, skilled: 420, professional: 22000 },
      compliance: ['Karnataka Shops & Establishment Act', 'Karnataka Labour Welfare Fund', 'Professional Tax'],
      successStory: 'Transformed hiring process for StartupHub Bangalore, achieving 95% candidate satisfaction with AI-powered screening.'
    },
    hyderabad: {
      wages: { minimum: 315, skilled: 410, professional: 20000 },
      compliance: ['Telangana Shops & Establishment Act', 'Labour Welfare Fund', 'Professional Tax'],
      successStory: 'Enabled PharmaGiant Hyderabad to scale from 200 to 1000+ employees while maintaining regulatory compliance.'
    },
    pune: {
      wages: { minimum: 340, skilled: 435, professional: 23000 },
      compliance: ['Maharashtra Shops & Establishment Act', 'Labour Welfare Fund', 'Professional Tax'],
      successStory: 'Revolutionized automotive sector hiring for AutoTech Pune with 70% faster onboarding process.'
    }
  };

  const cityData = cityGuides[city.toLowerCase() as keyof typeof cityGuides] || cityGuides.mumbai;
  
  return {
    title: `Staffing Solutions in ${city} | Apex Enterprises - Complete Guide 2024`,
    description: `Comprehensive staffing and workforce solutions in ${city}. Expert compliance management, competitive wages, and proven success stories. Get your free consultation today.`,
    content: `
# Professional Staffing Solutions in ${city} - Complete Business Guide

## Overview of ${city}'s Workforce Landscape

${city} represents a significant business hub in India, offering diverse opportunities for companies seeking skilled talent and reliable workforce solutions. Our comprehensive staffing services have helped over 500+ companies in ${city} achieve their workforce goals while maintaining 100% regulatory compliance.

## Statutory Wage Structure in ${city} (2024)

Understanding local wage requirements is crucial for compliance and budget planning:

| Category | Daily Wage (₹) | Monthly Equivalent (₹) |
|----------|---------------|----------------------|
| Unskilled Workers | ${cityData.wages.minimum} | ${cityData.wages.minimum * 26} |
| Skilled Workers | ${cityData.wages.skilled} | ${cityData.wages.skilled * 26} |
| Professional Staff | N/A | ${cityData.wages.professional}+ |

*Note: Wages include basic pay, dearness allowance, and statutory benefits as per ${city} regional guidelines.*

## Key Compliance Requirements in ${city}

Our expert team ensures adherence to all local regulations:

${cityData.compliance.map(law => `- **${law}**: Complete documentation and filing support`).join('\n')}
- **EPF & ESI Management**: Automated compliance with zero penalties
- **Labour Contract Management**: End-to-end documentation support
- **Statutory Audit Preparation**: Regular compliance health checks

## Success Story: ${city} Implementation

**Case Study**: ${cityData.successStory}

This demonstrates our proven track record in ${city}'s unique business environment, combining local market knowledge with cutting-edge technology solutions.

## Industries We Serve in ${city}

- **Information Technology**: Software development, testing, support services
- **Manufacturing**: Production line workers, quality control, logistics
- **Healthcare**: Medical staff, administrative support, facility management
- **Financial Services**: Customer service, data entry, compliance officers
- **Retail & E-commerce**: Store associates, warehouse staff, delivery personnel

## Why Choose Apex Enterprises in ${city}?

### Local Expertise
- 15+ years of experience in ${city} market
- Deep understanding of regional labour laws
- Established network of pre-verified candidates
- Local language support and cultural alignment

### Technology-Driven Solutions
- AI-powered candidate matching (94% accuracy rate)
- Real-time compliance monitoring
- Automated payroll and statutory filings
- Mobile-first candidate experience

### Proven Track Record
- 99.7% compliance success rate
- 60% faster hiring compared to traditional methods
- 95% client retention rate in ${city}
- Zero penalty record for statutory violations

## Getting Started with Apex Enterprises in ${city}

**Step 1**: Free Consultation Call
Schedule a 30-minute discussion with our ${city} team to understand your specific requirements.

**Step 2**: Customized Solution Design
We create a tailored workforce strategy based on your industry, size, and compliance needs.

**Step 3**: Implementation & Onboarding
Our dedicated team manages the entire process from candidate sourcing to final placement.

**Step 4**: Ongoing Support
Continuous monitoring, compliance updates, and performance optimization.

## Contact Our ${city} Office

Ready to transform your workforce management? Our local ${city} team is here to help.

- **Local Office**: ${city} Business District
- **Response Time**: Within 4 hours for all inquiries
- **Languages Supported**: English, Hindi, and local regional languages
- **Service Areas**: Greater ${city} metropolitan area

## Frequently Asked Questions - ${city} Operations

**Q: What is the minimum contract duration for staffing services in ${city}?**
A: We offer flexible contracts starting from 3 months, with most clients preferring 12-month agreements for better cost optimization.

**Q: How quickly can you deploy staff in ${city}?**
A: For pre-verified roles, deployment typically takes 3-5 business days. For specialized positions, allow 7-14 days for complete onboarding.

**Q: Do you handle all statutory compliances specific to ${city}?**
A: Yes, our local compliance team manages all ${city}-specific requirements including regional labour laws, local taxes, and industry-specific regulations.

Contact us today for a free consultation and discover how Apex Enterprises can streamline your workforce operations in ${city}.
    `.trim(),
    keywords: [
      `staffing solutions ${city.toLowerCase()}`,
      `workforce management ${city.toLowerCase()}`,
      `compliance services ${city.toLowerCase()}`,
      `recruitment agency ${city.toLowerCase()}`,
      `payroll services ${city.toLowerCase()}`,
      `labour law compliance ${city.toLowerCase()}`,
      `epf esi services ${city.toLowerCase()}`,
      `temporary staffing ${city.toLowerCase()}`
    ]
  };
}

// Generate 410 response for removed coupon pages
export function shouldReturn410(path: string): boolean {
  const removedPaths = [
    '/blog/coupons',
    '/blog/deals',
    '/blog/offers',
    '/coupons',
    '/deals',
    '/discounts'
  ];
  
  return removedPaths.some(removedPath => path.includes(removedPath));
}

// Generate proper alt text for images with SEO keywords
export function generateImageAlt(context: string, imageType: string, includeKeyword?: string): string {
  const baseAlt = {
    hero: 'Professional workforce management dashboard showing AI-powered recruitment analytics',
    team: 'Diverse team of professionals collaborating in modern office environment',
    office: 'Modern corporate office space with employees working efficiently',
    technology: 'Advanced technology interface displaying workforce analytics and metrics',
    meeting: 'Business professionals in strategic planning meeting',
    success: 'Successful business team celebrating achievement in corporate setting'
  };

  const alt = baseAlt[imageType as keyof typeof baseAlt] || 'Professional business environment';
  
  if (includeKeyword) {
    return `${alt} - ${includeKeyword}`;
  }
  
  return `${alt} | Apex Enterprises ${context}`;
}

// URL structure converter for clean pagination
export function convertPaginationUrl(currentUrl: string): string {
  // Convert ?p=2 format to /page/2/ format
  const urlObj = new URL(currentUrl);
  const pageParam = urlObj.searchParams.get('p');
  
  if (pageParam && parseInt(pageParam) > 1) {
    urlObj.searchParams.delete('p');
    urlObj.pathname = `${urlObj.pathname.replace(/\/$/, '')}/page/${pageParam}/`;
  }
  
  return enforceHTTPS(urlObj.toString());
} 