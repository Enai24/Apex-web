import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, Users, DollarSign, CheckCircle, Download, Mail, Phone } from 'lucide-react';

export default function CostCalculator() {
  const [formData, setFormData] = useState({
    employeeCount: 10,
    positionType: 'skilled',
    location: 'delhi',
    duration: 12,
    includeCompliance: true,
    includeTraining: false
  });

  const [results, setResults] = useState(null);

  const positionRates = {
    'unskilled': { min: 12000, max: 18000 },
    'semiskilled': { min: 18000, max: 25000 },
    'skilled': { min: 25000, max: 35000 },
    'supervisory': { min: 35000, max: 50000 },
    'managerial': { min: 50000, max: 80000 }
  };

  const locationMultipliers = {
    'delhi': 1.2,
    'mumbai': 1.3,
    'bangalore': 1.1,
    'chennai': 1.0,
    'hyderabad': 1.0,
    'pune': 1.1,
    'others': 0.9
  };

  const calculateCosts = () => {
    const baseRate = positionRates[formData.positionType];
    const locationMultiplier = locationMultipliers[formData.location];
    
    const avgSalary = ((baseRate.min + baseRate.max) / 2) * locationMultiplier;
    const monthlySalaryTotal = avgSalary * formData.employeeCount;
    
    // Statutory costs (EPF 12%, ESI 3.25%, etc.)
    const statutoryCosts = monthlySalaryTotal * 0.2; // 20% of salary
    
    // Our service fee (8-12% typically)
    const serviceFee = monthlySalaryTotal * 0.1; // 10% of salary
    
    // Additional costs
    const complianceCost = formData.includeCompliance ? monthlySalaryTotal * 0.02 : 0;
    const trainingCost = formData.includeTraining ? formData.employeeCount * 2000 : 0;
    
    const monthlyTotal = monthlySalaryTotal + statutoryCosts + serviceFee + complianceCost + trainingCost;
    const annualTotal = monthlyTotal * 12;
    const contractTotal = monthlyTotal * formData.duration;

    setResults({
      avgSalary: Math.round(avgSalary),
      monthlySalaryTotal: Math.round(monthlySalaryTotal),
      statutoryCosts: Math.round(statutoryCosts),
      serviceFee: Math.round(serviceFee),
      complianceCost: Math.round(complianceCost),
      trainingCost: Math.round(trainingCost),
      monthlyTotal: Math.round(monthlyTotal),
      annualTotal: Math.round(annualTotal),
      contractTotal: Math.round(contractTotal)
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Contract Staffing Cost Calculator",
    "description": "Free online calculator to estimate contract staffing costs in India. Calculate salary, statutory costs, compliance fees, and total staffing expenses for 2025.",
    "url": "https://apexenterprises.net/resources/cost-calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser"
  };

  return (
    <>
      <Helmet>
        <title>Contract Staffing Cost Calculator (2025) | Free Online Tool</title>
        <meta name="description" content="Free contract staffing cost calculator for India. Estimate salary, EPF, ESI, compliance costs & total expenses. Get accurate 2025 rates instantly. No signup required!" />
        <meta name="keywords" content="contract staffing cost calculator, staffing cost calculator india, manpower cost calculator, salary cost calculator, staffing budget calculator, contract labor cost" />
        <link rel="canonical" href="https://apexenterprises.net/resources/cost-calculator" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Contract Staffing Cost Calculator (2025) | Free Online Tool" />
        <meta property="og:description" content="Free contract staffing cost calculator for India. Estimate salary, EPF, ESI, compliance costs & total expenses. Get accurate 2025 rates instantly." />
        <meta property="og:url" content="https://apexenterprises.net/resources/cost-calculator" />
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
                <span className="text-sm font-medium">Cost Planning Tool</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Contract Staffing Cost Calculator (2025)
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Free online calculator to estimate your contract staffing costs in India. Get accurate calculations 
                for salary, statutory costs, compliance fees, and total expenses based on 2025 market rates.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#calculator"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Calculating
                </a>
                <a href="#features" className="text-sm font-semibold leading-6 text-white">
                  How it Works <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Accurate Cost Estimation</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Most Comprehensive Staffing Cost Calculator in India
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Based on real market data from 500+ companies and updated for 2025 compliance requirements
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <DollarSign className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">Real Market Rates</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">2025 updated salary benchmarks</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">100% Compliance</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">EPF, ESI, PT included</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Users className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">All Skill Levels</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Unskilled to managerial</dd>
                </div>
                <div className="flex flex-col items-center text-center">
                  <dt className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-600 text-white mb-4">
                    <Download className="h-8 w-8" />
                  </dt>
                  <dd className="text-base font-semibold leading-7 text-gray-900">Instant Results</dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-600">Downloadable reports</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div id="calculator" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Calculate Your Contract Staffing Costs
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Enter your requirements to get accurate cost estimates
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Input Form */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Staffing Requirements</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Employees
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="1000"
                          value={formData.employeeCount}
                          onChange={(e) => setFormData({...formData, employeeCount: parseInt(e.target.value) || 1})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Position Type
                        </label>
                        <select
                          value={formData.positionType}
                          onChange={(e) => setFormData({...formData, positionType: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="unskilled">Unskilled (₹12,000-18,000)</option>
                          <option value="semiskilled">Semi-skilled (₹18,000-25,000)</option>
                          <option value="skilled">Skilled (₹25,000-35,000)</option>
                          <option value="supervisory">Supervisory (₹35,000-50,000)</option>
                          <option value="managerial">Managerial (₹50,000-80,000)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="mumbai">Mumbai (+30%)</option>
                          <option value="delhi">Delhi (+20%)</option>
                          <option value="bangalore">Bangalore (+10%)</option>
                          <option value="pune">Pune (+10%)</option>
                          <option value="chennai">Chennai (Base)</option>
                          <option value="hyderabad">Hyderabad (Base)</option>
                          <option value="others">Other Cities (-10%)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contract Duration (Months)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="60"
                          value={formData.duration}
                          onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value) || 1})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="compliance"
                            checked={formData.includeCompliance}
                            onChange={(e) => setFormData({...formData, includeCompliance: e.target.checked})}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label htmlFor="compliance" className="ml-2 text-sm text-gray-700">
                            Include Compliance Management (+2%)
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="training"
                            checked={formData.includeTraining}
                            onChange={(e) => setFormData({...formData, includeTraining: e.target.checked})}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label htmlFor="training" className="ml-2 text-sm text-gray-700">
                            Include Training (₹2,000 per employee)
                          </label>
                        </div>
                      </div>

                      <button
                        onClick={calculateCosts}
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                      >
                        Calculate Costs
                      </button>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Cost Breakdown</h3>
                    
                    {results ? (
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Average Salary per Employee</span>
                            <span className="font-medium">₹{results.avgSalary.toLocaleString()}/month</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Total Monthly Salaries</span>
                            <span className="font-medium">₹{results.monthlySalaryTotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Statutory Costs (EPF, ESI, PT)</span>
                            <span className="font-medium">₹{results.statutoryCosts.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Service Fee (10%)</span>
                            <span className="font-medium">₹{results.serviceFee.toLocaleString()}</span>
                          </div>
                          {results.complianceCost > 0 && (
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-600">Compliance Management</span>
                              <span className="font-medium">₹{results.complianceCost.toLocaleString()}</span>
                            </div>
                          )}
                          {results.trainingCost > 0 && (
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-600">Training Costs</span>
                              <span className="font-medium">₹{results.trainingCost.toLocaleString()}</span>
                            </div>
                          )}
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-semibold text-indigo-900">Monthly Total</span>
                            <span className="text-xl font-bold text-indigo-900">₹{results.monthlyTotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-semibold text-indigo-900">Annual Total</span>
                            <span className="text-xl font-bold text-indigo-900">₹{results.annualTotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-indigo-900">Contract Total ({formData.duration} months)</span>
                            <span className="text-xl font-bold text-indigo-900">₹{results.contractTotal.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="text-center">
                          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium mr-3">
                            <Download className="h-4 w-4 inline mr-2" />
                            Download Report
                          </button>
                          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
                            <Mail className="h-4 w-4 inline mr-2" />
                            Email Quote
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-12">
                        <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <p>Enter your requirements and click "Calculate Costs" to see detailed breakdown</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Factors */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Understanding Contract Staffing Costs in India (2025)
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Key factors that impact your staffing budget
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Mandatory Statutory Costs</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Employee Provident Fund (EPF)</span>
                    <span className="font-medium">12% of basic salary</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Employee State Insurance (ESI)</span>
                    <span className="font-medium">3.25% of salary</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Professional Tax</span>
                    <span className="font-medium">₹200-2,500/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Labour Welfare Fund</span>
                    <span className="font-medium">₹20-100/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gratuity Provision</span>
                    <span className="font-medium">4.81% of salary</span>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span className="font-medium">Total Statutory Load</span>
                    <span className="font-bold">~20% of salary</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Location-wise Salary Variations</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Mumbai</span>
                    <span className="font-medium">Base + 30% premium</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Delhi NCR</span>
                    <span className="font-medium">Base + 20% premium</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bangalore, Pune</span>
                    <span className="font-medium">Base + 10% premium</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chennai, Hyderabad</span>
                    <span className="font-medium">Base rate</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tier 2/3 Cities</span>
                    <span className="font-medium">Base - 10% discount</span>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span className="font-medium">National Average</span>
                    <span className="font-bold">Base rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-indigo-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need a Detailed Quote?
              </h2>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Get a customized proposal with exact costs for your specific requirements
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Contact Our Costing Experts</h3>
                <dl className="space-y-4 text-sm leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Pricing Helpline</p>
                      <a className="hover:text-indigo-600" href="tel:+91-9876543210">+91-9876543210</a>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a className="hover:text-indigo-600" href="mailto:quotes@apexenterprises.net">quotes@apexenterprises.net</a>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-4">Free Detailed Quote Includes:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Role-specific salary benchmarking</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">City-wise cost variations</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Volume discount calculations</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Custom service package pricing</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="tel:+91-9876543210"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    <Phone className="h-4 w-4" />
                    Get Detailed Quote
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