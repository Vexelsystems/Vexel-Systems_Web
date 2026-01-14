"use client";

import React from 'react';
import Link from 'next/link';
import { Check, CheckCircle, Phone, Monitor, User, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const nextSteps = [
  { id: 1, title: "Form Received", description: "We've got your details and are reviewing them.", icon: <FileText className="w-6 h-6" /> },
  { id: 2, title: "Consultation Call", description: "A quick chat to understand your specific needs.", icon: <Phone className="w-6 h-6" /> },
  { id: 3, title: "Personalized Demo", description: "A deep dive into Vexel features for your business.", icon: <Monitor className="w-6 h-6" /> },
  { id: 4, title: "Free Trial", description: "Get hands-on with your own dedicated account.", icon: <User className="w-6 h-6" /> }
];

export default function DemoSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
      <div className="max-w-[960px] w-full flex flex-col items-center">
        {/* Hero Success Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="size-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4 border border-primary/20 shadow-lg shadow-primary/10">
            <Check className="w-10 h-10 stroke-3" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Thanks for reaching out!
          </h1>
          <h2 className="text-[22px] font-semibold text-primary/90">
            Our POS Experts Will Contact You Within 24 Hours
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-foreground/60">
            We've received your request and are preparing a personalized experience for your business.
          </p>
        </div>

        {/* What Happens Next Section */}
        <div className="w-full bg-card rounded-xl p-10 shadow-sm border border-primary/10 mb-12 relative overflow-hidden">
           {/* Decorative background glow */}
           <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
           
          <h3 className="text-xl font-bold mb-10 text-center">What Happens Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {nextSteps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 size-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1 opacity-60">Step {step.id}</h4>
                <p className="font-semibold text-lg mb-1">{step.title}</p>
                <p className="text-sm text-foreground/50">{step.description}</p>
                {step.id < 4 && (
                  <div className="hidden md:block absolute top-6 left-[60%] right-[-40%] h-[2px] bg-primary/20 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="w-full flex flex-col items-center">
          <h3 className="text-lg font-bold mb-6">While you wait, explore our resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Resource Card 1 */}
            <Link href="#" className="flex items-center p-6 bg-card border border-primary/10 rounded-xl hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Vexel Blog</h4>
                <p className="text-sm text-foreground/50">Insights and tips on scaling your retail business.</p>
              </div>
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-2 w-5 h-5" />
            </Link>
            {/* Resource Card 2 */}
            <Link href="/portfolio" className="flex items-center p-6 bg-card border border-primary/10 rounded-xl hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-5 group-hover:bg-primary group-hover:text-white transition-colors">
                 <CheckCircle className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Case Studies</h4>
                <p className="text-sm text-foreground/50">How 500+ businesses grow with Vexel POS.</p>
              </div>
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-16 flex flex-col items-center text-center">
          <Link href="/" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-primary/20 mb-8">
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-foreground/40 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted by leading retailers worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}
