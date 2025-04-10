import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, MessageSquare, Calendar, Check, FileText, BarChart, Search } from 'lucide-react';
import { SEO } from '../utils/seo';
import { 
  VOICE_CALLING_FEATURES, 
  DEMO_VOICE_CONVERSATIONS, 
  VoiceCallingFeature, 
  VoiceConversationCard,
  generateVoiceCallingSchema
} from '../utils/ai-workforce';

export default function AIVoiceConnect() {
  const [activeTab, setActiveTab] = useState<'features' | 'demo' | 'pricing'>('features');
  const [languageFilter, setLanguageFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [interestFilter, setInterestFilter] = useState<string>('');
  
  // Schema for SEO
  const baseUrl = 'https://apexenterprises.net';
  const schema = generateVoiceCallingSchema(baseUrl);

  // Filter demo conversations based on filters
  const filteredConversations = DEMO_VOICE_CONVERSATIONS.filter(conversation => {
    if (languageFilter && conversation.languageSpoken !== languageFilter) {
      return false;
    }
    if (statusFilter && conversation.status !== statusFilter) {
      return false;
    }
    if (interestFilter && conversation.interestLevel !== interestFilter) {
      return false;
    }
    return true;
  });

  // Get unique values for filter dropdowns
  const languages = [...new Set(DEMO_VOICE_CONVERSATIONS.map(c => c.languageSpoken))];
  const statuses = [...new Set(DEMO_VOICE_CONVERSATIONS.map(c => c.status))];
  const interestLevels = [...new Set(DEMO_VOICE_CONVERSATIONS.map(c => c.interestLevel))];

  return (
    <>
      <SEO
        title="AI Voice Calling Agent | Apex Enterprises"
        description="Conversational AI system that conducts initial candidate screening calls, schedules interviews, and answers common queries in multiple Indian languages."
        schema={schema}
      />
      
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="AI Voice Calling background"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#features" className="inline-flex space-x-6">
                  <span className="rounded-full bg-purple-600/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-600 ring-1 ring-inset ring-purple-600/10">
                    New AI Tool
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Apex VoiceConnect™</span>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI-Powered <span className="text-purple-600">Voice Calling Agent</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our conversational AI system conducts initial candidate screening calls, handles scheduling, and responds to queries in multiple Indian languages with natural-sounding voice.
              </p>
              
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#demo"
                  onClick={() => setActiveTab('demo')}
                  className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Try interactive demo
                </a>
                <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="relative rounded-xl border border-purple-100 bg-white/80 backdrop-blur-sm shadow-2xl ring-1 ring-gray-900/10 overflow-hidden h-[420px] w-[380px]">
                  {/* Phone mockup */}
                  <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-purple-600 to-indigo-700 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold">Apex VoiceConnect™</div>
                  </div>
                  
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full bg-purple-100 flex items-center justify-center">
                    <Bot className="h-14 w-14 text-purple-700" />
                  </div>
                  
                  <div className="absolute top-64 w-full text-center">
                    <div className="text-lg font-medium text-gray-900">AI Calling in Progress</div>
                    <div className="text-sm text-gray-500">Speaking with Rahul Sharma</div>
                    <div className="mt-4 flex justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <PhoneIcon className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    
                    <div className="mt-6 w-full px-6">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-purple-600"></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <div>0:00</div>
                        <div>7:45</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {[
                { name: 'Features', id: 'features' },
                { name: 'Interactive Demo', id: 'demo' },
                { name: 'Pricing', id: 'pricing' },
              ].map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`
                    whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                    ${activeTab === tab.id ? 
                      'border-purple-600 text-purple-600' : 
                      'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                  `}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Features Section */}
        {activeTab === 'features' && (
          <div id="features" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-purple-600">INTELLIGENT CALLING</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How AI Transforms Your Recruitment Calls
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AI-powered voice calling agent conducts thousands of candidate screening calls with natural-sounding voice, saving your recruiters countless hours while improving the candidate experience.
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                {VOICE_CALLING_FEATURES.map((feature, index) => (
                  <VoiceCallingFeature key={index} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        {activeTab === 'features' && (
          <div className="bg-purple-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Proven Results Across India
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AI Voice Calling technology has delivered measurable improvements for businesses across all Indian states and industries.
                </p>
              </div>
              
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                  {[
                    { value: "78%", name: "Time Saved", description: "Reduction in time spent on initial screening calls" },
                    { value: "94%", name: "Candidate Satisfaction", description: "Positive candidate feedback on AI interaction" },
                    { value: "1.2M+", name: "Calls Conducted", description: "AI-powered calls made across India" }
                  ].map((stat) => (
                    <div key={stat.name} className="flex flex-col gap-y-3 border-l border-purple-200 pl-6">
                      <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-purple-600">
                        {stat.value}
                      </dd>
                      <dd className="text-sm text-gray-500">{stat.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* How It Works */}
        {activeTab === 'features' && (
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-purple-600">ADVANCED TECHNOLOGY</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How VoiceConnect™ Works
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AI voice agent combines natural language processing, speech synthesis, and behavioral analytics to deliver a seamless experience for candidates.
                </p>
              </div>
              
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-7xl">
                <ol className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {[
                    {
                      title: "Initial Contact",
                      description: "AI agent calls candidates from your shortlist, introducing itself and the role.",
                      icon: <PhoneIcon className="h-7 w-7 text-purple-600" />
                    },
                    {
                      title: "Qualification Questions",
                      description: "Asks pre-defined screening questions and follows up based on responses.",
                      icon: <MessageSquare className="h-7 w-7 text-purple-600" />
                    },
                    {
                      title: "Sentiment Analysis",
                      description: "Evaluates candidate interest and engagement throughout the call.",
                      icon: <BarChart className="h-7 w-7 text-purple-600" />
                    },
                    {
                      title: "Next Steps",
                      description: "Schedules interviews for qualified candidates or provides feedback.",
                      icon: <Calendar className="h-7 w-7 text-purple-600" />
                    }
                  ].map((step, idx) => (
                    <li key={idx} className="relative flex flex-col items-start">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                        {step.icon}
                      </div>
                      <p className="mt-5 text-xl font-semibold leading-7 text-gray-900">{step.title}</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                      {idx < 3 && (
                        <div className="absolute top-7 left-14 hidden h-0.5 w-16 bg-purple-200 lg:block" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Demo Section */}
        {activeTab === 'demo' && (
          <div id="demo" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-purple-600">INTERACTIVE DEMO</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Experience AI-Powered Calling
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  See how our AI voice agent conducts candidate screening calls and gathers insights. Explore real conversation samples and try filtering the results.
                </p>
              </div>
              
              <div className="mx-auto mt-16 max-w-7xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
                      
                      {/* Language filter */}
                      <div className="mb-6">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <select
                          id="language"
                          name="language"
                          className="block w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                          value={languageFilter}
                          onChange={(e) => setLanguageFilter(e.target.value)}
                        >
                          <option value="">All Languages</option>
                          {languages.map((language) => (
                            <option key={language} value={language}>
                              {language}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      {/* Status filter */}
                      <div className="mb-6">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="block w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                        >
                          <option value="">All Statuses</option>
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      {/* Interest Level filter */}
                      <div className="mb-6">
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                          Interest Level
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          className="block w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                          value={interestFilter}
                          onChange={(e) => setInterestFilter(e.target.value)}
                        >
                          <option value="">All Interest Levels</option>
                          {interestLevels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      {/* Reset filters button */}
                      <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        onClick={() => {
                          setLanguageFilter('');
                          setStatusFilter('');
                          setInterestFilter('');
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                  
                  {/* Results grid */}
                  <div className="lg:col-span-3">
                    <div className="border-b border-gray-200 pb-5 mb-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">
                          Candidate Conversations
                        </h2>
                        <p className="text-sm text-gray-500">
                          Showing {filteredConversations.length} of {DEMO_VOICE_CONVERSATIONS.length} conversations
                        </p>
                      </div>
                    </div>
                    
                    {filteredConversations.length === 0 ? (
                      <div className="text-center py-12">
                        <Search className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-semibold text-gray-900">No results found</h3>
                        <p className="mt-1 text-sm text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {filteredConversations.map((conversation) => (
                          <VoiceConversationCard key={conversation.id} conversation={conversation} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {activeTab === 'pricing' && (
          <div id="pricing" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Choose the plan that fits your business needs. All plans include access to our AI voice calling technology.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">Monthly subscription</h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Access to our AI Voice Calling Agent with flexible call volumes and features to meet your recruitment needs.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-purple-600">What's included</h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    {[
                      "Multi-language support (8 Indian languages)",
                      "Automated call scheduling and follow-ups",
                      "Sentiment analysis and interest detection",
                      "Real-time dashboard and analytics",
                      "Custom screening questions",
                      "ATS integration"
                    ].map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Pay once, get unlimited calls</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">₹40,000</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/month</span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                      >
                        Get started today
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Enterprise plans with custom pricing also available. <a href="/contact" className="text-purple-600 hover:text-purple-500">Contact us</a> for more information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-purple-700 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 text-purple-200">
                Ready to get started?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Transform Your Recruitment Process Today
              </p>
              <p className="mt-6 text-lg leading-8 text-purple-200">
                Join the hundreds of companies across India that are using Apex VoiceConnect™ to streamline their recruitment process and enhance candidate experience.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request a Demo
                </a>
                <a href="#features" onClick={() => setActiveTab('features')} className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Simple Phone Icon component
const PhoneIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}; 