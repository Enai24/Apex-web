
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Briefcase, MapPin, Phone, Mail, Cpu } from 'lucide-react';
import ConversionCTA from '../ConversionCTA';

export default function Bangalore() {
  const services = [
    {
      name: 'IT & Tech Recruitment Agency',
      description: 'As the top IT recruitment agency in Bangalore, we connect leading tech firms and startups in Koramangala, Indiranagar, and Electronic City with exceptional talent.',
      icon: Cpu,
    },
    {
      name: 'Startup Hiring Solutions',
      description: 'Specialized hiring solutions for Bangalore\'s vibrant startup ecosystem. We find the right talent to help you scale, from seed stage to unicorn status.',
      icon: Briefcase,
    },
    {
      name: 'R&D and Engineering Staffing',
      description: 'Sourcing highly skilled engineers and R&D professionals for innovation centers and technology parks across Bangalore.',
      icon: Users,
    },
  ];

  return (
    <main>
      <Helmet>
        <title>#1 IT Recruitment Agency in Bangalore | Tech Staffing | Apex Enterprises</title>
        <meta name="description" content="Top IT recruitment agency in Bangalore. As a leading staffing company, we specialize in tech hiring, startup recruitment, and engineering placements." />
        <link rel="canonical" href="https://www.apexenterprises.in/locations/bangalore" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Recruitment Agency",
              "provider": {
                "@type": "Organization",
                "name": "Apex Enterprises - IT Recruitment Agency in Bangalore",
                "url": "https://www.apexenterprises.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Apex Tech Park, Koramangala",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560034",
                  "addressCountry": "IN"
                },
                "telephone": "+91-80-1234-5678"
              },
              "areaServed": {
                "@type": "City",
                "name": "Bangalore"
              },
              "description": "Top-rated IT and tech staffing services for companies in Bangalore, India."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              #1 IT Recruitment Agency in <span className="text-indigo-600">Bangalore</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Apex Enterprises is the leading tech staffing company in Bangalore, fueling India's Silicon Valley with world-class talent.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Hire Tech Talent
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services in Bangalore Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Tech Staffing Services in Bangalore</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powering Bangalore's Tech Ecosystem
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Visit Our Bangalore Office</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our team of expert IT recruiters in Bangalore is ready to assist you.
              </p>
              <div className="mt-8 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPin className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>Apex Tech Park, Koramangala<br />Bangalore, Karnataka 560034</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Phone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="tel:+91-80-1234-5678">+91-80-1234-5678</a></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Mail className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a className="hover:text-gray-900" href="mailto:bangalore@apexenterprises.in">bangalore@apexenterprises.in</a></dd>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 overflow-hidden">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.27269787161!2d77.62234282965586!3d12.972442646458528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf80173f3d3d3e5e5!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676729352611!5m2!1sen!2sin"
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