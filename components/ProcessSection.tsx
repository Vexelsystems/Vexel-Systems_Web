"use client";

import React from 'react';
import { Search, PenTool, Code, CheckSquare, Rocket, FileText, Layout, Keyboard, Flag, Cloud } from 'lucide-react';

const phases = [
  {
    number: "01",
    title: "Discovery",
    description: "Requirement gathering and stakeholder alignment.",
    icon: <Search className="w-10 h-10" />,
    activities: ["Stakeholder Interviews", "Market Research", "Technical Feasibility"]
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture design and UI/UX wireframing.",
    icon: <PenTool className="w-10 h-10" />,
    activities: ["System Architecture", "Interactive Prototypes", "Tech Stack Selection"]
  },
  {
    number: "03",
    title: "Development",
    description: "Agile sprints and high-quality coding.",
    icon: <Code className="w-10 h-10" />,
    activities: ["Bi-weekly Sprints", "Code Reviews", "Weekly Demos"]
  },
  {
    number: "04",
    title: "Testing",
    description: "End-to-end testing and quality assurance.",
    icon: <CheckSquare className="w-10 h-10" />,
    activities: ["Automated Testing", "Performance Tuning", "User Acceptance (UAT)"]
  },
  {
    number: "05",
    title: "Deployment",
    description: "Live system launch and maintenance.",
    icon: <Rocket className="w-10 h-10" />,
    activities: ["CI/CD Implementation", "Production Monitoring", "24/7 Support Plan"]
  }
];

const outcomes = [
  { title: "Discovery", description: "Project roadmap, BRD documentation", icon: <FileText className="w-8 h-8" /> },
  { title: "Planning", description: "Figma prototypes, architecture diagrams", icon: <Layout className="w-8 h-8" /> },
  { title: "Development", description: "Clean source code, beta build", icon: <Keyboard className="w-8 h-8" /> },
  { title: "QA", description: "Bug-free build, UAT reports", icon: <Flag className="w-8 h-8" /> },
  { title: "Deployment", description: "Live platform, monitoring tools", icon: <Cloud className="w-8 h-8" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
} as const;

export const ProcessSection = () => {
  return (
    <div className="flex flex-col bg-transparent">
      {/* Project Lifecycle Timeline */}
      <section className="py-24 overflow-hidden">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Our Strategic <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Process</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We combine agile methodology with enterprise-grade standards to deliver software that scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {phases.map((phase) => (
              <div 
                key={phase.number} 
                className="flex flex-col items-center group cursor-default"
              >
                <div 
                  className="size-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md border-4 border-background group-hover:bg-purple-600 transition-colors duration-300"
                >
                  {phase.icon}
                </div>
                <div className="text-center px-2">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1 block">Phase {phase.number}</span>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 min-h-10">
                    {phase.description}
                  </p>
                  <div className="space-y-2 text-left bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-4 rounded-xl border border-primary/5 shadow-sm group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                    {phase.activities.map((act, i) => (
                      <div 
                        key={act} 
                        className="flex items-center gap-2 text-[11px] font-bold text-foreground/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        {act}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tangible Outcomes Section */}
      <section className="py-20 bg-primary/5 backdrop-blur-md rounded-[40px] w-[90%] md:w-[80%] mx-auto mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none opacity-40" />
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              Tangible <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Outcomes</span>
            </h2>
            <p className="text-foreground/80">What you can expect at every checkpoint of the engagement.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {outcomes.map((outcome, i) => (
              <div 
                key={i} 
                className="flex flex-col gap-3 rounded-xl border border-primary/10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-6 transition-all group shadow-sm hover:border-primary/40"
              >
                <div className="text-primary group-hover:text-purple-600 transition-colors">
                  {outcome.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold leading-tight">{outcome.title}</h3>
                  <p className="text-xs text-foreground/70 leading-snug">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
