import { Calculator, Map, Clock, PlayCircle, FileText, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ElevenLabsConvai from './ElevenLabsConvai';

export default function InteractiveElements() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [email, setEmail] = useState('');
  const [downloadReady, setDownloadReady] = useState(false);

  // Calculator state
  const [calculatorState, setCalculatorState] = useState({
    employeeCount: 50,
    serviceType: 'payroll',
    location: 'metro',
  });

  // Sample data for India map coverage - percentage of coverage by region
  const regionCoverage = {
    'North India': 95,
    'South India': 90,
    'East India': 85,
    'West India': 95,
    'Central India': 80,
    'North East': 70,
  };

  // Onboarding timeline steps
  const onboardingSteps = [
    { name: 'Initial Consultation', duration: '1-2 days', description: 'Understand your requirements and challenges' },
    { name: 'Proposal & Documentation', duration: '3-5 days', description: 'Custom solution design and paperwork completion' },
    { name: 'Compliance Setup', duration: '5-7 days', description: 'PF/ESI registration and statutory compliance setup' },
    { name: 'System Integration', duration: '3-4 days', description: 'Technology platform setup and integration' },
    { name: 'Team Deployment', duration: '7-14 days', description: 'Resource mobilization and deployment' },
    { name: 'Ongoing Support', duration: 'Continuous', description: '24/7 dedicated account management and compliance support' },
  ];

  // Function to handle calculator changes
  const handleCalculatorChange = (field: string, value: string | number) => {
    setCalculatorState({
      ...calculatorState,
      [field]: value
    });
  };

  // Function to calculate approximate monthly cost
  const calculateMonthlyCost = () => {
    let baseCost = 0;
    
    // Base cost by service type
    if (calculatorState.serviceType === 'payroll') {
      baseCost = 350; // ₹350 per employee for payroll
    } else if (calculatorState.serviceType === 'staffing') {
      baseCost = 1500; // ₹1500 per employee for staffing
    } else if (calculatorState.serviceType === 'recruitment') {
      // For recruitment, we'll calculate differently (e.g., as percentage of CTC)
      return `${(8.33).toFixed(1)}% of CTC`;
    }
    
    // Location multiplier
    const locationMultiplier = calculatorState.location === 'metro' ? 1.2 : 1;
    
    // Scale discount based on volume
    let volumeDiscount = 1;
    if (calculatorState.employeeCount > 200) volumeDiscount = 0.8;
    else if (calculatorState.employeeCount > 100) volumeDiscount = 0.85;
    else if (calculatorState.employeeCount > 50) volumeDiscount = 0.9;
    
    const totalMonthlyCost = baseCost * calculatorState.employeeCount * locationMultiplier * volumeDiscount;
    
    if (calculatorState.serviceType === 'recruitment') {
      return `${(8.33).toFixed(1)}% of CTC`;
    } else {
      return `₹${Math.round(totalMonthlyCost).toLocaleString('en-IN')} per month`;
    }
  };

  // Function to handle lead magnet subscription
  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this email to your backend
    // For now, we'll simulate success
    setDownloadReady(true);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Interactive Tools</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore How We Can Help Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Use these tools to better understand our services, coverage, and how we can support your workforce needs across India.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1 rounded-xl bg-gray-100 p-1">
            <button
              className={`flex items-center rounded-lg py-2 px-4 text-sm font-medium ${
                activeTab === 'calculator' ? 'bg-white shadow text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('calculator')}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Cost Calculator
            </button>
            <button
              className={`flex items-center rounded-lg py-2 px-4 text-sm font-medium ${
                activeTab === 'map' ? 'bg-white shadow text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('map')}
            >
              <Map className="mr-2 h-5 w-5" />
              Coverage Map
            </button>
            <button
              className={`flex items-center rounded-lg py-2 px-4 text-sm font-medium ${
                activeTab === 'timeline' ? 'bg-white shadow text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('timeline')}
            >
              <Clock className="mr-2 h-5 w-5" />
              Onboarding Timeline
            </button>
            <button
              className={`flex items-center rounded-lg py-2 px-4 text-sm font-medium ${
                activeTab === 'video' ? 'bg-white shadow text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('video')}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Explainer Video
            </button>
            <button
              className={`flex items-center rounded-lg py-2 px-4 text-sm font-medium ${
                activeTab === 'download' ? 'bg-white shadow text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('download')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Free Resources
            </button>
            <button
              className={`flex items-center rounded-lg py-2 px-4 text-sm font-medium ${
                activeTab === 'chat' ? 'bg-white shadow text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              AI Assistant
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Calculator Content */}
          {activeTab === 'calculator' && (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-gray-900">Estimate Your Workforce Management Costs</h3>
              <p className="mt-2 text-gray-600">Adjust the parameters below to get an approximate cost for our services.</p>
              
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="employee-count" className="block text-sm font-medium text-gray-700">
                    Number of Employees
                  </label>
                  <input
                    type="range"
                    id="employee-count"
                    min="10"
                    max="500"
                    step="10"
                    value={calculatorState.employeeCount}
                    onChange={(e) => handleCalculatorChange('employeeCount', parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>10</span>
                    <span className="font-medium text-blue-600">{calculatorState.employeeCount}</span>
                    <span>500+</span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                  <select
                    id="service-type"
                    value={calculatorState.serviceType}
                    onChange={(e) => handleCalculatorChange('serviceType', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="payroll">Payroll Processing & Compliance</option>
                    <option value="staffing">Contract Staffing</option>
                    <option value="recruitment">Permanent Recruitment</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Primary Location
                  </label>
                  <select
                    id="location"
                    value={calculatorState.location}
                    onChange={(e) => handleCalculatorChange('location', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="metro">Metro Cities (Delhi, Mumbai, Bangalore, etc.)</option>
                    <option value="non-metro">Non-Metro Cities & Towns</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="rounded-md bg-blue-50 px-6 py-4 text-center">
                    <p className="text-sm font-medium text-blue-700">Estimated Cost</p>
                    <p className="mt-1 text-2xl font-bold text-blue-900">{calculateMonthlyCost()}</p>
                    <p className="mt-1 text-xs text-blue-600">*Indicative pricing, may vary based on specific requirements</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Detailed Quote
                </Link>
              </div>
            </div>
          )}

          {/* Map Content */}
          {activeTab === 'map' && (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-gray-900">Our Pan-India Coverage</h3>
              <p className="mt-2 text-gray-600">We operate across all major regions of India with specialized teams for local compliance.</p>
              
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg">
                  <div className="flex h-full items-center justify-center bg-gray-100 p-4">
                    <div className="relative h-64 w-56">
                      {/* Simple silhouette map of India - in a real app, you would use a proper SVG map */}
                      <div className="flex h-full w-full items-center justify-center text-gray-400">
                        <span className="text-center text-lg font-medium">India Map Visualization</span>
                        {/* This would be replaced with an actual interactive SVG map */}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Regional Coverage</h4>
                  <div className="mt-4 space-y-4">
                    {Object.entries(regionCoverage).map(([region, percentage]) => (
                      <div key={region}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{region}</span>
                          <span className="text-sm font-medium text-blue-600">{percentage}%</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-600"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900">Key Operational Cities</h4>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {['Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad'].map((city) => (
                        <div key={city} className="flex items-center">
                          <div className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                          <span className="text-sm text-gray-700">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-md bg-blue-50 p-4">
                <p className="text-sm text-blue-700">
                  With offices in 8 major cities and service partners in 25+ cities, we provide comprehensive coverage across India, ensuring local expertise and compliance knowledge in every state.
                </p>
              </div>
            </div>
          )}

          {/* Timeline Content */}
          {activeTab === 'timeline' && (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-gray-900">Client Onboarding Process</h3>
              <p className="mt-2 text-gray-600">Our streamlined process gets your workforce management up and running quickly and efficiently.</p>
              
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {onboardingSteps.map((step, stepIdx) => (
                      <li key={step.name}>
                        <div className="relative pb-8">
                          {stepIdx !== onboardingSteps.length - 1 ? (
                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-blue-200" aria-hidden="true" />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                                {stepIdx + 1}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 py-1.5">
                              <div className="flex items-center justify-between">
                                <h4 className="text-base font-medium text-gray-900">{step.name}</h4>
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                  {step.duration}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          )}

          {/* Video Content */}
          {activeTab === 'video' && (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-gray-900">How Apex Helps Your Workforce Thrive</h3>
              <p className="mt-2 text-gray-600">Watch our short video explaining how our services can transform your workforce management.</p>
              
              <div className="mt-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <div className="flex h-64 items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <PlayCircle className="mx-auto h-16 w-16 text-blue-600" />
                    <p className="mt-4 text-gray-700">Video: "How Apex Helps Your Workforce Thrive in India"</p>
                    <p className="mt-2 text-sm text-gray-500">Duration: 3:45 minutes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-md bg-blue-50 p-4 text-center">
                  <h4 className="font-medium text-blue-900">Compliance Expertise</h4>
                  <p className="mt-2 text-sm text-blue-700">Navigate complex labour laws with our guidance</p>
                </div>
                <div className="rounded-md bg-blue-50 p-4 text-center">
                  <h4 className="font-medium text-blue-900">Pan-India Reach</h4>
                  <p className="mt-2 text-sm text-blue-700">Operations across 25+ cities with local expertise</p>
                </div>
                <div className="rounded-md bg-blue-50 p-4 text-center">
                  <h4 className="font-medium text-blue-900">Industry Experience</h4>
                  <p className="mt-2 text-sm text-blue-700">20+ years serving India's leading businesses</p>
                </div>
              </div>
            </div>
          )}

          {/* Download Content */}
          {activeTab === 'download' && (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-gray-900">Free Resources & Guides</h3>
              <p className="mt-2 text-gray-600">Access valuable compliance resources and industry insights.</p>
              
              {downloadReady ? (
                <div className="mt-8 rounded-md bg-green-50 p-6 text-center">
                  <h4 className="text-lg font-medium text-green-800">Thank You!</h4>
                  <p className="mt-2 text-green-700">Your download is ready. We've also sent a copy to your email.</p>
                  <div className="mt-6">
                    <a
                      href="#download"
                      className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500"
                      onClick={(e) => e.preventDefault()} // In a real app, this would trigger the download
                    >
                      Download PDF
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-green-600">
                    You'll also receive our monthly compliance newsletter with the latest updates on Indian labour laws.
                  </p>
                </div>
              ) : (
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg bg-gray-100">
                      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <FileText className="h-12 w-12 text-blue-600" />
                        <h4 className="mt-4 text-lg font-medium text-gray-900">5 Hiring Mistakes to Avoid in India</h4>
                        <p className="mt-2 text-sm text-gray-600">
                          Learn the common pitfalls in the Indian hiring market and how to avoid them.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <form onSubmit={handleLeadMagnetSubmit} className="flex h-full flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Get Your Free Guide</h4>
                        <p className="mt-2 text-sm text-gray-600">
                          Enter your email to receive our comprehensive guide on hiring best practices in India.
                        </p>
                        
                        <div className="mt-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div className="mt-4">
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="consent"
                                name="consent"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="consent" className="text-gray-500">
                                I agree to receive compliance updates and newsletters. You can unsubscribe at any time.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Download Free Guide
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h4 className="font-medium text-gray-900">Other Available Resources</h4>
                <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    'PF-ESI Compliance Checklist',
                    'State-wise Labour Law Guide',
                    'Payroll Process Optimization',
                    'Employee Onboarding Best Practices',
                  ].map((resource) => (
                    <li key={resource} className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-blue-600" />
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-500">{resource}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Chat Assistant Content */}
          {activeTab === 'chat' && (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-gray-900">AI-Powered Voice Assistant</h3>
              <p className="mt-2 text-gray-600">Get immediate voice-based answers to your questions about our services, compliance solutions, and workforce management options.</p>
              
              <div className="mt-8">
                <ElevenLabsConvai agentId="hdYVmisQI4kAcZwuyCtC" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
