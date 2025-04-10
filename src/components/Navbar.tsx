import React from 'react';
import { Menu, X, Phone, Mail, ChevronDown, Shield, Brain, Globe2, Users, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './common/Logo';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navigation = [
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Contract Staffing', href: '/services/contract-staffing' },
      { name: 'Payroll & Compliance', href: '/services/payroll-compliance' },
      { name: 'Labour Law Advisory', href: '/services/labour-law-advisory' },
      { name: 'Specialized Hiring', href: '/services/specialised-hiring' },
    ],
    icon: Users
  },
  { 
    name: 'AI Workforce Solutions', 
    href: '/ai-workforce-solutions',
    dropdown: [
      { name: 'AI Resume Screening', href: '/ai-resume-screening' },
      { name: 'Talent Matching', href: '/ai-workforce-solutions/ai-talent-matching' },
      { name: 'Predictive Analytics', href: '/ai-workforce-solutions/predictive-analytics' },
      { name: 'Automated Compliance', href: '/ai-workforce-solutions/automated-compliance' },
      { name: 'AI Voice Calling Agent', href: '/ai-voice-connect' },
    ],
    icon: Brain
  },
  { name: 'Industries', href: '/industries', icon: Globe2 },
  { 
    name: 'For Stakeholders',
    href: '#',
    dropdown: [
      { name: 'For Employers', href: '/employers' },
      { name: 'For Job Seekers', href: '/job-seekers' },
      { name: 'For Partners', href: '/partners' },
    ],
    icon: Users
  },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Legal', href: '/legal', icon: Shield },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  
  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location, setMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !((event.target as Element).closest('.nav-dropdown-trigger'))) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1F4287] to-[#162c5b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center gap-x-4">
              <a 
                href="tel:+910124-2340139" 
                className="flex items-center gap-x-1.5 text-sm text-white hover:text-blue-100 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>+91 0124 2340139</span>
              </a>
              <a 
                href="mailto:mail@apexenterprises.net" 
                className="hidden sm:flex items-center gap-x-1.5 text-sm text-white hover:text-blue-100 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>mail@apexenterprises.net</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-full px-0 lg:px-0" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex lg:flex-none pl-2 sm:pl-4">
            <Logo />
          </div>
          
          <div className="hidden lg:flex lg:gap-x-1 lg:mx-8 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group nav-dropdown-trigger">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`relative px-3 py-2.5 text-sm font-medium flex items-center gap-1.5 transition-colors rounded-md ${
                      isActive(item.href)
                        ? 'text-[#F68B1F] bg-orange-50'
                        : 'text-gray-700 hover:text-[#F68B1F] hover:bg-gray-50'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative px-3 py-2.5 text-sm font-medium transition-colors rounded-md flex items-center gap-1.5 ${
                      isActive(item.href)
                        ? 'text-[#F68B1F] bg-orange-50'
                        : 'text-gray-700 hover:text-[#F68B1F] hover:bg-gray-50'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-1 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200 origin-top-left ${
                      activeDropdown === item.name 
                        ? 'transform opacity-100 scale-100' 
                        : 'transform opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-2 divide-y divide-gray-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-5 py-3 text-sm ${
                            isActive(subItem.href)
                              ? 'bg-orange-50 text-[#F68B1F] font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#F68B1F]'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-none pr-2 sm:pr-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center rounded-md bg-[#F68B1F] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#E57A1E] transition-colors overflow-hidden"
            >
              <span className="relative z-10">Request Consultation</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-opacity-10 bg-white/20"></div>
            </Link>
          </div>

          <div className="flex lg:hidden pr-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
          <div
            id="mobile-menu"
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 sm:px-6 py-4 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 sm:mt-6 flow-root">
              <div className="-my-4 sm:-my-6 divide-y divide-gray-500/10">
                <div className="space-y-1 py-4 sm:py-6">
                  {navigation.map((item) => (
                    <React.Fragment key={item.name}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                              isActive(item.href)
                                ? 'bg-orange-50 text-[#F68B1F]'
                                : 'text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon && <item.icon className="h-5 w-5" />}
                              {item.name}
                            </div>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeDropdown === item.name && (
                            <div className="mt-1 space-y-1 pl-7">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                                    isActive(subItem.href)
                                      ? 'bg-orange-50 text-[#F68B1F]'
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                            isActive(item.href)
                              ? 'bg-orange-50 text-[#F68B1F]'
                              : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          aria-current={isActive(item.href) ? 'page' : undefined}
                        >
                          {item.icon && <item.icon className="h-5 w-5" />}
                          {item.name}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-4 sm:py-6">
                  <Link
                    to="/contact"
                    className="block rounded-md bg-[#F68B1F] px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#E57A1E] transition-colors"
                  >
                    Request a Consultation
                  </Link>
                  <div className="mt-4 sm:mt-6 flex items-center justify-between">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}