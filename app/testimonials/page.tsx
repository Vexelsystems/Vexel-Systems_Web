"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Star, ArrowUpRight, Award, TrendingUp, Users } from 'lucide-react';

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

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-20">
        
        {/* Hero Section */}
        <section className="px-4 py-24 bg-white dark:bg-background text-center">
           <div className="max-w-[1000px] mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <Star className="w-4 h-4" /> Client Success
             </div>
             <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Trusted by Industry Leaders</h1>
             <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
               We don't just build software; we build lasting partnerships. Here's what our clients have to say about their journey with Vexel.
             </p>
           </div>
        </section>

        {/* Trust Bar */}
        <div className="w-full overflow-hidden mb-24 border-y border-primary/5 bg-gray-50/50 py-10">
           <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
              <span className="text-2xl font-black">Google</span>
              <span className="text-2xl font-black">Microsoft</span>
              <span className="text-2xl font-black">Spotify</span>
              <span className="text-2xl font-black">Amazon</span>
              <span className="text-2xl font-black">Slack</span>
           </div>
        </div>

        {/* Testimonials Masonry Grid */}
        <section className="px-4 mb-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
               <div key={t.id} className="relative bg-card border border-primary/10 p-8 rounded-3xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
                  <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16 transform rotate-180" />
                  
                  <div className="flex gap-1 mb-6 text-yellow-400">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>

                  <p className="text-lg font-medium leading-relaxed mb-8 grow relative z-10 text-foreground/80">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-dashed border-gray-200">
                     <div className="relative size-12 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image src={t.image} alt={t.name} fill className="object-cover" unoptimized />
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground">{t.name}</h4>
                        <p className="text-xs font-bold text-primary uppercase tracking-wide">{t.role}</p>
                     </div>
                  </div>
               </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="px-4 py-24 bg-primary text-white rounded-[40px] max-w-[1200px] mx-auto relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

           <div className="relative z-10 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Proven Results</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto">Real metrics from real deployments. We deliver impact, not just code.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-4 md:px-12">
              {successStories.map((story) => (
                 <div key={story.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all">
                    <div className="bg-white text-primary size-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                       {story.icon}
                    </div>
                    <h3 className="text-3xl font-black mb-2 tracking-tight">{story.result}</h3>
                    <p className="text-sm font-bold opacity-60 uppercase mb-4 tracking-widest">{story.client}</p>
                    <p className="text-base opacity-80 leading-relaxed font-medium text-blue-50">
                       {story.description}
                    </p>
                 </div>
              ))}
           </div>
        </section>

        {/* Big CTA */}
        <section className="px-4 py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to write your success story?</h2>
            <Link href="/quote" className="inline-flex items-center gap-2 bg-primary text-white text-lg font-bold px-10 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all">
               Start Your Project <ArrowUpRight className="w-5 h-5" />
            </Link>
        </section>

      </main>
    </div>
  );
}
