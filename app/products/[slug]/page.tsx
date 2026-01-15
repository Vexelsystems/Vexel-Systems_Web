import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { generateDynamicMetadata } from "@/lib/seo";
import { 
  CheckCircle, ArrowRight, Sparkles, Quote, 
  HelpCircle, CheckCircle2, Star, Activity,
  Layers, Zap, Shield, Target, MousePointer2, Monitor
} from "lucide-react";
import type { Metadata } from "next";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return {};

  return generateDynamicMetadata({
    title: product.title,
    description: product.fullDescription,
    keywords: [
      product.tagline,
      product.category,
      ...product.idealFor,
      'Product',
      'Vexel Systems',
    ],
    path: `/products/${product.slug}`,
    image: product.mainImage,
    type: 'website',
  });
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const isTrack = slug === 'vexel-track';
  const isPOS = slug === 'vexel-pos';
  const isHire = slug === 'vexel-hire';

  return (
    <main className="min-h-screen bg-transparent relative selection:bg-primary/20">
      {/* 1. PRODUCT SPECIFIC HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <HeroBackground />
        
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link href="/products" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[.3em] text-foreground/30 hover:text-primary transition-all">
            <ArrowRight className="rotate-180" size={12} />
            Back to Registry
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <MotionWrapper type="slideUp">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
                  <Sparkles className="text-primary" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[.4em] text-primary">{product.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-foreground tracking-tighter leading-[0.8] mb-10">
                  {product.title}
                </h1>

                <TypewriterText 
                  phrases={[product.tagline, "Enterprise Ready.", "Secured by Vexel.", "Seamless Integration."]} 
                  className="text-2xl font-black text-primary mb-8 block uppercase tracking-tight"
                />

                <p className="text-lg font-medium text-foreground/50 max-w-xl mb-12 leading-relaxed">
                  {product.fullDescription}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <Link href="/contact">
                    <button className="bg-primary text-white px-12 py-6 rounded-4xl text-xl font-black shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
                      Deploy Now
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/contact?subject=Demo">
                    <button className="px-12 py-6 rounded-4xl text-xl font-black border border-foreground/10 hover:bg-foreground/5 transition-all">
                      Live Walkthrough
                    </button>
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            <MotionWrapper type="slideRight" className="flex-1 relative">
              <div className="relative group">
                 <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10 group-hover:bg-primary/20 transition-all duration-1000" />
                 <div className="relative rounded-[5rem] overflow-hidden aspect-square shadow-2xl border-16 border-white dark:border-zinc-900 ring-1 ring-black/5">
                    <Image src={product.mainImage} alt={product.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-40" />
                 </div>
                 
                 {/* Floating Badges for Uniqueness */}
                 <div className="absolute -top-6 -right-6 p-8 rounded-4xl bg-white dark:bg-zinc-800 shadow-2xl border border-black/5 dark:border-white/5 animate-bounce-slow">
                    <div className="flex items-center gap-4">
                       <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          <Zap size={24} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">System Status</p>
                          <p className="text-sm font-black text-foreground uppercase">Operational</p>
                       </div>
                    </div>
                 </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT PERFORMANCE - Unique Grid */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
               <MotionWrapper type="scale" className="lg:col-span-1 p-12 rounded-[4rem] bg-primary text-white flex flex-col justify-between">
                  <div>
                     <Target size={48} className="mb-8" />
                     <h2 className="text-4xl font-black tracking-tighter leading-tight mb-6">Designed for <span className="italic">Impact.</span></h2>
                     <p className="font-medium opacity-80 leading-relaxed mb-10">We don't build generic tools. We engineer competitive advantages tailored for high-stakes environments.</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-white/20 pt-8">
                     <div className="size-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                        <MousePointer2 size={16} />
                     </div>
                     <span className="text-xs font-black uppercase tracking-widest">Interactive Protocol enabled</span>
                  </div>
               </MotionWrapper>

               <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                  {product.checklist.map((item, idx) => (
                    <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                       <div className="p-12 rounded-[4rem] bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 h-full relative group hover:bg-white dark:hover:bg-zinc-900 transition-all">
                          <CheckCircle2 className="text-primary mb-8 group-hover:scale-125 transition-transform" size={40} />
                          <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item}</h4>
                          <p className="text-sm font-medium text-foreground/40 leading-relaxed">Integrated directly into the core engine for zero-latency execution.</p>
                       </div>
                    </MotionWrapper>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 3. PRODUCT DNA / VISION */}
      <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] -z-10 translate-x-1/3 translate-y-1/3 opacity-30"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <MotionWrapper type="slideLeft">
                  <div className="space-y-10">
                     <span className="text-primary text-xs font-black uppercase tracking-[0.5em]">The Philosophy</span>
                     <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic leading-none">
                        Product <span className="not-italic">DNA.</span>
                     </h2>
                     <div className="p-12 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-3xl relative group">
                        <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
                        <p className="text-2xl md:text-3xl font-black italic text-white/80 leading-snug">
                           "{product.shortDescription}"
                        </p>
                     </div>
                     <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col">
                           <span className="text-6xl font-black text-primary">99.9%</span>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Success Vector</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-6xl font-black text-white">SECURED</span>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Encryption Tier</span>
                        </div>
                     </div>
                  </div>
               </MotionWrapper>

               <div className="space-y-6">
                  {product.features.map((feat, idx) => (
                    <MotionWrapper key={idx} type="slideRight" delay={idx * 0.1}>
                       <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all flex items-start gap-8 group">
                          <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                             <Layers size={32} />
                          </div>
                          <div>
                             <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">{feat.title}</h4>
                             <p className="text-white/40 text-sm font-medium leading-relaxed">{feat.description}</p>
                          </div>
                       </div>
                    </MotionWrapper>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. PERFORMANCE ROADMAP - Bespoke for Products */}
      {product.roadmap && (
         <RoadmapTimeline items={product.roadmap} />
      )}

      {/* 5. SECTOR ENFORCEMENT (Ideal For) */}
      <section className="py-32 px-6 bg-foreground text-background">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
               <div className="text-center md:text-left">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 italic">Sector <span className="text-primary not-italic">Enforcement.</span></h2>
                  <p className="text-background/50 text-xl font-medium tracking-tight">Verified deployment vectors for {product.title}.</p>
               </div>
               <div className="flex flex-wrap justify-center gap-4 md:justify-end max-w-xl">
                  {product.idealFor.map((sector, idx) => (
                    <MotionWrapper key={idx} type="scale" delay={idx * 0.05}>
                       <div className="px-10 py-5 bg-background text-foreground rounded-full font-black uppercase tracking-widest text-[10px] border border-background/20 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default">
                          {sector}
                       </div>
                    </MotionWrapper>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. THE WINNING EDGE (Benefits) */}
      <section className="py-32 px-6 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <MotionWrapper type="slideLeft">
                  <div className="space-y-6">
                     <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9] italic">Why <span className="text-primary not-italic">Deploy</span> this architecture?</h2>
                     <p className="text-foreground/50 text-lg leading-relaxed max-w-lg italic">
                        The metrics don't lie. Our products are engineered to outperform legacy systems in every measurable category.
                     </p>
                  </div>
               </MotionWrapper>
               <div className="grid gap-6">
                  {product.benefits.map((benefit, idx) => (
                    <MotionWrapper key={idx} type="slideRight" delay={idx * 0.1}>
                       <div className="p-10 rounded-[3rem] bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all group">
                          <h4 className="text-2xl font-black mb-4 lowercase tracking-tighter flex items-center gap-4">
                             <div className="size-2 bg-primary rounded-full" />
                             {benefit.title}
                          </h4>
                          <p className="text-foreground/40 text-sm font-medium leading-relaxed pl-6">{benefit.description}</p>
                       </div>
                    </MotionWrapper>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. COMPARISON SECTION (NEW) */}
      {product.comparison && (
        <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic">Vexel vs <span className="text-primary not-italic">Others</span></h2>
                 <p className="text-white/40 text-lg font-bold uppercase tracking-[.2em]">The Competitive Advantage</p>
              </div>
              
              <MotionWrapper type="slideUp">
                <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Performance Metric</th>
                            <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5">Vexel Engine</th>
                            <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Generic Brands</th>
                         </tr>
                      </thead>
                      <tbody>
                         {product.comparison.map((item, idx) => (
                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                               <td className="p-10 font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-tight text-sm">{item.feature}</td>
                               <td className="p-10 bg-primary/5">
                                  {typeof item.vexel === 'boolean' ? (
                                     item.vexel ? <CheckCircle2 className="text-primary" size={24} /> : <Activity className="text-white/20" size={24} />
                                  ) : (
                                     <span className="text-primary font-black uppercase tracking-tighter text-base italic">{item.vexel}</span>
                                  )}
                               </td>
                               <td className="p-10 opacity-40">
                                  {typeof item.others === 'boolean' ? (
                                     item.others ? <CheckCircle2 className="text-white/40" size={20} /> : <Activity className="text-white/10" size={20} />
                                  ) : (
                                     <span className="text-white font-bold text-sm tracking-widest italic">{item.others}</span>
                                  )}
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </MotionWrapper>
           </div>
        </section>
      )}

      {/* 8. PRICING / INVESTMENT (NEW) */}
      {product.pricing && (
        <section className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic">Investment <span className="text-primary not-italic">Tiers</span></h2>
                 <p className="text-foreground/40 text-xl font-medium max-w-2xl mx-auto italic">Scale your operations with surgical precision.</p>
              </div>

              <div className={`grid gap-8 ${product.pricing.options.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                {product.pricing.options.map((option, idx) => (
                  <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                    <div className={`p-12 rounded-[4rem] border h-full flex flex-col relative transition-all duration-500 hover:translate-y-[-10px] ${idx === 1 || idx === 2 ? 'bg-zinc-950 text-white border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-10 scale-105' : 'bg-white/40 dark:bg-white/5 border-black/5 dark:border-white/5'}`}>
                      {idx === 2 && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">High Velocity</span>}
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 opacity-40 italic">{option.name}</h4>
                      <div className="mb-10 min-h-[80px]">
                        <p className={`text-5xl font-black tracking-tighter ${option.price === 'Contact Sales' ? 'text-2xl pt-4 opacity-80' : 'text-primary'}`}>{option.price}</p>
                        {option.price !== 'Contact Sales' && !option.price.includes('Custom') && <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Monthly Instance</span>}
                      </div>
                      <ul className="space-y-5 mb-12 grow pt-8 border-t border-black/5 dark:border-white/5">
                         {option.features.map((f, fi) => (
                           <li key={fi} className="flex items-start gap-4 text-[11px] font-black">
                             <CheckCircle2 size={18} className="text-primary shrink-0" />
                             <span className="opacity-80 leading-relaxed uppercase tracking-tighter transition-opacity hover:opacity-100">{f}</span>
                           </li>
                         ))}
                       </ul>
                       <Link href={option.price === 'Contact Sales' ? '/contact' : `/contact?subject=${product.title} - ${option.name}`} className="mt-auto">
                         <button className={`w-full py-6 rounded-4xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl ${idx === 1 || idx === 2 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-foreground text-background hover:bg-primary hover:text-white'}`}>
                           {option.price === 'Contact Sales' ? 'Inquire' : 'Engage'}
                         </button>
                       </Link>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
           </div>
        </section>
      )}

      {/* 9. HARDWARE & ECOSYSTEM (POS Specific Case) */}
      {isPOS && (
         <section className="py-32 px-6 bg-foreground text-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <MotionWrapper type="slideLeft">
                     <div className="relative">
                        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                        <div className="relative rounded-[5rem] overflow-hidden aspect-16/10 border-16 border-background shadow-2xl group">
                           <Image src="/products/photo-1556742502-ec7c0e9f34b1.jpg" alt="POS Hardware Ecosystem" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                           <div className="absolute bottom-12 left-12 flex items-center gap-4">
                              <div className="size-16 rounded-3xl bg-primary flex items-center justify-center text-white shadow-2xl">
                                 <Monitor size={32} />
                              </div>
                              <div className="text-white">
                                 <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Verified Cluster</p>
                                 <h4 className="text-2xl font-black italic">Hardware Bundle v4.0</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </MotionWrapper>
                  
                  <div className="space-y-10">
                     <div className="inline-block px-5 py-2 rounded-full bg-background text-foreground border border-background/20 text-[10px] font-black tracking-[0.4em] uppercase">The Physical Layer</div>
                     <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic leading-[0.8]">Tangible <span className="text-primary not-italic">Reliability.</span></h2>
                     <p className="text-background/50 text-xl font-medium leading-relaxed italic">Software is only half the battle. We provide a hardened hardware ecosystem engineered specifically for the Vexel engine.</p>
                     
                     <div className="grid grid-cols-2 gap-6 pt-6">
                        {['Receipt Printers', 'Barcode Scanners', 'Cash Drawers', 'Label Printers'].map((hw, i) => (
                           <div key={i} className="flex items-center gap-4 p-6 rounded-[2.5rem] bg-background/5 border border-background/10 group hover:bg-primary transition-colors">
                              <Zap className="text-primary group-hover:text-background" size={24} />
                              <span className="text-xs font-black uppercase tracking-widest group-hover:text-background">{hw}</span>
                           </div>
                        ))}
                     </div>
                     <div className="pt-8 border-t border-background/10">
                        <p className="text-[10px] font-black uppercase tracking-widest text-background/30 mb-4">Training & Support</p>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-6 py-3 bg-background text-foreground rounded-full text-[10px] font-black border border-background/20 italic">On-site Training Included</span>
                           <span className="px-6 py-3 bg-primary text-white rounded-full text-[10px] font-black italic shadow-xl shadow-primary/20">24/7 Hardware Support</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )}

      {/* 10. SOCIAL INTEGRITY (Testimonial) */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto">
            <MotionWrapper type="scale">
               <div className="p-20 rounded-[5rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-2xl relative text-center overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-primary/20" />
                  <Quote className="absolute top-12 left-12 text-primary/10" size={140} />
                  <p className="text-3xl md:text-5xl font-black italic text-foreground mb-16 leading-[1.1] tracking-tighter relative z-10 transition-transform hover:scale-[1.01]">
                    "{product.title} has completely transformed how we view our daily data. It's not just a tool; it's a member of the team."
                  </p>
                  <div className="flex flex-col items-center gap-4">
                     <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Star size={32} />
                     </div>
                     <div>
                        <h4 className="text-2xl font-black text-primary uppercase tracking-widest leading-none">Enterprise Partner</h4>
                        <p className="text-xs font-bold text-foreground/40 mt-1 uppercase tracking-widest">Early Adopter Program</p>
                     </div>
                  </div>
               </div>
            </MotionWrapper>
         </div>
      </section>

      {/* 11. PRODUCT ACTIVATION / CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
           <div className="p-24 rounded-[6rem] bg-zinc-900 border border-white/5 shadow-2xl relative overflow-hidden text-center lg:text-left text-white">
              <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[180px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-30"></div>
              
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <MotionWrapper type="slideLeft">
                   <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
                     Ready to <span className="text-primary italic">Deploy</span> {product.title}?
                   </h2>
                   <p className="text-white/50 text-xl font-medium mb-12 max-w-lg leading-relaxed italic">
                     Contact our product engineers to begin your integration sequence and unlock enterprise potential.
                   </p>
                   <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                      <Link href="/contact">
                        <button className="bg-primary text-white px-12 py-6 rounded-3xl text-xl font-black shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center gap-4 group">
                           Secure Instance
                           <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                      <Link href="/contact?subject=Demo">
                        <button className="px-12 py-6 rounded-3xl text-xl font-black border border-white/10 text-white hover:bg-white/5 transition-all">
                           Private Briefing
                        </button>
                      </Link>
                   </div>
                </MotionWrapper>

                <MotionWrapper type="slideRight">
                   <div className="p-16 rounded-[4.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                      <div className="size-28 rounded-[3rem] bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10">
                        <Shield size={56} />
                      </div>
                      <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tight italic">Enterprise Grade</h4>
                      <p className="text-white/40 font-medium mb-12 text-sm leading-relaxed">End-to-end encryption and proprietary security protocols come standard with every license.</p>
                      <Link href="/contact" className="text-primary font-black uppercase tracking-[0.4em] text-[10px] hover:tracking-[0.6em] transition-all flex items-center justify-center gap-3">
                        Request Protocol Sheet <ArrowRight size={14} />
                      </Link>
                   </div>
                </MotionWrapper>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
