"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ShoppingCart,
  Users,
  Package,
  LayoutDashboard,
  Settings,
  TrendingUp,
  CreditCard,
  PieChart,
  Truck,
  Activity,
} from "lucide-react";

// Fleet UI Sub-component
const FleetView = () => (
  <div className="flex flex-col h-full bg-[#0f172a] p-4 font-sans text-white overflow-hidden text-left">
    <div className="flex justify-between items-center mb-4">
      <div className="text-[10px] font-black uppercase tracking-widest text-amber-500">
        Live Fleet Map
      </div>
      <div className="flex gap-1">
        <div className="size-1.5 rounded-full bg-emerald-500 animate-ping"></div>
        <div className="text-[8px] font-bold">12 Vehicles Active</div>
      </div>
    </div>
    <div className="flex-1 relative bg-slate-900 rounded-xl border border-white/10 overflow-hidden mb-3">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/3 size-3 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
      <div className="absolute top-1/4 left-2/3 size-3 bg-primary rounded-full shadow-[0_0_10px_rgba(0,119,237,0.8)]"></div>
      <div className="absolute bottom-4 left-4 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
        <div className="text-[8px] font-black opacity-60 uppercase">
          Driver Info
        </div>
        <div className="text-[10px] font-bold text-amber-500">WP-CAT-2041</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white/5 p-2 rounded-lg border border-white/10">
        <div className="text-[8px] opacity-40">Fuel Usage</div>
        <div className="text-[10px] font-black text-amber-500">
          82% Efficiency
        </div>
      </div>
      <div className="bg-white/5 p-2 rounded-lg border border-white/10">
        <div className="text-[8px] opacity-40">Deliveries</div>
        <div className="text-[10px] font-black text-emerald-500">
          14 Completed
        </div>
      </div>
    </div>
  </div>
);

// Education UI Sub-component
const EducationView = () => (
  <div className="flex flex-col h-full bg-[#fafafa] dark:bg-[#0c0c0c] p-5 font-sans overflow-hidden text-left">
    <div className="flex justify-between items-center mb-6">
      <div className="h-6 w-32 bg-primary/10 rounded-lg border border-primary/20 flex items-center px-2">
        <div className="size-2 rounded-full bg-primary mr-2"></div>
        <span className="text-[8px] font-black text-primary uppercase">
          Student Portal
        </span>
      </div>
      <Users size={16} className="opacity-20" />
    </div>
    <div className="space-y-3 flex-1">
      {[
        { name: "Advanced Level Physics", students: 124 },
        { name: "Ordinary Level Math", students: 86 },
        { name: "ICT - Grade 11", students: 42 },
      ].map((cls, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 rounded-xl border border-black/5 dark:border-white/10 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div
              className={`size-8 rounded-lg flex items-center justify-center text-white ${i === 0 ? "bg-pink-500" : "bg-purple-500"}`}
            >
              <Users size={14} />
            </div>
            <div>
              <div className="text-[10px] font-black truncate">{cls.name}</div>
              <div className="text-[8px] opacity-40 font-bold">
                {cls.students} Students Active
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex gap-2">
      <div className="flex-1 h-8 rounded-lg bg-primary text-white text-[9px] font-black flex items-center justify-center uppercase tracking-widest cursor-default">
        Attendance QR
      </div>
    </div>
  </div>
);

// Healthcare UI Sub-component
const HealthcareView = () => (
  <div className="flex flex-col h-full bg-white dark:bg-[#0c0c0c] p-4 font-sans overflow-hidden text-left">
    <div className="flex items-center gap-2 mb-6">
      <div className="size-8 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
        <Activity size={18} />
      </div>
      <div>
        <div className="text-[10px] font-black tracking-tight">
          Pharmacy Suite
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 flex-1">
      <div className="p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
        <div className="text-[8px] font-black text-cyan-500 uppercase mb-1 flex items-center gap-2 italic">
          <Activity size={8} /> Prescriptions
        </div>
        <div className="text-xl font-black italic">24</div>
      </div>
      <div className="bg-[#f8f9fa] dark:bg-zinc-900 p-4 rounded-2xl border border-black/5 dark:border-white/10">
        <div className="text-[8px] font-black opacity-40 uppercase mb-2">
          Stock Alert
        </div>
        <div className="text-[10px] font-bold text-rose-500">Low Inventory</div>
      </div>
    </div>
  </div>
);

const DASHBOARD_MODES = [
  {
    id: "pos",
    name: "Modern POS Terminal",
    accent: "#0077ED",
    icon: ShoppingCart,
  },
  {
    id: "erp",
    name: "Enterprise ERP",
    accent: "#10b981",
    icon: Package,
  },
  {
    id: "analytics",
    name: "Business Intelligence",
    accent: "#8b5cf6",
    icon: BarChart3,
  },
  {
    id: "fleet",
    name: "Fleet Tracking",
    accent: "#f59e0b",
    icon: Truck,
  },
  {
    id: "education",
    name: "Tuition Management",
    accent: "#ec4899",
    icon: Users,
  },
  {
    id: "healthcare",
    name: "Pharmacy Suite",
    accent: "#06b6d4",
    icon: Activity,
  },
];

// POS UI Sub-component
const POSView = () => (
  <div className="flex flex-col h-full bg-[#f8f9fa] dark:bg-[#0c0c0c] p-4 font-sans">
    <div className="flex gap-4 mb-4 overflow-hidden">
      {["Grocery", "Bakery", "Beverage", "Snacks"].map((cat, i) => (
        <div
          key={i}
          className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-[10px] font-bold shadow-sm shrink-0"
        >
          {cat}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3 flex-1 overflow-hidden">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="aspect-square bg-white dark:bg-zinc-900 rounded-xl border border-black/5 dark:border-white/5 p-2 flex flex-col justify-between shadow-sm"
        >
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Package size={16} />
          </div>
          <div className="mt-2">
            <div className="text-[9px] font-bold opacity-80 truncate">
              Item {i}00{i}
            </div>
            <div className="text-[10px] font-black text-primary">
              LKR {i * 120}.00
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 p-4 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">
          Grand Total
        </span>
        <span className="text-lg font-black tracking-tight">LKR 4,250.00</span>
      </div>
      <div className="h-[2px] w-full bg-white/20 my-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold opacity-60">Scanning...</span>
        <div className="px-3 py-1 rounded-full bg-white/20 text-[9px] font-black uppercase tracking-tighter">
          Checkout Page
        </div>
      </div>
    </div>
  </div>
);

// ERP UI Sub-component
const ERPView = () => (
  <div className="flex h-full bg-[#f1f5f9] dark:bg-[#0c0c0c] font-sans overflow-hidden">
    <div className="w-12 border-r border-black/5 dark:border-white/10 flex flex-col items-center py-4 gap-4 shrink-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <LayoutDashboard size={18} className="text-primary" />
      <Users size={18} className="opacity-40" />
      <Package size={18} className="opacity-40" />
      <Truck size={18} className="opacity-40" />
      <Settings size={18} className="opacity-40 mt-auto" />
    </div>
    <div className="flex-1 p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div className="h-4 w-32 bg-black/5 dark:bg-white/10 rounded-full"></div>
        <div className="size-6 rounded-full bg-primary/20"></div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl shadow-sm border border-black/5 dark:border-white/10">
          <TrendingUp size={14} className="text-emerald-500 mb-2" />
          <div className="text-xs font-bold truncate">Active Shipments</div>
          <div className="text-sm font-black text-emerald-500 mt-1">
            124 Tracking
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl shadow-sm border border-black/5 dark:border-white/10">
          <Package size={14} className="text-blue-500 mb-2" />
          <div className="text-xs font-bold truncate">Stock Low</div>
          <div className="text-sm font-black text-blue-500 mt-1">
            12 Categories
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/10 h-32">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
            Monthly Logistics
          </span>
        </div>
        <div className="flex items-end gap-1.5 h-16 w-full">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-primary/20 rounded-t-md relative overflow-hidden group"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 1 }}
            >
              <div className="absolute inset-0 bg-primary opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Analytics UI Sub-component
const AnalyticsView = () => (
  <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#0c0c0c] p-5 font-sans overflow-hidden">
    <div className="flex justify-between items-end mb-6">
      <div className="flex flex-col gap-1">
        <h5 className="text-[10px] font-black uppercase tracking-widest opacity-40">
          Total Revenue
        </h5>
        <h2 className="text-2xl font-black tracking-tight text-primary">
          LKR 1,254,000
        </h2>
      </div>
      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
        <TrendingUp size={10} />
        +14.2%
      </div>
    </div>
    <div className="flex-1 grid grid-cols-1 gap-4 overflow-hidden">
      <div className="relative h-24 w-full flex items-center justify-center">
        {/* Simple SVG Chart */}
        <svg
          className="w-full h-full"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 40 L0 30 Q 25 20, 50 35 T 100 10 L 100 40 Z"
            fill="url(#gradient)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0077ED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0077ED" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 30 Q 25 20, 50 35 T 100 10"
            fill="transparent"
            stroke="#0077ED"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "70%" }}
            />
          </div>
          <div className="h-2 w-1/2 bg-black/5 dark:bg-white/10 rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500"
              initial={{ width: "0%" }}
              animate={{ width: "45%" }}
            />
          </div>
          <div className="h-2 w-3/4 bg-black/5 dark:bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export const AnimatedDashboard = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isHovered) return;
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % DASHBOARD_MODES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, mounted]);

  if (!mounted) {
    return (
      <div className="mt-16 relative mx-auto max-w-5xl aspect-[16/10] bg-zinc-900 rounded-t-[2.5rem] border-[3px] border-[#3a3a3c] animate-pulse" />
    );
  }

  return (
    <div
      className="mt-16 relative mx-auto max-w-5xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Glow */}
      <motion.div
        className="absolute -inset-10 blur-[80px] opacity-20 -z-10"
        animate={{
          background: `radial-gradient(circle at center, ${DASHBOARD_MODES[activeScreen].accent} 0%, transparent 70%)`,
        }}
        transition={{ duration: 1 }}
      />

      {/* MacBook Mockup */}
      <div className="relative mx-auto rounded-t-[2.5rem] bg-[#1d1d1f] p-3 pt-6 shadow-2xl border-[3px] border-[#3a3a3c] transition-all duration-500 group-hover:border-[#4a4a4c]">
        {/* Camera */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-800 border border-gray-700"></div>

        <div className="relative overflow-hidden rounded-t-xl bg-black aspect-[16/10] shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.02, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              {activeScreen === 0 && <POSView />}
              {activeScreen === 1 && <ERPView />}
              {activeScreen === 2 && <AnalyticsView />}
              {activeScreen === 3 && <FleetView />}
              {activeScreen === 4 && <EducationView />}
              {activeScreen === 5 && <HealthcareView />}
            </motion.div>
          </AnimatePresence>

          {/* Interactive Screen Overlay Link */}
          <div
            className="absolute inset-0 z-10 cursor-pointer pointer-events-auto"
            onClick={() => {}}
          />

          {/* Navigation Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3">
              <div className="p-2 bg-primary/20 text-primary rounded-lg">
                {React.createElement(DASHBOARD_MODES[activeScreen].icon, {
                  size: 16,
                })}
              </div>
              <div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest">
                  {DASHBOARD_MODES[activeScreen].name}
                </div>
                <div className="text-[9px] text-white/50 font-bold">
                  Interactive Module
                </div>
              </div>
            </div>

            <div className="flex gap-2 pointer-events-auto scale-90 md:scale-100">
              {DASHBOARD_MODES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreen(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    activeScreen === idx
                      ? "bg-white w-6 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div className="h-4 w-[110%] -translate-x-[4.5%] bg-[#3a3a3c] rounded-b-xl relative z-20 shadow-lg border-t border-white/5">
        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent h-1"></div>
      </div>
      <div className="h-1.5 w-[25%] mx-auto bg-[#1d1d1f] rounded-b-xl shadow-md border border-t-0 border-[#3a3a3c]"></div>

      {/* Description below dashboard */}
      <div className="mt-8 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60">
            Operational Hub {activeScreen + 1}/6 Active
          </span>
        </div>
      </div>
    </div>
  );
};
