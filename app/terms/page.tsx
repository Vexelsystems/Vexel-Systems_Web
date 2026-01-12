import Link from "next/link";
import { ArrowLeft, Search, Calendar, Shield, CreditCard, Receipt, Share } from "lucide-react";

export default function Terms() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link href="/" className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Legal Center</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-primary gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-primary/5 transition-colors">
              <Search size={24} />
            </button>
          </div>
        </div>
        {/* Quick Navigation Chips (Anchor Links) */}
        <div className="flex gap-3 p-3 overflow-x-auto no-scrollbar scroll-smooth">
          <a className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 hover:bg-primary/90 transition-colors" href="#usage">
            <p className="text-sm font-medium leading-normal">Usage</p>
          </a>
          <a className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-foreground px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors" href="#payments">
            <p className="text-sm font-medium leading-normal">Payments</p>
          </a>
          <a className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-foreground px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors" href="#liability">
            <p className="text-sm font-medium leading-normal">Liability</p>
          </a>
          <a className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-foreground px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors" href="#termination">
            <p className="text-sm font-medium leading-normal">Termination</p>
          </a>
        </div>
      </header>

      <main className="flex-1 w-[90%] md:w-[80%] mx-auto max-w-4xl">
        {/* HeadlineText */}
        <h1 className="text-foreground tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-1 pt-6">Terms of <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Service</span></h1>
        {/* MetaText */}
        <div className="flex items-center px-4 pb-6 pt-1">
          <Calendar className="text-foreground/60 mr-2" size={16} />
          <p className="text-foreground/60 text-sm font-normal leading-normal">Last updated: October 24, 2023</p>
        </div>
        {/* Intro Section */}
        <div className="px-4 pb-6">
          <p className="text-foreground leading-relaxed">
            Welcome to Vexel Systems. These Terms & Conditions govern your access to and use of Vexel Systems' website, services, and software applications. By using our services, you agree to be bound by these terms.
          </p>
        </div>

        {/* Section 1: Service Usage */}
        <section className="scroll-mt-32" id="usage">
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary mt-4">
            <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">1. Service Usage</h3>
          </div>
          <div className="px-4 py-4 space-y-4">
            <p className="text-foreground leading-relaxed">
              You must be at least 18 years old to use our Services. By agreeing to these Terms, you represent and warrant that you are of legal age.
            </p>
            <ul className="list-decimal list-inside space-y-3 pl-2 text-foreground">
              <li className="pl-2"><span className="font-semibold">Account Security:</span> You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li className="pl-2"><span className="font-semibold">Prohibited Conduct:</span> You agree not to misuse the Services or help anyone else do so. This includes attempting to access non-public areas of the Service.</li>
              <li className="pl-2"><span className="font-semibold">Software License:</span> Vexel Systems grants you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Payments */}
        <section className="scroll-mt-32" id="payments">
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary mt-6">
            <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">2. Payments & Billing</h3>
          </div>
          <div className="px-4 py-4 space-y-4">
            <p className="text-foreground leading-relaxed">
              Some aspects of the Service may be provided for a fee. If you elect to use paid features, you agree to the pricing and payment terms.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <CreditCard className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Subscription Cycles</h4>
                  <p className="text-sm text-foreground/60">Fees are billed in advance on a monthly or annual basis and are non-refundable except as required by law.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Receipt className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Taxes</h4>
                  <p className="text-sm text-foreground/60">All fees are exclusive of taxes, and you are responsible for their payment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Liability */}
        <section className="scroll-mt-32" id="liability">
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary mt-6">
            <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">3. Limitation of Liability</h3>
          </div>
          <div className="px-4 py-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-black shadow-sm">
              <p className="uppercase text-xs font-bold tracking-widest text-foreground/60 mb-3">Legal Disclaimer</p>
              <p className="text-foreground italic leading-relaxed">
                "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VEXEL SYSTEMS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY."
              </p>
            </div>
            <p className="mt-4 text-foreground">
              Our total liability for any claim arising out of or relating to these terms or the services, regardless of the form of the action, is limited to the amount paid by you to use the services in the 12 months preceding the claim.
            </p>
          </div>
        </section>

        {/* Section 4: Termination */}
        <section className="scroll-mt-32 mb-20" id="termination">
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary mt-6">
            <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">4. Termination</h3>
          </div>
          <div className="px-4 py-4 space-y-4">
            <p className="text-foreground">
              We may terminate or suspend your access to the Services at any time, with or without cause, and with or without notice. Upon termination, your right to use the Services will immediately cease.
            </p>
            <p className="text-foreground">
              If you wish to terminate your account, you may simply discontinue using the Services or contact our support team at <a className="text-primary underline" href="mailto:legal@vexelsystems.com">legal@vexelsystems.com</a>.
            </p>
          </div>
        </section>
      </main>

      {/* Fixed Footer Action */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-black/95 border-t border-gray-200 dark:border-gray-800 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto flex gap-3">
          <button className="flex-1 h-12 bg-primary hover:bg-primary/90 transition-colors text-white rounded-lg font-bold text-base shadow-lg shadow-primary/20">
            I Accept These Terms
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-foreground/60 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Share size={24} />
          </button>
        </div>
      </footer>
      <div className="h-20 bg-transparent"></div>
    </div>
  );
}
