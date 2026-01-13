import React from "react";

export function HeroBadge() {
  return (
    <div 
      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default"
    >
      <div className="size-2 rounded-full bg-primary"></div>
      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">Local Tech Partner</span>
    </div>
  );
}
