"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 pb-12 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -10, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default"
        >
          <div className="size-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary transition-colors">Local Tech Partner</span>
        </motion.div>

        {/* Centered Heading with Staggered Entrance */}
        <div className="flex flex-col items-center overflow-hidden text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4"
          >
            Welcome to Vexel Systems
          </motion.h2>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6 animate-in slide-in-from-bottom-8 fade-in duration-1000">
            <span className="text-foreground">Building Smart, Scalable</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
              Future-Ready Digital Solutions.
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-foreground/60 text-lg md:text-xl font-medium max-w-3xl leading-relaxed"
          >
            At Vexel Systems, we design and develop modern software, AI-powered platforms, and intelligent systems that help businesses grow, automate, and innovate.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link href="/pricing">
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0,119,237,0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm"
            >
              View Solutions
            </motion.button>
          </Link>
        </motion.div>

        {/* Animated Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col items-center gap-4 mt-6"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, zIndex: 50 }}
                className="size-10 rounded-full border-4 border-background bg-zinc-800 relative overflow-hidden cursor-pointer transition-colors"
              >
                <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" fill sizes="40px" />
              </motion.div>
            ))}
          </div>
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest flex items-center gap-2">
            <Zap size={12} className="text-primary animate-bounce" />
            Trusted by 50+ Global Enterprises
          </p>
        </motion.div>
      </div>
    </section>
  );
}
