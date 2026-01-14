"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, FinFlow",
    content: "Vexel Systems transformed our legacy infrastructure into a cloud-native powerhouse. Their team operates with a level of precision we rarely see.",
    image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=0D8ABC&color=fff",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, RetailX",
    content: "The POS system they built for us reduced checkout times by 40%. It's not just software; it's a competitive advantage.",
    image: "https://ui-avatars.com/api/?name=David+Chen&background=10B981&color=fff",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Director of Ops, HealthFirst",
    content: "Security was our top concern. Vexel's rigorous compliance standards gave us the confidence to digitize our patient records.",
    image: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=8B5CF6&color=fff",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Ross",
    role: "CEO, Ross Logistics",
    content: "Their custom ERP solution automated 80% of our manual tracking. We are saving thousands of man-hours annually.",
    image: "https://ui-avatars.com/api/?name=Michael+Ross&background=F59E0B&color=fff",
    rating: 5
  },
  {
    id: 5,
    name: "Anita Patel",
    role: "VP Marketing, BrandBoost",
    content: "The mobile app experience they designed is simply world-class. Our user retention doubled within three months of launch.",
    image: "https://ui-avatars.com/api/?name=Anita+Patel&background=EC4899&color=fff",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager, CityEat",
    content: "Reliability is key in food delivery. Vexel's backend architecture hasn't flinched once, even during our busiest super bowl weekend.",
    image: "https://ui-avatars.com/api/?name=James+Wilson&background=6366F1&color=fff",
    rating: 5
  },
];

/**
 * TESTIMONIAL SECTION
 * 
 * Functional Overview:
 * - Rendering: Dynamic generation of star ratings using array mapping.
 * - Layout: Responsive grid for testimonials and a 4-column statistic block for impact metrics.
 * - Interaction: FAQ accordion using native `<details>` and `<summary>` elements for semantic toggle behavior.
 */

export const TestimonialSection = () => {
  return (
    <div className="flex flex-col bg-transparent">
      {/* Testimonials Masonry Grid */}
      <section className="py-20">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
               <Star className="w-4 h-4" /> Client Success
            </div>
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">Trusted by Industry <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Leaders</span></h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We don't just build software; we build lasting partnerships. Here's what our clients have to say about their journey with Vexel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
               <div 
                 key={t.id} 
                 className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-primary/10 p-8 rounded-3xl shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
               >
                  <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16 transform rotate-180" />
                  
                  <div className="flex gap-1 mb-6 text-yellow-500">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>

                  <p className="text-lg font-medium leading-relaxed mb-8 grow relative z-10 text-foreground/80">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-dashed border-primary/10">
                     <div className="relative size-12 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                     </div>
                     <div>
                        <h3 className="font-bold text-foreground">{t.name}</h3>
                        <p className="text-xs font-bold text-primary uppercase tracking-wide">{t.role}</p>
                     </div>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Metrics Section */}
      <section className="py-20 bg-primary/5 backdrop-blur-md border border-primary/10 rounded-[48px] w-[90%] md:w-[80%] mx-auto mb-20 relative overflow-hidden px-6 lg:px-12">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

         <div className="relative z-10 text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-2">Our <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Impact</span></h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Numbers that speak louder than words
            </p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {[
              { number: "25+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "25+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, idx) => (
               <div 
                 key={idx} 
                 className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-primary/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 text-center"
               >
                  <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</h3>
                  <p className="text-sm font-bold text-foreground/80 uppercase tracking-wide">{stat.label}</p>
               </div>
            ))}
         </div>
        </section>

      {/* Industries We Serve Section */}
      <section className="py-20 w-[90%] md:w-[80%] mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Industries We <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Serve</span></h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Delivering tailored solutions across diverse sectors
            </p>
          </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "FinTech", icon: "💰", desc: "Banking & Finance" },
              { name: "Healthcare", icon: "🏥", desc: "Medical Systems" },
              { name: "E-Commerce", icon: "🛒", desc: "Online Shopping" },
              { name: "Education", icon: "🎓", desc: "EdTech Solutions" },
              { name: "Fashion & Retail", icon: "👗", desc: "Dress Shops & Boutiques" },
              { name: "Restaurants", icon: "🍽️", desc: "Food & Dining" },
              { name: "Logistics", icon: "🚚", desc: "Supply Chain" },
              { name: "Real Estate", icon: "🏢", desc: "Property Tech" },
              { name: "Hospitality", icon: "🏨", desc: "Hotels & Tourism" },
              { name: "Entertainment", icon: "🎬", desc: "Media & Streaming" },
              { name: "Automotive", icon: "🚗", desc: "Auto Services" },
              { name: "Manufacturing", icon: "🏭", desc: "Industry 4.0" }
            ].map((industry, idx) => (
               <div 
                 key={idx} 
                 className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center"
               >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-black text-foreground mb-1">{industry.name}</h3>
                  <p className="text-xs text-foreground/70 font-medium">{industry.desc}</p>
               </div>
            ))}
         </div>
        </section>

      {/* FAQ Section */}
      <section className="py-20 w-[90%] md:w-[80%] mx-auto mb-20">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Questions</span></h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Quick answers to common questions
            </p>
         </div>

         <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What is your typical project timeline?", a: "Most projects take 8-16 weeks depending on complexity. We provide detailed timelines during consultation." },
              { q: "Do you offer post-launch support?", a: "Yes! We provide 24/7 support and maintenance packages to ensure your systems run smoothly." },
              { q: "What technologies do you specialize in?", a: "We work with modern tech stacks including React, Next.js, Node.js, Python, AWS, and more. Check our Tech Stack section for details." },
              { q: "Can you work with our existing team?", a: "Absolutely! We seamlessly integrate with your in-house team and follow your development processes." },
              { q: "What are your payment terms?", a: "We offer flexible payment plans with milestone-based payments. Contact us for custom pricing." }
            ].map((faq, idx) => (
               <details 
                 key={idx}
                 className="group bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
               >
                  <summary className="font-bold text-foreground flex items-center justify-between cursor-pointer">
                     {faq.q}
                     <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{faq.a}</p>
               </details>
            ))}
         </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary to-purple-600 rounded-[48px] w-[90%] md:w-[80%] mx-auto mb-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm"></div>
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
         <div className="relative z-10 text-center px-6 lg:px-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Build Something <span className="text-white drop-shadow-lg">Amazing?</span></h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's turn your vision into reality. Schedule a free consultation and get a custom proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a 
                 href="/consultation"
                 className="px-8 py-4 bg-white text-primary font-black rounded-2xl shadow-2xl hover:shadow-white/20 transition-all"
               >
                 Schedule Free Consultation
               </a>
               <a 
                 href="/pricing"
                 className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-black rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all"
               >
                 View Pricing
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};
