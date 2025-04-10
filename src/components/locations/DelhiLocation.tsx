import React from 'react';
import { Link } from 'react-router-dom';
import { LocalSEO } from '../../utils/seo';
import { 
  MapPin, Phone, Mail, Briefcase, CheckCircle, 
  Users, ArrowRight, Building, Calendar, BarChart
} from 'lucide-react';

// Delhi NCR location coordinates (centered on Delhi)
const DELHI_COORDINATES = {
  latitude: 28.6139,
  longitude: 77.2090
};

// Delhi office address
const DELHI_OFFICE = {
  address: "11, Near Hanuman Mandir, Shankar Chowk Road, Dundahera",
  city: "Gurgaon",
  region: "Delhi NCR",
  postalCode: "122016",
  phone: "+91-0124-2340139",
  email: "mail@apexenterprises.net"
};

// Local client testimonials
const testimonials = [
  {
    quote: "Apex has been our reliable staffing partner for over 7 years. Their Delhi team has unmatched knowledge of the local talent market across NCR and consistently provides us with high-quality candidates.",
    author: "Anand Sharma",
    company: "TechVision Systems, Noida",
    serviceLine: "Contract Staffing"
  },
  {
    quote: "Their expertise in local regulatory compliance across Delhi NCR has been crucial for our operations in Gurgaon, Noida, and Faridabad.",
    author: "Meera Gupta",
    company: "Quantum Industries Ltd",
    serviceLine: "Regulatory Compliance"
  }
];

// Delhi NCR region statistics
const regionStats = [
  { value: "800+", label: "Active Contract Staff", icon: Users },
  { value: "98.5%", label: "Compliance Accuracy", icon: CheckCircle },
  { value: "180+", label: "Local Clients", icon: Building },
  { value: "22+", label: "Years in Delhi NCR", icon: Calendar }
];

// Key industries served in Delhi NCR
const industries = [
  "Information Technology",
  "Manufacturing",
  "Financial Services",
  "E-commerce & Retail",
  "Telecommunications",
  "Healthcare & Pharmaceuticals"
];

export default function DelhiLocation() {
  return (
    <div className="bg-white">
      {/* Local SEO implementation for Delhi NCR */}
      <LocalSEO
        city="Delhi"
        region="Delhi NCR"
        service="Staffing Solutions"
        latitude={DELHI_COORDINATES.latitude}
        longitude={DELHI_COORDINATES.longitude}
        cityDescription="Premier staffing company in Delhi NCR providing workforce solutions including contract staffing, payroll services, and regulatory compliance. Specialized services covering all Delhi NCR regions including Gurgaon, Noida, Faridabad, and Ghaziabad with tailored solutions for local businesses."
        address={DELHI_OFFICE.address}
        postalCode={DELHI_OFFICE.postalCode}
        telephone={DELHI_OFFICE.phone}
        image="https://apexenterprises.net/images/locations/delhi-ncr-office.jpg"
      />
      
      {/* Hero section with Delhi NCR specific messaging */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-32">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              #1 Staffing Company in <span className="text-blue-600">Delhi NCR</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive staffing, payroll, and compliance services tailored for Delhi NCR's dynamic business environment. 
              Our local team delivers expert workforce solutions across Gurgaon, Noida, Faridabad, and Ghaziabad with deep understanding 
              of regional regulatory requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact?location=delhi"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Delhi NCR Office
              </Link>
              <Link 
                to="/services"
                className="text-base font-semibold leading-6 text-gray-900 flex items-center"
              >
                View All Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delhi NCR office details with map */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Delhi NCR Office
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Strategically located in Gurgaon with easy access to all Delhi NCR regions, our office serves clients 
              throughout Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad with specialized teams who understand the 
              unique workforce needs of the National Capital Region.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">{DELHI_OFFICE.address}, {DELHI_OFFICE.city}, {DELHI_OFFICE.region} {DELHI_OFFICE.postalCode}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">{DELHI_OFFICE.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">{DELHI_OFFICE.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Working Hours</h3>
                  <p className="mt-1 text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            {/* Google Maps iframe with Delhi NCR coordinates */}
            <iframe 
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${DELHI_COORDINATES.latitude},${DELHI_COORDINATES.longitude}&zoom=10`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Delhi NCR Office Location"
              aria-label="Map showing Apex Enterprises Delhi NCR office location"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Delhi NCR statistics */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Delhi NCR's Leading Staffing Company
            </h2>
            <p className="text-lg text-gray-600">
              For over two decades, we've been the trusted workforce partner for businesses throughout the National Capital Region.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 text-center lg:max-w-none lg:grid-cols-4">
            {regionStats.map((stat, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-blue-100 p-2 mb-3">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Delhi NCR specific services */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">TAILORED FOR DELHI NCR</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Services For Local Businesses
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our solutions are designed specifically for the unique needs of the Delhi NCR business environment.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {/* Contract Staffing */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Contract Staffing
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Rapidly source qualified talent across Delhi NCR. We maintain a database of 50,000+ pre-vetted professionals in Gurgaon, Noida, Faridabad, and Ghaziabad ready to deploy to your business.
              </p>
              <Link to="/services/contract-staffing" className="mt-6 text-sm font-semibold leading-6 text-blue-600 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Payroll Services */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Payroll Services
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Comprehensive payroll management with perfect compliance to Delhi NCR's complex regulatory framework. We handle all documentation, taxes, and statutory requirements across all NCR regions.
              </p>
              <Link to="/services/payroll-services" className="mt-6 text-sm font-semibold leading-6 text-blue-600 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* AI Workforce Analytics */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  AI Workforce Analytics
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Leverage our powerful AI tools to gain insights into Delhi NCR's talent market. Get real-time data on salary benchmarks, skill availability, and workforce trends across the National Capital Region.
              </p>
              <Link to="/services/ai-workforce-analytics" className="mt-6 text-sm font-semibold leading-6 text-blue-600 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delhi NCR service areas */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">AREAS SERVED</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Coverage Across Delhi NCR
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide staffing solutions throughout the National Capital Region with specialized local expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Delhi */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delhi</h3>
              <p className="text-gray-600 text-sm">
                Covering all areas including Connaught Place, Nehru Place, Saket, Rohini, and outer Delhi regions.
              </p>
            </div>
            
            {/* Gurgaon */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gurgaon</h3>
              <p className="text-gray-600 text-sm">
                Full service coverage across Cybercity, Udyog Vihar, Golf Course Road, Sohna Road, and all industrial areas.
              </p>
            </div>
            
            {/* Noida */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Noida</h3>
              <p className="text-gray-600 text-sm">
                Complete staffing solutions in all sectors, Greater Noida, and the Expressway corridor.
              </p>
            </div>
            
            {/* Faridabad & Ghaziabad */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faridabad & Ghaziabad</h3>
              <p className="text-gray-600 text-sm">
                Specialized industrial staffing for manufacturing hubs and commercial centers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">TESTIMONIALS</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Delhi NCR Clients Say
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-10 items-start">
                  <div className="text-4xl font-bold text-blue-300">"</div>
                </div>
                <p className="mt-3 text-lg font-medium text-gray-900 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                  <div className="mt-2 text-sm text-blue-600">{testimonial.serviceLine}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Industries served */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">INDUSTRIES SERVED</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Delhi NCR Industry Expertise
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide specialized staffing services for all major industries in the National Capital Region.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your workforce?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join hundreds of leading Delhi NCR businesses who trust Apex Enterprises for their staffing needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact?location=delhi"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Our Delhi NCR Team
              </Link>
              <Link 
                to="/about"
                className="text-base font-semibold leading-6 text-white flex items-center"
              >
                Learn About Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 