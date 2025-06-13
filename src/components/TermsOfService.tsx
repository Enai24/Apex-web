import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, AlertTriangle, CheckCircle, Gavel, Users } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Terms of Service | Apex Enterprises</title>
        <meta name="description" content="Review the comprehensive Terms of Service governing use of Apex Enterprises website and workforce solutions services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, service agreement, legal terms" />
        <link rel="canonical" href="https://apexenterprises.net/terms-of-service" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-gray-600/20 px-3 py-1 text-sm font-medium text-gray-100 ring-1 ring-inset ring-gray-500/30 mb-6">
              <Gavel className="mr-1.5 h-4 w-4" />
              <span>Legal Terms</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Comprehensive terms governing the use of our workforce solutions and services
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
              {[
                { name: "Service Agreement", href: "#acceptance", icon: FileText },
                { name: "User Responsibilities", href: "#user-conduct", icon: Users },
                { name: "Intellectual Property", href: "#intellectual-property", icon: Shield },
                { name: "Limitations", href: "#limitations", icon: AlertTriangle },
                { name: "Dispute Resolution", href: "#governing-law", icon: Gavel },
                { name: "Contact Information", href: "#contact", icon: CheckCircle }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-gray-600 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-gray-900">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-sm sm:prose lg:prose-lg prose-gray max-w-none">
            
            {/* Last Updated */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-800 mb-0">
                <strong>Effective Date:</strong> 1 July 2024 | 
                <strong> Last Modified:</strong> 1 July 2024 |
                <strong> Version:</strong> 2.1
              </p>
            </div>

            <section id="acceptance">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <FileText className="h-6 w-6 text-gray-600 mr-2" />
                1. Acceptance of Terms
              </h2>
              <p>
                These Terms of Service ("<strong>Terms</strong>", "<strong>Agreement</strong>") constitute a legally binding agreement between 
                Apex Enterprises ("<strong>Apex</strong>", "<strong>Company</strong>", "<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>"),
                a company incorporated under the laws of India with registered office at 11 Shankar Chowk Road, Dundahera, Gurgaon 122016, Haryana, India,
                and you ("<strong>you</strong>", "<strong>your</strong>", "<strong>User</strong>", or "<strong>Client</strong>") concerning your use of
                our website at <a href="https://apexenterprises.net">apexenterprises.net</a> ("<strong>Website</strong>") and any related services, 
                features, content, or applications offered by Apex ("<strong>Services</strong>").
              </p>
              <p>
                By accessing, browsing, or using our Website or Services in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms and our
                <a href="/privacy-policy"> Privacy Policy</a>, which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use our
                Website or Services.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                <h4 className="text-amber-800 font-semibold mb-2">Important Legal Notice</h4>
                <p className="text-amber-700 text-sm mb-0">
                  These Terms contain important provisions including limitations of liability, disclaimers of warranties, and an agreement to arbitrate disputes.
                  Please read them carefully before using our services.
                </p>
              </div>
            </section>

            <section id="services">
              <h2>2. Description of Services</h2>
              <p>
                Apex is a leading workforce solutions provider offering comprehensive human resource services across India. Our Services include but are not limited to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Core Services</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Permanent and temporary staffing solutions</li>
                    <li>• Executive search and recruitment</li>
                    <li>• Contractor and consultant placements</li>
                    <li>• Bulk hiring and campus recruitment</li>
                    <li>• HR consulting and advisory services</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3">Technology Solutions</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Payroll processing and management</li>
                    <li>• Compliance and regulatory services</li>
                    <li>• HR information systems (HRIS)</li>
                    <li>• Background verification services</li>
                    <li>• Employee onboarding and offboarding</li>
                  </ul>
                </div>
              </div>

              <h3>2.1 Service Scope and Limitations</h3>
              <p>Our Services are subject to the following limitations:</p>
              <ul>
                <li>Services are available primarily within India and to Indian entities</li>
                <li>Certain specialized services may require additional agreements</li>
                <li>Service availability may vary based on geographic location and local regulations</li>
                <li>We reserve the right to modify, suspend, or discontinue any Service with reasonable notice</li>
              </ul>
            </section>

            <section id="eligibility">
              <h2>3. Eligibility and Registration</h2>
              <p>
                To use our Services, you must meet the following eligibility criteria:
              </p>
              <ul>
                <li><strong>Age Requirement:</strong> You must be at least 18 years old or the legal age of majority in your jurisdiction</li>
                <li><strong>Legal Capacity:</strong> You must have the legal capacity to enter into binding agreements</li>
                <li><strong>Authorization:</strong> If representing an entity, you must have proper authorization to bind such entity</li>
                <li><strong>Compliance:</strong> You must comply with all applicable laws and regulations in your jurisdiction</li>
                <li><strong>Good Standing:</strong> You must not be prohibited from using our Services under any applicable law</li>
              </ul>

              <h3>3.1 Account Registration</h3>
              <p>To access certain features, you may need to create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information to keep it accurate</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept full responsibility for all activities conducted under your account</li>
                <li>Use only one account unless explicitly authorized by us</li>
              </ul>
            </section>

            <section id="user-conduct">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Users className="h-6 w-6 text-gray-600 mr-2" />
                4. User Conduct and Prohibited Uses
              </h2>
              
              <p>You agree to use our Website and Services in accordance with these Terms and applicable laws. You specifically agree NOT to:</p>

              <h3>4.1 Legal and Regulatory Violations</h3>
              <ul>
                <li>Violate any applicable federal, state, local, or international law or regulation</li>
                <li>Infringe upon intellectual property rights of Apex or third parties</li>
                <li>Engage in any form of discrimination based on protected characteristics</li>
                <li>Violate labor laws, employment regulations, or statutory requirements</li>
              </ul>

              <h3>4.2 Misuse and Security Violations</h3>
              <ul>
                <li>Impersonate Apex, our employees, other users, or any person or entity</li>
                <li>Use automated tools, bots, or scripts to access our Services without permission</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or user accounts</li>
                <li>Introduce viruses, malware, or other harmful code to our systems</li>
                <li>Reverse engineer, decompile, or attempt to extract source code from our software</li>
              </ul>

              <h3>4.3 Content and Communication Violations</h3>
              <ul>
                <li>Upload, post, or transmit content that is unlawful, harmful, threatening, abusive, defamatory, or objectionable</li>
                <li>Share false, misleading, or fraudulent information about yourself or others</li>
                <li>Engage in harassment, stalking, or intimidation of other users</li>
                <li>Use our Services for any illegal or unauthorized commercial purposes</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Shield className="h-6 w-6 text-gray-600 mr-2" />
                5. Intellectual Property Rights
              </h2>
              
              <h3>5.1 Apex's Intellectual Property</h3>
              <p>
                The Website, Services, and all related content, features, functionality, software, technology, and materials are owned by Apex,
                its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                This includes but is not limited to:
              </p>
              <ul>
                <li>Website design, layout, graphics, and user interface</li>
                <li>Software applications, algorithms, and proprietary technology</li>
                <li>Trademarks, service marks, trade names, and logos</li>
                <li>Content, text, images, videos, and other materials</li>
                <li>Database compilations and data structures</li>
                <li>Methodologies, processes, and business practices</li>
              </ul>

              <h3>5.2 Limited License to Users</h3>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Website
                and Services for their intended purposes. This license does not include the right to:
              </p>
              <ul>
                <li>Modify, copy, distribute, or create derivative works</li>
                <li>Sublicense, sell, or transfer your access rights</li>
                <li>Use our intellectual property for commercial purposes</li>
                <li>Remove or alter any proprietary notices or marks</li>
              </ul>
            </section>

            <section id="payment-terms">
              <h2>6. Payment Terms and Billing</h2>
              
              <h3>6.1 Service Fees</h3>
              <p>
                Fees for our Services are determined based on service type, scope, duration, and complexity. All fees are:
              </p>
              <ul>
                <li>Quoted in Indian Rupees (INR) unless otherwise specified</li>
                <li>Exclusive of applicable taxes, which will be added as per Indian tax laws</li>
                <li>Subject to change with 30 days' written notice for ongoing services</li>
                <li>Non-refundable except as specifically provided in our service agreements</li>
              </ul>

              <h3>6.2 Payment Terms</h3>
              <ul>
                <li><strong>Payment Due:</strong> Net 30 days from invoice date unless otherwise agreed</li>
                <li><strong>Late Payments:</strong> Interest at 1.5% per month on overdue amounts</li>
                <li><strong>Disputes:</strong> Must be raised within 30 days of invoice date</li>
                <li><strong>Suspension:</strong> Services may be suspended for non-payment after written notice</li>
              </ul>
            </section>

            <section id="limitations">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                7. Disclaimers and Limitations
              </h2>
              
              <h3>7.1 Service Disclaimers</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="text-red-800 text-sm mb-2">
                  <strong>IMPORTANT:</strong> THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND.
                </p>
                <p className="text-red-700 text-sm mb-0">
                  APEX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.
                </p>
              </div>

              <h3>7.2 Limitation of Liability</h3>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, APEX'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS
                OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO APEX IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
              <p>
                IN NO EVENT SHALL APEX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section id="indemnification">
              <h2>8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Apex and its officers, directors, employees, agents, affiliates,
                successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions,
                judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including attorneys' fees,
                arising from or relating to:
              </p>
              <ul>
                <li>Your use or misuse of the Website or Services</li>
                <li>Your breach of these Terms or violation of applicable law</li>
                <li>Your violation of third-party rights, including intellectual property rights</li>
                <li>Any content or information you provide to us</li>
                <li>Your negligent or willful misconduct</li>
              </ul>
            </section>

            <section id="termination">
              <h2>9. Termination</h2>
              
              <h3>9.1 Termination by Apex</h3>
              <p>We may terminate or suspend your access to our Website or Services:</p>
              <ul>
                <li>Immediately for material breach of these Terms</li>
                <li>With 30 days' notice for convenience</li>
                <li>Immediately for illegal activities or security threats</li>
                <li>Upon insolvency, bankruptcy, or similar proceedings</li>
              </ul>

              <h3>9.2 Effect of Termination</h3>
              <p>Upon termination:</p>
              <ul>
                <li>Your access to the Website and Services will cease immediately</li>
                <li>All data and content may be deleted (subject to legal retention requirements)</li>
                <li>Outstanding fees remain due and payable</li>
                <li>Provisions regarding confidentiality, indemnification, and limitation of liability survive</li>
              </ul>
            </section>

            <section id="governing-law">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Gavel className="h-6 w-6 text-gray-600 mr-2" />
                10. Governing Law and Dispute Resolution
              </h2>
              
              <h3>10.1 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
                The Indian Contract Act, 1872, Information Technology Act, 2000, and other applicable Indian laws shall govern the interpretation
                and enforcement of these Terms.
              </p>

              <h3>10.2 Jurisdiction</h3>
              <p>
                Any disputes arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the
                courts in Gurgaon, Haryana, India. You hereby consent to the personal jurisdiction of such courts and waive any objection
                to the laying of venue in such courts.
              </p>

              <h3>10.3 Grievance Officer</h3>
              <p>
                For complaints or grievances regarding our Services, please contact our designated Grievance Officer:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
                <p><strong>Mr. Rajiv Bhatia</strong><br />
                Chief Compliance Officer & Grievance Officer<br />
                Email: <a href="mailto:grievance@apexenterprises.net" className="text-blue-600 hover:underline">grievance@apexenterprises.net</a><br />
                Phone: +91 124 4040 281<br />
                Address: Apex Enterprises, 11 Shankar Chowk Road, Dundahera, Gurgaon 122016, Haryana, India</p>
              </div>
            </section>

            <section id="updates">
              <h2>11. Updates to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time to reflect changes in our Services, business practices, or legal requirements.
                Material changes will be communicated through:
              </p>
              <ul>
                <li>Prominent notice on our Website homepage</li>
                <li>Email notification to registered users (where applicable)</li>
                <li>Direct communication for significant changes affecting existing service agreements</li>
              </ul>
              <p>
                Your continued use of the Website or Services after the effective date of any changes constitutes your acceptance of the updated Terms.
                If you do not agree to the changes, you must discontinue use of our Services.
              </p>
            </section>

            <section id="contact">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                12. Contact Information
              </h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-gray-900 font-semibold mb-4">Contact Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">General Inquiries</h4>
                    <p>Email: <a href="mailto:mail@apexenterprises.net" className="text-blue-600 hover:underline">mail@apexenterprises.net</a></p>
                    <p>Phone: +91 124 4040 281</p>
                    <p>Business Hours: 9:00 AM - 6:00 PM IST (Mon-Fri)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legal Matters</h4>
                    <p>Email: <a href="mailto:legal@apexenterprises.net" className="text-blue-600 hover:underline">legal@apexenterprises.net</a></p>
                    <p>Response Time: Within 5 business days</p>
                    <p>For urgent legal matters: +91 124 4040 281</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-800">
                    <strong>Registered Office:</strong><br />
                    Apex Enterprises<br />
                    11 Shankar Chowk Road, Dundahera<br />
                    Gurgaon 122016, Haryana, India
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <p className="text-center text-gray-700 font-medium">
                By using our Website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 