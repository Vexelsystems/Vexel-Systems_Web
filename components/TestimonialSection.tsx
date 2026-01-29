"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Salujah",
    role: "Student, South Eastern University",
    content: "I worked with Vexel Systems on my ML project for South Eastern University’s biology department, and the experience was amazing! They helped me build the Triang model to analyze biological data, and the results were impressive. The team was patient, explained complex concepts clearly, and made sure everything worked perfectly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Pavishan Sivakumaran",
    role: "Owner, Skywix E-commerce",
    content: "Vexel Systems transformed our old website into a sleek, responsive platform. Their team handled our e-commerce site and corporate portal projects flawlessly. They also helped integrate AI features for better user recommendations. Professional, friendly, and always available to assist!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Kosika",
    role: "Student, Open University",
    content: "Vexel Systems with Jathushan has been a valuable learning experience. While not every project goes perfectly, we faced real challenges during an AI project involving a customer FAQ-based chatbot. The environment encourages transparency, problem-solving, and growth, making it a great place to develop real-world skills.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 4,
    name: "Mathushi",
    role: "Creative Professional",
    content: "I hired Vexel Systems to create my personal portfolio website, and I’m beyond happy! They understood my style perfectly, made the design elegant and modern, and even added subtle interactive features that make my work stand out. The team was friendly, patient, and guided me through every step.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 5,
    name: "Vinoshika",
    role: "Photographer",
    content: "Vexel Systems built my personal portfolio website, and I couldn’t be happier! The design is chic, easy to navigate, and really highlights my photography work. They listened to all my ideas and even suggested improvements that made it look more professional. Highly recommend them!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 6,
    name: "Tharshan",
    role: "Client, United Kingdom",
    content: "Vexel Systems delivered a stylish, modern site that truly represents my brand. The design is easy to navigate and very professional. They listened to all my ideas and the team was patient and guided me through every step. Highly recommend them for anyone wanting a premium web presence!",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
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
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">Our Loyal <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Customers</span></h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We don't just build software; we build lasting partnerships. Here's what our clients have to say about their journey with Vexel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
               <div 
                 key={t.id} 
                 className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-primary/10 p-8 rounded-3xl shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
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
                 className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-primary/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 text-center"
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
                 className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
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
              { q: "How long will it actually take?", a: "It depends on what you need, but usually 8-12 weeks. We give you a real timeline before we start, so you're not guessing." },
              { q: "Will you help us after the website is live?", a: "Yes. We don't just build and run. We stick around to fix bugs, make updates, and make sure everything keeps working perfectly." },
              { q: "Do I need to know about servers and coding?", a: "No. We handle all the technical boring stuff. You just tell us what you want your business to do, and we make it happen." },
              { q: "Can you work with my current IT guy?", a: "Absolutely. We play nice with others. We can work alongside your existing team or handle everything ourselves." },
              { q: "How do payments work?", a: "We're flexible. Usually, we break it down into milestones: a deposit to start, payments as we finish big chunks, and the rest when we launch." }
            ].map((faq, idx) => (
               <details 
                 key={idx}
                 className="group bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
