'use client';

import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/client';

/**
 * Databricks-Style Global Footer (Refined)
 * Redesigned for Apex Enterprises following the exact UI specification.
 * Restored all content, removed image logo, and aligned typography.
 */

interface FooterLink {
  label: string;
  href: string;
  category?: string;
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

const footerNavigation: FooterSection[] = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about", category: "Corporate" },
      { label: "Our Portfolio", href: "/portfolio", category: "Corporate" },
      { label: "Clients", href: "/clients", category: "Corporate" },
      { label: "Partners", href: "/partners", category: "Corporate" },
      { label: "News & Updates", href: "/updates", category: "Corporate" },
      { label: "Contact Us", href: "/contact", category: "Corporate" },
      { label: "Careers", href: "/careers", category: "Work with us" },
      { label: "Working at Apex", href: "/about#culture", category: "Work with us" },
      { label: "IT & Technology", href: "/industries", category: "Industries" },
      { label: "Manufacturing", href: "/industries", category: "Industries" },
      { label: "Healthcare", href: "/industries", category: "Industries" },
      { label: "Retail & FMCG", href: "/industries", category: "Industries" },
    ]
  },
  {
    title: "Services",
    items: [
      { label: "Contract Staffing", href: "/services/contract-staffing", category: "Staffing Solutions" },
      { label: "Permanent Recruitment", href: "/services/permanent-recruitment", category: "Staffing Solutions" },
      { label: "Executive Search", href: "/services/executive-search", category: "Staffing Solutions" },
      { label: "Specialised Hiring", href: "/services/specialised-hiring", category: "Staffing Solutions" },
      { label: "Payroll Services", href: "/services/payroll-services", category: "Managed Services" },
      { label: "Payroll & Compliance", href: "/services/payroll-compliance", category: "Managed Services" },
      { label: "Regulatory Compliance", href: "/services/regulatory-compliance", category: "Managed Services" },
      { label: "Labour Law Advisory", href: "/services/labour-law-advisory", category: "Managed Services" },
      { label: "Industrial Housekeeping", href: "/services/industrial-housekeeping", category: "Managed Services" },
      { label: "HR Outsourcing", href: "/services/hr-outsourcing", category: "Managed Services" },
    ]
  },
  {
    title: "AI Solutions",
    items: [
      { label: "AI Talent Matching", href: "/ai-workforce-solutions/ai-talent-matching", category: "AI Workforce Platform" },
      { label: "Predictive Analytics", href: "/ai-workforce-solutions/predictive-analytics", category: "AI Workforce Platform" },
      { label: "Automated Compliance", href: "/ai-workforce-solutions/automated-compliance", category: "AI Workforce Platform" },
      { label: "AI Resume Screening", href: "/ai-resume-screening", category: "AI Workforce Platform" },
      { label: "Intelligent Payroll", href: "/ai-workforce-solutions/intelligent-payroll", category: "Tools" },
      { label: "Recruitment Assistant", href: "/ai-workforce-solutions/ai-recruitment-assistant", category: "Tools" },
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Employer Portal", href: "/employers", category: "For Employers" },
      { label: "Request Quote", href: "/contact", category: "For Employers" },
      { label: "Job Seekers", href: "/job-seekers", category: "For Job Seekers" },
      { label: "Careers", href: "/careers", category: "For Job Seekers" },
      { label: "Privacy Policy", href: "/privacy-policy", category: "Legal" },
      { label: "Terms of Service", href: "/terms-of-service", category: "Legal" },
      { label: "Legal Services", href: "/legal-services", category: "Legal" },
      { label: "MSME Verification", href: "/about#certifications", category: "Trust" },
    ]
  },
  {
    title: "Locations",
    items: [
      { label: "Delhi NCR", href: "/locations/delhi", category: "North India" },
      { label: "Gurgaon (HQ)", href: "/contact", category: "North India" },
      { label: "Noida", href: "/locations/delhi", category: "North India" },
      { label: "Bangalore", href: "/locations/bangalore", category: "South & West" },
      { label: "Mumbai", href: "/locations/mumbai", category: "South & West" },
      { label: "Chennai", href: "/contact?location=chennai", category: "South & West" },
      { label: "Hyderabad", href: "/contact?location=hyderabad", category: "South & West" },
      { label: "All 25+ Cities", href: "/contact#office-locations", category: "Pan-India" },
    ]
  }
];

export default function Footer() {
  const { translate, translateData } = useI18n();
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const localizedFooterNavigation = useMemo(
    () => translateData(footerNavigation, { skipKeys: ['href'] }),
    [translateData]
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('https://formsubmit.co/ajax/mail@apexenterprises.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          type: 'Newsletter Subscription',
          page: pathname
        })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        toast.success(translate('Thank you for subscribing!'));
      } else {
        toast.error(translate('Subscription failed. Please try again.'));
      }
    } catch (error) {
      toast.error(translate('An error occurred. Please try again.'));
    }
  };

  return (
    <footer className="w-full bg-[#1B292E] font-sans text-white">
      {/* 1. Final CTA Section - Only visible on Landing Page */}
      {isLandingPage && (
        <section className="py-16 sm:py-24 border-b border-white/10">
          <div className="container mx-auto px-6 max-w-[1280px] text-center">
            <h2 className="text-[32px] sm:text-4xl md:text-6xl font-medium text-white mb-6 leading-[1.1] tracking-tight text-balance font-sans">
              {translate('Ready to transform your')}<br />{translate('workforce in India?')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#A0AAB0] mb-8 sm:mb-10 max-w-2xl mx-auto">
              {translate('Join 500+ companies that trust Apex for scale, compliance, and excellence.')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto min-w-[200px] bg-white text-[#1B292E] px-8 py-4 rounded-[4px] font-bold text-base hover:bg-[#F9F7F2] transition-colors text-center shadow-lg"
              >
                {translate('Request Consultation')}
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto min-w-[200px] border border-white/30 text-white px-8 py-4 rounded-[4px] font-bold text-base hover:bg-white/10 transition-colors text-center"
              >
                {translate('Explore Solutions')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 2. Main Sitemap Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-y-12 mb-16 sm:mb-20">
            {/* Column 1: Company Profile (Logo + Text Branding) */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-8 lg:text-left text-center">
                <div className="flex items-center lg:justify-start justify-center gap-3">
                  <img
                    src="/logo.png"
                    alt={translate('Apex Enterprises')}
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-[20px] font-bold text-[#F68B1F] leading-none tracking-tight">APEX</span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-white/90 mt-0.5 font-bold">Enterprises</span>
                    <span className="text-[8px] font-bold text-white/50 tracking-widest mt-1">EST. 2003</span>
                  </div>
                </div>
              </Link>

              <div className="text-[14px] text-[#A0AAB0] leading-[1.6] space-y-2 mb-8 font-medium lg:text-left text-center">
                <p className="text-white">{translate('Apex Enterprises (HQ)')}</p>
                <p>{translate('11, Shankar Chowk Road')}</p>
                <p>{translate('Gurgaon - 122016, Haryana')}</p>
                <p className="text-[#EE3D2C] mt-2">+91 0124 2340139</p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-5 mb-10">
                <a href="https://www.linkedin.com/company/apex-enterprises1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#A0AAB0] hover:text-[#0A66C2] transition-colors p-2 -m-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com/apexenterprises" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#A0AAB0] hover:text-[#1DA1F2] transition-colors p-2 -m-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://instagram.com/apexenterprises" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#A0AAB0] hover:text-[#E4405F] transition-colors p-2 -m-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.278-.262-2.149-.558-2.914-.306-.789-.718-1.459-1.384-2.126C21.42 4.93 20.75 4.518 19.962 4.21c-.766-.295-1.636-.498-2.913-.556C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://youtube.com/@apexenterprises" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#A0AAB0] hover:text-[#FF0000] transition-colors p-2 -m-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link href="/careers" className="inline-flex items-center group">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#EE3D2C] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
                    <Users className="text-[#EE3D2C] w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="ml-3 text-left">
                    <span className="text-white text-[14px] font-bold block leading-tight border-b border-transparent group-hover:border-[#EE3D2C] transition-all">{translate('See Careers')}</span>
                    <span className="text-[#A0AAB0] text-[13px] leading-tight transition-colors">{translate('Join our team')}</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Columns 2-6: Nav Items */}
            {localizedFooterNavigation.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-[#EE3D2C] font-mono text-[14px] uppercase tracking-wider mb-8 font-bold">
                  {section.title}
                </h4>
                <nav className="flex flex-col gap-4">
                  {section.items.reduce((acc: React.ReactNode[], item, i, arr) => {
                    const prevItem = arr[i - 1];
                    // Category separator (representing original headers)
                    if (item.category && item.category !== prevItem?.category) {
                      acc.push(
                        <p key={`cat-${item.category}`} className="text-[#5A6971] text-[11px] font-mono uppercase tracking-widest mt-4 mb-0.5">
                          {item.category}
                        </p>
                      );
                    }
                    acc.push(
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-[#A0AAB0] text-[14px] hover:text-white transition-colors leading-[1.4] font-medium"
                      >
                        {item.label}
                      </Link>
                    );
                    return acc;
                  }, [])}
                </nav>
              </div>
            ))}
          </div>

          {/* Newsletter / Certification Quick Bar */}
          <div className="py-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-wrap gap-4">
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-[4px] text-[11px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {translate('ISO 9001:2015')}
              </div>
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-[4px] text-[11px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                {translate('NAPS Certified')}
              </div>
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-[4px] text-[11px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                {translate('MSME Registered')}
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={translate('Subscribe to workforce updates')}
                className="flex-1 bg-white/5 border border-white/10 py-3 px-4 text-[14px] text-white placeholder-white/30 rounded-[4px] focus:ring-1 focus:ring-[#EE3D2C] focus:outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#EE3D2C] text-white font-bold rounded-[4px] text-[14px] hover:bg-[#D32F2F] transition-colors whitespace-nowrap"
              >
                {subscribed ? translate('Thank You!') : translate('Subscribe')}
              </button>
            </form>
          </div>

          {/* 3. Bottom Legal Footer */}
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="text-[#A0AAB0] text-[12px] space-y-3 max-w-4xl">
              <p className="leading-relaxed">
                {translate('© {year} Apex Enterprises. All rights reserved. Operating across 25+ cities in India. MSME Registered | NAPS Certified | ISO 9001 Certified.', { year: new Date().getFullYear() })}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-bold uppercase tracking-[0.05em]">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">{translate('Privacy Policy')}</Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">{translate('Terms of Use')}</Link>
                <Link href="/legal-services" className="hover:text-white transition-colors">{translate('Trust Center')}</Link>
                <Link href="/legal" className="hover:text-white transition-colors">{translate('Legal')}</Link>
              </div>
            </div>
            <div className="text-[#A0AAB0] text-[12px] font-mono uppercase tracking-widest">
              {translate('Built for Excellence 🇮🇳')}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
