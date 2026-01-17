"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, FileText, Users, Globe, ChevronRight, Clock } from 'lucide-react';

const sections = [
  { id: "introduction", name: "1. Introduction", icon: FileText },
  { id: "scope", name: "2. Scope and Application", icon: Shield },
  { id: "information-collection", name: "3. Information We Collect", icon: Eye },
  { id: "data-usage", name: "4. How We Use Data", icon: Users },
  { id: "data-sharing", name: "5. Information Sharing", icon: Globe },
  { id: "international-transfers", name: "6. International Transfers", icon: Globe },
  { id: "data-retention", name: "7. Data Retention", icon: Clock },
  { id: "security", name: "8. Data Security", icon: Lock },
  { id: "your-rights", name: "9. Your Privacy Rights", icon: Shield },
  { id: "cookies", name: "10. Cookies", icon: Globe },
  { id: "contact", name: "14. Contact Information", icon: FileText },
];

export default function PrivacyPolicy() {
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
      <title>Privacy Policy | Apex Enterprises</title>

      {/* Header Area */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-[#EE3D2C] pl-6 py-2">
          <div>
            <div className="text-[12px] font-bold text-[#EE3D2C] uppercase tracking-[0.2em] mb-2 font-mono">Legal Document</div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1B292E] tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[12px] text-[#1B292E]/60 font-mono uppercase tracking-wider">Version 2.1</span>
            <span className="text-[12px] text-[#1B292E]/60 font-mono uppercase tracking-wider">Effective: July 1, 2024</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-[300px_1fr] gap-16">

        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-1">
            <div className="text-[11px] font-extrabold text-[#1B292E]/40 uppercase tracking-[0.15em] mb-4 pl-4">Contents</div>
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

            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">01.</span> Introduction
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Apex Enterprises ("<strong>Apex</strong>", "<strong>Company</strong>", "<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") is
                committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                personal information when you visit our website <a href="https://apexenterprises.net">apexenterprises.net</a>, use our services,
                or interact with us in the course of providing workforce solutions, staffing services, HR technology, payroll management,
                compliance services, and related offerings across India.
              </p>
              <p>
                This Policy has been drafted in accordance with the <em>Information Technology Act, 2000</em> and the
                <em> Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</em>
                ("<strong>SPDI Rules</strong>"), the <em>Companies Act, 2013</em>, applicable labor laws, and incorporates international
                best practices including principles from the EU General Data Protection Regulation (GDPR) where relevant to our operations.
              </p>

              <div className="bg-[#1B292E] text-white p-8 my-10 border-l-8 border-[#EE3D2C]">
                <h4 className="text-[#EE3D2C] font-black uppercase tracking-widest text-sm mb-4">Important Notice</h4>
                <p className="text-white/80 text-sm mb-0 leading-relaxed">
                  By using our services, visiting our website, or providing your personal information to us, you acknowledge that you have read,
                  understood, and agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
                </p>
              </div>
            </section>

            <section id="scope" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">02.</span> Scope and Application
              </h2>
              <p>This Privacy Policy applies to all individuals whose personal data is processed in connection with our business operations, including:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Website Visitors", "Job Candidates", "Employees & Contractors",
                  "Client Personnel", "Vendors & Suppliers", "Other Stakeholders"
                ].map((item) => (
                  <div key={item} className="bg-[#F9F7F4] p-4 font-bold text-[#1B292E] flex items-center gap-3 border border-[#E5E1DA]">
                    <ChevronRight className="h-4 w-4 text-[#EE3D2C]" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="information-collection" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">03.</span> Information We Collect
              </h2>

              <h3 className="text-xl font-bold mt-10 mb-6">3.1 Personal Information You Provide</h3>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-[#F9F7F4] border border-[#E5E1DA] p-6">
                  <h4 className="font-extrabold text-[#1B292E] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#EE3D2C]"></span> Identity & Contact
                  </h4>
                  <ul className="space-y-2 list-none p-0 text-sm">
                    <li>• Full name, date of birth, gender</li>
                    <li>• Photograph and digital signature</li>
                    <li>• Government IDs (PAN, Aadhaar)</li>
                    <li>• Contact details (address, email)</li>
                  </ul>
                </div>
                <div className="bg-[#F9F7F4] border border-[#E5E1DA] p-6">
                  <h4 className="font-extrabold text-[#1B292E] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#EE3D2C]"></span> Professional Data
                  </h4>
                  <ul className="space-y-2 list-none p-0 text-sm">
                    <li>• Resume, CV, and portfolio</li>
                    <li>• Educational qualifications</li>
                    <li>• Work experience history</li>
                    <li>• Skills assessment data</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-10 mb-6">3.2 Financial and Statutory</h3>
              <div className="bg-[#1B292E]/5 p-8 border-l-4 border-[#1B292E]">
                <ul className="space-y-3 mb-0">
                  <li><strong>Banking Details:</strong> Account numbers and IFSC codes</li>
                  <li><strong>Tax Information:</strong> PAN number and TDS certificates</li>
                  <li><strong>Statutory Numbers:</strong> PF UAN and ESI numbers</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-12 mb-6 text-[#EE3D2C]">3.3 Sensitive Personal Data (SPDI)</h3>
              <p className="italic text-sm text-[#1B292E]/60 mb-6">We process following sensitive information only where legally permitted:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Health Records", "Biometric Data", "Background Checks",
                  "Credit Scores", "Caste Certificates"
                ].map((item) => (
                  <div key={item} className="border border-red-100 bg-red-50/30 p-4 text-[13px] font-bold text-[#1B292E]">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="data-usage" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">04.</span> How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {[
                  { t: "Contractual Necessity", d: "Performance of our contractual obligations" },
                  { t: "Legal Compliance", d: "Complying with applicable Indian laws" },
                  { t: "Legitimate Interests", d: "Effective business operations" },
                  { t: "Your Consent", d: "Explicitly informed processing" }
                ].map((item) => (
                  <div key={item.t} className="bg-white border-2 border-[#F9F7F4] p-6 hover:border-[#EE3D2C]/20 transition-colors">
                    <h4 className="font-black text-[#1B292E] mb-2">{item.t}</h4>
                    <p className="text-sm mb-0 opacity-70">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="data-retention" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">07.</span> Data Retention
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-[#E5E1DA] my-8">
                  <thead className="bg-[#1B292E] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-widest border border-white/20 whitespace-nowrap">Category</th>
                      <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-widest border border-white/20 whitespace-nowrap">Retention Period</th>
                      <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-widest border border-white/20 whitespace-nowrap">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {[
                      { c: "Employee Records", p: "7 years after exit", b: "Labor Laws" },
                      { c: "Payroll Data", p: "8 years", b: "Income Tax Act" },
                      { c: "Job Candidates", p: "2 years", b: "Legitimate Interest" },
                      { c: "Analytics Data", p: "26 months", b: "Service Improvement" }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F7F4]"}>
                        <td className="px-6 py-4 text-sm font-bold border border-[#E5E1DA]">{row.c}</td>
                        <td className="px-6 py-4 text-sm font-mono border border-[#E5E1DA]">{row.p}</td>
                        <td className="px-6 py-4 text-xs font-medium uppercase border border-[#E5E1DA] opacity-60">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="security" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">08.</span> Data Security Measures
              </h2>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase tracking-wider text-[#EE3D2C]">Technical Safeguards</h3>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#1B292E] flex-shrink-0"></div>
                      <div>
                        <span className="font-bold block">AES-256 Encryption</span>
                        <span className="text-sm opacity-70">Highest industry standard for data at rest</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#1B292E] flex-shrink-0"></div>
                      <div>
                        <span className="font-bold block">MFA Access Control</span>
                        <span className="text-sm opacity-70">Strict role-based permission systems</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#1B292E] p-8 text-white relative overflow-hidden group">
                  <Lock className="absolute -bottom-4 -right-4 h-32 w-32 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                  <h3 className="text-lg font-black uppercase tracking-wider text-[#EE3D2C] mb-6">Compliance</h3>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>ISO 9001:2015</span>
                      <span className="text-[#EE3D2C]">CERTIFIED</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>GDPR PRINCIPLES</span>
                      <span className="text-[#EE3D2C]">COMPLIANT</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2 opacity-50">
                      <span>ISO 27001:2013</span>
                      <span>IN PROGRESS</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-32">
              <h2 className="text-3xl border-b border-[#E5E1DA] pb-4 mb-8 flex items-center gap-3">
                <span className="text-[#EE3D2C]/20 font-mono italic">14.</span> Contact Information
              </h2>
              <div className="bg-[#F9F7F4] border-2 border-[#1B292E] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-black text-xl mb-6">Data Protection Officer</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Mr. Rajiv Bhatia</strong></p>
                      <p className="opacity-70">Chief Compliance Officer & DPO</p>
                      <p className="text-[#EE3D2C] font-bold">mail@apexenterprises.net</p>
                      <p>+91 124 4040 281</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-6">Registered Office</h4>
                    <p className="text-sm leading-relaxed opacity-70">
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