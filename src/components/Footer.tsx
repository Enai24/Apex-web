'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Facebook, Twitter, Rss, Youtube, Instagram, Users, ArrowRight } from 'lucide-react';

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
      { label: "Payroll Services", href: "/services/payroll-services", category: "Managed Services" },
      { label: "Regulatory Compliance", href: "/services/regulatory-compliance", category: "Managed Services" },
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
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
        toast.success('Thank you for subscribing!');
      } else {
        toast.error('Subscription failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="w-full bg-[#1B292E] font-sans text-white">
      {/* 1. Final CTA Section - Only visible on Landing Page */}
      {isLandingPage && (
        <section className="py-24 border-b border-white/10">
          <div className="container mx-auto px-6 max-w-[1280px] text-center">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-[1.1] tracking-tight text-balance font-sans">
              Ready to transform your<br />workforce in India?
            </h2>
            <p className="text-lg md:text-xl text-[#A0AAB0] mb-10 max-w-2xl mx-auto">
              Join 500+ companies that trust Apex for scale, compliance, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto min-w-[200px] bg-white text-[#1B292E] px-8 py-4 rounded-[4px] font-bold text-base hover:bg-[#F9F7F2] transition-colors text-center shadow-lg"
              >
                Request Consultation
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto min-w-[200px] border border-white/30 text-white px-8 py-4 rounded-[4px] font-bold text-base hover:bg-white/10 transition-colors text-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 2. Main Sitemap Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
            {/* Column 1: Company Profile (Logo + Text Branding) */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Apex Enterprises"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-[20px] font-bold text-[#F68B1F] leading-none tracking-tight">APEX</span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-white/90 mt-0.5 font-bold">Enterprises</span>
                    <span className="text-[8px] font-bold text-white/50 tracking-widest mt-1">EST. 2003</span>
                  </div>
                </div>
              </Link>

              <div className="text-[14px] text-[#A0AAB0] leading-[1.6] space-y-2 mb-8 font-medium">
                <p className="text-white">Apex Enterprises (HQ)</p>
                <p>11, Shankar Chowk Road</p>
                <p>Gurgaon - 122016, Haryana</p>
                <p className="text-[#EE3D2C] mt-2">+91 0124 2340139</p>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <a href="https://www.linkedin.com/company/apex-enterprises1/" target="_blank" rel="noopener noreferrer" className="text-[#A0AAB0] hover:text-[#EE3D2C] transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
                <a href="#" className="text-[#A0AAB0] hover:text-[#EE3D2C] transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
                <a href="#" className="text-[#A0AAB0] hover:text-[#EE3D2C] transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
                <a href="#" className="text-[#A0AAB0] hover:text-[#EE3D2C] transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
                <a href="#" className="text-[#A0AAB0] hover:text-[#EE3D2C] transition-colors"><Youtube size={20} strokeWidth={1.5} /></a>
              </div>

              <Link href="/careers" className="inline-flex items-center group">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#EE3D2C] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
                  <Users className="text-[#EE3D2C] w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="ml-3">
                  <span className="text-white text-[14px] font-bold block leading-tight border-b border-transparent group-hover:border-[#EE3D2C] transition-all">See Careers</span>
                  <span className="text-[#A0AAB0] text-[13px] leading-tight transition-colors">Join our team</span>
                </div>
              </Link>
            </div>

            {/* Columns 2-6: Nav Items */}
            {footerNavigation.map((section, idx) => (
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
                ISO 9001:2015
              </div>
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-[4px] text-[11px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                NAPS Certified
              </div>
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-[4px] text-[11px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                MSME Registered
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to workforce updates"
                className="flex-1 bg-white/5 border border-white/10 py-3 px-4 text-[14px] text-white placeholder-white/30 rounded-[4px] focus:ring-1 focus:ring-[#EE3D2C] focus:outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#EE3D2C] text-white font-bold rounded-[4px] text-[14px] hover:bg-[#D32F2F] transition-colors whitespace-nowrap"
              >
                {subscribed ? 'Thank You!' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* 3. Bottom Legal Footer */}
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="text-[#A0AAB0] text-[12px] space-y-3 max-w-4xl">
              <p className="leading-relaxed">
                © {new Date().getFullYear()} Apex Enterprises. All rights reserved.
                Operating across 25+ cities in India. MSME Registered | NAPS Certified | ISO 9001 Certified.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-bold uppercase tracking-[0.05em]">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Use</Link>
                <Link href="/legal-services" className="hover:text-white transition-colors">Trust Center</Link>
                <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
              </div>
            </div>
            <div className="text-[#A0AAB0] text-[12px] font-mono uppercase tracking-widest">
              Built for Excellence 🇮🇳
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}