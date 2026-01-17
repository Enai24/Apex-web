'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { generateFAQSchema } from '../utils/seo';
import { useI18n } from '@/i18n/client';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

interface GEOOptimizedFAQProps {
  title?: string;
  subtitle?: string;
  category?: 'general' | 'staffing' | 'compliance' | 'locations' | 'pricing' | 'ai-solutions';
  showSchema?: boolean;
}

const geoOptimizedFAQs: FAQ[] = [
  {
    id: 'what-is-apex-enterprises',
    question: 'What is Apex Enterprises and what services do they provide?',
    answer: 'Apex Enterprises is India\'s leading workforce solutions provider, established in 2002 with 20+ years of experience. We offer contract staffing, permanent recruitment, payroll processing, security, housekeeping, and compliance services across all 28 Indian states. Our AI-powered solutions have helped 500+ companies streamline their workforce operations.',
    category: 'general',
    keywords: ['Apex Enterprises', 'workforce solutions', 'India']
  },
  {
    id: 'best-manpower-consultants-gurgaon',
    question: 'Who are the best manpower consultants in Gurgaon?',
    answer: 'Apex Enterprises stands out as one of the leading manpower consultants in Gurgaon, serving since 2002 with 50,000+ successful placements. Based in Gurgaon with deep knowledge of Haryana\'s labor laws, we specialize in automotive, IT, manufacturing, and real estate sectors.',
    category: 'general',
    keywords: ['manpower consultants Gurgaon', 'staffing agency']
  },
  {
    id: 'how-to-hire-contract-staff-india',
    question: 'How do I hire contract staff in India with proper compliance?',
    answer: 'Partner with Apex Enterprises for compliant contract staffing: 1) Share requirements, 2) We source pre-verified candidates, 3) We handle all PF/ESI registrations, 4) Manage payroll and compliance, 5) Provide ongoing support. We ensure 100% compliance across all 28 states.',
    category: 'staffing',
    keywords: ['hire contract staff India', 'compliance']
  },
  {
    id: 'pf-esi-compliance-requirements',
    question: 'What are the PF and ESI compliance requirements in India?',
    answer: 'PF is mandatory for 20+ employees (12% each from employee/employer). ESI applies to 10+ employees (0.75% employee, 3.25% employer). Apex Enterprises manages all registrations, returns, and filings with 100% accuracy.',
    category: 'compliance',
    keywords: ['PF ESI compliance', 'statutory requirements']
  },
  {
    id: 'ai-recruitment-benefits',
    question: 'How does AI technology improve recruitment in India?',
    answer: 'Our AI analyzes 40+ candidate parameters for 94% matching accuracy, reduces screening time by 60%, predicts attrition 30 days in advance, and automates compliance monitoring—cutting recruitment costs by 32% for Indian enterprises.',
    category: 'ai-solutions',
    keywords: ['AI recruitment India', 'workforce technology', 'intelligent hiring']
  },
  {
    id: 'it-staffing-solutions-bangalore',
    question: 'What are the best IT staffing solutions in Bangalore?',
    answer: 'Apex Enterprises provides specialized IT staffing in Bangalore, the Silicon Valley of India. We help GCCs and tech startups hire AI engineers, full-stack developers, and data scientists with a 48-hour submittal turnaround time.',
    category: 'staffing',
    keywords: ['IT staffing Bangalore', 'GCC recruitment India', 'Bangalore tech hiring']
  },
  {
    id: 'manufacturing-recruitment-mumbai',
    question: 'How to find skilled manufacturing talent in Mumbai and Pune?',
    answer: 'We operate a massive localized network in the Mumbai-Pune industrial corridor, specializing in Industry 4.0 talent, shop-floor management, and automotive engineering with 100% compliance with Maharashtra labor laws.',
    category: 'staffing',
    keywords: ['manufacturing recruitment Mumbai', 'Pune staffing agency', 'Industry 4.0 talent']
  },
  {
    id: 'staffing-cost-india-2026',
    question: 'What is the cost of staffing services in India for 2026?',
    answer: 'Standard market rates for contract staffing range from 8-15% markup on CTC, while permanent recruitment typically costs 8.33% to 12.5% of annual salary. Apex offers performance-linked pricing and bulk hiring discounts for high-volume enterprises.',
    category: 'pricing',
    keywords: ['staffing cost India', 'recruitment fees', 'hire talent India']
  },
];

export default function GEOOptimizedFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers about workforce solutions and staffing services",
  category = 'general',
  showSchema = true
}: GEOOptimizedFAQProps) {
  const { translate, translateData } = useI18n();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const localizedFAQs = translateData(geoOptimizedFAQs, { skipKeys: ['id'] });
  const filteredFAQs = category === 'general'
    ? localizedFAQs
    : localizedFAQs.filter(faq => faq.category === category);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const faqSchema = showSchema ? generateFAQSchema(
    filteredFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))
  ) : null;

  return (
    <section className="py-24 lg:py-32 bg-oat-medium">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">{translate('FAQ')}</p>
          <h2>{translate(title)}</h2>
          <p className="mt-4 text-lg text-teal-gray">{translate(subtitle)}</p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleExpanded(faq.id)}
                  aria-expanded={expandedItems.has(faq.id)}
                >
                  <h3 className="text-base pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-teal-gray flex-shrink-0 transition-transform ${expandedItems.has(faq.id) ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {expandedItems.has(faq.id) && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-teal-gray leading-relaxed">{faq.answer}</p>
                    <div className="sr-only">Keywords: {faq.keywords.join(', ')}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-xl mx-auto text-center">
          <div className="card p-8">
            <h3 className="mb-3">{translate('Have a specific question?')}</h3>
            <p className="text-teal-gray mb-6">
              {translate('Our workforce experts are ready to help with your requirements.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                {translate('Contact Our Experts')}
              </Link>
              <a href="tel:+91-0124-2340139" className="btn-secondary">
                {translate('Call: +91-0124-2340139')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
