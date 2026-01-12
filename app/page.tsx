"use client";

import Image from "next/image";
import { ArrowRight, Globe, Smartphone, Terminal, Earth, Zap, DollarSign, Headset, Star, Share, Link as LinkIcon, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { companyDetails } from "@/lib/companydetails";
import { toast } from "sonner";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-12">
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0] 
            }}
            transition={{ 
              initial: { duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default"
          >
            <div className="size-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary transition-colors">Local Tech Partner</span>
          </motion.div>

          {/* Centered Heading with Staggered Entrance */}
          <div className="flex flex-col items-center overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-primary text-xl md:text-2xl font-black uppercase tracking-[0.5em] mb-4"
            >
              Vexel Systems
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
              className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] tracking-[-0.04em] flex flex-col items-center gap-2"
            >
              <span className="text-foreground text-center">We Provide The Best</span>
              <motion.span 
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 text-center uppercase"
              >
                IT Solutions For You
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 text-foreground/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed italic"
            >
              "We bridge the gap between complex technology and your business success by providing the most advanced IT solutions tailored for you."
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link href="/pricing">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(0,119,237,0.5)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm"
              >
                View Solutions
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex flex-col items-center gap-4 mt-8"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, zIndex: 50 }}
                  className="size-10 rounded-full border-4 border-background bg-zinc-800 relative overflow-hidden cursor-pointer transition-colors"
                >
                  <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" fill unoptimized />
                </motion.div>
              ))}
            </div>
            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest flex items-center gap-2">
              <Zap size={12} className="text-primary animate-bounce" />
              Trusted by 50+ Global Enterprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 pb-32 relative bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">Our Core <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Services</span></h2>
            <div className="w-24 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Globe size={36} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-foreground text-2xl font-bold">Web Development</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  Scalable and responsive web applications built with modern frameworks and cloud-native architecture.
                </p>
              </div>
              <a className="mt-auto text-primary font-bold text-base flex items-center gap-2" href="#">
                Learn More <ArrowRight size={18} />
              </a>
            </div>
            {/* Card 2 */}
            <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Smartphone size={36} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-foreground text-2xl font-bold">Mobile Development</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  High-performance native and cross-platform mobile apps tailored for seamless user experiences.
                </p>
              </div>
              <a className="mt-auto text-primary font-bold text-base flex items-center gap-2" href="#">
                Learn More <ArrowRight size={18} />
              </a>
            </div>
            {/* Card 3 */}
            <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Terminal size={36} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-foreground text-2xl font-bold">Custom Software</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  Bespoke software solutions designed to solve your unique business challenges and drive operational efficiency.
                </p>
              </div>
              <a className="mt-auto text-primary font-bold text-base flex items-center gap-2" href="#">
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <ProcessSection />

      {/* Feature / Why Choose Us Section */}
      <section className="py-20 bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 flex flex-col gap-6 sticky top-32">
              <h2 className="text-foreground text-4xl font-black leading-tight tracking-tight">
                Why Global <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Businesses</span> Choose Vexel
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                We combine global expertise with agile delivery to provide cost-effective technology solutions that scale with your growth.
              </p>
              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-primary/20 transition-all"
                >
                  See Our Case Studies
                </motion.button>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <Earth className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-bold text-foreground mb-2">Global Expertise</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">Serving clients across 12 countries with international standards and localized support.</p>
              </div>
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <Zap className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-bold text-foreground mb-2">Agile Delivery</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">Fast-paced development cycles with weekly sprints ensuring timely and transparent project delivery.</p>
              </div>
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <DollarSign className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-bold text-foreground mb-2">Cost-Effective</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">High-quality software solutions at competitive price points, maximizing your ROI.</p>
              </div>
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <Headset className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-bold text-foreground mb-2">24/7 Support</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">Dedicated technical support across all time zones to ensure your systems never sleep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-transparent">
        <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Work</span></h2>
              <p className="text-foreground/60 max-w-md">Take a look at how we've helped our partners digitally transform their operations.</p>
            </div>
            <a className="hidden md:flex items-center gap-2 font-bold text-primary group" href="#">
              View Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="Fintech dashboard" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  unoptimized
                />
              </div>
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Fintech</span>
                <h4 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">SecurePay Dashboard</h4>
              </div>
            </div>

            <div className="group flex flex-col gap-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?auto=format&fit=crop&q=80&w=800"
                  alt="E-commerce mobile app" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  unoptimized
                />
              </div>
               <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Retail & AI</span>
                <h4 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">ShopFlow Mobile</h4>
              </div>
            </div>

            <div className="group flex flex-col gap-4 lg:col-span-1 md:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Analytics platform" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  unoptimized
                />
              </div>
               <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">SaaS</span>
                <h4 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">Insight Engine Pro</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <TechStackSection />

      {/* Testimonials & Success Stories Section */}
      <TestimonialSection />

      {/* Lead Capture CTA / Contact Form */}
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
                  <a href={`https://wa.me/${companyDetails.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hi, I want to know more about Vexel Systems.")}`} target="_blank" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
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
            <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
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
                    <input required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="John Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Email</label>
                    <input required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="john@company.com" type="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Subject</label>
                  <select className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground p-3 focus:ring-primary focus:border-primary outline-none">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Custom Software</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea required className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground p-3 focus:ring-primary focus:border-primary outline-none" placeholder="How can we help you?" rows={4}></textarea>
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
    </main>
  );
}
