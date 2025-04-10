import React from 'react';
import { Link } from 'react-router-dom';
import { LocalSEO } from '../../utils/seo';
import { 
  MapPin, Phone, Mail, Briefcase, CheckCircle, 
  Users, ArrowRight, Code, Database, Server, Cpu
} from 'lucide-react';

// Bangalore location coordinates
const BANGALORE_COORDINATES = {
  latitude: 12.9716,
  longitude: 77.5946
};

// Bangalore office address
const BANGALORE_OFFICE = {
  address: "42, Prestige Tech Park, Sarjapur Road, Bellandur",
  city: "Bangalore",
  region: "Karnataka",
  postalCode: "560103",
  phone: "+91-0124-2340139",
  email: "mail@apexenterprises.net"
};

// Local client testimonials
const testimonials = [
  {
    quote: "Apex has delivered exceptional IT talent for our enterprise AI development team. Their understanding of Bangalore's tech ecosystem gives them an edge in finding rare tech skills.",
    author: "Rajesh Kumar",
    company: "InnovateAI Systems",
    serviceLine: "IT Contract Staffing"
  },
  {
    quote: "Their AI-powered matching technology identified candidates with specialized cloud architecture skills that were perfect for our unique requirements.",
    author: "Priya Venkatesh",
    company: "CloudScale Technologies",
    serviceLine: "Specialized IT Recruitment"
  }
];

// Bangalore region statistics
const regionStats = [
  { value: "1200+", label: "IT Professionals Placed", icon: Code },
  { value: "96%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "240+", label: "Tech Clients", icon: Server },
  { value: "18+", label: "Years in Bangalore", icon: Cpu }
];

// Key tech skills served in Bangalore
const techSkills = [
  "Full Stack Development",
  "Data Science & ML/AI",
  "Cloud Infrastructure",
  "DevOps",
  "Mobile Development",
  "Cybersecurity",
  "Blockchain",
  "UI/UX Design"
];

export default function BangaloreLocation() {
  return (
    <div className="bg-white">
      {/* Local SEO implementation for Bangalore */}
      <LocalSEO
        city="Bangalore"
        region="Karnataka"
        service="IT Staffing Solutions"
        latitude={BANGALORE_COORDINATES.latitude}
        longitude={BANGALORE_COORDINATES.longitude}
        cityDescription="Premier IT staffing company in Bangalore providing specialized tech talent solutions for startups and enterprises. Industry-leading AI-powered recruitment for software developers, data scientists, cloud architects, and cybersecurity professionals across Bangalore's tech hubs."
        address={BANGALORE_OFFICE.address}
        postalCode={BANGALORE_OFFICE.postalCode}
        telephone={BANGALORE_OFFICE.phone}
        image="https://apexenterprises.net/images/locations/bangalore-office.jpg"
      />
      
      {/* Hero section with Bangalore specific messaging */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-32">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              #1 IT Staffing Partner in <span className="text-blue-600">Bangalore</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AI-powered tech talent solutions for India's Silicon Valley. Our specialized 
              IT recruitment team delivers expert workforce solutions across Bangalore's 
              technology corridors with deep industry knowledge.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact?location=bangalore"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Bangalore Office
              </Link>
              <Link 
                to="/services/specialised-hiring"
                className="text-base font-semibold leading-6 text-gray-900 flex items-center"
              >
                View IT Staffing Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bangalore office details with map */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Bangalore Office
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Strategically located in Bellandur, our Bangalore office serves clients throughout the 
              city's tech corridors including Whitefield, Electronic City, ORR, and CBD. Our specialized
              teams understand the unique tech workforce needs of India's IT capital.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">{BANGALORE_OFFICE.address}, {BANGALORE_OFFICE.city}, {BANGALORE_OFFICE.region} {BANGALORE_OFFICE.postalCode}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">{BANGALORE_OFFICE.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">{BANGALORE_OFFICE.email}</p>
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
            {/* Google Maps iframe with Bangalore coordinates */}
            <iframe 
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${BANGALORE_COORDINATES.latitude},${BANGALORE_COORDINATES.longitude}&zoom=10`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Bangalore Office Location"
              aria-label="Map showing Apex Enterprises Bangalore office location"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Bangalore statistics */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Bangalore's Leading IT Staffing Company
            </h2>
            <p className="text-lg text-gray-600">
              For nearly two decades, we've been the trusted tech talent partner for Bangalore's leading organizations.
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
      
      {/* Bangalore specific services */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">TAILORED FOR BANGALORE</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized IT Staffing Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our tech recruiting solutions are designed specifically for Bangalore's competitive IT landscape.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {/* IT Contract Staffing */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  IT Contract Staffing
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Rapidly source qualified tech talent across Bangalore. We maintain a database of 75,000+ pre-vetted IT professionals ready to deploy to your projects with skill-matching precision.
              </p>
              <Link to="/services/contract-staffing" className="mt-6 text-sm font-semibold leading-6 text-blue-600 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Specialized Recruiting */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Specialized Tech Recruiting
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Expert recruitment for niche technology roles including AI/ML specialists, cloud architects, cybersecurity professionals, and blockchain developers with Bangalore's best technical screening.
              </p>
              <Link to="/services/specialised-hiring" className="mt-6 text-sm font-semibold leading-6 text-blue-600 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* AI Tech Recruitment */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  AI-Powered Tech Recruitment
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Leverage our AI-powered matching technology to find perfect-fit tech candidates with 92% accuracy. Get real-time insights into Bangalore's technology talent market.
              </p>
              <Link to="/ai-resume-screening" className="mt-6 text-sm font-semibold leading-6 text-blue-600 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bangalore service areas */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">AREAS SERVED</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Coverage Across Bangalore
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide tech staffing solutions throughout Bangalore with specialized knowledge of each tech hub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Whitefield */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Whitefield</h3>
              <p className="text-gray-600 text-sm">
                Supporting major tech parks and IT companies with specialized tech recruitment.
              </p>
            </div>
            
            {/* Electronic City */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Electronic City</h3>
              <p className="text-gray-600 text-sm">
                IT staffing services for major technology hubs and enterprises in Phase 1 and 2.
              </p>
            </div>
            
            {/* Outer Ring Road */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outer Ring Road</h3>
              <p className="text-gray-600 text-sm">
                Full service coverage across Marathahalli, Sarjapur, and Bellandur tech corridors.
              </p>
            </div>
            
            {/* Central Business District */}
            <div className="rounded-xl bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CBD & Other Areas</h3>
              <p className="text-gray-600 text-sm">
                Specialized tech talent services for companies in MG Road, Koramangala, Indiranagar, and HSR Layout.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech skills */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">TECH EXPERTISE</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Technology Skills
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide expert staffing for all in-demand technology skills in Bangalore's tech ecosystem.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Client testimonials */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">TESTIMONIALS</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Bangalore Tech Leaders Say
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
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
      
      {/* CTA Section */}
      <div className="bg-blue-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build your tech team?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join hundreds of leading Bangalore tech companies who trust Apex Enterprises for their IT staffing needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact?location=bangalore"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Our Bangalore Tech Team
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