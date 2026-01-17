'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import {
  Users, FileCheck, Shield, BarChart2, Briefcase,
  Globe2, ArrowRight, CheckCircle
} from 'lucide-react';
import { useI18n } from '@/i18n/client';

/**
 * Databricks-Style Services Component
 * Design: Clean oat background, navy text, orange-red accent
 */

export default function Services() {
  const { t, translate } = useI18n();
  const services = useMemo(() => ([
    {
      id: 1,
      name: t('services.contractStaffing.name'),
      href: "/services/contract-staffing",
      description: t('services.contractStaffing.description'),
      features: [
        t('services.contractStaffing.features.0'),
        t('services.contractStaffing.features.1'),
        t('services.contractStaffing.features.2'),
      ],
      stat: { value: "280K+", label: translate('Associates deployed') },
      icon: Users,
    },
    {
      id: 2,
      name: t('services.payrollCompliance.name'),
      href: "/services/payroll-compliance",
      description: t('services.payrollCompliance.description'),
      features: [
        t('services.payrollCompliance.features.0'),
        t('services.payrollCompliance.features.1'),
        t('services.payrollCompliance.features.2'),
      ],
      stat: { value: "₹850Cr+", label: translate('Monthly processing') },
      icon: FileCheck,
    },
    {
      id: 3,
      name: t('services.industrialHousekeeping.name'),
      href: "/services/industrial-housekeeping",
      description: t('services.industrialHousekeeping.description'),
      features: [
        t('services.industrialHousekeeping.features.0'),
        t('services.industrialHousekeeping.features.1'),
        t('services.industrialHousekeeping.features.2'),
      ],
      stat: { value: "25M+ Sqft", label: translate('Managed monthly') },
      icon: Shield,
    },
    {
      id: 4,
      name: t('services.labourLawAdvisory.name'),
      href: "/services/labour-law-advisory",
      description: t('services.labourLawAdvisory.description'),
      features: [
        t('services.labourLawAdvisory.features.0'),
        t('services.labourLawAdvisory.features.1'),
        t('services.labourLawAdvisory.features.2'),
      ],
      stat: { value: "100%", label: translate('Audit-ready rate') },
      icon: BarChart2,
    },
    {
      id: 5,
      name: t('services.specialisedHiring.name'),
      href: "/services/specialised-hiring",
      description: t('services.specialisedHiring.description'),
      features: [
        t('services.specialisedHiring.features.0'),
        t('services.specialisedHiring.features.1'),
        t('services.specialisedHiring.features.2'),
      ],
      stat: { value: "8K+", label: translate('Specialists placed') },
      icon: Briefcase,
    },
    {
      id: 6,
      name: t('services.gccSetup.name'),
      href: "/services/specialised-hiring", // Point to specialised hiring or common setup page
      description: t('services.gccSetup.description'),
      features: [
        t('services.gccSetup.features.0'),
        t('services.gccSetup.features.1'),
        t('services.gccSetup.features.2'),
      ],
      stat: { value: "150+", label: translate('GCCs empowered') },
      icon: Globe2,
    },
  ]), [t, translate]);

  return (
    <section className="py-16 lg:py-32 bg-oat-medium">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="eyebrow mb-4">{t('services.title')}</p>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl">{t('services.heading')}</h2>
          <p className="mt-4 text-base sm:text-lg text-teal-gray">
            {t('services.description')}
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
                  {t('common.learnMore')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-primary">
            {t('services.cta')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
