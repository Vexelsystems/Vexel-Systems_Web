/**
 * PORTFOLIO PAGE (Server Component)
 *
 * Strategy:
 * - Server Component: Handles static SEO generation (metadata) and renders the LCP hero section.
 * - Client Component Delegation: Offloads interactive portfolio filtering and rendering to `PortfolioClient`
 *   to reduce TBT and keep the initial HTML light.
 */

import { generatePageMetadata } from "@/lib/seo";
import PortfolioClient from "@/components/PortfolioClient";
import { Star } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Our Portfolio",
  description: "Success Stories & Case Studies",
  keywords: [
    "Vexel Systems portfolio",
    "software case studies Sri Lanka",
    "web design portfolio",
    "app development projects",
    "POS system examples",
    "success stories Vexel",
    "client projects Vavuniya",
    "software portfolio Sri Lanka",
    "tech project showcase",
    "innovative software solutions",
    "enterprise projects Sri Lanka",
    "startup success stories",
    "digital transformation examples",
  ],
  path: "/portfolio",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";
import Newsletter from "@/components/Newsletter";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 bg-transparent">
        <HeroBackground />

        <div className="w-[92%] md:w-[90%] mx-auto max-w-[1400px] relative z-10 text-center flex flex-col items-center">
          <MotionWrapper type="scale" duration={1.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              <Star size={12} className="fill-primary" /> Curated Work
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9] flex flex-col items-center gap-2">
              <span className="text-foreground">We Build</span>
              <span className="text-primary mt-2">Digital Futures.</span>
            </h1>
            <p className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore how we've helped ambitious brands transform complex
              challenges into elegant, scalable software solutions.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <MotionWrapper delay={0.2}>
        <PortfolioClient />
      </MotionWrapper>
    </div>
  );
}
