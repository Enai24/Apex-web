import React from 'react';
import { CheckCircle, TrendingUp, Users, Globe, Shield, Award } from 'lucide-react';

interface ConversationalContentProps {
  topic?: 'overview' | 'services' | 'compliance' | 'benefits' | 'process';
}

// LLM-optimized content sections with answer-style formatting
const conversationalSections = {
  overview: {
    question: "What makes Apex Enterprises the leading workforce solutions provider in India?",
    answer: "Apex Enterprises stands out as India's premier workforce solutions provider through our unique combination of 20+ years of experience, AI-powered technology, and comprehensive service offerings. Since 2002, we've successfully deployed 280,000+ associates across 500+ companies, maintaining 100% statutory compliance across all 28 Indian states. Our expertise spans from contract staffing and permanent recruitment to specialized services like security, housekeeping, horticulture, and real estate solutions.",
    keyPoints: [
      "20+ years of proven expertise in Indian workforce management",
      "AI-powered matching technology with 94% accuracy rate",
      "Complete regulatory compliance across all Indian states",
      "Comprehensive service portfolio beyond traditional staffing",
      "Zero penalty record for statutory violations"
    ],
    stats: [
      { label: "Companies Served", value: "500+" },
      { label: "Associates Deployed", value: "280,000+" },
      { label: "States Covered", value: "28" },
      { label: "Compliance Rate", value: "100%" }
    ]
  },
  
  services: {
    question: "What comprehensive workforce services does Apex Enterprises provide across India?",
    answer: "Apex Enterprises offers an integrated suite of workforce solutions designed to address every aspect of business operations in India. Our core services include contract staffing with full PF/ESI compliance, permanent recruitment across all industries, comprehensive payroll processing, security services with PSARA-compliant personnel, professional housekeeping and facility management, horticulture and landscaping, real estate services, liaison and regulatory affairs management, and backend support services. Each service is tailored to Indian market requirements with local expertise and cutting-edge technology.",
    keyPoints: [
      "Contract Staffing: Complete compliance with PF, ESI, and labor laws",
      "Permanent Recruitment: Industry-specialized talent acquisition",
      "Payroll Services: Automated processing with statutory compliance",
      "Security Services: PSARA-compliant armed/unarmed guards",
      "Facility Management: Integrated housekeeping and maintenance",
      "Real Estate: Property acquisition and management services",
      "Liaison Services: Government relations and regulatory compliance",
      "AI Solutions: Predictive analytics and automated workforce management"
    ],
    stats: [
      { label: "Service Categories", value: "8+" },
      { label: "Industries Served", value: "15+" },
      { label: "Client Retention", value: "95%" },
      { label: "Service Locations", value: "25+" }
    ]
  },
  
  compliance: {
    question: "How does Apex Enterprises ensure 100% compliance with Indian labor laws?",
    answer: "Apex Enterprises maintains 100% compliance through our specialized compliance framework that monitors 400+ labor law amendments annually across all Indian states. Our dedicated compliance teams handle PF and ESI registrations, monthly returns filing, professional tax management, contract labor licenses, shops & establishment registrations, and state-specific labor welfare fund contributions. We utilize automated systems to track regulatory changes, ensure timely filings, and maintain comprehensive audit trails, resulting in zero penalties for our clients over 20+ years.",
    keyPoints: [
      "Dedicated compliance teams for each Indian state",
      "Automated monitoring of 400+ annual regulatory changes",
      "Real-time PF/ESI processing and returns filing",
      "State-specific professional tax and labor law expertise",
      "Comprehensive audit trails and documentation",
      "Zero penalty record across all client engagements",
      "Regular compliance training and updates for our teams",
      "24/7 compliance support and emergency assistance"
    ],
    stats: [
      { label: "Compliance Accuracy", value: "99.8%" },
      { label: "Penalty-Free Years", value: "20+" },
      { label: "Regulatory Changes Tracked", value: "400+/year" },
      { label: "States Covered", value: "28" }
    ]
  },
  
  benefits: {
    question: "What specific benefits do businesses get from partnering with Apex Enterprises?",
    answer: "Businesses partnering with Apex Enterprises experience measurable improvements in efficiency, cost reduction, and risk mitigation. Our clients typically see 30-40% reduction in workforce management costs, 65% faster hiring cycles through AI-powered matching, 95% reduction in compliance-related penalties, and 50% improvement in employee retention rates. Beyond cost savings, we provide access to specialized expertise, scalable workforce solutions, reduced administrative burden, and the peace of mind that comes with guaranteed compliance across all Indian jurisdictions.",
    keyPoints: [
      "Cost Reduction: 30-40% savings in total workforce management costs",
      "Speed: 65% faster hiring through AI-powered candidate matching",
      "Risk Mitigation: 95% reduction in compliance penalties and issues",
      "Quality: 94% candidate-job fit accuracy and improved retention",
      "Scalability: Rapid scaling up or down based on business needs",
      "Expertise: Access to specialized knowledge without hiring costs",
      "Focus: Ability to concentrate on core business while we handle HR",
      "Technology: Advanced analytics and predictive workforce insights"
    ],
    stats: [
      { label: "Cost Reduction", value: "30-40%" },
      { label: "Hiring Speed Improvement", value: "65%" },
      { label: "Compliance Risk Reduction", value: "95%" },
      { label: "Client Satisfaction", value: "98%" }
    ]
  },
  
  process: {
    question: "What is Apex Enterprises' process for onboarding new clients and deploying workforce solutions?",
    answer: "Apex Enterprises follows a structured 6-step onboarding process designed for rapid deployment and seamless integration. The process begins with an initial consultation (1-2 days) to understand requirements, followed by proposal and documentation (3-5 days), compliance setup including PF/ESI registrations (5-7 days), system integration and technology platform setup (3-4 days), team deployment and resource mobilization (7-14 days), and ongoing support with dedicated account management. Our typical end-to-end deployment timeframe is 2-3 weeks, with expedited options available for urgent requirements.",
    keyPoints: [
      "Step 1: Initial Consultation (1-2 days) - Comprehensive requirement analysis",
      "Step 2: Proposal & Documentation (3-5 days) - Custom solution design",
      "Step 3: Compliance Setup (5-7 days) - All statutory registrations",
      "Step 4: System Integration (3-4 days) - Technology platform setup",
      "Step 5: Team Deployment (7-14 days) - Resource mobilization",
      "Step 6: Ongoing Support - 24/7 dedicated account management",
      "Emergency deployment available within 72 hours for critical needs",
      "Dedicated project manager assigned for seamless coordination"
    ],
    stats: [
      { label: "Standard Deployment", value: "2-3 weeks" },
      { label: "Emergency Deployment", value: "72 hours" },
      { label: "Client Onboarding Success", value: "100%" },
      { label: "Project Completion Rate", value: "99.5%" }
    ]
  }
};

export default function ConversationalContent({ topic = 'overview' }: ConversationalContentProps) {
  const content = conversationalSections[topic];
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Question-style heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6">
              <span className="mr-2">💡</span>
              Expert Answer
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              {content.question}
            </h2>
          </div>
          
          {/* Answer content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <p className="text-lg leading-8 text-gray-700 mb-8">
                {content.answer}
              </p>
              
              {/* Key Points */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Key Advantages
                  </h3>
                  <ul className="space-y-3">
                    {content.keyPoints.slice(0, Math.ceil(content.keyPoints.length / 2)).map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-sm text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    Additional Benefits
                  </h3>
                  <ul className="space-y-3">
                    {content.keyPoints.slice(Math.ceil(content.keyPoints.length / 2)).map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-sm text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="h-5 w-5 text-orange-600 mr-2" />
                  Proven Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {content.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-5 w-5 mr-2" />
              <span>Ready to transform your workforce?</span>
              <span className="ml-2 text-blue-100">→</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Contact our experts for a free consultation: <strong>+91-0124-2340139</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export utility function to get conversational content for specific topics
export const getConversationalContent = (topic: keyof typeof conversationalSections) => {
  return conversationalSections[topic];
};

// Export topics for easy reference
export const conversationalTopics = Object.keys(conversationalSections) as Array<keyof typeof conversationalSections>; 