
import { generatePageMetadata } from "@/lib/seo";
import ServicesClient from "@/components/ServicesClient";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

/**
 * SERVICES ROOT PAGE
 * 
 * Functional Overview:
 * - Rendering: Server-renders the Hero section with a high-quality background image for visual impact.
 * - Integration: Uses `ServicesClient` for the interactive filtering grid.
 * - Pattern: Hybrid approach (Server UI + Client Logic) to balance SEO and interactivity.
 */

export const metadata = generatePageMetadata({
  title: "Our Services",
  description: "Web Design, App Dev & POS Solutions",
  keywords: [
    "Vexel Systems services",
    "software services Sri Lanka",
    "AI & ML development",
    "mobile app development Sri Lanka",
    "web development services",
    "IT solutions Sri Lanka",
    "IoT solutions",
    "digital marketing Sri Lanka",
    "business automation software",
    "custom software solutions",
    "startup technology services",
    "enterprise software solutions",
    "AI-powered platforms",
    "Vavuniya software company",
    "technology solutions global",
    "POS & ERP services"
  ],
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center">
        <HeroBackground />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
            
            {/* Hero Badge Replicated */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">Our Services</span>
            </div>

            <MotionWrapper type="slideUp" duration={1.2}>
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
                  What We Do
                </h2>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
                  <span className="text-foreground">Everything You Need</span>
                  <TypewriterText phrases={["to Grow.", "to Scale.", "to Innovate.", "to Succeed."]} />
                </h1>

                <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                  From building your first website to creating complex AI systems, we have the skills to help you succeed.
                </p>
              </div>
            </MotionWrapper>

            {/* Hero Actions Replicated */}
            <MotionWrapper delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
                <Link href="/contact">
                  <button 
                    className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
                  >
                    Start a Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link href="/portfolio">
                  <button 
                    className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm"
                  >
                    View Case Studies
                  </button>
                </Link>
              </div>
            </MotionWrapper>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] py-12">
        <MotionWrapper delay={0.2}>
          <ServicesClient />
        </MotionWrapper>
      </section>
    </main>
  );
}
