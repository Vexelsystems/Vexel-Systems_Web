"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Share, MapPin } from "lucide-react";
import { companyDetails } from "@/lib/companydetails";
import { toast } from "sonner";

export function ContactSection() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl lg:text-4xl font-black text-foreground leading-tight">Ready to build the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">future</span> of your business?</h2>
              <p className="text-lg text-foreground/60">
                Whether you're a startup or an enterprise, we have the technical prowess to help you scale. Reach out for a discovery session.
              </p>
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold text-foreground">{companyDetails.contact.email}</span>
                </div>
                  <a href={`tel:${companyDetails.contact.phone}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold text-foreground">{companyDetails.contact.phone}</span>
                  </a>
                  <a href={`https://wa.me/${companyDetails.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hi, I want to know more about Vexel Systems.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="size-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                      <Share size={20} />
                    </div>
                    <span className="font-bold text-foreground">Chat on WhatsApp</span>
                  </a>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bold text-foreground">{companyDetails.address.city}, {companyDetails.address.country}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/5 border border-gray-200 dark:border-gray-800">
              <form className="flex flex-col gap-6" onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Inquiry received!", {
                    description: "Our team will contact you shortly."
                  });
                  (e.target as HTMLFormElement).reset();
              }}>
                {/* ... fields ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Name</label>
                    <input required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="John Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Email</label>
                    <input required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="john@company.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Mobile Number</label>
                    <input required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="+1 (555) 123-4567" type="tel" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                    <select id="subject" className="rounded-lg border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none">
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="How can we help you?" rows={4}></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all" 
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
