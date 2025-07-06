import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { AI_SOLUTIONS } from './utils/ai-workforce';

// Public pages
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import IndustryUpdates from './components/IndustryUpdates';
import LegalServices from './components/LegalServices';
import EmployersPage from './components/EmployersPage';
import JobSeekersPage from './components/JobSeekersPage';
import PartnersPage from './components/PartnersPage';
import Industries from './components/Industries';
import AIWorkforceSolutions from './components/AIWorkforceSolutions';
import AISolutionPage from './components/AISolutionPage';
import AIResumeScreening from './components/AIResumeScreening';
import AIVoiceConnect from './components/AIVoiceConnect';
import CareersPage from './components/CareersPage';
import JobListing from './components/jobs/JobListing';
import JobDetailPage from './components/jobs/JobDetailPage';

// Location pages
import Mumbai from './components/locations/Mumbai';
import Delhi from './components/locations/Delhi';
import Bangalore from './components/locations/Bangalore';
import Pune from './components/locations/Pune';
import Chennai from './components/locations/Chennai';
import Hyderabad from './components/locations/Hyderabad';

// Employee portal
import LoginForm from './components/auth/LoginForm';
import ClientLoginForm from './components/auth/ClientLoginForm';
import DashboardLayout from './components/layout/DashboardLayout';
import ClientDashboard from './pages/ClientDashboard';
import Dashboard from './pages/Dashboard';
import EmployeeClients from './pages/Clients';
import Jobs from './pages/Jobs';
import TimeAndLeave from './pages/TimeAndLeave';
import Documents from './pages/Documents';
import Settings from './pages/Settings';
import { getCurrentUser, getCurrentClient } from './lib/auth';
import Head from './components/layout/Head';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ConversionCTA from './components/ConversionCTA';

const queryClient = new QueryClient();

// SEO metadata configuration for routes
const routeSeoConfig: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Apex Enterprises | AI-Powered Workforce Solutions in India',
    description: 'India\'s leading AI-driven workforce solutions provider. Expert staffing, compliance, and payroll services enhanced with cutting-edge AI technology.',
  },
  '/about': {
    title: 'About Apex Enterprises | AI-Enhanced Workforce Solutions',
    description: 'Learn how Apex Enterprises combines 15+ years of staffing expertise with advanced AI to deliver superior workforce solutions across India.',
  },
  '/services': {
    title: 'AI-Powered Workforce Services | Apex Enterprises India',
    description: 'Comprehensive AI-enhanced staffing, compliance, and payroll services tailored for Indian businesses of all sizes across 28 states.',
  },
  '/services/marketing-services': {
    title: 'Marketing Services | Apex Enterprises',
    description: 'Full-stack marketing services: digital marketing, branding, and campaign execution for businesses in India.',
  },
  '/contact': {
    title: 'Contact Apex Enterprises | AI Workforce Solutions',
    description: 'Connect with India\'s premier AI-powered workforce solutions provider. Offices in Mumbai, Delhi, Bangalore, Chennai, and Hyderabad.',
  },
  '/ai-workforce-solutions': {
    title: 'AI-Powered Workforce Solutions | Apex Enterprises',
    description: 'Transforming Indian businesses with AI-driven talent matching, predictive analytics, automated compliance, and intelligent workforce management solutions with proven results.',
  },
  '/ai-resume-screening': {
    title: 'AI Resume Screening | Apex Enterprises',
    description: 'Cut hiring time by 65% with our AI-powered resume screening technology. Automatically match candidates to jobs with 94% accuracy across all 28 Indian states.',
  },
  '/ai-voice-connect': {
    title: 'AI Voice Calling Agent | Apex Enterprises',
    description: 'Our conversational AI system conducts initial candidate screening calls, handles scheduling, and responds to queries in multiple Indian languages with natural-sounding voice.',
  },
  '/portfolio': {
    title: 'Our Portfolio | Apex Enterprises',
    description: 'Explore our successful AI-driven workforce solutions implemented across various industries in India. Case studies and success stories from our clients.'
  },
  '/clients': {
    title: 'Our Clients | Apex Enterprises',
    description: 'Trusted by leading organizations across India. View our client testimonials and success stories in AI-powered workforce management and compliance.'
  },
  '/updates': {
    title: 'Industry Updates | Apex Enterprises',
    description: 'Latest news and updates on workforce technology, AI innovations, labor laws, compliance requirements, and workforce management trends in India.'
  },
  '/locations/mumbai': {
    title: 'Mumbai AI Workforce Solutions | Apex Enterprises',
    description: 'Specialized AI-powered staffing and workforce management services in Mumbai, Maharashtra. Local expertise with intelligent staffing solutions for Mumbai businesses.'
  },
  '/locations/delhi': {
    title: 'Staffing Company in Delhi NCR | Apex Enterprises',
    description: 'Premier staffing solutions in Delhi NCR. Contract staffing, payroll services, and regulatory compliance for Gurgaon, Noida, Faridabad, and Ghaziabad regions with local expertise.'
  },
  '/locations/bangalore': {
    title: 'IT Staffing Services in Bangalore | Apex Enterprises',
    description: 'Specialized IT staffing and tech recruitment services in Bangalore. AI-powered talent matching for software development, data science, cloud, and cybersecurity roles across all tech hubs.'
  },
  '/careers': {
    title: 'Careers at Apex Enterprises | AI Workforce Solutions',
    description: 'Join India\'s leading AI-powered workforce solutions provider. Explore exciting career opportunities across technology, operations, HR, and more.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Apex Enterprises',
    description: 'Learn how Apex Enterprises collects, uses, shares and safeguards personal information in accordance with Indian data-protection laws.'
  },
  '/terms-of-service': {
    title: 'Terms of Service | Apex Enterprises',
    description: 'Review the terms and conditions that govern your use of the Apex Enterprises website and related services.'
  }
};

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    getCurrentUser().then((user) => {
      setIsAuthenticated(!!user);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/employee/login" />;
}

function ClientPrivateRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    getCurrentClient().then((client) => {
      setIsAuthenticated(!!client);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/client/login" />;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  
  // Determine which SEO config to use
  // First check for exact path match
  let seoConfig = routeSeoConfig[pathname];
  
  // If no exact match, check for parent routes
  if (!seoConfig) {
    // Check if it's a service subpage
    if (pathname.startsWith('/services/')) {
      const serviceName = pathname.split('/').pop()?.replace(/-/g, ' ');
      seoConfig = {
        title: `${serviceName ? serviceName.charAt(0).toUpperCase() + serviceName.slice(1) : 'Services'} | Apex Enterprises`,
        description: `Professional AI-powered ${serviceName} services across India with complete automation and intelligent insights. Trusted workforce solutions provider since 2001.`
      };
    }
    // Check if it's an AI solution detail page
    else if (pathname.startsWith('/ai-workforce-solutions/')) {
      const solutionId = pathname.split('/').pop();
      const solution = AI_SOLUTIONS.find(s => s.id === solutionId);
      
      if (solution) {
        seoConfig = {
          title: `${solution.title} | AI Workforce Solutions | Apex Enterprises`,
          description: `${solution.description} Proven results across India with measurable improvements in efficiency and performance.`
        };
      } else {
        seoConfig = {
          title: `AI Workforce Solutions | Apex Enterprises`,
          description: `Transform your workforce with cutting-edge artificial intelligence. Our intelligent solutions combine deep industry expertise with advanced technology.`
        };
      }
    }
    // Check if it's an industry subpage
    else if (pathname.startsWith('/industries/')) {
      const industryName = pathname.split('/').pop()?.replace(/-/g, ' ');
      seoConfig = {
        title: `${industryName ? industryName.charAt(0).toUpperCase() + industryName.slice(1) : 'Industry'} AI Workforce Solutions | Apex Enterprises`,
        description: `Specialized AI-powered workforce solutions for the ${industryName} industry in India. Intelligent staffing, analytics, and compliance services tailored to your industry needs.`
      };
    }
    // Check if it's a location subpage
    else if (pathname.startsWith('/locations/')) {
      const locationName = pathname.split('/').pop()?.replace(/-/g, ' ');
      seoConfig = {
        title: `${locationName ? locationName.charAt(0).toUpperCase() + locationName.slice(1) : 'Location'} AI Workforce Solutions | Apex Enterprises`,
        description: `Intelligent workforce solutions in ${locationName}. AI-powered staffing, analytics, and compliance services tailored to businesses in ${locationName}.`
      };
    }
    // Default to homepage config if no match
    else {
      seoConfig = routeSeoConfig['/'];
    }
  }
  
  // Generate breadcrumbs for structured data
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  paths.forEach((segment, index) => {
    breadcrumbs.push({
      name: segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      url: `/${paths.slice(0, index + 1).join('/')}`,
    });
  });

  // Prevent background scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Head 
        title={seoConfig.title}
        description={seoConfig.description}
        canonicalPath={pathname}
        breadcrumbs={breadcrumbs}
      />
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout><Homepage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
            
            {/* Services Routes */}
            <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/contract-staffing" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/payroll-services" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/regulatory-compliance" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/workforce-analytics" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/training-development" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/india-deployment" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/labour-law-advisory" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/payroll-compliance" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/specialised-hiring" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/marketing-services" element={<PublicLayout><Services /></PublicLayout>} />
            <Route path="/services/ai-workforce-analytics" element={<PublicLayout><AIWorkforceSolutions /></PublicLayout>} />
            
            {/* AI Solutions */}
            <Route path="/ai-workforce-solutions" element={<PublicLayout><AIWorkforceSolutions /></PublicLayout>} />
            <Route path="/ai-workforce-solutions/:solutionId" element={<PublicLayout><AISolutionPage /></PublicLayout>} />
            <Route path="/ai-resume-screening" element={<PublicLayout><AIResumeScreening /></PublicLayout>} />
            <Route path="/ai-voice-connect" element={<PublicLayout><AIVoiceConnect /></PublicLayout>} />
            
            {/* Location Routes */}
            <Route path="/locations/mumbai" element={<Mumbai />} />
            <Route path="/locations/delhi" element={<Delhi />} />
            <Route path="/locations/bangalore" element={<Bangalore />} />
            <Route path="/locations/pune" element={<Pune />} />
            <Route path="/locations/chennai" element={<Chennai />} />
            <Route path="/locations/hyderabad" element={<Hyderabad />} />
            
            <Route path="/portfolio" element={<PublicLayout><Portfolio /></PublicLayout>} />
            <Route path="/clients" element={<PublicLayout><Clients /></PublicLayout>} />
            <Route path="/updates" element={<PublicLayout><IndustryUpdates /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
            <Route path="/legal" element={<PublicLayout><LegalServices /></PublicLayout>} />
            <Route path="/legal-services" element={<PublicLayout><LegalServices /></PublicLayout>} />
            <Route path="/employers" element={<PublicLayout><EmployersPage /></PublicLayout>} />
            <Route path="/job-seekers" element={<PublicLayout><JobSeekersPage /></PublicLayout>} />
            <Route path="/partners" element={<PublicLayout><PartnersPage /></PublicLayout>} />
            
            {/* Industries Routes */}
            <Route path="/industries" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/industries/manufacturing" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/industries/it-ites" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/industries/bfsi" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/industries/ecommerce-retail" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/industries/logistics" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/industries/healthcare" element={<PublicLayout><Industries /></PublicLayout>} />
            
            {/* Additional Routes */}
            <Route path="/case-studies" element={<PublicLayout><Industries /></PublicLayout>} />
            
            {/* Client Portal Routes */}
            <Route path="/client/login" element={<ClientLoginForm />} />
            <Route
              path="/client/dashboard/*"
              element={
                <ClientPrivateRoute>
                  <ClientDashboard />
                </ClientPrivateRoute>
              }
            />
            
            {/* Employee Portal Routes */}
            <Route path="/employee/login" element={<LoginForm />} />
            <Route
              path="/employee/*"
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="clients" element={<EmployeeClients />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="time" element={<TimeAndLeave />} />
              <Route path="documents" element={<Documents />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Redirect /dashboard to /employee for backward compatibility */}
            <Route path="/dashboard/*" element={<Navigate to="/employee" replace />} />
            
            {/* Careers Page */}
            <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
            <Route path="/careers/listings" element={<PublicLayout><JobListing /></PublicLayout>} />
            <Route path="/careers/:jobId" element={<PublicLayout><JobDetailPage /></PublicLayout>} />

            {/* Policy & Legal Pages */}
            <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
            <Route path="/terms-of-service" element={<PublicLayout><TermsOfService /></PublicLayout>} />
          </Routes>
        </Router>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </HelmetProvider>
  );
}