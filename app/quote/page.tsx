import Link from "next/link";
import { Globe, Smartphone, Store, Building, Bot, Timer, ShieldCheck, CheckCircle, Shield, Users, Phone, CloudUpload } from "lucide-react";

/**
 * QUOTE REQUEST PAGE
 * 
 * Functional Overview:
 * - Form Structure: Three-part segmented form (Type, Logistics, Details).
 * - UX Elements: 
 *   - Visual Radio Cards for project selection.
 *   - Drag-and-drop zone simulation for file uploads.
 * - Layout: Sidebar layout (`lg:col-span-4`) provides trust signals (stats, guarantees) alongside the form.
 */

export default function Quote() {
  return (
    <main className="flex-1 flex justify-center py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Form Column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em]">Let's Build Something <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Great</span></h1>
            <p className="text-foreground/80 text-lg font-normal leading-normal">Tell us about your project and get a detailed response within 24 hours.</p>
          </div>
          
          <form className="flex flex-col gap-10">
            {/* Section 1: Project Type */}
            <div className="flex flex-col gap-5">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">1. What type of project is it?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                <label className="cursor-pointer group">
                  <input defaultChecked className="hidden peer" name="project_type" type="radio"/>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Globe size={32} />
                    </div>
                    <p className="text-foreground text-sm font-medium text-center">Web Dev</p>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="project_type" type="radio"/>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Smartphone size={32} />
                    </div>
                    <p className="text-foreground text-sm font-medium text-center">Mobile Apps</p>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="project_type" type="radio"/>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Store size={32} />
                    </div>
                    <p className="text-foreground text-sm font-medium text-center">POS Systems</p>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="project_type" type="radio"/>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Building size={32} />
                    </div>
                    <p className="text-foreground text-sm font-medium text-center">Enterprise</p>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="project_type" type="radio"/>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Bot size={32} />
                    </div>
                    <p className="text-foreground text-sm font-medium text-center">AI & Data</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 2: Logistics */}
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">2. Project Logistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col gap-4">
                  <label htmlFor="budget" className="text-foreground text-sm font-bold">Estimated Budget</label>
                  <select id="budget" className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:border-primary focus:ring-primary h-12 outline-none px-3">
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                  <p className="text-xs text-foreground/70">Prices are indicative and based on general project scale.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-foreground text-sm font-bold">Timeline Picker</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex-1">
                      <input defaultChecked className="hidden peer" name="timeline" type="radio"/>
                      <div className="flex h-12 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs font-semibold cursor-pointer transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-gray-100 dark:hover:bg-gray-800">Urgent</div>
                    </label>
                    <label className="flex-1">
                      <input className="hidden peer" name="timeline" type="radio"/>
                      <div className="flex h-12 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs font-semibold cursor-pointer transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-gray-100 dark:hover:bg-gray-800">1-3 Mo</div>
                    </label>
                    <label className="flex-1">
                      <input className="hidden peer" name="timeline" type="radio"/>
                      <div className="flex h-12 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs font-semibold cursor-pointer transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-gray-100 dark:hover:bg-gray-800">3-6 Mo</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Details & Files */}
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">3. Requirements & Files</h2>
              <div className="flex flex-col gap-4">
                <label htmlFor="project_details" className="text-foreground text-sm font-bold">Project Details</label>
                <textarea id="project_details" className="w-full rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary outline-none p-4" placeholder="Describe your project goals, features, and any specific requirements..." rows={4}></textarea>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-foreground text-sm font-bold">Upload BRD or Wireframes (Optional)</label>
                <div className="border-2 border-dashed border-primary/30 bg-primary/5 rounded-xl p-10 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-primary/10 cursor-pointer">
                  <CloudUpload className="text-primary" size={40} />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-foreground/50 mt-1">PDF, DOCX, PNG, or Figma links (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Area */}
            <div className="bg-primary/10 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-foreground font-bold">Almost ready!</p>
                <p className="text-sm text-foreground/60">By submitting, you agree to our privacy policy.</p>
              </div>
              <button className="flex w-full md:w-auto min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-black leading-normal shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95" type="submit">
                <span>Submit Quote Request</span>
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Response Guarantee Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                <Timer size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Fast Response</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              Our team of architects will review your project and provide a preliminary estimate and technical consultation within <span className="text-primary font-bold">24 hours</span>.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
              <ShieldCheck size={18} />
              Guaranteed Response
            </div>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-foreground mb-6">Why work <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">with us?</span></h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4">
                <div className="text-primary mt-1">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">100+ Projects Delivered</p>
                  <p className="text-xs text-foreground/70">From startups to Fortune 500 companies.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-primary mt-1">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Data Privacy Guaranteed</p>
                  <p className="text-xs text-foreground/70">Full NDA protection for your ideas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-primary mt-1">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Dedicated Team</p>
                  <p className="text-xs text-foreground/70">Fixed development squads for every project.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl text-center">
              <p className="text-2xl font-black text-primary">98%</p>
              <p className="text-[10px] uppercase font-bold text-foreground/70">Success Rate</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl text-center">
              <p className="text-2xl font-black text-primary">15+</p>
              <p className="text-[10px] uppercase font-bold text-foreground/70">Countries Served</p>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-primary p-6 rounded-xl text-white">
            <h4 className="font-bold mb-2">Need immediate help?</h4>
            <p className="text-sm opacity-90 mb-4">Talk to an expert right now about your technical architecture.</p>
            <a className="inline-flex items-center gap-2 text-sm font-bold bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors" href="#">
              <Phone size={18} />
              Book a 15min Call
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
