import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, BookOpen, Award, CheckCircle, Bookmark } from 'lucide-react';

const jobCategories = [
  { id: 'all', name: 'All Jobs' },
  { id: 'it', name: 'IT & Technology' },
  { id: 'finance', name: 'Finance & Accounting' },
  { id: 'hr', name: 'HR & Admin' },
  { id: 'sales', name: 'Sales & Marketing' },
  { id: 'operations', name: 'Operations' },
];

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Pvt Ltd',
    location: 'Bangalore',
    type: 'Full-time',
    salary: '₹18-25 LPA',
    posted: '2 days ago',
    category: 'it',
  },
  {
    id: 2,
    title: 'Financial Analyst',
    company: 'Global Finance Corp',
    location: 'Mumbai',
    type: 'Full-time',
    salary: '₹12-16 LPA',
    posted: '1 week ago',
    category: 'finance',
  },
  {
    id: 3,
    title: 'HR Manager',
    company: 'Innovate Solutions',
    location: 'Delhi NCR',
    type: 'Full-time',
    salary: '₹10-15 LPA',
    posted: '3 days ago',
    category: 'hr',
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    company: 'MarketEdge Media',
    location: 'Hyderabad',
    type: 'Full-time',
    salary: '₹8-12 LPA',
    posted: '5 days ago',
    category: 'sales',
  },
];

const careerArticles = [
  {
    id: 1,
    title: 'Navigating the IT Job Market in India',
    excerpt: 'Insights into the evolving IT landscape and strategies for positioning yourself competitively.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
    category: 'Industry Insights',
  },
  {
    id: 2,
    title: 'Resume Building Tips for Indian Professionals',
    excerpt: 'Expert advice on crafting a standout resume that aligns with Indian employer expectations.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4',
    category: 'Career Development',
  },
  {
    id: 3,
    title: 'Mastering Job Interviews in the Indian Corporate Environment',
    excerpt: 'Techniques to excel in interviews with both Indian companies and multinational corporations.',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39',
    category: 'Interview Tips',
  },
];

const employeeBenefits = [
  {
    title: 'Comprehensive Health Coverage',
    description: 'Group health insurance with coverage for you and your family, including parents, with cashless treatment at leading hospitals.',
  },
  {
    title: 'Professional Development',
    description: 'Access to training programs, certifications, and skill development courses relevant to your career path.',
  },
  {
    title: 'Financial Security',
    description: 'Retirement benefits, provident fund, gratuity, and other saving schemes as per Indian labor laws.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours, work-from-home options, and generous paid time off including annual leaves and national holidays.',
  },
  {
    title: 'Wellness Programs',
    description: 'Mental health support, fitness allowances, and wellness initiatives designed for the Indian lifestyle.',
  },
  {
    title: 'Relocation Assistance',
    description: 'Support for professionals relocating within India, including temporary accommodation and settling-in allowances.',
  },
];

export default function JobSeekersPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const filteredJobs = selectedCategory === 'all' 
    ? featuredJobs 
    : featuredJobs.filter(job => job.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-indigo-700 to-purple-800 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <pattern id="job-seeker-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#job-seeker-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              For Job Seekers
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Explore opportunities with India's leading companies and access resources to advance your career
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="#available-jobs"
                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors duration-300"
              >
                Browse Jobs
              </Link>
              <Link
                to="#career-advice"
                className="text-base font-semibold leading-6 text-white flex items-center group"
              >
                Career Resources <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Available Jobs section */}
      <div id="available-jobs" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Available Opportunities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Your Next Career Move
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse our curated selection of opportunities with top employers across India. Use the filters to find the perfect match for your skills and aspirations.
            </p>
          </div>
          
          {/* Job Filters */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Job Listings */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <div key={job.id} className="group relative rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{job.company} • {job.location}</p>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-50 hover:text-indigo-600">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                    {job.type}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                    {job.salary}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">
                    Posted {job.posted}
                  </span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center group"
                  >
                    View details <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/all-jobs"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-50"
            >
              View All Jobs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Career Advice section */}
      <div id="career-advice" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Career Resources</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Career Advice for Indian Professionals
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access our library of articles, guides, and resources tailored for the Indian job market. Get insights from industry experts and successful professionals.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {careerArticles.map((article) => (
              <div
                key={article.id}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-600/20">
                    {article.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link to={`/articles/${article.id}`}>
                    <span className="absolute inset-0"></span>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-300">{article.excerpt}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/all-articles"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-50"
            >
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Employee Benefits section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Employee Benefits</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What You Get Working With Us
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Apex Enterprises, we believe in taking care of our associates. Our comprehensive benefits package is designed to support your health, wealth, and career growth.
              </p>
              
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {employeeBenefits.map((benefit) => (
                  <div key={benefit.title} className="relative pl-10">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      {benefit.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                alt="Happy professionals in a modern office" 
                className="rounded-2xl shadow-xl" 
              />
              <div className="absolute inset-0 rounded-2xl shadow-inner ring-1 ring-inset ring-black/10"></div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-indigo-600 p-8 shadow-lg">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">Employee Satisfaction</p>
                    <p className="text-2xl font-bold text-white">92%</p>
                    <p className="text-xs text-white/80">Based on 2023 survey data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to take the next step in your career?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
            Upload your resume to our database and let our recruiters match you with the right opportunities across India.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/upload-resume"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors duration-300"
            >
              Upload Your Resume
            </Link>
            <Link
              to="/create-profile"
              className="text-base font-semibold leading-6 text-white flex items-center group"
            >
              Create Job Seeker Profile <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 