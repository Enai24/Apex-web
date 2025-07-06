
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Briefcase, MapPin, Phone, Mail, Cpu } from 'lucide-react';
import ConversionCTA from '../ConversionCTA';

export default function Pune() {
  const services = [
    {
      name: 'IT & Automotive Staffing',
      description: 'As a leading recruitment agency in Pune, we serve both the booming IT sector in Hinjewadi and the automotive manufacturing belt.',
      icon: Cpu,
    },
    {
      name: 'Manufacturing Manpower Supply',
      description: 'Providing skilled and compliant manpower for Pune\'s extensive manufacturing and engineering industries.',
      icon: Building,
    },
    {
      name: 'R&D and Engineering Hiring',
      description: 'Sourcing top engineering and R&D talent for innovation centers in Pune, the "Oxford of the East".',
      icon: Users,
    },
  ];

  return (
    <main>
      <Helmet>
        <title>#1 Recruitment Agency in Pune | IT & Manufacturing Staffing | Apex Enterprises</title>
        <meta name="description" content="Top recruitment agency in Pune for IT, manufacturing, and automotive sectors. Apex Enterprises is a leading staffing company in Pune." />
        <link rel="canonical" href="https://www.apexenterprises.in/locations/pune" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Recruitment Agency",
              "provider": {
                "@type": "Organization",
                "name": "Apex Enterprises - Recruitment Agency in Pune",
                "url": "https://www.apexenterprises.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Apex Towers, Hinjewadi",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411057",
                  "addressCountry": "IN"
                },
                "telephone": "+91-20-1234-5678"
              },
              "areaServed": {
                "@type": "City",
                "name": "Pune"
              },
              "description": "Top-rated IT and manufacturing staffing services for companies in Pune, India."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Top Recruitment Agency in <span className="text-indigo-600">Pune</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Apex Enterprises is the leading staffing company in Pune for both the IT and manufacturing sectors.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Find Talent in Pune
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services in Pune Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services in Pune</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bridging IT and Manufacturing in Pune
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Visit Our Pune Office</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our team of expert recruiters in Pune is ready to assist you.
              </p>
              <div className="mt-8 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPin className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>Apex Towers, Hinjewadi<br />Pune, Maharashtra 411057</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Phone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="tel:+91-20-1234-5678">+91-20-1234-5678</a></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Mail className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="mailto:pune@apexenterprises.in">pune@apexenterprises.in</a></dd>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 overflow-hidden">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121053.2599544325!2d73.79155231737153!3d18.52899214737227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d4381f9284abe!2sHinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676729433434!5m2!1sen!2sin"
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