
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Briefcase, MapPin, Phone, Mail } from 'lucide-react';
import ConversionCTA from '../ConversionCTA';

export default function Delhi() {
  const services = [
    {
      name: 'Executive Search in Delhi NCR',
      description: 'Premier executive search services for leadership roles in Delhi, Gurgaon, and Noida. We are the top choice for C-suite hiring in the capital region.',
      icon: Briefcase,
    },
    {
      name: 'Government & PSU Staffing',
      description: 'Specialized recruitment for Public Sector Undertakings and government projects in Delhi. We understand the unique requirements of PSU hiring.',
      icon: Building,
    },
    {
      name: 'Manpower Supply for Delhi',
      description: 'Reliable and compliant manpower solutions for infrastructure, retail, and hospitality sectors across the Delhi NCR.',
      icon: Users,
    },
  ];

  return (
    <main>
      <Helmet>
        <title>#1 Recruitment Agency in Delhi | Staffing Company Delhi | Apex Enterprises</title>
        <meta name="description" content="Looking for the best recruitment agency in Delhi? Apex Enterprises is a top staffing company & HR consultancy in Delhi for government, IT, and executive search." />
        <link rel="canonical" href="https://www.apexenterprises.in/locations/delhi" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Recruitment Agency",
              "provider": {
                "@type": "Organization",
                "name": "Apex Enterprises - Recruitment Agency in Delhi",
                "url": "https://www.apexenterprises.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Apex House, Connaught Place",
                  "addressLocality": "New Delhi",
                  "addressRegion": "Delhi",
                  "postalCode": "110001",
                  "addressCountry": "IN"
                },
                "telephone": "+91-11-1234-5678"
              },
              "areaServed": {
                "@type": "City",
                "name": "Delhi"
              },
              "description": "Top-rated staffing and recruitment services for companies in Delhi, India."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Top Recruitment Agency in <span className="text-indigo-600">Delhi</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Apex Enterprises is Delhi's leading staffing company and HR consultancy, connecting the capital's top talent with premier organizations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Find Talent in Delhi
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services in Delhi Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services in Delhi</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Staffing Solutions for the Delhi Market
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Visit Our Delhi Office</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our team of expert HR consultants in Delhi is ready to assist you.
              </p>
              <div className="mt-8 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPin className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>Apex House, Connaught Place<br />New Delhi, Delhi 110001</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Phone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="tel:+91-11-1234-5678">+91-11-1234-5678</a></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Mail className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="mailto:delhi@apexenterprises.in">delhi@apexenterprises.in</a></dd>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.169422896573!2d77.21672131553192!3d28.62386228241829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b74145e3%3A0x41a292953a1184a8!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1676729226415!5m2!1sen!2sin"
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
      
      <ConversionCTA />

    </main>
  );
} 