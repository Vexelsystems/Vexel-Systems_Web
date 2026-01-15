"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Rocket, ArrowRight } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

interface RoadmapItem {
  phase: string;
  date: string;
  description: string;
  items: string[];
  status: "completed" | "current" | "future";
}

interface DynamicRoadmapProps {
  roadmap: RoadmapItem[];
  launchDate?: string;
}

export function DynamicRoadmap({ roadmap, launchDate }: DynamicRoadmapProps) {
  return (
    <div className="relative">
      {/* Launch Countdown / Callout */}
      {launchDate && (
        <MotionWrapper type="scale">
          <div className="mb-12 p-6 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Launch Countdown</h4>
                <p className="text-foreground/60 font-medium">Estimated Launch: <span className="text-primary">{launchDate}</span></p>
              </div>
            </div>
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
              Be the First to Know
            </button>
          </div>
        </MotionWrapper>
      )}

      {/* Timeline Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {roadmap.map((item, idx) => {
          const isCompleted = item.status === "completed";
          const isCurrent = item.status === "current";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-4xl border transition-all duration-500 ${
                isCurrent 
                  ? "bg-primary/5 border-primary shadow-xl shadow-primary/5" 
                  : "bg-white/40 dark:bg-white/5 border-black/5 dark:border-white/5"
              }`}
            >
              {/* Status Icon */}
              <div className="flex items-center justify-between mb-6">
                 <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                   isCompleted ? "bg-green-500/10 text-green-500" :
                   isCurrent ? "bg-primary text-white" : "bg-foreground/10 text-foreground/50"
                 }`}>
                   {item.status}
                 </div>
                 {isCompleted ? <CheckCircle2 className="text-green-500" size={20} /> : <Clock className={isCurrent ? "text-primary anim-pulse" : "text-foreground/20"} size={20} />}
              </div>

              <span className="text-sm font-bold text-primary mb-2 block">{item.date}</span>
              <h4 className="text-xl font-bold mb-4 text-foreground">{item.phase}</h4>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">{item.description}</p>

              <ul className="space-y-3">
                {item.items.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs font-semibold text-foreground/70">
                    <div className={`mt-1 size-1.5 rounded-full ${isCompleted ? "bg-green-500" : isCurrent ? "bg-primary" : "bg-foreground/20"}`}></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Connector line for large screens */}
              {idx < roadmap.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-foreground/10 z-0"></div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
