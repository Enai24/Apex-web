import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Users, Shield, Clock, Award, CheckCircle, Phone, Mail } from 'lucide-react';
import { generateCityGuideContent } from '../utils/seoUtils';

export default function CityGuide() {
  const { city } = useParams<{ city: string }>();
  
  if (!city) {
    return <div>City not found</div>;
  }

  const cityData = generateCityGuideContent(city);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Apex Enterprises - ${city}`,
    "description": cityData.description,
    "url": `https://apexenterprises.net/cities/${city.toLowerCase()}`,
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "addressLocality": city
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Staffing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contract Staffing",
            "description": "Temporary and permanent staffing solutions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Management",
            "description": "Complete payroll and compliance services"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{cityData.title}</title>
        <meta name="description" content={cityData.description} />
        <meta name="keywords" content={cityData.keywords.join(', ')} />
        <link rel="canonical" href={`https://apexenterprises.net/cities/${city.toLowerCase()}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Open Graph tags */}
        <meta property="og:title" content={cityData.title} />
        <meta property="og:description" content={cityData.description} />
        <meta property="og:url" content={`https://apexenterprises.net/cities/${city.toLowerCase()}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cityData.title} />
        <meta name="twitter:description" content={cityData.description} />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-24 sm:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center gap-x-2 text-blue-200 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Local Expertise</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Staffing Solutions in {city}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Your trusted workforce partner in {city}. Comprehensive staffing, payroll, and compliance solutions 
                designed for the local market with 15+ years of proven expertise.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Free Consultation
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Impact in {city}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Trusted by leading companies across {city} for reliable workforce solutions
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Active Placements</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">500+</dd>
                </div>
                <div className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Compliance Rate</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">99.7%</dd>
                </div>
                <div className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Client Retention</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">95%</dd>
                </div>
                <div className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Response Time</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">4 hrs</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <div className="prose prose-lg max-w-none">
              {cityData.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s+/, '');
                  const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
                  return (
                    <Tag key={index} className={`${level === 1 ? 'text-3xl font-bold' : level === 2 ? 'text-2xl font-semibold mt-8' : 'text-xl font-medium mt-6'} tracking-tight text-gray-900`}>
                      {text}
                    </Tag>
                  );
                } else if (paragraph.startsWith('|')) {
                  // Handle table rows - you could enhance this with proper table rendering
                  return null;
                } else if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="mt-2">
                      {paragraph.replace(/^-\s+/, '')}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mt-6">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div id="services" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Complete Solutions</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services in {city}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive workforce management services tailored to {city}'s business environment
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Users className="h-5 w-5 flex-none text-indigo-600" />
                    Contract Staffing
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      Temporary and permanent staffing solutions with complete compliance management for {city} businesses.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Shield className="h-5 w-5 flex-none text-indigo-600" />
                    Payroll & Compliance
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      End-to-end payroll management with EPF, ESI, and local tax compliance specific to {city}.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Award className="h-5 w-5 flex-none text-indigo-600" />
                    Recruitment Services
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      AI-powered recruitment and candidate screening with local {city} talent network access.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Get Started in {city}?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Contact our local {city} team for a free consultation and customized workforce solution.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Get in Touch</h3>
                <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPin className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd>{city} Business District</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <Phone className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="tel:+91-9876543210">
                        +91-9876543210
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href={`mailto:${city.toLowerCase()}@apexenterprises.net`}>
                        {city.toLowerCase()}@apexenterprises.net
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 px-6 py-8 sm:rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Quick Response Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Response within 4 hours</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Customized solution design</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Local language support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 