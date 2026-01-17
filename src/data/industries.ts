export interface IndustrySolution {
    id: string;
    name: string;
    hero: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
    };
    overview: {
        title: string;
        content: string;
    };
    challenges: {
        title: string;
        items: {
            label: string;
            description: string;
        }[];
    };
    solutions: {
        title: string;
        items: {
            title: string;
            description: string;
            iconName: string;
        }[];
    };
    benefits: {
        title: string;
        items: string[];
    };
    caseStudyId?: string;
}

export const industrySolutions: IndustrySolution[] = [
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        hero: {
            title: 'Precision Workforce Solutions for Modern Manufacturing',
            subtitle: 'APEX FOR MANUFACTURING',
            description: 'Scale your production capacity with 100% compliant, skilled workforce management designed for the "Detroit of India" and Gurgaon industrial corridors.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
        },
        overview: {
            title: 'Empowering India’s Industrial Backbone',
            content: 'From the automotive clusters of Chennai to the manufacturing hubs of Gurgaon and Pune, India’s industrial landscape is undergoing a massive transformation. Apex provides the specialized workforce needed to maintain Industry 4.0 standards while ensuring absolute adherence to the 2026 Labour Codes.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'Labour Code 2026 Compliance', description: 'Navigating the new social security and wage definitions is critical for large-scale factories.' },
                { label: 'Skill Gap in Automation', description: 'Technicians now need to handle IoT-enabled machinery, requiring specialized upskilling.' },
                { label: 'Corridor Mobility', description: 'Rapidly shifting resources between industrial corridors like Manesar and Sriperumbudur.' }
            ]
        },
        solutions: {
            title: 'The Apex Manufacturing Solution',
            items: [
                {
                    title: 'Automated Compliance Engine',
                    description: 'Real-time tracking of 2026 Labour Code metrics across your entire contract workforce.',
                    iconName: 'Shield'
                },
                {
                    title: 'Apex Academy Training',
                    description: 'On-site technical certification for specialized machinery and OSH safety protocols.',
                    iconName: 'Zap'
                },
                {
                    title: 'Pan-India Deployment',
                    description: 'Mobilizing 1000+ certified workers within 14 days in any major industrial zone.',
                    iconName: 'Users'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                '30% reduction in labor-related production delays',
                'Zero regulatory penalties across all 25+ states of operation',
                'Enhanced worker productivity through better welfare and on-site management'
            ]
        },
        caseStudyId: 'techtronic'
    },
    {
        id: 'it-ites',
        name: 'IT & Technology',
        hero: {
            title: 'Scale Your Innovation with Global Tech Talent',
            subtitle: 'APEX FOR TECHNOLOGY',
            description: 'Leveraging Bangalore’s GCC ecosystem and Pune’s IT corridors. We provide the human capital for India’s shift to "Value Creation."',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
        },
        overview: {
            title: 'Powering the Innovation Headquarters',
            content: 'Bangalore, Hyderabad, and Pune have transitioned from back-offices to Innovation Headquarters. Apex supports this transformation by providing niche AI, Cloud, and Cybersecurity talent for Global Capability Centres (GCCs) and domestic tech giants.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'AI Talent Scarcity', description: 'Demand for Generative AI and ML specialized roles has outpaced traditional IT supply by 300%.' },
                { label: 'GCC Compliance Vetting', description: 'Global firms require ultra-rigorous background verification and international compliance alignment.' },
                { label: 'Hybrid Work Logistics', description: 'Managing payroll and local taxes for distributed teams across Tier-2 cities like Kochi and Indore.' }
            ]
        },
        solutions: {
            title: 'The Apex Tech Solution',
            items: [
                {
                    title: 'AI-Native Talent Pipeline',
                    description: 'Proprietary screening for AI, ML, and Data Engineering roles with 48-hour turnaround.',
                    iconName: 'Zap'
                },
                {
                    title: 'GCC Incubation Support',
                    description: 'End-to-end personnel setup for international firms entering the Indian tech market.',
                    iconName: 'Building2'
                },
                {
                    title: 'Tier-2 Scaling Network',
                    description: 'Recruitment hubs in Kochi, Pune, and Ahmedabad for cost-optimized remote scaling.',
                    iconName: 'TrendingUp'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                '45% reduction in time-to-hire for niche technical roles',
                'Lower overhead through specialized contract staffing models',
                '100% background vetting accuracy for global corporate standards'
            ]
        }
    },
    {
        id: 'bfsi',
        name: 'Fintech & BFSI',
        hero: {
            title: 'Compliant Workforce for the 2026 Financial Era',
            subtitle: 'APEX FOR BFSI',
            description: 'High-trust staffing for Mumbai’s financial heart and Ahmedabad’s GIFT City. Secure, regulatory-ready personnel.',
            image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop'
        },
        overview: {
            title: 'Trust through Compliance',
            content: 'As Mumbai solidifies its status as a global financial hub and GIFT City emerges as a fintech powerhouse, the demand for compliant, skilled professionals in BFSI is at an all-time high. Apex provides the secure human infrastructure needed for this growth.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'RBI & IRDAI Rigor', description: 'Evolving 2026 regulations require constant oversight of contract staff in sensitive financial roles.' },
                { label: 'Digital-First Banking', description: 'Frontline staff now need high digital literacy to support India’s UPI-led banking transformation.' },
                { label: 'Rural Expansion KYC', description: 'Managing ground-level KYC and sales teams for Tier-3 branch expansion projects.' }
            ]
        },
        solutions: {
            title: 'The Apex BFSI Solution',
            items: [
                {
                    title: 'Enhanced Vetting Protocol',
                    description: 'Triple-layer background verification tailored for the Banking and Insurance sectors.',
                    iconName: 'Shield'
                },
                {
                    title: 'Fintech Skill Onboarding',
                    description: 'Digital literacy training modules focused on security, data privacy, and modern fintech tools.',
                    iconName: 'Zap'
                },
                {
                    title: 'Hyper-Local Rural Teams',
                    description: 'Localized recruitment networks across 25+ states for rapid branch expansion.',
                    iconName: 'Globe'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                'Zero security breaches linked to contract personnel in 20+ years',
                '100% audit-ready digital documentation for regulatory inspections',
                'Improved customer satisfaction in regional banking hubs'
            ]
        }
    },
    {
        id: 'healthcare',
        name: 'Healthcare & Life Sciences',
        hero: {
            title: 'Pharma & Biotech Talent for the Global Pharmacy',
            subtitle: 'APEX FOR HEALTHCARE',
            description: 'Supporting Hyderabad’s Pharma City and Chennai’s medical hubs with certified, compliant workforce solutions.',
            image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1470&auto=format&fit=crop'
        },
        overview: {
            title: 'The Human Capital of Healing',
            content: 'India serves as the "Global Pharmacy." To maintain this title, the Pharma and Biotech clusters in Hyderabad, Chennai, and Ahmedabad require precision personnel who understand the stakes of Life Sciences. Apex provides this specialized talent.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'GMP Rigor', description: 'Compliance with Good Manufacturing Practices is non-negotiable for pharma workforce.' },
                { label: 'High-Niche Research', description: 'Finding lab technicians and biotech researchers with specific domain expertise.' },
                { label: 'Temperature-Sensitive Logistics', description: 'Staffing for specialized cold-chain logistics and distribution networks.' }
            ]
        },
        solutions: {
            title: 'The Apex Healthcare Solution',
            items: [
                {
                    title: 'Certified Pharma Workforce',
                    description: 'Specialized training for vacuum settings, clean-room protocols, and safety standards.',
                    iconName: 'Microscope'
                },
                {
                    title: 'Clinical Support Staffing',
                    description: 'Certified professionals for hospital operations and clinical research phases.',
                    iconName: 'Activity'
                },
                {
                    title: 'Biotech Talent Sourcing',
                    description: 'Leveraging our network in Hyderabad and Bangalore for niche R&D roles.',
                    iconName: 'Search'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                '100% adherence to GMP and FDA labor standards',
                'Reduced R&D scaling time by 40% through niche sourcing',
                'zero safety incidents in high-risk laboratory environments'
            ]
        }
    },
    {
        id: 'logistics',
        name: 'Logistics & Supply Chain',
        hero: {
            title: 'Connecting India through 2026 Logistics Efficiency',
            subtitle: 'APEX FOR LOGISTICS',
            description: 'Powering Gurgaon’s warehousing corridors and Kochi’s port-led development with rapid-scale workforce.',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop'
        },
        overview: {
            title: 'The Pulse of Modern Commerce',
            content: 'In the age of 10-minute deliveries and global supply chains, logistics has become a workforce game. From the vast warehouses of Bhiwandi and Manesar to the ports of Kochi and Chennai, Apex provides the muscle and intelligence to keep goods moving.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'Extreme Scalability', description: 'Managing 3x workforce spikes during festive sales without quality drop.' },
                { label: 'Last-Mile Reliability', description: 'The constant need for vetted, reliable delivery and warehouse personnel.' },
                { label: 'Asset Security', description: 'Preventing theft and mismanagement in high-volume distribution centers.' }
            ]
        },
        solutions: {
            title: 'The Apex Logistics Solution',
            items: [
                {
                    title: 'Rapid Scalability Engine',
                    description: 'On-demand mobilization of 500+ warehouse staff within 72 hours for peak periods.',
                    iconName: 'Users'
                },
                {
                    title: 'Fleet & Yard Management',
                    description: 'Specialized personnel for automated sorting and heavy machinery operation.',
                    iconName: 'Truck'
                },
                {
                    title: 'Integrated Access Control',
                    description: 'Workforce deployment paired with advanced surveillance and security protocols.',
                    iconName: 'Shield'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                '99.9% fulfillment accuracy across partner warehouses',
                '25% reduction in last-mile operational costs through better staffing',
                'Seamless management of multi-location distribution hubs'
            ]
        }
    },
    {
        id: 'retail',
        name: 'Retail & E-commerce',
        hero: {
            title: 'Customer-First Talent for the Modern Retailer',
            subtitle: 'APEX FOR RETAIL',
            description: 'Scaling frontline brilliance for luxury boutiques in Mumbai and high-speed e-commerce delivery hubs nationwide.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
        },
        overview: {
            title: 'Selling Excellence at Scale',
            content: 'The 2026 retail landscape is phygital—blending physical stores with digital speed. Apex provides the customer-centric professionals and behind-the-scenes staff needed to win in this high-velocity market.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'High Frontline Attrition', description: 'Maintaining consistency in customer experience despite a volatile labor pool.' },
                { label: 'Omnichannel Skills', description: 'Sales staff now need to manage CRM tools and digital inventory in addition to sales.' },
                { label: 'Peak Demand Logistics', description: 'Rapid scaling for Seasonal Sales across thousands of retail touchpoints.' }
            ]
        },
        solutions: {
            title: 'The Apex Retail Solution',
            items: [
                {
                    title: 'Customer Brilliance Training',
                    description: 'Soft-skills and digital literacy training modules for frontline retail staff.',
                    iconName: 'Zap'
                },
                {
                    title: 'E-commerce Flex Staffing',
                    description: 'Scalable backend teams for order processing, logistics, and digital support.',
                    iconName: 'ShoppingCart'
                },
                {
                    title: 'Pan-India Visual Merchandising',
                    description: 'Specialized teams to manage brand standards across multiple city locations.',
                    iconName: 'CheckCircle2'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                '15% improvement in same-store sales through better trained staff',
                'Scalable solutions for 1000+ outlets simultaneously',
                'Reduced training lead-time from 7 days to 48 hours'
            ]
        }
    },
    {
        id: 'fmcg-food',
        name: 'FMCG & Food Processing',
        hero: {
            title: 'Reliable Staffing for India’s Consumption Story',
            subtitle: 'APEX FOR FMCG',
            description: 'Ensuring hygiene and efficiency for Ahmedabad’s textiles and FMCG hubs. From plant to shelf.',
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop'
        },
        overview: {
            title: 'Quality in Every Batch',
            content: 'In the FMCG sector, consistency is king. From the food processing clusters of North India to the packaging hubs of the West, Apex ensures that your production lines are powered by compliant, high-quality talent.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'FSSAI Hygiene Standards', description: 'Absolute adherence to food safety and sanitation protocols is mandatory.' },
                { label: 'Massive Turnover Peaks', description: 'Managing high-volatility labor in processing plants during harvest/festive seasons.' },
                { label: 'Welfare Management', description: 'Ensuring on-site living and welfare standards meet the 2026 Code requirements.' }
            ]
        },
        solutions: {
            title: 'The Apex FMCG Solution',
            items: [
                {
                    title: 'Hygiene Certified Workforce',
                    description: 'Workers certified in FSSAI and HACCP standards for food processing environments.',
                    iconName: 'Shield'
                },
                {
                    title: 'End-to-End Plant Outsourcing',
                    description: 'Full management of plant personnel including laundry, canteen, and transportation.',
                    iconName: 'Users'
                },
                {
                    title: 'Supply Chain Mobility',
                    description: 'Seamless integration of plant labor with distribution and delivery networks.',
                    iconName: 'Truck'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                'Zero safety incidents in partner facilities for 10+ years',
                '30% reduction in production downtime due to labor shortage',
                '100% compliance with new 2026 industrial welfare standards'
            ]
        },
        caseStudyId: 'mdh-food'
    },
    {
        id: 'security',
        name: 'Security & Surveillance',
        hero: {
            title: 'Intelligent Security for the Modern Enterprise',
            subtitle: 'APEX FOR SECURITY',
            description: 'PSARA-compliant guarding, electronic surveillance, and specialized risk management for corporate and industrial India.',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2030&auto=format&fit=crop'
        },
        overview: {
            title: 'Protecting Your Assets & Peace of Mind',
            content: 'In an increasingly complex risk environment, a robust security posture is non-negotiable. Apex provides vetted, highly-trained security personnel and electronic surveillance solutions that meet the highest standards of reliability and compliance across India.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'PSARA Compliance', description: 'Meeting strict state-level Private Security Agencies Regulation Act standards for all personnel.' },
                { label: 'Vetting Accuracy', description: 'Ensuring 100% background verification for personnel in sensitive guarding roles.' },
                { label: 'Tech-Human Hybrid', description: 'Integrating traditional guarding with modern AI-surveillance and gate management systems.' }
            ]
        },
        solutions: {
            title: 'The Apex Security Solution',
            items: [
                {
                    title: 'Vetted Guarding Force',
                    description: 'Elite guarding teams trained in fire safety, conflict resolution, and emergency response.',
                    iconName: 'Shield'
                },
                {
                    title: 'Static & Mobile Patrols',
                    description: '24/7 monitoring of large industrial perimeters and corporate townships.',
                    iconName: 'Activity'
                },
                {
                    title: 'Risk & Compliance Audit',
                    description: 'Regular safety audits to ensure 100% adherence to industrial and residential security norms.',
                    iconName: 'Search'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                'Zero breach incidents across managed sites in the last 12 months',
                '100% PSARA-compliant documentation for every guard',
                'Seamless integration with modern gate management and CCTV ecosystems'
            ]
        }
    },
    {
        id: 'manpower',
        name: 'Facilities & Custom Manpower',
        hero: {
            title: 'Integrated Workforce for Seamless Facility Operations',
            subtitle: 'APEX FOR FACILITIES',
            description: 'From administrative support to housekeeping and technical maintenance. We provide the essential manpower that keeps India’s offices and plants running.',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop'
        },
        overview: {
            title: 'The Backbone of Your Infrastructure',
            content: 'Modern businesses require more than just specialized expertise; they need a reliable, managed workforce to handle the day-to-day operations of their facilities. Apex provides end-to-end manpower solutions for housekeeping, admin support, and general upkeep.'
        },
        challenges: {
            title: 'Common Industry Challenges',
            items: [
                { label: 'Staff Consistency', description: 'Maintaining high service standards despite high attrition in general manpower sectors.' },
                { label: 'Hygiene & Safety Standards', description: 'Strict adherence to sanitation protocols, especially in 2026-grade corporate and lab environments.' },
                { label: 'Operational Scalability', description: 'Scaling administrative and support staff rapidly across multiple geographic locations.' }
            ]
        },
        solutions: {
            title: 'The Apex Facility Solution',
            items: [
                {
                    title: 'Soft Services Management',
                    description: 'Professional housekeeping, pantry management, and front-desk administrative support.',
                    iconName: 'Users'
                },
                {
                    title: 'Managed General Labor',
                    description: 'Skilled and semi-skilled manpower for assembly, packing, and loading operations.',
                    iconName: 'Factory'
                },
                {
                    title: 'Technical Maintenance Staff',
                    description: 'Electricians, plumbers, and HVAC technicians for 24/7 facility uptime.',
                    iconName: 'Zap'
                }
            ]
        },
        benefits: {
            title: 'Strategic Outcomes',
            items: [
                'Lower total cost of ownership for facility operations through managed contracts',
                'Single-point accountability for all administrative and soft-service manpower',
                '100% uptime for critical facility infrastructure (Power, HVAC, Water)'
            ]
        }
    }
];
