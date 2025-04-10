import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Briefcase, MapPin, Clock, CalendarDays, ChevronRight, CheckCircle, Bookmark, Share2 } from 'lucide-react';
import ApplyForm from './ApplyForm';
import { SEO } from '../../utils/seo';

// Sample job data (would come from an API in a real implementation)
const jobs = [
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
    salary: '₹18-25 LPA',
    description: `
      <p>Apex Enterprises is seeking an experienced AI/Machine Learning Engineer to join our growing Technology team. In this role, you will be responsible for developing and implementing AI-powered solutions for workforce management across India.</p>
      
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>Design and develop machine learning models to enhance our talent matching capabilities</li>
        <li>Collaborate with cross-functional teams to implement AI solutions for workforce optimization</li>
        <li>Create and optimize algorithms for predictive analytics in HR and staffing</li>
        <li>Analyze large datasets to identify patterns and drive business insights</li>
        <li>Stay current with the latest advancements in AI/ML and implement new techniques as appropriate</li>
      </ul>
      
      <h4>Required Qualifications:</h4>
      <ul>
        <li>Bachelor's or Master's degree in Computer Science, Data Science, or related field</li>
        <li>3-5 years of experience in machine learning, deep learning, or AI development</li>
        <li>Strong programming skills in Python and familiarity with ML frameworks (TensorFlow, PyTorch)</li>
        <li>Experience with NLP and computer vision techniques</li>
        <li>Excellent problem-solving skills and analytical thinking</li>
      </ul>
      
      <h4>Preferred Qualifications:</h4>
      <ul>
        <li>Experience in HR tech or workforce management solutions</li>
        <li>Knowledge of Indian labor markets and multilingual capabilities</li>
        <li>Experience with cloud platforms (AWS, Azure, GCP)</li>
        <li>Contributions to open-source projects or research publications</li>
      </ul>
    `,
    benefits: [
      'Competitive salary and performance bonuses',
      'Comprehensive health insurance for you and your family',
      'Flexible work arrangements including remote options',
      'Professional development budget and certification support',
      'Regular team outings and wellness activities'
    ],
    skills: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'Data Analysis',
      'Cloud Platforms'
    ]
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
    isFeatured: false,
    salary: '₹8-12 LPA',
    description: `
      <p>Apex Enterprises is seeking an HR Compliance Specialist to join our Human Resources team. In this role, you will ensure adherence to labor laws and regulations across multiple states in India.</p>
      
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>Monitor and maintain compliance with all applicable labor laws and regulations</li>
        <li>Develop and implement compliance policies and procedures</li>
        <li>Conduct regular audits to ensure organizational compliance</li>
        <li>Train managers and employees on compliance requirements</li>
        <li>Stay updated on changes to labor laws across different Indian states</li>
      </ul>
      
      <h4>Required Qualifications:</h4>
      <ul>
        <li>Bachelor's degree in Human Resources, Law, or related field</li>
        <li>2-4 years of experience in HR compliance or labor law</li>
        <li>Strong knowledge of Indian labor laws and regulations</li>
        <li>Excellent attention to detail and analytical skills</li>
        <li>Strong communication and training abilities</li>
      </ul>
      
      <h4>Preferred Qualifications:</h4>
      <ul>
        <li>Professional HR certification (SHRM, HRCI)</li>
        <li>Experience in staffing or workforce management industry</li>
        <li>Familiarity with HR technology and HRIS systems</li>
        <li>Knowledge of multiple languages spoken in India</li>
      </ul>
    `,
    benefits: [
      'Competitive salary and performance bonuses',
      'Comprehensive health insurance for you and your family',
      'Flexible work arrangements including remote options',
      'Professional development budget and certification support',
      'Regular team outings and wellness activities'
    ],
    skills: [
      'Indian Labor Laws',
      'Compliance Management',
      'Policy Development',
      'Regulatory Reporting',
      'Risk Assessment',
      'Training & Development',
      'HR Systems',
      'Documentation Management'
    ]
  }
];

// Similar jobs data (would be API-based in real implementation)
const similarJobs = [
  {
    id: '6',
    title: 'Data Scientist',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '3-6 years',
    postedDate: '2023-07-20',
  },
  {
    id: '7',
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '4-7 years',
    postedDate: '2023-08-02',
  },
  {
    id: '8',
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'Pune',
    type: 'Full-time',
    experience: '2-4 years',
    postedDate: '2023-08-05',
  }
];

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [isApplyFormOpen, setIsApplyFormOpen] = useState<boolean>(false);
  const [isJobSaved, setIsJobSaved] = useState<boolean>(false);
  
  // Find the job by ID
  const job = jobs.find(j => j.id === jobId) || jobs[0]; // Default to first job if not found
  
  // Calculate days ago for job posting date
  const calculateDaysAgo = (dateString: string): number => {
    const postDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const daysAgo = calculateDaysAgo(job.postedDate);

  // Handle apply form submission
  const handleApplySubmit = (formData: FormData) => {
    // In a real implementation, this would send the data to an API
    console.log('Application submitted:', formData);
    
    // For demo purposes, we'll just close the form after a short delay
    setTimeout(() => {
      setIsApplyFormOpen(false);
    }, 5000);
  };

  // Handle save job
  const handleSaveJob = () => {
    setIsJobSaved(!isJobSaved);
  };

  // Handle share job
  const handleShareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: `Job Opening: ${job.title} at Apex Enterprises`,
        text: `Check out this ${job.title} position at Apex Enterprises in ${job.location}`,
        url: window.location.href
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <SEO 
        title={`${job.title} | Careers at Apex Enterprises`}
        description={`Apply for the ${job.title} position at Apex Enterprises. ${job.experience} experience required. Location: ${job.location}. ${job.type} role.`}
        keywords={`${job.title}, ${job.department} jobs, careers in ${job.location}, Apex Enterprises careers`}
        canonical={`/careers/${job.id}`}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {isApplyFormOpen ? (
          <ApplyForm 
            jobTitle={job.title}
            jobId={job.id}
            department={job.department}
            location={job.location}
            onSubmit={handleApplySubmit}
            onClose={() => setIsApplyFormOpen(false)}
          />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Job header */}
              <div className="bg-white shadow-sm rounded-xl p-8 mb-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                      {job.isNew && (
                        <span className="ml-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          New
                        </span>
                      )}
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                        Posted {daysAgo} days ago
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleSaveJob}
                      className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ${
                        isJobSaved 
                          ? 'bg-indigo-50 text-indigo-600 ring-indigo-500/10' 
                          : 'bg-white text-gray-700 ring-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Bookmark className={`-ml-0.5 mr-1.5 h-4 w-4 ${isJobSaved ? 'fill-indigo-600 text-indigo-600' : 'text-gray-400'}`} />
                      {isJobSaved ? 'Saved' : 'Save'}
                    </button>
                    <button
                      type="button"
                      onClick={handleShareJob}
                      className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <Share2 className="-ml-0.5 mr-1.5 h-4 w-4 text-gray-400" />
                      Share
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="text-xl font-bold text-indigo-600">{job.salary}</div>
                  <div className="ml-4 pl-4 border-l border-gray-200">
                    <span className="text-sm text-gray-500">Experience: </span>
                    <span className="text-sm font-medium text-gray-900">{job.experience}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setIsApplyFormOpen(true)}
                    className="w-full sm:w-auto flex justify-center items-center rounded-md bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              
              {/* Job description */}
              <div className="bg-white shadow-sm rounded-xl p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Job Description</h2>
                <div 
                  className="prose prose-indigo max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
                
                {/* Required skills */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="bg-white shadow-sm rounded-xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Benefits and Perks</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Company info */}
              <div className="bg-white shadow-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    A
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Apex Enterprises</h3>
                    <p className="text-sm text-gray-500">AI-Powered Workforce Solutions</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  India's leading provider of AI-enhanced workforce solutions, operating across all 28 states with a team of 500+ professionals.
                </p>
                <a
                  href="/about"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  Learn more about us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              {/* Similar jobs */}
              <div className="bg-white shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  {similarJobs.map((similarJob) => (
                    <a 
                      key={similarJob.id} 
                      href={`/careers/${similarJob.id}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="text-base font-medium text-gray-900">{similarJob.title}</h4>
                      <div className="mt-2 flex items-center text-xs text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {similarJob.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {similarJob.location}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {similarJob.type}
                        </span>
                        <span>{similarJob.experience}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="/careers"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                  >
                    View all jobs
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {/* Referral */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Know someone perfect for this role?</h3>
                <p className="text-indigo-100 mb-4">
                  Refer a friend and earn a bonus if they're hired at Apex Enterprises.
                </p>
                <button
                  type="button"
                  onClick={handleShareJob}
                  className="inline-flex items-center rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  <Share2 className="-ml-0.5 mr-1.5 h-4 w-4" />
                  Refer Someone
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailPage; 