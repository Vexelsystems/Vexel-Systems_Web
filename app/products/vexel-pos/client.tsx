"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Sparkles, Quote, 
  HelpCircle, CheckCircle2, Star, Activity,
  Layers, Zap, Shield, Target, MousePointer2, Monitor,
  ShoppingCart, Barcode, TrendingUp, Users, Download, Receipt
} from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";

export default function VexelPOSClient() {
  const product = products.find(p => p.slug === "vexel-pos")!;
  const [activeTab, setActiveTab] = useState("Sales");

  return (
    <div className="relative text-foreground selection:bg-primary selection:text-white">
      {/* 1. HERO SECTION (Next-Level) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <HeroBackground />
        
        {/* Micro-trust label */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/5">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            Trusted by 100+ Businesses in Sri Lanka
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <MotionWrapper type="slideUp">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-xl mb-8">
                  <Sparkles className="text-primary" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[.4em] text-primary">{product.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-8">
                  {product.title}
                </h1>

                <TypewriterText 
                  phrases={[product.tagline, "Seamless Transactions.", "Hybrid Reliability.", "Smart Inventory."]} 
                  className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 mb-8 block uppercase tracking-tight"
                />

                <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-xl mb-12 leading-relaxed">
                  {product.fullDescription.substring(0, 150)}...
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/contact?subject=Vexel POS Trial">
                    <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                      Start Free Trial
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/contact?subject=POS Live Demo">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold border border-foreground/10 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2">
                       <Monitor size={20} />
                       Request Live Demo
                    </button>
                  </Link>
                </div>
                <p className="mt-4 text-xs font-medium text-foreground/30 uppercase tracking-widest text-center lg:text-left">
                   No credit card required. 14-day free trial.
                </p>
              </MotionWrapper>
            </div>

            {/* Right Visuals (Interactive Demo) */}
            <MotionWrapper type="slideRight" className="flex-1 w-full max-w-2xl">
              <div className="relative group perspective-1000">
                 {/* Abstract BG */}
                 <div className="absolute -inset-10 bg-linear-to-tr from-primary/30 to-purple-600/30 rounded-full blur-[100px] -z-10 group-hover:opacity-75 transition-opacity duration-1000" />
                 
                 {/* Main Dashboard UI Mockup */}
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 aspect-video transform rotate-y-[-5deg] group-hover:rotate-y-0 transition-transform duration-700">
                    <Image src="/products/photo-1556742502-ec7c0e9f34b1.jpg" alt="Vexel POS Dashboard" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-white font-black text-2xl mb-2">Interactive Demo</h3>
                            <p className="text-white/60 text-sm">Hover to Engage</p>
                        </div>
                    </div>
                    
                    {/* Floating UI Elements */}
                    <motion.div 
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.5, duration: 0.8 }}
                       className="absolute top-4 right-4 bg-white dark:bg-zinc-800 p-3 rounded-lg shadow-lg border border-black/5 flex items-center gap-3"
                    >
                       <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                          <TrendingUp size={16} />
                       </div>
                       <div>
                          <p className="text-[10px] uppercase font-bold text-foreground/50">Daily Sales</p>
                          <p className="text-sm font-black">Rs. 124,500</p>
                       </div>
                    </motion.div>

                     <motion.div 
                       initial={{ x: -20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 0.8, duration: 0.8 }}
                       className="absolute bottom-4 left-4 bg-white dark:bg-zinc-800 p-3 rounded-lg shadow-lg border border-black/5 flex items-center gap-3"
                    >
                       <div className="size-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <CheckCircle2 size={16} />
                       </div>
                       <div>
                          <p className="text-[10px] uppercase font-bold text-foreground/50">System Status</p>
                          <p className="text-xs font-black">Online & Syncing</p>
                       </div>
                    </motion.div>
                 </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW (Elevator Pitch) */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
           <MotionWrapper type="slideUp">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                 The Retail OS That <span className="text-primary">Never Stops.</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-12">
                 {product.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {product.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group">
                       <div className="size-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                          {feature.icon && <feature.icon size={28} />}
                       </div>
                       <h4 className="font-bold uppercase tracking-tight text-sm">{feature.title}</h4>
                    </div>
                 ))}
              </div>
           </MotionWrapper>
        </div>
      </section>

      {/* 3. FEATURES DEEP DIVE (Categorized) */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter">Everything You Need to <span className="text-primary italic">Scale.</span></h2>
            
            <div className="grid md:grid-cols-2 gap-12">
               {product.detailedFeatures?.map((category, idx) => (
                  <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                     <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors group">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <category.icon size={28} />
                           </div>
                           <h3 className="text-2xl font-black uppercase tracking-tight">{category.category}</h3>
                        </div>
                        <ul className="space-y-4">
                           {category.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-start gap-3 text-sm font-semibold text-foreground/70">
                                 <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
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

      {/* 4. INTERACTIVE DEMO CTA (Video Placeholder) */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.2),transparent_70%)]" />
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-6">See It In Action</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Built for Speed. Designed for Growth.</h2>
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/20 shadow-2xl bg-zinc-900 group cursor-pointer group">
               <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                  <div className="size-20 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm shadow-xl pl-1">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
               </div>
               <Image src="/products/photo-1556742502-ec7c0e9f34b1.jpg" alt="POS Demo Video" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
         </div>
      </section>

      {/* 5. HOW IT WORKS (Workflow) */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20">Deployment <span className="italic text-primary">Blueprint</span></h2>
            
            <div className="relative">
               {/* Connecting Line */}
               {/* <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800 -z-10 hidden md:block" /> */}
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {product.process?.map((step, idx) => (
                     <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                        <div className="flex flex-col items-center text-center group">
                           <div className="size-20 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-primary mb-6 shadow-xl group-hover:border-primary transition-colors relative z-10">
                              {step.icon && <step.icon size={32} />}
                              <div className="absolute -top-2 -right-2 size-8 rounded-full bg-primary text-white text-sm font-black flex items-center justify-center border-4 border-white dark:border-zinc-950">
                                 {idx + 1}
                              </div>
                           </div>
                           <h4 className="text-xl font-black uppercase tracking-tight mb-2">{step.step}</h4>
                           <p className="text-sm text-foreground/60 leading-relaxed max-w-[200px]">{step.description}</p>
                        </div>
                     </MotionWrapper>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      {product.comparison && (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black uppercase tracking-widest">Why Switch to Vexel?</h2>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-4xl shadow-xl overflow-hidden border border-black/5 dark:border-white/5">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="bg-zinc-100 dark:bg-zinc-950 text-xs font-black uppercase tracking-widest">
                             <th className="p-6">Feature</th>
                             <th className="p-6 text-primary">Vexel POS</th>
                             <th className="p-6 opacity-40">Others</th>
                          </tr>
                       </thead>
                       <tbody className="text-sm font-medium">
                          {product.comparison.map((item, idx) => (
                             <tr key={idx} className="border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <td className="p-6 font-bold">{item.feature}</td>
                                <td className="p-6 text-primary font-bold flex items-center gap-2">
                                   {item.vexel === true ? <CheckCircle2 size={16} /> : item.vexel}
                                </td>
                                <div className="p-6 opacity-50">
                                   {item.others === false ? <span className="text-red-500">✕</span> : item.others}
                                </div>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* 7. HARDWARE ECOSYSTEM */}
      <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <MotionWrapper type="slideLeft">
                  <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-6 block font-biryani">Hardware Ecosystem</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 italic">Built for <span className="text-primary not-italic">Endurance.</span></h2>
                  <p className="text-white/50 text-xl font-medium leading-relaxed mb-12">
                    We don't just provide software. We Provision, Install, and Support the entire hardware stack aligned for reliability.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-12">
                     <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4"><Monitor size={20} /></div>
                        <h4 className="font-black uppercase tracking-wider text-sm mb-1">Touch Terminals</h4>
                        <p className="text-xs text-white/40">Industrial Grade</p>
                     </div>
                     <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4"><Barcode size={20} /></div>
                        <h4 className="font-black uppercase tracking-wider text-sm mb-1">Scanners</h4>
                        <p className="text-xs text-white/40">2D / QR Ready</p>
                     </div>
                     <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4"><Receipt size={20} /></div>
                        <h4 className="font-black uppercase tracking-wider text-sm mb-1">Printers</h4>
                        <p className="text-xs text-white/40">Thermal / Cloud</p>
                     </div>
                  </div>

                  <Link href="/contact?subject=POS Hardware Catalog">
                    <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
                      Request Hardware Catalog <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
               </MotionWrapper>

               <MotionWrapper type="slideRight">
                  <div className="relative group perspective-1000">
                     <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                     <div className="relative rounded-[3rem] overflow-hidden aspect-square border-8 border-zinc-900 shadow-2xl transform rotate-y-12 group-hover:rotate-y-0 transition-transform duration-700 bg-zinc-900">
                        <Image src="/products/photo-1556742502-ec7c0e9f34b1.jpg" alt="POS Hardware Ecosystem" fill className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90" />
                        <div className="absolute bottom-12 left-12">
                           <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Vexel Labs Certified</h4>
                           <p className="text-white/50 text-sm">Tested for 24/7 uptime in Sri Lankan conditions.</p>
                        </div>
                     </div>
                  </div>
               </MotionWrapper>
            </div>
         </div>
      </section>

      {/* 8. TESTIMONIALS */}
      {product.testimonials && (
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                    <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">Success Stories</span>
                    <h2 className="text-4xl md:text-5xl font-black">Merchants <span className="text-primary italic">Love Us.</span></h2>
                 </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                 {product.testimonials.map((t, idx) => (
                    <div key={idx} className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-white/5 relative border border-black/5 dark:border-white/5">
                       <Quote className="text-primary/20 mb-6" size={48} />
                       <p className="text-xl font-bold italic mb-8 leading-relaxed">"{t.quote}"</p>
                       <div className="flex items-center gap-4">
                          <div className="size-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-foreground/40">{t.author.charAt(0)}</div>
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

      {/* 9. CASE STUDIES (Mini-Portfolio) */}
      {product.caseStudies && (
        <section className="py-24 px-6 bg-zinc-900 text-white">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-black text-center mb-16">Results That <span className="bg-white px-2 italic text-black transform -skew-x-12 inline-block">Matter</span></h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                 {product.caseStudies.map((study, idx) => (
                    <div key={idx} className="group cursor-pointer">
                       <div className="relative rounded-3xl overflow-hidden aspect-video mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                          <Image src="/products/photo-1556742502-ec7c0e9f34b1.jpg" alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                          <div className="absolute bottom-6 left-6 right-6">
                             <h3 className="text-2xl font-black italic mb-2">{study.title}</h3>
                             <div className="flex flex-wrap gap-2">
                                {study.results.map((res, r) => (
                                   <span key={r} className="px-3 py-1 rounded-full bg-primary text-[10px] font-bold uppercase tracking-widest">{res}</span>
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

      {/* 10. PRODUCT PACKAGES (Pricing) */}
      <section id="pricing" className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
               <h2 className="text-5xl font-black tracking-tighter mb-4">Pricing Plans</h2>
               <p className="text-foreground/50 max-w-2xl mx-auto">{product.pricing?.description}</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 items-center">
                {product.pricing?.options.map((plan, idx) => (
                   <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                      <div className={`relative p-10 rounded-[3rem] border transition-all duration-300 ${plan.isPopular ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-110 z-10' : 'bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 hover:border-primary/30'}`}>
                         {plan.isPopular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Most Popular</div>}
                         <div className="text-center mb-8">
                            <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-60 mb-2">{plan.name}</h4>
                            <div className="text-5xl font-black tracking-tighter mb-2">{plan.price}</div>
                            <p className="text-xs opacity-50">per user / month</p>
                         </div>
                         <ul className="space-y-4 mb-10">
                            {plan.features.map((f, i) => (
                               <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide opacity-80">
                                  <CheckCircle2 size={14} className={plan.isPopular ? 'text-primary' : 'text-zinc-400'} />
                                  {f}
                               </li>
                            ))}
                         </ul>
                         <Link href={`/contact?subject=Vexel POS - ${plan.name}`}>
                            <button className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>
                                Choose {plan.name}
                            </button>
                         </Link>
                      </div>
                   </MotionWrapper>
                ))}
             </div>
         </div>
      </section>

      {/* 11. FAQ SECTION */}
      {product.faq && (
         <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">Common Questions</h2>
               <div className="space-y-4">
                  {product.faq.map((item, idx) => (
                     <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5">
                        <h4 className="font-bold text-lg mb-2 flex items-start gap-3">
                           <HelpCircle className="text-primary shrink-0 mt-1" size={18} />
                           {item.question}
                        </h4>
                        <p className="text-foreground/60 text-sm leading-relaxed pl-8">{item.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 12. INTEGRATIONS & PARTNERS */}
      {product.partners && (
         <section className="py-20 px-6 border-t border-b border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto text-center">
               <p className="text-xs font-black uppercase tracking-[0.3em] opacity-30 mb-8">Seamlessly Integrated With</p>
               <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-50 hover:opacity-100 transition-opacity">
                  {/* Placeholder logos - replacing text with simple blocks if images missing */}
                  {product.partners.map((p, idx) => (
                     <div key={idx} className="flex items-center gap-2 font-black text-xl">
                        {/* <Image src={p.logo} width={30} height={30} alt={p.name} /> */}
                        {p.name}
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 13. DOWNLOADABLE ASSETS */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-12 rounded-[3rem] border border-white/10 bg-white/5">
            <div>
               <h3 className="text-2xl font-black mb-2">Product Brochure 2026</h3>
               <p className="text-white/50 text-sm">Detailed technical specifications, hardware compatibility list, and feature breakdown.</p>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-black uppercase tracking-widest hover:scale-105 transition-transform">
               <Download size={20} />
               Download PDF
            </button>
         </div>
      </section>

      {/* 14. CTA (Sticky / Final) */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <MotionWrapper type="scale">
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10">Stop Managing. <br/> Start <span className="text-primary italic">Growing.</span></h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <Link href="/contact">
                     <button className="px-12 py-6 rounded-full bg-primary text-white text-xl font-black shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
                        Get Started Now
                     </button>
                  </Link>
                  <Link href="/contact?subject=Demo">
                     <button className="px-12 py-6 rounded-full border-2 border-primary/20 hover:border-primary text-xl font-black transition-colors">
                        Book a Demo
                     </button>
                  </Link>
               </div>
               <div className="flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-widest opacity-40">
                  <span className="flex items-center gap-2"><Shield size={12} /> Bank-Grade Security</span>
                  <span className="flex items-center gap-2"><Activity size={12} /> 99.9% Uptime SLA</span>
                  <span className="flex items-center gap-2"><Users size={12} /> 24/7 Local Support</span>
               </div>
            </MotionWrapper>
         </div>
      </section>
    </div>
  );
}
