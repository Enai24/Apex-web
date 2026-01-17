'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users, FileCheck, Shield, BarChart2, Briefcase,
  Globe2, ArrowRight, CheckCircle
} from 'lucide-react';

/**
 * Databricks-Style Services Component
 * Design: Clean oat background, navy text, orange-red accent
 */

const services = [
  {
    id: 1,
    name: "Contract Staffing",
    href: "/services/contract-staffing",
    description: "AI-powered contract staffing solutions across all 28 states with 100% PF, ESI, and labor law compliance.",
    features: [
      "AI-driven candidate matching",
      "Real-time associate management",
      "Statutory compliance guarantee"
    ],
    stat: { value: "280K+", label: "Associates deployed" },
    icon: Users,
  },
  {
    id: 2,
    name: "Payroll & Compliance",
    href: "/services/payroll-compliance",
    description: "End-to-end payroll processing with statutory compliance for businesses of all sizes.",
    features: [
      "Multi-state processing",
      "Automated PF/ESI",
      "Zero-error filing"
    ],
    stat: { value: "₹850Cr+", label: "Monthly processing" },
    icon: FileCheck,
  },
  {
    id: 3,
    name: "Industrial Housekeeping",
    href: "/services/industrial-housekeeping",
    description: "Specialized facility management and housekeeping for manufacturing and plant operations.",
    features: [
      "Hazardous zone expert",
      "EHS-compliant protocols",
      "Real-time safety audits"
    ],
    stat: { value: "25M+ Sqft", label: "Managed monthly" },
    icon: Shield,
  },
  {
    id: 4,
    name: "Labour Law Advisory",
    href: "/services/labour-law-advisory",
    description: "Expert advisory on Indian labor laws, CLRA management, and statutory audit readiness.",
    features: [
      "Auditor-grade reporting",
      "Litigation support",
      "Statutory inteligencia"
    ],
    stat: { value: "100%", label: "Audit-ready rate" },
    icon: BarChart2,
  },
  {
    id: 5,
    name: "Specialised Hiring",
    href: "/services/specialised-hiring",
    description: "Precision recruitment for niche technical roles in IT, Pharma, and BFSI sectors.",
    features: [
      "AI skill mapping",
      "Global GCC expertise",
      "90-day replacement"
    ],
    stat: { value: "8K+", label: "Speciailists placed" },
    icon: Briefcase,
  },
  {
    id: 6,
    name: "GCC Setup & Staffing",
    href: "/services/specialised-hiring", // Point to specialised hiring or common setup page
    description: "Strategic talent acquisition for Global Capability Centers (GCCs) in Bangalore, Hyderabad, and Pune.",
    features: [
      "Niche tech hiring",
      "Operational excellence",
      "Scalable infrastructure"
    ],
    stat: { value: "150+", label: "GCCs empowered" },
    icon: Globe2,
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-oat-medium">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">Our Service Suite</p>
          <h2 className="text-navy text-4xl lg:text-5xl">AI-Driven Workforce Solutions & Managed Services</h2>
          <p className="mt-4 text-lg text-teal-gray">
            End-to-end workforce intelligence and staffing excellence across 28 Indian states.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card p-8 hover:shadow-card transition-shadow"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-sm bg-muted flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-orange-red" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold">{service.name}</h3>
              <p className="text-sm text-teal-gray leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-teal-gray">
                    <CheckCircle className="h-4 w-4 text-orange-red flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Stat */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-navy">{service.stat.value}</p>
                  <p className="text-xs text-teal-gray">{service.stat.label}</p>
                </div>
                <Link
                  href={service.href}
                  className="text-sm font-bold text-orange-red hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-primary">
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}