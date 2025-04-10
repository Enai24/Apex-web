import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AI_SOLUTIONS, AI_CASE_STUDIES, generateAIServiceSchema } from '../utils/ai-workforce';
import { SEO } from '../utils/seo';

export default function AISolutionPage() {
  const { solutionId } = useParams<{ solutionId: string }>();
  
  // Find the solution data
  const solution = AI_SOLUTIONS.find(s => s.id === solutionId);
  
  // If solution doesn't exist, show error state
  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Solution Not Found</h1>
          <p className="text-gray-600 mb-6">The AI solution you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/ai-workforce-solutions" 
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Solutions
          </Link>
        </div>
      </div>
    );
  }

  // Find relevant case studies
  const relevantCaseStudies = AI_CASE_STUDIES.filter(cs => 
    cs.id === 'techspire' || // Include at least one case study for every solution
    (cs.solution && cs.solution.toLowerCase().includes(solution.id.replace(/-/g, ' ')))
  );

  // Find related solutions (excluding current one)
  const relatedSolutions = AI_SOLUTIONS
    .filter(s => s.id !== solution.id)
    .slice(0, 3);

  // Generate structured data
  const baseUrl = "https://apexenterprises.net";
  const structuredData = generateAIServiceSchema(solution, baseUrl);
  
  // Get solution-specific background image
  const getSolutionHeroImage = (id: string) => {
    switch(id) {
      case 'ai-talent-matching':
        return "https://images.unsplash.com/photo-1642059484102-ad9142ea2eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      case 'predictive-analytics':
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      case 'automated-compliance':
        return "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      case 'intelligent-payroll':
        return "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      case 'ai-recruitment-assistant':
        return "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      case 'performance-intelligence':
        return "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80";
      case 'talent-market-intelligence':
        return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80";
      case 'virtual-workforce':
        return "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      default:
        return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    }
  };

  // Get solution-specific CTA image
  const getSolutionCtaImage = (id: string) => {
    switch(id) {
      case 'predictive-analytics':
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      case 'automated-compliance':
        return "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      default:
        return "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    }
  };

  return (
    <>
      <SEO
        title={`${solution.title} | AI Workforce Solutions | Apex Enterprises`}
        description={`${solution.description} Proven results across India with measurable improvements in efficiency and performance.`}
        schema={structuredData}
      />
      
      <div className="bg-white">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="absolute inset-0 -z-10">
            <img
              src={getSolutionHeroImage(solution.id)}
              alt={`${solution.title} background`}
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="flex items-center gap-x-3">
                <Link 
                  to="/ai-workforce-solutions"
                  className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/10 hover:bg-indigo-600/20"
                >
                  <ArrowLeft className="mr-1 h-3 w-3" />
                  AI Solutions
                </Link>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {solution.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {solution.description}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Benefits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl">
              Our AI-powered {solution.title.toLowerCase()} delivers measurable improvements for businesses across India, with proven results in multiple industries.
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        {benefit}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution-specific content */}
        {solution.id === 'predictive-analytics' && (
          <div className="bg-indigo-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">ADVANCED TECHNOLOGY</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How Our Predictive Analytics Works
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our proprietary AI algorithms analyze historical workforce data to predict future trends with remarkable accuracy.
                </p>
              </div>
              
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    title: "Data Collection & Analysis",
                    description: "Our system collects and analyzes workforce data from multiple sources, including HRMS, attendance, performance reviews, and industry benchmarks."
                  },
                  {
                    title: "Pattern Recognition",
                    description: "Advanced machine learning algorithms identify patterns and correlations that human analysts might miss, detecting early warning signs."
                  },
                  {
                    title: "Actionable Predictions",
                    description: "The system delivers specific, actionable predictions with clear confidence levels and recommended interventions."
                  }
                ].map((step, idx) => (
                  <div key={idx} className="relative rounded-2xl bg-white shadow-sm p-8">
                    <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {solution.id === 'automated-compliance' && (
          <div className="bg-indigo-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">PAN-INDIA COVERAGE</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Compliance Automation
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AI compliance system covers all 28 Indian states and 8 union territories, ensuring your business stays compliant with all local labor laws.
                </p>
              </div>
              
              <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Key Compliance Areas Covered</h3>
                  <ul className="space-y-4">
                    {[
                      "Shops & Establishments Acts for all states",
                      "Minimum Wages & Payment of Wages",
                      "PF, ESI, Professional Tax & Labor Welfare Fund",
                      "Contract Labor Regulation & Abolition",
                      "State-specific labor laws & notifications",
                      "Maternity Benefits & Sexual Harassment Prevention",
                      "Working hours, overtime & leave regulations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Real-time Monitoring & Alerts</h3>
                  <p className="text-gray-600 mb-6">
                    Our system continuously monitors regulatory changes across all jurisdictions and automatically alerts you to:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Upcoming filing deadlines with advance reminders",
                      "Changes in labor laws affecting your operations",
                      "Compliance gaps requiring immediate attention",
                      "Document expiration dates and renewal requirements",
                      "Regional regulatory changes affecting multiple locations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Case studies section */}
        {relevantCaseStudies.length > 0 && (
          <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Success Stories
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  See how our {solution.title.toLowerCase()} has transformed businesses across India.
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {relevantCaseStudies.map((caseStudy) => (
                  <div key={caseStudy.id} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-x-4">
                        <div className="text-xs leading-6 text-indigo-600">
                          {caseStudy.industry}
                        </div>
                        <div className="text-xs leading-6 text-gray-500">
                          {caseStudy.location}
                        </div>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        {caseStudy.company}
                      </h3>
                      <p className="mt-2 line-clamp-1 text-sm leading-6 text-gray-600">
                        {caseStudy.challenge}
                      </p>
                      <div className="mt-4 flex flex-col gap-y-2">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex gap-x-2">
                            <CheckCircle2 className="h-5 w-5 flex-none text-green-500" />
                            <p className="text-sm leading-6 text-gray-600">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-100 p-3 flex justify-center">
                      <Link 
                        to={`/case-studies/${caseStudy.id}`}
                        className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Read the full case study <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related solutions section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related AI Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore other intelligent workforce solutions from Apex Enterprises
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {relatedSolutions.map((relatedSolution) => (
              <article key={relatedSolution.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-24 lg:pt-40">
                <img
                  src={getSolutionHeroImage(relatedSolution.id)}
                  alt={relatedSolution.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="mt-3 text-xl font-semibold leading-6 text-white">
                  <Link to={`/ai-workforce-solutions/${relatedSolution.id}`}>
                    <span className="absolute inset-0" />
                    {relatedSolution.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300 line-clamp-3">
                  {relatedSolution.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-1">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    AI Solution
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-indigo-50">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-indigo-600 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to transform your workforce?
                </h2>
                <p className="mt-6 text-lg leading-8 text-indigo-100">
                  Implement our {solution.title.toLowerCase()} and see measurable improvements in efficiency and performance.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    to="/contact"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Request a demo
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
                  src={getSolutionCtaImage(solution.id)}
                  alt={`${solution.title} visualization`}
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