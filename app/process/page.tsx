/**
 * PROCESS PAGE
 * 
 * Logic Overview:
 * - Data Mapping: Iterates over static `phases` and `outcomes` arrays to render the process timeline and deliverables.
 * - Visualization: Uses a vertical stacking layout with a connector line (CSS pseudo-elements) to visualize the workflow progression.
 */

import React from 'react';
import Link from 'next/link';
import { Search, PenTool, Code, CheckSquare, Rocket, FileText, Layout, Keyboard, Flag } from 'lucide-react';

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

import { Cloud } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="px-4 py-20 bg-white dark:bg-background">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Our Strategic <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Process</span></h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              We combine agile methodology with enterprise-grade standards to deliver software that scales.
            </p>
          </div>
        </section>

        {/* Project Lifecycle Timeline */}
        <section className="px-4 py-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {phases.map((phase) => (
                <div key={phase.number} className="flex flex-col items-center group">
                  <div className="size-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-background group-hover:scale-110 transition-transform">
                    {phase.icon}
                  </div>
                  <div className="text-center px-2">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1 block">Phase {phase.number}</span>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    <div className="space-y-2 text-left bg-card p-4 rounded-xl border border-primary/5 shadow-sm group-hover:border-primary/20 transition-all">
                      {phase.activities.map((act) => (
                        <div key={act} className="flex items-center gap-2 text-[11px] font-bold text-foreground/70">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0"></span>
                          {act}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop Connector Line */}
            <div className="hidden md:block w-full h-[2px] bg-primary/10 mt-[-280px] z-[-1] relative"></div>
          </div>
        </section>

        {/* Tangible Outcomes Section */}
        <section className="px-4 py-20 bg-primary/5 mt-20">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Tangible <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Outcomes</span></h2>
              <p className="text-foreground/60">What you can expect at every checkpoint of the engagement.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {outcomes.map((outcome, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-xl border border-primary/10 bg-card p-6 hover:shadow-md transition-shadow group">
                  <span className="text-primary group-hover:scale-110 transition-transform inline-block">
                    {outcome.icon}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold leading-tight">{outcome.title}</h3>
                    <p className="text-xs opacity-60 leading-snug">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 py-20">
          <div className="max-w-[1200px] mx-auto bg-primary rounded-[40px] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Scale Your <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/70">Business Today</span></h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
              Join dozens of successful retail and enterprise companies that trust Vexel Systems to drive their digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Book a Strategy Call
              </button>
              <Link href="/portfolio" className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
