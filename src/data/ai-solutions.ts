export interface AISolution {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    iconName: string;
    features: string[];
    benefits: string[];
    stats: {
        label: string;
        value: string;
        description: string;
    }[];
    seo: {
        title: string;
        description: string;
        keywords: string[];
        geoFocus: string;
    };
    details?: {
        howItWorks?: {
            title: string;
            description: string;
        }[];
        complianceAreas?: string[];
    };
}

export const aiSolutions: AISolution[] = [
    {
        id: 'ai-talent-matching',
        title: 'Precision AI Talent Matching',
        subtitle: 'APEX INTELLIHIRE™',
        description: 'Proprietary multi-modal LLMs optimized for Bangalore’s GCC ecosystem and Hyderabad’s tech corridors. Match high-stakes technical talent with 94% predictive accuracy.',
        image: 'https://images.unsplash.com/photo-1642059484102-ad9142ea2eca?q=80&w=2070&auto=format&fit=crop',
        iconName: 'Brain',
        features: ['Skill-semantic matching', 'Cultural fit modeling', 'Regional language NLP', '12 Indian languages'],
        benefits: [
            'Reduces hiring time by 65% in Tier-1 hubs',
            'Eliminates unconscious demographic bias',
            'Improves 12-month retention by 28%',
            'Handles 20k+ concurrent applications for pan-India scale'
        ],
        stats: [
            { label: 'Match Accuracy', value: '94%', description: 'Predictive fit precision' },
            { label: 'Time Reduction', value: '65%', description: 'Faster talent acquisition' }
        ],
        seo: {
            title: 'AI Talent Matching India | Tech Recruitment Bangalore & Hyderabad',
            description: 'The leading AI recruitment solution for Indian GCCs and startups. Intelligent talent matching in Bangalore, Hyderabad, and Pune.',
            keywords: ['AI recruitment India', 'Tech hiring Bangalore', 'GCC talent matching', 'IT recruitment Hyderabad'],
            geoFocus: 'Pan-India, Bangalore, Hyderabad, Pune, Gurgaon'
        }
    },
    {
        id: 'predictive-analytics',
        title: 'Workforce Predictive Analytics',
        subtitle: 'FORECAST™ BY APEX',
        description: 'Anticipate attrition and skill gaps in Mumbai’s BFSI heart and Pune’s IT clusters. Data-driven foresight for the 2026 workforce across India.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        iconName: 'LineChart',
        features: ['Attrition risk modeling', 'Demand forecasting', 'Skill-gap mapping', 'Cost optimization'],
        benefits: [
            '87% accuracy in attrition prediction',
            'Optimize workforce ROI by 22% in financial sectors',
            'Predict hiring needs 6 months ahead',
            'Real-time skill adjacency mapping for remote cross-state teams'
        ],
        stats: [
            { label: 'Attrition Predict', value: '87%', description: 'Risk detection accuracy' },
            { label: 'Cost Saved', value: '₹1.8Cr+', description: 'Annual retention saving' }
        ],
        seo: {
            title: 'Workforce Predictive Analytics India | BFSI Attrition Modeling Mumbai',
            description: 'Predictive workforce analytics for India’s BFSI and IT sectors. Reduce attrition in Mumbai, Pune, and Chennai with AI.',
            keywords: ['Workforce analytics India', 'Attrition prediction AI', 'Staffing forecast Mumbai', 'HR analytics Pune'],
            geoFocus: 'Mumbai, Pune, Chennai, Noida'
        },
        details: {
            howItWorks: [
                { title: 'Multi-Source Data Ingestion', description: 'Aggregating HRMS, performance, and external market signals from 25+ Indian cities.' },
                { title: 'Neural Pattern Recognition', description: 'Detecting subtle behavioral shifts that precede attrition in high-attrition corridors.' },
                { title: 'Prescriptive Interventions', description: 'Automated recommendations for management to prevent talent flight in Indian context.' }
            ]
        }
    },
    {
        id: 'automated-compliance',
        title: 'AI-Native Compliance Engine',
        subtitle: 'APEX COMPLY™',
        description: 'Zero-error monitoring of the 2026 Labour Codes across all 28 states. Automated audit-readiness for Gurgaon and Ahmedabad’s industrial corridors.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
        iconName: 'Shield',
        features: ['Real-time law monitoring', 'Multi-state PF/ESI sync', 'Audit-ready reports', 'Automatic alerts'],
        benefits: [
            '100% compliance across all jurisdictions',
            '42% reduction in compliance overhead',
            'Zero regulatory penalty record in 20+ years',
            'Automated 2026 Labour Code mapping for major manufacturing zones'
        ],
        stats: [
            { label: 'Compliance Rate', value: '100%', description: 'Across all 28 states' },
            { label: 'Overhead Save', value: '42%', description: 'Operational cost reduction' }
        ],
        seo: {
            title: 'Labour Law Compliance India | 2026 Code Automation Gurgaon',
            description: 'AI-powered labor law compliance for India. Automated PF, ESI, and 2026 Labour Code monitoring in Gurgaon and Ahmedabad.',
            keywords: ['Labour compliance India', '2026 Labour Codes automation', 'Statutory compliance Gurgaon', 'HR compliance Ahmedabad'],
            geoFocus: 'Gurgaon, Ahmedabad, Chennai, Pan-India'
        },
        details: {
            complianceAreas: [
                '2026 Labour Code wage definitions',
                'State-specific Shops & Establishments (28 States)',
                'PF, ESI, and Professional Tax automation',
                'Maternity & POSH digital tracking',
                'Working hour & Overtime algorithms for manufacturing hubs'
            ]
        }
    }
];

export const AI_WORKFORCE_STATS = [
    { value: '94%', label: 'Talent Match Accuracy', description: 'Precise candidate-job fit across Indian tech hubs' },
    { value: '65%', label: 'Faster Hiring', description: 'Reduction in cycle time for GCCs' },
    { value: '42%', label: 'Cost Reduction', description: 'For pan-India compliance management' },
    { value: '12+', label: 'Languages Supported', description: 'Native regional language AI models' },
    { value: '28%', label: 'Productivity Gain', description: 'Post-implementation workforce efficiency' },
    { value: '100%', label: 'Compliance Rate', description: 'Validated across all 28 Indian states' }
];

export const AI_CASE_STUDIES = [
    {
        id: 'techspire',
        company: 'TechSpire India Ltd',
        industry: 'Information Technology',
        location: 'Bangalore, Karnataka',
        quote: "Apex shifted our hiring from reactive to predictive in just 60 days.",
        challenge: 'High attrition (28%) and slow 45-day hiring cycles in a competitive Bangalore market.',
        solution: 'Implemented IntelliHire™ multi-modal matching and attrition forecasting for their Bangalore engineering teams.',
        results: [
            'Hiring time slashed by 65% (to 16 days)',
            '17% reduction in annual attrition',
            '₹1.8 Cr saved in recruitment overhead'
        ]
    },
    {
        id: 'nextgen',
        company: 'NextGen Manufacturing',
        industry: 'Manufacturing',
        location: 'Ahmedabad & Pune',
        challenge: 'Compliance fragmentation across 12 states for 4,500+ contract employees.',
        solution: 'Deployed Comply™ AI for real-time 2026 Labour Code monitoring.',
        results: [
            '100% compliance audit success',
            '42% reduction in regulatory management costs',
            'Automated 94% of multi-state documentation'
        ]
    }
];

export const RESUME_SCREENING_FEATURES = [
    {
        title: "Semantic Analysis",
        description: "Go beyond keywords. Our AI understands skills in context across 200+ Indian industries.",
        metrics: "98.5% data extraction accuracy",
        iconName: "Search"
    },
    {
        title: "Regional Language Support",
        description: "Process resumes in 12 Indian languages including Hindi, Tamil, and Telugu.",
        metrics: "Proprietary Indic LLM models",
        iconName: "Languages"
    },
    {
        title: "Bias-Free Matching",
        description: "Fairness algorithms ensure diversity and transparency in every shortlist.",
        metrics: "42% reduction in demographic bias",
        iconName: "Shield"
    }
];

export const VOICE_CALLING_FEATURES = [
    {
        title: "Native Dialect Support",
        description: "Natural conversation in 8 major Indian languages with zero latency.",
        metrics: "Hindi, Tamil, Telugu, Bengali & more",
        iconName: "Languages"
    },
    {
        title: "24/7 Availability",
        description: "Engage candidates instantly, even at midnight or during public holidays.",
        metrics: "3x increase in engagement rates",
        iconName: "Clock"
    },
    {
        title: "Sentiment Intelligence",
        description: "Analyze candidate tone and interest levels in real-time.",
        metrics: "85% predictive interest accuracy",
        iconName: "Brain"
    }
];

export const PLATFORM_CAPABILITIES = [
    {
        title: "Enterprise Security",
        description: "SOC2 Type II and GDPR compliant infrastructure with data residency in Mumbai/Hyderabad regions.",
        iconName: "Shield"
    },
    {
        title: "Multi-Language LLMs",
        description: "Native support for 12+ Indian languages including Hindi, Tamil, Telugu, and Kannada.",
        iconName: "Languages"
    },
    {
        title: "API-First Architecture",
        description: "Seamlessly integrate AI matching and scoring into your existing HRMS/ATS via secure REST APIs.",
        iconName: "Settings"
    },
    {
        title: "Predictive Engines",
        description: "Proprietary models trained on 20 years of Indian recruitment data to predict candidate success.",
        iconName: "Zap"
    }
];

export interface ResumeCandidate {
    id: string;
    candidateId: string;
    name: string;
    keySkills: string[];
    matchScore: number;
    experience: number;
    location: string;
    educationLevel: string;
    availability: string;
    lastActivity: string;
}

export const DEMO_RESUME_MATCHES: ResumeCandidate[] = [
    {
        id: "1",
        candidateId: "C-2026-001",
        name: "Arjun Venkat",
        keySkills: ["React", "TypeScript", "Next.js", "Node.js", "AWS"],
        matchScore: 98,
        experience: 6,
        location: "Bangalore",
        educationLevel: "B.Tech CSE",
        availability: "Immediate",
        lastActivity: "Applied 2h ago"
    },
    {
        id: "2",
        candidateId: "C-2026-002",
        name: "Priya Sharma",
        keySkills: ["Python", "PyTorch", "NLP", "Scikit-Learn", "FastAPI"],
        matchScore: 95,
        experience: 4,
        location: "Hyderabad",
        educationLevel: "M.Tech AI/ML",
        availability: "15 Days",
        lastActivity: "Updated profile 4h ago"
    },
    {
        id: "3",
        candidateId: "C-2026-003",
        name: "Vikram Malhotra",
        keySkills: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes"],
        matchScore: 92,
        experience: 8,
        location: "Gurgaon",
        educationLevel: "B.E. IT",
        availability: "1 Month",
        lastActivity: "Screened by AI 1d ago"
    },
    {
        id: "4",
        candidateId: "C-2026-004",
        name: "Sneha Reddy",
        keySkills: ["React Native", "Swift", "Kotlin", "Firebase", "Unit Testing"],
        matchScore: 89,
        experience: 5,
        location: "Pune",
        educationLevel: "B.Sc Comp Sci",
        availability: "Immediate",
        lastActivity: "Pre-interview test cleared"
    }
];

export interface VoiceConversation {
    id: string;
    candidateName: string;
    position: string;
    duration: string;
    interestLevel: string;
    sentimentScore: number;
    languageSpoken: string;
    status: string;
    highlights: string[];
}

export const DEMO_VOICE_CONVERSATIONS: VoiceConversation[] = [
    {
        id: "v1",
        candidateName: "Rahul Sharma",
        position: "Senior Java Developer",
        duration: "7:45",
        interestLevel: "High",
        sentimentScore: 92,
        languageSpoken: "Hindi",
        status: "Qualified",
        highlights: [
            "Strong grasp of microservices architecture",
            "Confirmed 30-day notice period",
            "High interest in the Bangalore location"
        ]
    },
    {
        id: "v2",
        candidateName: "Ananya Iyer",
        position: "Product Designer",
        duration: "5:20",
        interestLevel: "Medium",
        sentimentScore: 78,
        languageSpoken: "English",
        status: "Need Manual Review",
        highlights: [
            "Questions about remote work policy",
            "Strong portfolio details mentioned",
            "Slight hesitation on salary range"
        ]
    },
    {
        id: "v3",
        candidateName: "Karthik Raja",
        position: "Sales Manager",
        duration: "12:15",
        interestLevel: "High",
        sentimentScore: 95,
        languageSpoken: "Tamil",
        status: "Qualified",
        highlights: [
            "Excellent communication in regional dialect",
            "Quantified past sales achievements",
            "Available for immediate joining"
        ]
    },
    {
        id: "v4",
        candidateName: "Siddharth Verma",
        position: "DevOps Engineer",
        duration: "3:10",
        interestLevel: "Low",
        sentimentScore: 45,
        languageSpoken: "English",
        status: "Rejected",
        highlights: [
            "Incompatible salary expectations",
            "Lacked specific Kubernetes experience",
            "Unclear about current role duration"
        ]
    }
];
