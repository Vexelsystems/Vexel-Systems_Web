"use client";

import Image from "next/image";
import { ArrowRight, Globe, Smartphone, Terminal, Earth, Zap, DollarSign, Headset, Star, Share, Link as LinkIcon, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { companyDetails } from "@/lib/companydetails";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-background pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-20 lg:pb-24">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full">Global Tech Partners</span>
                <h1 className="text-foreground text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
                  Technology Made Simple for <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Your Business</span>
                </h1>
                <p className="text-foreground/60 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
                  Empowering global businesses with cutting-edge software and technology solutions delivered from the heart of Sri Lanka.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95">
                  Get Started
                </button>
                <button className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-foreground px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                  View Solutions
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  <div className="relative size-12 rounded-full border-2 border-white dark:border-black overflow-hidden hover:z-10 transition-transform hover:scale-110">
                      <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOLUXUFV74p47UgU7ODt3mnMSOM2CPSPL0mHf2QBQ7r4EYbksYwaIGJSMgouEUTd1-JxqTkA3HurMR09w_zO5h4ivcub0KPeMyJDYA6wh_CGNWtmlL_J_W9gLJ85-RDhJYVOgVmdDhu4aLjXnBTqyKxV-BTG2AygKWX914F3s13qI_LLUsCQo_qQZdtB89o6KVw4l3-PGVxCFBMQglbZjPwZgujRNBk2ungMDh10g1bSbdsYXvfMnFEnts8NmHxJ-ISp-E2qr5ni-v" alt="Client 1" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative size-12 rounded-full border-2 border-white dark:border-black overflow-hidden hover:z-10 transition-transform hover:scale-110">
                      <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZD7sQ1nehQD-zfWJqKXfnHNhYfOD8E7LJtjJLVbmivm6hNDqeYqmKJRH5XUXyMPOgbeIUuNg4p5seCquG6sE38EV9W2oyjcJ1-HRxJwW5SkOhRWATR4oNZ9xHRxW4nOn2vJky6HimRwThJo-5NH681HtNBDI6VfXD9SHYEQM7SvzAP2Di8Ltr9HB7Y-wp9CtxHABe9qnJ5sS5eM5tSMUOHJm1CS9PMwmf5GGdtD9IF1H-72syYI8a62hyzUhFIi_v1NdTUBlP6EeU" alt="Client 2" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative size-12 rounded-full border-2 border-white dark:border-black overflow-hidden hover:z-10 transition-transform hover:scale-110">
                      <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB5QkylxItf-WM73kUmrXoRPwKXNU9FFz03vO8KpCBr0DfPIIKHGVC2iT0wfx8PW2z_m2y_iProW1oyeZjx3yadbGq2bgxd9GRrhqxfdxYodexywoUXhvExpywptCWeHf3vrCW35fCNxCvMn-Wdx2vTMARcVDJXa_wPGA3JAS0llU9lT_0OfeX_gTusn7cPEYEy2za8IEp-hP45xGRJd46fusLQfcUDneA4HUTIUkD6sz7N8r_CtQqJsrdvBr09rDj9EDw4Lx569Ux" alt="Client 3" fill className="object-cover" unoptimized />
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-foreground">Trusted by 200+ companies</p>
                  <div className="flex text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[600px] aspect-square lg:aspect-square bg-linear-to-br from-primary/20 to-transparent rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern software development team" 
                  fill 
                  className="object-cover mix-blend-overlay hover:mix-blend-normal transition-all duration-500"
                  unoptimized
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/90 p-6 rounded-2xl shadow-xl flex items-center gap-4 backdrop-blur-sm">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 font-bold uppercase tracking-tighter">Uptime Guarantee</p>
                    <p className="text-2xl font-black text-foreground">99.9% Reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white dark:bg-black py-20 pb-32">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">Our Core Services</h2>
            <div className="w-24 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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
            <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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
            <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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

      {/* Feature / Why Choose Us Section */}
      <section className="py-20 bg-inner-box dark:bg-black">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 flex flex-col gap-6 sticky top-32">
              <h2 className="text-foreground text-4xl font-black leading-tight tracking-tight">
                Why Global Businesses Choose Vexel
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                We combine global expertise with agile delivery to provide cost-effective technology solutions that scale with your growth.
              </p>
              <div className="pt-4">
                <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  See Our Case Studies
                </button>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <Earth className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-bold text-foreground mb-2">Global Expertise</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">Serving clients across 12 countries with international standards and localized support.</p>
              </div>
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <Zap className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-bold text-foreground mb-2">Agile Delivery</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">Fast-paced development cycles with weekly sprints ensuring timely and transparent project delivery.</p>
              </div>
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
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
      <section className="py-20 bg-white dark:bg-black">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Selected Work</h2>
              <p className="text-foreground/60 max-w-md">Take a look at how we've helped our partners digitally transform their operations.</p>
            </div>
            <a className="hidden md:flex items-center gap-2 font-bold text-primary group" href="#">
              View Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-200">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FzcUtGu6h26UZuxhvtk8WV8LRRrQCNDIp2Z21bEXTr2CACWcfZhQxOMnQKRw3L00uLjDhOGaMwfKiAf0HDTP4WBgZbJFArBmYiQCIWAZxjKGCRUD-FDcI1iXX-v2svsixPb8_IjK4z8fHkjYoMiS1D5jcqXwyALABntA1b1kaD_AwTD3PLTlh2A-xkv642cvRtmEz5NdfeuiEKYqgC3CIaghHPIYutAd5WZfbl0HEY2ju1mrNyw_ZjGV5JLuhEGxQi21XLhvybmY" 
                alt="Fintech dashboard" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Fintech</span>
                <h4 className="text-white text-xl font-bold">SecurePay Dashboard</h4>
              </div>
            </div>
            <div className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-200">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDljWDkwYBV3mJJ1wOW0F5osaMdvcRXZUn_WdD_Xo-bk28n3w3h0Bkqa50Kqq1SvhapsjUtOdf8B7hy_6gYiTc8nQGeu5JXdUDrMKZ8o4iCjqZ36bkWQ-Fhb-inM7jgCJjom87p-ucmJ2UoByCIqKLuWhKpYKfFLHTn56cp7kk3OEPythJFEuo8u3O1SdcLphgHX9sIJD_ygnCzxUt7ewG4dOIx7kL_fyf4Z5uTzvclvoXzXoCFmoSFViUAXFDDOGMVY5uStvmyFS-R" 
                alt="E-commerce mobile app" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">E-Commerce</span>
                <h4 className="text-white text-xl font-bold">ShopFlow Mobile</h4>
              </div>
            </div>
            <div className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-200 lg:col-span-1 md:col-span-2">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbY_SuMQmAcdCJxaTlMMOgQ8bGmZy8yh_gUrLyo09Rt6tfNncI1KHjFVK33XAzFshEDFdPatAUBWVuhG3XXKOH-StT0Kdp99tMaxFF0ZTZ9KQ2pGQ9o54b9vrQIH35mEaN0hOO-CaMcsLs9G0qCKUaRnEwSi2cW5cEkV4gxKpjgVN-RlvjbqVKv_ONvjB4w5zFxkwmomr3Z_bEMGhpSvLrf1vwkRpfIk-6aJcM4rwEczaVcEMkiQS-RRPYum1Q4HNHyo0CwrGYMtcU" 
                alt="Data analytics platform" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">SaaS</span>
                <h4 className="text-white text-xl font-bold">Insight Engine Pro</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Placeholder */}
      <section className="py-20 bg-inner-box dark:bg-black/50">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] text-center">
            {/* Format Quote Icon Replacement */}
            <div className="flex justify-center mb-6 text-primary">
                <svg className="size-16" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl italic font-medium text-foreground mb-8 leading-relaxed">
              "Vexel Systems transformed our legacy infrastructure into a modern cloud powerhouse. Their team in Sri Lanka felt like a direct extension of ours in London."
            </p>
            <div className="flex flex-col items-center">
              <div className="relative size-16 rounded-full border-4 border-white dark:border-gray-800 mb-4 shadow-lg overflow-hidden">
                <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvKe1OCwZ1Pb-qZF2lAIV3xZH15233R8EdytcFN1nDazF7U99ug9mXYNzyz3RcrVZXquDEXJW_2kux_1S3GuLkmllIWceDRvKUVLFmiAJY4iZyFTnEDJPsQThV1K1VnLVp0HupeQSjUupipLqGdGn5VvrWC4WT0_BfoTezzPpyaJyvnFPZhm3cJ3KnGRj7vIegXByiozcodbJQmeS9XxV83R0rBaUK_7CX96jttclfe6UBWTxwfHTjl_J45EGqa2Mqo89OlZLbTApD" 
                    alt="John Carter" 
                    fill 
                    className="object-cover"
                    unoptimized
                />
              </div>
              <h5 className="text-lg font-bold text-foreground">John Carter</h5>
              <p className="text-sm text-primary font-bold uppercase">CEO, Blue Horizon Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture CTA / Contact Form */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">Ready to build the future of your business?</h2>
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
                <button className="bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
