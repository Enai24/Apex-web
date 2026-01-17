// SEO Monitoring utilities for tracking Apex Enterprises' performance in Indian market
// Implements monitoring for both traditional SEO and GEO metrics

export interface SEOMetrics {
  keywords: KeywordMetric[];
  localRankings: LocalRankingMetric[];
  technicalHealth: TechnicalHealthMetric;
  geoPerformance: GEOPerformanceMetric;
  competitorAnalysis: CompetitorMetric[];
}

export interface KeywordMetric {
  keyword: string;
  position: number;
  previousPosition: number;
  searchVolume: number;
  difficulty: number;
  intent: 'informational' | 'commercial' | 'transactional' | 'local';
  location: string;
  lastUpdated: string;
}

export interface LocalRankingMetric {
  keyword: string;
  localPack: number; // Position in local 3-pack
  organicPosition: number;
  mapPosition: number;
  city: string;
  reviews: {
    count: number;
    averageRating: number;
    responseRate: number;
  };
}

export interface TechnicalHealthMetric {
  siteSpeed: {
    desktop: number;
    mobile: number;
    coreWebVitals: {
      lcp: number; // Largest Contentful Paint
      fid: number; // First Input Delay  
      cls: number; // Cumulative Layout Shift
    };
  };
  crawlability: {
    indexablePages: number;
    crawlErrors: number;
    sitemapStatus: boolean;
    robotsTxtStatus: boolean;
  };
  mobileOptimization: {
    mobileFriendly: boolean;
    responsiveDesign: boolean;
    acceleratedMobilePages: boolean;
  };
  security: {
    httpsStatus: boolean;
    securityIssues: number;
  };
}

export interface GEOPerformanceMetric {
  llmMentions: {
    chatgpt: number;
    claude: number;
    gemini: number;
    perplexity: number;
    totalMentions: number;
  };
  citationQuality: {
    accurateBusinessInfo: number;
    consistentNAP: number;
    verifiedListings: number;
  };
  contentOptimization: {
    conversationalContent: number;
    questionBasedContent: number;
    localContext: number;
    voiceSearchOptimization: number;
  };
  authoritySignals: {
    backlinks: number;
    domainAuthority: number;
    localAuthority: number;
    industryMentions: number;
  };
}

export interface CompetitorMetric {
  competitor: string;
  domain: string;
  organicVisibility: number;
  localVisibility: number;
  avgPosition: number;
  sharedKeywords: number;
  strengths: string[];
  weaknesses: string[];
}

// Target keywords for Apex Enterprises monitoring
export const TARGET_KEYWORDS = {
  primary: [
    "manpower consultants Gurgaon",
    "security services Gurgaon", 
    "housekeeping services Gurgaon",
    "placement agency Gurgaon",
    "labour contractor Gurgaon",
    "facility management Gurgaon"
  ],
  secondary: [
    "best staffing company Gurgaon",
    "workforce solutions Haryana",
    "security agency Manesar", 
    "housekeeping contractors Delhi NCR",
    "manpower supply Bhiwadi",
    "recruitment agency Faridabad"
  ],
  longTail: [
    "best manpower consultants in Gurgaon for automotive industry",
    "PSARA compliant security services in Haryana",
    "professional housekeeping services near Cyber City Gurgaon", 
    "experienced labour contractors for manufacturing in Manesar",
    "trusted placement agency in Gurgaon with 20 years experience"
  ],
  branded: [
    "Apex Enterprises Gurgaon",
    "Apex Enterprises manpower",
    "Apex Enterprises security services",
    "Apex Enterprises contact number"
  ],
  competitors: [
    "manpower consultants in Gurgaon",
    "security services in Gurgaon",
    "housekeeping services in Gurgaon"
  ]
};

// Indian market competitors to monitor
export const COMPETITORS = [
  {
    name: "TeamLease Services",
    domain: "teamlease.com",
    focus: ["Staffing", "HR Services"]
  },
  {
    name: "ManpowerGroup India",
    domain: "manpowergroup.co.in", 
    focus: ["Recruitment", "Workforce Solutions"]
  },
  {
    name: "Adecco India",
    domain: "adecco.co.in",
    focus: ["Staffing", "Outsourcing"]
  },
  {
    name: "Randstad India",
    domain: "randstad.in",
    focus: ["HR Services", "Recruitment"]
  },
  {
    name: "QuEST Global",
    domain: "quest-global.com",
    focus: ["Engineering Services", "Staffing"]
  }
];

// Citation sources for local SEO monitoring
export const CITATION_SOURCES = [
  {
    name: "Google My Business",
    url: "business.google.com",
    importance: "Critical",
    verified: true
  },
  {
    name: "IndiaMART",
    url: "indiamart.com", 
    importance: "High",
    verified: false
  },
  {
    name: "JustDial",
    url: "justdial.com",
    importance: "High", 
    verified: false
  },
  {
    name: "Sulekha",
    url: "sulekha.com",
    importance: "Medium",
    verified: false
  },
  {
    name: "TradeIndia", 
    url: "tradeindia.com",
    importance: "Medium",
    verified: false
  }
];

/**
 * Generate SEO monitoring checklist for regular audits
 */
export const generateSEOChecklistItems = () => {
  return [
    {
      category: "Technical SEO",
      items: [
        "Verify website loads under 2.5 seconds on mobile",
        "Check Core Web Vitals scores in Google PageSpeed Insights",
        "Ensure all pages are mobile-responsive",
        "Validate structured data markup",
        "Check for broken links and 404 errors",
        "Review XML sitemap and robots.txt",
        "Verify HTTPS implementation"
      ]
    },
    {
      category: "Local SEO",
      items: [
        "Update Google My Business profile with latest information",
        "Monitor and respond to customer reviews",
        "Verify NAP consistency across all citations",
        "Check local keyword rankings in target cities",
        "Update location-specific landing pages",
        "Monitor local competitor activities",
        "Track local pack rankings"
      ]
    },
    {
      category: "Content & GEO",
      items: [
        "Add new FAQ content targeting voice search queries",
        "Update service pages with conversational content",
        "Create location-specific blog posts",
        "Optimize for question-based queries",
        "Monitor LLM mentions and citations",
        "Update industry-specific content",
        "Add client success stories and case studies"
      ]
    },
    {
      category: "Off-Page SEO",
      items: [
        "Monitor backlink profile for new/lost links",
        "Check citation accuracy across directories",
        "Track brand mentions across web",
        "Review competitor backlink strategies", 
        "Monitor social media engagement",
        "Track industry directory submissions",
        "Verify partnership/client website links"
      ]
    }
  ];
};

/**
 * Key Performance Indicators for SEO success
 */
export const SEO_KPIS = {
  rankings: {
    targets: {
      primaryKeywords: "Top 3 positions",
      localPack: "Position 1-3 in local results",
      voiceSearch: "Featured snippet captures"
    },
    metrics: [
      "Average keyword position",
      "Keywords in top 10",
      "Local pack appearances",
      "Featured snippet captures"
    ]
  },
  traffic: {
    targets: {
      organicGrowth: "25% quarter-over-quarter",
      localTraffic: "40% of total organic traffic",
      mobileTraffic: "70% mobile optimization"
    },
    metrics: [
      "Organic traffic volume",
      "Local search traffic",
      "Mobile vs desktop split",
      "Conversion rate from organic"
    ]
  },
  geoPerformance: {
    targets: {
      llmMentions: "5+ mentions per month",
      citationAccuracy: "95% accuracy across platforms",
      contentOptimization: "80% pages optimized for GEO"
    },
    metrics: [
      "LLM citation frequency",
      "Citation consistency score", 
      "Conversational content coverage",
      "Voice search optimization score"
    ]
  },
  businessImpact: {
    targets: {
      leadGeneration: "30% increase from organic",
      callVolume: "25% increase from local search",
      brandAwareness: "50% brand search increase"
    },
    metrics: [
      "Qualified leads from SEO",
      "Phone calls from Google My Business",
      "Brand vs non-brand search ratio",
      "Customer acquisition cost from SEO"
    ]
  }
};

/**
 * Generate weekly SEO monitoring report structure
 */
export const generateWeeklyReportTemplate = () => {
  return {
    reportDate: new Date().toISOString().split('T')[0],
    summary: {
      keyWins: [],
      issues: [],
      recommendations: []
    },
    rankings: {
      primaryKeywords: [],
      localRankings: [],
      competitorMovements: []
    },
    technical: {
      siteHealth: null,
      coreWebVitals: null,
      crawlErrors: []
    },
    local: {
      reviewMetrics: null,
      citationStatus: [],
      mapPackAppearances: []
    },
    geo: {
      llmMentions: [],
      contentPerformance: null,
      voiceSearchMetrics: null
    },
    nextWeekActions: []
  };
};

/**
 * Monthly SEO strategy review template
 */
export const generateMonthlyStrategyReview = () => {
  return {
    period: {
      startDate: "",
      endDate: "",
      reportDate: new Date().toISOString().split('T')[0]
    },
    executiveSummary: {
      overallProgress: "",
      keyAchievements: [],
      challengesFaced: [],
      businessImpact: ""
    },
    performanceAnalysis: {
      rankingTrends: null,
      trafficGrowth: null,
      conversionMetrics: null,
      competitorAnalysis: null
    },
    strategicRecommendations: {
      contentStrategy: [],
      technicalOptimizations: [],
      localSEOActions: [],
      geoEnhancements: []
    },
    resourceRequirements: {
      timeline: "",
      budget: "",
      teamInvolvement: []
    }
  };
};

// Export utilities for easy use
export const SEOMonitoringUtils = {
  generateSEOChecklistItems,
  generateWeeklyReportTemplate,
  generateMonthlyStrategyReview,
  TARGET_KEYWORDS,
  COMPETITORS,
  CITATION_SOURCES,
  SEO_KPIS
}; 