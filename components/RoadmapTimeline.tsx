import React from 'react';
import { MotionWrapper } from "@/components/ui/MotionWrapper";

interface RoadmapItem {
  phase: string;
  date: string;
  description: string;
  items: string[];
  status: 'completed' | 'current' | 'future';
}

interface RoadmapProps {
  items: RoadmapItem[];
  color?: string; // e.g., "bg-primary" or "bg-green-500"
  accentColor?: string; // hex or class for text
}

export const RoadmapTimeline: React.FC<RoadmapProps> = ({ items, color = "bg-primary", accentColor = "text-primary" }) => {
  return (
    <section className="py-32 px-6 bg-zinc-950/50 overflow-hidden relative text-white">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-4">Operational Roadmap</h2>
          <div className={`h-1 w-20 mx-auto ${color}`} />
        </div>

        <div className="relative">
            {/* The Vertical Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2`} />

            <div className="space-y-16">
            {items.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                    <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Timeline Node */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 md:top-6 z-10 flex items-center justify-center">
                            <div className={`size-4 rounded-full ${item.status === 'current' ? `${color} animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.5)]` : 'bg-zinc-800 border-2 border-white/20'}`} />
                        </div>

                        {/* Content Spacer for layout */}
                        <div className="md:w-1/2" />

                        {/* Content Card */}
                        <div className={`md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                            <div className={`relative p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group ${item.status === 'current' ? 'ring-1 ring-white/20' : ''}`}>
                                {item.status === 'current' && (
                                    <span className={`absolute -top-3 ${isEven ? 'right-8' : 'left-8'} px-3 py-1 rounded-full ${color} text-[8px] font-black uppercase tracking-widest text-white`}>
                                        Active Phase
                                    </span>
                                )}
                                <span className={`text-xs font-black uppercase tracking-[0.3em] mb-2 block opacity-60 ${accentColor}`}>{item.date}</span>
                                <h4 className="text-2xl font-black mb-4 italic tracking-tight uppercase text-white">{item.phase}</h4>
                                <p className="text-white/40 text-sm font-medium leading-relaxed mb-6">{item.description}</p>
                                <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                    {item.items.map((it, i) => (
                                    <span key={i} className="px-2 py-1 rounded bg-white/5 text-[9px] font-bold text-white/50 border border-white/5 whitespace-nowrap">
                                        {it}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
                );
            })}
            </div>
        </div>
      </div>
    </section>
  );
};
