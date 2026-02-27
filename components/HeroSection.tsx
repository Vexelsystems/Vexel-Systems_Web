/**
 * HERO SECTION - Homepage landing component
 * Server-rendered for optimal LCP performance
 */

import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroSocials } from "@/components/hero/HeroSocials";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import Link from "next/link";

/**
 * HERO SECTION PARENT
 *
 * Functional Overview:
 * - Composition: Aggregates atomic sub-components (`badge`, `actions`, `socials`) into a cohesive layout.
 * - Performance: Server Component (RSC) to minimize main-thread work for the LCP element.
 * - Styling: Centralized flexbox layout.
 */

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-24 pb-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <HeroBackground />
      <div className="w-[95%] md:w-[92%] mx-auto max-w-7xl relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        {/* Client component with animation */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <HeroBadge />
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <h2 className="text-primary text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-[0.2em] sm:tracking-widest mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Software Solutions & AI Experts in Vavuniya
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] sm:leading-tight tracking-tight flex flex-col items-center gap-1 sm:gap-2 mb-6 text-balance">
            <span className="text-foreground">
              We Build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600">
                App
              </span>{" "}
              That
            </span>
            <TypewriterText />
          </h1>

          <p className="text-foreground/80 text-base sm:text-lg md:text-xl font-medium max-w-3xl leading-relaxed text-balance">
            We build the websites, apps, and POS software you need to automate
            your business. Your local Vavuniya tech partners, focused on your
            bottom line.
          </p>
        </div>

        {/* Client components with hover effects */}
        <HeroActions />
        <HeroSocials />
      </div>
    </section>
  );
}
