"use client";

import React from "react";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { Search, PenTool, Code, CheckSquare, Rocket } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "We Listen",
    description:
      "We start by sitting down with you to understand your real problems and goals.",
    icon: <Search className="w-10 h-10" />,
    activities: ["Honest Conversations", "Market Check", "Clear Goals"],
  },
  {
    number: "02",
    title: "We Plan",
    description:
      "We map out exactly what your software needs to do to succeed.",
    icon: <PenTool className="w-10 h-10" />,
    activities: ["Smart Blueprints", "Interactive Models", "Technology Choice"],
  },
  {
    number: "03",
    title: "We Build",
    description:
      "Our experts code your system using the latest secure technology.",
    icon: <Code className="w-10 h-10" />,
    activities: ["Fast Progress", "Quality Checks", "Weekly Updates"],
  },
  {
    number: "04",
    title: "We Test",
    description:
      "We make sure everything works perfectly before your customers see it.",
    icon: <CheckSquare className="w-10 h-10" />,
    activities: ["Bug Stomping", "Speed Tests", "Human Verification"],
  },
  {
    number: "05",
    title: "You Launch",
    description: "We help you go live and stay by your side to ensure success.",
    icon: <Rocket className="w-10 h-10" />,
    activities: ["Go-Live Support", "Monitoring", "Always Helping"],
  },
];

/**
 * PROCESS SECTION
 *
 * Functional Overview:
 * - Data Structure: Iterates through static `phases` (Timeline) and `outcomes` (Grid) arrays.
 * - Layout: Responsive grid system that stacks vertically on mobile and expands to 5 columns on desktop.
 */

export const ProcessSection = () => {
  return (
    <div className="flex flex-col bg-transparent">
      {/* Project Lifecycle Timeline */}
      <section className="py-24 overflow-hidden">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Our Strategic{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Process
              </span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We combine agile methodology with enterprise-grade standards to
              deliver software that scales.
            </p>
          </div>

          <SnapCarousel
            className="md:block"
            scrollContainerClassName="md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8 md:pb-0"
          >
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="flex flex-col items-center group cursor-default hover:-translate-y-2 transition-transform duration-300 min-w-[85vw] md:min-w-0 snap-center"
              >
                <div className="size-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md border-4 border-background group-hover:bg-purple-600 transition-colors duration-300">
                  {phase.icon}
                </div>
                <div className="text-center px-2">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1 block">
                    Phase {phase.number}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 min-h-10">
                    {phase.description}
                  </p>
                  <div className="space-y-2 text-left bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-4 rounded-xl border border-primary/5 shadow-sm group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                    {phase.activities.map((act, i) => (
                      <div
                        key={act}
                        className="flex items-center gap-2 text-[11px] font-bold text-foreground/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        {act}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </SnapCarousel>
        </div>
      </section>
    </div>
  );
};
