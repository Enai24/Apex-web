import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, ArrowRight, Users, Shield, Building, Factory } from 'lucide-react';
import { LocalSEOUtils } from '../utils/localSEO';
import GEOOptimizedFAQ from './GEOOptimizedFAQ';
import Head from './layout/Head';
import Link from 'next/link';

interface LocationOptimizedPageProps {
  locationKey: keyof typeof LocalSEOUtils.APEX_LOCATIONS;
  service?: string;
  showReviews?: boolean;
  showServiceAreas?: boolean;
}

export default function LocationOptimizedPage({
  locationKey,
  service,
  showReviews = true,
  showServiceAreas = true
}: LocationOptimizedPageProps) {
  const location = LocalSEOUtils.APEX_LOCATIONS[locationKey];
  const pageMeta = LocalSEOUtils.generateLocationPageMeta(locationKey, service);
  const businessSchema = LocalSEOUtils.generateLocalBusinessSchema(locationKey);

  // Sample reviews for the location
  const locationReviews = [
    {
      author: "Rajesh Kumar",
      company: "Tech Mahindra",
      rating: 5,
      reviewBody: `Apex Enterprises has been our trusted partner in ${location.address.city} for over 3 years. Their recruitment solutions are top-notch and fully compliant.`,
      datePublished: "2024-01-15"
    },
    {
      author: "Priya Sharma",
      company: "InnovateAI Systems",
      rating: 5,
      reviewBody: `Excellent staffing services across our ${location.address.city} facilities. Professional team and consistent quality.`,
      datePublished: "2024-02-20"
    }
  ];

  const reviewSchema = LocalSEOUtils.generateReviewSchema(locationReviews);

  const iconMap = {
    0: <Shield className="h-6 w-6 text-orange-red" />,
    1: <Users className="h-6 w-6 text-orange-red" />,
    2: <Building className="h-6 w-6 text-orange-red" />,
    default: <Factory className="h-6 w-6 text-orange-red" />
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Head
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonicalPath={pageMeta.canonical}
        structuredData={[businessSchema, {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": location.name,
          "review": reviewSchema
        }]}
      />

      {/* Hero Section */}
      <section className="bg-oat-medium py-24 border-b border-border">
        <div className="container">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="eyebrow bg-navy/5 text-navy px-3 py-1 rounded-full border border-navy/10 flex items-center">
                <MapPin className="mr-2 h-3.5 w-3.5" />
                Serving {location.address.city} Since 2002
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-navy text-[40px] md:text-[64px] font-medium leading-tight mb-8">
              {service ? (
                <>
                  AI-Powered <span className="italic">{service}</span>
                  <br />
                  in {location.address.city}
                </>
              ) : (
                <>
                  India's Smartest Workforce
                  <br />
                  Intelligence in <span className="italic">{location.address.city}</span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-teal-gray text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              {location.description} Optimized for scale, 100% compliant, and powered by 23 years of institutional excellence.
            </p>

            {/* Quick Contact CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={`tel:${location.phone}`}
                className="btn-primary flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                {location.phone}
              </Link>
              <Link
                href="/contact"
                className="btn-secondary flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <span className="eyebrow mb-4 block">LOCAL EXPERTISE</span>
            <h2 className="text-navy">Solutions for {location.address.city}</h2>
            <p className="mt-4 text-lg text-teal-gray max-w-2xl">
              Precision-engineered workforce solutions tailored for the specific demands of {location.address.city}'s industrial and tech landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.categories.map((category, index) => (
              <div key={index} className="group p-8 border border-border bg-oat-light hover:bg-white hover:shadow-card transition-all duration-300 rounded-sm">
                <div className="mb-6">
                  {iconMap[index as keyof typeof iconMap] || iconMap.default}
                </div>
                <h3 className="text-xl font-medium text-navy mb-4">{category}</h3>
                <p className="text-teal-gray mb-8">
                  World-class {category.toLowerCase()} services in {location.address.city} with zero-deficit compliance and AI-driven efficiency.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-orange-red font-medium group/link"
                >
                  Explore Solution <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {showServiceAreas && (
        <section className="py-24 bg-oat-light border-y border-border">
          <div className="container text-center">
            <span className="eyebrow mb-4 block">REGIONAL REACH</span>
            <h2 className="text-navy mb-12">Areas We Serve Around {location.address.city}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {location.serviceAreas.map((area, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white border border-border rounded-sm hover:border-orange-red/30 transition-colors">
                  <MapPin className="h-5 w-5 text-orange-red mb-3" />
                  <span className="text-navy font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Section/Reviews */}
      {showReviews && (
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <span className="eyebrow mb-4 block">CLIENT SUCCESS</span>
              <h2 className="text-navy">Trusted in {location.address.city}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locationReviews.map((review, index) => (
                <div key={index} className="p-8 border border-border bg-oat-light rounded-sm">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-red fill-current" />
                    ))}
                  </div>
                  <p className="text-navy text-lg italic mb-6 leading-relaxed">"{review.reviewBody}"</p>
                  <div className="border-t border-border pt-6">
                    <p className="font-medium text-navy">{review.author}</p>
                    <p className="text-sm text-teal-gray">{review.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information Card */}
      <section className="py-24 bg-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow text-orange-red mb-4 block">DIRECT ACCESS</span>
              <h2 className="text-white mb-8">Our {location.address.city} Hub</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-red mr-4 mt-1" />
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">Office Address</h3>
                    <p className="text-oat/70">
                      {location.address.street}<br />
                      {location.address.city}, {location.address.state} {location.address.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-red mr-4 mt-1" />
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">Inquiries</h3>
                    <p className="text-oat/70">{location.phone}</p>
                    <p className="text-oat/40 text-sm mt-1">Mon - Sat: 09:00 - 18:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-sm border border-white/10">
              <h3 className="text-xl font-medium mb-6">Connect with our local experts</h3>
              <p className="text-oat/70 mb-8">
                Looking for localized labor compliance, specialized staffing, or facility management solutions? Our regional team in {location.address.city} is ready to architect your success.
              </p>
              <Link href="/contact" className="btn-primary w-full text-center inline-block">
                Initiate Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <GEOOptimizedFAQ
        title={`Intelligence Portal - ${location.address.city}`}
        subtitle={`Critical insights and frequently asked questions for businesses in ${location.address.city}.`}
        category="locations"
        showSchema={true}
      />
    </div>
  );
} 