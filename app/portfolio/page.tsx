"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Activity, TrendingUp, Zap, Server, Shield, CheckCircle2 } from 'lucide-react';
import { SnapCarousel } from "@/components/ui/SnapCarousel";


const categories = ["All", "Fintech", "Retail & AI", "Healthcare", "Logistics"];

const projects = [
  {
    id: 1,
    title: "SecurePay Dashboard",
    category: "Fintech",
    problem: "High latency in cross-border settlements.",
    solution: "A blockchain-powered real-time tracking engine reducing settlement time from days to seconds.",
    tech: ["React", "Node.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    isLive: true
  },
  {
    id: 2,
    title: "ShopFlow Mobile",
    category: "Retail & AI",
    problem: "Manual stock counting leading to 15% wastage.",
    solution: "ML-driven predictive analytics that automates supply chain restocking for 200+ outlets.",
    tech: ["Python", "PostgreSQL", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Insight Engine Pro",
    category: "SaaS",
    problem: "Limited market intelligence in rural regions.",
    solution: "Video-consultation platform with low-bandwidth optimization for rural connectivity.",
    tech: ["Flutter", "WebRTC", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    isLive: true
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category.includes(activeCategory)
  );

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
        
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10 text-center flex flex-col items-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6"
            >
                <Star size={12} className="fill-primary" /> Curated Work
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9]"
            >
              We Build <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-primary bg-size-[200%_auto] animate-gradient">
                Digital Futures
              </span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Explore how we've helped ambitious brands transform complex challenges into elegant, scalable software solutions.
            </motion.p>
        </div>
      </section>

      {/* 2. Filters */}
      <section className="mb-16 sticky top-24 z-30">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="p-2 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full w-full md:w-fit mx-auto flex flex-nowrap md:flex-wrap overflow-x-auto gap-1 shadow-xl scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'text-white' 
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filtered Grid (Existing Premium Design) */}
      <section className="mb-32">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
           <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={project.id} 
                className="min-w-[85vw] md:min-w-0 snap-center group relative aspect-4/3 rounded-3xl overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  unoptimized
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden">
                      <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</span>
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium">{t}</span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
           </SnapCarousel>
           {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-foreground/40">No projects found in this category.</div>
           )}
        </div>
      </section>

      {/* 4. Immersive Featured Case Study */}
      <section className="mb-32">
         <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="relative rounded-[3rem] overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
               <div className="absolute inset-0">
                  <Image 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
                     alt="Project Alpha Background"
                     fill
                     className="object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
               </div>

               <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-24 items-center">
                  <div className="flex flex-col gap-8">
                     <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Featured Case Study</span>
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                        Project Alpha: <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">Global Payments Solved</span>
                     </h2>
                     <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                        A revolutionary blockchain-powered tracking engine that reduced settlement times by 99%, handling over $10M in daily transaction volume with zero downtime.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "48h → 3s", label: "Settlement Time" },
                            { value: "$50M+", label: "Processed Monthly" },
                            { value: "100k", label: "Active Merchants" },
                            { value: "99.99%", label: "Uptime" },
                        ].map((stat, i) => (
                           <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                              <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                              <p className="text-xs text-white/50 uppercase tracking-wider font-bold">{stat.label}</p>
                           </div>
                        ))}
                     </div>

                     <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-fit bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all mt-4"
                     >
                        Read Full Case Study <ArrowRight size={18} />
                     </motion.button>
                  </div>
                  
                  {/* Right Side Visual/Abstract */}
                  <div className="hidden lg:flex justify-center items-center">
                     <div className="relative w-full aspect-square max-w-md">
                        {/* Abstract floating cards effect */}
                         <motion.div 
                           animate={{ y: [0, -20, 0] }}
                           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute top-0 right-0 w-3/4 aspect-video bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-20"
                         >
                            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="UI 1" fill className="object-cover" />
                         </motion.div>
                         <motion.div 
                           animate={{ y: [0, 30, 0] }}
                           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                           className="absolute bottom-10 left-0 w-3/4 aspect-video bg-gray-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 opacity-60"
                         >
                            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="UI 2" fill className="object-cover" />
                         </motion.div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Premium CTA */}
      <section className="pb-32 bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
           <div className="relative rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-md overflow-hidden px-6 py-24 text-center">
               <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10 opacity-50" />
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/50 to-transparent"></div>
               
               <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                     Ready to start your <br/>
                     <span className="text-primary">Success Story?</span>
                  </h2>
                  <p className="text-white/60 text-xl">
                     Whether you need a full-scale platform or a high-performance mobile app, our team is ready to deliver excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                     <Link href="/consultation">
                        <motion.button 
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl shadow-white/10"
                        >
                           Schedule Consultation
                        </motion.button>
                     </Link>
                     <Link href="/services">
                        <motion.button 
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                           Explore Services
                        </motion.button>
                     </Link>
                  </div>
               </div>
           </div>
        </div>
      </section>

    </div>
  );
}
