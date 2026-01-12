"use client";

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Palette, Settings, Cloud, Code2, Database, Shield } from 'lucide-react';

const techStackCategories = [
  { id: 'frontend', name: 'Frontend & UI', icon: <Palette className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-500' },
  { id: 'backend', name: 'Backend & API', icon: <Settings className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-500' },
  { id: 'database', name: 'Database & Storage', icon: <Database className="w-6 h-6" />, color: 'bg-orange-500/10 text-orange-500' },
  { id: 'devops', name: 'Cloud & DevOps', icon: <Cloud className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-500' },
  { id: 'qa_design', name: 'QA & Design', icon: <Shield className="w-6 h-6" />, color: 'bg-red-500/10 text-red-500' }
];

const techItems = {
  frontend: [
    { 
      name: "Core Languages", 
      level: "Expert", 
      items: [
        { name: "HTML5", desc: "Page structure" },
        { name: "CSS3", desc: "Styling & layouts" },
        { name: "JavaScript (ES6+)", desc: "Logic & interactivity" },
        { name: "TypeScript", desc: "Type-safe development" }
      ]
    },
    { 
      name: "Frameworks", 
      level: "Primary", 
      items: [
        { name: "React.js", desc: "Component-based UI" },
        { name: "Next.js", desc: "SSR & SEO Optimized" }
      ]
    },
    { 
      name: "Styling Tech", 
      level: "Creative", 
      items: [
        { name: "Tailwind CSS", desc: "Utility-first CSS" },
        { name: "CSS Modules", desc: "Scoped styling" },
        { name: "Material UI", desc: "System design components" }
      ]
    },
    { 
      name: "UI/UX Tools", 
      level: "Design", 
      items: [
        { name: "Figma", desc: "Interface design" },
        { name: "Canva", desc: "Visual storytelling" }
      ]
    }
  ],
  backend: [
    { 
      name: "Server Languages", 
      level: "Polyglot", 
      items: [
        { name: "Node.js", desc: "Scalable JS runtime" },
        { name: "Python", desc: "Data & logic" },
        { name: "Java", desc: "Enterprise scale" },
        { name: "PHP", desc: "Web foundation" }
      ]
    },
    { 
      name: "Frameworks", 
      level: "Robust", 
      items: [
        { name: "Express.js", desc: "Fast & unopinionated" },
        { name: "NestJS", desc: "Modular architecture" },
        { name: "Flask", desc: "Lightweight & flexible" },
        { name: "FastAPI", desc: "High performance Async" },
        { name: "Laravel", desc: "Elegant PHP framework" },
        { name: "Spring Boot", desc: "Microservices ready" }
      ]
    },
    { 
      name: "API Types", 
      level: "Scale", 
      items: [
        { name: "REST API", desc: "Distributed systems" },
        { name: "GraphQL", desc: "Flexible data fetching" },
        { name: "WebSockets", desc: "Real-time sync" }
      ]
    }
  ],
  database: [
    { 
      name: "Relational (SQL)", 
      level: "Managed", 
      items: [
        { name: "MySQL", desc: "Standard app DB" },
        { name: "PostgreSQL", desc: "Advanced data types" },
        { name: "Oracle", desc: "Enterprise banking" }
      ]
    },
    { 
      name: "NoSQL", 
      level: "Dynamic", 
      items: [
        { name: "MongoDB", desc: "Document-based" },
        { name: "Firebase", desc: "Real-time DB" },
        { name: "DynamoDB", desc: "Serverless scaling" }
      ]
    },
    { 
      name: "Cache & Search", 
      level: "Performance", 
      items: [
        { name: "Redis", desc: "In-memory speed" },
        { name: "Elasticsearch", desc: "Deep log search" }
      ]
    }
  ],
  devops: [
    { 
      name: "Cloud & Hosting", 
      level: "Scalable", 
      items: [
        { name: "AWS", desc: "Global infra" },
        { name: "Vercel", desc: "Edge deployment" },
        { name: "Google Cloud", desc: "AI & Data platform" }
      ]
    },
    { 
      name: "Containers", 
      level: "Portable", 
      items: [
        { name: "Docker", desc: "System isolation" },
        { name: "Kubernetes", desc: "Fleet management" }
      ]
    },
    { 
      name: "CI / CD", 
      level: "Automated", 
      items: [
        { name: "GitHub Actions", desc: "Workflow automation" },
        { name: "GitLab CI", desc: "Pipeline security" }
      ]
    }
  ],
  qa_design: [
    { 
      name: "Testing", 
      level: "Rigorous", 
      items: [
        { name: "Playwright", desc: "E2E testing" },
        { name: "Jest / PyTest", desc: "Unit reliability" }
      ]
    },
    { 
      name: "Systems", 
      level: "Arch", 
      items: [
        { name: "Microservices", desc: "Decoupled logic" },
        { name: "Serverless", desc: "Cost-efficient ops" }
      ]
    },
    { 
      name: "Docs & Collab", 
      level: "Agile", 
      items: [
        { name: "Swagger", desc: "API documentation" },
        { name: "Notion", desc: "Knowledge sync" }
      ]
    }
  ]
};

export const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="py-24 bg-transparent overflow-hidden" id="tech-stack">
      <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Our Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">DNA</span></h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            We don't just use tools; we master them. Explore the enterprise-grade stack we use to build high-performance digital assets.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Tabbed Navigation */}
          <div className="flex items-center justify-center p-2 bg-primary/5 rounded-2xl self-center overflow-x-auto no-scrollbar max-w-full">
            <div className="flex items-center gap-1 min-w-max px-2">
              {techStackCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-3 px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-bold transition-all whitespace-nowrap ${
                    activeTab === cat.id 
                      ? 'bg-primary text-white shadow-xl scale-105 z-10' 
                      : 'text-foreground/60 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="hidden sm:inline">{cat.icon}</span>
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {techStackCategories.filter(s => s.id === activeTab).map((section) => (
                <motion.div 
                  key={section.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/3 space-y-8">
                      <div className={`size-20 rounded-[24px] ${section.color} flex items-center justify-center text-4xl shadow-inner`}>
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{section.name}</h3>
                        <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
                          We leverage industry-leading standards to build resilient, ultra-fast, and future-proof digital products.
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
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="group p-8 bg-card border border-primary/10 rounded-[32px] hover:border-primary/40 transition-all hover:shadow-2xl shadow-sm overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-6">
                            <h4 className="text-2xl font-black group-hover:text-primary transition-colors">{tech.name}</h4>
                            <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-primary/10 text-primary rounded-full shrink-0 ml-4">
                              {tech.level}
                            </span>
                          </div>
                          <div className="flex flex-col gap-4 mb-8">
                            {tech.items.map((item, subIdx) => (
                              <div key={subIdx} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <span className="size-1.5 rounded-full bg-primary shrink-0"></span>
                                  <span className="text-sm font-bold text-foreground/80">{item.name}</span>
                                </div>
                                <p className="text-xs text-foreground/40 font-medium pl-3.5 leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="h-1.5 flex-1 bg-primary/10 rounded-full overflow-hidden">
                                <motion.div 
                                   initial={{ width: 0 }}
                                   animate={{ width: "85%" }}
                                   transition={{ duration: 1, delay: 0.5 }}
                                   className="h-full bg-primary"
                                ></motion.div>
                             </div>
                             <span className="text-[10px] font-black opacity-30">PRO</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
