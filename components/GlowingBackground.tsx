"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const GlowingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none">
      {/* Top Left - Deep Primary (Blue) */}
      <motion.div
        className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/30 blur-[130px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Bottom Right - Deep Purple */}
      <motion.div
        className="absolute -bottom-[15%] -right-[15%] w-[80%] h-[80%] rounded-full bg-purple-600/25 blur-[140px]"
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* Center Top - Vibrant Mixed Glow */}
      <motion.div
        className="absolute top-[5%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mid Left - Purple Accent */}
      <motion.div
        className="absolute top-[40%] -left-[5%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default GlowingBackground;
