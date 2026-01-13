"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { companyDetails } from "@/lib/companydetails";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress from 0 to 100 over 900ms
    const duration = 900;
    const interval = 10; // Update every 10ms
    const step = 100 / (duration / interval);
    
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration + 100); // Small buffer

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-9999 hidden md:flex items-center justify-center bg-background">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10 animate-pulse"></div>
      
      {/* Centered Logo with Pulse Animation */}
      <div className="relative flex flex-col items-center gap-6 z-10">
         {/* Logo Container */}
         <div className="relative flex items-center justify-center scale-90 sm:scale-100">
             {/* Outer Ping Ring */}
             <div className="relative h-28 w-28 z-10 filter drop-shadow-[0_0_15px_rgba(0,119,237,0.6)]">
                <Image
                    src={companyDetails.logos.main}
                    alt="Vexel Systems Logo"
                    fill
                    className="object-contain"
                    priority
                />
             </div>
         </div>

         {/* Brand Name */}
         <h1 className="text-3xl font-black text-foreground tracking-widest uppercase">
             Vexel Systems
         </h1>

         <div className="flex flex-col items-center gap-3">
            {/* Loading Bar */}
            <div className="w-64 h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden relative shadow-inner">
                <div 
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            
            {/* Percentage Counter */}
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-primary tabular-nums tracking-tighter">
                    {Math.round(progress)}
                </span>
                <span className="text-sm font-bold text-foreground/40 lowercase">%</span>
            </div>
         </div>
      </div>
    </div>
  );
}
