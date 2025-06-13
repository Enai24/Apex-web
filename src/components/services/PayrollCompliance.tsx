import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, Shield, FileText, CheckCircle, Clock, Award, Phone, Mail, AlertTriangle } from 'lucide-react';

export default function PayrollCompliance() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Payroll & Statutory Compliance Services",
    "description": "Complete payroll management and statutory compliance services in India. EPF, ESI, Professional Tax, TDS, and Labour Law compliance with 100% accuracy guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Payroll Processing and Compliance Management"
  };

  return (
    <>
      <Helmet>
        <title>Payroll & Statutory Compliance Services | Expert Management in India</title>
        <meta name="description" content="Professional payroll and statutory compliance services across India. EPF, ESI, Professional Tax, TDS management with 100% accuracy. Get free compliance audit today!" />
        <meta name="keywords" content="payroll compliance services, statutory compliance india, epf esi services, professional tax compliance, payroll management, labour law compliance, tds services" />
        <link rel="canonical" href="https://apexenterprises.net/services/payroll-compliance" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Payroll & Statutory Compliance Services | Expert Management in India" />
        <meta property="og:description" content="Professional payroll and statutory compliance services across India. EPF, ESI, Professional Tax, TDS management with 100% accuracy." />
        <meta property="og:url" content="https://apexenterprises.net/services/payroll-compliance" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-24 sm:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center gap-x-2 text-blue-200 mb-4">
                <Calculator className="h-5 w-5" />
                <span className="text-sm font-medium">Compliance Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Payroll & Statutory Compliance Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Complete payroll management and statutory compliance services across India. EPF, ESI, Professional Tax, 
                TDS, and Labour Law compliance with 100% accuracy guarantee and zero penalty record.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Free Compliance Audit
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-white">
                  View Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Stats */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Proven Track Record</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                India's Most Trusted Payroll Compliance Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Zero penalties, 100% accuracy, and complete peace of mind for 500+ companies across India
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Shield className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">Zero Penalties</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">15+ years, perfect record</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Clock className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">Same-Day Processing</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Real-time compliance</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <FileText className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">50,000+ Returns</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Filed annually</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Award className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">ISO 27001 Certified</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Data security assured</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Complete Payroll & Compliance Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                End-to-end payroll processing and statutory compliance management across all Indian states
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white">EPF & ESI</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    EPF & ESI Management
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Complete Employee Provident Fund and Employee State Insurance management with automated 
                    contributions, monthly returns filing, and claim processing support.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Automated monthly contributions
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      ECR & monthly returns filing
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      PF withdrawal & claim assistance
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      ESI medical benefits coordination
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-green-600 px-3 py-1.5 font-medium text-white">Professional Tax</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Professional Tax Compliance
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    State-wise professional tax registration, monthly deductions, quarterly returns filing, 
                    and annual reconciliation across all applicable Indian states.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Multi-state PT registration
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Automated monthly deductions
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Quarterly returns filing
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Annual certificate generation
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-purple-600 px-3 py-1.5 font-medium text-white">TDS & Income Tax</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    TDS & Income Tax Management
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Tax Deducted at Source calculations, monthly deposits, quarterly TDS returns, 
                    Form 16 generation, and income tax compliance for all employee categories.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Automated TDS calculations
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Monthly TDS deposits
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Quarterly TDS returns (24Q)
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Form 16 & 16A generation
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-red-600 px-3 py-1.5 font-medium text-white">Labour Laws</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Labour Law Compliance
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Complete labour law compliance including minimum wages, overtime calculations, 
                    bonus payments, gratuity management, and statutory audit preparation.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Minimum wage compliance tracking
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Overtime & holiday pay calculations
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Annual bonus computation
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Gratuity fund management
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-yellow-600 px-3 py-1.5 font-medium text-white">Payroll Processing</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Automated Payroll Processing
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Complete payroll automation with attendance integration, salary calculations, 
                    deductions processing, payslip generation, and bank transfer management.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Attendance system integration
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Automated salary calculations
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Digital payslip generation
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Direct bank transfers (NEFT/RTGS)
                    </li>
                  </ul>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="rounded-full bg-teal-600 px-3 py-1.5 font-medium text-white">Audit Support</div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Compliance Audit & Support
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Comprehensive compliance audits, statutory inspection support, documentation management, 
                    and regulatory update notifications to ensure continuous compliance.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Monthly compliance health checks
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Statutory inspection support
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Documentation management
                    </li>
                    <li className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Regulatory update alerts
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Compliance Penalties Avoided */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Avoid Costly Compliance Penalties
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Common compliance violations that can cost your business thousands in penalties
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center gap-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">Common Violations & Penalties</h3>
                </div>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex justify-between">
                    <span>Late EPF/ESI deposits</span>
                    <span className="font-medium">12% p.a. penalty</span>
                  </li>
                  <li className="flex justify-between">
                    <span>TDS default</span>
                    <span className="font-medium">1% per month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Professional Tax delay</span>
                    <span className="font-medium">₹500-2000/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minimum wage violation</span>
                    <span className="font-medium">₹20,000-75,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Labour law non-compliance</span>
                    <span className="font-medium">₹25,000-100,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Incorrect Form 16</span>
                    <span className="font-medium">₹10,000 per case</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Our Guarantee</h3>
                </div>
                <ul className="space-y-3 text-sm text-green-800">
                  <li className="flex items-start gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Zero penalties in 15+ years of operations</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Same-day processing of all statutory payments</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Real-time compliance monitoring and alerts</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Dedicated compliance manager for each client</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>100% accuracy guarantee with penalty protection</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Free compliance audit and gap analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-indigo-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Ensure 100% Compliance?
              </h2>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Get a free compliance audit and discover potential savings and risk areas
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Contact Our Experts</h3>
                <dl className="space-y-4 text-sm leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Compliance Helpline</p>
                      <a className="hover:text-indigo-600" href="tel:+91-9876543210">+91-9876543210</a>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a className="hover:text-indigo-600" href="mailto:compliance@apexenterprises.net">compliance@apexenterprises.net</a>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Free Compliance Audit Includes:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Current compliance status review</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Risk identification and mitigation plan</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Cost savings analysis and recommendations</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Customized compliance roadmap</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="tel:+91-9876543210"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    <Phone className="h-4 w-4" />
                    Schedule Free Audit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 