

import React from 'react';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';
import { companyDetails } from '@/lib/companydetails';

/**
 * PRIVACY POLICY PAGE
 * 
 * Functional Overview:
 * - Structure: Static content page using a data-driven approach for section rendering.
 * - Data Mapping: `sections` array maps icons, titles, and content to reusable card components.
 * - Integration: Dynamically pulls company details (name, email) from `@/lib/companydetails` configuration.
 */

export default function PrivacyPolicy() {
  const lastUpdated = "January 12, 2026";

  const sections = [
    {
      icon: <Eye size={24} />,
      title: "Data Collection",
      content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request support, or communicate with us. This includes your name, email address, and any other information you choose to provide."
    },
    {
      icon: <Shield size={24} />,
      title: "How We Use Data",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Vexel Systems and our users. We also use this information to offer you tailored content—like giving you more relevant search results."
    },
    {
      icon: <Lock size={24} />,
      title: "Data Security",
      content: "We work hard to protect Vexel Systems and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use standard encryption (SSL/TLS) for all data in transit."
    },
    {
      icon: <Globe size={24} />,
      title: "International Transfers",
      content: "Information we collect may be processed in any country where we or our partners operate. By using our services, you consent to any such transfer of information outside of your country."
    },
    {
      icon: <FileText size={24} />,
      title: "Your Rights",
      content: "Depending on your location (such as the EU/GDPR), you may have rights to access, update, or delete your personal data. You can exercise these rights at any time by contacting our support team."
    },
    {
      icon: <Bell size={24} />,
      title: "Changes to Policy",
      content: "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice."
    }
  ];

  return (
    <main className="w-[90%] md:w-[80%] mx-auto max-w-4xl py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4 tracking-tight">Privacy <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Policy</span></h1>
        <p className="text-foreground/40 font-bold uppercase tracking-widest text-sm">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-20 text-foreground/70 leading-relaxed">
        <p>
          At {companyDetails.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p>
          By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {section.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
            <p className="text-foreground/60 leading-relaxed text-sm">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 rounded-[40px] bg-primary text-white text-center shadow-2xl shadow-primary/20">
        <h2 className="text-3xl font-bold mb-4">Questions about your <span className="text-transparent bg-clip-text bg-linear-to-r from-white/90 to-white/70">data?</span></h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          If you have any questions or concerns about our privacy practices, please reach out to our legal team.
        </p>
        <a 
          href={`mailto:legal@${companyDetails.contact.email.split('@')[1]}`}
          className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:brightness-105 transition-all shadow-xl"
        >
          Contact Legal Team
        </a>
      </div>
    </main>
  );
}
