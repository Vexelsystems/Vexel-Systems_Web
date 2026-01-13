"use client";

import { motion } from "framer-motion";
import { SnapCarousel } from "@/components/ui/SnapCarousel";
import { Earth, Zap, DollarSign, Headset } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 flex flex-col gap-6 sticky top-32">
              <h2 className="text-foreground text-4xl font-black leading-tight tracking-tight">
                Why Global <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Businesses</span> Choose Vexel
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                We combine global expertise with agile delivery to provide cost-effective technology solutions that scale with your growth.
              </p>
              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-primary/20 transition-all"
                >
                  See Our Case Studies
                </motion.button>
              </div>
            </div>
            <div className="lg:w-2/3">
                <SnapCarousel scrollContainerClassName="sm:grid sm:grid-cols-2 md:grid-cols-2 md:gap-6">
                   <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                      <Earth className="text-primary mb-4" size={40} />
                      <h4 className="text-xl font-bold text-foreground mb-2">Global Expertise</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">Serving clients across 12 countries with international standards and localized support.</p>
                   </div>
                   <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                      <Zap className="text-primary mb-4" size={40} />
                      <h4 className="text-xl font-bold text-foreground mb-2">Agile Delivery</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">Fast-paced development cycles with weekly sprints ensuring timely and transparent project delivery.</p>
                   </div>
                   <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                      <DollarSign className="text-primary mb-4" size={40} />
                      <h4 className="text-xl font-bold text-foreground mb-2">Cost-Effective</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">High-quality software solutions at competitive price points, maximizing your ROI.</p>
                   </div>
                   <div className="min-w-[75vw] sm:min-w-0 md:col-span-1 h-full bg-white/40 dark:bg-black p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                      <Headset className="text-primary mb-4" size={40} />
                      <h4 className="text-xl font-bold text-foreground mb-2">24/7 Support</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">Dedicated technical support across all time zones to ensure your systems never sleep.</p>
                   </div>
                </SnapCarousel>
            </div>
          </div>
        </div>
      </section>
  );
}
