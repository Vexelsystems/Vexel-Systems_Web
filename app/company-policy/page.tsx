"use client";

import React from 'react';
import { ShieldCheck, Target, Heart, Users, Recycle, Scale } from 'lucide-react';
import { companyDetails } from '@/lib/companydetails';

export default function CompanyPolicy() {
  const categories = [
    {
      icon: <Target size={24} />,
      title: "Business Ethics",
      content: "We conduct our business with integrity and transparency. We strictly prohibit bribery, corruption, and unethical competitive practices across all our global operations."
    },
    {
      icon: <Recycle size={24} />,
      title: "Sustainability",
      content: "Vexel Systems is committed to reducing our environmental footprint. We prioritize cloud-based infrastructure that utilizes renewable energy and promote paperless office environments."
    },
    {
      icon: <Heart size={24} />,
      title: "Social Responsibility",
      content: "We believe in giving back to the communities where we operate. This includes supporting local tech education initiatives and ensuring fair labor practices throughout our supply chain."
    },
    {
      icon: <Users size={24} />,
      title: "Diversity & Inclusion",
      content: "We foster a culture where everyone feels they belong. We are an equal opportunity employer and value the diverse perspectives that a global workforce brings to our innovation."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Quality Assurance",
      content: "Our 'Vexel Standard' ensures that every piece of software we deliver undergoes rigorous testing and meets the highest industry benchmarks for security and reliability."
    },
    {
      icon: <Scale size={24} />,
      title: "Legal Compliance",
      content: "We adhere strictly to the laws and regulations of every country we operate in, covering everything from financial reporting to data protection and international trade."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4 tracking-tight">Our Company <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Policy</span></h1>
        <p className="text-primary uppercase tracking-widest text-sm">
          The Vexel Standard of Excellence
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-20 text-foreground/70 leading-relaxed text-center">
        <p className="text-xl">
          At {companyDetails.name}, our policies are not just rules—they are the foundation of our culture and our promise to clients, employees, and the global community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="p-8 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all group flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/20 text-white flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              {category.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
            <p className="text-foreground/60 leading-relaxed">
              {category.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 rounded-[48px] bg-zinc-900 border border-white/5 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 italic">"Excellence is not an act, but a habit."</h2>
          <p className="text-primary mb-8 max-w-3xl mx-auto">
            At {companyDetails.name}, we are committed to conducting our business with the highest standards of integrity, 
            transparency, and social responsibility. Our policies guide our operations and ensure we deliver exceptional 
            value to our clients, partners, and communities.
          </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">ISO 9001 Certified</div>
          <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">GDPR Compliant</div>
          <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Carbon Neutral Cloud</div>
        </div>
      </div>
    </main>
  );
}
