import React from 'react';
import { Link } from 'react-router-dom';
import { LocalSEO } from '../../utils/seo';
import { 
  MapPin, Phone, Mail, Briefcase, CheckCircle, 
  Users, ArrowRight, Building, Calendar
} from 'lucide-react';

// Mumbai location coordinates
const MUMBAI_COORDINATES = {
  latitude: 19.0760,
  longitude: 72.8777
};

// Mumbai office address
const MUMBAI_OFFICE = {
  address: "402, Harmony Tower, Sector 19, Vashi",
  city: "Mumbai",
  region: "Maharashtra",
  postalCode: "400705",
  phone: "+91-0124-2340139",
  email: "mail@apexenterprises.net"
};

// Local client testimonials
const testimonials = [
  {
    quote: "Apex has been our staffing partner for over 5 years. Their Mumbai team understands the local talent landscape perfectly and has consistently delivered qualified professionals for our finance operations.",
    author: "Rajesh Kumar",
    company: "Western Financial Services, Mumbai",
    serviceLine: "Contract Staffing"
  },
  {
    quote: "Their expertise in Maharashtra-specific labor law compliance has been invaluable for our operations across multiple sites in Mumbai and Pune.",
    author: "Priya Mehta",
    company: "Horizon Manufacturing Ltd",
    serviceLine: "Regulatory Compliance"
  }
];

// City-specific services
const localServices = [
  {
    title: "Mumbai IT Staffing Solutions",
    description: "Specialized staffing for Mumbai's thriving IT sector with focus on fintech, banking, and insurance technology professionals.",
    icon: Users
  },
  {
    title: "Maharashtra Compliance Management",
    description: "Complete regulatory compliance services for Maharashtra state labor laws, factory acts, and local municipal regulations.",
    icon: CheckCircle
  },
  {
    title: "Mumbai Financial District Solutions",
    description: "Tailored workforce solutions for companies in Bandra-Kurla Complex and Mumbai's financial district.",
    icon: Building
  },
  {
    title: "Event & Temporary Staffing",
    description: "Short-term staffing for Mumbai's events, exhibitions, and promotional activities with quick deployment capabilities.",
    icon: Calendar
  }
];

export default function MumbaiLocation() {
  return (
    <div className="bg-white">
      {/* Local SEO implementation */}
      <LocalSEO
        city="Mumbai"
        region="Maharashtra"
        service="Workforce Solutions"
        latitude={MUMBAI_COORDINATES.latitude}
        longitude={MUMBAI_COORDINATES.longitude}
        cityDescription="Premier workforce solutions in Mumbai including contract staffing, payroll services, and regulatory compliance for Maharashtra businesses. Local expertise with pan-India capabilities."
        address={MUMBAI_OFFICE.address}
        postalCode={MUMBAI_OFFICE.postalCode}
        telephone={MUMBAI_OFFICE.phone}
        image="https://apexenterprises.net/images/locations/mumbai-office.jpg"
      />
      
      {/* Hero section with city-specific messaging */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-32">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Workforce Solutions in <span className="text-blue-600">Mumbai, Maharashtra</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized staffing, payroll, and compliance services tailored for Mumbai's dynamic business environment. 
              Our local team offers deep expertise in Maharashtra's regulatory landscape combined with industry-specific talent solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact?location=mumbai"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Mumbai Office
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
      
      {/* Mumbai office details with map */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Mumbai Office
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Located in the heart of Mumbai's business district, our office serves clients throughout Maharashtra 
              with dedicated local teams who understand the region's unique workforce needs and regulatory environment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">{MUMBAI_OFFICE.address}, {MUMBAI_OFFICE.city}, {MUMBAI_OFFICE.region} {MUMBAI_OFFICE.postalCode}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">{MUMBAI_OFFICE.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">{MUMBAI_OFFICE.email}</p>
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
            {/* Google Maps iframe with Mumbai coordinates */}
            <iframe 
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${MUMBAI_COORDINATES.latitude},${MUMBAI_COORDINATES.longitude}&zoom=14`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Mumbai Office Location"
              aria-label="Map showing Apex Enterprises Mumbai office location"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Mumbai-specific services */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Services for Mumbai Businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Mumbai office provides tailored workforce solutions designed for the specific needs of businesses 
              in Maharashtra's diverse industries, from financial services to manufacturing and IT.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 xl:grid-cols-4">
              {localServices.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{service.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-gray-600">{service.description}</p>
                  <Link 
                    to="/contact?service=mumbai-specialized" 
                    className="mt-6 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Local testimonials */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Mumbai's Leading Companies
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our clients about how our Mumbai team has delivered exceptional workforce solutions that address their specific needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold leading-6 text-gray-600">{testimonial.serviceLine}</p>
                  <p className="mt-3 text-lg font-medium italic leading-7 text-gray-900">"{testimonial.quote}"</p>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.author.split(' ').map(name => name.charAt(0)).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with Our Mumbai Team?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact our Mumbai office today to discuss how we can help your business with specialized workforce solutions tailored for Maharashtra.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact?location=mumbai"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
              <Link 
                to="/services"
                className="text-base font-semibold leading-6 text-white flex items-center"
              >
                View Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 