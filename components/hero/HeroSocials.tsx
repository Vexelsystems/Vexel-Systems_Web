"use client";
import Image from "next/image";
import { Zap } from "lucide-react";

/**
 * HERO SOCIALS COMPONENT
 * - Renders "Social Proof" elements (avatar stack).
 * - client-side `active` state or animations could be added here if needed.
 */

export function HeroSocials() {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <p className="text-xs font-bold text-foreground/70 uppercase tracking-widest flex items-center gap-2">
        <Zap size={12} className="text-primary" />
        50+ Happy Well-wishers
      </p>
    </div>
  );
}
