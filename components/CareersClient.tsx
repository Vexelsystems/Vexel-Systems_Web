"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jobPositions } from '@/lib/career-data';
import { Briefcase, MapPin, Clock, DollarSign, Upload, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    portfolio: '',
    talent: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const isFormValid = selectedJob && formData.fullName && formData.mobile && formData.talent && formData.file;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Application submitted successfully!");
      setFormData({ fullName: '', email: '', mobile: '', portfolio: '', talent: '', file: null }); // Reset form
      setSelectedJob(null);
    }, 2000);
  };

  return (
    <div className="container w-[90%] md:w-[80%] mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
      {/* Job Listings */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
        {jobPositions.map((job) => (
          <div 
            key={job.id}
            className="bg-white dark:bg-white/5 rounded-[32px] border border-black/5 dark:border-white/5 overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5"
          >
            <button 
              onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              className="w-full p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">{job.department}</span>
                  <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></span>
                  <span className="text-sm font-medium text-foreground/40">{job.type}</span>
                </div>
                <h3 className="text-2xl font-bold">{job.title}</h3>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-foreground/80">{job.salary}</p>
                  <p className="text-xs text-foreground/40">{job.location}</p>
                </div>
                <div className={`p-2 rounded-full transition-all duration-300 ${selectedJob === job.id ? 'bg-primary text-white rotate-180' : 'bg-black/5 dark:bg-white/5 text-foreground/40'}`}>
                  <ChevronDown size={24} />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {selectedJob === job.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-4 border-t border-black/5 dark:border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Briefcase size={18} className="text-primary" />
                          Requirements
                        </h4>
                        <ul className="space-y-3">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex gap-3 text-foreground/60 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-primary" />
                          Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {job.responsibilities.map((res, i) => (
                            <li key={i} className="flex gap-3 text-foreground/60 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          const form = document.getElementById('apply-form');
                          form?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:brightness-105 transition-all shadow-lg shadow-primary/20"
                      >
                        Apply for this role
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Hidden Talent CTA */}
        <div className="p-12 bg-black text-white rounded-[40px] text-center mt-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/10 blur-[100px]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Don't see your role?</h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              We're always looking for exceptional talent. Tell us what you're passionate about 
              and we'll let you know when the perfect spot opens up.
            </p>
            <button 
              onClick={() => {
                setSelectedJob('custom');
                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all"
            >
              Submit Open Application
            </button>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <aside id="apply-form" className="lg:sticky lg:top-32 h-fit">
        <div className="bg-white dark:bg-white/5 rounded-[40px] border border-black/5 dark:border-white/5 p-10 shadow-2xl shadow-primary/5">
          <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
          <p className="text-foreground/40 text-sm mb-8">
            {selectedJob === 'custom' 
              ? "Tell us about your unique talents and how you can help Vexel." 
              : selectedJob 
                ? `Applying for ${jobPositions.find(j => j.id === selectedJob)?.title}` 
                : "Select a position from the left to begin your application."}
          </p>

          {isSuccess ? (
            <div
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2">Application Received!</h4>
              <p className="text-foreground/60 text-sm mb-8">
                Thank you for applying. Our HR team will review your application and get back to you within 3-5 business days.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary font-bold hover:underline"
              >
                Submit another?
              </button>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-6">
              <div>
                <label className="text-sm font-bold mb-2 block">Full Name</label>
                <input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                  type="text" 
                  placeholder="Jane Perera" 
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-all" 
                />
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block">Email Address</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-all" 
                />
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block">Mobile Number</label>
                <input 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required 
                  type="tel" 
                  placeholder="+94 77 123 4567" 
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-all" 
                />
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block">Portfolio / LinkedIn URL</label>
                <input 
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  type="url" 
                  placeholder="https://..." 
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-all" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold mb-2 block">Tell us your talent</label>
                <textarea 
                  name="talent"
                  value={formData.talent}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe your expertise and what you're looking for..."
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-all min-h-[120px] resize-none"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold mb-2 block">Upload Resume (PDF)</label>
                <div className="relative group">
                  <input 
                    required
                    type="file" 
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`w-full border-2 border-dashed ${formData.file ? 'border-primary/50 bg-primary/5' : 'border-black/10 dark:border-white/10'} rounded-2xl p-6 text-center group-hover:bg-primary/5 group-hover:border-primary/50 transition-all`}>
                    <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mx-auto mb-3">
                      {formData.file ? <CheckCircle2 size={20} /> : <Upload size={20} />}
                    </div>
                    <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
                      {formData.file ? formData.file.name : "Click to upload CV"}
                    </p>
                    <p className="text-[10px] text-foreground/40 mt-1">Max file size: 5MB</p>
                  </div>
                </div>
              </div>

              <button 
                disabled={isSubmitting || !isFormValid}
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:brightness-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Application
                  </>
                )}
              </button>
              {!selectedJob && (
                <p className="text-[10px] text-red-500 text-center font-bold uppercase tracking-widest mt-2 animate-pulse">
                  Please select a position first
                </p>
              )}
            </form>
          )}
        </div>
      </aside>
    </div>
  );
}
