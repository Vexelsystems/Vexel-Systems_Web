"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Calendar, Zap, ChevronLeft, ChevronRight, Bell, MessageSquare, Cookie, Loader2, Palette } from 'lucide-react';
import { seasonalOffers, generateDiscount, SeasonalOffer } from '@/lib/seasonal-offers';
import Image from 'next/image';
import { toast } from 'sonner';

export default function ComponentTester() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const currentOffer = seasonalOffers[currentIndex];

  React.useEffect(() => {
    if (currentOffer) {
      setDiscount(generateDiscount(currentOffer));
    }
  }, [currentIndex, currentOffer]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % seasonalOffers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + seasonalOffers.length) % seasonalOffers.length);
  };

  const greetingMessage = currentOffer.greetingMessage || `Happy ${currentOffer.name}!`;
  const defaultMessage = currentOffer.message || "Celebrate with us and get an exclusive offer!";

  // Toast testers
  const showSuccessToast = () => {
    toast.success('Success! Your action was completed.', {
      description: 'This is a success notification',
    });
  };

  const showErrorToast = () => {
    toast.error('Error! Something went wrong.', {
      description: 'This is an error notification',
    });
  };

  const showInfoToast = () => {
    toast.info('Information', {
      description: 'This is an informational message',
    });
  };

  const showWarningToast = () => {
    toast.warning('Warning!', {
      description: 'This is a warning message',
    });
  };

  const showLoadingToast = () => {
    toast.loading('Loading...', {
      description: 'Please wait while we process your request',
    });
  };

  const showCustomToast = () => {
    toast('Custom Toast', {
      description: 'You can customize this however you want!',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo clicked'),
      },
    });
  };

  // Browser notification with better error handling
  const showBrowserNotification = async () => {
    if (!('Notification' in window)) {
      toast.error('Browser notifications not supported', {
        description: 'Your browser does not support notifications',
      });
      return;
    }

    try {
      if (Notification.permission === 'granted') {
        new Notification('Vexel Systems 🎉', {
          body: 'This is a browser notification test! It works perfectly.',
          icon: '/V Logo.png',
          badge: '/V Logo.png',
          tag: 'test-notification',
          requireInteraction: false,
        });
        toast.success('Browser notification sent!');
      } else if (Notification.permission === 'denied') {
        toast.error('Notifications blocked', {
          description: 'Please enable notifications in your browser settings',
        });
      } else {
        // Request permission
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          new Notification('Vexel Systems 🎉', {
            body: 'Notifications enabled! This is a test notification.',
            icon: '/V Logo.png',
            badge: '/V Logo.png',
            tag: 'test-notification',
          });
          toast.success('Permission granted! Notification sent.');
        } else {
          toast.warning('Permission denied', {
            description: 'You denied notification permissions',
          });
        }
      }
    } catch (error) {
      console.error('Notification error:', error);
      toast.error('Notification failed', {
        description: 'An error occurred while sending the notification',
      });
    }
  };

  // Vexel Chat trigger
  const openVexelChat = () => {
    window.dispatchEvent(new CustomEvent('vexel-chat-open'));
    toast.success('Vexel Chat opened!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-2 bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Component Tester
          </h1>
          <p className="text-foreground/60">Test all UI components in one place</p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          
          {/* Toast Notifications Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Bell className="text-primary" size={24} />
              Toast Notifications
            </h2>
            <div className="space-y-2">
              <button onClick={showSuccessToast} className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Success Toast
              </button>
              <button onClick={showErrorToast} className="w-full py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
                Error Toast
              </button>
              <button onClick={showInfoToast} className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Info Toast
              </button>
              <button onClick={showWarningToast} className="w-full py-3 bg-yellow-600 text-white rounded-xl font-semibold hover:bg-yellow-700 transition-colors">
                Warning Toast
              </button>
              <button onClick={showLoadingToast} className="w-full py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors">
                Loading Toast
              </button>
              <button onClick={showCustomToast} className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                Custom Toast
              </button>
            </div>
          </div>

          {/* Browser & System Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="text-primary" size={24} />
              Browser & System
            </h2>
            <div className="space-y-2">
              <button onClick={showBrowserNotification} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Browser Notification
              </button>
              <button onClick={openVexelChat} className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:brightness-110 transition-all">
                Open Vexel Chat
              </button>
              <button onClick={() => setShowPreloader(!showPreloader)} className="w-full py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors">
                {showPreloader ? 'Hide' : 'Show'} Preloader
              </button>
              <button onClick={() => setShowCookieBanner(!showCookieBanner)} className="w-full py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                {showCookieBanner ? 'Hide' : 'Show'} Cookie Banner
              </button>
            </div>
          </div>

          {/* Seasonal Popup Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="text-primary" size={24} />
              Seasonal Popup
            </h2>
            <div className="space-y-2">
              <button onClick={() => setShowPopup(true)} className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold hover:brightness-110 transition-all">
                Show Current Festival
              </button>
              <div className="text-sm text-foreground/60 text-center mt-2">
                Currently: {currentOffer.name}
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Popup Tester */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Palette className="text-primary" size={28} />
            Seasonal Popup Preview ({currentIndex + 1} / {seasonalOffers.length})
          </h2>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all font-semibold"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="px-6 py-3 bg-primary text-white rounded-xl font-bold min-w-[100px] text-center">
              {currentIndex + 1} / {seasonalOffers.length}
            </div>
            
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all font-semibold"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Festival Info */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-foreground/60 mb-1">Festival</p>
                <p className="font-bold">{currentOffer.emoji} {currentOffer.name}</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Dates</p>
                <p className="font-bold">{currentOffer.startDate} to {currentOffer.endDate}</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Discount</p>
                <p className="font-bold">{currentOffer.discountMin || 10}% - {currentOffer.discountMax || 40}%</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Status</p>
                <p className={`font-bold ${currentOffer.enabled ? 'text-green-600' : 'text-red-600'}`}>
                  {currentOffer.enabled ? '✓ Enabled' : '✗ Disabled'}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Jump Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {seasonalOffers.map((offer, index) => (
              <button
                key={offer.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-3 rounded-xl text-xs font-medium transition-all ${
                  currentIndex === index
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">{offer.emoji}</div>
                <div className="truncate">{offer.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Preloader Simulation */}
        {showPreloader && (
          <div className="fixed inset-0 bg-white dark:bg-black z-[99999] flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-4" />
              <p className="text-xl font-bold">Loading...</p>
            </div>
          </div>
        )}

        {/* Cookie Banner Simulation */}
        {showCookieBanner && (
          <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
              <div className="flex items-start gap-4">
                <Cookie className="text-primary shrink-0" size={32} />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Cookie Policy</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-primary text-white rounded-xl font-semibold hover:brightness-110 transition-all">
                      Accept All
                    </button>
                    <button onClick={() => setShowCookieBanner(false)} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                      Decline
                    </button>
                  </div>
                </div>
                <button onClick={() => setShowCookieBanner(false)} className="shrink-0">
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Seasonal Popup */}
        <AnimatePresence>
          {showPopup && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-lg z-9999"
                onClick={() => setShowPopup(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10000 w-[95%] max-w-2xl"
              >
                <div className="relative bg-white dark:bg-zinc-950 rounded-[40px] overflow-hidden shadow-2xl">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-6 right-6 z-30 p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-all shadow-xl hover:scale-110"
                  >
                    <X size={20} />
                  </button>

                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto overflow-hidden">
                      {currentOffer.imageUrl ? (
                        <Image src={currentOffer.imageUrl} alt={currentOffer.name} fill className="object-cover" />
                      ) : (
                        <div className={`w-full h-full bg-linear-to-br ${currentOffer.gradient}`} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-7xl mb-4">
                          {currentOffer.emoji}
                        </motion.div>
                        <h2 className="text-4xl font-black text-white mb-2">{greetingMessage}</h2>
                        <div className="flex items-center gap-2 w-fit">
                          <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                            <Zap size={14} className="animate-pulse" />
                            Limited Time
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="mb-6">
                          <div className="relative inline-block">
                            <Sparkles className="absolute -top-4 -right-4 text-yellow-400 animate-pulse" size={24} />
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
                        <p className="text-lg font-semibold text-foreground mb-3">{defaultMessage}</p>
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
                          <Calendar size={16} />
                          <span>Valid until {new Date(2026, parseInt(currentOffer.endDate.split('-')[0]) - 1, parseInt(currentOffer.endDate.split('-')[1])).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <button className={`w-full py-5 bg-linear-to-r ${currentOffer.gradient} text-white font-bold text-lg rounded-2xl shadow-2xl flex items-center justify-center gap-3`}>
                          Claim {discount}% OFF Now
                          <ArrowRight size={20} />
                        </button>
                        <button onClick={() => setShowPopup(false)} className="w-full py-4 text-foreground/60 hover:text-foreground font-semibold rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                          Maybe Later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
