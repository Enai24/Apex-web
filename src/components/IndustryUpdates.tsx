'use client';

import React from 'react';
import { Newspaper, TrendingUp, Scale, Building2, ChevronRight, Tag, Search, Filter, X } from 'lucide-react';
import { SEO } from '../utils/seo';

interface Update {
  id: string;
  date: string;
  category: 'industry' | 'regulatory' | 'market' | 'company';
  title: string;
  summary: string;
  source: {
    name: string;
    url: string;
  };
  tags: string[];
}

const updates: Update[] = [
  // --- Jan 2026 ---
  {
    id: '1',
    date: '2026-01-15',
    category: 'regulatory',
    title: 'Final Countdown: Indian Labour Codes Full Operationalization set for April 1, 2026',
    summary: 'The Ministry of Labour has confirmed that all states have finalized their rules. Organizations must ensure that Basic Salary + DA constitutes 50% of the total CTC by the April deadline.',
    source: { name: 'PIB India', url: 'https://pib.gov.in' },
    tags: ['Labour Codes 2026', 'Compliance', 'Payroll Reform', 'Basic Pay']
  },
  {
    id: '2',
    date: '2026-01-12',
    category: 'market',
    title: 'India Ranks 2nd Globally in Employment Outlook for Q1 2026',
    summary: 'With a Net Employment Outlook (NEO) of 52%, India trails only the US in hiring optimism. Finance, Insurance, and Real Estate sectors reported the highest intent to expand workforces.',
    source: { name: 'ManpowerGroup Report 2026', url: 'https://www.manpowergroup.com' },
    tags: ['Employment Outlook', 'Hiring Trends', '2026 Jobs', 'Economy']
  },
  {
    id: '3',
    date: '2026-01-10',
    category: 'industry',
    title: 'Female Employability Surpasses Male Rates in India for the First Time',
    summary: '2026 data shows female employability at 54% compared to 51.5% for males. The surge is credited to widespread hybrid work adoption and specialized digital upskilling programs.',
    source: { name: 'India Skills Report 2026', url: 'https://wheebox.com/india-skills-report' },
    tags: ['DEI', 'Employability', 'Women in Tech', 'Hybrid Work']
  },
  {
    id: '4',
    date: '2026-01-08',
    category: 'industry',
    title: 'AI-Native Recruitment: 32% Growth in AI-Linked Roles for 2026',
    summary: 'Recruitment is shifting from AI adoption to AI-native strategies. India now holds 16% of the global AI talent pool, with massive demand for Generative AI and LLM specialized engineers.',
    source: { name: 'Tech Talent Outlook', url: 'https://nasscom.in' },
    tags: ['AI-Native', 'GenAI', 'Tech Hiring', 'NASSCOM']
  },
  {
    id: '5',
    date: '2026-01-05',
    category: 'company',
    title: 'Apex Enterprises Launches 2026 Compliance Sandbox for Clients',
    summary: 'As the April 2026 Labour Code deadline approaches, we have launched a digital sandbox for clients to simulate payroll transitions and audit social security contributions.',
    source: { name: 'Apex Newsroom', url: '/services' },
    tags: ['Apex Innovation', 'Compliance Sandbox', 'Payroll Audit', 'Social Security']
  },
  {
    id: '6',
    date: '2026-01-02',
    category: 'market',
    title: 'Tier-2 Cities Now Account for 32% of Total Job Openings in India',
    summary: 'Cities like Kochi, Pune, and Indore are outpacing metros in hiring growth. Fortune 500 GCCs are establishing specialized "Value Centres" in these regions for cost and talent efficiency.',
    source: { name: 'Regional Growth Index', url: 'https://www.thehindu.com/business' },
    tags: ['Tier-2 Cities', 'Kochi', 'Pune', 'GCC Satellite']
  },

  // --- Late 2025 ---
  {
    id: '7',
    date: '2025-12-28',
    category: 'regulatory',
    title: 'Industrial Relations Code 2026: New Retrenchment Thresholds Active',
    summary: 'The threshold for prior government approval for layoffs has been officially raised to 300 workers across all states, providing mid-sized firms with greater operational flexibility.',
    source: { name: 'Economic Times HR', url: 'https://hr.economictimes.indiatimes.com' },
    tags: ['Industrial Relations', 'Labour Laws', 'Flexibility', 'HR Policy']
  },
  {
    id: '8',
    date: '2025-12-20',
    category: 'industry',
    title: 'Sustainable Staffing: Green Intensity Becomes a Key Hiring Metric',
    summary: 'Top Indian corporates are now auditing the carbon footprint of their supply chain labor. Apex Enterprises leads with "Green Staffing" solutions for renewable energy giants.',
    source: { name: 'Sustainability Review', url: 'https://www.financialexpress.com' },
    tags: ['Green Staffing', 'ESG', 'Renewable Energy', 'Future of Work']
  },
  {
    id: '9',
    date: '2025-12-10',
    category: 'market',
    title: 'Gig Economy 2.0: 23.5 Million Freelancers Projected by 2030',
    summary: 'Project-based hiring saw a 38% growth in 2025. Platforms are now integrating portable social security accounts for freelancers under the new Social Security Code.',
    source: { name: 'Workforce Hub India', url: 'https://www.livemint.com' },
    tags: ['Gig Economy', 'Freelance', 'Social Security', 'Portability']
  },
  {
    id: '10',
    date: '2025-11-25',
    category: 'industry',
    title: 'Bangalore GCCs Transition to "Innovation Headquarters" for 2026',
    summary: 'Bangalore-based GCCs are no longer support hubs; they are now responsible for global IP creation in Cybersecurity and Data Engineering, driving record high-end hiring.',
    source: { name: 'Karnataka Tech Herald', url: 'https://www.deccanherald.com' },
    tags: ['Bangalore', 'GCC', 'IP Creation', 'Data Engineering']
  },
  {
    id: '11',
    date: '2025-11-15',
    category: 'market',
    title: 'Mumbai BFSI Leads in AI Adoption: 41% YoY Growth in AI Jobs',
    summary: 'Mumbai\'s banking sector has integrated AI for credit risk and digital underwriting at scale, creating a niche market for "Fintech-AI Hybrid" professionals.',
    source: { name: 'Mumbai Financial Review', url: 'https://www.business-standard.com' },
    tags: ['Mumbai', 'BFSI', 'AI in Finance', 'Fintech']
  },
  {
    id: '12',
    date: '2025-11-01',
    category: 'regulatory',
    title: 'OSHWC Code: Mandatory Health Check-ups for Staff Over 40',
    summary: 'New safety codes mandate annual health check-ups for employees aged 40+. Apex Enterprises partners with leading diagnostic labs for PAN-India client compliance.',
    source: { name: 'Safety & Health India', url: 'https://labour.gov.in' },
    tags: ['OSHWC', 'Health Audit', 'Safety Standards', 'Compliance']
  },

  // --- Historical SEO Authority (2025 and earlier) ---
  {
    id: '13',
    date: '2025-10-15',
    category: 'industry',
    title: 'Hyderabad Green Pharma City: A Milestone in Global Life Sciences',
    summary: 'With ₹11,100 crore in committed investments, Hyderabad\'s Pharma City project is now operational, creating 22,000+ specialized R&D roles.',
    source: { name: 'Telangana Pharma News', url: 'https://www.newindianexpress.com' },
    tags: ['Hyderabad', 'Pharma', 'BioTech', 'Manufacturing']
  },
  {
    id: '14',
    date: '2025-09-20',
    category: 'market',
    title: 'Chennai Automotive Shift: Detroit of India Becomes EV Capital',
    summary: 'Chennai\'s auto cluster crosses 30% contribution to national production, with 70% of new hires focused on Electric Vehicle technology.',
    source: { name: 'Chennai Industrial News', url: 'https://www.thehindu.com' },
    tags: ['Chennai', 'Automotive', 'EV Sector', 'Manufacturing']
  },
  {
    id: '15',
    date: '2025-08-10',
    category: 'company',
    title: 'Apex Enterprises Achieves 500,000+ Successful Managed Placements',
    summary: 'Celebrating a milestone in India\'s staffing history, Apex Enterprises has now successfully managed half a million workforce placements across 20+ industrial sectors.',
    source: { name: 'Apex Internal', url: '/about' },
    tags: ['Milestone', 'Scale', 'Excellence', 'Apex Legacy']
  },
  {
    id: '16',
    date: '2025-07-05',
    category: 'market',
    title: 'GIFT City Ahmedabad: Surge in NRI Investment and Fintech Staffing',
    summary: 'GIFT City achieves its highest global ranking at 46th, driving a massive demand for international treasury and ship-leasing compliance experts.',
    source: { name: 'Ahmedabad Business', url: 'https://www.hindustantimes.com' },
    tags: ['Ahmedabad', 'GIFT City', 'Fintech', 'NRI']
  },
  {
    id: '17',
    date: '2025-06-15',
    category: 'industry',
    title: 'Skill-First Hiring: 60% of Recruiters Prioritize Tech Over Degrees',
    summary: 'The 2025 hiring landscape confirmed the death of the "degree-only" filter, as companies shifted to verifiable hands-on skills in Cloud and Cyber.',
    source: { name: 'HR World India', url: 'https://hr.economictimes.indiatimes.com' },
    tags: ['Skills-First', 'Recruitment Trends', 'Upskilling', 'Education']
  },
  {
    id: '18',
    date: '2025-05-20',
    category: 'market',
    title: 'Gurgaon-Manesar Industrial Corridor: Logistics Hiring Grows 14%',
    summary: 'Automation in warehousing and the National Logistics Policy have transformed Gurgaon into India\'s most advanced supply chain talent hub.',
    source: { name: 'NCR Logistics Review', url: 'https://www.businessworld.in' },
    tags: ['Gurgaon', 'Logistics', 'Supply Chain', 'NCR']
  },
  {
    id: '19',
    date: '2025-04-10',
    category: 'regulatory',
    title: 'DPDPA Compliance: HR Data Privacy Becomes Non-Negotiable',
    summary: 'The Digital Personal Data Protection Act implementation is now final, requiring 100% encryption and consent for employee records management.',
    source: { name: 'Data Privacy India', url: 'https://www.meity.gov.in' },
    tags: ['Data Privacy', 'DPDPA', 'HR Tech', 'Compliance']
  },
  {
    id: '20',
    date: '2025-03-01',
    category: 'market',
    title: 'Kochi & Pune: The New Hubs for Global Value Creation',
    summary: 'Kochi\'s Lulu IT Park and Pune\'s Fintech valley are now preferred over metros for high-value GCC operations due to better work-life balance and talent retention.',
    source: { name: 'Emerging Hubs Report', url: 'https://www.moneycontrol.com' },
    tags: ['Kochi', 'Pune', 'Tier-2', 'Work-Life Balance']
  },
  {
    id: '21',
    date: '2025-02-15',
    category: 'industry',
    title: 'Digital Onboarding: Zero Manual Intervention Becomes the Standard',
    summary: 'Staffing firms that reached 100% digital compliance in 2025 reported a 30% reduction in document errors and 50% faster onboarding for blue-collar staff.',
    source: { name: 'HR Innovation News', url: 'https://www.peoplematters.in' },
    tags: ['Digital Onboarding', 'Automation', 'HR Tech', 'Efficiency']
  },
  {
    id: '22',
    date: '2025-01-20',
    category: 'market',
    title: 'Renewable Energy Labor: 1 Lakh Jobs in Solar and Wind Sector',
    summary: 'India\'s Pursuit of Net-Zero goals is driving massive hiring in regional manufacturing hubs in Gujarat and Rajasthan for sustainability engineers.',
    source: { name: 'Green Tech India', url: 'https://www.saurenergy.com' },
    tags: ['Green Jobs', 'Solar', 'Sustainability', 'Manufacturing']
  }
];

const categoryIcons: Record<Update['category'], React.ElementType> = {
  industry: Newspaper,
  regulatory: Scale,
  market: TrendingUp,
  company: Building2,
};

const categoryColors: Record<Update['category'], { border: string; bg: string; text: string }> = {
  industry: { border: 'border-[#EE3D2C]', bg: 'bg-[#EE3D2C]/5', text: 'text-[#EE3D2C]' },
  regulatory: { border: 'border-[#1B292E]', bg: 'bg-[#1B292E]/5', text: 'text-[#1B292E]' },
  market: { border: 'border-[#0060FE]', bg: 'bg-[#0060FE]/5', text: 'text-[#0060FE]' },
  company: { border: 'border-[#5D6B6F]', bg: 'bg-[#5D6B6F]/5', text: 'text-[#5D6B6F]' },
};

export default function IndustryUpdates() {
  const [selectedCategory, setSelectedCategory] = React.useState<Update['category'] | null>(null);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    updates.forEach(update => update.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredUpdates = React.useMemo(() => {
    const sorted = [...updates].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sorted.filter(update => {
      const matchesCategory = !selectedCategory || update.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => update.tags.includes(tag));
      const matchesSearch = !searchQuery ||
        update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesTags && matchesSearch;
    });
  }, [selectedCategory, selectedTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SEO
        title="Industry Updates | Apex Enterprises | Workforce Authority Jan 2026"
        description="Daily insights on Indian staffing trends, Labour Code 2026 compliance, AI-native recruitment, and regional hiring news from major hubs like Bangalore, Mumbai, Gurgaon, and Hyderabad."
      />

      {/* Header Section */}
      <section className="bg-oat-medium py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-sm text-orange-red uppercase tracking-widest mb-4 block">JAN 2026 INTELLIGENCE</span>
            <h1 className="text-navy text-[40px] md:text-[56px] font-medium leading-[1.1] mb-6">
              Industry Updates
            </h1>
            <p className="text-teal-gray text-lg md:text-xl leading-relaxed">
              Your real-time briefing on India's 2026 workforce landscape—from the April Labour Code deadline to AI-native recruitment trends in Tier-2 hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 bg-white flex-grow">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Filters */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24 space-y-10">

                {/* Search */}
                <div>
                  <h3 className="text-navy text-xs font-bold uppercase tracking-widest mb-4">Search Updates</h3>
                  <div className="relative border-b-2 border-border focus-within:border-navy transition-colors">
                    <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-gray" />
                    <input
                      type="text"
                      placeholder="Labour Code, City, or AI..."
                      className="w-full pl-7 pr-4 py-3 bg-transparent focus:outline-none text-sm font-medium"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-navy text-xs font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
                    Categories
                    {selectedCategory && (
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="text-[10px] text-orange-red hover:underline"
                      >
                        Clear
                      </button>
                    )}
                  </h3>
                  <div className="space-y-1">
                    {(Object.entries(categoryIcons) as [Update['category'], React.ElementType][]).map(([category, Icon]) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-all group ${selectedCategory === category
                            ? 'bg-navy text-white'
                            : 'text-teal-gray hover:bg-oat-medium/10 hover:text-navy hover:pl-4 border-l-2 border-transparent hover:border-orange-red'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className={selectedCategory === category ? 'text-white' : 'text-teal-gray group-hover:text-orange-red'} />
                          <span className="capitalize">{category}</span>
                        </div>
                        {selectedCategory === category && <X size={14} className="text-white/60" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topics / Tags */}
                <div>
                  <h3 className="text-navy text-xs font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
                    Trending for 2026
                    {selectedTags.length > 0 && (
                      <button
                        onClick={() => setSelectedTags([])}
                        className="text-[10px] text-orange-red hover:underline"
                      >
                        Clear
                      </button>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider border transition-all ${selectedTags.includes(tag)
                            ? 'bg-orange-red border-orange-red text-white shadow-sm'
                            : 'bg-white border-border text-teal-gray hover:border-navy hover:text-navy'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Updates Grid */}
            <main className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <p className="text-teal-gray text-xs font-medium uppercase tracking-widest">
                  Showing <span className="text-navy font-bold">{filteredUpdates.length}</span> results for Jan 2026
                </p>
              </div>

              {filteredUpdates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                  {filteredUpdates.map((update) => {
                    const Icon = categoryIcons[update.category];
                    const styles = categoryColors[update.category];

                    return (
                      <article key={update.id} className="group flex flex-col h-full bg-white transition-all transform hover:-translate-y-1">
                        {/* Card Image Area */}
                        <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-oat flex items-center justify-center border border-border/50">
                          <div className={`absolute inset-0 opacity-10 ${styles.bg}`} />
                          <Icon className={`h-12 w-12 ${styles.text} relative z-10 transition-transform group-hover:scale-110 duration-500`} />
                          <div className="absolute top-4 left-4">
                            <div className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-white border border-border shadow-sm ${styles.text}`}>
                              {update.category}
                            </div>
                          </div>
                        </div>

                        {/* Metadata Bar */}
                        <div className={`mb-4 border-l-4 pl-3 ${styles.border}`}>
                          <time className="text-[10px] font-mono text-teal-gray uppercase">
                            {new Date(update.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <h3 className="text-navy text-xl font-medium leading-tight mb-4 group-hover:text-orange-red transition-colors min-h-[3rem]">
                            {update.title}
                          </h3>
                          <p className="text-teal-gray text-sm line-clamp-3 mb-6 leading-relaxed">
                            {update.summary}
                          </p>
                        </div>

                        {/* Tags Preview */}
                        <div className="flex flex-wrap gap-1 mb-6">
                          {update.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[9px] font-bold text-teal-gray uppercase tracking-tighter bg-oat px-2 py-0.5 border border-border/30">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer / Read More */}
                        <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                          <a
                            href={update.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[11px] font-bold text-navy hover:text-orange-red group/link transition-colors tracking-widest"
                          >
                            LEARN MORE
                            <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                          </a>
                          <span className="text-[10px] font-mono text-teal-gray/60 italic">{update.source.name}</span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-oat border-2 border-dashed border-border rounded-lg">
                  <p className="text-teal-gray text-lg mb-4">No results for <span className="text-navy font-bold">"{searchQuery}"</span></p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedTags([]);
                      setSearchQuery('');
                    }}
                    className="text-orange-red font-bold hover:underline uppercase tracking-widest text-xs"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </main>

          </div>
        </div>
      </section>

      {/* Apex 2026 Mission - Dynamic Branding */}
      <section className="bg-navy py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-4xl font-medium mb-12">Leading India's <span className="text-orange-red">2026 Workforce</span> Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="bg-white/5 p-8 border-l-2 border-orange-red">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Labour Code Readiness</h4>
              <p className="text-white/60 text-sm">Our 2026 Audit engine ensures client payroll and contracts are 100% compliant with the April April 1 deadline.</p>
            </div>
            <div className="bg-white/5 p-8 border-l-2 border-white/20">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">AI-Native Talent</h4>
              <p className="text-white/60 text-sm">Proprietary LLM-based screening for Bangalore and Hyderabad tech hubs, reducing time-to-hire for niche AI roles.</p>
            </div>
            <div className="bg-white/5 p-8 border-l-2 border-white/20">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Tier-2 Scale</h4>
              <p className="text-white/60 text-sm">Exclusive recruitment networks in Kochi, Pune, and Coimbatore to support the Tier-2 value centre boom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-oat-medium py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-border p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-premium">
            <div className="md:w-1/2">
              <h2 className="text-navy text-3xl font-medium mb-4">Stay Ahead of 2026</h2>
              <p className="text-teal-gray">The ultimate workforce briefing for India. Trusted by the nation's top 200 HR Directors.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex border-b-2 border-navy">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow px-2 py-3 text-sm focus:outline-none bg-transparent font-medium"
                />
                <button className="bg-navy text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-orange-red transition-all">
                  Brief Me
                </button>
              </form>
              <p className="text-[10px] text-teal-gray/60 mt-4">By subscribing, you agree to receive strategic insights from Apex Enterprises.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}