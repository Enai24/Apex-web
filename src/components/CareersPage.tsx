import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, ArrowRight, CheckCircle, DollarSign, Users, Building, BookOpen, Award, Star, ChevronRight } from 'lucide-react';
import { SEO, generateFAQSchema } from '../utils/seo';
import { Link } from 'react-router-dom';

// Define types for jobs and departments
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  isNew: boolean;
  isFeatured: boolean;
}

interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

// Sample job data (would come from an API in a real implementation)
const jobListings: Job[] = [
  {
    id: 1,
    title: 'AI Machine Learning Engineer',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2024-08-15',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'HR Compliance Specialist',
    department: 'Human Resources',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '2-4 years',
    postedDate: '2024-08-10',
    isNew: true,
    isFeatured: false,
  },
  {
    id: 3,
    title: 'Senior Payroll Manager',
    department: 'Finance',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '5-8 years',
    postedDate: '2024-08-05',
    isNew: false,
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Delhi NCR',
    type: 'Full-time',
    experience: '2-3 years',
    postedDate: '2024-07-28',
    isNew: false,
    isFeatured: false,
  },
  {
    id: 5,
    title: 'Staffing Consultant',
    department: 'Operations',
    location: 'Chennai',
    type: 'Full-time',
    experience: '1-3 years',
    postedDate: '2024-07-25',
    isNew: false,
    isFeatured: false,
  },
  {
    id: 6,
    title: 'Data Scientist',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '3-6 years',
    postedDate: '2024-07-20',
    isNew: false,
    isFeatured: true,
  },
];

// Department data
const departments: Department[] = [
  {
    id: 'technology',
    name: 'Technology',
    icon: Briefcase,
    description: 'Building AI-powered solutions that transform workforce management across India.'
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: Building,
    description: 'Managing staffing operations across all 28 Indian states with precision and compliance.'
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    icon: Users,
    description: 'Nurturing talent and creating an inclusive work environment for professionals across India.'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: DollarSign,
    description: 'Ensuring financial compliance and managing payroll services with accuracy and integrity.'
  },
  {
    id: 'sales',
    name: 'Sales & Business Development',
    icon: Award,
    description: 'Connecting businesses with our innovative workforce solutions to drive growth.'
  },
];

// Values and culture
const companyValues = [
  { 
    title: 'Innovation', 
    description: 'We leverage cutting-edge AI technology to revolutionize workforce management in India.'
  },
  { 
    title: 'Integrity', 
    description: 'We uphold the highest ethical standards in all our business operations and client relationships.'
  },
  { 
    title: 'Excellence', 
    description: 'We strive for excellence in every aspect of our service delivery and client satisfaction.'
  },
  { 
    title: 'Diversity & Inclusion', 
    description: 'We celebrate diversity and create an inclusive environment reflecting India\'s rich cultural tapestry.'
  },
  { 
    title: 'Growth Mindset', 
    description: 'We foster continuous learning and professional development for all team members.'
  }
];

// Employee benefits
const employeeBenefits = [
  {
    title: 'Competitive Compensation',
    description: 'Market-leading salary packages with performance bonuses and equity options for key roles.'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive medical insurance covering employees and dependents, mental health support, and wellness programs.'
  },
  {
    title: 'Learning & Development',
    description: 'Dedicated L&D budgets, certification support, and mentorship programs to accelerate your career growth.'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements, generous leave policy, and paid time off for volunteering activities.'
  },
  {
    title: 'Recognition Programs',
    description: 'Regular recognition for outstanding contributions and innovation through rewards and advancement opportunities.'
  },
  {
    title: 'Modern Workspace',
    description: 'State-of-the-art offices with collaborative spaces, relaxation areas, and the latest technology.'
  }
];

// FAQ data
const careersFAQs = [
  {
    question: "What is the hiring process at Apex Enterprises?",
    answer: "Our hiring process typically includes an initial application review, a preliminary phone screening, technical/functional assessments where applicable, and in-person or virtual interviews with the hiring team and leadership. The entire process usually takes 2-3 weeks."
  },
  {
    question: "Does Apex Enterprises offer internship opportunities?",
    answer: "Yes, we offer internship programs for students and recent graduates across various departments. These structured programs provide hands-on experience and mentorship from industry professionals."
  },
  {
    question: "What career growth opportunities are available?",
    answer: "We provide multiple growth paths including vertical advancement, cross-functional experiences, and specialization tracks. Our L&D programs, mentorship initiatives, and regular performance reviews support your career journey."
  },
  {
    question: "Is remote work an option for employees?",
    answer: "Yes, we offer flexible work arrangements including hybrid and remote options for many roles. The specific arrangement depends on the position, department requirements, and individual performance."
  }
];

// Add featured jobs array before the CareersPage component
const featuredJobs = [
  {
    id: '1',
    title: 'AI Machine Learning Engineer',
    department: 'Technology',
    location: 'Gurgaon',
    type: 'Full-time',
    isNew: true
  },
  {
    id: '3',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time'
  },
  {
    id: '9',
    title: 'Remote Work Specialist',
    department: 'Human Resources',
    location: 'Remote',
    type: 'Contract',
    isNew: true
  }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  
  // Filter jobs based on selected department
  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedDepartment);

  // Calculate days ago for job posting date
  const calculateDaysAgo = (dateString: string) => {
    const postDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Careers at Apex Enterprises | AI Workforce Solutions"
        description="Join India's leading AI-powered workforce solutions provider. Explore exciting career opportunities across technology, operations, HR, and more."
        keywords="careers, jobs in India, AI workforce, staffing careers, tech jobs"
        canonical="/careers"
        schema={generateFAQSchema(careersFAQs)}
      />
      
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-800 via-blue-700 to-indigo-900">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          {/* Animated background elements */}
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Build Your Career With India's Leading AI Workforce Innovator
              </h1>
              <p className="mt-6 text-lg leading-8 text-indigo-100">
                Join our team of passionate professionals who are transforming workforce management across India with cutting-edge AI technology and deep domain expertise.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#open-positions"
                  className="rounded-md bg-white px-5 py-3 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors"
                >
                  Explore Open Positions
                </a>
                <a
                  href="#company-culture"
                  className="text-base font-semibold leading-6 text-white flex items-center group"
                >
                  Our Culture <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* Key stats */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { metric: '500+', label: 'Team Members' },
                { metric: '25+', label: 'Locations Across India' },
                { metric: '15+', label: 'Years of Excellence' },
                { metric: '30%', label: 'Annual Growth' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">{stat.metric}</p>
                  <p className="mt-1 text-sm text-indigo-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why join us section */}
      <div id="company-culture" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Culture</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Join Apex Enterprises?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                At Apex, we're not just building a business, we're revolutionizing workforce management in India. 
                Join us on our mission to create more efficient, compliant, and empowering workforce solutions 
                powered by cutting-edge AI technology.
              </p>
            </div>
            
            {/* Company values */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {companyValues.map((value, index) => (
                <div 
                  key={index} 
                  className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Employee Testimonials section */}
      <div className="relative overflow-hidden py-24 sm:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-indigo-500 blur-3xl"></div>
          <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Employee Stories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear From Our Team
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our employees are at the heart of our success. Discover their journeys and experiences working at Apex Enterprises.
            </p>
          </div>
          
          {/* Testimonial cards */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                title: "Senior AI Engineer",
                years: "4 years at Apex",
                quote: "Joining Apex was the best career move I've made. The opportunity to work with cutting-edge AI technology while solving real workforce challenges across India has been incredibly fulfilling. The learning curve is steep but the support is tremendous."
              },
              {
                name: "Rajiv Mehta",
                title: "Compliance Manager",
                years: "6 years at Apex",
                quote: "What stands out at Apex is the genuine commitment to integrity in everything we do. In the complex regulatory landscape of India, I'm proud to be part of a team that prioritizes ethical practices while innovating to make compliance easier for businesses."
              },
              {
                name: "Ananya Patel",
                title: "HR Business Partner",
                years: "3 years at Apex",
                quote: "The inclusive culture at Apex is not just talk—it's lived every day. As someone who works directly with our clients' workforce challenges, I've grown both professionally and personally here. The leadership truly invests in developing their people."
              }
            ].map((testimonial, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 h-full">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex gap-x-1">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-yellow-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">"{testimonial.quote}"</p>
                  <p className="mt-6 text-sm italic text-indigo-600">{testimonial.years}</p>
                  
                  {/* Decorative quote mark */}
                  <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <svg 
                      className="h-6 w-6 text-indigo-600" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Video testimonial feature */}
          <div className="mt-20 mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Video thumbnail */}
                <div className="relative lg:col-span-2">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-auto lg:h-full">
                    <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                      <div className="rounded-full h-16 w-16 bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group">
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                          <svg 
                            className="h-5 w-5 ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Text content */}
                <div className="p-8 lg:col-span-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Meet Vikram: From Frontend Developer to AI Innovation Lead
                    </h3>
                    <p className="mt-6 text-base text-gray-600">
                      "When I joined Apex 5 years ago, I was a frontend developer with an interest in AI. The company not only supported my transition but created a new role that leveraged both skill sets. Today, I lead a team developing conversational AI solutions that are transforming how our clients engage with job candidates." 
                    </p>
                    <div className="mt-8 flex items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">Vikram Malhotra</h4>
                        <p className="text-sm text-gray-600">AI Innovation Lead, Bangalore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Join the team CTA */}
          <div className="mt-16 flex justify-center">
            <Link
              to="#open-positions"
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Employee benefits section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Benefits & Perks</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer Our Team
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe in rewarding excellence and investing in our team's wellbeing and growth. 
              Our comprehensive benefits package is designed to support you both professionally and personally.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {employeeBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow transition-all"
              >
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth and Learning section */}
      <div className="relative py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <svg className="absolute bottom-0 left-0 right-0 transform translate-y-1/2" width="100%" height="300" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M0,0 C300,300 700,200 1000,0 L1000,300 L0,300 Z" fill="#f9fafb" />
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Growth & Learning</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Develop Your Career With Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Apex Enterprises, we believe in continuous learning and provide numerous opportunities 
              for professional growth and career advancement.
            </p>
          </div>
          
          {/* Learning Programs Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* First column - Programs */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-800">Learning Programs</h3>
              
              <div className="mt-8 space-y-8">
                {[
                  {
                    title: "Apex Academy",
                    description: "Our flagship learning platform offering 500+ courses across technical skills, leadership development, and domain expertise.",
                    icon: BookOpen
                  },
                  {
                    title: "Certification Support",
                    description: "Financial assistance and dedicated study time for industry-recognized certifications relevant to your role and career aspirations.",
                    icon: Award
                  },
                  {
                    title: "Mentorship Program",
                    description: "Connect with experienced leaders across the organization for guidance, advice, and career development support.",
                    icon: Users
                  }
                ].map((program, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-indigo-600/10 flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{program.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex">
                <a 
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  Learn more about our learning programs
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Second column - Career Paths */}
            <div className="rounded-2xl bg-white p-10 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Career Growth Paths</h3>
              
              <div className="mt-6 relative">
                {/* Timeline */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      title: "Technical Expert Track",
                      description: "For those who want to deepen their expertise in specific domains like AI, compliance, or staffing solutions.",
                      steps: ["Associate", "Senior", "Lead", "Principal", "Distinguished Expert"]
                    },
                    {
                      title: "Management Track",
                      description: "For those who want to lead teams and drive business outcomes through people management.",
                      steps: ["Team Lead", "Manager", "Senior Manager", "Director", "VP"]
                    },
                    {
                      title: "Innovation Track",
                      description: "For those who want to pioneer new solutions and products in our rapidly evolving industry.",
                      steps: ["Innovation Associate", "Innovation Specialist", "Innovation Architect", "Innovation Director"]
                    }
                  ].map((path, index) => (
                    <div key={index} className="relative pl-10">
                      {/* Timeline node */}
                      <div className="absolute left-0 top-1.5 h-10 w-10 rounded-full border-4 border-white bg-indigo-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-indigo-600"></div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-900">{path.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{path.description}</p>
                      
                      {/* Career steps */}
                      <div className="mt-3 flex items-center space-x-2 overflow-x-auto pb-2">
                        {path.steps.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                              {step}
                            </span>
                            {idx < path.steps.length - 1 && (
                              <ArrowRight className="h-3 w-3 text-gray-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-500">Average promotion time:</span>
                  <span className="ml-1 font-medium text-gray-900">18-24 months</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Internal promotion rate:</span>
                  <span className="ml-1 font-medium text-indigo-600">78%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="mt-16 rounded-2xl bg-indigo-600 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-12">
                <h3 className="text-xl font-semibold text-white">Success Stories</h3>
                <p className="mt-4 text-indigo-200">
                  Our employees have achieved remarkable career growth at Apex Enterprises. 
                  Here are some highlights from our team members:
                </p>
                
                <div className="mt-8 space-y-6">
                  {[
                    {
                      metric: "65%",
                      description: "of our leadership team started in entry-level positions"
                    },
                    {
                      metric: "3.5 years",
                      description: "average time to first management position"
                    },
                    {
                      metric: "250+",
                      description: "employees completed certifications last year"
                    }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl font-bold text-white">{stat.metric}</div>
                      <div className="ml-4 text-sm text-indigo-200">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-transparent"></div>
                
                {/* Quote overlay */}
                <div className="relative h-full flex items-center p-10 lg:p-12">
                  <blockquote className="max-w-md">
                    <p className="text-xl font-medium text-white">
                      "Apex has invested in my growth at every stage of my career journey. 
                      I started as a recruiter and now lead our entire AI-powered talent acquisition division."
                    </p>
                    <footer className="mt-6">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm"></div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-white">Arjun Desai</div>
                          <div className="text-sm text-indigo-200">VP, Talent Acquisition</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department overview section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Teams</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Departments
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover where your skills and passion can make an impact at Apex Enterprises.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <div 
                  key={dept.id}
                  className="bg-white rounded-xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedDepartment(dept.id)}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                    <dept.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{dept.name}</h3>
                  <p className="mt-2 text-gray-600">{dept.description}</p>
                  <div className="mt-6">
                    <button 
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDepartment(dept.id);
                        const element = document.getElementById('open-positions');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      View roles <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Open positions section */}
      <div id="open-positions" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Open Positions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Current Opportunities
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find your next career opportunity and join our team of innovators shaping the future of workforce management.
            </p>
          </div>
          
          {/* Department filters */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedDepartment('all')}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                selectedDepartment === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  selectedDepartment === dept.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
          
          {/* Jobs list */}
          <div className="mt-16">
            {filteredJobs.length > 0 ? (
              <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <ul role="list" className="divide-y divide-gray-200">
                  {filteredJobs.map((job) => {
                    const daysAgo = calculateDaysAgo(job.postedDate);
                    
                    return (
                      <li key={job.id}>
                        <div className="relative hover:bg-gray-50">
                          {job.isNew && (
                            <div className="absolute top-4 right-4">
                              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                New
                              </span>
                            </div>
                          )}
                          {job.isFeatured && (
                            <div className="absolute top-4 right-16">
                              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                Featured
                              </span>
                            </div>
                          )}
                          <Link to={`/careers/${job.id}`} className="block px-6 py-6">
                            <div className="flex items-center justify-between">
                              <p className="truncate text-xl font-semibold text-indigo-700">{job.title}</p>
                            </div>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
                              <div className="flex items-center text-sm text-gray-600">
                                <Briefcase className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500" />
                                {job.department}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500" />
                                {job.location}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Clock className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500" />
                                Posted {daysAgo} days ago
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                {job.type}
                              </span>
                              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                {job.experience}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No positions currently available in this department.</p>
                <button
                  onClick={() => setSelectedDepartment('all')}
                  className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-md hover:bg-indigo-100"
                >
                  View all departments
                </button>
              </div>
            )}
          </div>
          
          {/* Don't see a role call to action */}
          <div className="mt-16 flex justify-center">
            <div className="rounded-2xl bg-indigo-50 px-6 py-10 sm:p-10 max-w-3xl w-full">
              <h3 className="text-xl font-semibold text-indigo-900">Don't see a role that fits?</h3>
              <p className="mt-2 text-indigo-700">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:careers@apexenterprises.net"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                >
                  Contact Our Recruiting Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Frequently Asked Questions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Questions About Careers at Apex
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10">
            <dl className="space-y-10 divide-y divide-gray-900/10">
              {careersFAQs.map((faq, index) => (
                <div key={index} className="pt-10 first:pt-0">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Diversity and Inclusion Section */}
      <div className="py-24 sm:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-indigo-200 to-blue-200 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Diversity & Inclusion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building an Inclusive Workplace
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Apex Enterprises, we believe diverse teams drive innovation. We're committed to creating 
              an inclusive environment where all employees can thrive and reach their full potential.
            </p>
          </div>
          
          {/* D&I Stats */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 mb-16">
            {[
              { metric: "45%", label: "Women in workforce" },
              { metric: "38%", label: "Women in leadership" },
              { metric: "25+", label: "Languages spoken" },
              { metric: "12+", label: "Nationalities" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center rounded-xl bg-white/70 p-6 backdrop-blur-sm border border-indigo-100"
              >
                <div className="text-3xl font-bold text-indigo-600">{stat.metric}</div>
                <div className="mt-1 text-sm text-center text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* D&I Initiatives */}
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Employee Resource Groups",
                  description: "Our ERGs provide community, support, and professional development opportunities for different identity groups within Apex.",
                  initiatives: [ "Cultural Exchange Network", "Parents@Apex"]
                },
                {
                  title: "Inclusive Hiring Practices",
                  description: "We've redesigned our recruitment process to eliminate bias and ensure equitable opportunities for all candidates.",
                  initiatives: ["Blind Resume Screening", "Structured Interviews", "Diverse Interview Panels", "Pay Equity Analysis"]
                },
                {
                  title: "Learning & Development",
                  description: "We invest in educational initiatives that promote awareness and foster an inclusive culture throughout the organization.",
                  initiatives: ["Unconscious Bias Training", "Inclusive Leadership Program", "Cultural Competence Workshops", "Allyship Training"]
                }
              ].map((category, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-indigo-100 flex flex-col h-full"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">{category.description}</p>
                  
                  <div className="mt-6 space-y-2">
                    {category.initiatives.map((initiative, i) => (
                      <div key={i} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-indigo-600 mr-2"></div>
                        <span className="text-sm text-gray-700">{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Make an Impact?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join our team and be part of India's workforce management revolution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#open-positions"
                className="rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Explore Open Positions
              </a>
              <a
                href="mailto:careers@apexenterprises.net"
                className="text-base font-semibold leading-6 text-gray-900 flex items-center"
              >
                Contact Recruiting <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Opportunities</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Take a look at some of our current openings across departments
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <div 
                key={job.id} 
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all"
              >
                <Link to={`/careers/${job.id}`} className="flex h-full flex-col p-6">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{job.title}</h3>
                    {job.isNew && (
                      <span className="ml-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        New
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-3">
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
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="text-sm font-semibold leading-6 text-indigo-600">
                      View job details <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/careers/listings"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View All Open Positions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 