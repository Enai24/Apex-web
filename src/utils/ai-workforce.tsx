import React from 'react';
import { 
  Brain, 
  BarChart, 
  Shield, 
  Zap, 
  MessageSquare, 
  LineChart, 
  Globe, 
  Monitor, 
  CheckCircle2,
  Clock
} from 'lucide-react';

/**
 * AI Workforce Solutions data and utilities
 * This file contains reusable components and data for AI-driven workforce solutions
 */

// AI Workforce Solutions offered by Apex
export const AI_SOLUTIONS = [
  {
    id: 'ai-talent-matching',
    title: 'AI-Powered Talent Matching',
    description: 'Our proprietary algorithms analyze 40+ parameters to match candidates with job requirements with 94% accuracy.',
    icon: Brain,
    benefits: [
      'Reduces hiring time by 65%',
      'Improves candidate quality and retention',
      'Eliminates unconscious bias in selection',
      'Handles 20,000+ applications simultaneously'
    ]
  },
  {
    id: 'predictive-analytics',
    title: 'Workforce Predictive Analytics',
    description: 'Machine learning models forecast staffing needs and identify attrition risks, trained on pan-India workforce data.',
    icon: BarChart,
    benefits: [
      'Predicts attrition with 87% accuracy',
      'Forecasts hiring needs up to 6 months in advance',
      'Identifies skill gaps automatically',
      'Optimizes workforce allocation across projects'
    ]
  },
  {
    id: 'automated-compliance',
    title: 'Automated Compliance Management',
    description: 'AI-driven compliance tracking across all 28 Indian states with real-time updates on regulatory changes.',
    icon: Shield,
    benefits: [
      'Maintains 100% compliance with labor laws',
      'Automatically updates with regulatory changes',
      'Reduces compliance costs by 42%',
      'Generates audit-ready reports instantly'
    ]
  },
  {
    id: 'intelligent-payroll',
    title: 'Intelligent Payroll Processing',
    description: 'Machine learning optimizes payroll processing with 99.7% accuracy, ensuring compliance with state regulations.',
    icon: Zap,
    benefits: [
      'Processes payroll for 100,000+ employees in under 4 hours',
      'Handles complex state-specific tax calculations',
      'Flags anomalies automatically for review',
      'Reduces payroll processing costs by 35%'
    ]
  },
  {
    id: 'ai-recruitment-assistant',
    title: 'AI Recruitment Assistant',
    description: 'Conversational AI chatbot that screens candidates, answers queries, and schedules interviews in 12 Indian languages.',
    icon: MessageSquare,
    benefits: [
      'Handles 85% of candidate queries automatically',
      'Screens 10,000+ applications per day',
      'Supports 12 Indian languages',
      'Improves candidate experience significantly'
    ]
  },
  {
    id: 'performance-intelligence',
    title: 'Performance Intelligence',
    description: 'Advanced analytics to optimize workforce performance, identify top performers, and suggest development paths.',
    icon: LineChart,
    benefits: [
      'Identifies high-potential employees with 82% accuracy',
      'Personalizes development recommendations',
      'Correlates training with performance improvements',
      'Increases productivity by 28% on average'
    ]
  },
  {
    id: 'talent-market-intelligence',
    title: 'Talent Market Intelligence',
    description: 'Real-time insights into talent availability, salary trends, and emerging skills across Indian markets.',
    icon: Globe,
    benefits: [
      'Provides salary benchmarks across 200+ roles',
      'Tracks emerging skills in 15+ industries',
      'Monitors talent availability across 50+ Indian cities',
      'Updates in real-time with market changes'
    ]
  },
  {
    id: 'virtual-workforce',
    title: 'Virtual Workforce Solutions',
    description: 'AI-driven tools for managing remote teams, monitoring productivity, and enhancing collaboration.',
    icon: Monitor,
    benefits: [
      'Increases remote work productivity by 32%',
      'Ensures seamless collaboration across timezones',
      'Provides data-driven insights on work patterns',
      'Maintains strong team culture in virtual environments'
    ]
  }
];

// Case studies illustrating the impact of AI solutions
export const AI_CASE_STUDIES = [
  {
    id: 'techspire',
    company: 'TechSpire India Ltd',
    challenge: 'Faced high attrition rate (28%) and long hiring cycles (45+ days)',
    solution: 'Implemented AI-powered talent matching system and predictive attrition model',
    results: [
      'Reduced hiring time by 65% (from 45 to 16 days)',
      'Decreased attrition by 17 percentage points',
      'Improved quality of hire with 96% manager satisfaction',
      'Saved ₹1.8 Cr in annual recruitment costs'
    ],
    industry: 'Information Technology',
    location: 'Bengaluru, Karnataka'
  },
  {
    id: 'nextgen',
    company: 'NextGen Manufacturing',
    challenge: 'Managing compliance for 4,500+ contract workers across 12 states',
    solution: 'Deployed automated compliance management system with real-time updates',
    results: [
      'Achieved 100% compliance across all locations',
      'Reduced compliance management costs by 42%',
      'Eliminated penalties through proactive compliance',
      'Automated 94% of compliance documentation'
    ],
    industry: 'Manufacturing',
    location: 'Multiple locations across India'
  },
  {
    id: 'horizon',
    company: 'Horizon Bank',
    challenge: 'Needed to hire 2,500 employees with specific skills and compliance requirements',
    solution: 'Deployed AI recruitment assistant and compliance-focused talent matching',
    results: [
      'Filled all positions 40% faster than previous campaigns',
      'Improved employee performance by 28% compared to previous hires',
      'Reduced recruitment costs by ₹2.2 Cr',
      'Ensured 100% compliance with banking regulations'
    ],
    industry: 'Banking & Financial Services',
    location: 'Mumbai, Maharashtra'
  }
];

// Statistics related to AI workforce solutions
export const AI_WORKFORCE_STATS = [
  { value: '94%', label: 'Talent Match Accuracy', description: 'Precise candidate-job fit' },
  { value: '65%', label: 'Faster Hiring', description: 'Average time reduction' },
  { value: '42%', label: 'Cost Reduction', description: 'For compliance management' },
  { value: '12+', label: 'Languages Supported', description: 'In our AI systems' },
  { value: '28%', label: 'Productivity Gain', description: 'For client workforces' },
  { value: '100%', label: 'Compliance Rate', description: 'Across all states' },
  { value: '87%', label: 'Attrition Prediction', description: 'Accuracy rate' },
  { value: '3.2M+', label: 'Resumes Analyzed', description: 'By our AI systems' }
];

// Schema generator for AI services
export const generateAIServiceSchema = (service: typeof AI_SOLUTIONS[0], baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Apex Enterprises',
      url: baseUrl
    },
    serviceType: 'AI Workforce Solution',
    url: `${baseUrl}/ai-workforce-solutions/${service.id}`
  };
};

// Component for displaying AI capabilities
export const AICapability = ({ 
  title, 
  description, 
  icon: Icon, 
  benefits 
}: typeof AI_SOLUTIONS[0]) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="p-6">
        <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Component for displaying case studies
export const AICaseStudy = ({
  company,
  challenge,
  solution,
  results,
  industry,
  location
}: typeof AI_CASE_STUDIES[0]) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="bg-indigo-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white">{company}</h3>
        <div className="text-indigo-100 text-sm mt-1">{industry} | {location}</div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900">Challenge</h4>
          <p className="text-gray-600 text-sm mt-1">{challenge}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900">Solution</h4>
          <p className="text-gray-600 text-sm mt-1">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Results</h4>
          <ul className="mt-2 space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Component for displaying AI statistics
export const AIStat = ({ value, label, description }: typeof AI_WORKFORCE_STATS[0]) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-center">
      <div className="text-3xl font-bold text-indigo-600">{value}</div>
      <div className="font-medium text-gray-900 mt-1">{label}</div>
      <div className="text-sm text-gray-500 mt-1">{description}</div>
    </div>
  );
};

// Resume Screening AI utilities
export interface ResumeMatch {
  candidateId: string;
  name: string;
  matchScore: number;
  keySkills: string[];
  experience: number;
  educationLevel: string;
  location: string;
  availability: string;
  lastActivity: string;
}

export const RESUME_SCREENING_FEATURES = [
  {
    title: "CV Analysis",
    description: "Extract and structure information from resumes in any format",
    metrics: "98.5% accuracy in data extraction"
  },
  {
    title: "Skill Matching",
    description: "Match candidate skills to job requirements with semantic understanding",
    metrics: "Understands 40,000+ skills across 200+ industries"
  },
  {
    title: "Bias Reduction",
    description: "Reduce unconscious bias in screening with AI fairness algorithms",
    metrics: "Proven 42% reduction in demographic bias"
  },
  {
    title: "Multi-language Support",
    description: "Process resumes in all Indian languages plus international formats",
    metrics: "Supports 12 Indian languages and 20+ global languages"
  },
  {
    title: "Automated Ranking",
    description: "Automatically rank candidates based on customizable criteria",
    metrics: "Processes 10,000+ resumes in under 5 minutes"
  },
  {
    title: "Cultural Fit Assessment",
    description: "Analyze communication style and values for team compatibility",
    metrics: "Improves retention by 28% for matched placements"
  }
];

export const DEMO_RESUME_MATCHES: ResumeMatch[] = [
  {
    candidateId: "RS-10045",
    name: "Priya Sharma",
    matchScore: 96,
    keySkills: ["Python", "ML Engineering", "TensorFlow", "Data Visualization"],
    experience: 5.5,
    educationLevel: "Masters in Computer Science",
    location: "Bangalore",
    availability: "2 weeks notice",
    lastActivity: "Applied 2 days ago"
  },
  {
    candidateId: "RS-10078",
    name: "Ajay Patel",
    matchScore: 92,
    keySkills: ["Machine Learning", "NLP", "Python", "AWS"],
    experience: 4,
    educationLevel: "B.Tech in AI & ML",
    location: "Hyderabad",
    availability: "Immediate",
    lastActivity: "Applied 1 day ago"
  },
  {
    candidateId: "RS-09987",
    name: "Shivani Reddy",
    matchScore: 88,
    keySkills: ["Data Science", "R", "Python", "Statistical Analysis"],
    experience: 3,
    educationLevel: "PhD in Statistics",
    location: "Mumbai",
    availability: "1 month notice",
    lastActivity: "Applied 5 days ago"
  },
  {
    candidateId: "RS-10102",
    name: "Rahul Verma",
    matchScore: 85,
    keySkills: ["Deep Learning", "Computer Vision", "PyTorch", "CUDA"],
    experience: 6,
    educationLevel: "Masters in AI",
    location: "Pune",
    availability: "2 weeks notice",
    lastActivity: "Applied 3 days ago"
  },
  {
    candidateId: "RS-10056",
    name: "Neha Gupta",
    matchScore: 82,
    keySkills: ["Data Engineering", "Spark", "Python", "SQL"],
    experience: 4.5,
    educationLevel: "B.Tech in Computer Engineering",
    location: "Delhi NCR",
    availability: "3 weeks notice",
    lastActivity: "Applied 4 days ago"
  }
];

// Resume Screening Feature Component
export const ResumeScreeningFeature: React.FC<{ feature: typeof RESUME_SCREENING_FEATURES[0] }> = ({ feature }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 mb-4">{feature.description}</p>
      <div className="bg-indigo-50 rounded-md px-3 py-2 text-indigo-700 text-sm font-medium">
        {feature.metrics}
      </div>
    </div>
  );
};

// Candidate Match Card Component
export const CandidateMatchCard: React.FC<{ candidate: ResumeMatch }> = ({ candidate }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
          <div className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
            candidate.matchScore >= 90 ? 'bg-green-100 text-green-800' : 
            candidate.matchScore >= 80 ? 'bg-blue-100 text-blue-800' : 
            'bg-yellow-100 text-yellow-800'
          }`}>
            <span>{candidate.matchScore}% Match</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-1">Key Skills</div>
          <div className="flex flex-wrap gap-2">
            {candidate.keySkills.map((skill, index) => (
              <span key={index} className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Experience</div>
            <div className="font-medium">{candidate.experience} years</div>
          </div>
          <div>
            <div className="text-gray-500">Education</div>
            <div className="font-medium">{candidate.educationLevel}</div>
          </div>
          <div>
            <div className="text-gray-500">Location</div>
            <div className="font-medium">{candidate.location}</div>
          </div>
          <div>
            <div className="text-gray-500">Availability</div>
            <div className="font-medium">{candidate.availability}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex justify-between items-center text-sm">
        <div className="text-gray-500">{candidate.lastActivity}</div>
        <div className="flex gap-3">
          <button className="text-indigo-600 font-medium hover:text-indigo-800">View Profile</button>
          <button className="text-indigo-600 font-medium hover:text-indigo-800">Contact</button>
        </div>
      </div>
    </div>
  );
};

// Generate schema for Resume Screening Service
export const generateResumeScreeningSchema = (baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Apex AI Resume Screening',
    applicationCategory: 'BusinessApplication',
    description: 'AI-powered resume screening and candidate matching solution with 94% accuracy in identifying the best candidates for your open positions.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR'
    },
    operatingSystem: 'Cloud-based',
    url: `${baseUrl}/ai-workforce-solutions/ai-talent-matching`,
    provider: {
      '@type': 'Organization',
      name: 'Apex Enterprises',
      url: baseUrl
    }
  };
};

// AI Voice Calling Agent utilities
export interface VoiceConversation {
  id: string;
  candidateName: string;
  position: string;
  languageSpoken: string;
  duration: string;
  sentimentScore: number;
  interestLevel: 'High' | 'Medium' | 'Low';
  status: 'Scheduled' | 'Interested' | 'Not Interested' | 'Follow Up';
  date: string;
  highlights: string[];
}

export const VOICE_CALLING_FEATURES = [
  {
    title: "Multi-language Support",
    description: "Conducts interviews in 8 major Indian languages with natural voice",
    metrics: "Supports Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and English"
  },
  {
    title: "24/7 Availability",
    description: "Engage candidates at any time, regardless of time zones or working hours",
    metrics: "3x increase in candidate engagement rates"
  },
  {
    title: "Sentiment Analysis",
    description: "Detect candidate engagement and interest levels during conversations",
    metrics: "85% accuracy in predicting candidate interest"
  },
  {
    title: "Automated Scheduling",
    description: "Schedule interviews, send reminders, and handle rescheduling requests",
    metrics: "Reduces scheduling time by 78%"
  },
  {
    title: "Conversation Intelligence",
    description: "Extract key insights from candidate responses with semantic understanding",
    metrics: "Captures 92% of critical candidate information"
  },
  {
    title: "Seamless Handoff",
    description: "Intelligently transfer candidates to human recruiters when needed",
    metrics: "Handles 85% of initial screening calls without human intervention"
  }
];

export const DEMO_VOICE_CONVERSATIONS: VoiceConversation[] = [
  {
    id: "vc-001",
    candidateName: "Rahul Sharma",
    position: "Full Stack Developer",
    languageSpoken: "Hindi",
    duration: "8:45",
    sentimentScore: 85,
    interestLevel: "High",
    status: "Scheduled",
    date: "2023-09-15",
    highlights: [
      "4 years of experience with React and Node.js",
      "Available to start in 2 weeks",
      "Prefers remote work with occasional office visits",
      "Currently earning ₹14 LPA, expecting ₹18-20 LPA"
    ]
  },
  {
    id: "vc-002",
    candidateName: "Priya Patel",
    position: "UX Designer",
    languageSpoken: "English",
    duration: "7:12",
    sentimentScore: 92,
    interestLevel: "High",
    status: "Scheduled",
    date: "2023-09-14",
    highlights: [
      "Portfolio includes work for fintech and healthcare clients",
      "Expertise in accessibility and mobile-first design",
      "Led a team of 3 designers in previous role",
      "Seeking growth opportunities and mentorship"
    ]
  },
  {
    id: "vc-003",
    candidateName: "Amit Kumar",
    position: "DevOps Engineer",
    languageSpoken: "English",
    duration: "6:20",
    sentimentScore: 76,
    interestLevel: "Medium",
    status: "Interested",
    date: "2023-09-14",
    highlights: [
      "Strong experience with AWS and Kubernetes",
      "Currently in notice period, available in 30 days",
      "Concerned about on-call responsibilities",
      "Looking for work-life balance in next role"
    ]
  },
  {
    id: "vc-004",
    candidateName: "Deepa Krishnan",
    position: "Product Manager",
    languageSpoken: "Tamil",
    duration: "9:34",
    sentimentScore: 65,
    interestLevel: "Medium",
    status: "Follow Up",
    date: "2023-09-13",
    highlights: [
      "6 years of experience in B2B SaaS products",
      "Currently exploring multiple opportunities",
      "Wants to understand growth trajectory better",
      "Has questions about equity and benefits"
    ]
  },
  {
    id: "vc-005",
    candidateName: "Arjun Singh",
    position: "Data Scientist",
    languageSpoken: "English",
    duration: "5:47",
    sentimentScore: 45,
    interestLevel: "Low",
    status: "Not Interested",
    date: "2023-09-12",
    highlights: [
      "Skills align well but compensation expectations too high",
      "Looking for ₹28 LPA, budget is ₹22 LPA maximum",
      "Prefers established companies over mid-size firms",
      "Currently in final rounds with other companies"
    ]
  },
  {
    id: "vc-006",
    candidateName: "Sneha Reddy",
    position: "HR Business Partner",
    languageSpoken: "Telugu",
    duration: "8:10",
    sentimentScore: 88,
    interestLevel: "High",
    status: "Scheduled",
    date: "2023-09-11",
    highlights: [
      "Experience implementing HR tech in large organizations",
      "Available for immediate joining",
      "Interested in company culture and DEI initiatives",
      "Asking for flexible work arrangements"
    ]
  }
];

// Voice Calling Feature Component
export const VoiceCallingFeature: React.FC<{ feature: typeof VOICE_CALLING_FEATURES[0] }> = ({ feature }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 mb-4">{feature.description}</p>
      <div className="bg-purple-50 rounded-md px-3 py-2 text-purple-700 text-sm font-medium">
        {feature.metrics}
      </div>
    </div>
  );
};

// Voice Conversation Card Component
export const VoiceConversationCard: React.FC<{ conversation: VoiceConversation }> = ({ conversation }) => {
  // Color based on interest level
  const getInterestColor = (level: string) => {
    switch (level) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Icon and color based on status
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'Scheduled': 
        return { color: 'bg-green-100 text-green-800', icon: '📅' };
      case 'Interested': 
        return { color: 'bg-blue-100 text-blue-800', icon: '👍' };
      case 'Not Interested': 
        return { color: 'bg-red-100 text-red-800', icon: '👎' };
      case 'Follow Up': 
        return { color: 'bg-yellow-100 text-yellow-800', icon: '⏰' };
      default: 
        return { color: 'bg-gray-100 text-gray-800', icon: '❓' };
    }
  };

  const statusInfo = getStatusInfo(conversation.status);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      {/* Card header */}
      <div className="bg-purple-50 p-4 border-b border-purple-100">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-gray-900">{conversation.candidateName}</h3>
            <p className="text-sm text-gray-600">{conversation.position}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getInterestColor(conversation.interestLevel)}`}>
              {conversation.interestLevel} Interest
            </span>
            <span className="text-xs text-gray-500 mt-1">
              {new Date(conversation.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-full p-1.5 mr-2">
              <MessageSquare className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">{conversation.languageSpoken}</span>
          </div>
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-full p-1.5 mr-2">
              <Clock className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">{conversation.duration}</span>
          </div>
          <div className={`text-xs font-medium rounded-full px-3 py-1 flex items-center ${statusInfo.color}`}>
            <span className="mr-1">{statusInfo.icon}</span>
            {conversation.status}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Highlights</h4>
          <ul className="space-y-1">
            {conversation.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Sentiment Score</span>
            <span className="text-xs font-medium">{conversation.sentimentScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div 
              className={`h-2.5 rounded-full ${
                conversation.sentimentScore > 80 ? 'bg-green-500' : 
                conversation.sentimentScore > 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${conversation.sentimentScore}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generate schema for Voice Calling Agent
export const generateVoiceCallingSchema = (baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Apex VoiceConnect™ - AI Calling Agent',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud-based',
    description: 'AI-powered voice calling agent that conducts candidate screening, handles scheduling, and responds to queries in multiple Indian languages.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    provider: {
      '@type': 'Organization',
      name: 'Apex Enterprises',
      url: baseUrl
    },
    url: `${baseUrl}/ai-voice-connect`,
    featureList: [
      'Supports 8 major Indian languages',
      '24/7 availability for global candidates',
      'AI-powered sentiment analysis during calls',
      'Automated interview scheduling',
      'Conversation intelligence with semantic understanding',
      'Seamless handoff to human recruiters when needed'
    ]
  };
}; 