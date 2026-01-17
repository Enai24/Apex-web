"use client";

import React, { useState, useEffect } from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle, Gavel, Users, ChevronRight, Scale } from 'lucide-react';

const sections = [
  { id: "acceptance", name: "1. Acceptance of Terms", icon: CheckCircle },
  { id: "services", name: "2. Description of Services", icon: FileText },
  { id: "eligibility", name: "3. Eligibility", icon: Users },
  { id: "user-conduct", name: "4. User Conduct", icon: Shield },
  { id: "intellectual-property", name: "5. Intellectual Property", icon: Scale },
  { id: "payment-terms", name: "6. Payment & Billing", icon: FileText },
  { id: "limitations", name: "7. Disclaimers", icon: AlertTriangle },
  { id: "indemnification", name: "8. Indemnification", icon: Shield },
  { id: "termination", name: "9. Termination", icon: AlertTriangle },
  { id: "governing-law", name: "10. Governing Law", icon: Gavel },
  { id: "contact", name: "12. Contact Information", icon: FileText },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 pb-24 font-sans selection:bg-[#EE3D2C]/10 selection:text-[#EE3D2C]">
      <title>Terms of Service | Apex Enterprises</title>

      {/* Header Area */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-[#EE3D2C] pl-6 py-2">
          <div>
            <div className="text-[12px] font-bold text-[#EE3D2C] uppercase tracking-[0.2em] mb-2 font-mono">Service Agreement</div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1B292E] tracking-tight">
              Terms of Service
            </h1>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[12px] text-[#1B292E]/60 font-mono uppercase tracking-wider">Version 2.1</span>
            <span className="text-[12px] text-[#1B292E]/60 font-mono uppercase tracking-wider">Last Modified: July 1, 2024</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-[300px_1fr] gap-16">

        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-1">
            <div className="text-[11px] font-extrabold text-[#1B292E]/40 uppercase tracking-[0.15em] mb-4 pl-4">Terms Index</div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center gap-3 px-4 py-3 text-[14px] font-bold transition-all duration-200 border-l-2 ${activeSection === section.id
                  ? "text-[#EE3D2C] border-[#EE3D2C] bg-white shadow-sm"
                  : "text-[#1B292E]/60 border-transparent hover:text-[#1B292E] hover:border-[#1B292E]/20"
                  }`}
              >
                <section.icon className={`h-4 w-4 ${activeSection === section.id ? "text-[#EE3D2C]" : "opacity-40"}`} />
                {section.name}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="bg-white border border-[#E5E1DA] p-8 md:p-16 lg:p-20 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <div className="prose prose-slate max-w-none prose-headings:text-[#1B292E] prose-headings:tracking-tight prose-headings:font-black prose-p:text-[#1B292E]/80 prose-p:leading-relaxed prose-li:text-[#1B292E]/80 prose-strong:text-[#1B292E] prose-strong:font-bold prose-a:text-[#EE3D2C] prose-a:no-underline hover:prose-a:underline">

            <section id="acceptance" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">01.</span> Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                These Terms of Service ("<strong>Terms</strong>", "<strong>Agreement</strong>") constitute a legally binding agreement between
                Apex Enterprises ("<strong>Apex</strong>", "<strong>Company</strong>", "<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>"),
                a company incorporated under the laws of India with registered office at 11 Shankar Chowk Road, Dundahera, Gurgaon 122016, Haryana, India,
                and you ("<strong>you</strong>", "<strong>your</strong>", "<strong>User</strong>", or "<strong>Client</strong>") concerning your use of
                our website at <a href="https://apexenterprises.net">apexenterprises.net</a> ("<strong>Website</strong>") and any related services.
              </p>
              <p>
                By accessing, browsing, or using our Website or Services in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms and our
                <a href="/privacy-policy"> Privacy Policy</a>.
              </p>

              <div className="bg-[#1B292E] text-white p-8 my-10 border-l-8 border-[#EE3D2C]">
                <h4 className="text-[#EE3D2C] font-black uppercase tracking-widest text-sm mb-4">Legal Notice</h4>
                <p className="text-white/80 text-sm mb-0 leading-relaxed italic">
                  These Terms contain important provisions including limitations of liability, disclaimers of warranties, and an agreement to arbitrate disputes.
                  Please read them carefully before using our services.
                </p>
              </div>
            </section>

            <section id="services" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">02.</span> Description of Services
              </h2>
              <p>Apex is a leading workforce solutions provider offering comprehensive human resource services across India. Our Services include:</p>
              <div className="grid md:grid-cols-2 gap-8 my-8 font-bold">
                <div className="bg-[#F9F7F4] border border-[#E5E1DA] p-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-widest text-[#EE3D2C] mb-4">Core Staffing</div>
                  {[
                    "Permanent placements", "Executive search", "Bulk hiring", "HR consulting"
                  ].map(item => (
                    <div key={item} className="flex justify-between items-center text-sm border-b border-[#1B292E]/5 pb-2 last:border-0">
                      <span>{item}</span>
                      <ChevronRight className="h-3 w-3 text-[#EE3D2C]" />
                    </div>
                  ))}
                </div>
                <div className="bg-[#1B292E] text-white border border-[#1B292E] p-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-widest text-[#EE3D2C] mb-4">HR Technology</div>
                  {[
                    "Payroll processing", "Compliance services", "Background checks", "Onboarding"
                  ].map(item => (
                    <div key={item} className="flex justify-between items-center text-sm border-b border-white/10 pb-2 last:border-0">
                      <span>{item}</span>
                      <ChevronRight className="h-3 w-3 text-[#EE3D2C]" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="eligibility" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">03.</span> Eligibility and Registration
              </h2>
              <p>To use our Services, you must meet the following criteria:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Must be 18+ years old", "Full legal capacity", "Proper corporate authorization", "Compliance with Indian laws"
                ].map((item) => (
                  <div key={item} className="bg-white p-4 font-bold text-[#1B292E] flex items-center gap-3 border-2 border-[#F9F7F4]">
                    <div className="w-1.5 h-1.5 bg-[#EE3D2C]"></div>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="user-conduct" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">04.</span> User Conduct
              </h2>
              <div className="bg-red-50/30 border border-red-100 p-8 my-8">
                <p className="text-[#1B292E] font-bold mb-6">You specifically agree NOT to engage in:</p>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 list-none p-0">
                  <div className="text-sm">
                    <strong className="block text-[#EE3D2C] uppercase tracking-tighter mb-2">Security</strong>
                    <ul className="list-none p-0 space-y-2 opacity-80">
                      <li>• Attempting unauthorized access</li>
                      <li>• Distributing malicious code</li>
                      <li>• Reverse engineering software</li>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <strong className="block text-[#EE3D2C] uppercase tracking-tighter mb-2">Conduct</strong>
                    <ul className="list-none p-0 space-y-2 opacity-80">
                      <li>• Impersonating Apex personnel</li>
                      <li>• Discriminatory behavior</li>
                      <li>• Violating labor regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="intellectual-property" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">05.</span> Intellectual Property Rights
              </h2>
              <p>
                The Website, Services, and all related content are owned by Apex and protected by international copyright/trademark laws.
              </p>
              <div className="bg-[#1B292E]/5 p-8 border-l-4 border-[#1B292E] mt-8">
                <p className="font-bold mb-4 italic">Protected Assets include:</p>
                <div className="flex flex-wrap gap-2">
                  {["Proprietary Algorithms", "UI/UX Design", "Trademarked Logos", "Methodologies", "Databases"].map(tag => (
                    <span key={tag} className="text-[10px] bg-white border border-[#E5E1DA] px-3 py-1 font-mono uppercase font-black text-[#1B292E]/40 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="limitations" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">07.</span> Disclaimers and Limitations
              </h2>
              <div className="bg-[#1B292E] text-white p-10 font-bold uppercase tracking-tight text-lg leading-snug">
                <span className="text-[#EE3D2C] block mb-4 text-xs font-black tracking-[3px]">Warranty Disclaimer</span>
                APEX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE SERVICES ARE PROVIDED "AS IS".
              </div>
              <p className="mt-8 opacity-70">
                To the fullest extent permitted by law, Apex's total liability shall not exceed the amount paid by you in the preceding 12 months.
              </p>
            </section>

            <section id="governing-law" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">10.</span> Governing Law
              </h2>
              <div className="p-8 border-2 border-[#F9F7F4] flex flex-col md:flex-row gap-8 items-center bg-[#F9F7F4]/50">
                <Gavel className="h-16 w-16 text-[#1B292E] opacity-20 hidden md:block" />
                <div>
                  <p className="font-black text-[#1B292E] text-xl mb-4 underline decoration-[#EE3D2C] decoration-4 underline-offset-8">Haryana Jurisdiction</p>
                  <p className="text-sm opacity-70 mb-0">
                    These Terms are governed by Indian law. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in **Gurgaon, Haryana, India**.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-32">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">12.</span> Contact Information
              </h2>
              <div className="bg-[#1B292E] p-8 md:p-12 text-white">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-black text-xl mb-6 text-[#EE3D2C]">Legal Matters</h4>
                    <div className="space-y-2 text-sm">
                      <p className="font-bold">mail@apexenterprises.net</p>
                      <p className="opacity-60">Response Time: Within 5 business days</p>
                      <p>+91 124 4040 281</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-6 text-[#EE3D2C]">Office Address</h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Apex Enterprises<br />
                      11 Shankar Chowk Road, Dundahera<br />
                      Gurgaon 122016, Haryana, India
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}