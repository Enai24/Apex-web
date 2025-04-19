import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, Building, ChevronRight, Briefcase, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import { SEO, generateFAQSchema } from '../utils/seo';
import { useSearchParams } from 'react-router-dom';

// Add animation keyframes for blob and pulse effects
import '../styles/animations.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  serviceInterest: string;
  preferredLocation: string;
}

const officeLocations = [
  {
    city: 'Gurgaon (Head Office)',
    address: '11, Near Hanuman Mandir, Shankar Chowk Road, Dundahera, Gurgaon - 122016, Haryana (India)',
    phone: '+91 0124 2340139',
    fax: '+91 0124 2461 837',
    email: ['mail@apexenterprises.net', 'apex_kul@yahoo.com'],
    hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 28.4595, lng: 77.0266 },
  },
  {
    city: 'Mumbai',
    address: '402, Harmony Tower, Sector 19, Vashi, Mumbai - 400705, Maharashtra (India)',
    phone: '+91 0124 2340139',
    email: ['mail@apexenterprises.net'],
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 19.0760, lng: 72.8777 },
  },
  {
    city: 'Bengaluru',
    address: '204, Tech Park, Whitefield, Bengaluru - 560066, Karnataka (India)',
    phone: '+91 0124 2340139',
    email: ['mail@apexenterprises.net'],
    hours: 'Monday - Friday: 9:30 AM - 6:30 PM',
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    city: 'Chennai',
    address: '305, Olympia Tech Park, Guindy, Chennai - 600032, Tamil Nadu (India)',
    phone: '+91 0124 2340139',
    email: ['mail@apexenterprises.net'],
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 13.0827, lng: 80.2707 },
  }
];

const serviceOptions = [
  { value: 'contract-staffing', label: 'Contract Staffing Solutions' },
  { value: 'payroll-services', label: 'Payroll Management Services' },
  { value: 'regulatory-compliance', label: 'Regulatory Compliance Advisory' },
  { value: 'ai-workforce-analytics', label: 'AI Workforce Analytics' },
  { value: 'training-development', label: 'Training & Development Programs' },
  { value: 'other', label: 'Other Services' },
];

export default function Contact() {
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [activeOffice, setActiveOffice] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const locationParam = searchParams.get('location');
  
  // Check for location parameter in URL and set the active office
  useEffect(() => {
    if (locationParam) {
      // Find the index of the location in the officeLocations array
      const locationIndex = officeLocations.findIndex(
        location => location.city.toLowerCase().includes(locationParam.toLowerCase())
      );
      
      // If found, update the active office and prefill the location preference
      if (locationIndex !== -1) {
        setActiveOffice(locationIndex);
        setValue('preferredLocation', locationParam.toLowerCase());
      }
    }
  }, [locationParam, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/mail@apexenterprises.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success === 'true') {
        toast.success('Message sent successfully!');
        setSubmitted(true);
        reset();
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  // Define FAQ data for schema
  const contactFAQs = [
    {
      question: "What information do I need to provide for a staffing inquiry?",
      answer: "Please provide details about your staffing requirements, including number of positions, job roles, location, duration, and any specific skills or qualifications needed."
    },
    {
      question: "How quickly can Apex Enterprises deploy staff across India?",
      answer: "Our typical deployment timeframe is 2-4 weeks depending on the complexity and volume of staffing needs. For urgent requirements, we offer expedited services with deployment possible within 7-10 days."
    },
    {
      question: "Does Apex Enterprises handle statutory compliance for contract staff?",
      answer: "Yes, we manage all statutory compliance including PF, ESI, labor laws, and relevant registrations across all 28 Indian states, ensuring full legal compliance for your workforce."
    },
    {
      question: "What industries does Apex Enterprises specialize in?",
      answer: "We specialize in providing workforce solutions across multiple sectors including Manufacturing, IT/ITeS, BFSI, E-commerce, Retail, Logistics, and Healthcare."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Contact Apex Enterprises | Workforce Solutions Provider"
        description="Get in touch with India's leading workforce solutions provider. Contact our offices in Delhi, Mumbai, Bengaluru, Chennai, and 25+ locations across India."
        keywords="contact workforce solutions, staffing company India, HR outsourcing contact, payroll services contact"
        canonical="/contact"
        schema={generateFAQSchema(contactFAQs)}
      />
      
      <div className="bg-gray-50">
        {/* Hero section - Enhanced with modern design */}
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-800 via-blue-700 to-indigo-900 pt-16">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-blob"></div>
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
            
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-blue-50/10">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
            
            {/* Animated dots grid pattern */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
              {Array.from({ length: 12 }).map((_, colIndex) => (
                Array.from({ length: 12 }).map((_, rowIndex) => (
                  <div 
                    key={`${colIndex}-${rowIndex}`} 
                    className="h-1 w-1 rounded-full bg-white/20"
                    style={{
                      opacity: Math.random() * 0.5 + 0.2,
                      animationDelay: `${(colIndex + rowIndex) * 0.1}s`,
                      animation: 'pulse 3s infinite ease-in-out'
                    }}
                  ></div>
                ))
              ))}
            </div>
          </div>
          
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-8">
            <div className="lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:w-1/2 text-left lg:pr-8">
                <div className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-indigo-400/30 mb-6">
                  <span>We're here to help</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Let's Connect
                </h1>
                <p className="mt-6 text-lg leading-8 text-white max-w-2xl">
                  Reach out to India's leading AI-powered workforce solutions provider. Our team is ready to help your business scale with tailored staffing and compliance services.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Phone, text: 'Call us at +91 0124 2340139' },
                    { icon: Mail, text: 'mail@apexenterprises.net' },
                    { icon: Clock, text: 'Response within 24 hours' },
                    { icon: Globe, text: 'Operating in 25+ cities' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-white group">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/50 transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#contact-form"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white p-1 text-blue-600 shadow-sm transition-all hover:bg-white/90"
                  >
                    <span className="relative px-5 py-2.5 rounded-md text-sm font-semibold flex items-center space-x-2">
                      <span>Get in Touch</span> 
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                  <a
                    href="#office-locations"
                    className="group text-sm font-semibold leading-6 text-white flex items-center gap-x-1"
                  >
                    <span>View Offices</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative h-[450px] w-full rounded-2xl bg-white/10 p-1 shadow-2xl backdrop-blur-sm border border-indigo-500/20 overflow-hidden group transform hover:scale-[1.01] transition-all duration-300">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                  <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-blob"></div>
                  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
                  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
                  
                  {/* 3D Office Building Visualization */}
                  <div className="absolute right-4 bottom-4 w-1/2 h-1/2 opacity-70 group-hover:opacity-90 transition-all duration-500 transform group-hover:translate-y-[-10px] group-hover:scale-105">
                    <div className="relative w-full h-full">
                      {/* Building base */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[90%] bg-blue-900/50 backdrop-blur-sm rounded-lg shadow-lg transform rotate-12 skew-x-12 z-10"></div>
                      
                      {/* Building tower */}
                      <div className="absolute bottom-[5%] left-[60%] -translate-x-1/2 w-[40%] h-[70%] bg-indigo-800/60 backdrop-blur-sm rounded-md shadow-lg transform -rotate-6 skew-y-3 z-20"></div>
                      
                      {/* Windows grid pattern */}
                      <div className="absolute bottom-[5%] left-[60%] -translate-x-1/2 w-[40%] h-[70%] z-30 transform -rotate-6 skew-y-3 overflow-hidden">
                        <div className="grid grid-cols-3 grid-rows-5 gap-1 w-full h-full p-1">
                          {Array.from({ length: 15 }).map((_, i) => (
                            <div 
                              key={i} 
                              className="bg-white/40 rounded-sm" 
                              style={{
                                animation: `pulse ${2 + (i % 3)}s infinite ease-in-out`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-[10%] left-[30%] w-4 h-4 rounded-full bg-blue-400/80 animate-pulse"></div>
                      <div className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-indigo-300/80 animate-pulse animation-delay-2000"></div>
                    </div>
                  </div>
                  
                  <div className="relative h-full w-full rounded-xl backdrop-blur-sm bg-gradient-to-b from-indigo-800/60 to-indigo-900/60 p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      {officeLocations.slice(0, 3).map((location, index) => (
                        <div 
                          key={index} 
                          className="flex items-start space-x-3 text-white hover:bg-indigo-500/40 p-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:translate-x-1"
                          onClick={() => setActiveOffice(index)}
                        >
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-500/50 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40">
                            <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold">{location.city}</h3>
                            <p className="mt-1 text-xs text-white/90">{location.address.split(',')[0]}</p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="flex justify-center mt-6">
                        <a href="#office-locations" className="inline-flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 transition-colors group">
                          <span>View all locations</span>
                          <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Apex</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Partner with India's Premier Workforce Specialists
                </p>
              </div>
              <dl className="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Years in Industry</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">20+</dd>
                </div>
                <div className="flex flex-col bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Cities Covered</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">25+</dd>
                </div>
                <div className="flex flex-col bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Clients Served</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">1,000+</dd>
                </div>
                <div className="flex flex-col bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Workforce Deployed</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">50,000+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Contact form and office locations */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact form - Enhanced with modern UI */}
            <div className="lg:col-span-3" id="contact-form">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative px-6 py-8 sm:p-10 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <h2 className="text-2xl font-bold tracking-tight">Send us a message</h2>
                  <p className="mt-2 text-base text-indigo-100">
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="px-6 py-8 sm:px-10 sm:pb-10 bg-white">
                  {submitted ? (
                    <div className="rounded-md bg-green-50 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle className="h-10 w-10 text-green-500" />
                        </div>
                        <h3 className="mt-4 text-xl font-medium text-green-800">Thank you for contacting us!</h3>
                        <p className="mt-2 text-sm text-green-700">
                          Your message has been received. Our team will reach out to you shortly.
                        </p>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                            className="inline-flex items-center gap-x-2 rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
                          >
                            Send another message
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                        <div className="group">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Full Name <span className="text-red-500">*</span>
                  </label>
                          <div className="relative">
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                              placeholder="John Doe"
                  />
                          </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Email <span className="text-red-500">*</span>
                  </label>
                          <div className="relative">
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                              placeholder="you@example.com"
                  />
                          </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                        <div className="group">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Phone <span className="text-red-500">*</span>
                  </label>
                          <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]*$/,
                        message: 'Invalid phone number',
                      },
                    })}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                              placeholder="+91 12345 67890"
                  />
                          </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                        <div className="group">
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Company Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="company"
                              {...register('company')}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                              placeholder="Your Company Ltd."
                            />
                          </div>
                        </div>

                        <div className="group sm:col-span-2">
                          <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Service of Interest
                          </label>
                          <div className="relative">
                            <select
                              id="serviceInterest"
                              {...register('serviceInterest')}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                            >
                              <option value="">Select a service...</option>
                              {serviceOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="group sm:col-span-2">
                          <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Preferred Location
                          </label>
                          <div className="relative">
                            <select
                              id="preferredLocation"
                              {...register('preferredLocation')}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                            >
                              <option value="">Select preferred location...</option>
                              <option value="delhi">Delhi NCR (Gurgaon, Noida, Faridabad, Ghaziabad)</option>
                              <option value="bangalore">Bangalore</option>
                              <option value="mumbai">Mumbai</option>
                              <option value="chennai">Chennai</option>
                              <option value="other">Other Location</option>
                            </select>
                          </div>
                        </div>

                        <div className="group sm:col-span-2">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Subject <span className="text-red-500">*</span>
                  </label>
                          <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                              placeholder="How can we help you?"
                  />
                          </div>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
              </div>

                        <div className="group sm:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-indigo-600 transition-colors">
                            Message <span className="text-red-500">*</span>
                </label>
                          <div className="relative">
                <textarea
                  id="message"
                              rows={5}
                  {...register('message', { required: 'Message is required' })}
                              className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200 focus:bg-white"
                              placeholder="Please describe your requirements in detail..."
                />
                          </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
                        </div>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="privacy-policy"
                          name="privacy-policy"
                          type="checkbox"
                          required
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                          I agree to the{' '}
                          <a href="/privacy-policy" className="font-medium text-indigo-600 hover:text-indigo-500">
                            privacy policy
                          </a>
                          .
                        </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                          className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 transition-all"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              Send Message
                            </>
                          )}
                </button>
              </div>
            </form>
                  )}
                </div>
              </div>
              
              {/* How we can help section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900">How We Can Help</h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: 'Workforce Solutions',
                      description: 'Comprehensive staffing solutions tailored to your business needs across India.',
                      icon: Users,
                    },
                    {
                      title: 'Compliance Advisory',
                      description: 'Expert guidance on Indian labor laws and regulatory compliance.',
                      icon: Building,
                    },
                    {
                      title: 'Business Partnerships',
                      description: 'Strategic partnerships to expand your business footprint in India.',
                      icon: Briefcase,
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="absolute -top-3 -left-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                          <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="pl-5">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Office locations */}
            <div className="lg:col-span-2" id="office-locations">
              <div className="sticky top-20">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Offices</h2>
                <p className="mt-2 text-base text-gray-600">
                  Strategic presence across major business hubs in India
                </p>
                
                {/* Tabs for office locations */}
                <div className="mt-6 space-y-4">
                  {officeLocations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveOffice(index)}
                      className={`flex w-full items-start text-left rounded-lg px-4 py-3 transition-colors ${
                        activeOffice === index
                          ? 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <MapPin className={`mt-0.5 h-5 w-5 flex-none ${activeOffice === index ? 'text-blue-600' : 'text-gray-400'}`} aria-hidden="true" />
                      <div className="ml-3">
                        <h3 className={`text-base font-semibold ${activeOffice === index ? 'text-blue-700' : 'text-gray-900'}`}>
                          {location.city}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Active office details */}
                <div className="mt-6 rounded-lg bg-white p-6 shadow-md ring-1 ring-gray-900/5">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{officeLocations[activeOffice].city}</h3>
                  <dl className="mt-4 space-y-4 text-sm leading-6">
                    <div className="flex gap-x-3">
                      <MapPin className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      <dd className="text-gray-700 font-medium">{officeLocations[activeOffice].address}</dd>
                    </div>
                    <div className="flex gap-x-3">
                      <Phone className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      <dd>
                        <a href={`tel:${officeLocations[activeOffice].phone}`} className="text-gray-700 font-medium hover:text-blue-600">
                          {officeLocations[activeOffice].phone}
                        </a>
                        {officeLocations[activeOffice].fax && (
                          <div className="mt-1 text-gray-600">
                            Fax: {officeLocations[activeOffice].fax}
                          </div>
                        )}
                      </dd>
                    </div>
                    <div className="flex gap-x-3">
                      <Mail className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      <dd>
                        {officeLocations[activeOffice].email.map((email, index) => (
                          <div key={index}>
                            <a href={`mailto:${email}`} className="text-gray-700 font-medium hover:text-blue-600">
                              {email}
                            </a>
                          </div>
                        ))}
                      </dd>
                    </div>
                    <div className="flex gap-x-3">
                      <Clock className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      <dd className="text-gray-700 font-medium">{officeLocations[activeOffice].hours}</dd>
                    </div>
                  </dl>
                  
                  {/* Map placeholder - In a real implementation, use Google Maps or similar */}
                  <div className="mt-6 aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden">
                    <div className="h-full w-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+1d4ed8(${officeLocations[activeOffice].coordinates.lng},${officeLocations[activeOffice].coordinates.lat})/${officeLocations[activeOffice].coordinates.lng},${officeLocations[activeOffice].coordinates.lat},13,0/600x450?access_token=pk.eyJ1IjoiZXhhbXBsZXRva2VuIiwiYSI6ImV4YW1wbGV0b2tlbiJ9.example')] bg-cover bg-center">
                      {/* This would be replaced with an actual map implementation */}
                      <div className="flex h-full items-center justify-center">
                        <Globe className="h-10 w-10 text-blue-600/50" />
                        <span className="ml-2 text-sm text-gray-500">Interactive map would be displayed here</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {[
                {
                  question: "What areas in India do you provide workforce solutions for?",
                  answer: "We have a pan-India presence with operations in over 25 cities across all major states. Our primary offices are in Gurgaon, Mumbai, Bengaluru, and Chennai, but we provide services throughout the country."
                },
                {
                  question: "How quickly can you deploy workforce solutions?",
                  answer: "Depending on the scale and complexity of your requirements, we can typically deploy solutions within 2-4 weeks. For urgent needs, we offer expedited services to meet critical timelines."
                },
                {
                  question: "What makes Apex different from other workforce solution providers?",
                  answer: "Our deep expertise in Indian labor regulations, combined with our proprietary AI-powered workforce analytics platform, enables us to provide compliant, efficient, and data-driven solutions that reduce costs and enhance productivity."
                },
                {
                  question: "Do you offer customized compliance solutions for specific industries?",
                  answer: "Yes, we offer industry-specific compliance solutions tailored to the unique regulatory requirements of different sectors including manufacturing, IT & ITES, banking, retail, and healthcare."
                },
                {
                  question: "How do I get started with your services?",
                  answer: "Simply fill out our contact form on this page, and one of our workforce consultants will reach out within 24 hours to understand your needs and propose a customized solution."
                }
              ].map((faq, index) => (
                <div key={index} className="pt-6">
                  <dt>
                    <button 
                      className="flex w-full items-start justify-between text-left text-gray-900"
                      onClick={() => {
                        // In a real implementation, this would toggle the visibility of the answer
                      }}
                    >
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}