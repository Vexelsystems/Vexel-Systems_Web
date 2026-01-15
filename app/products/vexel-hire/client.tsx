"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Sparkles, Quote, 
  HelpCircle, CheckCircle2, Star, Activity,
  Filter, Calendar, Users, BarChart3, Briefcase, 
  MessageSquare, Globe, MousePointer2, Settings, Zap
} from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import { products } from "@/lib/products";
import { motion } from "framer-motion";

export default function VexelHireClient() {
  const product = products.find(p => p.slug === "vexel-hire")!;

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-purple-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <HeroBackground />
        
        {/* Micro-trust label */}
        <div className="absolute top-28 right-6 md:right-12 z-20">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/5">
            <Users size={12} className="text-purple-500 fill-purple-500" />
            Empowering 200+ HR Teams
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <MotionWrapper type="slideUp">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-xl mb-8">
                  <Sparkles className="text-purple-500" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[.4em] text-purple-500">{product.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-8">
                  Hire Smart.<br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-600">Manage Better.</span>
                </h1>

                <TypewriterText 
                  phrases={[product.tagline, "Automate Screening.", "Sync Interviews.", "Unified Staff Hub."]} 
                  className="text-xl md:text-2xl font-bold text-foreground/50 mb-8 block uppercase tracking-wide"
                />

                <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-xl mb-12 leading-relaxed">
                  {product.fullDescription.substring(0, 180)}...
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/contact?subject=Vexel Hire Demo">
                    <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                      Request Demo
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/contact?subject=Hire Free Trial">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold border border-foreground/10 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2">
                       <Zap size={20} />
                       Start Free Trial
                    </button>
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Visuals (Dashboard UI) */}
            <MotionWrapper type="slideRight" className="flex-1 w-full max-w-2xl">
              <div className="relative group perspective-1000">
                 <div className="absolute -inset-10 bg-linear-to-tr from-purple-500/30 to-pink-600/30 rounded-full blur-[100px] -z-10 group-hover:opacity-75 transition-opacity duration-1000" />
                 
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 group-hover:-rotate-y-2 transition-transform duration-700">
                    <Image src="/products/photo-1586281380349-632531db7ed4.jpg" alt="Recruitment Dashboard" width={800} height={600} className="object-cover opacity-80" />
                    
                    {/* Floating Cards */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 0.5, duration: 0.8 }}
                       className="absolute top-10 right-10 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-[200px]"
                    >
                       <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold">JD</div>
                       <div>
                          <p className="text-xs font-bold">John Doe</p>
                          <p className="text-[10px] text-green-500 font-bold uppercase">Hired! 🎉</p>
                       </div>
                    </motion.div>

                    <motion.div 
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.8, duration: 0.8 }}
                       className="absolute bottom-10 left-10 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border-l-4 border-purple-500"
                    >
                       <p className="text-[10px] font-bold uppercase text-foreground/40 mb-1">Interview Scheduled</p>
                       <p className="text-sm font-bold">Product Designer (UX)</p>
                       <p className="text-xs text-foreground/60">Tomorrow, 10:00 AM</p>
                    </motion.div>
                 </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. ABOUT VEXEL HIRE */}
      <section className="py-24 px-6 bg-purple-50/50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
           <MotionWrapper type="slideUp">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                 Modern HR for <span className="text-purple-600">Modern Teams.</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-12">
                 {product.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {product.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group">
                       <div className="size-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shadow-sm">
                          {feature.icon && <feature.icon size={28} />}
                       </div>
                       <h4 className="font-bold uppercase tracking-tight text-sm">{feature.title}</h4>
                    </div>
                 ))}
              </div>
           </MotionWrapper>
        </div>
      </section>

      {/* 3. FEATURES DEEP DIVE */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter">The Complete <span className="text-purple-600 italic">Workforce OS.</span></h2>
            
            <div className="grid md:grid-cols-2 gap-12">
               {product.detailedFeatures?.map((category, idx) => (
                  <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                     <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-colors group">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="size-14 rounded-2xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                              <category.icon size={28} />
                           </div>
                           <h3 className="text-2xl font-black uppercase tracking-tight">{category.category}</h3>
                        </div>
                        <ul className="space-y-4">
                           {category.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-start gap-3 text-sm font-semibold text-foreground/70">
                                 <CheckCircle className="text-purple-500 shrink-0 mt-0.5" size={16} />
                                 {feat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </MotionWrapper>
               ))}
            </div>
         </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
         <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20">From Post to <span className="italic text-purple-500">Payroll</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-white/10 -z-10" />

               {product.process?.map((step, idx) => (
                  <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                     <div className="flex flex-col items-center text-center group">
                        <div className="size-20 rounded-full bg-zinc-900 border-4 border-white/10 flex items-center justify-center text-purple-500 mb-6 shadow-xl group-hover:border-purple-500 transition-colors relative z-10">
                           {step.icon && <step.icon size={32} />}
                           <div className="absolute -top-2 -right-2 size-8 rounded-full bg-purple-600 text-white text-sm font-black flex items-center justify-center border-4 border-zinc-900">
                              {idx + 1}
                           </div>
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-tight mb-2">{step.step}</h4>
                        <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">{step.description}</p>
                     </div>
                  </MotionWrapper>
               ))}
            </div>
         </div>
      </section>

      {/* 5. PRICING */}
      <section id="pricing" className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
               <h2 className="text-5xl font-black tracking-tighter mb-4">Simple, Transparent Investment</h2>
               <p className="text-foreground/50 max-w-2xl mx-auto">{product.pricing?.description}</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 items-center">
                {product.pricing?.options.map((plan, idx) => (
                   <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                      <div className={`relative p-10 rounded-[3rem] border transition-all duration-300 ${plan.isPopular ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-110 z-10' : 'bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 hover:border-purple-500/30'}`}>
                         {plan.isPopular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Most Popular</div>}
                         <div className="text-center mb-8">
                            <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-60 mb-2">{plan.name}</h4>
                            <div className="text-5xl font-black tracking-tighter mb-2">{plan.price}</div>
                            {plan.price !== "Custom" && <p className="text-xs opacity-50">per user / month</p>}
                         </div>
                         <ul className="space-y-4 mb-10">
                            {plan.features.map((f, i) => (
                               <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide opacity-80">
                                  <CheckCircle2 size={14} className={plan.isPopular ? 'text-purple-500' : 'text-zinc-400'} />
                                  {f}
                               </li>
                            ))}
                         </ul>
                         <Link href={`/contact?subject=Vexel Hire - ${plan.name}`}>
                            <button className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>
                               Choose {plan.name}
                            </button>
                         </Link>
                      </div>
                   </MotionWrapper>
                ))}
             </div>
         </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      {product.comparison && (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black uppercase tracking-widest">Why HR Leaders Choose Vexel</h2>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-4xl shadow-xl overflow-hidden border border-black/5 dark:border-white/5">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="bg-zinc-100 dark:bg-zinc-950 text-xs font-black uppercase tracking-widest">
                             <th className="p-6">Feature</th>
                             <th className="p-6 text-purple-600">Vexel Hire</th>
                             <th className="p-6 opacity-40">Traditional ATS</th>
                          </tr>
                       </thead>
                       <tbody className="text-sm font-medium">
                          {product.comparison.map((item, idx) => (
                             <tr key={idx} className="border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <td className="p-6 font-bold">{item.feature}</td>
                                <td className="p-6 text-purple-600 font-bold flex items-center gap-2">
                                   {item.vexel === true ? <CheckCircle2 size={16} /> : item.vexel}
                                </td>
                                <td className="p-6 opacity-50">
                                   {item.others === false ? <span className="text-red-500">✕</span> : item.others}
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* 7. CASE STUDIES & RESULTS */}
      {product.caseStudies && (
        <section className="py-24 px-6 bg-zinc-900 text-white">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-black text-center mb-16">Metrics That <span className="bg-white px-2 italic text-black transform -skew-x-12 inline-block">Move</span></h2>
              <div className="grid md:grid-cols-2 gap-12">
                 {product.caseStudies.map((study, idx) => (
                    <div key={idx} className="group cursor-pointer">
                       <div className="relative rounded-3xl overflow-hidden aspect-video mb-6 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                          <Image src={study.image || "/placeholder.jpg"} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                          <div className="absolute bottom-6 left-6 right-6">
                             <h3 className="text-2xl font-black italic mb-2">{study.title}</h3>
                             <div className="flex flex-wrap gap-2">
                                {study.results.map((res, r) => (
                                   <span key={r} className="px-3 py-1 rounded-full bg-purple-600 text-[10px] font-bold uppercase tracking-widest">{res}</span>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* 8. TESTIMONIALS */}
      {product.testimonials && (
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Trusted by <span className="text-purple-600 italic">People Ops</span></h2>
              <div className="grid md:grid-cols-2 gap-8">
                 {product.testimonials.map((t, idx) => (
                    <div key={idx} className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-white/5 relative border border-black/5 dark:border-white/5">
                       <Quote className="text-purple-500/20 mb-6" size={48} />
                       <p className="text-xl font-bold italic mb-8 leading-relaxed">"{t.quote}"</p>
                       <div className="flex items-center gap-4">
                          <div className="size-12 rounded-full bg-purple-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-foreground/40">{t.author.charAt(0)}</div>
                          <div>
                             <h5 className="font-black uppercase tracking-wider text-sm">{t.author}</h5>
                             <p className="text-xs text-foreground/50">{t.role}, {t.company}</p>
                          </div>
                          <div className="ml-auto flex gap-1 text-yellow-500">
                             {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* 9. FAQ SECTION */}
      {product.faq && (
         <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">FAQ</h2>
               <div className="space-y-4">
                  {product.faq.map((item, idx) => (
                     <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                        <h4 className="font-bold text-lg mb-2 flex items-start gap-3">
                           <HelpCircle className="text-purple-500 shrink-0 mt-1" size={18} />
                           {item.question}
                        </h4>
                        <p className="text-foreground/60 text-sm leading-relaxed pl-8">{item.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 10. PARTNERS */}
      {product.partners && (
         <section className="py-20 px-6 border-t border-b border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto text-center">
               <p className="text-xs font-black uppercase tracking-[0.3em] opacity-30 mb-8">Seamlessly Integrates With</p>
               <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-50 hover:opacity-100 transition-opacity">
                  {product.partners.map((p, idx) => (
                     <div key={idx} className="flex items-center gap-2 font-black text-xl">
                        <Activity size={24} className="text-purple-500" /> {p.name}
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* ROADMAP SECTION */}
      {product.roadmap && (
         <RoadmapTimeline 
            items={product.roadmap} 
            color="bg-purple-500" 
            accentColor="text-purple-500"
         />
      )}

      {/* 11. CTA */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <MotionWrapper type="scale">
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10">Start Hiring <br/> With <span className="text-purple-600 italic">Confidence.</span></h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <Link href="/contact">
                     <button className="px-12 py-6 rounded-full bg-purple-600 text-white text-xl font-black shadow-2xl shadow-purple-500/40 hover:scale-110 transition-transform">
                        Get Started Free
                     </button>
                  </Link>
                  <Link href="/contact?subject=Hire Demo">
                     <button className="px-12 py-6 rounded-full border-2 border-purple-500/20 hover:border-purple-500 text-xl font-black transition-colors">
                        Book a Demo
                     </button>
                  </Link>
               </div>
               <p className="text-xs font-black uppercase tracking-widest opacity-40">No credit card required • 14-day free trial</p>
            </MotionWrapper>
         </div>
      </section>
    </main>
  );
}
