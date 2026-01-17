'use client';

import React from 'react';
import Link from 'next/link';
import {
  Factory, Server, Building2, ShoppingBag, Truck, Heart,
  ArrowRight, Shield, CheckCircle2, ChevronRight, Users,
  Zap, TrendingUp, Globe, Microscope, Activity, ShoppingCart, Search
} from 'lucide-react';
import { industrySolutions } from '../data/industries';
import Image from 'next/image';

const iconMap: Record<string, React.ElementType> = {
  Shield, Zap, Users, TrendingUp, CheckCircle2, Factory, Server,
  Building2, ShoppingBag, Truck, Heart, Globe, Microscope,
  Activity, ShoppingCart, Search
};

/**
 * Enhanced Industries Landing Component
 * Design: Minimalist, high-authority grid with deep-dive entry points
 */

export default function Industries() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Header / Hero */}
      <section className="bg-oat-medium py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 block">SECTOR EXPERTISE</span>
            <h1 className="text-navy text-[40px] md:text-[64px] font-medium leading-tight mb-6">
              Sector-Specific Workforce<br />Solutions in India
            </h1>
            <p className="text-teal-gray text-lg md:text-xl leading-relaxed">
              India's most trusted recruitment partner for Manufacturing, IT, Healthcare, and BFSI sectors.
              We solve operational complexities with AI-powered talent intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Solution Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industrySolutions.map((industry) => {
              const Icon = iconMap[industry.solutions.items[0].iconName] || Factory;
              return (
                <div key={industry.id} className="flex flex-col md:flex-row gap-8 p-10 bg-oat border border-border group hover:bg-white hover:shadow-premium transition-all duration-500">
                  <div className="md:w-1/3 relative aspect-square overflow-hidden">
                    <Image
                      src={industry.hero.image}
                      alt={`${industry.name} Workforce Solutions India - Apex Enterprises`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-medium text-navy mb-4 group-hover:text-orange-red transition-colors flex items-center justify-between">
                      {industry.name}
                      <ChevronRight size={20} className="text-border group-hover:text-orange-red transition-colors" />
                    </h3>
                    <p className="text-teal-gray text-sm mb-6 leading-relaxed">
                      {industry.hero.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {industry.challenges.items.slice(0, 2).map((c, i) => (
                        <span key={i} className="text-[10px] font-bold text-navy bg-white px-2 py-1 uppercase tracking-widest border border-border">
                          {c.label}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/industries/${industry.id}`}
                      className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-navy border-b-2 border-orange-red pb-1 w-fit hover:text-orange-red transition-colors"
                    >
                      Explore Solution <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="py-20 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Shield className="text-orange-red mb-6" size={40} />
              <h4 className="text-xl font-medium mb-4">100% Compliance Guarantee</h4>
              <p className="text-white/60 text-sm">We take full statutory responsibility, ensuring your business is audit-ready 24/7 across every Indian state.</p>
            </div>
            <div>
              <Users className="text-orange-red mb-6" size={40} />
              <h4 className="text-xl font-medium mb-4">Pan-India Network</h4>
              <p className="text-white/60 text-sm">Access talent across 25+ cities and Tier-2 hubs through our localized recruitment ecosystem.</p>
            </div>
            <div>
              <CheckCircle2 className="text-orange-red mb-6" size={40} />
              <h4 className="text-xl font-medium mb-4">Domain Experts</h4>
              <p className="text-white/60 text-sm">Our teams understand the chemistry of pharma, the cadence of manufacturing, and the code of technology.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}