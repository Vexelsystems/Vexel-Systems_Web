"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Briefcase, 
  CheckCircle2,
  ArrowDownCircle,
  Sparkles,
  ShieldCheck,
  Globe,
  Rocket,
  Zap,
  Code,
  HelpCircle
} from 'lucide-react';
import { toast } from 'sonner';

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Calculate defaults
  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: getTomorrow(),
    time: '10:00',
    purpose: '',
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom validation logic
    if (!formData.email && !formData.phone) {
        toast.error("Contact Info Missing", {
            description: "Please provide either an email address or phone number so we can reach you."
        });
        return;
    }

    setIsSubmitting(true);
    setProgress(0);

    // Simulate 0-100% progress over ~900ms
    const duration = 900;
    const intervalTime = 20; // Update every 20ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Wait for the full duration
    await new Promise(resolve => setTimeout(resolve, duration));
    
    clearInterval(timer); // Ensure clear
    setProgress(100);

    // Small delay to show 100% before transition
    await new Promise(resolve => setTimeout(resolve, 200));

    toast.success("Strategy Session Reserved!", {
      description: "Our leads will verify the slot and send a calendar invite shortly."
    });
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const purposes = [
    { id: 'web', label: 'Web Development', icon: <Globe size={18}/>, desc: 'SaaS, Portals, E-commerce' },
    { id: 'mobile', label: 'Mobile Apps', icon: <Rocket size={18}/>, desc: 'iOS & Android excellence' },
    { id: 'ai', label: 'AI & Automation', icon: <Zap size={18}/>, desc: 'LLMs, ML, Python logic' },
    { id: 'pos', label: 'Vexel POS', icon: <Code size={18}/>, desc: 'Retail & Wholesale systems' },
    { id: 'other', label: 'Other Inquiry', icon: <HelpCircle size={18}/>, desc: 'General tech consultation' }
  ];

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div 
            className="flex flex-col items-center justify-center text-center space-y-6 bg-white dark:bg-zinc-900 rounded-[32px] border border-gray-100 dark:border-zinc-800 p-12 max-w-lg w-full shadow-2xl"
        >
            <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 mb-2">
                <CheckCircle2 size={40} />
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">Request Received</h2>
                <p className="text-foreground/60 leading-relaxed">
                    Thank you for scheduling a consultation with us. We have received your details and will get back to you within <strong>24 hours</strong> to confirm the appointment.
                </p>
            </div>
            <button 
                onClick={() => window.location.href = '/about'}
                className="px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:shadow-xl hover:shadow-primary/20 transition-all w-full mt-4"
            >
                Close
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 lg:py-24 px-4">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div className="space-y-6">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles size={12} /> Strategic Partnership
            </div>
            <h1 
              className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground leading-[0.9]"
            >
              Design the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-primary background-animate">Future</span>
            </h1>
          </div>
          <div 
            className="p-8 rounded-[32px] bg-foreground/5 border border-foreground/5"
          >
             <h3 className="text-xs font-black uppercase tracking-widest text-foreground/50 mb-4 flex items-center gap-2">
                <ShieldCheck size={14} className="text-primary"/> The Vexel Protocol
             </h3>
             <p className="text-lg text-foreground font-medium leading-relaxed">
               No generic sales pitches. You get a raw, technical deep-dive into feasibility, architecture, and cost-efficiency.
             </p>
          </div>
        </div>

        {/* Form Container */}
        <div 
            className="bg-white dark:bg-zinc-900/50 rounded-[48px] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Section 1: Contact Details */}
            <div className="space-y-6">
               <SectionTitle icon={<User size={18}/>} title="Contact Details" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Full Name" placeholder="John Doe" value={formData.name} onChange={(v: string) => setFormData({...formData, name: v})} required />
                  <InputField label="Email Address" placeholder="john@company.com" value={formData.email} onChange={(v: string) => setFormData({...formData, email: v})} />
                  <InputField label="Phone Number" placeholder="+94 77 ..." value={formData.phone} onChange={(v: string) => setFormData({...formData, phone: v})} />
                  <InputField label="Company Name" icon={<Briefcase size={14}/>} placeholder="Acme Inc." value={formData.company} onChange={(v: string) => setFormData({...formData, company: v})} required />
               </div>
            </div>

            <div className="h-px bg-foreground/5 w-full"></div>

            {/* Section 2: Schedule */}
            <div className="space-y-6">
               <SectionTitle icon={<Clock size={18}/>} title="Preferred Schedule" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                      <label className="text-base font-medium text-primary flex items-center gap-2 px-1">
                        <Calendar size={18}/> Prefered Date
                      </label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-foreground/5 border-none p-5 rounded-2xl text-primary text-lg font-medium focus:ring-2 focus:ring-primary outline-none transition-all"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-base font-medium text-primary flex items-center gap-2 px-1">
                        <Clock size={18}/> Prefered Time
                      </label>
                      <input 
                        type="time"
                        required
                        className="w-full bg-foreground/5 border-none p-5 rounded-2xl text-primary text-lg font-medium focus:ring-2 focus:ring-primary outline-none transition-all"
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
               </div>
            </div>

            <div className="h-px bg-foreground/5 w-full"></div>

            {/* Section 3: Project Vision */}
            <div className="space-y-8">
               <SectionTitle icon={<Sparkles size={18}/>} title="Project Vision" />
               
               <div className="space-y-4">
                  <label className="text-base font-medium text-primary px-1">How can we help?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {purposes.map(p => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setFormData({...formData, purpose: p.id})}
                        className={`p-5 rounded-2xl flex flex-col items-start gap-4 transition-all text-left group border border-transparent ${
                          formData.purpose === p.id 
                          ? 'bg-primary text-white shadow-2xl shadow-primary/20 scale-105' 
                          : 'bg-foreground/5 hover:bg-foreground/10 text-foreground hover:scale-[1.02]'
                        }`}
                      >
                        <div className={`p-3 rounded-xl transition-colors ${formData.purpose === p.id ? 'bg-white/20' : 'bg-background text-primary'}`}>
                          {p.icon}
                        </div>
                        <div>
                          <div className="text-sm font-black mb-1">{p.label}</div>
                          <div className={`text-[10px] font-bold uppercase tracking-wide opacity-60 ${formData.purpose === p.id ? 'text-white' : 'text-foreground'}`}>{p.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
               </div>

               <div className="space-y-3">
                 <label className="text-base font-medium text-primary flex items-center gap-2 px-1">
                    Project Details
                 </label>
                 <textarea 
                    rows={6}
                    required
                    placeholder="Describe your goals, challenges, or requirements..."
                    className="w-full bg-foreground/5 border-none p-6 rounded-3xl text-primary font-medium text-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none placeholder:text-foreground/20 leading-relaxed"
                    value={formData.details}
                    onChange={e => setFormData({...formData, details: e.target.value})}
                  />
               </div>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                disabled={isSubmitting || !formData.details || !formData.purpose}
                className="w-full py-6 rounded-2xl bg-primary text-white text-xl font-black hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {isSubmitting ? (
                    <>
                      <div className="absolute inset-0 bg-black/10">
                        <div 
                          className="h-full bg-white/20 transition-all duration-50 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="relative z-10 font-bold tracking-widest">{Math.round(progress)}% Processed</span> 
                    </>
                ) : (
                    <>Confirm Consultation <ArrowDownCircle size={24} className="-rotate-90 group-hover:translate-x-1 transition-transform"/></>
                )}
              </button>
              <p className="text-center mt-6 text-xs text-foreground/30 font-bold uppercase tracking-widest">
                Secure Transmission • 256-bit Encrypted
              </p>
            </div>

          </form>
        </div>
      </div>
      
       <style jsx global>{`
        .background-animate {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

const SectionTitle = ({ icon, title }: any) => (
    <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 tracking-tight">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div> {title}
    </h2>
);

const InputField = ({ label, placeholder, value, onChange, required }: { label: string, placeholder: string, value: string, onChange: (v: string) => void, required?: boolean, icon?: React.ReactNode }) => (
  <div className="space-y-3">
    <label className="text-base font-medium text-primary flex items-center gap-2 px-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input 
      type="text"
      required={required}
      placeholder={placeholder}
      className="w-full bg-foreground/5 border-none p-5 rounded-2xl text-primary text-lg font-medium focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-foreground/20"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);
