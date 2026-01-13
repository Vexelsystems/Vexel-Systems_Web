/**
 * HERO SECTION - Homepage landing component
 * Server-rendered for optimal LCP performance
 */

import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroSocials } from "@/components/hero/HeroSocials";

/**
 * HERO SECTION PARENT
 * 
 * Functional Overview:
 * - Composition: Aggregates atomic sub-components (`badge`, `actions`, `socials`) into a cohesive layout.
 * - Performance: Server Component (RSC) to minimize main-thread work for the LCP element.
 * - Styling: Centralized flexbox layout with overflow handling.
 */

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 pb-12 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
        
        {/* Client component with animation */}
        <HeroBadge />

        <div className="flex flex-col items-center overflow-hidden text-center max-w-4xl mx-auto">
          <h2 className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
            Welcome to Vexel Systems
          </h2>
          
          {/* bg-clip-text creates gradient text effect */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
            <span className="text-foreground">Building Smart, Scalable</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
              Future-Ready Digital Solutions.
            </span>
          </h1>

          <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            At Vexel Systems, we design and develop modern software, AI-powered platforms, and intelligent systems that help businesses grow, automate, and innovate.
          </p>
        </div>

        {/* Client components with hover effects */}
        <HeroActions />
        <HeroSocials />
      </div>
    </section>
  );
}
