import { CheckCircle, Shield, Clock, Calculator, ChevronRight, CreditCard, Building2, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Pricing tier data
const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    price: '₹299',
    description: 'per employee per month',
    features: [
      'Salary processing & disbursement',
      'PF & ESI compliance',
      'Professional tax filing',
      'Standard payslips',
      'Basic MIS reports',
      'Email support',
    ],
    mostPopular: false,
  },
  {
    name: 'Business',
    id: 'tier-business',
    price: '₹499',
    description: 'per employee per month',
    features: [
      'Everything in Basic',
      'TDS filing & Form 16',
      'Statutory bonus calculations',
      'Custom payslip branding',
      'Advanced MIS & analytics',
      'Dedicated account manager',
      'Priority email & phone support',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: 'Custom',
    description: 'tailored to your requirements',
    features: [
      'Everything in Business',
      'Integration with HRMS',
      'Custom compliance reports',
      'Gratuity & leave management',
      'Multi-state compliance',
      'Annual compliance audit',
      'Labour law advisory',
      '24/7 priority support',
    ],
    mostPopular: false,
  },
];

// FAQs
const faqs = [
  {
    question: 'How does your TPA service ensure compliance with Indian labour laws?',
    answer: 'Our team of certified compliance experts stays updated with the latest amendments in labour laws across all Indian states. We conduct regular internal audits and follow a strict checklist approach to ensure 100% compliance with PF, ESI, professional tax, bonus rules, and other statutory requirements.',
  },
  {
    question: 'Can you handle payroll across multiple states in India?',
    answer: 'Yes, we have specialized teams for each region of India who understand local compliance requirements. We manage multi-state operations for many clients, ensuring proper adherence to state-specific professional tax slabs, labour welfare fund contributions, and other regional variations in compliance.',
  },
  {
    question: 'What is your turnaround time for processing monthly payroll?',
    answer: 'Our standard turnaround time is 24-48 hours from receipt of attendance and payroll inputs. For clients with more than 500 employees, we recommend a 72-hour processing window. We also offer emergency processing options when required at no additional cost.',
  },
  {
    question: 'How do you handle confidentiality of payroll data?',
    answer: 'We implement bank-grade security measures including end-to-end encryption, role-based access controls, and regular security audits. All our systems are ISO 27001 certified, and we sign comprehensive NDAs with all clients to ensure complete confidentiality of sensitive payroll information.',
  },
];

// Client logos (in a real implementation, these would be imported image files)
const clients = [
  { name: 'Tech Mahindra', logo: 'tech-mahindra.svg' },
  { name: 'Aditya Birla Group', logo: 'aditya-birla.svg' },
  { name: 'Reliance Retail', logo: 'reliance-retail.svg' },
  { name: 'Apollo Healthcare', logo: 'apollo-healthcare.svg' },
  { name: 'Godrej Consumer', logo: 'godrej.svg' },
  { name: 'Tata Consultancy Services', logo: 'tcs.svg' },
];

export default function ServicePayroll() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="bg-gray-50 py-16 px-6 lg:py-24 lg:px-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-base font-semibold text-blue-600">Third-Party Payroll Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simplify Your Payroll & Compliance Across India
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our end-to-end payroll management services ensure 100% statutory compliance while saving you time and resources. With expertise across all Indian states and industries, we handle everything from salary calculations to complex compliance filings.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Schedule a Demo
                </Link>
              </div>
              
              <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col">
                  <dt className="flex items-center text-base font-medium text-gray-500">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    100% Compliance Guaranteed
                  </dt>
                  <dd className="mt-2 text-sm text-gray-700">
                    Full protection against statutory notices and penalties
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center text-base font-medium text-gray-500">
                    <Building2 className="h-5 w-5 text-blue-500 mr-2" />
                    Pan-India Coverage
                  </dt>
                  <dd className="mt-2 text-sm text-gray-700">
                    Operations across all states with local expertise
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center text-base font-medium text-gray-500">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    Quick Implementation
                  </dt>
                  <dd className="mt-2 text-sm text-gray-700">
                    Get up and running in as little as 7 days
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center text-base font-medium text-gray-500">
                    <Calculator className="h-5 w-5 text-blue-500 mr-2" />
                    Reduce Costs by 40%
                  </dt>
                  <dd className="mt-2 text-sm text-gray-700">
                    Compared to in-house payroll management
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-blue-600 py-16 px-6 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:ml-0">
              <h3 className="text-2xl font-bold text-white">
                What You Get With Our Payroll Services
              </h3>
              <div className="mt-8">
                <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:gap-y-5">
                  {[
                    'End-to-end salary processing and disbursement',
                    'Complete PF, ESI and Professional Tax compliance',
                    'TDS deduction and Form 16 generation',
                    'Full & final settlement calculations',
                    'Statutory bonus and gratuity management',
                    'Dedicated compliance experts for each client',
                    'Rich MIS and analytics dashboards',
                    'Fully-digital employee payslip portal',
                    'Regular compliance updates and advisory',
                    'Audit-ready statutory documentation',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-300" />
                      </div>
                      <p className="ml-3 text-base text-white">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold text-blue-600">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Efficient, and Transparent
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 lg:mx-auto">
              Our structured approach ensures accurate, timely, and compliant payroll processing every month.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {[
                {
                  name: 'Input Collection',
                  description: 'We collect attendance, leave, and other variable inputs through our secure portal or integrated HRMS.',
                  icon: BarChart2,
                  color: 'bg-blue-500',
                },
                {
                  name: 'Processing & Validation',
                  description: 'Our team processes the inputs, applies statutory calculations, and performs multi-level validation.',
                  icon: Calculator,
                  color: 'bg-blue-600',
                },
                {
                  name: 'Disbursement & Compliance',
                  description: 'We handle salary disbursement, generate payslips, and complete all statutory filings on time.',
                  icon: CreditCard,
                  color: 'bg-blue-700',
                },
              ].map((step, index) => (
                <div key={step.name} className="relative pl-16">
                  <div className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg ${step.color}`}>
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      <span className="rounded-full bg-gray-200 px-2 py-1 text-sm font-bold text-gray-700 mr-2">
                        {index + 1}
                      </span>
                      {step.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Transparent pricing plans
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose the right plan for your business size and requirements. All plans include our core compliance guarantee.
          </p>
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`flex flex-col rounded-3xl p-8 ring-1 ${
                    tier.mostPopular
                      ? 'bg-blue-600 ring-blue-600 lg:shadow-xl'
                      : 'bg-white ring-gray-200'
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.mostPopular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      tier.mostPopular ? 'text-blue-200' : 'text-gray-600'
                    }`}
                  >
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span
                      className={`text-4xl font-bold tracking-tight ${
                        tier.mostPopular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {tier.price}
                    </span>
                  </p>
                  
                  <ul
                    role="list"
                    className={`mt-8 space-y-3 ${
                      tier.mostPopular ? 'text-blue-100' : 'text-gray-600'
                    }`}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle
                          className={`h-6 w-5 flex-none ${
                            tier.mostPopular ? 'text-white' : 'text-blue-600'
                          }`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      tier.mostPopular
                        ? 'bg-white text-blue-600 hover:bg-blue-50 focus-visible:outline-white'
                        : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials/logos section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by 1000+ companies across India
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {clients.map((client) => (
              <div key={client.name} className="flex justify-center">
                <div className="h-12 flex items-center justify-center text-gray-400">
                  {/* This would be an actual logo in a real implementation */}
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question? Reach out to our{' '}
            <Link to="/contact" className="font-semibold text-blue-600 hover:text-blue-500">
              support team
            </Link>{' '}
            for assistance.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to simplify your payroll?</span>
            <span className="block text-blue-600">Get started with a free consultation today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                Get started
                <ChevronRight className="ml-3 -mr-1 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/services/payroll-compliance"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
