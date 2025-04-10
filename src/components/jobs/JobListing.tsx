import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Search, X, Filter, CalendarDays, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../utils/seo';

// Job interface
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  skills: string[];
}

// Sample job data (would come from an API in a real implementation)
const jobsData: Job[] = [
  {
    id: '1',
    title: 'AI Machine Learning Engineer',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2023-08-15',
    isNew: true,
    isFeatured: true,
    description: 'Develop and implement AI-powered solutions for workforce management across India.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning']
  },
  {
    id: '2',
    title: 'HR Compliance Specialist',
    department: 'Human Resources',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '2-4 years',
    postedDate: '2023-08-10',
    isNew: true,
    description: 'Ensure adherence to labor laws and regulations across multiple states in India.',
    skills: ['Indian Labor Laws', 'Compliance Management', 'Policy Development']
  },
  {
    id: '3',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '4-6 years',
    postedDate: '2023-07-28',
    isFeatured: true,
    description: 'Build responsive and accessible user interfaces for our enterprise workforce solutions.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    id: '4',
    title: 'Recruitment Specialist',
    department: 'Human Resources',
    location: 'Delhi',
    type: 'Full-time',
    experience: '2-5 years',
    postedDate: '2023-08-05',
    description: 'Source and recruit top talent for our clients across various industries.',
    skills: ['Talent Acquisition', 'Candidate Screening', 'Employer Branding']
  },
  {
    id: '5',
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Pune',
    type: 'Full-time',
    experience: '5-8 years',
    postedDate: '2023-07-20',
    description: 'Identify and develop new business opportunities in the staffing and workforce solutions market.',
    skills: ['B2B Sales', 'Client Relationship Management', 'Market Research']
  },
  {
    id: '6',
    title: 'Data Scientist',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '3-6 years',
    postedDate: '2023-07-15',
    description: 'Analyze large datasets to drive business insights and enhance our AI-powered staffing platform.',
    skills: ['Data Analysis', 'Statistical Modeling', 'Python', 'SQL']
  },
  {
    id: '7',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2023-08-01',
    description: 'Create intuitive and engaging user experiences for our workforce management platform.',
    skills: ['UI Design', 'User Research', 'Figma', 'Design Systems']
  },
  {
    id: '8',
    title: 'Payroll Manager',
    department: 'Finance',
    location: 'Chennai',
    type: 'Full-time',
    experience: '4-7 years',
    postedDate: '2023-07-25',
    description: 'Oversee payroll operations for employees and contract workers across India.',
    skills: ['Payroll Processing', 'Taxation', 'Compliance', 'HRIS Systems']
  },
  {
    id: '9',
    title: 'Remote Work Specialist',
    department: 'Human Resources',
    location: 'Remote',
    type: 'Contract',
    experience: '2-4 years',
    postedDate: '2023-08-12',
    isNew: true,
    description: 'Develop and implement strategies for effective remote workforce management.',
    skills: ['Remote Work Policies', 'Digital Collaboration', 'Employee Engagement']
  }
];

// Department and location data for filters
const departments = Array.from(new Set(jobsData.map(job => job.department)));
const locations = Array.from(new Set(jobsData.map(job => job.location)));
const jobTypes = Array.from(new Set(jobsData.map(job => job.type)));

const JobListing: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(jobsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Calculate days ago for job posting date
  const calculateDaysAgo = (dateString: string): number => {
    const postDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Filter jobs based on search term and filters
  useEffect(() => {
    let filteredJobs = jobsData;
    
    if (searchTerm) {
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedDepartments.length > 0) {
      filteredJobs = filteredJobs.filter(job => selectedDepartments.includes(job.department));
    }
    
    if (selectedLocations.length > 0) {
      filteredJobs = filteredJobs.filter(job => selectedLocations.includes(job.location));
    }
    
    if (selectedTypes.length > 0) {
      filteredJobs = filteredJobs.filter(job => selectedTypes.includes(job.type));
    }
    
    setJobs(filteredJobs);
  }, [searchTerm, selectedDepartments, selectedLocations, selectedTypes]);

  // Toggle department filter
  const toggleDepartment = (department: string) => {
    setSelectedDepartments(prev => 
      prev.includes(department) 
        ? prev.filter(d => d !== department)
        : [...prev, department]
    );
  };

  // Toggle location filter
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  // Toggle job type filter
  const toggleJobType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartments([]);
    setSelectedLocations([]);
    setSelectedTypes([]);
  };

  // Calculate total active filters
  const totalActiveFilters = selectedDepartments.length + selectedLocations.length + selectedTypes.length;

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <SEO 
        title="Career Opportunities | Apex Enterprises"
        description="Explore current job openings at Apex Enterprises across India. Find exciting career opportunities in technology, HR, sales, and more."
        keywords="Apex Enterprises jobs, career opportunities, employment, hiring, job openings in India"
        canonical="/careers"
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Current Openings</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join our team and help shape the future of workforce management in India
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs, skills, or keywords"
                className="block w-full rounded-md border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
              {totalActiveFilters > 0 && (
                <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
                  {totalActiveFilters}
                </span>
              )}
            </button>
          </div>
          
          {/* Filter panel */}
          {isFilterOpen && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Department filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Department</h3>
                <div className="space-y-2">
                  {departments.map((department) => (
                    <div key={department} className="flex items-center">
                      <input
                        id={`department-${department}`}
                        name={`department-${department}`}
                        type="checkbox"
                        checked={selectedDepartments.includes(department)}
                        onChange={() => toggleDepartment(department)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={`department-${department}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {department}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Location</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center">
                      <input
                        id={`location-${location}`}
                        name={`location-${location}`}
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => toggleLocation(location)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={`location-${location}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Job Type filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Job Type</h3>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        id={`type-${type}`}
                        name={`type-${type}`}
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleJobType(type)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Filter actions */}
              <div className="col-span-1 md:col-span-3 flex justify-end">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
          
          {/* Results summary */}
          <div className="text-sm text-gray-500">
            Showing {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'}
            {totalActiveFilters > 0 && ' with selected filters'}
          </div>
        </div>
        
        {/* Job listings */}
        <div className="space-y-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md ${
                  job.isFeatured ? 'border-2 border-indigo-500' : 'border border-gray-200'
                }`}
              >
                <Link to={`/careers/${job.id}`} className="block p-6 sm:p-8">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                        {job.isNew && (
                          <span className="ml-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            New
                          </span>
                        )}
                        {job.isFeatured && !job.isNew && (
                          <span className="ml-3 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-base text-gray-600 line-clamp-2">{job.description}</p>
                    </div>
                    
                    <div className="mt-5 sm:mt-0 flex flex-col items-start sm:items-end">
                      <span className="text-sm text-gray-500">
                        Posted {calculateDaysAgo(job.postedDate)} days ago
                      </span>
                      <button
                        type="button"
                        className="mt-2 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      {job.experience}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.slice(0, 4).map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 4 && (
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        +{job.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="bg-white py-12 text-center rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        {/* Remote work banner */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex md:items-center">
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">We're Remote-Friendly!</h2>
              <p className="text-indigo-100 mb-6">
                Many of our positions offer remote or hybrid work arrangements. We believe in providing flexibility 
                while maintaining our collaborative culture.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  <CheckCircle2 className="mr-1.5 h-4 w-4" />
                  Flexible hours
                </div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  <CheckCircle2 className="mr-1.5 h-4 w-4" />
                  Home office allowance
                </div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  <CheckCircle2 className="mr-1.5 h-4 w-4" />
                  Regular team meetups
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-indigo-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-indigo-200 text-sm">Remote positions available now</div>
                <Link
                  to="/careers?location=Remote"
                  className="mt-4 inline-block rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  Browse Remote Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Application process */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Apply Online</h3>
              <p className="text-sm text-gray-500">
                Submit your application through our careers portal with your resume and details.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Initial Screening</h3>
              <p className="text-sm text-gray-500">
                Our AI-assisted screening process and HR team will review your application.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interviews</h3>
              <p className="text-sm text-gray-500">
                Selected candidates will participate in technical and cultural fit interviews.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-lg font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Offer & Onboarding</h3>
              <p className="text-sm text-gray-500">
                Successful candidates receive offers and begin our comprehensive onboarding program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing; 