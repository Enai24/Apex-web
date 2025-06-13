import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Factory, Shield, Sparkles, CheckCircle, Clock, Award, Phone, Mail, Users, Zap } from 'lucide-react';

export default function IndustrialHousekeeping() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial House-Keeping Services for Manufacturing Plants",
    "description": "Professional industrial housekeeping and cleaning services for factories, manufacturing plants, and production facilities across India. ISO certified with safety compliance guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Industrial Cleaning and Housekeeping Services"
  };

  return (
    <>
      <Helmet>
        <title>Industrial House-Keeping Services for Manufacturing Plants | Apex Enterprises</title>
        <meta name="description" content="Professional industrial housekeeping services for factories and manufacturing plants across India. ISO certified, safety compliant, 24/7 operations. Get free facility assessment!" />
        <meta name="keywords" content="housekeeping services for factories, industrial housekeeping, manufacturing plant cleaning, factory cleaning services, industrial cleaning india, plant maintenance services" />
        <link rel="canonical" href="https://apexenterprises.net/services/industrial-housekeeping" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Industrial House-Keeping Services for Manufacturing Plants | Apex Enterprises" />
        <meta property="og:description" content="Professional industrial housekeeping services for factories and manufacturing plants across India. ISO certified, safety compliant, 24/7 operations." />
        <meta property="og:url" content="https://apexenterprises.net/services/industrial-housekeeping" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-24 sm:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center gap-x-2 text-blue-200 mb-4">
                <Factory className="h-5 w-5" />
                <span className="text-sm font-medium">Industrial Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Industrial House-Keeping Services for Manufacturing Plants
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Professional industrial housekeeping and cleaning services for factories, manufacturing plants, and 
                production facilities across India. ISO 9001 certified with complete safety compliance and 24/7 operations.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Free Facility Assessment
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-white">
                  View Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                India's Leading Industrial Housekeeping Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Serving 200+ manufacturing plants with zero safety incidents and 99.9% uptime guarantee
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Shield className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">Zero Safety Incidents</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">15+ years perfect record</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Clock className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">24/7 Operations</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Round-the-clock support</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Users className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">3000+ Trained Staff</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Certified professionals</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Award className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">ISO 9001 Certified</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Quality assured processes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Industrial Housekeeping Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Complete facility management services designed specifically for manufacturing environments
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white">Production Area</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Production Floor Cleaning
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Specialized cleaning of production floors, machinery areas, conveyor systems, and assembly lines 
                    with minimal disruption to operations and full adherence to safety protocols.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Daily production floor maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Machinery and equipment cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Conveyor belt and assembly line cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Emergency spill response (24/7)
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-green-600 px-3 py-1.5 font-medium text-white">Warehouse</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Warehouse & Storage Cleaning
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Comprehensive warehouse cleaning including storage areas, loading docks, inventory zones, 
                    and material handling equipment with proper dust control and pest management.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Storage rack and aisle cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Loading dock maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Inventory area sanitization
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Material handling equipment cleaning
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-purple-600 px-3 py-1.5 font-medium text-white">Utilities</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Utility Area Maintenance
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Specialized cleaning of boiler rooms, electrical panels, HVAC systems, generators, 
                    and other utility areas with certified technicians and safety compliance.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Boiler room and engine maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Electrical panel and switchboard cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      HVAC system maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Generator and UPS cleaning
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-red-600 px-3 py-1.5 font-medium text-white">Specialized</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Hazardous Area Cleaning
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Specialized cleaning of chemical storage areas, paint booths, welding zones, 
                    and other hazardous environments with trained personnel and appropriate safety equipment.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Chemical storage area maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Paint booth and spray area cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Welding and fabrication area maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Confined space cleaning services
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-yellow-600 px-3 py-1.5 font-medium text-white">Administrative</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Office & Administrative Areas
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Complete cleaning of office areas, conference rooms, cafeterias, restrooms, 
                    and common areas within manufacturing facilities with attention to hygiene and comfort.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Office and workstation cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Conference room maintenance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Cafeteria and kitchen cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Restroom sanitization
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-teal-600 px-3 py-1.5 font-medium text-white">Deep Cleaning</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Periodic Deep Cleaning
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Scheduled deep cleaning services including annual shutdowns, equipment overhauls, 
                    facade cleaning, and comprehensive facility preparation for audits and inspections.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Annual shutdown cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Equipment overhaul support
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Building facade and exterior cleaning
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Pre-audit facility preparation
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Manufacturing Industries We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Specialized housekeeping solutions tailored for different manufacturing verticals
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Automotive</h3>
                <p className="mt-2 text-sm text-gray-600">Assembly plants, parts manufacturing, paint shops</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Electronics</h3>
                <p className="mt-2 text-sm text-gray-600">Semiconductor fabs, PCB manufacturing, assembly lines</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Pharmaceuticals</h3>
                <p className="mt-2 text-sm text-gray-600">Clean rooms, production areas, packaging units</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Textiles</h3>
                <p className="mt-2 text-sm text-gray-600">Spinning mills, weaving units, dyeing facilities</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Food Processing</h3>
                <p className="mt-2 text-sm text-gray-600">Processing units, packaging facilities, cold storage</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Chemicals</h3>
                <p className="mt-2 text-sm text-gray-600">Chemical plants, petrochemicals, specialty chemicals</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Steel & Metals</h3>
                <p className="mt-2 text-sm text-gray-600">Steel plants, foundries, metal fabrication units</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Cement</h3>
                <p className="mt-2 text-sm text-gray-600">Cement plants, crushing units, packaging facilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Compliance */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Safety First Approach
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive safety protocols and compliance measures for industrial environments
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Safety Certifications & Training</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    OSHA compliant safety training for all staff
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Hazmat handling certification
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Confined space entry training
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    First aid and emergency response certification
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Personal protective equipment (PPE) training
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Chemical safety and MSDS awareness
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Quality & Compliance Standards</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    ISO 9001:2015 Quality Management System
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    ISO 14001:2015 Environmental Management
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    ISO 45001:2018 Occupational Health & Safety
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Factory Act compliance and licensing
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Contract Labour Act compliance
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Environmental clearance compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-indigo-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Optimize Your Factory Operations?
              </h2>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Get a free facility assessment and customized housekeeping solution for your manufacturing plant
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Contact Our Experts</h3>
                <dl className="space-y-4 text-sm leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">24/7 Operations Helpline</p>
                      <a className="hover:text-indigo-600" href="tel:+91-9876543210">+91-9876543210</a>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a className="hover:text-indigo-600" href="mailto:housekeeping@apexenterprises.net">housekeeping@apexenterprises.net</a>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Free Facility Assessment Includes:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Current housekeeping standard evaluation</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Safety compliance gap analysis</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Cost optimization recommendations</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Customized service proposal</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="tel:+91-9876543210"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    <Phone className="h-4 w-4" />
                    Schedule Assessment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 