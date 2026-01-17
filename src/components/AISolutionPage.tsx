'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { aiSolutions, AI_CASE_STUDIES } from '../data/ai-solutions';
import { AI_ICON_MAP } from '../utils/ai-workforce';
import { SEO } from '../utils/seo';

export default function AISolutionPage() {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = aiSolutions.find(s => s.id === solutionId);

  if (!solution) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f7f4]">
        <div className="max-w-md p-6 text-center">
          <h1 className="mb-4 text-3xl font-medium text-[rgb(27,49,57)]">Solution Not Found</h1>
          <p className="mb-8 text-gray-600">This AI solution may have been moved or updated.</p>
          <Link
            href="/ai-workforce-solutions"
            className="inline-flex items-center rounded-full bg-[rgb(255,95,70)] px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const Icon = AI_ICON_MAP[solution.iconName] || CheckCircle2;
  const relatedSolutions = aiSolutions.filter(s => s.id !== solution.id).slice(0, 3);

  return (
    <>
      <SEO
        title={solution.seo.title}
        description={solution.seo.description}
        keywords={solution.seo.keywords.join(', ')}
      />

      <div className="bg-white font-sans">
        {/* Hero */}
        <section className="relative bg-[#f9f7f4] pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <Link
              href="/ai-workforce-solutions"
              className="inline-flex items-center text-sm font-semibold text-[rgb(255,95,70)] mb-8 hover:opacity-80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              AI Solutions
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block rounded-full bg-[rgb(255,95,70)]/10 px-4 py-1 text-sm font-semibold text-[rgb(255,95,70)]">
                  {solution.subtitle}
                </span>
                <h1 className="text-[48px] font-medium leading-[1.1] tracking-tight text-[rgb(27,49,57)] md:text-[56px]">
                  {solution.title}
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-[rgb(27,49,57)]/70 max-w-xl">
                  {solution.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[rgb(255,95,70)] px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-gray-200 bg-white py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              {solution.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-bold text-[rgb(255,95,70)]">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-medium text-[rgb(27,49,57)] mb-12">Key Benefits</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {solution.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 bg-white">
                  <CheckCircle2 className="h-6 w-6 text-[rgb(255,95,70)] flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-[rgb(27,49,57)]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        {solution.details?.howItWorks && (
          <section className="bg-[#f9f7f4] py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-4xl font-medium text-[rgb(27,49,57)] mb-12">How It Works</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {solution.details.howItWorks.map((step, idx) => (
                  <div key={idx} className="rounded-xl bg-white p-8 border border-gray-100">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(27,49,57)] text-white font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-[rgb(27,49,57)]">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Studies */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-medium text-[rgb(27,49,57)] mb-12">Customer Results</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {AI_CASE_STUDIES.slice(0, 2).map((study, idx) => (
                <div key={idx} className="rounded-xl border border-gray-200 bg-white p-8">
                  <span className="inline-block rounded-full bg-[rgb(255,95,70)]/10 px-3 py-1 text-xs font-semibold text-[rgb(255,95,70)] mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-[rgb(27,49,57)] mb-2">{study.company}</h3>
                  <p className="text-gray-600 mb-6">{study.challenge}</p>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Results</p>
                    <ul className="space-y-2">
                      {study.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start text-sm text-[rgb(27,49,57)]">
                          <CheckCircle2 className="mr-2 h-4 w-4 flex-shrink-0 text-[rgb(255,95,70)]" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="bg-[#f9f7f4] py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-[rgb(27,49,57)] mb-12">Related Solutions</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedSolutions.map((rel) => {
                const RelIcon = AI_ICON_MAP[rel.iconName] || CheckCircle2;
                return (
                  <Link
                    key={rel.id}
                    href={`/ai-workforce-solutions/${rel.id}`}
                    className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[rgb(255,95,70)] hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(27,49,57)] text-white">
                      <RelIcon size={20} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-[rgb(27,49,57)] group-hover:text-[rgb(255,95,70)]">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{rel.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[rgb(27,49,57)] py-20">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              Ready to deploy {solution.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              Connect with our team to discuss your specific requirements.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[rgb(255,95,70)] px-10 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
