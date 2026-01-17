'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, Building, ChevronRight, Briefcase, Users, MessageSquare, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { SEO, generateFAQSchema } from '../utils/seo';
import { useSearchParams } from 'next/navigation';

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
    email: ['mail@apexenterprises.net'],
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

// Organize offices by region
const officesByRegion = [
  {
    region: "North India",
    locations: [officeLocations[0]]
  },
  {
    region: "West India",
    locations: [officeLocations[1]]
  },
  {
    region: "South India",
    locations: [officeLocations[2], officeLocations[3]]
  }
];

export default function Contact() {
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const locationParam = searchParams?.get('location');

  // Check for location parameter in URL and set the active office
  useEffect(() => {
    if (locationParam) {
      setValue('preferredLocation', locationParam.toLowerCase());
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
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SEO
        title="Contact Apex Enterprises | Workforce Solutions Provider"
        description="Get in touch with India's leading workforce solutions provider. Contact our offices in Delhi, Mumbai, Bengaluru, Chennai, and 25+ locations across India."
        keywords="contact workforce solutions, staffing company India, HR outsourcing contact, payroll services contact"
        canonical="/contact"
        schema={generateFAQSchema(contactFAQs)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy py-20 lg:py-32 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-oat-medium0 opacity-20 blur-3xl animate-blob"></div>
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-red opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
                CONTACT US
              </span>
              <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.02em] mb-6">
                Let's Connect
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Reach out to India's leading AI-powered workforce solutions provider.
                Our team is ready to help your business scale.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="bg-oat py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, title: "Sales", desc: "Talk to our team", href: "#form" },
                { icon: Phone, title: "Support", desc: "+91 0124 2340139", href: "tel:+911242340139" },
                { icon: Building, title: "Partners", desc: "Explore partnerships", href: "#form" },
                { icon: Mail, title: "Email", desc: "mail@apexenterprises.net", href: "mailto:mail@apexenterprises.net" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-4 bg-white p-6 shadow-premium hover:shadow-lg transition-all duration-300 group"
                >
                  <item.icon className="w-10 h-10 text-orange-red" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-navy font-medium group-hover:text-orange-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-teal-gray text-[14px]">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-white py-20 lg:py-32" id="form">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div>
                <h2 className="text-navy text-[32px] font-medium mb-6">Get in touch</h2>
                <p className="text-teal-gray text-lg mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="rounded-lg bg-green-50 p-8 flex items-center justify-center border border-green-200">
                    <div className="text-center">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-green-800">Thank you for contacting us!</h3>
                      <p className="mt-2 text-sm text-green-700">
                        Your message has been received. Our team will reach out to you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 btn-primary"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-navy text-[14px] font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-navy text-[14px] font-medium mb-2">Phone *</label>
                        <input
                          type="tel"
                          {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9+\-\s()]*$/,
                              message: 'Invalid phone number',
                            },
                          })}
                          className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                          placeholder="+91 12345 67890"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy text-[14px] font-medium mb-2">Work Email *</label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-navy text-[14px] font-medium mb-2">Company</label>
                        <input
                          type="text"
                          {...register('company')}
                          className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-navy text-[14px] font-medium mb-2">Preferred Location</label>
                        <select
                          {...register('preferredLocation')}
                          className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                        >
                          <option value="">Select location</option>
                          <option value="delhi">Delhi NCR (Gurgaon, Noida)</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="bangalore">Bengaluru</option>
                          <option value="chennai">Chennai</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy text-[14px] font-medium mb-2">Service of Interest *</label>
                      <select
                        {...register('serviceInterest', { required: 'Please select a service' })}
                        className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.serviceInterest && (
                        <p className="mt-1 text-sm text-red-600">{errors.serviceInterest.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-navy text-[14px] font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        {...register('subject', { required: 'Subject is required' })}
                        className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                        placeholder="How can we help you?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-navy text-[14px] font-medium mb-2">Message *</label>
                      <textarea
                        rows={4}
                        {...register('message', { required: 'Message is required' })}
                        className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red resize-none transition-all"
                        placeholder="Tell us more about your requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="text-[13px] text-teal-gray">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy-policy" className="text-link-blue hover:underline">Privacy Policy</a>.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-orange-red text-white px-8 py-4 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Submit
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-oat-medium0/50 p-8 lg:p-10 mb-8 border border-border">
                  <h3 className="text-navy text-[24px] font-medium mb-8">Contact Information</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-red/10 group-hover:bg-orange-red/20 transition-colors">
                        <MapPin className="w-5 h-5 text-orange-red" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-navy font-bold text-sm uppercase tracking-wider mb-1">Headquarters</p>
                        <p className="text-teal-gray text-[15px] leading-relaxed">
                          11, Near Hanuman Mandir, Shankar Chowk Road, Dundahera, Gurgaon - 122016, Haryana
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-red/10 group-hover:bg-orange-red/20 transition-colors">
                        <Phone className="w-5 h-5 text-orange-red" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-navy font-bold text-sm uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-teal-gray text-[15px]">+91 0124 2340139</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-red/10 group-hover:bg-orange-red/20 transition-colors">
                        <Mail className="w-5 h-5 text-orange-red" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-navy font-bold text-sm uppercase tracking-wider mb-1">Email</p>
                        <p className="text-teal-gray text-[15px]">mail@apexenterprises.net</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-red/10 group-hover:bg-orange-red/20 transition-colors">
                        <Clock className="w-5 h-5 text-orange-red" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-navy font-bold text-sm uppercase tracking-wider mb-1">Business Hours</p>
                        <p className="text-teal-gray text-[15px]">Mon-Sat, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-red/10 group-hover:bg-orange-red/20 transition-colors">
                        <Globe className="w-5 h-5 text-orange-red" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-navy font-bold text-sm uppercase tracking-wider mb-1">Global Presence</p>
                        <p className="text-teal-gray text-[15px]">Operating in 25+ cities across India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy p-8 lg:p-10">
                  <h3 className="text-white text-[24px] font-medium mb-4">Ready to get started?</h3>
                  <p className="text-white/70 mb-6">
                    Discover how Apex can transform your workforce management with AI-powered solutions.
                  </p>
                  <a
                    href="/services"
                    className="inline-flex items-center bg-orange-red text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
                  >
                    Explore services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>

                {/* How We Can Help */}
                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: 'Workforce Solutions',
                      description: 'Comprehensive staffing solutions tailored to your business needs.',
                      icon: Users,
                    },
                    {
                      title: 'Compliance Advisory',
                      description: 'Expert guidance on Indian labor laws and regulatory compliance.',
                      icon: Building,
                    },
                    {
                      title: 'Business Partnerships',
                      description: 'Strategic partnerships to expand your footprint in India.',
                      icon: Briefcase,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-5 border border-border hover:shadow-premium transition-all">
                      <div className="shrink-0 h-10 w-10 rounded-lg bg-orange-red/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-orange-red" />
                      </div>
                      <div>
                        <h4 className="text-navy font-medium">{item.title}</h4>
                        <p className="text-teal-gray text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="bg-oat py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
              <div className="max-w-2xl">
                <span className="font-mono text-[14px] font-bold tracking-[0.2em] text-orange-red uppercase mb-4 block">
                  Our Global Presence
                </span>
                <h2 className="text-navy text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight">
                  Strategic Hubs Across<br />The Subcontinent
                </h2>
              </div>
              <p className="text-teal-gray text-lg max-w-sm">
                With centralized control and localized execution, we provide seamless workforce solutions across 25+ major Indian cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officesByRegion.map((region, idx) => (
                <div key={idx} className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-border"></div>
                    <h3 className="text-teal-gray font-mono text-[12px] uppercase tracking-[0.2em] font-bold">
                      {region.region}
                    </h3>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>

                  <div className="space-y-8 flex-1">
                    {region.locations.map((location, lIdx) => (
                      <div
                        key={lIdx}
                        className="group bg-white p-8 border border-border hover:border-orange-red/30 hover:shadow-premium transition-all duration-500"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 group-hover:bg-orange-red/10 transition-colors">
                            <MapPin className="w-5 h-5 text-navy group-hover:text-orange-red transition-colors" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="text-navy text-[18px] font-medium group-hover:text-orange-red transition-colors duration-300">
                              {location.city}
                            </h4>
                          </div>
                        </div>

                        <div className="space-y-4 pl-14">
                          <p className="text-teal-gray text-[14px] leading-relaxed border-l-2 border-border pl-4 group-hover:border-orange-red/20 transition-colors">
                            {location.address}
                          </p>

                          <div className="pt-4 space-y-3">
                            <a href={`tel:${location.phone}`} className="flex items-center gap-3 text-teal-gray text-[14px] hover:text-orange-red transition-colors group/link">
                              <Phone size={14} className="text-orange-red opacity-60 group-hover/link:opacity-100" />
                              <span className="font-medium">{location.phone}</span>
                            </a>

                            {location.fax && (
                              <div className="flex items-center gap-3 text-teal-gray text-[14px]">
                                <span className="font-mono font-bold text-[10px] uppercase text-orange-red opacity-60">FAX</span>
                                <span>{location.fax}</span>
                              </div>
                            )}

                            {location.email && location.email.length > 0 && (
                              <div className="space-y-2">
                                {location.email.map((email, eIdx) => (
                                  <a key={eIdx} href={`mailto:${email}`} className="flex items-center gap-3 text-teal-gray text-[14px] hover:text-orange-red transition-colors group/link">
                                    <Mail size={14} className="text-orange-red opacity-60 group-hover/link:opacity-100" />
                                    <span className="truncate">{email}</span>
                                  </a>
                                ))}
                              </div>
                            )}

                            {location.hours && (
                              <div className="flex items-start gap-3 text-teal-gray text-[14px] pt-2 mt-2 border-t border-border/50">
                                <Clock size={14} className="text-orange-red opacity-60 mt-0.5" />
                                <span className="text-[13px] leading-snug">{location.hours}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <button className="text-[13px] font-bold text-navy flex items-center gap-2 hover:text-orange-red transition-colors">
                            View on Maps <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: '20+', label: 'Years in Industry' },
                { stat: '25+', label: 'Cities Covered' },
                { stat: '1,000+', label: 'Clients Served' },
                { stat: '50,000+', label: 'Workforce Deployed' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-oat hover:bg-navy hover:text-white group transition-all duration-300">
                  <p className="text-[36px] md:text-[48px] font-medium text-orange-red group-hover:text-white transition-colors">
                    {item.stat}
                  </p>
                  <p className="text-teal-gray text-sm mt-2 group-hover:text-white/70 transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-oat py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
                  FAQ
                </span>
                <h2 className="text-navy text-[32px] md:text-[40px] font-medium">
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-4">
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
                    answer: "Simply fill out our contact form above, and one of our workforce consultants will reach out within 24 hours to understand your needs and propose a customized solution."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 border border-border">
                    <h3 className="text-navy font-medium text-lg">{faq.question}</h3>
                    <p className="text-teal-gray mt-3 text-[15px] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}