"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Palette, Settings, Cloud, Code2, Database, Shield, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

const techStackCategories = [
  { id: 'frontend', name: 'Frontend Excellence', icon: <Palette className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-500' },
  { id: 'backend', name: 'Robust Backend', icon: <Settings className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-500' },
  { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-500' }
];

const techItems = {
  frontend: [
    { name: "React / Next.js", level: "Expert", desc: "Our primary choice for dynamic, component-based UIs. We use it to build lightning-fast SPAs that scale effortlessly." },
    { name: "TypeScript", level: "Standard", desc: "Ensuring code reliability and catching errors before they ever hit production with static typing." },
    { name: "Tailwind CSS", level: "Design", desc: "Utility-first CSS for rapid UI development without sacrificing design flexibility." }
  ],
  backend: [
    { name: "Node.js", level: "Runtime", desc: "Enabling high-concurrency and real-time features with an event-driven architecture." },
    { name: "PostgreSQL", level: "Database", desc: "The world's most advanced open-source relational database for complex queries." },
    { name: "Python / FastAPI", level: "Logic", desc: "Efficient enterprise-level development for complex data processing and AI integrations." }
  ],
  cloud: [
    { name: "AWS", level: "Infras", desc: "Scalable cloud infrastructure with auto-scaling and self-healing capabilities." },
    { name: "Docker", level: "Container", desc: "Ensuring consistency across development, staging, and production environments." },
    { name: "Terraform", level: "IaC", desc: "Infrastructure as Code for automated and reproducible cloud deployments." }
  ]
};

export default function TechStackPage() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-20 bg-white dark:bg-background">
          <div className="max-w-[1200px] mx-auto">
            <div 
              className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-center justify-center p-8 text-center relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 25, 34, 0.85) 0%, rgba(16, 25, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAejIWy3ZeRFC9vGbT15l1iuLB04wSQyj7PGquosQ187zZj8hoFeKYODxXcLx2NLqP52joVkl6ibw5_i8X_oAxUu--JV2OyWJTNl_r6ZLdXvBOSb2pR5DKQq7IdwgJ7AVCDsN6sfdG_8oOav-Ye58yV_ocU_NPKFt8xfP6ucGe6EUNIj9LLt0zzv6NWsEv5dldyH8QBQZ8sljjBclvbdBFri_eKiOXNVDtlLigT4D_D-ZCZmFGtA_8QenAa3afY8gr_EeduZfJhKdD")`
              }}
            >
              <div className="flex flex-col gap-4 max-w-3xl relative z-10">
                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                  Our Technical DNA
                </h1>
                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                  We don't just use tools; we master them. Explore the enterprise-grade stack we use to build high-performance digital assets.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8 relative z-10">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                  Get Tech Consultation
                </button>
                <Link href="/portfolio" className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Hero Navigation */}
        <section className="sticky top-20 z-40 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-primary/10 py-6 px-4">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center md:justify-between">
            <h1 className="text-xl font-black tracking-tighter hidden md:block">TECH STACK ARCHITECTURE</h1>
            <div className="flex items-center gap-2 p-1 bg-primary/5 rounded-2xl overflow-x-auto no-scrollbar">
              {techStackCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-3 px-8 py-3 rounded-xl text-base font-bold transition-all whitespace-nowrap ${
                    activeTab === cat.id 
                      ? 'bg-primary text-white shadow-xl scale-105' 
                      : 'text-foreground/60 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 py-24">
          <div className="max-w-[1200px] mx-auto">
            {techStackCategories.map((section) => (
              <div 
                key={section.id} 
                className={`transition-all duration-700 ${activeTab === section.id ? 'opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-8'}`}
              >
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                  <div className="w-full lg:w-1/3 space-y-8">
                    <div className={`size-20 rounded-[24px] ${section.color} flex items-center justify-center text-4xl shadow-inner`}>
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{section.name}</h2>
                      <p className="text-foreground/60 text-xl leading-relaxed">
                        We leverage {section.name.toLowerCase()} standards to build resilient, ultra-fast, and future-proof digital products.
                      </p>
                    </div>
                    <div className="pt-8 border-t border-primary/10">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Principles</h4>
                       <ul className="space-y-3">
                          {["Performance First", "Security by Design", "Maintenance-Ready Code"].map(p => (
                            <li key={p} className="flex items-center gap-2 text-sm font-bold text-foreground/70">
                               <span className="size-1.5 rounded-full bg-primary"></span> {p}
                            </li>
                          ))}
                       </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(techItems[section.id as keyof typeof techItems] || []).map((tech, i) => (
                      <div key={i} className="group p-8 bg-card border border-primary/10 rounded-[32px] hover:border-primary/40 transition-all hover:shadow-2xl">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{tech.name}</h3>
                          <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {tech.level}
                          </span>
                        </div>
                        <p className="text-base text-foreground/50 leading-relaxed mb-8">
                          {tech.desc}
                        </p>
                        <div className="flex items-center gap-3">
                           <div className="h-1.5 flex-1 bg-primary/10 rounded-full overflow-hidden">
                              <div className="h-full bg-primary w-[85%] group-hover:w-full transition-all duration-1000 ease-out"></div>
                           </div>
                           <span className="text-[10px] font-black opacity-30">PRO</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Master CTA */}
        <section className="px-4 py-24 mb-20">
          <div className="max-w-[1000px] mx-auto bg-card border border-primary/20 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
             <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-transparent via-primary to-transparent opacity-30"></div>
             <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Need a custom tech evaluation?</h3>
             <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
               Every business has unique needs. Our senior architects will help you map out a technical roadmap tailored to your specific goals.
             </p>
             <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                Schedule Architecture Review
             </button>
          </div>
        </section>
      </main>
    </div>
  );
}
