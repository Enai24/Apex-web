import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, Star, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function ConversionCTA() {
  return (
    <div className="bg-executive-gradient py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-luxury-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/90 to-luxury-navy/80"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center rounded-full bg-luxury-gold/20 border border-luxury-gold/30 px-4 py-2 text-sm font-semibold text-luxury-gold mb-6 animate-luxuryGlow">
            <Zap className="mr-2 h-4 w-4 animate-pulse" />
            Limited Time: Free Workforce Analysis Worth ₹25,000
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Scale Your Business?
            <span className="block text-2xl sm:text-3xl md:text-4xl text-luxury-gold mt-2 animate-fadeInUp animation-delay-200">
              Get Your FREE Consultation Today!
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
            Join 500+ companies who've transformed their workforce with our expert solutions. 
            <strong className="text-luxury-gold"> No commitment required.</strong>
          </p>
          
          {/* Value propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 animate-fadeInUp animation-delay-600">
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Free Workforce Audit</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">24-Hour Response</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Custom Solutions</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 animate-fadeInUp animation-delay-800">
            <Link
              to="/contact"
              className="w-full sm:w-auto btn-luxury group text-lg px-8 py-4 animate-premiumPulse"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91-0124-2340139
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="w-full sm:w-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm animate-fadeInUp animation-delay-1000">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-1 font-medium">4.8/5 Rating</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="font-medium">500+ Reviews</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="font-medium">50,000+ Placements</span>
          </div>
          
          {/* Urgency timer */}
          <div className="mt-8 p-4 bg-red-500/20 border border-red-400/30 rounded-2xl animate-fadeInUp animation-delay-1200">
            <p className="text-red-200 text-sm font-medium">
              ⏰ <strong>Hurry!</strong> Only 3 free consultations left this week. 
              <span className="text-white font-semibold">Claim yours now!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 