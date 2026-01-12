import Image from "next/image";
import { ChevronRight, Info, HelpCircle, Shield, Settings, Timer, Trash2, RotateCcw, Cookie, X } from "lucide-react";

export default function CookiePolicy() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 text-sm">
        <a className="text-foreground/60 hover:text-primary transition-colors" href="/">Home</a>
        <ChevronRight size={16} className="text-foreground/40" />
        <span className="text-foreground/60">Legal</span>
        <ChevronRight size={16} className="text-foreground/40" />
        <span className="text-foreground font-medium">Cookie Policy</span>
      </nav>

      {/* Header Image Section */}
      <div className="relative w-full rounded-xl overflow-hidden mb-12">
        <div className="relative h-[280px] flex flex-col justify-end p-8 lg:p-12">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD7q7BCJpb3L6_LHHpZq_BqMMOO5ygoCTjdnuLCTib1MqwJcSzjsoFZebj8zj7nQHLRSZ0Qbw3X5VAHvlq2OzXbB07-N5zjS6inuFCUEjidPerL_XbeC2tmJzk3GfPxtRXdWFqWcol6SA21hKSvvitGsSYLz09oHeYz_hcr_Jb_FEAVff6aNRuukzghP-xJJ7SC9UzmttpVW0Bw-uv3eFoyxU9Hrr4pw99HFL1beFcqnTsWzKl9ThBwwhr4YUnCspQ9HS4trnOHNEw"
                alt="Abstract digital security"
                fill
                className="object-cover z-0"
                unoptimized
             />
             <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/90 z-10"></div>
          <div className="relative z-20 max-w-3xl">
            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">Cookie <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Policy</span></h1>
            <p className="text-gray-300 text-lg">Transparency at Vexel Systems: How we use cookies to improve your digital experience.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Side Navigation */}
        <aside className="lg:w-72 shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-foreground text-sm font-bold uppercase tracking-widest mb-4">Policy Navigation</h3>
              <p className="text-foreground/60 text-xs mb-6">Last updated: October 12, 2023</p>
              <nav className="flex flex-col gap-1">
                <a className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20" href="#intro">
                  <Info size={20} />
                  <span className="text-sm font-semibold">Introduction</span>
                </a>
                <a className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#what-are">
                  <HelpCircle size={20} />
                  <span className="text-sm font-medium">What are Cookies</span>
                </a>
                <a className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#types">
                  <Shield size={20} />
                  <span className="text-sm font-medium">Cookie Types</span>
                </a>
                <a className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#manage">
                  <Settings size={20} />
                  <span className="text-sm font-medium">Managing Preferences</span>
                </a>
              </nav>
            </div>
            <div className="p-6 rounded-xl bg-inner-box border border-gray-200 dark:border-gray-800">
              <h4 className="text-foreground text-sm font-bold mb-2">Need Help?</h4>
              <p className="text-foreground/60 text-xs leading-relaxed mb-4">Questions about your privacy or data usage? Contact our legal team.</p>
              <a className="text-primary text-xs font-bold hover:underline" href="/contact">Contact Privacy Officer</a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <article className="flex-1 max-w-4xl space-y-16">
          <section id="intro">
            <h2 className="text-2xl font-bold text-foreground mb-6">1. Introduction</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
              <p>At Vexel Systems, we believe in being clear and open about how we collect and use data related to you. In the spirit of transparency, this policy provides detailed information about how and when we use cookies on our websites.</p>
              <p>This Cookie Policy applies to any Vexel Systems product or service that links to this policy or incorporates it by reference. By continuing to use our services, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy.</p>
            </div>
          </section>

          <section id="what-are">
            <h2 className="text-2xl font-bold text-foreground mb-6">2. What are cookies?</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
              <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.</p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Timer className="text-primary" size={20} /> Persistent Cookies
                  </h3>
                  <p className="text-sm">These stay on your device for a set period or until you delete them. They help us recognize you over multiple sessions.</p>
                </div>
                <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Trash2 className="text-primary" size={20} /> Session Cookies
                  </h3>
                  <p className="text-sm">These are temporary and are deleted as soon as you close your web browser. They help site navigation.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="types">
            <h2 className="text-2xl font-bold text-foreground mb-6">3. Cookie Types</h2>
            {/* Cookie Category 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-xs font-bold">ESSENTIAL</span>
                <h3 className="text-lg font-bold text-foreground">Strictly Necessary Cookies</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-6">These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-inner-box text-xs font-bold uppercase text-foreground/60">
                    <tr>
                      <th className="px-6 py-4">Cookie</th>
                      <th className="px-6 py-4">Provider</th>
                      <th className="px-6 py-4">Purpose</th>
                      <th className="px-6 py-4">Expiry</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-800">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                      <td className="px-6 py-4 font-mono text-primary">vxl_sess_id</td>
                      <td className="px-6 py-4 text-foreground/80">Vexel Systems</td>
                      <td className="px-6 py-4 text-foreground/80">Maintains user session state and authentication.</td>
                      <td className="px-6 py-4 text-foreground/80">Session</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                      <td className="px-6 py-4 font-mono text-primary">csrf_token</td>
                      <td className="px-6 py-4 text-foreground/80">Vexel Systems</td>
                      <td className="px-6 py-4 text-foreground/80">Prevents Cross-Site Request Forgery attacks.</td>
                      <td className="px-6 py-4 text-foreground/80">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Cookie Category 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-xs font-bold">PERFORMANCE</span>
                <h3 className="text-lg font-bold text-foreground">Analytics & Performance Cookies</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-6">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-inner-box text-xs font-bold uppercase text-foreground/60">
                    <tr>
                      <th className="px-6 py-4">Cookie</th>
                      <th className="px-6 py-4">Provider</th>
                      <th className="px-6 py-4">Purpose</th>
                      <th className="px-6 py-4">Expiry</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-800">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                      <td className="px-6 py-4 font-mono text-primary">_ga</td>
                      <td className="px-6 py-4 text-foreground/80">Google</td>
                      <td className="px-6 py-4 text-foreground/80">Distinguishes unique users and session data.</td>
                      <td className="px-6 py-4 text-foreground/80">2 Years</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                      <td className="px-6 py-4 font-mono text-primary">_hjSession</td>
                      <td className="px-6 py-4 text-foreground/80">Hotjar</td>
                      <td className="px-6 py-4 text-foreground/80">Anonymously tracks user flow on the page.</td>
                      <td className="px-6 py-4 text-foreground/80">30 Minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-bold text-foreground mb-6">4. Managing Preferences</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
              <p>Most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <RotateCcw size={20} />
                  Revoke Current Consent
                </button>
                <button className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-foreground font-bold px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                  Learn More About Ad Choices
                </button>
              </div>
            </div>
          </section>
          {/* Footer spacer */}
          <div className="h-24"></div>
        </article>
      </div>

      {/* Sticky Consent Banner Preview */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-4xl z-50">
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-primary/30 rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary mb-2">
              <Cookie size={24} />
              <span className="text-sm font-bold uppercase tracking-widest">Consent Settings</span>
            </div>
            <h4 className="text-foreground font-bold text-lg mb-1">Your Privacy Choice</h4>
            <p className="text-foreground/60 text-sm">We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button className="px-6 h-12 rounded-lg border border-gray-200 dark:border-gray-700 text-foreground font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
               Customize
            </button>
            <button className="px-8 h-12 rounded-lg bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
               Accept All
            </button>
          </div>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}
