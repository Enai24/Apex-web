import React from 'react';
import { Search, MapPin, Briefcase, Filter, DollarSign, Building2, Clock, Globe, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobMap from './JobMap';
import { formatSalary, formatDate } from '../../utils/formatters';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'remote' | 'hybrid' | 'onsite';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  deadline: string;
  postedDate: string;
  companyRating: number;
  skills: string[];
}

const workTypes = ['Remote', 'Hybrid', 'Onsite'];
const experienceLevels = ['Entry Level', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
const salaryRanges = [
  { label: '₹0-3L', min: 0, max: 300000 },
  { label: '₹3-6L', min: 300000, max: 600000 },
  { label: '₹6-10L', min: 600000, max: 1000000 },
  { label: '₹10-15L', min: 1000000, max: 1500000 },
  { label: '₹15L+', min: 1500000, max: null },
];

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedLocation, setSelectedLocation] = React.useState('');
  const [selectedType, setSelectedType] = React.useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = React.useState('');
  const [selectedSalaryRange, setSelectedSalaryRange] = React.useState('');
  const [showFilters, setShowFilters] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [savedJobs, setSavedJobs] = React.useState<string[]>([]);
  const [savedSearches, setSavedSearches] = React.useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const saveCurrentSearch = () => {
    const searchParams = {
      term: searchTerm,
      location: selectedLocation,
      type: selectedType,
      experience: selectedExperience,
      salary: selectedSalaryRange,
    };
    setSavedSearches(prev => [...prev, searchParams]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Premium Features Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 mb-8 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Unlock Premium Features</h2>
            <p className="mt-2">Get early access to jobs, featured profile status, and direct recruiter messaging</p>
          </div>
          <Link
            to="/premium"
            className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Upgrade Now
          </Link>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <div className="p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search jobs by title, skills, or company"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowMap(!showMap)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Globe className="h-5 w-5 mr-2 text-gray-400" />
                  {showMap ? 'Hide Map' : 'Show Map'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Filter className="h-5 w-5 mr-2 text-gray-400" />
                  Filters
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Search Jobs
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  >
                    <option value="">All Locations</option>
                    {/* Add locations */}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Type</label>
                  <div className="mt-2 space-y-2">
                    {workTypes.map((type) => (
                      <label key={type} className="inline-flex items-center mr-4">
                        <input
                          type="checkbox"
                          checked={selectedType.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedType([...selectedType, type]);
                            } else {
                              setSelectedType(selectedType.filter(t => t !== type));
                            }
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Experience Level</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  >
                    <option value="">Any Experience</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Salary Range</label>
                  <select
                    value={selectedSalaryRange}
                    onChange={(e) => setSelectedSalaryRange(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  >
                    <option value="">Any Salary</option>
                    {salaryRanges.map((range) => (
                      <option key={range.label} value={range.label}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Map View */}
      {showMap && (
        <div className="mt-8 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl overflow-hidden">
          <JobMap />
        </div>
      )}

      {/* Job Listings */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sample Job Card */}
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h3>
                <div className="mt-1 flex items-center">
                  <Building2 className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500 mr-2">TechCorp Solutions</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-500 ml-1">4.5</span>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Bangalore
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    5-8 years
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ₹18-25 LPA
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Posted 2 days ago
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleSaveJob('1')}
                className={`rounded-full p-2 ${
                  savedJobs.includes('1')
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    : 'text-gray-400 hover:text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Star className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Required Skills</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Link
                to="/jobs/1"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View Details
              </Link>
              <Link
                to="/apply/1"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Quick Apply
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Career Services */}
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Premium Career Services</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Resume Building</h4>
                <p className="mt-1 text-sm text-gray-500">Professional resume writing and ATS optimization</p>
                <Link
                  to="/services/resume"
                  className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Career Coaching</h4>
                <p className="mt-1 text-sm text-gray-500">One-on-one mentoring and interview preparation</p>
                <Link
                  to="/services/coaching"
                  className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Saved Searches */}
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Searches</h3>
            <div className="space-y-3">
              {savedSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchTerm(search.term);
                    setSelectedLocation(search.location);
                    setSelectedType(search.type);
                    setSelectedExperience(search.experience);
                    setSelectedSalaryRange(search.salary);
                  }}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="font-medium text-gray-900">{search.term}</div>
                  <div className="mt-1 text-sm text-gray-500">
                    {[
                      search.location,
                      search.type.join(', '),
                      search.experience,
                      search.salary,
                    ]
                      .filter(Boolean)
                      .join(' • ')}
                  </div>
                </button>
              ))}
              <button
                onClick={saveCurrentSearch}
                className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Save Current Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}