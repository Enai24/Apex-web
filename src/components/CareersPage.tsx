'use client';

import React from 'react';
import {
  MapPin, Briefcase, Clock, ArrowRight, CheckCircle2,
  DollarSign, Users, Building, BookOpen, Award,
  Star, ChevronRight, Mail, Phone, Shield,
  TrendingUp, RefreshCw, Zap, Heart, Lightbulb,
  GraduationCap, Target
} from 'lucide-react';
import { SEO, generateFAQSchema } from '../utils/seo';
import Link from 'next/link';

// Define types for jobs and departments
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  isNew: boolean;
  isFeatured: boolean;
}

interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

// Sample job data (preserved from original)
const jobListings: Job[] = [
  {
    id: 1,
    title: 'AI Machine Learning Engineer',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2024-08-15',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'HR Compliance Specialist',
    department: 'Human Resources',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '2-4 years',
    postedDate: '2024-08-10',
    isNew: true,
    isFeatured: false,
  },
  {
    id: 3,
    title: 'Senior Payroll Manager',
    department: 'Finance',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '5-8 years',
    postedDate: '2024-08-05',
    isNew: false,
    isFeatured: true,
  }
];

// Department data
const departments: Department[] = [
  {
    id: 'technology',
    name: 'Technology',
    icon: Lightbulb,
    description: 'Building AI-powered solutions that transform workforce management across India.'
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: Target,
    description: 'Managing staffing operations across all 28 Indian states with precision and compliance.'
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    icon: Users,
    description: 'Nurturing talent and creating an inclusive work environment for professionals across India.'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: DollarSign,
    description: 'Ensuring financial compliance and managing payroll services with accuracy and integrity.'
  }
];

// Values and culture
const companyValues = [
  {
    title: 'Innovation',
    icon: Zap,
    description: 'We leverage cutting-edge AI technology to revolutionize workforce management in India.'
  },
  {
    title: 'Integrity',
    icon: Shield,
    description: 'We uphold the highest ethical standards in all our business operations and client relationships.'
  },
  {
    title: 'Excellence',
    icon: Award,
    description: 'We strive for excellence in every aspect of our service delivery and client satisfaction.'
  },
  {
    title: 'Diversity',
    icon: Heart,
    description: 'We celebrate diversity and create an inclusive environment reflecting India\'s rich cultural tapestry.'
  }
];

// Employee benefits
const employeeBenefits = [
  {
    title: 'Competitive Rewards',
    description: 'Market-leading salary packages with performance bonuses and equity options.'
  },
  {
    title: 'Holistic Wellness',
    description: 'Comprehensive medical insurance and mental health support for you and your family.'
  },
  {
    title: 'Continuous Growth',
    description: 'Dedicated L&D budgets, certification support, and global mentorship programs.'
  },
  {
    title: 'Work Flexibility',
    description: 'Hybrid and remote work arrangements to help you maintain a healthy work-life balance.'
  }
];

// FAQ data
const careersFAQs = [
  {
    question: "What is the hiring process at Apex Enterprises?",
    answer: "Our hiring process typically includes an initial application review, a preliminary phone screening, technical/functional assessments where applicable, and interviews with the hiring team. The entire process usually takes 2-3 weeks."
  },
  {
    question: "What career growth opportunities are available?",
    answer: "We provide multiple growth paths including vertical advancement, cross-functional experiences, and specialization tracks supported by our L&D programs."
  }
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SEO
        title="Careers at Apex Enterprises | AI Workforce Solutions"
        description="Join India's leading AI-powered workforce solutions provider. Explore exciting career opportunities across technology, operations, HR, and more."
        keywords="careers, jobs in India, AI workforce, staffing careers, tech jobs"
        canonical="/careers"
        schema={generateFAQSchema(careersFAQs)}
      />

      {/* Hero Section */}
      <section className="relative bg-navy py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-oat-medium0 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-red opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
              JOIN THE FUTURE
            </span>
            <h1 className="text-white text-[44px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-[-0.03em] mb-8">
              Innovate at the intersection of AI and Human Capital
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Join a team of visionaries redefining workforce management for
              the world's most innovative organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#teams" className="bg-orange-red text-white px-8 py-4 font-semibold hover:opacity-90 transition-all">
                Explore Teams
              </a>
              <a href="#email-cv" className="border border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all">
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-oat py-16 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Team Members' },
              { metric: '28', label: 'States Covered' },
              { metric: '15+', label: 'Years Experience' },
              { metric: '98%', label: 'Offer Acceptance' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <p className="text-navy text-4xl font-bold mb-2 group-hover:text-orange-red transition-colors">{stat.metric}</p>
                <p className="text-teal-gray text-[12px] uppercase tracking-[0.2em] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="font-mono text-sm text-orange-red uppercase tracking-widest mb-4 block">WHY JOIN APEX</span>
            <h2 className="text-navy text-[40px] md:text-[56px] font-medium leading-[1.1] mb-6">
              A mission that matters. <br />A team that inspires.
            </h2>
            <p className="text-teal-gray text-lg">
              We're building the infrastructure that powers India's labor economy.
              Our work affects millions of lives every day, and we do it with
              unwavering integrity and relentless innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, idx) => (
              <div key={idx} className="p-8 border border-border bg-oat/20 hover:bg-white hover:shadow-premium transition-all group">
                <div className="h-12 w-12 rounded-lg bg-navy flex items-center justify-center mb-6 group-hover:bg-orange-red transition-colors">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-navy text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-teal-gray text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-navy overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="font-mono text-sm text-orange-red uppercase tracking-widest mb-4 block">BENEFITS</span>
              <h2 className="text-white text-[40px] md:text-[56px] font-medium leading-[1.1] mb-8">
                Designed for your <br />full life.
              </h2>
              <p className="text-white/60 text-lg mb-10">
                We provide the tools and support you need to do your best work,
                along with the flexibility to ensure you're taking care of what
                matters most outside of work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {employeeBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-orange-red shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">{benefit.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-oat-medium0/10 rounded-full absolute -top-10 -right-10 blur-3xl" />
              <div className="relative bg-white/5 border border-white/10 p-1 lg:p-2">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Academy */}
      <section className="py-24 bg-oat">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-white shadow-premium p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/5">
              <div className="h-20 w-20 rounded-2xl bg-orange-red/10 flex items-center justify-center mb-8">
                <GraduationCap className="h-10 w-10 text-orange-red" />
              </div>
              <h3 className="text-navy text-[32px] font-medium mb-6">Apex Academy</h3>
              <p className="text-teal-gray text-lg mb-8">
                Accelerate your career with our dedicated learning ecosystem.
                From AI certifications to leadership training, we invest in
                the skills that will define the future of work.
              </p>
              <ul className="space-y-4 mb-10">
                {['$2,000+ Annual L&D Budget', 'Weekly Innovation Lab sessions', '1-on-1 Mentorship from industry icons'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-orange-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navy p-8 text-white relative h-64 flex flex-col justify-end group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-16 w-16" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Technical Track</h4>
                <p className="text-white/60 text-sm">Grow from Associate to Principal Architect in our specialized AI pathways.</p>
              </div>
              <div className="bg-orange-red p-8 text-white relative h-64 flex flex-col justify-end group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                  <MapPin className="h-16 w-16" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Management Track</h4>
                <p className="text-white/60 text-sm">Lead regional operations or strategic business units across India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-navy text-[40px] md:text-[56px] font-medium mb-6">Find your team</h2>
            <p className="text-teal-gray text-lg max-w-2xl mx-auto">
              Our culture of autonomy and ownership means you'll have
              the freedom to make a significant impact from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-oat/20 border border-border p-8 hover:bg-white hover:shadow-premium transition-all flex flex-col group h-full"
              >
                <div className="h-12 w-12 rounded bg-navy flex items-center justify-center mb-6 group-hover:bg-orange-red transition-colors">
                  <dept.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-navy text-xl font-bold mb-4">{dept.name}</h3>
                <p className="text-teal-gray text-sm mb-6 flex-grow">{dept.description}</p>
                <Link
                  href="#email-cv"
                  className="flex items-center text-navy font-bold text-[13px] uppercase tracking-wider group/link"
                >
                  Join this team
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="email-cv" className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-red/5 -skew-y-6 translate-y-24" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto bg-white p-8 lg:p-20 shadow-2xl relative">
            <div className="absolute top-0 right-0 h-40 w-40 bg-orange-red/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-mono text-sm text-orange-red font-bold uppercase tracking-widest mb-4 block">READY TO START?</span>
                <h2 className="text-navy text-[40px] font-medium leading-[1.1] mb-6">
                  Doesn't see the <br />perfect role?
                </h2>
                <p className="text-teal-gray text-lg mb-10">
                  Great talent is always welcome. Send us your CV and tell us
                  how you can help us redefine workforce management in India.
                </p>

                <div className="space-y-4">
                  <div className="bg-oat p-4 flex items-center gap-4">
                    <Mail className="text-orange-red" />
                    <div>
                      <p className="text-teal-gray text-[10px] font-mono uppercase font-bold">Email Us At</p>
                      <p className="text-navy font-bold">mail@apexenterprises.net</p>
                    </div>
                  </div>
                  <div className="bg-oat p-4 flex items-center gap-4">
                    <Phone className="text-orange-red" />
                    <div>
                      <p className="text-teal-gray text-[10px] font-mono uppercase font-bold">Call Talent Acquisition</p>
                      <p className="text-navy font-bold">+91 124 2340139</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-10 text-white">
                <h3 className="text-xl font-bold mb-6">Submission Checklist</h3>
                <ul className="space-y-6">
                  {[
                    'Updated CV / Portfolio Link',
                    'Cover Letter explaining your interest',
                    'Current CTC and Notice Period',
                    'Preferred job location(s)'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="h-6 w-6 rounded-full border border-orange-red flex items-center justify-center text-[10px] font-bold text-orange-red">
                        {i + 1}
                      </div>
                      <span className="text-sm text-white/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:mail@apexenterprises.net"
                  className="mt-12 block w-full bg-orange-red text-white py-4 text-center font-bold hover:brightness-110 transition-all uppercase tracking-widest"
                >
                  Email Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}