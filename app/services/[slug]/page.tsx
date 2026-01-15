import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { generateDynamicMetadata } from "@/lib/seo";
import { 
  HelpCircle, Rocket, Zap, Star, Activity, 
  Quote, ShieldCheck, CheckCircle2, ArrowRight,
  Cpu, Globe, Smartphone, BarChart3, Settings, Monitor
} from "lucide-react";
import type { Metadata } from "next";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { TechCard } from "@/components/ui/TechCard";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) return {};

  return generateDynamicMetadata({
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      ...(service.techStack?.map(t => t.name) || []),
      "Vexel Systems",
      "Software Solutions",
    ],
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  // Slug-specific design tokens
  const isAI = slug === 'ai-ml-solutions';
  const isWeb = slug === 'web-development';
  const isIoT = slug === 'smart-iot-hardware-solutions';
  
  const themeColor = isAI ? 'text-purple-500' : isWeb ? 'text-blue-500' : isIoT ? 'text-emerald-500' : 'text-primary';
  const themeBg = isAI ? 'bg-purple-500/10' : isWeb ? 'bg-blue-500/10' : isIoT ? 'bg-emerald-500/10' : 'bg-primary/10';

  return (
    <main className="min-h-screen bg-transparent relative selection:bg-primary/20">
      {/* 1. BESPOKE HERO SECTION */}
      <section className="relative min-h-[85vh] pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center text-foreground">
        <HeroBackground />
        
        {/* Breadcrumb / Back Link */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link href="/services" className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-all">
            <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={14} />
            Back to Solutions
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <MotionWrapper type={isAI ? "scale" : "slideUp"} duration={1.2}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${themeBg} border border-white/10 mb-8`}>
                <div className={`size-2 rounded-full animate-pulse ${themeColor.replace('text', 'bg')}`} />
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${themeColor}`}>Service Detail • {service.slug.replace(/-/g, ' ')}</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tighter mb-8 italic">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? 'text-primary block not-italic uppercase' : ''}>{word} </span>
                ))}
              </h1>

              <div className="flex flex-col items-center gap-6">
                <TypewriterText 
                  phrases={[service.subtitle, "Bespoke Engineering.", "Global Standards.", "Future Ready."]} 
                  className="text-xl md:text-2xl font-bold text-foreground/60"
                />
                <p className="max-w-2xl text-lg font-medium text-foreground/80 leading-relaxed italic">
                   {service.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                <Link href="/contact">
                  <button className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center gap-3 group">
                    Start Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="px-10 py-5 rounded-2xl text-lg font-black border border-foreground/10 hover:bg-foreground/5 transition-all">
                    Browse Portfolio
                  </button>
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. UNIQUE ABOUT SECTION - "The Vexel DNA" */}
      <section className="py-32 px-6 relative" id="about">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <MotionWrapper type="slideLeft">
                  <div className="space-y-8">
                     <div className="inline-block px-4 py-1 rounded-lg bg-primary/5 border border-primary/20 text-primary text-[10px] font-black tracking-[0.4em] uppercase">Core Philosophy</div>
                     <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tighter">
                        Architecting <span className="text-primary italic">Excellence</span> through precision.
                     </h2>
                     <div className="p-10 rounded-[3rem] bg-white/40 dark:bg-white/5 backdrop-blur-3xl border border-black/5 dark:border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <blockquote className="text-2xl italic font-black text-foreground leading-snug relative z-10 transition-transform group-hover:scale-[1.02]">
                           "{service.aboutDetail}"
                        </blockquote>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 rounded-4xl bg-foreground/5 border border-foreground/5 flex flex-col gap-2 group hover:bg-primary transition-colors">
                           <span className="text-4xl font-black group-hover:text-primary-foreground group-hover:text-white">100%</span>
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:text-white/60">Deployment Success</span>
                        </div>
                        <div className="p-6 rounded-4xl bg-primary/5 border border-primary/5 flex flex-col gap-2 group hover:bg-foreground transition-colors">
                           <span className="text-4xl font-black text-primary group-hover:text-background">24/7</span>
                           <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:text-white/40">Active Monitoring</span>
                        </div>
                     </div>
                  </div>
               </MotionWrapper>

               <MotionWrapper type="slideRight">
                  <div className="relative">
                     <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl -z-10 animate-pulse" />
                     <div className="relative aspect-4/5 rounded-3xl overflow-hidden group">
                        <Image src={service.heroImage} alt={service.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                        <div className="absolute bottom-10 left-10 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                           <p className="text-white text-xs font-black uppercase tracking-[0.3em] mb-2">Internal Codebase</p>
                           <h4 className="text-white text-2xl font-black italic">Vexel Engine v4.2</h4>
                        </div>
                     </div>
                  </div>
               </MotionWrapper>
            </div>
         </div>
      </section>

      {/* 3. CAPABILITIES GRID - Unique to Services */}
      <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div className="max-w-2xl">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">Core <span className="text-primary not-italic">Capabilities.</span></h2>
                  <p className="text-white/60 text-lg font-medium">Specialized solutions engineered to push the boundaries of what's possible in the {service.slug.replace(/-/g, ' ')} space.</p>
               </div>
               <div className="hidden md:block">
                  <div className="size-24 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                     <Settings className="text-primary" size={32} />
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {service.subServices.map((sub, idx) => {
                  const Icon = sub.icon || Monitor;
                  return (
                     <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all group h-full">
                           <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                              <Icon size={32} />
                           </div>
                           <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">{sub.title}</h3>
                           <p className="text-white/50 text-sm font-medium leading-relaxed mb-8">{sub.description}</p>
                           <ul className="space-y-3">
                              {sub.features?.map((feat, fidx) => (
                                 <li key={fidx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                                    <div className="size-1 bg-primary rounded-full" />
                                    {feat}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </MotionWrapper>
                  );
               })}
            </div>
         </div>
      </section>

      {/* 4. TECH STACK - Unique Horizontal Scroll/Grid */}
      <section className="py-32 px-6 relative overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic">The <span className="text-primary not-italic">Power</span> Stack</h2>
               <p className="text-foreground/40 text-lg font-bold uppercase tracking-[.2em]">Our Industry-Leading Technology Suite</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {service.techStack.map((tech, idx) => (
                  <TechCard
                     key={idx}
                     name={tech.name}
                     iconName={tech.iconName}
                     explanation={tech.explanation}
                     index={idx}
                  />
               ))}
            </div>
         </div>
      </section>

      {/* 5. ROADMAP - Bespoke Timeline */}
      {service.roadmap && (
         <section className="py-32 px-6 bg-zinc-900 overflow-hidden relative text-white">
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="flex items-center gap-4 mb-20">
                  <div className="h-[2px] w-20 bg-primary" />
                  <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase">Operational Roadmap</h2>
               </div>

               <div className="relative grid md:grid-cols-3 gap-px bg-white/5 p-px">
                  {service.roadmap.map((item, idx) => (
                     <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                        <div className={`p-12 h-full relative group hover:bg-white/5 transition-all ${item.status === 'current' ? 'bg-primary/10' : ''}`}>
                           {item.status === 'current' && (
                              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary text-[8px] font-black text-white uppercase tracking-widest animate-pulse">Running Now</div>
                           )}
                           <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">{item.date}</span>
                           <h4 className="text-white text-2xl font-black mb-6 italic tracking-tight uppercase">{item.phase}</h4>
                           <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">{item.description}</p>
                           <div className="flex flex-wrap gap-2">
                              {item.items.map((it, iidx) => (
                                 <span key={iidx} className="px-2 py-1 rounded bg-white/5 text-[9px] font-bold text-white/50 border border-white/5">{it}</span>
                              ))}
                           </div>
                        </div>
                     </MotionWrapper>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 6. THE BLUEPRINT (Process) */}
      {service.process && (
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic">The <span className="text-primary not-italic">Blueprint.</span></h2>
                 <p className="text-foreground/40 mt-4 text-xl font-medium tracking-tight">Our rigid deployment sequence for guaranteed success.</p>
              </div>

              <div className="grid md:grid-cols-5 gap-4">
                 {service.process.map((step, idx) => (
                   <MotionWrapper key={idx} type="fade" delay={idx * 0.1}>
                     <div className="group p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 h-full relative overflow-hidden transition-all hover:translate-y-[-10px]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                        <span className="text-7xl font-black text-black/5 dark:text-white/5 absolute -right-4 -bottom-4 tracking-tighter leading-none">{idx + 1}</span>
                        <h4 className="text-xl font-black mb-4 relative z-10">{step.title}</h4>
                        <p className="text-xs font-semibold text-foreground/50 leading-relaxed relative z-10">{step.description}</p>
                     </div>
                   </MotionWrapper>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* 7. CASE STUDIES / PROJECTS */}
      {service.caseStudies && (
        <section className="py-32 px-6 bg-zinc-900 overflow-hidden relative text-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">Proven <span className="text-primary not-italic">Impact.</span></h2>
                <p className="text-white/40 text-lg font-medium">Real-world results delivered to our enterprise partners.</p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs">
                  Reviewing 2 of 14 cases <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {service.caseStudies.map((study, idx) => (
                <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                  <div className="group relative rounded-[4rem] overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <Image 
                        src={study.image} 
                        alt={study.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                      
                      <div className="absolute top-8 left-8">
                        <span className="px-4 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em]">
                          {study.category}
                        </span>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <h4 className="text-3xl font-black text-white italic mb-2">{study.title}</h4>
                            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{study.statDescription}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-5xl font-black text-primary leading-none tracking-tighter">{study.stat}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. THE WINNING EDGE (Benefits) */}
      {service.benefits && (
        <section className="py-32 px-6 bg-zinc-950 text-white">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-16 items-start">
                 <div className="lg:col-span-1 border-l-4 border-primary pl-8">
                    <h2 className="text-5xl font-black tracking-tighter italic leading-none mb-8 text-white">The <span className="text-primary">Winning</span> Edge.</h2>
                    <p className="text-white/40 font-medium">Quantifiable advantages that separate our partners from their competition.</p>
                 </div>
                 <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    {service.benefits.map((benefit, idx) => (
                       <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 h-full flex flex-col gap-4 group hover:bg-primary transition-colors text-white">
                             <h4 className="text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">{benefit.title}</h4>
                             <p className="text-sm font-medium text-white/50 leading-relaxed group-hover:text-white/80">{benefit.description}</p>
                          </div>
                       </MotionWrapper>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* 9. IMPACT STORIES (Testimonial) */}
      {service.testimonial && (
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 -z-10" />
           <div className="max-w-5xl mx-auto">
             <MotionWrapper type="scale">
               <div className="p-20 rounded-[4rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-2xl relative text-center">
                 <Quote className="absolute top-12 left-12 text-primary/10" size={120} />
                 <p className="text-3xl md:text-5xl font-black italic text-foreground mb-12 leading-[1.1] tracking-tighter relative z-10">
                   "{service.testimonial.quote}"
                 </p>
                 <div className="flex flex-col items-center gap-4">
                    <div className="h-1 w-20 bg-primary" />
                    <div>
                       <h4 className="text-2xl font-black text-primary uppercase tracking-widest leading-none">{service.testimonial.author}</h4>
                       <p className="text-xs font-bold text-foreground/40 mt-1">{service.testimonial.role}</p>
                    </div>
                 </div>
               </div>
             </MotionWrapper>
           </div>
        </section>
      )}

      {/* Comparison Section (New) */}
      {service.comparison && (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black uppercase tracking-widest italic">Vexel vs <span className="text-primary not-italic">Others</span></h2>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-4xl shadow-xl overflow-hidden border border-black/5 dark:border-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-zinc-950 text-xs font-black uppercase tracking-widest">
                      <th className="p-6">Feature</th>
                      <th className="p-6 text-primary">Vexel Systems</th>
                      <th className="p-6 opacity-40">Typical Agency</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {service.comparison.map((item, idx) => (
                      <tr key={idx} className="border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-6 font-bold">{item.feature}</td>
                        <td className="p-6 text-primary font-bold flex items-center gap-2">
                          {item.vexel === true ? <CheckCircle2 size={16} /> : item.vexel}
                        </td>
                        <td className="p-6 opacity-50">
                          {item.others === false ? <span className="text-red-500 font-bold">✕</span> : item.others}
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

      {/* 10. PRICING / INVESTMENT */}
      {service.pricing && (
        <section className="py-32 px-6 bg-zinc-950 text-white">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">Investment <span className="text-primary italic">Tiers</span></h2>
                 <p className="text-white/40 text-lg font-medium max-w-2xl mx-auto">{service.pricing.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {service.pricing.options.map((option, idx) => (
                  <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                    <div className={`p-12 rounded-[3.5rem] border h-full flex flex-col relative transition-all duration-500 hover:translate-y-[-10px] ${idx === 1 ? 'bg-primary text-white border-primary shadow-[0_50px_100px_-20px_rgba(239,68,68,0.3)] scale-105 z-10' : 'bg-white/5 border-white/5 hover:border-white/20'}`}>
                      {idx === 1 && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-white text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">Recommended Solution</span>}
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4 opacity-60">{option.name}</h4>
                      <p className="text-6xl font-black mb-10 tracking-[0.05em]">{option.price}</p>
                       <div className="grid md:grid-cols-2 gap-4 mb-12 grow">
                          {option.features.map((f, fi) => (
                             <div key={fi} className="flex items-center gap-2 text-xs font-bold">
                                <CheckCircle2 size={14} className={idx === 1 ? 'text-white' : 'text-primary'} />
                                <span className={idx === 1 ? 'text-white opacity-80 leading-relaxed uppercase tracking-tighter' : 'text-white/80 leading-relaxed uppercase tracking-tighter'}>{f}</span>
                             </div>
                          ))}
                       </div>
                       <Link href={`/contact?subject=${service.title} - ${option.name}`}>
                         <button className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-2xl ${idx === 1 ? 'bg-white text-primary hover:bg-zinc-100 hover:scale-105' : 'bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-primary/20'}`}>
                           Initialize
                         </button>
                       </Link>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
           </div>
        </section>
      )}

      {/* 11. FAQs */}
      {service.faq && (
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto">
              <div className="text-left mb-20 border-l-4 border-primary pl-8">
                 <h2 className="text-5xl font-black tracking-tighter mb-4 italic">Expert <span className="not-italic">Intel.</span></h2>
                 <p className="text-foreground/40 text-lg font-bold uppercase tracking-[.2em]">Operational Q&A</p>
              </div>
              <div className="space-y-6">
                {service.faq.map((item, idx) => (
                  <MotionWrapper key={idx} type="slideUp" delay={idx * 0.05}>
                    <div className="p-10 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 group hover:border-primary/40 transition-all cursor-help">
                       <h4 className="text-xl font-black text-foreground mb-4 flex items-center gap-4">
                          <HelpCircle className="text-primary shrink-0" size={24} />
                          {item.question}
                       </h4>
                       <p className="text-sm font-medium text-foreground/50 leading-relaxed pl-10 border-l border-black/5 dark:border-white/5">
                          {item.answer}
                       </p>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
           </div>
        </section>
      )}

      {/* 12. LEAD IGNITION / CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
           <div className="p-20 rounded-[5rem] bg-zinc-900 border border-white/5 shadow-2xl relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-20 text-white"></div>
              
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <MotionWrapper type="slideLeft">
                   <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-8 tracking-tighter">
                     Ready to <span className="text-primary italic">Scale</span> {service.title}?
                   </h2>
                   <p className="text-white/50 text-xl font-medium mb-12 max-w-lg leading-relaxed italic">
                     Deployment awaits. Let's translate your vision into high-performance architecture.
                   </p>
                   <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                      <Link href="/contact">
                        <button className="bg-primary text-white px-12 py-6 rounded-3xl text-xl font-black shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center gap-4 group">
                           Book Session
                           <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                      <Link href="/contact?subject=Availability">
                        <button className="px-12 py-6 rounded-3xl text-xl font-black border border-white/10 text-white hover:bg-white/5 transition-all">
                           Check Availability
                        </button>
                      </Link>
                   </div>
                </MotionWrapper>

                <MotionWrapper type="slideRight">
                   <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden text-white">
                      <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                      <div className="size-24 rounded-4xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                        <Activity size={48} />
                      </div>
                      <h4 className="text-3xl font-black text-white mb-4 italic tracking-tight uppercase">High Priority</h4>
                      <p className="text-white/40 font-medium mb-10 text-sm">Typical response within 180 minutes for enterprise inquiries.</p>
                      <Link href="/contact" className="text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:tracking-[0.5em] transition-all flex items-center justify-center gap-2">
                        Start Encrypted Thread <ArrowRight size={14} />
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
