import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Users, Shield, Clock, CheckCircle, Award, Building, Phone, Mail, Star } from 'lucide-react';

export default function DelhiNCRLabourContractor() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Enterprises - Delhi NCR Labour Contractor",
    "description": "Trusted labour contractor in Delhi-NCR providing skilled workforce, compliance management, and staffing solutions across Gurgaon, Noida, Faridabad, and Greater Delhi.",
    "url": "https://apexenterprises.net/delhi-ncr-labour-contractor",
    "telephone": "+91-9876543210",
    "email": "delhi@apexenterprises.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 18, Institutional Area",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4595,
      "longitude": 77.0266
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City", 
        "name": "Gurgaon"
      },
      {
        "@type": "City",
        "name": "Noida"
      },
      {
        "@type": "City",
        "name": "Faridabad"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Labour Contracting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Labour Supply"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing Workforce"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Staffing"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    }
  };

  return (
    <>
      <Helmet>
        <title>Trusted Labour Contractor in Delhi-NCR | Expert Workforce Solutions</title>
        <meta name="description" content="Licensed labour contractor in Delhi-NCR providing skilled workforce across Gurgaon, Noida, Faridabad. 15+ years experience, 100% compliance, competitive rates. Call now!" />
        <meta name="keywords" content="labour contractor delhi ncr, delhi labour contractor, gurgaon labour contractor, noida workforce, faridabad staffing, construction labour delhi, manufacturing workforce ncr" />
        <link rel="canonical" href="https://apexenterprises.net/delhi-ncr-labour-contractor" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Trusted Labour Contractor in Delhi-NCR | Expert Workforce Solutions" />
        <meta property="og:description" content="Licensed labour contractor in Delhi-NCR providing skilled workforce across Gurgaon, Noida, Faridabad. 15+ years experience, 100% compliance." />
        <meta property="og:url" content="https://apexenterprises.net/delhi-ncr-labour-contractor" />
        <meta property="og:type" content="website" />
        
        {/* Local Business JSON-LD */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-24 sm:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center gap-x-2 text-blue-200 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Delhi NCR Operations</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Trusted Labour Contractor in Delhi-NCR
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Licensed labour contractor serving Delhi, Gurgaon, Noida, and Faridabad with 15+ years of expertise. 
                Skilled workforce, complete compliance management, and competitive rates guaranteed.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="tel:+91-9876543210"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Call Now: +91-9876543210
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-white">
                  View Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Service Coverage</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Complete Delhi-NCR Coverage
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Licensed operations across all major Delhi-NCR cities with local expertise
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-indigo-600 p-3 text-white mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Delhi</h3>
                <p className="mt-2 text-sm text-gray-600">Central Delhi, East Delhi, West Delhi, South Delhi, North Delhi</p>
                <div className="mt-2 text-xs text-indigo-600 font-medium">2000+ Active Workers</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-600 p-3 text-white mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Gurgaon</h3>
                <p className="mt-2 text-sm text-gray-600">Cyber City, Udyog Vihar, Golf Course Road, Sohna Road</p>
                <div className="mt-2 text-xs text-green-600 font-medium">1500+ Active Workers</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-600 p-3 text-white mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Noida</h3>
                <p className="mt-2 text-sm text-gray-600">Sector 18, Sector 62, Greater Noida, Noida Extension</p>
                <div className="mt-2 text-xs text-purple-600 font-medium">1200+ Active Workers</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-red-600 p-3 text-white mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Faridabad</h3>
                <p className="mt-2 text-sm text-gray-600">Industrial Area, Sector 21, NIT, Old Faridabad</p>
                <div className="mt-2 text-xs text-red-600 font-medium">800+ Active Workers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Labour Contracting Services in Delhi-NCR
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive workforce solutions with complete legal compliance and competitive rates
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white">Construction</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Construction Labour Supply
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Skilled and semi-skilled construction workers for residential, commercial, and infrastructure projects 
                    across Delhi-NCR with complete safety compliance.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Skilled masons, carpenters, electricians
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Semi-skilled helpers and laborers
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Safety trained workforce
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Daily rates: ₹400-800/day
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-green-600 px-3 py-1.5 font-medium text-white">Manufacturing</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Manufacturing Workforce
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Trained production workers, machine operators, and quality control staff for manufacturing 
                    units in Gurgaon, Noida, and Faridabad industrial areas.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Machine operators (CNC, Lathe, Press)
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Assembly line workers
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Quality control inspectors
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Monthly rates: ₹12,000-25,000
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-purple-600 px-3 py-1.5 font-medium text-white">Logistics</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Warehouse & Logistics Staff
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Warehouse workers, drivers, loaders, and logistics coordinators for e-commerce, 
                    retail, and industrial distribution centers.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Warehouse operators & supervisors
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Licensed drivers (LMV, HMV)
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Loading/unloading staff
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Daily rates: ₹350-600/day
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Compliance & Legal */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                100% Legal Compliance in Delhi-NCR
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Fully licensed labour contractor with all necessary permits and registrations
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Legal Registrations</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Contract Labour (R&A) Act License - Delhi, Haryana
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Principal Employer Registration
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    EPF & ESI Registration
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Professional Tax Registration
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Labour Welfare Fund Registration
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Shops & Establishment License
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Statutory Compliance</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Monthly EPF & ESI contributions
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Minimum wage compliance (Delhi: ₹375/day)
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Overtime calculations & payments
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Annual bonus payments
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Leave encashment provisions
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Gratuity fund management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Apex as Your Delhi-NCR Labour Contractor?
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Award className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">15+ Years Experience</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Established Delhi-NCR operations since 2008</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Shield className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">Zero Compliance Issues</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Perfect record with labour department</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Clock className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">24-Hour Response</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Emergency workforce deployment</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Users className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">5500+ Workers</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Active workforce database</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Client Testimonials
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                What our Delhi-NCR clients say about our labour contracting services
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-start justify-between bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-gray-600">
                  "Apex provided 200+ construction workers for our Gurgaon project. Excellent quality, zero compliance issues, 
                  and competitive rates. Highly recommended for large projects."
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-xs text-gray-600">Project Manager, DLF Construction</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-gray-600">
                  "Been using their services for our Noida manufacturing unit for 3 years. Reliable workforce, 
                  proper documentation, and excellent support team."
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-xs text-gray-600">HR Manager, Hero MotoCorp</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-gray-600">
                  "Quick deployment of 50 warehouse staff in Faridabad within 24 hours. Professional service and 
                  competitive pricing. Our go-to labour contractor in NCR."
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">Amit Singh</p>
                  <p className="text-xs text-gray-600">Operations Head, Amazon Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-indigo-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need Workforce in Delhi-NCR Today?
              </h2>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Call now for immediate workforce deployment across Delhi, Gurgaon, Noida, and Faridabad
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Contact Information</h3>
                <dl className="space-y-4 text-sm leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">24/7 Helpline</p>
                      <a className="hover:text-indigo-600" href="tel:+91-9876543210">+91-9876543210</a>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a className="hover:text-indigo-600" href="mailto:delhi@apexenterprises.net">delhi@apexenterprises.net</a>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <MapPin className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Head Office</p>
                      <p>Sector 18, Institutional Area<br />Gurgaon, Haryana - 122001</p>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Quick Quote Request</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Free workforce assessment</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Competitive rate quotation</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Same-day response guaranteed</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Deployment within 24-48 hours</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="tel:+91-9876543210"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    <Phone className="h-4 w-4" />
                    Call for Immediate Quote
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