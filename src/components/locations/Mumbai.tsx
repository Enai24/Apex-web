
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Briefcase, MapPin, Phone, Mail } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';
import ConversionCTA from '../ConversionCTA';

export default function Mumbai() {
  const services = [
    {
      name: 'IT & Tech Staffing in Mumbai',
      description: 'Connecting Mumbai\'s thriving tech industry with top-tier talent. We are the preferred IT staffing company for startups and MNCs in BKC, Powai, and Navi Mumbai.',
      icon: Briefcase,
    },
    {
      name: 'BFSI Recruitment Experts',
      description: 'Specialized recruitment for Mumbai\'s financial powerhouse. We source talent for investment banking, asset management, and fintech sectors across the city.',
      icon: Building,
    },
    {
      name: 'Manpower Supply for Mumbai',
      description: 'Reliable and compliant manpower solutions for manufacturing, logistics, and infrastructure projects in the Mumbai Metropolitan Region (MMR).',
      icon: Users,
    },
  ];

  const mumbaiTestimonials = [
    {
      quote: "Apex Enterprises is the best recruitment agency in Mumbai, hands down. They found us a brilliant CTO in record time.",
      author: "Aarav Singh",
      title: "Founder, FinTech Innovations",
      company: "Mumbai",
      photo: "/testimonials/aarav-singh.jpg",
    },
    {
      quote: "Their understanding of the local market and compliance is unmatched. They are our go-to staffing company in Mumbai for all our needs.",
      author: "Priya Chavan",
      title: "HR Head, Reliance Industries",
      company: "Mumbai",
      photo: "/testimonials/priya-chavan.jpg",
    },
  ];

  return (
    <main>
      <Helmet>
        <title>#1 Recruitment Agency in Mumbai | Staffing Company Mumbai | Apex Enterprises</title>
        <meta name="description" content="Looking for the best recruitment agency in Mumbai? Apex Enterprises is a top staffing company & HR consultancy in Mumbai for IT, BFSI, and executive search." />
        <link rel="canonical" href="https://www.apexenterprises.in/locations/mumbai" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Recruitment Agency",
              "provider": {
                "@type": "Organization",
                "name": "Apex Enterprises - Recruitment Agency in Mumbai",
                "url": "https://www.apexenterprises.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Apex Tower, Bandra Kurla Complex",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400051",
                  "addressCountry": "IN"
                },
                "telephone": "+91-22-9876-5432"
              },
              "areaServed": {
                "@type": "City",
                "name": "Mumbai"
              },
              "description": "Top-rated staffing and recruitment services for companies in Mumbai, India."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Top Recruitment Agency in <span className="text-indigo-600">Mumbai</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Apex Enterprises is Mumbai's leading staffing company and HR consultancy, connecting the city's top talent with premier organizations. We are your local experts for executive search, IT staffing, and manpower supply.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find Talent in Mumbai
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services in Mumbai Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services in Mumbai</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Staffing Solutions for the Mumbai Market
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Local Address & Map */}
      <section className="bg-gray-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Visit Our Mumbai Office</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our team of expert HR consultants in Mumbai is ready to assist you.
              </p>
              <div className="mt-8 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPin className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>Apex Tower, Bandra Kurla Complex<br />Mumbai, Maharashtra 400051</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Phone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="tel:+91-22-9876-5432">+91-22-9876-5432</a></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Mail className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="mailto:mumbai@apexenterprises.in">mumbai@apexenterprises.in</a></dd>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.71833538608!2d72.8687313153942!3d19.07599028708761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a43a0b3e6b%3A0x8b5d3f3f3f3f3f3f!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1676729068061!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials for Mumbai */}
      
      <ConversionCTA />

    </main>
  );
} 