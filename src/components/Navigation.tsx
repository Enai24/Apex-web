import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, ChevronRight, LogIn, Users, Shield, BarChart2, FileText, 
  FileCheck, Award, Briefcase, Cpu, Brain, Layers, Globe2
} from 'lucide-react';
import logo from '../assets/logo.png';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ElementType;
  children?: {
    name: string;
    description?: string;
    href: string;
    icon?: React.ElementType;
  }[];
  highlight?: boolean;
}

const navigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      {
        name: 'Contract Staffing',
        description: 'Compliant workforce solutions across India',
        href: '/services/contract-staffing',
        icon: Users
      },
      {
        name: 'Payroll Services',
        description: 'End-to-end payroll with statutory compliance',
        href: '/services/payroll-services',
        icon: FileCheck
      },
      {
        name: 'Regulatory Compliance',
        description: 'Labor law compliance across all Indian states',
        href: '/services/regulatory-compliance',
        icon: Shield
      },
      {
        name: 'AI Workforce Analytics',
        description: 'Data-driven workforce insights and predictions',
        href: '/services/workforce-analytics',
        icon: Brain,
      },
      {
        name: 'Training & Development',
        description: 'Industry-aligned upskilling programs',
        href: '/services/training-development',
        icon: Award
      },
      {
        name: 'Pan-India Deployment',
        description: 'Workforce solutions across 25+ Indian cities',
        href: '/services/india-deployment',
        icon: Globe2
      }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      {
        name: 'Manufacturing',
        href: '/industries/manufacturing',
        icon: Layers
      },
      {
        name: 'IT & ITES',
        href: '/industries/it-ites',
        icon: Cpu
      },
      {
        name: 'Banking & Financial Services',
        href: '/industries/bfsi',
        icon: BarChart2
      },
      {
        name: 'E-commerce & Retail',
        href: '/industries/ecommerce-retail',
        icon: Briefcase
      }
    ]
  },
  {
    name: 'Legal',
    href: '/legal-services',
    icon: FileText
  },
  {
    name: 'Contact',
    href: '/contact',
    highlight: true
  }
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">Apex Enterprises</span>
            <img className="h-12 w-auto" src={logo} alt="Apex Enterprises" />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <div 
                  className="flex items-center gap-x-1 py-2 cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span 
                    className={`text-sm font-medium ${pathname.startsWith(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} group-hover:text-blue-600 transition-colors`}
                  >
                    {item.name}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-none ${pathname.startsWith(item.href) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'} transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                  
                  {/* Dropdown menu */}
                  <div 
                    className={`absolute -left-8 top-full z-10 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 ${
                      activeDropdown === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      {item.children.map((child) => (
                        <div
                          key={child.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 transition-colors"
                        >
                          {child.icon && (
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                              <child.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                            </div>
                          )}
                          <div className="flex-auto">
                            <Link
                              to={child.href}
                              className="block font-medium text-gray-900 group-hover:text-blue-600 transition-colors"
                            >
                              {child.name}
                              <span className="absolute inset-0" />
                            </Link>
                            {child.description && (
                              <p className="mt-1 text-gray-600 group-hover:text-gray-700 transition-colors">{child.description}</p>
                            )}
                          </div>
                          <ChevronRight className="h-5 w-5 flex-none text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) => 
                    `py-2 text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    } ${item.highlight ? 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full hover:shadow-md transition-all' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            <LogIn className="h-4 w-4" />
            <span>Client Portal</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 overflow-y-auto lg:hidden shadow-xl transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Apex Enterprises</span>
            <img className="h-10 w-auto" src={logo} alt="Apex Enterprises" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-2">
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between text-base font-medium text-gray-900 hover:text-blue-600 py-2"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="mt-2 space-y-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center gap-x-3 rounded-lg py-2 pl-3 pr-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.icon && <child.icon className="h-5 w-5 flex-none text-gray-500" />}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-2 text-base font-medium ${
                      pathname === item.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                    } ${item.highlight ? 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg hover:shadow-md transition-all inline-block' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 py-6">
            <Link
              to="/login"
              className="flex items-center gap-x-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="h-5 w-5 flex-none text-gray-500" />
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 