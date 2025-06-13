import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Shield, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Award, Briefcase, Target } from 'lucide-react';

export default function ContractStaffing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contract Staffing & Manpower Outsourcing Services",
    "description": "Professional contract staffing and manpower outsourcing solutions across India. Expert workforce management with 100% compliance guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Staffing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Temporary Staffing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Permanent Placement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Management"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Contract Staffing & Manpower Outsourcing in India | Apex Enterprises</title>
        <meta name="description" content="Leading contract staffing and manpower outsourcing services across India. 15+ years experience, 100% compliance, AI-powered recruitment. Get free consultation today." />
        <meta name="keywords" content="manpower outsourcing india, contract staffing, temporary staffing, workforce solutions, manpower services, staffing agency india, outsourcing services" />
        <link rel="canonical" href="https://apexenterprises.net/services/contract-staffing" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Contract Staffing & Manpower Outsourcing in India | Apex Enterprises" />
        <meta property="og:description" content="Leading contract staffing and manpower outsourcing services across India. 15+ years experience, 100% compliance, AI-powered recruitment." />
        <meta property="og:url" content="https://apexenterprises.net/services/contract-staffing" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-24 sm:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center gap-x-2 text-blue-200 mb-4">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm font-medium">Contract Staffing Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Contract Staffing & Manpower Outsourcing in India
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                India's leading contract staffing and manpower outsourcing partner. 15+ years of expertise, 
                AI-powered recruitment, and 100% compliance guarantee across all major Indian cities.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Free Consultation
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
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Apex</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                India's Most Trusted Manpower Outsourcing Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Over 10,000+ successful placements across 500+ companies with zero compliance violations
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Shield className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">100% Compliance</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Zero penalties in 15+ years</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Clock className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">48-Hour Deployment</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Fastest in industry</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Users className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">10,000+ Placements</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Proven track record</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Award className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">ISO Certified</dd>
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
                Complete Manpower Outsourcing Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                End-to-end workforce management services tailored for Indian businesses
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white">Contract Staffing</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Temporary & Contract Workforce
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Flexible staffing solutions for seasonal demands, project-based work, and temporary coverage. 
                    Complete with payroll, compliance, and benefits management.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Blue-collar to white-collar positions
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      1 day to 3+ year contracts
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Pan-India deployment capability
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-green-600 px-3 py-1.5 font-medium text-white">Permanent Placement</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Direct Hire & Permanent Placement
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Comprehensive recruitment services for permanent positions with our extensive talent database 
                    and AI-powered candidate matching technology.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Executive search & specialized roles
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      90-day replacement guarantee
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Background verification included
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-purple-600 px-3 py-1.5 font-medium text-white">Payroll Management</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Complete Payroll & Compliance
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    End-to-end payroll processing with statutory compliance management including EPF, ESI, 
                    Professional Tax, and Labour Law adherence.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Automated payroll processing
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Real-time compliance monitoring
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Monthly statutory returns filing
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industries We Serve Across India
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Specialized manpower outsourcing solutions for diverse industry verticals
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Manufacturing</h3>
                <p className="mt-2 text-sm text-gray-600">Production workers, quality control, supervisors</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">IT & Technology</h3>
                <p className="mt-2 text-sm text-gray-600">Software developers, QA engineers, support staff</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Healthcare</h3>
                <p className="mt-2 text-sm text-gray-600">Nurses, technicians, administrative staff</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Retail & E-commerce</h3>
                <p className="mt-2 text-sm text-gray-600">Store associates, warehouse staff, delivery personnel</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Banking & Finance</h3>
                <p className="mt-2 text-sm text-gray-600">Customer service, data entry, compliance officers</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Hospitality</h3>
                <p className="mt-2 text-sm text-gray-600">Front desk, housekeeping, food service staff</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Construction</h3>
                <p className="mt-2 text-sm text-gray-600">Site engineers, skilled trades, safety personnel</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Logistics</h3>
                <p className="mt-2 text-sm text-gray-600">Drivers, warehouse operators, coordinators</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Proven 4-Step Process
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Streamlined approach to deliver the right talent quickly and efficiently
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-white mx-auto">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">Requirements Analysis</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Detailed understanding of your staffing needs, skills required, and timeline expectations
                </p>
              </div>
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-white mx-auto">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">AI-Powered Sourcing</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Leverage our database of 50,000+ candidates with AI matching for optimal selection
                </p>
              </div>
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-white mx-auto">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">Screening & Verification</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Comprehensive background checks, skill assessments, and reference verification
                </p>
              </div>
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-white mx-auto">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">Deployment & Support</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Seamless onboarding with ongoing support and performance monitoring
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Optimize Your Workforce?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get a free consultation and customized manpower outsourcing solution for your business
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Contact Information</h3>
                <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
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
                      <Mail className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:staffing@apexenterprises.net">
                        staffing@apexenterprises.net
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <MapPin className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd>Pan-India Operations: Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 px-6 py-8 sm:rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Free Consultation Includes:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Workforce requirement analysis</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Cost optimization recommendations</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Compliance audit & gap analysis</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Customized solution proposal</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="h-4 w-4" />
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