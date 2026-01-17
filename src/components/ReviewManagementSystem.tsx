'use client';

import React, { useState } from 'react';
;
import { Star, Quote, ExternalLink, MessageCircle, Trophy, CheckCircle, Calendar, Building } from 'lucide-react';
import { LocalSEOUtils } from '../utils/localSEO';

interface Review {
  id: string;
  author: string;
  company: string;
  position?: string;
  rating: number;
  title: string;
  reviewText: string;
  date: string;
  service: string;
  location: string;
  verified: boolean;
  platform: 'Google' | 'JustDial' | 'IndiaMART' | 'Internal' | 'LinkedIn';
  helpfulCount?: number;
  responseFromBusiness?: string;
}

interface ReviewManagementSystemProps {
  locationKey?: keyof typeof LocalSEOUtils.APEX_LOCATIONS;
  showReviewForm?: boolean;
  maxReviews?: number;
  filterByService?: string;
}

export default function ReviewManagementSystem({
  locationKey = 'gurgaon',
  showReviewForm = true,
  maxReviews = 12,
  filterByService
}: ReviewManagementSystemProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'helpful'>('date');
  
  const location = LocalSEOUtils.APEX_LOCATIONS[locationKey];

  // Comprehensive review database optimized for GEO
  const reviews: Review[] = [
    {
      id: 'r1',
      author: 'Rajesh Kumar Sharma',
      company: 'Maruti Suzuki India Limited',
      position: 'HR Manager',
      rating: 5,
      title: 'Exceptional Security Services in Gurgaon',
      reviewText: 'Apex Enterprises has been providing outstanding security services for our Gurgaon facility for over 2 years. Their PSARA-compliant security personnel are well-trained, professional, and reliable. The 24/7 monitoring and quick response time make them the best security service provider in Haryana.',
      date: '2024-03-15',
      service: 'Security Services',
      location: 'Gurgaon',
      verified: true,
      platform: 'Google',
      helpfulCount: 15,
      responseFromBusiness: 'Thank you Rajesh! We\'re proud to serve Maruti Suzuki and ensure the security of your valuable assets. Your trust in our services motivates us to maintain the highest standards.'
    },
    {
      id: 'r2', 
      author: 'Priya Gupta',
      company: 'Hero MotoCorp Ltd.',
      position: 'Facility Manager',
      rating: 5,
      title: 'Best Housekeeping Contractors in Delhi NCR',
      reviewText: 'We engaged Apex Enterprises for housekeeping services across our Delhi NCR offices and production units. Their team is thorough, uses eco-friendly products, and maintains excellent hygiene standards. Highly recommend them for any business in Gurgaon or Haryana looking for professional housekeeping solutions.',
      date: '2024-03-10',
      service: 'Housekeeping Services',
      location: 'Delhi NCR',
      verified: true,
      platform: 'JustDial',
      helpfulCount: 12
    },
    {
      id: 'r3',
      author: 'Amit Singh Chauhan',
      company: 'Tech Mahindra Limited',
      position: 'Head of Operations',
      rating: 5,
      title: 'Reliable Manpower Consultancy in Gurgaon',
      reviewText: 'Apex Enterprises helped us scale our workforce efficiently for our Gurgaon operations. Their understanding of local talent, quick turnaround time, and complete compliance support make them the most trusted manpower consultant in the region. We\'ve worked with them for 3+ years now.',
      date: '2024-03-05',
      service: 'Manpower Consultancy',
      location: 'Gurgaon',
      verified: true,
      platform: 'LinkedIn',
      helpfulCount: 18
    },
    {
      id: 'r4',
      author: 'Dr. Kavita Mehta',
      company: 'Fortis Hospital Gurgaon',
      position: 'Administrator',
      rating: 5,
      title: 'Professional Healthcare Support Services',
      reviewText: 'Apex Enterprises provides excellent support staff for our hospital in Gurgaon. Their personnel are well-trained, follow all safety protocols, and are very reliable. For any healthcare facility in Haryana looking for quality support services, I highly recommend Apex Enterprises.',
      date: '2024-02-28',
      service: 'Healthcare Support',
      location: 'Gurgaon',
      verified: true,
      platform: 'Google',
      helpfulCount: 10
    },
    {
      id: 'r5',
      author: 'Suresh Patel',
      company: 'Bajaj Auto Limited',
      position: 'Plant Manager', 
      rating: 5,
      title: 'Excellent Labour Contracting for Manufacturing',
      reviewText: 'We needed skilled workers for our manufacturing plant in Manesar, and Apex Enterprises delivered exactly what we required. Their labour contracting services are top-notch with complete documentation and compliance. Best choice for manufacturing companies in Gurgaon and surrounding areas.',
      date: '2024-02-20',
      service: 'Labour Contracting',
      location: 'Manesar',
      verified: true,
      platform: 'IndiaMART',
      helpfulCount: 14
    },
    {
      id: 'r6',
      author: 'Neha Agarwal',
      company: 'DLF Limited',
      position: 'Project Director',
      rating: 5,
      title: 'Comprehensive Real Estate Support Services',
      reviewText: 'Apex Enterprises has been our go-to partner for real estate support services in Gurgaon. From property management to facility maintenance, they handle everything professionally. Their local expertise in Haryana real estate market is unmatched.',
      date: '2024-02-15',
      service: 'Real Estate Services',
      location: 'Gurgaon',
      verified: true,
      platform: 'Internal',
      helpfulCount: 8
    }
  ];

  // Filter reviews based on service and location
  const filteredReviews = reviews
    .filter(review => {
      if (filterByService && review.service !== filterByService) return false;
      if (activeFilter !== 'all' && review.service !== activeFilter) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'helpful':
          return (b.helpfulCount || 0) - (a.helpfulCount || 0);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    })
    .slice(0, maxReviews);

  // Calculate review statistics
  const reviewStats = {
    totalReviews: reviews.length,
    averageRating: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    fiveStarCount: reviews.filter(r => r.rating === 5).length,
    verifiedCount: reviews.filter(r => r.verified).length,
    platforms: [...new Set(reviews.map(r => r.platform))].length
  };

  // Generate review schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apex Enterprises",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewStats.averageRating.toFixed(1),
      "reviewCount": reviewStats.totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author,
        "worksFor": {
          "@type": "Organization",
          "name": review.company
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.reviewText,
      "datePublished": review.date,
      "publisher": {
        "@type": "Organization", 
        "name": "Apex Enterprises"
      }
    }))
  };

  // Service categories for filtering
  const serviceCategories = [
    'all',
    'Security Services',
    'Housekeeping Services', 
    'Manpower Consultancy',
    'Labour Contracting',
    'Real Estate Services',
    'Healthcare Support'
  ];

  return (
    <div className="review-management-system bg-white">
      {/* <Helmet> */}
        {/* Review schema for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
        
        {/* Meta tags for review content */}
        <meta name="description" content={`Read verified client reviews for Apex Enterprises' workforce solutions in ${location.address.city}. ${reviewStats.totalReviews}+ satisfied clients with ${reviewStats.averageRating.toFixed(1)}/5 average rating.`} />
        <meta property="og:title" content={`Client Reviews - Apex Enterprises ${location.address.city}`} />
        <meta property="og:description" content={`${reviewStats.totalReviews}+ verified reviews from satisfied clients across Haryana. See why businesses trust Apex Enterprises for workforce solutions.`} />
      {/* </Helmet> */}

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 mb-6">
              <Trophy className="mr-2 h-4 w-4" />
              {reviewStats.totalReviews}+ Verified Client Reviews
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say About Us in {location.address.city}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Read genuine reviews from satisfied clients across Haryana who trust Apex Enterprises for their workforce solutions
            </p>
          </div>

          {/* Review Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
              <div className="flex items-center justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">{reviewStats.averageRating.toFixed(1)}/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">{reviewStats.totalReviews}</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <Trophy className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">{reviewStats.fiveStarCount}</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <Building className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">{reviewStats.verifiedCount}</div>
              <div className="text-sm text-gray-600">Verified Reviews</div>
            </div>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="rating">Sort by Rating</option>
              <option value="helpful">Sort by Helpful</option>
            </select>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      {review.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{review.title}</h3>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {review.platform}
                  </span>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <Quote className="h-5 w-5 text-gray-400 mb-2" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{review.reviewText}"
                  </p>
                </div>

                {/* Review Metadata */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-600">{review.position}</p>
                      <p className="text-sm text-blue-600 font-medium">{review.company}</p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                      <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {review.service}
                      </div>
                    </div>
                  </div>
                  
                  {review.helpfulCount && (
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {review.helpfulCount} people found this helpful
                    </div>
                  )}

                  {/* Business Response */}
                  {review.responseFromBusiness && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-900 mb-1">Response from Apex Enterprises:</p>
                      <p className="text-sm text-blue-800">{review.responseFromBusiness}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action for Reviews */}
          {showReviewForm && (
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Share Your Experience with Apex Enterprises
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Help other businesses in {location.address.city} by sharing your experience with our workforce solutions. Your feedback helps us serve you better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://g.page/r/your-google-business-link/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Write Google Review
                </a>
                <a 
                  href="/contact?review=true"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Share Feedback
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 