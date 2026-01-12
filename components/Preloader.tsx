"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { companyDetails } from "@/lib/companydetails";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-background">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10 animate-pulse"></div>
      
      {/* Centered Logo with Pulse Animation */}
      <div className="relative flex flex-col items-center gap-6 z-10">
         {/* Logo Container */}
         <div className="relative flex items-center justify-center">
             {/* Outer Ping Ring */}
             <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
             <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary/20 bg-white p-2 z-10">
                <Image
                    src={companyDetails.logos.main}
                    alt="Vexel Systems Logo"
                    fill
                    className="object-cover"
                    priority
                />
             </div>
         </div>

         {/* Brand Name */}
         <h1 className="text-3xl font-black text-foreground tracking-tighter">
             Vexel Systems
         </h1>

         {/* Loading Bar */}
         <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-pulse rounded-full" style={{ width: '100%' }}></div>
         </div>
      </div>
    </div>
  );
}
