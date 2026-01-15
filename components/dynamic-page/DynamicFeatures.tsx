"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

interface FeatureItem {
  title: string;
  description: string;
  icon?: any;
  features?: string[];
}

interface DynamicFeaturesProps {
  items: FeatureItem[];
  type?: "grid" | "carousel";
}

export function DynamicFeatures({ items, type = "grid" }: DynamicFeaturesProps) {
  const Card = ({ item, index }: { item: FeatureItem; index: number }) => {
    const Icon = item.icon || Sparkles;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="h-full p-8 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-4xl border border-black/5 dark:border-white/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
      >
        <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="text-primary" size={28} />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        
        <p className="text-foreground/60 leading-relaxed mb-6 font-medium">
          {item.description}
        </p>

        {item.features && item.features.length > 0 && (
          <div className="space-y-3 pt-6 border-t border-black/5 dark:border-white/5">
            {item.features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  if (type === "carousel") {
    return (
      <SnapCarousel>
        {items.map((item, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center h-full">
            <Card item={item} index={idx} />
          </div>
        ))}
      </SnapCarousel>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => (
        <Card key={idx} item={item} index={idx} />
      ))}
    </div>
  );
}
