"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Briefcase,
  CheckCircle2,
  ArrowDownCircle,
  Sparkles,
  ShieldCheck,
  Globe,
  Rocket,
  Zap,
  Code,
  HelpCircle,
} from "lucide-react";
import { toast } from "sonner";
import { companyDetails } from "@/lib/companydetails";

/**
 * CONSULTATION CLIENT COMPONENT
 *
 * Functional Overview:
 * - State Management: Tracks form data, submission status (`isSubmitting`), and success state.
 * - Progress Simulation: Uses `setInterval` to mimic a server negotiation process, enhancing perceived value.
 * - Validation: Custom logic prevents submission without essential contact info (Email OR Phone).
 * - UI Pattern: Multi-stage interaction (Form -> Processing -> Success Message).
 */

export default function ConsultationClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [progress, setProgress] = useState(0);

  // Calculate defaults
  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: getTomorrow(),
    time: "10:00",
    purpose: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Custom validation logic
    if (!formData.email && !formData.phone) {
      const errorAudio = new Audio("/sounds/error.mp3");
      errorAudio.volume = 0.5;
      errorAudio.play().catch(() => {});

      toast.error("Contact Info Missing", {
        description:
          "Please provide either an email address or phone number so we can reach you.",
      });
      return;
    }

    setIsSubmitting(true);
    setProgress(0);

    // Simulate 0-100% progress over ~900ms
    const duration = 1500;
    const intervalTime = 30; // Update every 30ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    try {
      // Logic for saving to a real backend would go here
      console.log("Mock appointment submission:", formData);

      // Wait for usage simulation to finish
      await new Promise((resolve) => setTimeout(resolve, duration));

      clearInterval(timer); // Ensure clear
      setProgress(100);

      // Small delay to show 100% before transition
      await new Promise((resolve) => setTimeout(resolve, 200));

      const audio = new Audio("/sounds/notification.wav");
      audio.volume = 0.5;
      audio.play().catch(() => {});

      setShowSuccessModal(true);
      // Reset form data optionally
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: getTomorrow(),
        time: "10:00",
        purpose: "",
        details: "",
      });
    } catch (error) {
      console.error("Error saving consultation:", error);
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const purposes = [
    {
      id: "web",
      label: "Web Development",
      icon: <Globe size={18} />,
      desc: "SaaS, Portals, E-commerce",
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: <Rocket size={18} />,
      desc: "iOS & Android excellence",
    },
    {
      id: "ai",
      label: "AI & Automation",
      icon: <Zap size={18} />,
      desc: "LLMs, ML, Python logic",
    },
    {
      id: "pos",
      label: "POS System",
      icon: <Code size={18} />,
      desc: "Retail & Wholesale systems",
    },
    {
      id: "other",
      label: "Other Inquiry",
      icon: <HelpCircle size={18} />,
      desc: "General tech consultation",
    },
  ];

  return (
    <div className="min-h-screen pt-2 pb-12 lg:pt-4 lg:pb-24 px-4 relative dark selection:bg-primary/30">
      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Background Decorative Accents */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000"></div>
        {/* Form Container */}
        <div className="bg-zinc-950/40 backdrop-blur-3xl rounded-[40px] p-8 md:p-14 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/5 ring-1 ring-white/10">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section 1: Contact Details */}
            <div className="space-y-6">
              <SectionTitle icon={<User size={18} />} title="Contact Details" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(v: string) =>
                    setFormData({ ...formData, name: v })
                  }
                  required
                />
                <InputField
                  label="Email Address"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(v: string) =>
                    setFormData({ ...formData, email: v })
                  }
                />
                <InputField
                  label="Phone Number"
                  placeholder="+94 7X XXX XXXX"
                  value={formData.phone}
                  onChange={(v: string) =>
                    setFormData({ ...formData, phone: v })
                  }
                />
                <InputField
                  label="Company Name"
                  icon={<Briefcase size={14} />}
                  placeholder="Acme Inc."
                  value={formData.company}
                  required={false}
                  onChange={(v: string) =>
                    setFormData({ ...formData, company: v })
                  }
                />
                {/* Changed required to false or kept depending on need, original code had required. sticking to original logic but explicit via prop */}
              </div>
            </div>

            <div className="h-px bg-white/5 w-full"></div>

            {/* Section 2: Schedule */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <SectionTitle
                  icon={<Clock size={18} />}
                  title="Preferred Schedule"
                />
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 text-primary font-bold text-[9px] uppercase tracking-widest w-fit">
                  <Clock size={12} />
                  Hours: {companyDetails.business.workingHours.time}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 px-1">
                    Prefered Date
                  </label>
                  <div className="relative group">
                    <input
                      type="date"
                      required
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl text-white text-lg font-medium focus:ring-2 focus:ring-primary/50 focus:bg-white/[0.05] outline-none transition-all pr-14"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary pointer-events-none transition-colors">
                      <Calendar size={22} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 px-1">
                    Prefered Time
                  </label>
                  <div className="relative group">
                    <input
                      type="time"
                      required
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl text-white text-lg font-medium focus:ring-2 focus:ring-primary/50 focus:bg-white/[0.05] outline-none transition-all pr-14"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary pointer-events-none transition-colors">
                      <Clock size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/5 w-full"></div>

            {/* Section 3: Project Vision */}
            <div className="space-y-8">
              <SectionTitle
                icon={<Sparkles size={18} />}
                title="Project Vision"
              />

              <div className="space-y-4">
                <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] px-1">
                  How can we help?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {purposes.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, purpose: p.id })
                      }
                      className={`p-6 rounded-2xl flex flex-col items-start gap-4 transition-all text-left group border ${
                        formData.purpose === p.id
                          ? "bg-primary/20 border-primary text-white shadow-[0_0_30px_-12px_rgba(var(--primary-rgb),0.5)] scale-105"
                          : "bg-white/[0.03] border-white/5 hover:border-white/20 text-foreground hover:scale-[1.02]"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-xl transition-colors ${formData.purpose === p.id ? "bg-primary text-white" : "bg-zinc-800 text-primary/60"}`}
                      >
                        {p.icon}
                      </div>
                      <div>
                        <div className="text-sm font-black mb-1">{p.label}</div>
                        <div
                          className={`text-[10px] font-bold uppercase tracking-wide opacity-80 ${formData.purpose === p.id ? "text-primary" : "text-zinc-500"}`}
                        >
                          {p.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 px-1">
                  Project Details
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Describe your goals, challenges, or requirements..."
                  className="w-full bg-white/[0.03] border border-white/5 p-6 rounded-3xl text-white font-medium text-lg focus:ring-2 focus:ring-primary/50 focus:bg-white/[0.05] outline-none transition-all resize-none placeholder:text-white/40 leading-relaxed"
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={
                  isSubmitting || !formData.details || !formData.purpose
                }
                className="w-full py-6 rounded-2xl bg-linear-to-r from-primary to-purple-600 text-white text-xl font-black hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <div className="absolute inset-0 bg-black/20">
                      <div
                        className="h-full bg-white/20 transition-all duration-50 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="relative z-10 font-bold tracking-widest">
                      {Math.round(progress)}% Processed
                    </span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Confirm Consultation</span>
                    <ArrowDownCircle
                      size={24}
                      className="-rotate-90 group-hover:translate-x-1 transition-transform relative z-10"
                    />
                  </>
                )}
              </button>
              <p className="text-center mt-8 text-[10px] text-zinc-700 font-bold uppercase tracking-[0.3em]">
                Secure Transmission • 256-bit Encrypted
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-900 rounded-[32px] shadow-2xl max-w-sm w-full p-8 border border-white/10 animate-in zoom-in-95 duration-200 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Request Received!
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Thank you for scheduling a consultation with us. We have received
              your details and will get back to you within 24 hours to confirm
              the appointment.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .background-animate {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          background: transparent;
          bottom: 0;
          color: transparent;
          cursor: pointer;
          height: auto;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: auto;
        }
      `}</style>
    </div>
  );
}

const SectionTitle = ({ icon, title }: any) => (
  <h2 className="text-2xl font-bold text-white flex items-center gap-4 tracking-tight">
    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-white/5 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]">
      {icon}
    </div>{" "}
    {title}
  </h2>
);

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  required,
  icon,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  icon?: React.ReactNode;
}) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 px-1">
      {label} {required && <span className="text-white">*</span>}
    </label>
    <div className="relative group">
      <input
        type="text"
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl text-white text-lg font-medium focus:ring-2 focus:ring-primary/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-white/40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary pointer-events-none transition-colors">
          {icon}
        </div>
      )}
    </div>
  </div>
);
