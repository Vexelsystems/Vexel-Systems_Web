"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

interface DynamicHeroProps {
  title: string;
  category: string;
  tagline: string;
  description: string;
  backLink: string;
  backText: string;
  typewriterPhrases?: string[];
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export function DynamicHero({
  title,
  category,
  tagline,
  description,
  backLink,
  backText,
  typewriterPhrases = [],
  primaryCTA,
  secondaryCTA,
}: DynamicHeroProps) {
  return (
    <section className="relative min-h-[90vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center overflow-hidden">
      <HeroBackground />
      
      {/* Back Link */}
      <div className="absolute top-24 left-6 md:left-10 z-20">
        <Link 
          href={backLink} 
          className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-all hover:gap-3 bg-white/5 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm"
        >
          <ArrowRight className="rotate-180" size={16} /> {backText}
        </Link>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
        {/* Hero Badge */}
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
          <div className="size-2 rounded-full bg-primary anim-pulse"></div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80">
            {category}
          </span>
        </div>

        <MotionWrapper type="slideUp" duration={1.2}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter flex flex-col items-center justify-center gap-x-3 gap-y-1 mb-6">
              <span className="text-foreground">{title}</span>
              {typewriterPhrases.length > 0 && (
                <TypewriterText phrases={typewriterPhrases} />
              )}
            </h1>

            <p className="text-primary text-lg md:text-xl font-bold mb-4 uppercase tracking-widest">{tagline}</p>

            <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>
        </MotionWrapper>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {primaryCTA && (
            <MotionWrapper type="scale" delay={0.2}>
              <Link href={primaryCTA.href}>
                <button 
                  className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
                >
                  {primaryCTA.text}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </MotionWrapper>
          )}

          {secondaryCTA && (
            <MotionWrapper type="scale" delay={0.3}>
              <Link href={secondaryCTA.href}>
                <button 
                  className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm"
                >
                  {secondaryCTA.text}
                </button>
              </Link>
            </MotionWrapper>
          )}
        </div>
      </div>
    </section>
  );
}
