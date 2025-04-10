import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Search, Check, BarChart } from 'lucide-react';
import { SEO } from '../utils/seo';
import { 
  RESUME_SCREENING_FEATURES, 
  DEMO_RESUME_MATCHES, 
  ResumeScreeningFeature, 
  CandidateMatchCard,
  generateResumeScreeningSchema
} from '../utils/ai-workforce';

export default function AIResumeScreening() {
  const [activeTab, setActiveTab] = useState<'features' | 'demo' | 'pricing'>('features');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [location, setLocation] = useState<string>('');
  const [experience, setExperience] = useState<string>('');

  // Filter demo candidates based on search and filters
  const filteredCandidates = DEMO_RESUME_MATCHES.filter(candidate => {
    // Text search
    if (searchTerm && !candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !candidate.keySkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    
    // Skills filter
    if (selectedSkills.length > 0 && !candidate.keySkills.some(skill => selectedSkills.includes(skill))) {
      return false;
    }
    
    // Location filter
    if (location && candidate.location !== location) {
      return false;
    }
    
    // Experience filter
    if (experience) {
      const minExp = parseInt(experience.split('-')[0]);
      const maxExp = parseInt(experience.split('-')[1] || '100');
      if (candidate.experience < minExp || candidate.experience > maxExp) {
        return false;
      }
    }
    
    return true;
  });

  // Schema for SEO
  const baseUrl = 'https://apexenterprises.net';
  const schema = generateResumeScreeningSchema(baseUrl);
  
  // All skills from demo candidates for filter options
  const allSkills = [...new Set(DEMO_RESUME_MATCHES.flatMap(c => c.keySkills))];
  
  // All locations from demo candidates for filter options
  const allLocations = [...new Set(DEMO_RESUME_MATCHES.map(c => c.location))];

  return (
    <>
      <SEO
        title="AI Resume Screening | Apex Enterprises"
        description="Cut hiring time by 65% with our AI-powered resume screening technology. Automatically match candidates to jobs with 94% accuracy across all 28 Indian states."
        schema={schema}
      />
      
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#features" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    New AI Tool
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Apex IntelliHire™</span>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI-Powered <span className="text-indigo-600">Resume Screening</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Cut hiring time by 65% and identify the best candidates with 94% accuracy. Our AI analyzes thousands of resumes in minutes, matching skills, experience, and cultural fit.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Request Demo
                </Link>
                <a href="#demo" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                  Try Interactive Demo <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Resume Screening Dashboard"
                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {[
                { name: 'Features', value: 'features' },
                { name: 'Interactive Demo', value: 'demo' },
                { name: 'Pricing', value: 'pricing' },
              ].map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.value as any)}
                  className={`
                    whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                    ${activeTab === tab.value 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                  `}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Features Tab Content */}
        {activeTab === 'features' && (
          <div id="features" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">INTELLIGENT RECRUITING</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How AI Transforms Your Hiring Process
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AI-powered resume screening technology analyzes thousands of resumes in minutes, identifying the best candidates with precision that far exceeds traditional methods.
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                {RESUME_SCREENING_FEATURES.map((feature, index) => (
                  <ResumeScreeningFeature key={index} feature={feature} />
                ))}
              </div>
              
              <div className="mt-20 rounded-2xl bg-indigo-50 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-16">
                <div className="lg:w-0 lg:flex-1">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Ready to transform your hiring process?
                  </h3>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                    Join hundreds of leading Indian businesses already using our AI-powered resume screening to find the best talent faster.
                  </p>
                </div>
                <div className="mt-10 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demo Tab Content */}
        {activeTab === 'demo' && (
          <div id="demo" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">INTERACTIVE DEMO</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Experience AI-Powered Candidate Matching
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  See how our AI instantly identifies the best candidates for a Machine Learning Engineer position. Try filtering the results to see the AI in action.
                </p>
              </div>
              
              <div className="mx-auto mt-16 max-w-7xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
                      
                      {/* Search */}
                      <div className="mb-6">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                          Search
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type="text"
                            name="search"
                            id="search"
                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Skills or name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      {/* Skills filter */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Skills
                        </label>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {allSkills.map((skill) => (
                            <div key={skill} className="flex items-center">
                              <input
                                id={`skill-${skill}`}
                                name={`skill-${skill}`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                checked={selectedSkills.includes(skill)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedSkills([...selectedSkills, skill]);
                                  } else {
                                    setSelectedSkills(selectedSkills.filter(s => s !== skill));
                                  }
                                }}
                              />
                              <label htmlFor={`skill-${skill}`} className="ml-3 text-sm text-gray-600">
                                {skill}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Location filter */}
                      <div className="mb-6">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        >
                          <option value="">All Locations</option>
                          {allLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                          ))}
                        </select>
                      </div>
                      
                      {/* Experience filter */}
                      <div className="mb-6">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                          Experience
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                        >
                          <option value="">All Experience</option>
                          <option value="0-2">0-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="6-10">6+ years</option>
                        </select>
                      </div>
                      
                      {/* Reset filters button */}
                      <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedSkills([]);
                          setLocation('');
                          setExperience('');
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                  
                  {/* Results grid */}
                  <div className="lg:col-span-3">
                    <div className="mb-6 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {filteredCandidates.length} Machine Learning Engineer Candidates
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <BarChart className="mr-1 h-4 w-4" />
                        <span>Results ranked by match score</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {filteredCandidates.map((candidate) => (
                        <CandidateMatchCard key={candidate.candidateId} candidate={candidate} />
                      ))}
                      
                      {filteredCandidates.length === 0 && (
                        <div className="text-center py-12">
                          <h3 className="mt-2 text-lg font-medium text-gray-900">No candidates found</h3>
                          <p className="mt-1 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab Content */}
        {activeTab === 'pricing' && (
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">PRICING</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  AI Resume Screening Pricing Plans
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Choose a plan that fits your hiring needs, from startups to enterprises.
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
                {/* Starter Plan */}
                <div className="rounded-2xl p-8 ring-1 ring-gray-200 sm:p-10">
                  <h3 className="text-lg font-semibold leading-8 text-indigo-600">Starter</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">Perfect for startups and small businesses with occasional hiring needs.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">₹9,999</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Up to 50 resumes per month</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Basic skills matching</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Email support</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Standard data extraction</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-gray-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                </div>
                
                {/* Professional Plan */}
                <div className="-mt-4 -mb-4 rounded-2xl bg-indigo-600 p-8 ring-1 ring-indigo-600 sm:mx-8 sm:p-10">
                  <h3 className="text-lg font-semibold leading-8 text-white">Professional</h3>
                  <p className="mt-4 text-sm leading-6 text-indigo-200">Best for mid-sized companies with regular hiring requirements.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">₹24,999</span>
                    <span className="text-sm font-semibold leading-6 text-indigo-200">/month</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-indigo-200">
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      <span>Up to 200 resumes per month</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      <span>Advanced skills & cultural fit matching</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      <span>Priority email & phone support</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      <span>API integration with your ATS</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      <span>Multi-language support</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </Link>
                </div>
                
                {/* Enterprise Plan */}
                <div className="rounded-2xl p-8 ring-1 ring-gray-200 sm:p-10">
                  <h3 className="text-lg font-semibold leading-8 text-indigo-600">Enterprise</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">For large organizations with high-volume hiring needs across India.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Unlimited resumes</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Custom AI models for your industry</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Full HRMS integration</span>
                    </li>
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>Predictive analytics & reporting</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-gray-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA section */}
        <div className="bg-indigo-50">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-indigo-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to transform your hiring process?
                </h2>
                <p className="mt-6 text-lg leading-8 text-indigo-100">
                  Join hundreds of leading Indian businesses already using our AI-powered resume screening to find the best talent faster.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    to="/contact"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Request demo
                  </Link>
                  <Link
                    to="/ai-workforce-solutions"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80"
                  alt="HR team using AI screening tools"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 