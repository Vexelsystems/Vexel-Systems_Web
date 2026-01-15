"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Heart } from "lucide-react";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

interface BenefitItem {
  title: string;
  description: string;
  icon?: any;
}

interface DynamicBenefitsProps {
  items: BenefitItem[];
}

export function DynamicBenefits({ items }: DynamicBenefitsProps) {
  const icons = [Star, ShieldCheck, Zap, Heart];

  return (
    <div className="max-w-5xl mx-auto">
      <SnapCarousel scrollContainerClassName="md:grid md:grid-cols-2 gap-8">
        {items.map((benefit, idx) => {
          const Icon = benefit.icon || icons[idx % icons.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-0 snap-center p-10 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-black/5 dark:border-white/5 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
            >
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <Icon size={32} />
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4 tracking-tighter">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </SnapCarousel>
    </div>
  );
}
