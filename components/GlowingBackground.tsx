"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const GlowingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none dark:hidden hidden md:block">
      {/* Top Left - Deep Primary (Blue) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/30 blur-[130px]"
      />

      {/* Bottom Right - Deep Purple */}
      <div
        className="absolute -bottom-[15%] -right-[15%] w-[80%] h-[80%] rounded-full bg-purple-600/25 blur-[140px]"
      />

      {/* Center Top - Vibrant Mixed Glow */}
      <div
        className="absolute top-[5%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px]"
      />

      {/* Mid Left - Purple Accent */}
      <div
        className="absolute top-[40%] -left-[5%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]"
      />
    </div>
  );
};

export default GlowingBackground;
