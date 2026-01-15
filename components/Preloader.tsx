"use client";

import Image from "next/image";
import { companyDetails } from "@/lib/companydetails";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-white dark:bg-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] dark:opacity-[0.2]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]"></div>

      {/* 
        User requested 0.8s animation. 
        Using 'animate-[pulse_0.8s_ease-in-out_infinite]' to pulse opacity/scale.
        Adding specific scale animation for more "life".
      */}
      <div className="relative size-24 animate-[pulse_0.8s_cubic-bezier(0.4,0,0.6,1)_infinite] z-10">
        <Image
          src={companyDetails.logos.main}
          alt={companyDetails.name}
          fill
          className="object-contain drop-shadow-[0_0_20px_rgba(0,119,237,0.4)]"
          priority
        />
      </div>
      
      {/* Company Name requested by user */}
      <h1 className="z-10 text-3xl md:text-4xl font-extrabold tracking-tighter animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {companyDetails.name}
        </span>
      </h1>
    </div>
  );
}
