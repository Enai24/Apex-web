'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Services from './Services';
import Industries from './Industries';
import GEOOptimizedFAQ from './GEOOptimizedFAQ';
import PlatformIntro from './home/PlatformIntro';
import UseCasesTabs from './home/UseCasesTabs';
import SpotlightResources from './home/SpotlightResources';
import ResourcesHelp from './home/ResourcesHelp';
import LogoTicker from './home/LogoTicker';
import CustomerStories from './CustomerStories';
import { useI18n } from '@/i18n/client';

/**
 * Databricks-Style Homepage (Optimized for Impact)
 * Sequence: Hero -> LogoTicker -> PlatformIntro -> UseCasesTabs -> CustomerStories -> ResourcesHelp -> SpotlightResources -> FinalCTA
 */

export default function Homepage() {
    const { t, translate } = useI18n();

    const stats = [
        { label: t('stats.placementsLabel'), value: t('stats.placements') },
        { label: t('stats.clientsLabel'), value: t('stats.clients') },
        { label: t('stats.yearsLabel'), value: t('stats.years') },
        { label: t('stats.statesLabel'), value: t('stats.states') },
    ];

    return (
        <main className="bg-background">
            {/* 1. Hero Section */}
            <section className="relative py-24 lg:py-32 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Eyebrow */}
                        <p className="eyebrow mb-6">
                            {t('common.trustedBy')}
                        </p>

                        {/* Main Heading (SEO Optimized H1) */}
                        <h1 className="mb-6 text-navy text-5xl lg:text-6xl">
                            {t('hero.heading')}
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-teal-gray max-w-2xl mx-auto mb-10">
                            {t('hero.subheading')}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                {t('cta.getFreeConsultation')}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                {t('hero.cta2')}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl lg:text-5xl font-medium text-navy">{stat.value}</p>
                                <p className="mt-2 text-sm text-teal-gray uppercase tracking-wider font-mono">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Logo Ticker */}
            <LogoTicker />

            {/* 3. Platform Intro */}
            <PlatformIntro />

            {/* 4. Use Cases Tabs */}
            <UseCasesTabs />

            {/* 5. Customer Stories */}
            <CustomerStories />

            {/* 6. Resources Help */}
            <ResourcesHelp />

            {/* 7. Spotlight Resources */}
            <SpotlightResources />

            {/* 8. Impactful Apex Info (Services & Industries) */}
            <Services />
            <Industries />

            {/* 9. FAQ Section */}
            <GEOOptimizedFAQ
                title={translate('Frequently Asked Questions')}
                subtitle={translate('Everything you need to know about our workforce solutions')}
                category="general"
            />
        </main>
    );
}
