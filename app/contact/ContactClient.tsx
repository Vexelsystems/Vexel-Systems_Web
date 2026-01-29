"use client";

import { MapPin, Phone, Mail, Send, ChevronsUpDown, Facebook, Twitter, Linkedin, Clock, ExternalLink, MessageSquare, Calendar } from "lucide-react";
import { toast } from "sonner";
import { companyDetails } from "@/lib/companydetails";
import Link from "next/link";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

/**
 * CONTACT CLIENT COMPONENT
 * 
 * Functional Overview:
 * - Integrations: 
 *   1. Google Maps Iframe for location display.
 *   2. `sonner` for toast notifications on form submission.
 * - Interactivity: Dispatches `vexel-chat-open` custom event to trigger the global LiveChat widget.
 * - Data Source: Pulls company info (address, social links) from centralized configuration.
 */

export default function Contact() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Page Heading */}
      <section className="bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md py-12 lg:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <MotionWrapper type="slideUp" duration={1.2}>
            <h1 className="text-foreground text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">Talk to an <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Expert</span></h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Partner with {companyDetails.name} for global technology solutions and innovative software development. We're here to turn your vision into reality.
            </p>
          </MotionWrapper>
          
          {/* New Consultation Link */}
          <MotionWrapper delay={0.2}>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-2xl inline-flex flex-col sm:flex-row sm:items-center gap-4">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary text-white rounded-lg">
                      <Calendar size={20} />
                  </div>
                  <div>
                      <h3 className="font-bold text-foreground">Need a deep dive?</h3>
                      <p className="text-sm text-foreground/60">Schedule a dedicated strategy session with our leads.</p>
                  </div>
               </div>
               <Link href="/consultation" className="px-6 py-3 bg-primary text-white font-bold rounded-xl whitespace-nowrap text-sm">
                  Book Consultation
               </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Form */}
            <section className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 h-fit">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent successfully!", {
                  description: "Thank you for reaching out. We will get back to you shortly."
                });
                (e.target as HTMLFormElement).reset();
              }}>
                {/* ... fields ... */}
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+94 76 123 4567"
                    className="w-full px-4 py-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                  <button 
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('vexel-chat-open'))}
                    className="flex-1 py-4 bg-white dark:bg-zinc-900 text-foreground border border-gray-200 dark:border-gray-800 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Vexel Chat</span>
                    <MessageSquare size={18} className="text-primary" />
                  </button>
                </div>
              </form>
            </section>

            {/* Right Column: Contact Details */}
            <section className="flex flex-col justify-between py-4">
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Our Office</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {companyDetails.address.street},<br/>
                      {companyDetails.address.city} {companyDetails.address.postalCode},<br/>
                      {companyDetails.address.country}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Phone & WhatsApp</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {companyDetails.contact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {companyDetails.contact.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Connect with us</h3>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all text-foreground/60" href={companyDetails.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook size={20} />
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all text-foreground/60" href={companyDetails.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} />
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all text-foreground/60" href={companyDetails.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Google Maps Section */}
          <section className="mt-20 lg:mt-32">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 h-[450px] relative">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Loading Map...</span>
              </div>
              <iframe 
                allowFullScreen 
                className="w-full h-full relative z-10 border-0 transition-all duration-700" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.187154846024!2d80.47891718975535!3d8.758121568317518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc1507cf1514a3%3A0xbc356c1f5bf8b349!2sVairavapuliyankulam%2C%20Vavuniya!5e0!3m2!1sen!2slk!4v1769667800972!5m2!1sen!2slk" 
                title="Office Location Map"
              >
              </iframe>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-foreground/60 text-sm">
                <Clock size={16} />
                <span>Opening Hours: {companyDetails.business.workingHours.days}, {companyDetails.business.workingHours.time} ({companyDetails.business.workingHours.timezone.split(' ')[0]})</span>
              </div>
              <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Get Directions
                <ExternalLink size={14} />
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
