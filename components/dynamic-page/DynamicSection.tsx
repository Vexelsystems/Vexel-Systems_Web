"use client";

import React from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

interface DynamicSectionProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function DynamicSection({ 
  children, 
  title, 
  subtitle, 
  className = "", 
  id,
  dark = false 
}: DynamicSectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 ${dark ? "bg-foreground/5" : "bg-transparent"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <MotionWrapper type="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </MotionWrapper>
        {children}
      </div>
    </section>
  );
}
