"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Approximately 1 second: +1 per 10ms
        return prev + 1;
      });
    }, 10); // Check every 10ms (100 ticks = 1000ms)

    // Initial timeout to ensure it runs for a bit, then consistent interval
    // Adjust timing as needed for desired effect
    
    // Cleanup on finish
    if (count >= 100) {
      setTimeout(() => {
        setIsVisible(false);
      }, 100); // Quick fade out
    }

    return () => clearInterval(interval);
  }, [count]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white dark:bg-black transition-opacity duration-500 ${count === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo Container with Pulse Effect */}
        <div className="relative h-24 w-24 mb-4">
             <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
             <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary/20 bg-white p-2 z-10">
                <Image
                    src="/V Logo.png"
                    alt="Vexel Systems Logo"
                    fill
                    className="object-cover"
                />
             </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-black text-foreground tracking-tighter">
            Vexel Systems
        </h1>

        {/* Counter and Progress Bar */}
        <div className="w-64 mt-4">
            <div className="flex justify-between text-sm font-bold text-primary mb-2">
                <span>Loading...</span>
                <span>{Math.min(count, 100)}%</span>
            </div>
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{ width: `${Math.min(count, 100)}%` }}
                ></div>
            </div>
        </div>
      </div>
    </div>
  );
}
