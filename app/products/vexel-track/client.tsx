"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Sparkles, Quote, 
  HelpCircle, CheckCircle2, Star, Activity,
  MapPin, Navigation, Smartphone, Truck, Shield, 
  Settings, BarChart3, Bell, Globe, Zap, Download
} from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import { products } from "@/lib/products";
import { motion } from "framer-motion";

export default function VexelTrackClient() {
  const product = products.find(p => p.slug === "vexel-track")!;
  const [activeTab, setActiveTab] = useState("Tracking");

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-green-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <HeroBackground />
        
        {/* Micro-trust label */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/5">
            <Globe size={12} className="text-green-500 fill-green-500" />
            Tracking 500+ Vehicles in Real-Time
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <MotionWrapper type="slideUp">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-green-500/10 border border-green-500/20 backdrop-blur-xl mb-8">
                  <Activity className="text-green-500" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[.4em] text-green-500">{product.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-8">
                  Total Visibility.<br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-teal-400">Zero Blind Spots.</span>
                </h1>

                <TypewriterText 
                  phrases={[product.tagline, "Live GPS Tracking.", "Fuel Management.", "Driver Safety."]} 
                  className="text-xl md:text-2xl font-bold text-foreground/50 mb-8 block uppercase tracking-wide"
                />

                <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-xl mb-12 leading-relaxed">
                  {product.fullDescription.substring(0, 150)}...
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/contact?subject=Vexel Track Demo">
                    <button className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                      Request Demo
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/contact?subject=Track Hardware Info">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold border border-foreground/10 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2">
                       <HelpCircle size={20} />
                       How It Works
                    </button>
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Visuals (Map UI) */}
            <MotionWrapper type="slideRight" className="flex-1 w-full max-w-2xl">
              <div className="relative group perspective-1000">
                 <div className="absolute -inset-10 bg-linear-to-tr from-green-500/30 to-teal-600/30 rounded-full blur-[100px] -z-10 group-hover:opacity-75 transition-opacity duration-1000" />
                 
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 aspect-square group-hover:rotate-1 transition-transform duration-700">
                    <Image src="/products/photo-1551288049-bebda4e38f71.jpg" alt="Vexel Track Map" fill className="object-cover opacity-60" />
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Map Elements (Animated Pins) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                       <div className="relative">
                          <div className="size-4 bg-green-500 rounded-full animate-ping absolute inset-0" />
                          <div className="size-4 bg-green-500 rounded-full border-2 border-white relative z-10" />
                       </div>
                    </div>
                    
                    {/* Floating Fleet Card */}
                    <motion.div 
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.5, duration: 0.8 }}
                       className="absolute bottom-6 left-6 right-6 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl flex items-center justify-between"
                    >
                       <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center font-black text-xs">WP</div>
                          <div>
                             <p className="text-xs font-bold uppercase text-foreground/50">Vehicle #12</p>
                             <p className="text-sm font-black">Moving • 45 km/h</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-1 text-green-500">
                          <Zap size={14} fill="currentColor" />
                          <span className="text-xs font-bold">Good</span>
                       </div>
                    </motion.div>
                 </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. LIVE TRACKING DEMO (Visuals) */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
           <MotionWrapper type="slideUp">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                 Fleet Intelligence for <br/> <span className="text-green-600">Smarter Logistics.</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-12">
                 {product.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {product.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group">
                       <div className="size-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform shadow-sm">
                          {feature.icon && <feature.icon size={28} />}
                       </div>
                       <h4 className="font-bold uppercase tracking-tight text-sm">{feature.title}</h4>
                    </div>
                 ))}
              </div>
           </MotionWrapper>
        </div>
      </section>

      {/* 3. DEEP DIVE FEATURES */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter">Everything Mapped <span className="text-green-500 italic">Out.</span></h2>
            
            <div className="grid md:grid-cols-2 gap-12">
               {product.detailedFeatures?.map((category, idx) => (
                  <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                     <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-green-500/30 transition-colors group">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="size-14 rounded-2xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                              <category.icon size={28} />
                           </div>
                           <h3 className="text-2xl font-black uppercase tracking-tight">{category.category}</h3>
                        </div>
                        <ul className="space-y-4">
                           {category.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-start gap-3 text-sm font-semibold text-foreground/70">
                                 <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
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

      {/* 4. HARDWARE INSTALLATION */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/10 blur-[100px]" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <MotionWrapper type="slideRight">
                  <span className="text-green-500 font-black uppercase tracking-widest text-xs mb-4 block">Deployment</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-8">We Install, You <span className="text-green-500 italic">Drive.</span></h2>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                     Our certified technicians handle the entire installation process. Whether it's a motorbike or a heavy truck, we ensure zero warranty voiding and hidden placement for security.
                  </p>
                  <ul className="space-y-4 mb-10">
                     <li className="flex items-center gap-4 font-bold">
                        <div className="size-8 rounded-full bg-green-900/50 flex items-center justify-center text-green-500"><Zap size={16} /></div>
                        Wait-free Installation (Under 30 Mins)
                     </li>
                     <li className="flex items-center gap-4 font-bold">
                        <div className="size-8 rounded-full bg-green-900/50 flex items-center justify-center text-green-500"><Shield size={16} /></div>
                        Tamper-Proof Wiring
                     </li>
                     <li className="flex items-center gap-4 font-bold">
                        <div className="size-8 rounded-full bg-green-900/50 flex items-center justify-center text-green-500"><MapPin size={16} /></div>
                        Island-wide Service Team
                     </li>
                  </ul>
               </MotionWrapper>
               
               <MotionWrapper type="slideLeft">
                  <div className="relative aspect-square bg-zinc-900 rounded-[3rem] border border-white/10 p-8 flex items-center justify-center">
                     <div className="text-center">
                        <Settings size={64} className="text-white/20 mx-auto mb-6" />
                        <h4 className="text-2xl font-black uppercase tracking-widest text-white/40">Hardware Diagram</h4>
                        <p className="text-sm text-white/20 mt-2">Proprietary Vexel GPS Unit</p>
                     </div>
                  </div>
               </MotionWrapper>
            </div>
         </div>
      </section>

      {/* 5. COMPARISON */}
      {product.comparison && (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black uppercase tracking-widest">Why Vexel Track?</h2>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-4xl shadow-xl overflow-hidden border border-black/5 dark:border-white/5">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="bg-zinc-100 dark:bg-zinc-950 text-xs font-black uppercase tracking-widest">
                             <th className="p-6">Feature</th>
                             <th className="p-6 text-green-600">Vexel Track</th>
                             <th className="p-6 opacity-40">Standard GPS</th>
                          </tr>
                       </thead>
                       <tbody className="text-sm font-medium">
                          {product.comparison.map((item, idx) => (
                             <tr key={idx} className="border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <td className="p-6 font-bold">{item.feature}</td>
                                <td className="p-6 text-green-600 font-bold flex items-center gap-2">
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

      {/* 6. CASE STUDIES */}
      {product.caseStudies && (
        <section className="py-24 px-6 bg-zinc-900 text-white">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-black text-center mb-16">Real <span className="bg-white px-2 italic text-black transform -skew-x-12 inline-block">Savings</span></h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                 {product.caseStudies.map((study, idx) => (
                    <div key={idx} className="group cursor-pointer">
                       <div className="relative rounded-3xl overflow-hidden aspect-video mb-6 border border-white/10 group-hover:border-green-500/50 transition-colors">
                          <Image src="/products/photo-1551288049-bebda4e38f71.jpg" alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                          <div className="absolute bottom-6 left-6 right-6">
                             <h3 className="text-2xl font-black italic mb-2">{study.title}</h3>
                             <div className="flex flex-wrap gap-2">
                                {study.results.map((res, r) => (
                                   <span key={r} className="px-3 py-1 rounded-full bg-green-600 text-[10px] font-bold uppercase tracking-widest">{res}</span>
                                ))}
                             </div>
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-8">
                          <div>
                             <h5 className="text-red-400 text-xs font-black uppercase mb-1">Problem</h5>
                             <p className="text-sm opacity-60 leading-relaxed">{study.problem}</p>
                          </div>
                          <div>
                             <h5 className="text-green-400 text-xs font-black uppercase mb-1">Solution</h5>
                             <p className="text-sm opacity-60 leading-relaxed">{study.solution}</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* 7. FAQ */}
      {product.faq && (
         <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">FAQ</h2>
               <div className="space-y-4">
                  {product.faq.map((item, idx) => (
                     <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 hover:border-green-500/30 transition-colors">
                        <h4 className="font-bold text-lg mb-2 flex items-start gap-3">
                           <HelpCircle className="text-green-500 shrink-0 mt-1" size={18} />
                           {item.question}
                        </h4>
                        <p className="text-foreground/60 text-sm leading-relaxed pl-8">{item.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 8. ROADMAP */}
      {product.roadmap && (
         <RoadmapTimeline 
            items={product.roadmap} 
            color="bg-green-500" 
            accentColor="text-green-500"
         />
      )}

      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <MotionWrapper type="scale">
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10">Secure Your <br/> <span className="text-green-600 italic">Assets Today.</span></h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <Link href="/contact">
                     <button className="px-12 py-6 rounded-full bg-green-600 text-white text-xl font-black shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform">
                        Get A Quote
                     </button>
                  </Link>
                  <Link href="/contact?subject=Track Demo">
                     <button className="px-12 py-6 rounded-full border-2 border-green-500/20 hover:border-green-500 text-xl font-black transition-colors">
                        Book Demo
                     </button>
                  </Link>
               </div>
            </MotionWrapper>
         </div>
      </section>
    </main>
  );
}
