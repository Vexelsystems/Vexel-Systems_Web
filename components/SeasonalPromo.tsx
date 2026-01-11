"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Calendar, Zap } from 'lucide-react';
import { getActiveSeasonalOffer, generateDiscount, SeasonalOffer } from '@/lib/seasonal-offers';
import Image from 'next/image';

export default function SeasonalPromo() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOffer, setCurrentOffer] = useState<SeasonalOffer | null>(null);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Check if user has already seen the promo today
    const lastSeen = localStorage.getItem('seasonal_promo_last_seen');
    const today = new Date().toDateString();
    
    if (lastSeen === today) {
      return;
    }

    // Get active seasonal offer
    const activeOffer = getActiveSeasonalOffer();

    if (activeOffer) {
      setCurrentOffer(activeOffer);
      setDiscount(generateDiscount(activeOffer));
      
      // Show popup after a short delay
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('seasonal_promo_last_seen', new Date().toDateString());
  };

  const handleDecline = () => {
    handleClose();
  };

  const handleClaim = () => {
    handleClose();
    window.location.href = '/quote';
  };

  if (!currentOffer) return null;

  const greetingMessage = currentOffer.greetingMessage || `Happy ${currentOffer.name}!`;
  const defaultMessage = currentOffer.message || "Celebrate with us and get an exclusive offer!";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-9999"
            onClick={handleDecline}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10000 w-[95%] max-w-2xl"
            style={{ perspective: "1000px" }}
          >
            {/* Main Card */}
            <div className="relative bg-white dark:bg-zinc-950 rounded-[40px] overflow-hidden shadow-2xl">
              
              {/* Close Button - Floating */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-30 p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-all shadow-xl hover:scale-110"
                aria-label="Close"
              >
                <X size={20} className="text-gray-800 dark:text-white" />
              </button>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-0">
                
                {/* LEFT SIDE - Image & Greeting */}
                <div className="relative h-[400px] md:h-auto overflow-hidden">
                  {/* Background Image */}
                  {currentOffer.imageUrl ? (
                    <Image
                      src={currentOffer.imageUrl}
                      alt={currentOffer.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-linear-to-br ${currentOffer.gradient}`} />
                  )}
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Content Over Image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    {/* Emoji with glow effect */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="text-7xl mb-4 drop-shadow-2xl"
                    >
                      {currentOffer.emoji}
                    </motion.div>
                    
                    {/* Greeting */}
                    <h2 className="text-4xl font-black text-white mb-2 leading-tight">
                      {greetingMessage}
                    </h2>
                    
                    {/* Limited Time Badge */}
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        <Zap size={14} className="animate-pulse" />
                        Limited Time
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE - Offer Details */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  
                  {/* Top Section */}
                  <div>
                    {/* Discount Badge - Redesigned */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        {/* Sparkle decorations */}
                        <Sparkles className="absolute -top-4 -right-4 text-yellow-400 animate-pulse" size={24} />
                        <Sparkles className="absolute -bottom-2 -left-2 text-yellow-400 animate-pulse" size={16} style={{ animationDelay: '0.5s' }} />
                        
                        {/* Main discount display */}
                        <div className={`relative bg-linear-to-br ${currentOffer.gradient} p-1 rounded-3xl shadow-2xl`}>
                          <div className="bg-white dark:bg-zinc-950 rounded-[22px] px-8 py-6">
                            <div className="flex items-baseline gap-2">
                              <span className={`text-7xl font-black bg-linear-to-br ${currentOffer.gradient} bg-clip-text text-transparent`}>
                                {discount}
                              </span>
                              <span className="text-3xl font-black text-foreground/40">%</span>
                            </div>
                            <div className="text-sm font-bold text-foreground/60 uppercase tracking-widest mt-1">
                              Discount
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <p className="text-lg font-semibold text-foreground mb-3 leading-relaxed">
                      {defaultMessage}
                    </p>
                    
                    {/* Validity Info */}
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
                      <Calendar size={16} />
                      <span>Valid until {new Date(2026, parseInt(currentOffer.endDate.split('-')[0]) - 1, parseInt(currentOffer.endDate.split('-')[1])).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Bottom Section - CTAs */}
                  <div className="space-y-3">
                    {/* Primary CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClaim}
                      className={`w-full py-5 bg-linear-to-r ${currentOffer.gradient} text-white font-bold text-lg rounded-2xl shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden`}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      
                      <span className="relative z-10">Claim {discount}% OFF Now</span>
                      <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    {/* Secondary CTA */}
                    <button
                      onClick={handleDecline}
                      className="w-full py-4 text-foreground/60 hover:text-foreground font-semibold rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                    >
                      Maybe Later
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
