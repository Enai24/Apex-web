import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, FileText, Users, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Privacy Policy | Apex Enterprises</title>
        <meta name="description" content="Read our complete privacy policy describing how Apex Enterprises collects, uses and safeguards personal information in India." />
        <meta name="keywords" content="privacy policy, data protection, personal information, SPDI rules, information technology act" />
        <link rel="canonical" href="https://apexenterprises.net/privacy-policy" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-100 ring-1 ring-inset ring-blue-500/30 mb-6">
              <Shield className="mr-1.5 h-4 w-4" />
              <span>Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive data protection practices in accordance with Indian laws and global best practices
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
                { name: "Introduction", href: "#introduction", icon: FileText },
                { name: "Information We Collect", href: "#information-collection", icon: Eye },
                { name: "How We Use Data", href: "#data-usage", icon: Users },
                { name: "Data Sharing", href: "#data-sharing", icon: Globe },
                { name: "Security Measures", href: "#security", icon: Lock },
                { name: "Your Rights", href: "#your-rights", icon: Shield }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-blue-700">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-sm sm:prose lg:prose-lg prose-indigo max-w-none">
            
            {/* Last Updated */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-800 mb-0">
                <strong>Last Updated:</strong> 1 July 2024 | 
                <strong> Effective Date:</strong> 1 July 2024 |
                <strong> Version:</strong> 2.1
              </p>
            </div>

            <section id="introduction">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                1. Introduction
              </h2>
              <p>
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
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                <h4 className="text-amber-800 font-semibold mb-2">Important Notice</h4>
                <p className="text-amber-700 text-sm mb-0">
                  By using our services, visiting our website, or providing your personal information to us, you acknowledge that you have read,
                  understood, and agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
                </p>
              </div>
            </section>

            <section id="scope">
              <h2>2. Scope and Application</h2>
              <p>This Privacy Policy applies to:</p>
              <ul>
                <li><strong>Website Visitors:</strong> All users of apexenterprises.net and associated subdomains</li>
                <li><strong>Job Candidates:</strong> Individuals seeking employment through our services</li>
                <li><strong>Employees & Contractors:</strong> Current and former staff, consultants, and temporary workers</li>
                <li><strong>Client Personnel:</strong> Representatives of our corporate clients and business partners</li>
                <li><strong>Vendors & Suppliers:</strong> Third-party service providers and their authorized representatives</li>
                <li><strong>Other Stakeholders:</strong> Any individual whose personal data is processed in connection with our business operations</li>
              </ul>
            </section>

            <section id="information-collection">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                3. Information We Collect
              </h2>
              
              <h3>3.1 Personal Information You Provide</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Identity & Contact Data</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Full name, date of birth, gender</li>
                    <li>• Photograph and digital signature</li>
                    <li>• Government IDs (PAN, Aadhaar, Passport, Voter ID)</li>
                    <li>• Contact details (address, phone, email)</li>
                    <li>• Emergency contact information</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Professional Data</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Resume, CV, and portfolio</li>
                    <li>• Educational qualifications and certifications</li>
                    <li>• Work experience and employment history</li>
                    <li>• Skills assessment and performance data</li>
                    <li>• References and recommendations</li>
                  </ul>
                </div>
              </div>

              <h3>3.2 Financial and Statutory Information</h3>
              <ul>
                <li><strong>Banking Details:</strong> Account numbers, IFSC codes, cancelled cheque copies for payroll processing</li>
                <li><strong>Tax Information:</strong> PAN number, TDS certificates, Form 16, income-tax returns (where required)</li>
                <li><strong>Statutory Numbers:</strong> PF UAN, ESI number, professional tax registration</li>
                <li><strong>Salary Details:</strong> Current and expected compensation, benefits, increment history</li>
              </ul>

              <h3>3.3 Sensitive Personal Data (SPDI)</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="text-red-800 text-sm mb-2">
                  <strong>Special Category Data:</strong> We process the following sensitive information only where legally permitted and with appropriate safeguards:
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Health records and medical fitness certificates</li>
                  <li>• Biometric data (fingerprints, facial recognition) for attendance systems</li>
                  <li>• Background verification reports including criminal record checks</li>
                  <li>• Financial information including credit scores (for specific roles)</li>
                  <li>• Caste certificates (only where required for statutory compliance)</li>
                </ul>
              </div>

              <h3>3.4 Technical Information Collected Automatically</h3>
              <p>When you interact with our digital platforms, we automatically collect:</p>
              <ul>
                <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, search queries, download history</li>
                <li><strong>Location Data:</strong> Approximate location derived from IP address or GPS (with permission)</li>
                <li><strong>Communication Records:</strong> Email interactions, chat logs, phone call records (with consent)</li>
                <li><strong>Cookies & Tracking:</strong> Session data, preferences, analytics information (see Section 12)</li>
              </ul>

              <h3>3.5 Information from Third Parties</h3>
              <p>We may receive information from:</p>
              <ul>
                <li>Previous employers and professional references</li>
                <li>Educational institutions for verification purposes</li>
                <li>Background verification agencies and medical examination centers</li>
                <li>Social media platforms (LinkedIn, job portals) with your consent</li>
                <li>Government databases for identity and qualification verification</li>
                <li>Credit bureaus and financial institutions (for specific roles requiring financial background checks)</li>
              </ul>
            </section>

            <section id="data-usage">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                4. How We Use Your Information
              </h2>
              
              <h3>4.1 Legal Basis for Processing</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Contractual Necessity</h4>
                  <p className="text-sm text-gray-600">To perform our contractual obligations or take pre-contractual steps at your request</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                  <p className="text-sm text-gray-600">To comply with applicable Indian laws, regulations, and statutory requirements</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Legitimate Interests</h4>
                  <p className="text-sm text-gray-600">To operate our business effectively while respecting your fundamental rights</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Your Consent</h4>
                  <p className="text-sm text-gray-600">Where you have given explicit, informed consent for specific processing activities</p>
                </div>
              </div>

              <h3>4.2 Specific Purposes</h3>
              <ul>
                <li><strong>Recruitment & Placement:</strong> Candidate evaluation, job matching, interview scheduling, reference checks</li>
                <li><strong>Onboarding & Documentation:</strong> Background verification, document collection, compliance checks</li>
                <li><strong>Payroll & Benefits:</strong> Salary processing, tax calculations, statutory deductions, benefits administration</li>
                <li><strong>Compliance Management:</strong> EPF/ESI filings, labor law registers, government reporting</li>
                <li><strong>Performance Management:</strong> Appraisals, training needs assessment, career development</li>
                <li><strong>Client Services:</strong> Workforce deployment, project management, client reporting</li>
                <li><strong>Business Operations:</strong> Analytics, service improvement, fraud prevention, dispute resolution</li>
                <li><strong>Communication:</strong> Service updates, policy changes, marketing communications (with consent)</li>
              </ul>
            </section>

            <section id="data-sharing">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-2" />
                5. Information Sharing and Disclosure
              </h2>
              
              <p>We share personal information only when necessary and with appropriate safeguards:</p>

              <h3>5.1 Business Partners and Clients</h3>
              <ul>
                <li><strong>Current and Prospective Employers:</strong> To facilitate job placements and work assignments</li>
                <li><strong>Client Organizations:</strong> For workforce deployment, performance reporting, and compliance</li>
                <li><strong>Business Partners:</strong> Joint ventures, strategic alliances (with contractual protections)</li>
              </ul>

              <h3>5.2 Government and Regulatory Bodies</h3>
              <ul>
                <li><strong>Labor Authorities:</strong> EPF Organization (EPFO), Employees' State Insurance Corporation (ESIC)</li>
                <li><strong>Tax Authorities:</strong> Income Tax Department, GST authorities, Professional Tax offices</li>
                <li><strong>Other Government Bodies:</strong> Labor Commissioners, Factory Inspectors, Registrar of Companies</li>
                <li><strong>Legal Proceedings:</strong> Courts, tribunals, arbitrators, law enforcement (as required by law)</li>
              </ul>

              <h3>5.3 Service Providers</h3>
              <p>We engage third-party service providers under strict contractual obligations:</p>
              <ul>
                <li><strong>Technology Providers:</strong> Cloud hosting, software vendors, IT security services</li>
                <li><strong>Professional Services:</strong> Background verification agencies, medical examination centers</li>
                <li><strong>Administrative Support:</strong> Banking partners, courier services, document management</li>
                <li><strong>Advisory Services:</strong> Legal counsel, auditors, consultants, insurance providers</li>
              </ul>

              <h3>5.4 Corporate Transactions</h3>
              <p>In the event of mergers, acquisitions, or business transfers, personal data may be shared with:</p>
              <ul>
                <li>Prospective buyers or investors (under strict confidentiality agreements)</li>
                <li>Legal and financial advisors facilitating the transaction</li>
                <li>The acquiring entity (with appropriate data protection commitments)</li>
              </ul>
            </section>

            <section id="international-transfers">
              <h2>6. International Data Transfers</h2>
              <p>
                While Apex is headquartered in India, some of our technology service providers or cloud infrastructure may be located 
                outside India. When we transfer personal data internationally, we ensure adequate protection through:
              </p>
              <ul>
                <li><strong>Adequacy Decisions:</strong> Transfers to countries recognized as providing adequate protection</li>
                <li><strong>Standard Contractual Clauses:</strong> EU-approved model clauses or equivalent bilateral agreements</li>
                <li><strong>Binding Corporate Rules:</strong> Internal policies ensuring consistent global protection standards</li>
                <li><strong>Certification Schemes:</strong> ISO 27001, SOC 2, or other recognized security certifications</li>
              </ul>
            </section>

            <section id="data-retention">
              <h2>7. Data Retention</h2>
              <p>We retain personal information based on the following criteria:</p>
              <table className="min-w-full border border-gray-300 my-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Retention Period</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Employee Records</td>
                    <td className="border border-gray-300 px-4 py-2">7 years after employment ends</td>
                    <td className="border border-gray-300 px-4 py-2">Labor laws, tax regulations</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Payroll Data</td>
                    <td className="border border-gray-300 px-4 py-2">8 years</td>
                    <td className="border border-gray-300 px-4 py-2">Income Tax Act, audit requirements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Unsuccessful Candidates</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                    <td className="border border-gray-300 px-4 py-2">Future opportunities, legal compliance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Website Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">26 months</td>
                    <td className="border border-gray-300 px-4 py-2">Business analysis, service improvement</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="security">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Lock className="h-6 w-6 text-blue-600 mr-2" />
                8. Data Security Measures
              </h2>
              
              <p>We implement comprehensive security measures to protect your personal information:</p>

              <h3>8.1 Technical Safeguards</h3>
              <ul>
                <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS 1.3 for data in transit</li>
                <li><strong>Access Controls:</strong> Multi-factor authentication, role-based permissions, principle of least privilege</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection systems, DDoS protection</li>
                <li><strong>Regular Monitoring:</strong> 24/7 security monitoring, automated threat detection, incident response</li>
              </ul>

              <h3>8.2 Organizational Measures</h3>
              <ul>
                <li><strong>Employee Training:</strong> Regular data protection and cybersecurity awareness programs</li>
                <li><strong>Access Management:</strong> Background-verified personnel, confidentiality agreements, periodic access reviews</li>
                <li><strong>Vendor Management:</strong> Due diligence on third-party security practices, contractual security obligations</li>
                <li><strong>Incident Response:</strong> Documented procedures for data breach detection, assessment, and notification</li>
              </ul>

              <h3>8.3 Compliance Certifications</h3>
              <ul>
                <li><strong>ISO 9001:2015</strong> - Quality Management Systems</li>
                <li><strong>ISO 27001:2013</strong> - Information Security Management (in progress)</li>
                <li><strong>SOC 2 Type II</strong> - Security, availability, and confidentiality controls</li>
              </ul>
            </section>

            <section id="your-rights">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                9. Your Privacy Rights
              </h2>
              
              <p>Subject to applicable law, you have the following rights regarding your personal data:</p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Right to Access</h4>
                  <p className="text-sm text-blue-800">Request a copy of the personal information we hold about you, including details about how it's processed.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Right to Rectification</h4>
                  <p className="text-sm text-green-800">Request correction of inaccurate or incomplete personal information.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Right to Withdraw Consent</h4>
                  <p className="text-sm text-purple-800">Withdraw previously given consent for specific processing activities.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Right to Object</h4>
                  <p className="text-sm text-orange-800">Object to processing based on legitimate interests or for direct marketing purposes.</p>
                </div>
              </div>

              <h3>9.1 How to Exercise Your Rights</h3>
              <p>To exercise any of these rights, please contact our Data Protection Officer:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-4">
                <h4 className="font-semibold mb-3">Data Protection Officer Contact Details</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Name:</strong> Mr. Rajiv Bhatia</p>
                    <p><strong>Title:</strong> Chief Compliance Officer & DPO</p>
                    <p><strong>Email:</strong> <a href="mailto:privacy@apexenterprises.net" className="text-blue-600 hover:underline">privacy@apexenterprises.net</a></p>
                    <p><strong>Phone:</strong> +91 124 4040 281</p>
                  </div>
                  <div>
                    <p><strong>Address:</strong><br />
                    Apex Enterprises<br />
                    11 Shankar Chowk Road<br />
                    Dundahera, Gurgaon 122016<br />
                    Haryana, India</p>
                  </div>
                </div>
              </div>

              <h3>9.2 Response Timeline</h3>
              <p>We will respond to your requests within:</p>
              <ul>
                <li><strong>Acknowledgment:</strong> 72 hours of receiving your request</li>
                <li><strong>Full Response:</strong> 30 days (extendable by 60 days for complex requests)</li>
                <li><strong>Urgent Requests:</strong> Priority handling for security-related concerns</li>
              </ul>
            </section>

            <section id="cookies">
              <h2>10. Cookies and Tracking Technologies</h2>
              <p>Our website uses various tracking technologies to enhance user experience and analyze usage patterns:</p>
              
              <h3>10.1 Types of Cookies We Use</h3>
              <table className="min-w-full border border-gray-300 my-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 px-4 py-2">Website functionality, security, user authentication</td>
                    <td className="border border-gray-300 px-4 py-2">Session/1 year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Usage statistics, performance optimization</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">Personalized content, advertising targeting</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>

              <h3>10.2 Managing Cookie Preferences</h3>
              <p>You can control cookie settings through:</p>
              <ul>
                <li>Browser settings (Chrome, Firefox, Safari, Edge)</li>
                <li>Our cookie preference center (available on first visit)</li>
                <li>Third-party opt-out tools (Google Analytics, Facebook Pixel)</li>
              </ul>
            </section>

            <section id="children">
              <h2>11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from 
                children. If you believe a child has provided us with personal information, please contact us immediately, and we will take 
                steps to delete such information from our systems.
              </p>
            </section>

            <section id="updates">
              <h2>12. Policy Updates</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices, services, or applicable laws. Material changes will be 
                communicated through:
              </p>
              <ul>
                <li>Prominent notice on our website</li>
                <li>Email notification to registered users</li>
                <li>Direct communication for significant changes affecting your rights</li>
              </ul>
              <p>
                We encourage you to review this Policy periodically. Your continued use of our services after any changes constitutes 
                acceptance of the updated Policy.
              </p>
            </section>

            <section id="complaints">
              <h2>13. Complaints and Grievances</h2>
              <p>
                If you have concerns about our data handling practices, you may file a complaint with:
              </p>
              <ul>
                <li><strong>Our Grievance Officer</strong> (contact details in Section 9)</li>
                <li><strong>Cyber Crime Investigation Cell</strong> of your local police</li>
                <li><strong>IT Ministry</strong> through the national grievance portal</li>
                <li><strong>Consumer Forums</strong> under the Consumer Protection Act</li>
              </ul>
            </section>

            <section id="contact">
              <h2>14. Contact Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h3 className="text-blue-900 font-semibold mb-4">Get in Touch</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">General Inquiries</h4>
                    <p>Email: <a href="mailto:mail@apexenterprises.net" className="text-blue-600 hover:underline">mail@apexenterprises.net</a></p>
                    <p>Phone: +91 124 4040 281</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Privacy Matters</h4>
                    <p>Email: <a href="mailto:privacy@apexenterprises.net" className="text-blue-600 hover:underline">privacy@apexenterprises.net</a></p>
                    <p>Response Time: Within 72 hours</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Office Address:</strong> Apex Enterprises, 11 Shankar Chowk Road, Dundahera, Gurgaon 122016, Haryana, India
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <p className="text-center text-gray-700 font-medium">
                By using our services or providing your information, you acknowledge that you have read, understood, and agree to this Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 