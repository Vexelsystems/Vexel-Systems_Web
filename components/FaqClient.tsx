"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, Monitor, CreditCard, Headphones, Server, RefreshCw, Shield, BarChart, Smartphone, Package, Users, Gift, ShoppingCart, Globe, Code, Rocket, ChevronDown, CheckCircle, AlertCircle, MessageSquare, Mail, Search, Share2 } from 'lucide-react';
import { faqData } from '@/lib/faq-data';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

const categories = [
  { id: 'general', label: 'General', icon: <HelpCircle size={20} /> },
  { id: 'pos-services', label: 'POS Services', icon: <Monitor size={20} /> },
  { id: 'pricing', label: 'Pricing & Billing', icon: <CreditCard size={20} /> },
  { id: 'tech-support', label: 'Technical Support', icon: <Headphones size={20} /> },
  { id: 'hardware', label: 'Hardware Setup', icon: <Server size={20} /> },
  { id: 'updates', label: 'Software Updates', icon: <RefreshCw size={20} /> },
  { id: 'security', label: 'Security & Privacy', icon: <Shield size={20} /> },
  { id: 'analytics', label: 'Advanced Analytics', icon: <BarChart size={20} /> },
  { id: 'integrations', label: 'Integrations', icon: <Share2 size={20} /> },
  { id: 'mobile', label: 'Mobile Application', icon: <Smartphone size={20} /> },
  { id: 'inventory', label: 'Inventory Management', icon: <Package size={20} /> },
  { id: 'employees', label: 'Employee Mgmt', icon: <Users size={20} /> },
  { id: 'loyalty', label: 'Customer Loyalty', icon: <Gift size={20} /> },
  { id: 'payments', label: 'Payment Methods', icon: <ShoppingCart size={20} /> },
  { id: 'multi-store', label: 'Multi-store Sync', icon: <Globe size={20} /> },
  { id: 'api', label: 'Developer API', icon: <Code size={20} /> },
  { id: 'onboarding', label: 'Onboarding', icon: <Rocket size={20} /> },
];

/**
 * FAQ CLIENT COMPONENT
 * 
 * Functional Overview:
 * - Search Logic: Real-time filtering based on both query string and selected category.
 * - Navigation: Sidebar category matching with `activeCategory` state.
 * - UX: Accordion-style answer expansion using `openIndex` state.
 * - Data Source: Uses static `faqData` from `@/lib/faq-data`.
 */

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = searchQuery ? true : faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Search Section */}
      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center">
        {/* Background Gradients & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
            
            {/* Hero Badge */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">Support Center</span>
            </div>

            <MotionWrapper type="slideUp" duration={1.2}>
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
                  <span className="text-foreground">Master</span>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
                    FAQ Center
                  </span>
                </h1>

                <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-8">
                  Empowering your business with instant software & POS solutions.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden p-1 flex border border-primary/10">
                  <input 
                      className="w-full border-none focus:ring-0 bg-transparent text-black dark:text-white placeholder:text-foreground/70 text-lg py-4 px-6 outline-none" 
                      placeholder="Search by topic, keyword, or error code..." 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="bg-primary text-white px-8 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all">
                      Search
                  </button>
                </div>
              </div>
            </MotionWrapper>
        </div>
      </section>

      <div className="container w-[90%] md:w-[80%] mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 mb-20">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center gap-2 mb-4 px-2 text-sm text-foreground/70">
               <Link href="/" className="hover:text-primary">Home</Link>
               <span>/</span>
               <span className="font-bold text-foreground">FAQ Center</span>
            </div>
            <div className="bg-card rounded-xl border border-primary/10 p-4 shadow-sm h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 px-3 text-foreground/70">{categories.length} Categories</h3>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0); // Reset accordion on category change
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                      activeCategory === cat.id 
                        ? 'bg-primary/10 text-primary font-bold' 
                        : 'text-foreground/80 hover:bg-primary/5'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span className="text-sm">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Contact Card */}
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
              <p className="text-sm font-bold mb-2">Need direct help?</p>
              <p className="text-xs text-foreground/70 mb-4">Our support team is available 24/7 for urgent Vexel inquiries.</p>
              <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-12">
          {/* Active Category Section */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-primary/20 pb-4 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <span className="text-2xl">
                    {categories.find(c => c.id === activeCategory)?.icon}
                </span>
              </div>
              <h2 className="text-2xl font-bold">{categories.find(c => c.id === activeCategory)?.label?.split(' ')[0]} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">{categories.find(c => c.id === activeCategory)?.label?.split(' ')[1] || ''}</span></h2>
            </div>

            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99] hover:-translate-y-1"
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-lg font-bold text-primary transition-colors">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${openIndex === index ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-black/80 dark:text-white/80 leading-relaxed text-lg whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 px-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-dashed border-black/10 dark:border-white/10">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                   <Search size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">No matches found</h3>
                <p className="text-foreground/80 max-w-md mx-auto">
                  We couldn't find any questions matching "{searchQuery}". Try using different keywords or browse our categories.
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
            </div>
          </section>

          {/* Pricing Highlight Section (if active) */}
          {activeCategory === 'pricing' && (
            <div className="bg-primary/10 rounded-xl border border-primary/20 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                    <CheckCircle size={20} />
                    <span className="font-bold text-sm uppercase">Quick Tip</span>
                </div>
                <p className="font-bold text-lg">All plans are billed monthly by default, but annual plans offer a 20% discount.</p>
            </div>
          )}

          {/* Tech Support Cards (if active) */}
          {activeCategory === 'tech-support' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-2">Remote Assistance</h3>
                <p className="text-sm text-foreground/70 mb-4">Allow our engineers to securely access your system to fix issues in real-time.</p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                  Launch Remote Support <Share2 size={16} />
                </button>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-2">System Status</h3>
                <p className="text-sm text-foreground/70 mb-4">Check for any known outages or scheduled maintenance windows.</p>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500"></span>
                  <span className="text-xs font-bold text-green-500 uppercase">All Systems Operational</span>
                </div>
              </div>
            </div>
          )}

          {/* Global CTA */}
          <div className="pt-8 border-t border-primary/10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Still have <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">questions?</span></h2>
            <p className="text-foreground/70 mb-8 max-w-lg">If you couldn't find what you were looking for, our expert team is ready to help you optimize your business operations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('vexel-chat-open'))}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2"
              >
                <MessageSquare size={18} /> Vexel Chat
              </button>
              <button className="bg-card text-foreground border border-primary/20 px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors flex items-center gap-2">
                <Mail size={18} /> Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
