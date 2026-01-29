/**
 * ABOUT PAGE
 * 
 * Functional Overview:
 * - Metadata: Uses generatePageMetadata for SEO injection.
 * - Layout: Features a timeline component (Journey) and a horizontally scrollable (snap-x) values section for mobile/grid for desktop.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users, History, Trophy, Globe, Code } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { generatePageMetadata } from "@/lib/seo";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

export const metadata = generatePageMetadata({
  title: "About Us",
  description: "Top Tech Company in Vavuniya - Vexel Systems",
  keywords: [
    "About Vexel Systems",
    "Software Company Sri Lanka",
    "Technology Solutions Provider",
    "Vavuniya Tech Company",
    "Our Mission",
    "Our Vision",
    "Company Story",
    "Digital Transformation",
  ],
  path: "/about",
});

export default function About() {
  return (
    <main className="min-h-[60vh] md:min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center">
        <HeroBackground />
        {/* Background Gradients & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
            
            {/* Hero Badge Replicated */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">Our Story</span>
            </div>

            <MotionWrapper type="scale" duration={1.2}>
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
                  We Are Vexel Systems
                </h2>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
                  <span className="text-foreground">Real People Building</span>
                  <TypewriterText phrases={["Real Solutions.", "Better Future.", "Modern Software.", "Digital Growth."]} />
                </h1>

                <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                  We are a technology team from Sri Lanka. We don't just write code; we build software that works, helps you grow, and doesn't complicate your life.
                </p>
              </div>
            </MotionWrapper>

            {/* Hero Actions Replicated */}
            <MotionWrapper delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
                <button 
                  className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
                >
                  View Our Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <Link href="/contact">
                  <button 
                    className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </MotionWrapper>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-24">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <MotionWrapper delay={0.2} type="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Purpose Driven <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Innovation</span></h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
              </div>
            </MotionWrapper>

            <MotionWrapper type="stagger" delay={0.3} duration={1.2}>
              <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0">
                <div className="min-w-[85vw] md:min-w-0 snap-center p-8 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm border border-gray-200 dark:border-white/10 hover:border-primary transition-colors group">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                    <p className="text-foreground/60 leading-relaxed">
                    To empower businesses through digital excellence and innovative software solutions that drive sustainable growth, efficiency, and competitive advantage in a fast-evolving global market.
                    </p>
                </div>
                <div className="min-w-[85vw] md:min-w-0 snap-center p-8 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm border border-gray-200 dark:border-white/10 hover:border-primary transition-colors group">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Lightbulb size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                    <p className="text-foreground/60 leading-relaxed">
                    To become a global leader in sustainable tech solutions, recognized for engineering excellence, creative problem solving, and unwavering reliability across borders.
                    </p>
                </div>
              </div>
            </MotionWrapper>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="mb-24 py-16 bg-transparent">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="max-w-4xl mx-auto">
            <MotionWrapper type="slideUp" delay={0.1}>
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">Our <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Journey</span></h2>
                  <p className="text-foreground/60 mt-2">From Sri Lanka to the global stage</p>
              </div>
            </MotionWrapper>
            <MotionWrapper type="stagger" delay={0.2} duration={1.2}>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
                
                {/* Milestone 1 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 group pl-12 md:pl-0">
                <div className="w-full md:w-[45%] text-left md:text-right md:pr-8 order-2 md:order-1">
                    <h4 className="text-primary font-black text-xl mb-1">2018</h4>
                    <p className="font-bold text-lg text-foreground">The Spark</p>
                    <p className="text-sm text-foreground/50">It started as a group of passionate freelancers, working late nights to deliver exceptional web projects.</p>
                </div>
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50 top-0 md:top-auto"></div>
                <div className="w-full md:w-[45%] order-1 md:order-2"></div>
                </div>

                {/* Milestone 2 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 group pl-12 md:pl-0">
                <div className="w-full md:w-[45%]"></div>
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50 top-0 md:top-auto"></div>
                <div className="w-full md:w-[45%] text-left md:pl-8">
                    <h4 className="text-primary font-black text-xl mb-1">2020</h4>
                    <p className="font-bold text-lg text-foreground">Gaining Expertise</p>
                    <p className="text-sm text-foreground/50">Our team underwent rigorous training within established tech companies, refining our skills in enterprise development.</p>
                </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 group pl-12 md:pl-0">
                <div className="w-full md:w-[45%] text-left md:text-right md:pr-8 order-2 md:order-1">
                    <h4 className="text-primary font-black text-xl mb-1">2022</h4>
                    <p className="font-bold text-lg text-foreground">Vexel Systems Born</p>
                    <p className="text-sm text-foreground/50">Officially registered as a business. We established our physical office and launched our core web & mobile development services.</p>
                </div>
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50 top-0 md:top-auto"></div>
                <div className="w-full md:w-[45%] order-1 md:order-2"></div>
                </div>

                {/* Milestone 4 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-12 md:pl-0">
                <div className="w-full md:w-[45%]"></div>
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50 top-0 md:top-auto"></div>
                <div className="w-full md:w-[45%] text-left md:pl-8">
                    <h4 className="text-primary font-black text-xl mb-1">Present</h4>
                    <p className="font-bold text-lg text-foreground">AI Integration Era</p>
                    <p className="text-sm text-foreground/50">Now pioneering AI-driven solutions, we integrate intelligent automation into modern web and mobile applications.</p>
                </div>
                </div>
              </div>
            </MotionWrapper>
            </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-24">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <MotionWrapper delay={0.2} type="slideUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Core <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Values</span></h2>
                <p className="text-foreground/60 mt-2">The principles that guide every line of code we write.</p>
              </div>
            </MotionWrapper>

            <MotionWrapper type="stagger" duration={1.2}>
              <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0">
                <div className="min-w-[75vw] md:min-w-0 snap-center flex flex-col items-center text-center p-8 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 dark:border-white/10 transition-transform hover:-translate-y-2">
                    <div className="mb-6 p-4 bg-primary/5 text-primary rounded-full">
                    <Lightbulb size={40} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">Innovation</h4>
                    <p className="text-foreground/50 text-sm leading-relaxed">Constantly pushing the boundaries of what's possible with software and emerging technologies.</p>
                </div>
                <div className="min-w-[75vw] md:min-w-0 snap-center flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
                    <div className="mb-6 p-4 bg-primary/5 text-primary rounded-full">
                    <Trophy size={40} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">Integrity</h4>
                    <p className="text-foreground/50 text-sm leading-relaxed">Honest communication, transparent processes, and ethical technology practices are non-negotiable.</p>
                </div>
                <div className="min-w-[75vw] md:min-w-0 snap-center flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
                    <div className="mb-6 p-4 bg-primary/5 text-primary rounded-full">
                    <Users size={40} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">Client-Centricity</h4>
                    <p className="text-foreground/50 text-sm leading-relaxed">Your success is our metric. We build solutions tailored to your unique business challenges.</p>
                </div>
              </div>
            </MotionWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-12">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <MotionWrapper type="scale" delay={0.4} duration={1.2}>
            <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-12 overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm">
              {/* Abstract Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
                <h2 className="text-3xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                  Ready to build the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">future</span> of your business?
                </h2>
                <p className="text-foreground/60 text-lg">
                  Join dozens of global enterprises that have trusted us with their digital evolution.
                </p>
                <Link 
                  href="/consultation" 
                  className="bg-primary text-white px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
