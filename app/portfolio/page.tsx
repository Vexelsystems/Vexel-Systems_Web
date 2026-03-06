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
  description:
    "Explore our showcase of successful projects. From revolutionary POS systems to high-performance web applications, see how Vexel Systems drives digital excellence across Sri Lanka.",
  keywords: [
    "Vexel Systems portfolio",
    "software case studies Sri Lanka",
    "web design portfolio",
    "app development projects",
    "POS system examples",
    "success stories Vexel",
    "client projects Vavuniya",
    "tech project showcase",
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
      <section className="relative pt-16 pb-20 bg-transparent text-center">
        <HeroBackground />

        <div className="w-[92%] md:w-[90%] mx-auto max-w-7xl relative z-10 flex flex-col items-center">
          <MotionWrapper type="scale" duration={1.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-10">
              <Star size={12} className="fill-primary" /> Curated Work
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[92px] font-black tracking-tight mb-8 uppercase text-balance leading-none">
              <span className="text-foreground">We Build </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Digital Futures.
              </span>
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
