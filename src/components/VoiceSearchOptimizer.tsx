import React from 'react';
;
import { Mic, Search, MessageCircle, MapPin } from 'lucide-react';
import { LocalSEOUtils } from '../utils/localSEO';

interface VoiceSearchOptimizerProps {
  locationKey?: keyof typeof LocalSEOUtils.APEX_LOCATIONS;
  service?: string;
  showNaturalLanguageQueries?: boolean;
}

export default function VoiceSearchOptimizer({ 
  locationKey = 'gurgaon', 
  service,
  showNaturalLanguageQueries = true 
}: VoiceSearchOptimizerProps) {
  const location = LocalSEOUtils.APEX_LOCATIONS[locationKey];
  const keywords = LocalSEOUtils.LOCAL_KEYWORDS[locationKey];

  // Voice search optimized content with natural language patterns
  const voiceSearchContent = {
    whoQuestions: [
      {
        query: `Who are the best manpower consultants in ${location.address.city}?`,
        answer: `Apex Enterprises is considered the leading manpower consultancy in ${location.address.city}, Haryana. With over 20 years of experience since 2002, we've served 500+ companies across Delhi NCR with zero compliance violations. Our comprehensive services include security, housekeeping, placement, and facility management.`,
        structured: {
          businessName: "Apex Enterprises",
          location: `${location.address.city}, Haryana`,
          experience: "20+ years since 2002",
          clientBase: "500+ companies",
          complianceRecord: "Zero violations",
          services: ["Security", "Housekeeping", "Placement", "Facility Management"]
        }
      },
      {
        query: `Who provides security services in ${location.address.city}?`,
        answer: `Apex Enterprises provides professional security services in ${location.address.city} and across Haryana. We offer both armed and unarmed security solutions with PSARA compliance, 24/7 monitoring, and trained personnel for corporate offices, industrial facilities, and residential complexes.`,
        structured: {
          serviceType: "Security Services",
          coverage: `${location.address.city} and Haryana`,
          certifications: ["PSARA compliant"],
          availability: "24/7 monitoring",
          clientTypes: ["Corporate offices", "Industrial facilities", "Residential complexes"]
        }
      }
    ],
    
    whatQuestions: [
      {
        query: `What services does Apex Enterprises provide in ${location.address.city}?`,
        answer: `Apex Enterprises provides comprehensive workforce solutions in ${location.address.city} including manpower consultancy, security services, housekeeping, facility management, labour contracting, placement services, and real estate support. We serve automotive, manufacturing, IT, and corporate sectors with complete statutory compliance.`,
        structured: {
          services: location.categories,
          industries: ["Automotive", "Manufacturing", "IT", "Corporate"],
          compliance: "Complete statutory compliance"
        }
      },
      {
        query: `What makes Apex Enterprises different from other consultancies in ${location.address.city}?`,
        answer: `Apex Enterprises stands out with 20+ years of local expertise in ${location.address.city}, zero compliance violations, AI-powered candidate matching, 24/7 support, and comprehensive insurance coverage. We're ISO 9001:2015 certified with MSME registration and serve 500+ satisfied clients across Haryana.`,
        structured: {
          differentiators: [
            "20+ years local expertise",
            "Zero compliance violations", 
            "AI-powered matching",
            "24/7 support",
            "Comprehensive insurance"
          ],
          certifications: ["ISO 9001:2015", "MSME registered"],
          clientBase: "500+ satisfied clients"
        }
      }
    ],
    
    whereQuestions: [
      {
        query: `Where can I find reliable housekeeping services in ${location.address.city}?`,
        answer: `You can find reliable housekeeping services at Apex Enterprises, located at ${location.address.street}, ${location.address.city}. We provide professional housekeeping staff for offices, factories, hospitals, and residential complexes across ${location.serviceAreas.join(', ')}. Call us at ${location.phone} for immediate service.`,
        structured: {
          businessAddress: location.address,
          phone: location.phone,
          serviceAreas: location.serviceAreas,
          clientTypes: ["Offices", "Factories", "Hospitals", "Residential complexes"]
        }
      }
    ],
    
    howQuestions: [
      {
        query: `How to hire manpower consultants in ${location.address.city}?`,
        answer: `To hire manpower consultants in ${location.address.city}, contact Apex Enterprises at ${location.phone} or visit our office at ${location.address.street}. We provide free consultation, requirement analysis, candidate sourcing, background verification, and ongoing support with 100% compliance guarantee.`,
        structured: {
          process: [
            "Free consultation",
            "Requirement analysis", 
            "Candidate sourcing",
            "Background verification",
            "Ongoing support"
          ],
          guarantee: "100% compliance",
          contact: {
            phone: location.phone,
            address: location.address.street
          }
        }
      }
    ],
    
    nearMeQueries: [
      {
        query: `Security services near me in ${location.address.city}`,
        answer: `Apex Enterprises provides security services near you in ${location.address.city} and surrounding areas including ${location.serviceAreas.slice(1, 4).join(', ')}. Our local security teams are available 24/7 with rapid response times and PSARA compliance.`,
        structured: {
          serviceType: "Security services",
          coverage: location.serviceAreas,
          availability: "24/7",
          features: ["Rapid response", "PSARA compliance"]
        }
      },
      {
        query: `Manpower consultants near ${location.address.city} industrial area`,
        answer: `Apex Enterprises serves the ${location.address.city} industrial area with specialized manpower solutions for manufacturing and automotive sectors. We're located at ${location.address.street} and provide skilled workers, supervisors, and technical staff with complete documentation.`,
        structured: {
          specialization: ["Manufacturing", "Automotive"],
          workerTypes: ["Skilled workers", "Supervisors", "Technical staff"],
          documentation: "Complete",
          location: location.address.street
        }
      }
    ]
  };

  // Generate FAQ schema for voice search
  const voiceSearchFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...voiceSearchContent.whoQuestions,
      ...voiceSearchContent.whatQuestions, 
      ...voiceSearchContent.whereQuestions,
      ...voiceSearchContent.howQuestions
    ].map(item => ({
      "@type": "Question",
      "name": item.query,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // Generate speakable schema for voice assistants
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".voice-optimized-content", ".quick-answer", ".local-business-info"]
    }
  };

  return (
    <div className="voice-search-optimizer">
      {/* <Helmet> */}
        {/* Voice search specific meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="google-site-verification" content="voice-search-optimized" />
        
        {/* FAQ Schema for voice search */}
        <script type="application/ld+json">
          {JSON.stringify(voiceSearchFAQSchema)}
        </script>
        
        {/* Speakable content schema */}
        <script type="application/ld+json">
          {JSON.stringify(speakableSchema)}
        </script>
      {/* </Helmet> */}

      {showNaturalLanguageQueries && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6">
                <Mic className="mr-2 h-4 w-4" />
                Voice Search Optimized
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ask Us Anything About Workforce Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get instant answers to your questions about manpower, security, and facility management services in {location.address.city}
              </p>
            </div>

            {/* Quick Answers Section */}
            <div className="space-y-12">
              {/* Who Questions */}
              <div className="voice-optimized-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-blue-600" />
                  "Who" Questions
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {voiceSearchContent.whoQuestions.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                        <Search className="mr-2 h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        {item.query}
                      </h4>
                      <div className="quick-answer text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Questions */}
              <div className="voice-optimized-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-green-600" />
                  "What" Questions  
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {voiceSearchContent.whatQuestions.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                        <Search className="mr-2 h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        {item.query}
                      </h4>
                      <div className="quick-answer text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Where Questions */}
              <div className="voice-optimized-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-orange-600" />
                  "Where" & Location Questions
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[...voiceSearchContent.whereQuestions, ...voiceSearchContent.nearMeQueries].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                        <Search className="mr-2 h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        {item.query}
                      </h4>
                      <div className="quick-answer text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Questions */}
              <div className="voice-optimized-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-purple-600" />
                  "How" Questions
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                  {voiceSearchContent.howQuestions.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                        <Search className="mr-2 h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        {item.query}
                      </h4>
                      <div className="quick-answer text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Business Quick Info */}
            <div className="local-business-info mt-16 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Quick Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us Now</h4>
                  <p className="text-blue-600 text-lg font-medium">
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visit Our Office</h4>
                  <p className="text-gray-600">
                    {location.address.street}, {location.address.city}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Areas</h4>
                  <p className="text-gray-600">
                    {location.serviceAreas.slice(0, 3).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 