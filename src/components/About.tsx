'use client';

import React, { useMemo, useState } from 'react';
import {
  Target, Award, Heart, Scale, Users, Building2, Clock, MapPin, Globe, BarChart2,
  Shield, Zap, Star, TrendingUp, Briefcase, ArrowRight, Check, ChevronRight, Eye,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../utils/seo';
import { useI18n } from '@/i18n/client';

export default function About() {
  const { translate, translateData } = useI18n();
  const [activeValue, setActiveValue] = useState('innovation');

  // Company core values content
  const coreValues = useMemo(() => ({
    innovation: {
      title: "Innovation",
      icon: Zap,
      description: "We continuously evolve our services, methodologies, and technologies to stay ahead of market trends. Our AI-powered solutions drive efficiency and effectiveness for our clients.",
      points: [
        "AI-powered talent matching and workforce analytics",
        "Proprietary compliance monitoring systems",
        "Data-driven strategic workforce planning"
      ]
    },
    excellence: {
      title: "Operational Excellence",
      icon: TrendingUp,
      description: "Our strength lies in our cutting-edge infrastructure, highly trained workforce, and client-centric service delivery. We continuously benchmark against global standards.",
      points: [
        "ISO 9001:2015 certified processes",
        "Regular performance audits and optimization",
        "Continuous improvement methodology"
      ]
    },
    integrity: {
      title: "Regulatory Integrity",
      icon: Shield,
      description: "We maintain unwavering compliance with India's complex labor regulations, providing our clients with security and confidence in their workforce management.",
      points: [
        "100% statutory compliance guaranteed",
        "Real-time regulatory update monitoring",
        "Comprehensive compliance documentation"
      ]
    },
    commitment: {
      title: "Client Commitment",
      icon: Heart,
      description: "We're dedicated to creating long-term partnerships through exceptional service quality, transparent communication, and understanding each client's unique needs.",
      points: [
        "24/7 dedicated account management",
        "Regular business review meetings",
        "Customized service level agreements"
      ]
    }
  }), []);

  const localizedCoreValues = useMemo(
    () => translateData(coreValues, { skipKeys: ['icon'] }),
    [coreValues, translateData]
  );

  const timelineItems = useMemo(() => translateData([
    { year: '2001', title: 'Foundation', description: 'Established in Gurgaon with a vision to transform workforce management in India', icon: Building2 },
    { year: '2005', title: 'Expansion', description: 'Extended operations to multiple cities across North India', icon: MapPin },
    { year: '2010', title: 'Diversification', description: 'Added specialized services including Facility Management and Payroll Solutions', icon: Briefcase },
    { year: '2015', title: 'Technology Integration', description: 'Implemented advanced systems for enhanced service delivery and monitoring', icon: BarChart2 },
    { year: '2020', title: 'National Presence', description: 'Achieved pan-India coverage with clients across diverse industries', icon: Globe },
    { year: '2023', title: 'Digital Transformation', description: 'Launched AI-powered workforce management platform', icon: Zap },
  ], { skipKeys: ['year', 'icon'] }), [translateData]);

  const stats = useMemo(() => translateData([
    { label: 'Years of Excellence', value: '20+', icon: Clock },
    { label: 'Cities Covered', value: '50+', icon: MapPin },
    { label: 'Satisfied Clients', value: '200+', icon: Building2 },
    { label: 'Team Members', value: '1,000+', icon: Users },
  ], { skipKeys: ['value', 'icon'] }), [translateData]);

  const originHighlights = useMemo(() => translateData([
    'ISO 9001:2015 certified processes',
    '100% statutory compliance guarantee',
    'Pan-India management network'
  ]), [translateData]);

  const leadershipTeam = useMemo(() => translateData([
    { name: 'Rajiv Kumar', role: 'Chief Operations Officer', desc: 'Oversees all operational aspects across India, ensuring consistent quality.' },
    { name: 'Priya Sharma', role: 'Head of Legal Services', desc: 'Leads legal advisory, providing expert guidance on compliance and regulations.' },
    { name: 'Anand Patel', role: 'Director of Business Development', desc: 'Spearheads expansion initiatives and develops strategic partnerships.' }
  ], { skipKeys: ['name'] }), [translateData]);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SEO
        title={translate("About Us | Apex Enterprises | 20+ Years of Excellence")}
        description={translate("Learn about Apex Enterprises - India's leading workforce management company with over 20 years of excellence in staffing solutions.")}
      />

      {/* Hero Section - Clean White/Oat */}
      <section className="relative bg-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-oat-medium0 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-red opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
              {translate('ESTABLISHED 2001 • 20+ YEARS OF EXCELLENCE')}
            </span>
            <h1 className="text-navy text-[44px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.03em] mb-8">
              {translate('Transforming')} <span className="text-orange-red">{translate('Workforce Management')}</span> {translate('Across India')}
            </h1>
            <p className="text-teal-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {translate("At Apex Enterprises, we're not just a service provider—we're your strategic partner in navigating India's complex labor ecosystem.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#our-story" className="bg-navy text-white px-8 py-4 font-semibold hover:opacity-90 transition-all">
                {translate('Our Journey')}
              </a>
              <a href="#leadership" className="border border-navy/20 text-navy px-8 py-4 font-semibold hover:bg-navy/5 transition-all">
                {translate('Meet Our Team')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="bg-oat py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-white shadow-premium flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6 text-orange-red" />
                  </div>
                </div>
                <p className="text-navy text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-teal-gray text-[12px] uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Large Typography focus */}
      <section id="our-story" className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="font-mono text-sm text-orange-red uppercase tracking-widest mb-4 block">{translate('OUR ORIGIN')}</span>
              <h2 className="text-navy text-[40px] md:text-[56px] font-medium leading-[1.1] mb-8">
                {translate('Pioneering excellence in')} <br />{translate('workforce innovation.')}
              </h2>
              <div className="bg-oat p-8 border-l-4 border-orange-red">
                <p className="italic text-navy text-xl leading-relaxed">
                  {translate('"Our mission is to transform workforce management in India by empowering businesses with innovative, compliant solutions."')}
                </p>
                <p className="mt-4 text-teal-gray font-bold text-sm uppercase">{translate('— MR. DEVENDER S. NEHRA, Founder')}</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8 text-teal-gray text-lg leading-relaxed">
              <p>
                <strong className="text-navy font-bold">{translate('APEX ENTERPRISES')}</strong>, {translate('headquartered in the National Capital Region, has emerged as a premier provider of workforce solutions across diverse sectors including corporate, hospitality, education, and government institutions.')}
              </p>
              <p>
                {translate('Under the visionary leadership of our founder,')} <strong className="text-navy font-bold">{translate('MR. DEVENDER S. NEHRA (M.A., LL.B)')}</strong>, {translate("we've transformed from a regional service provider to a national leader with an innovative approach to workforce management.")}
              </p>
              <ul className="space-y-4 pt-4">
                {originHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-navy font-semibold text-base">
                    <CheckCircle2 className="h-5 w-5 text-orange-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Databricks Style Minimalist */}
      <section className="bg-oat py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-navy text-[40px] md:text-[48px] font-medium mb-6">{translate('Two Decades of Transformation')}</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-12">
              {timelineItems.map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-orange-red font-mono text-2xl font-bold mb-2">{item.year}</span>
                      <h4 className="text-navy text-xl font-bold mb-2">{item.title}</h4>
                      <p className={`text-teal-gray text-sm max-w-sm ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 h-12 w-12 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-premium">
                    <item.icon className="h-5 w-5 text-navy" />
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Databricks Style (Large Heading + One Line) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="font-mono text-sm text-orange-red uppercase tracking-widest mb-4 block">{translate('OUR VALUES')}</span>
            <h2 className="text-navy text-[40px] md:text-[56px] font-medium leading-[1.1] mb-6">
              {translate('The Principles That Define Us')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {Object.entries(localizedCoreValues).map(([key, value]) => (
              <div key={key} className="group">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <value.icon className="h-8 w-8 text-orange-red" />
                  </div>
                  <div>
                    <h3 className="text-navy text-2xl md:text-3xl font-medium mb-4 group-hover:text-orange-red transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-teal-gray text-lg leading-relaxed mb-6">
                      {value.description}
                    </p>
                    <ul className="space-y-3 pt-4 border-t border-border">
                      {value.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-navy">
                          <Check className="h-4 w-4 text-orange-red" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Horizontal Bands / Rows */}
      <section id="leadership" className="bg-oat py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-navy text-[40px] md:text-[48px] font-medium mb-6">{translate('Our Leadership')}</h2>
            <p className="text-teal-gray text-lg max-w-2xl mx-auto">
              {translate('Our experienced leadership team brings decades of industry expertise to guide Apex Enterprises toward continued excellence.')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-px">
            {/* Founder - Special Band */}
            <div className="bg-white p-8 md:p-12 lg:p-16 border-l-8 border-orange-red shadow-premium mb-12">
              <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                <div className="w-48 h-48 bg-navy flex items-center justify-center text-white text-5xl font-bold shrink-0">
                  DSN
                </div>
                <div>
                  <h3 className="text-navy text-[32px] font-medium mb-2">{translate('MR. DEVENDER S. NEHRA')}</h3>
                  <p className="text-orange-red font-bold uppercase tracking-[0.2em] text-sm mb-6">{translate('Founder & Managing Director • M.A., LL.B')}</p>
                  <p className="text-teal-gray text-lg leading-relaxed mb-6">
                    {translate('With over 25 years of experience in workforce management and legal advisory, Mr. Nehra transformed Apex from a regional operation to a national leader.')}
                  </p>
                  <div className="flex gap-4">
                    <div className="py-2 px-4 bg-oat text-navy text-xs font-bold uppercase tracking-widest">{translate('Legal Expertise')}</div>
                    <div className="py-2 px-4 bg-oat text-navy text-xs font-bold uppercase tracking-widest">{translate('Strategic Vision')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Team Rows */}
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="bg-white p-8 hover:bg-navy hover:text-white transition-all duration-300 group border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="md:w-1/3">
                  <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                  <p className="text-orange-red text-sm font-bold uppercase tracking-wider group-hover:text-white/80">{leader.role}</p>
                </div>
                <p className="text-teal-gray text-sm md:w-1/2 group-hover:text-white/60">
                  {leader.desc}
                </p>
                <div className="hidden md:block">
                  <ChevronRight size={24} className="text-orange-red group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - High Impact Oat/White cards */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-oat-medium0/10 p-12 lg:p-16 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="h-16 w-16 bg-orange-red flex items-center justify-center mb-8">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-navy text-[36px] font-medium mb-6">{translate('Our Mission')}</h3>
                <p className="text-teal-gray text-lg leading-relaxed">
                  {translate('To transform workforce management across India by providing innovative, compliant, and efficient solutions that enable our clients to focus on their core business.')}
                </p>
              </div>
              <div className="absolute -bottom-12 -right-12 text-navy/[0.03] font-bold text-[100px] md:text-[180px] leading-none select-none group-hover:scale-110 transition-transform pointer-events-none whitespace-nowrap">
                {translate('MISSION')}
              </div>
            </div>

            <div className="bg-navy p-12 lg:p-16 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="h-16 w-16 bg-white flex items-center justify-center mb-8">
                  <Eye className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-white text-[36px] font-medium mb-6">{translate('Our Vision')}</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {translate("To be India's most trusted workforce solutions provider, known for our technological innovation, compliance expertise, and ability to deliver exceptional value.")}
                </p>
              </div>
              <div className="absolute -bottom-12 -right-12 text-white/[0.03] font-bold text-[100px] md:text-[180px] leading-none select-none group-hover:scale-110 transition-transform pointer-events-none whitespace-nowrap">
                {translate('VISION')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto bg-navy p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-white text-[32px] md:text-[56px] font-medium leading-[1.1] mb-8">
                {translate('Ready to transform')} <br />{translate('your workforce?')}
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="bg-orange-red text-white px-8 py-4 font-bold hover:brightness-110 transition-all uppercase tracking-widest text-sm">
                  {translate('Contact Us Today')}
                </a>
                <a href="/services" className="border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-sm">
                  {translate('View Solutions')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
