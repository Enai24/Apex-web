'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    body: "Apex Enterprises has been instrumental in helping us build our pan-India team. Their understanding of regional labour laws and commitment to compliance is unmatched across all our locations.",
    author: "Priya Sharma",
    title: "HR Director, Tech Mahindra",
    initials: "PS"
  },
  {
    body: "The level of expertise in PF/ESI compliance and attention to detail in candidate screening has made Apex our go-to staffing partner for operations across Mumbai, Delhi, and Bengaluru.",
    author: "Rajesh Patel",
    title: "Operations Director, Aditya Birla Group",
    initials: "RP"
  },
  {
    body: "Working with Apex has transformed our hiring process across Tier-2 cities where finding quality talent is challenging. Their understanding of local markets from Pune to Chandigarh has been invaluable.",
    author: "Anjali Desai",
    title: "CEO, Apollo Healthcare Solutions",
    initials: "AD"
  },
  {
    body: "The regulatory compliance expertise that Apex provides has helped us navigate the complex labour laws in different Indian states. Their team consistently stays updated with changing regulations.",
    author: "Vikram Singh",
    title: "Legal Head, Reliance Industries",
    initials: "VS"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-oat py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="text-navy text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-teal-gray text-lg max-w-2xl mx-auto">
            A partnership you can trust — hear from the industry leaders who've worked with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 shadow-premium hover:shadow-lg transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-red text-orange-red" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative mb-8">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-oat opacity-60" />
                <p className="text-navy text-lg leading-relaxed pl-6">
                  "{testimonial.body}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-navy font-semibold">{testimonial.author}</p>
                  <p className="text-teal-gray text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/portfolio"
            className="btn-primary inline-flex items-center"
          >
            View All Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}