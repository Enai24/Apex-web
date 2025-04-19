import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp, Send, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const response = await fetch('https://formsubmit.co/ajax/mail@apexenterprises.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (result.success === 'true') {
        toast.success('Subscribed successfully!');
        setSubscribed(true);
        setEmail('');
      } else {
        toast.error('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-[#0c1326] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <svg className="absolute bottom-0 fill-white w-full h-auto" viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,0 C300,30 600,15 1200,30 L1200,0 Z"></path>
        </svg>
      </div>

      {/* Footer top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {/* Company information */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 max-w-fit">
                <img src="/logo.png" alt="Apex Enterprises" className="h-8 sm:h-9 w-auto drop-shadow-md" />
                <div className="border-l border-white/20 pl-3">
                  <div className="text-base sm:text-lg font-bold tracking-wide bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">APEX</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 -mt-1">Enterprises</div>
                </div>
              </div>
            </Link>
            
            <p className="mt-4 sm:mt-5 text-sm leading-relaxed text-gray-300 max-w-sm">
              India's leading workforce solutions provider, offering end-to-end staffing, payroll, and AI-powered compliance services across multiple industries and states since 2001.
            </p>

            {/* Awards/Recognition */}
            <div className="mt-5 sm:mt-6 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-900/30 to-indigo-900/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-blue-300 backdrop-blur-sm">
              <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1.5 sm:mr-2" />
              <span>Operating in 25+ cities across India</span>
            </div>
          </div>
          
          {/* Contact information */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Contact Us
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group">
                <div className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg bg-blue-900/20 group-hover:bg-blue-900/40 transition-all">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
                </div>
                <a href="tel:+910124-2340139" className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  +91 0124 2340139
                </a>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group">
                <div className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg bg-blue-900/20 group-hover:bg-blue-900/40 transition-all">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
                </div>
                <a href="mailto:mail@apexenterprises.net" className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  mail@apexenterprises.net
                </a>
              </div>
              
              <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group">
                <div className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-blue-900/20 group-hover:bg-blue-900/40 transition-all mt-1">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
                </div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  <div className="font-medium">Gurgaon (Head Office)</div>
                  <div className="mt-1 text-xs text-gray-400">11, Near Hanuman Mandir, Shankar Chowk Road,<br />
                  Dundahera, Gurgaon - 122016</div>
                </div>
              </div>
            </div>
            
            {/* Social media */}
            <div className="mt-5 sm:mt-6 flex space-x-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/apex-enterprises1/', label: 'LinkedIn', color: 'from-blue-400 to-blue-600' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'from-blue-300 to-blue-500' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'from-blue-500 to-indigo-600' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'from-pink-500 to-purple-600' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={`Follow on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-lg bg-white/5 hover:bg-gradient-to-br hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br ${social.color} group-hover:bg-clip-text group-hover:text-transparent`} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:col-span-6">
              <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Company
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Clients', href: '/clients' },
                  { name: 'Updates', href: '/updates' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Industries', href: '/industries' },
                  { name: 'Legal', href: '/legal' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-white group flex items-center hover:translate-x-1 transition-transform"
                    >
                      <ChevronRight className="mr-1 h-3 w-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                    </Link>
                    </li>
                  ))}
                </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Services
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  { name: 'Contract Staffing', href: '/services/contract-staffing' },
                  { name: 'Payroll Services', href: '/services/payroll-services' },
                  { name: 'Regulatory Compliance', href: '/services/regulatory-compliance' },
                  { name: 'AI Workforce Analytics', href: '/services/workforce-analytics' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-white group flex items-center hover:translate-x-1 transition-transform"
                    >
                      <ChevronRight className="mr-1 h-3 w-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                    </Link>
                    </li>
                  ))}
                </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Locations
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  { name: 'Delhi NCR', href: '/locations/delhi' },
                  { name: 'Bangalore', href: '/locations/bangalore' },
                  { name: 'Mumbai', href: '/locations/mumbai' },
                  { name: 'Chennai', href: '/contact?location=chennai' },
                  { name: 'All Locations', href: '/contact#office-locations' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-white group flex items-center hover:translate-x-1 transition-transform"
                    >
                      <ChevronRight className="mr-1 h-3 w-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                    </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 pt-6 sm:pt-8 border-t border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                    Newsletter
                  </h3>
                </div>
                <p className="text-sm text-gray-300">
                  Stay updated with the latest workforce trends and regulatory changes across India.
                </p>
                <form className="mt-3 sm:mt-4" onSubmit={handleSubscribe}>
                  <div className="relative max-w-sm overflow-hidden rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-0.5 shadow-lg shadow-blue-900/10">
                    <div className="relative flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="flex-1 bg-gray-900/80 border-0 py-2.5 sm:py-3 pl-3 sm:pl-4 pr-12 text-sm text-gray-200 placeholder-gray-500 focus:ring-0 focus:outline-none"
                        required
                      />
                      <button
                        type="submit"
                        className={`absolute inset-y-0 right-0 flex items-center justify-center px-3 sm:px-4 transition-colors ${
                          subscribed ? 'text-green-400 bg-green-900/20' : 'text-blue-400 hover:text-blue-300 hover:bg-blue-900/20'
                        }`}
                      >
                        {subscribed ? (
                          <div className="flex items-center justify-center">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                            </svg>
                          </div>
                        ) : (
                          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Certification */}
              <div className="flex flex-col justify-end">
                <div className="flex flex-col md:items-end">
                  <div className="inline-flex items-center rounded-xl bg-white/5 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-medium text-blue-300">
                    <span className="text-sm font-semibold">ISO 9001:2015 Certified</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 md:text-right">
                    Committed to the highest standards of quality and service excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-white/10 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} Apex Enterprises. All rights reserved.</span>
          </div>
          
          <div className="mt-3 sm:mt-0 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-gray-400">
            <Link to="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
            <Link to="/legal-services" className="hover:text-blue-300 transition-colors">Legal Services</Link>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-white/5 hover:bg-gradient-to-br from-blue-600 to-indigo-600 transition-all duration-300 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}