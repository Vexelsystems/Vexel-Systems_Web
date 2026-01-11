"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Activity, TrendingUp, Zap, Server, Shield } from 'lucide-react';

const categories = ["All", "Fintech", "Retail & AI", "Healthcare", "Logistics"];

const projects = [
  {
    id: 1,
    title: "Project Alpha: Global Payments",
    category: "Fintech",
    problem: "High latency in cross-border settlements.",
    solution: "A blockchain-powered real-time tracking engine reducing settlement time from days to seconds.",
    tech: ["React", "Node.js", "AWS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_YRwEcsX9HN0wtK2iIzLeCVlkIWuSYeKQQGmAfp9jtCFg2IMk6qis_hNrii3PB4c14_LpxR81YVOv--zRKcc9LvOHiPAIDVCjkqU2he6XA5JDODU4JoK7JAoQuoCxV6BTxUMBGNvqUEMeNgR9bU23Q6EGkO0wq2d5Clzo6ckQhW7_lnjwCJJRKD5ne8QihrqTVHZUX03nqtrFyagj7TFGr7Bfk0cDJPZcBO4Kp8MxPgKXei5ihUAsrlLBrDyegEPZmmnp9TCRzoh",
    isLive: true
  },
  {
    id: 2,
    title: "Project Beta: Smart Inventory",
    category: "Retail & AI",
    problem: "Manual stock counting leading to 15% wastage.",
    solution: "ML-driven predictive analytics that automates supply chain restocking for 200+ outlets.",
    tech: ["Python", "PostgreSQL", "TensorFlow"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRzflq0_Xt5mayIu7lKy5gPUdeaNRNJegerPcreiZmeLCsOSRR8M3RwQF4KdYM_XrPp9YK1AZIm9vR8G9l8g4Fqs9Cj9RKp8Iba_wT1lRpPk49a6LnSkMHJNWmlY8ryU1RQOGyf8rIcKO_GNf_dTieVyHxJV0J9sixrBdaD-MgEuEnVNBaVCe9T8QysjFJuXuHJLd05m4IgJDTgZWvDAl-cqkS-v33AbYz8LDoElLtFjZBDLv4c6ehjXawfdF0QASI7sRMK6jNIvLM"
  },
  {
    id: 3,
    title: "Project Gamma: Telemed Connect",
    category: "Healthcare",
    problem: "Limited medical access in rural regions.",
    solution: "Video-consultation platform with low-bandwidth optimization for rural connectivity.",
    tech: ["Flutter", "WebRTC", "Docker"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1vuqG7HuTWeTcYJFKR-SzppxQXQFOx6PUj1Zl7Xi3vaPGZIj494W-hza1BpYfia2qqd3VzTiuTKfQRStzcXpecBrFeBvpZUjqJevKZNF-WijHiq_ZiO00qj_FpSZDiZRrhm6dUS-hWuUVP3J6xvmwhWL7ObhYCVUs98hiwx-IJAA3Q71wpyMBIIa0Brrf6-qJ0p8P-XRNY4qi9pwB3986w7dmJGroa3bJIEO0TBZzRnF4VJ-8yykyC2oPxOm7QLNO6cezwUBjCnSF",
    isLive: true
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category.includes(activeCategory)
  );

  return (
    <div className="flex flex-col py-10">
      {/* Page Heading */}
      <div className="mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">Our Portfolio</h2>
        <p className="text-foreground/60 text-lg max-w-2xl">
          We design, build, and scale world-class digital products. From Sri Lanka to global markets, we turn complex problems into seamless software solutions.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 px-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-foreground/5 hover:bg-primary/10 hover:text-primary text-foreground/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-card rounded-xl overflow-hidden border border-primary/10 hover:shadow-xl transition-all">
            <div className="relative overflow-hidden aspect-16/10">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                {project.isLive && (
                  <span className="bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase shrink-0 flex items-center gap-1">
                    <Activity size={10} /> LIVE
                  </span>
                )}
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                <span className="font-bold text-foreground">Problem:</span> {project.problem}<br/>
                <span className="font-bold text-foreground">Solution:</span> {project.solution}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded border border-primary/10 text-foreground/50">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Case Study Detailed Section */}
      <div className="bg-card rounded-2xl border border-primary/10 overflow-hidden mb-20 mx-4">
        <div className="grid lg:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 w-fit uppercase tracking-widest">
              <Star size={14} /> Featured Case Study
            </div>
            <h3 className="text-3xl font-extrabold mb-6">Detailed View: Project Alpha Transformation</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "GraphQL", "Node.js", "Redis", "Kubernetes"].map(t => (
                    <span key={t} className="px-3 py-1 bg-primary/5 rounded-lg text-sm font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">Measurable Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "70%", label: "Efficiency Increase", icon: <TrendingUp size={16} /> },
                    { val: "50k+", label: "Active Users", icon: <Zap size={16} /> },
                    { val: "<2s", label: "Tx Latency", icon: <Server size={16} /> },
                    { val: "$10M+", label: "Processed Daily", icon: <Shield size={16} /> }
                  ].map(res => (
                    <div key={res.label} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="text-2xl font-black text-primary flex items-center gap-2">
                          {res.val}
                      </p>
                      <p className="text-xs opacity-50 uppercase font-bold flex items-center gap-1 mt-1">
                          {res.icon} {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform w-fit flex items-center gap-2">
              Read Full Case Study <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative bg-primary/5 min-h-[400px]">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnloahKUvFQRZsdEeDhYsLIn4pawIGiJZtXXZSzqhfEOvL1TPv41YUhq_jgVLvYcFUzW0f2rhu34aoxtvKgXLtAD_NciQ7fumhkyDr9aPIzG0oL0BFpWgeYozm6SmrgJ7L1CSGlDO-lRpeq64N6zrk7Ccr_PNfN4d3k6o-4TRE-IxuOJVnE9LnMyvM1jm3N5RMUWI-8DF7mTWmU8amMBgAct8xBK_li_vknTt0Mcf-bfoyw57fM2N1spo9Q3qCBvc4ijosuY20GiXA" 
              alt="Dashboard" 
              fill 
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-linear-to-r from-card to-transparent lg:block hidden"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-foreground text-background dark:bg-primary/10 dark:text-foreground rounded-3xl p-12 text-center relative overflow-hidden mx-4">
        <div className="relative z-10">
          <h3 className="text-4xl font-black mb-4">Ready to build your next big idea?</h3>
          <p className="opacity-70 mb-8 max-w-xl mx-auto">
            Whether it's a fintech startup or a large-scale enterprise system, our experts are ready to take you from concept to launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Start a Project <ArrowRight size={18} />
            </button>
            <button className="bg-background/10 text-background border border-background/20 dark:bg-primary/10 dark:text-foreground dark:border-primary/20 font-bold py-4 px-10 rounded-xl transition-all">
              View Our Services
            </button>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
