"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Quote, Star, Award, TrendingUp, Users } from 'lucide-react';
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

const successStories = [
  {
    id: 1,
    client: "GlobalBank Corp",
    result: "300% faster transaction processing",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Migrating a 20-year-old mainframe ledger to a distributed blockchain ledger."
  },
  {
    id: 2,
    client: "MediCare Plus",
    result: "HIPAA Compliant Cloud Transition",
    icon: <Award className="w-8 h-8" />,
    description: "Securely moving 10M+ patient records to a private AWS environment."
  },
  {
    id: 3,
    client: "EduTech Pioneers",
    result: "1M+ Active Daily Users Scaled",
    icon: <Users className="w-8 h-8" />,
    description: "Re-architecting the backend to support massive concurrent classroom sessions."
  }
];

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
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              We don't just build software; we build lasting partnerships. Here's what our clients have to say about their journey with Vexel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
               <motion.div 
                 key={t.id} 
                 whileHover={{ y: -10, scale: 1.01 }}
                 className="relative bg-card border border-primary/10 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
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
                        <Image src={t.image} alt={t.name} fill className="object-cover" unoptimized />
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground">{t.name}</h4>
                        <p className="text-xs font-bold text-primary uppercase tracking-wide">{t.role}</p>
                     </div>
                  </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 mb-20 bg-primary/5 backdrop-blur-md border border-primary/10 rounded-[48px] w-[90%] md:w-[80%] mx-auto relative overflow-hidden px-6 lg:px-12">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

         <div className="relative z-10 text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-2">Proven <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Results</span></h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Real metrics from real deployments. We deliver impact, not just code.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {successStories.map((story) => (
               <motion.div 
                 key={story.id} 
                 whileHover={{ y: -8, scale: 1.02 }}
                 className="bg-card border border-primary/10 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-primary/40 group transition-all duration-300"
               >
                  <div className="bg-primary/10 text-primary size-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     {story.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-2 tracking-tight text-primary">{story.result}</h3>
                  <p className="text-sm font-bold text-foreground/40 uppercase mb-4 tracking-widest">{story.client}</p>
                  <p className="text-base text-foreground/70 leading-relaxed font-medium">
                     {story.description}
                  </p>
               </motion.div>
            ))}
          </div>
        </section>
      </div>
  );
};
