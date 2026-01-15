/**
 * PORTFOLIO CLIENT COMPONENT
 * 
 * Functional Overview:
 * - Filtering: Segregates projects based on active categories via client-side state.
 * - Interaction: Includes a sticky filter bar and interactive snap-carousel for project cards.
 * - Featured Section: Renders a specialized, immersive view for the top-priority case study.
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Activity, TrendingUp, Zap, Server, Shield, CheckCircle2 } from 'lucide-react';
import { SnapCarousel } from "@/components/ui/SnapCarousel";

const categories = ["All", "Fintech", "Retail & AI", "Healthcare", "Logistics"];

const projects = [
  {
    id: 1,
    title: "Vexel POS",
    category: "Retail & AI",
    problem: "Inefficient manual sales tracking.",
    solution: "Hybrid Point of Sale system with offline sync and AI inventory predictions.",
    tech: ["Next.js", "Electron", "PostgreSQL"],
    image: "/products/photo-1556742502-ec7c0e9f34b1.jpg",
    isLive: true,
    href: "/products/vexel-pos"
  },
  {
    id: 2,
    title: "Vexel Track",
    category: "Logistics",
    problem: "Lack of real-time fleet visibility.",
    solution: "GPS tracking engine with driver behavior analytics and fuel monitoring.",
    tech: ["IoT", "Real-time DB", "Google Maps"],
    image: "/products/photo-1551288049-bebda4e38f71.jpg",
    isLive: true,
    href: "/products/vexel-track"
  },
  {
    id: 3,
    title: "Vexel Hire",
    category: "SaaS",
    problem: "Time-consuming manual recruitment.",
    solution: "AI-powered Applicant Tracking System (ATS) with automated scoring.",
    tech: ["AI/ML", "Next.js", "Cloud"],
    image: "/products/photo-1586281380349-632531db7ed4.jpg",
    isLive: false,
    href: "/products/vexel-hire"
  },
  {
    id: 4,
    title: "SecurePay Dashboard",
    category: "Fintech",
    problem: "High latency in cross-border settlements.",
    solution: "A blockchain-powered real-time tracking engine reducing settlement time.",
    tech: ["React", "Node.js", "AWS"],
    image: "/products/photo-1551288049-bebda4e38f71.jpg", // Reusing image as placeholder if needed, or keep original
    isLive: true,
    href: "#"
  },
  {
    id: 5,
    title: "ShopFlow Mobile",
    category: "Retail & AI",
    problem: "Manual stock counting wastage.",
    solution: "ML-driven predictive analytics that automates supply chain restocking.",
    tech: ["Python", "PostgreSQL", "TensorFlow"],
    image: "/pages/photo-1542744173-8e7e53415bb0.jpg",
    href: "#"
  },
];

export default function PortfolioClient() {
  // State for active filter category
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects dynamically based on selection
  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category.includes(activeCategory)
  );

  return (
    <>
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
                  <div 
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
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
            {filteredProjects.map((project) => (
              <Link
                href={project.href}
                key={project.id} 
                className="block min-w-[85vw] md:min-w-0 snap-center group relative aspect-4/3 rounded-3xl overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
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
              </Link>
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
                     src="/products/photo-1551288049-bebda4e38f71.jpg"
                     alt="Project Alpha Background"
                     fill
                     sizes="100vw"
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

                     <button 
                        className="w-fit bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all mt-4"
                     >
                        Read Full Case Study <ArrowRight size={18} />
                     </button>
                  </div>
                  
                  {/* Right Side Visual/Abstract */}
                  <div className="hidden lg:flex justify-center items-center">
                     <div className="relative w-full aspect-square max-w-md">
                        {/* Abstract floating cards effect */}
                         <div className="absolute top-0 right-0 w-3/4 aspect-video bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-20">
                            <Image src="/products/photo-1551288049-bebda4e38f71.jpg" alt="UI 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                         </div>
                         <div className="absolute bottom-10 left-0 w-3/4 aspect-video bg-gray-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 opacity-60">
                            <Image src="/home/photo-1460925895917-afdab827c52f.jpg" alt="UI 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                         </div>
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
                        <button 
                           className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl shadow-white/10"
                        >
                           Schedule Consultation
                        </button>
                     </Link>
                     <Link href="/services">
                        <button 
                           className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                           Explore Services
                        </button>
                     </Link>
                  </div>
               </div>
           </div>
        </div>
      </section>
    </>
  );
}
