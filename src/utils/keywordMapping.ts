export interface KeywordMapping {
  keyword: string;
  volume: number;
  difficulty: number;
  intent: 'BOFU' | 'MOFU' | 'TOFU' | 'Transactional' | 'Local';
  targetPage: string;
  optimizedH1: string;
  metaTitle: string;
  metaDescription: string;
  componentPath: string;
  priority: number;
}

export const TOP_REVENUE_KEYWORDS: KeywordMapping[] = [
  {
    keyword: 'manpower outsourcing india',
    volume: 2400,
    difficulty: 28,
    intent: 'BOFU',
    targetPage: '/services/contract-staffing',
    optimizedH1: 'Contract Staffing & Manpower Outsourcing in India',
    metaTitle: 'Contract Staffing & Manpower Outsourcing in India | Apex Enterprises',
    metaDescription: 'Leading contract staffing and manpower outsourcing services across India. 15+ years experience, 100% compliance, AI-powered recruitment. Get free consultation today.',
    componentPath: 'src/components/services/ContractStaffing.tsx',
    priority: 1
  },
  {
    keyword: 'labour contractor delhi ncr',
    volume: 1300,
    difficulty: 22,
    intent: 'Transactional',
    targetPage: '/delhi-ncr-labour-contractor',
    optimizedH1: 'Trusted Labour Contractor in Delhi-NCR',
    metaTitle: 'Trusted Labour Contractor in Delhi-NCR | Expert Workforce Solutions',
    metaDescription: 'Licensed labour contractor in Delhi-NCR providing skilled workforce across Gurgaon, Noida, Faridabad. 15+ years experience, 100% compliance, competitive rates. Call now!',
    componentPath: 'src/components/locations/DelhiNCRLabourContractor.tsx',
    priority: 2
  },
  {
    keyword: 'payroll compliance services',
    volume: 900,
    difficulty: 31,
    intent: 'BOFU',
    targetPage: '/services/payroll-compliance',
    optimizedH1: 'Payroll & Statutory Compliance Services',
    metaTitle: 'Payroll & Statutory Compliance Services | Expert Management in India',
    metaDescription: 'Professional payroll and statutory compliance services across India. EPF, ESI, Professional Tax, TDS management with 100% accuracy. Get free compliance audit today!',
    componentPath: 'src/components/services/PayrollCompliance.tsx',
    priority: 3
  },
  {
    keyword: 'housekeeping services for factories',
    volume: 700,
    difficulty: 18,
    intent: 'BOFU',
    targetPage: '/services/industrial-housekeeping',
    optimizedH1: 'Industrial House-Keeping Services for Manufacturing Plants',
    metaTitle: 'Industrial House-Keeping Services for Manufacturing Plants | Apex Enterprises',
    metaDescription: 'Professional industrial housekeeping services for factories and manufacturing plants across India. ISO certified, safety compliant, 24/7 operations. Get free facility assessment!',
    componentPath: 'src/components/services/IndustrialHousekeeping.tsx',
    priority: 4
  },
  {
    keyword: 'contract staffing cost calculator',
    volume: 400,
    difficulty: 12,
    intent: 'MOFU',
    targetPage: '/resources/cost-calculator',
    optimizedH1: 'Contract Staffing Cost Calculator (2025)',
    metaTitle: 'Contract Staffing Cost Calculator (2025) | Free Online Tool',
    metaDescription: 'Free contract staffing cost calculator for India. Estimate salary, EPF, ESI, compliance costs & total expenses. Get accurate 2025 rates instantly. No signup required!',
    componentPath: 'src/components/resources/CostCalculator.tsx',
    priority: 5
  },
  {
    keyword: 'temporary staffing agency mumbai',
    volume: 350,
    difficulty: 25,
    intent: 'Local',
    targetPage: '/mumbai-temporary-staffing',
    optimizedH1: 'Temporary Staffing Agency in Mumbai | Quick Deployment',
    metaTitle: 'Temporary Staffing Agency in Mumbai | Quick Deployment | Apex Enterprises',
    metaDescription: 'Leading temporary staffing agency in Mumbai providing skilled workforce across all sectors. Same-day deployment, competitive rates, full compliance. Call for immediate staffing!',
    componentPath: 'src/components/locations/MumbaiTemporaryStaffing.tsx',
    priority: 6
  },
  {
    keyword: 'blue collar recruitment india',
    volume: 320,
    difficulty: 29,
    intent: 'BOFU',
    targetPage: '/services/blue-collar-recruitment',
    optimizedH1: 'Blue Collar Recruitment & Staffing Solutions in India',
    metaTitle: 'Blue Collar Recruitment & Staffing Solutions in India | Apex Enterprises',
    metaDescription: 'Specialized blue collar recruitment services across India. Manufacturing, construction, logistics workforce with skill-based matching. 48-hour deployment guarantee.',
    componentPath: 'src/components/services/BlueCollarRecruitment.tsx',
    priority: 7
  },
  {
    keyword: 'warehouse staffing bangalore',
    volume: 280,
    difficulty: 21,
    intent: 'Local',
    targetPage: '/bangalore-warehouse-staffing',
    optimizedH1: 'Warehouse Staffing Solutions in Bangalore | Expert Logistics Workforce',
    metaTitle: 'Warehouse Staffing Solutions in Bangalore | Expert Logistics Workforce',
    metaDescription: 'Professional warehouse staffing in Bangalore for logistics, e-commerce, manufacturing. Trained warehouse operators, supervisors, material handlers. Quick deployment guaranteed.',
    componentPath: 'src/components/locations/BangaloreWarehouseStaffing.tsx',
    priority: 8
  },
  {
    keyword: 'security guards outsourcing',
    volume: 260,
    difficulty: 24,
    intent: 'BOFU',
    targetPage: '/services/security-outsourcing',
    optimizedH1: 'Security Guards Outsourcing & Management Services',
    metaTitle: 'Security Guards Outsourcing & Management Services | Professional Security',
    metaDescription: 'Comprehensive security guards outsourcing with trained personnel, compliance management, and 24/7 monitoring. Licensed security agency with pan-India operations.',
    componentPath: 'src/components/services/SecurityOutsourcing.tsx',
    priority: 9
  },
  {
    keyword: 'manufacturing workforce solutions',
    volume: 240,
    difficulty: 27,
    intent: 'BOFU',
    targetPage: '/services/manufacturing-workforce',
    optimizedH1: 'Manufacturing Workforce Solutions | Skilled Production Staff',
    metaTitle: 'Manufacturing Workforce Solutions | Skilled Production Staff | Apex Enterprises',
    metaDescription: 'Specialized manufacturing workforce solutions for production lines, quality control, maintenance. Skilled operators, technicians, supervisors with industry experience.',
    componentPath: 'src/components/services/ManufacturingWorkforce.tsx',
    priority: 10
  },
  {
    keyword: 'compliance management services india',
    volume: 220,
    difficulty: 33,
    intent: 'BOFU',
    targetPage: '/services/compliance-management',
    optimizedH1: 'Compliance Management Services | Labour Law & Statutory Compliance',
    metaTitle: 'Compliance Management Services | Labour Law & Statutory Compliance India',
    metaDescription: 'Complete compliance management services for labour laws, statutory requirements, audit support. Zero penalty guarantee with expert compliance team across India.',
    componentPath: 'src/components/services/ComplianceManagement.tsx',
    priority: 11
  },
  {
    keyword: 'hr outsourcing companies india',
    volume: 200,
    difficulty: 35,
    intent: 'BOFU',
    targetPage: '/services/hr-outsourcing',
    optimizedH1: 'HR Outsourcing Services | Complete Human Resource Management',
    metaTitle: 'HR Outsourcing Services | Complete Human Resource Management | Apex',
    metaDescription: 'End-to-end HR outsourcing services in India. Payroll, compliance, recruitment, employee management. Cost-effective HR solutions for growing businesses.',
    componentPath: 'src/components/services/HROutsourcing.tsx',
    priority: 12
  }
];

export const KEYWORD_CATEGORIES = {
  services: [
    'manpower outsourcing india',
    'payroll compliance services', 
    'housekeeping services for factories',
    'blue collar recruitment india',
    'security guards outsourcing',
    'manufacturing workforce solutions',
    'compliance management services india',
    'hr outsourcing companies india'
  ],
  locations: [
    'labour contractor delhi ncr',
    'temporary staffing agency mumbai',
    'warehouse staffing bangalore'
  ],
  tools: [
    'contract staffing cost calculator'
  ]
};

export const INTENT_MAPPING = {
  BOFU: 'Bottom of Funnel - Ready to Buy',
  MOFU: 'Middle of Funnel - Considering Options',
  TOFU: 'Top of Funnel - Awareness Stage',
  Transactional: 'Immediate Service Need',
  Local: 'Location-Specific Service Need'
};

export const SEO_OPTIMIZATION_TARGETS = {
  titleLength: { min: 50, max: 60 },
  descriptionLength: { min: 150, max: 160 },
  h1Keywords: 'Primary keyword in H1',
  keywordDensity: { min: 1, max: 3 }, // percentage
  internalLinks: { min: 3, max: 8 },
  relatedKeywords: { min: 5, max: 10 }
};

export const CONVERSION_TRACKING = {
  'manpower outsourcing india': 'staffing_inquiry',
  'labour contractor delhi ncr': 'local_contractor_lead',
  'payroll compliance services': 'compliance_consultation',
  'housekeeping services for factories': 'industrial_services_lead',
  'contract staffing cost calculator': 'cost_calculator_usage',
  'temporary staffing agency mumbai': 'temp_staffing_inquiry',
  'blue collar recruitment india': 'recruitment_lead',
  'warehouse staffing bangalore': 'warehouse_staffing_lead',
  'security guards outsourcing': 'security_services_lead',
  'manufacturing workforce solutions': 'manufacturing_inquiry',
  'compliance management services india': 'compliance_audit_request',
  'hr outsourcing companies india': 'hr_outsourcing_consultation'
};

// Helper functions for keyword mapping
export const getKeywordBySlug = (slug: string): KeywordMapping | undefined => {
  return TOP_REVENUE_KEYWORDS.find(k => k.targetPage === slug);
};

export const getKeywordsByIntent = (intent: string): KeywordMapping[] => {
  return TOP_REVENUE_KEYWORDS.filter(k => k.intent === intent);
};

export const getKeywordsByPriority = (limit?: number): KeywordMapping[] => {
  const sorted = TOP_REVENUE_KEYWORDS.sort((a, b) => a.priority - b.priority);
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getKeywordMetrics = () => {
  const totalVolume = TOP_REVENUE_KEYWORDS.reduce((sum, k) => sum + k.volume, 0);
  const avgDifficulty = TOP_REVENUE_KEYWORDS.reduce((sum, k) => sum + k.difficulty, 0) / TOP_REVENUE_KEYWORDS.length;
  
  return {
    totalKeywords: TOP_REVENUE_KEYWORDS.length,
    totalVolume,
    avgDifficulty: Math.round(avgDifficulty),
    intentDistribution: {
      BOFU: getKeywordsByIntent('BOFU').length,
      MOFU: getKeywordsByIntent('MOFU').length,
      Local: getKeywordsByIntent('Local').length,
      Transactional: getKeywordsByIntent('Transactional').length
    }
  };
}; 