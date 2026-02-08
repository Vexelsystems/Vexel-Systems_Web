"use client";

import { useState, useEffect } from "react";
import { X, Star } from "lucide-react";

export default function GoogleReviewFloater() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show after 3 seconds to not be intrusive immediately
    const timer = setTimeout(() => {
        setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isClosed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-700">
      <div className="relative group">
        <button 
            onClick={() => setIsClosed(true)}
            className="absolute -top-2 -right-2 bg-white dark:bg-zinc-800 text-foreground/50 hover:text-red-500 rounded-full p-1 shadow-md border border-foreground/10 transition-colors z-20 scale-0 group-hover:scale-100 duration-200"
            aria-label="Close"
        >
            <X size={12} />
        </button>

        <a 
            href="https://g.page/r/CekuN_F9OwzUEAI/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 pr-5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-orange-500/20 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
        >
            <div className="p-2 bg-white rounded-xl shadow-sm border border-black/5">
                 {/* Google G Logo SVG */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest leading-none">Review us</span>
                <span className="text-sm font-bold text-foreground flex items-center gap-2">
                    Google
                    <div className="flex text-yellow-400">
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                    </div>
                </span>
            </div>
        </a>
      </div>
    </div>
  );
}
