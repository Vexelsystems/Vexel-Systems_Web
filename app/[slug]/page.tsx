import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/locations";
import type { Metadata } from "next";
import { AnimatedDashboard } from "@/components/AnimatedDashboard";
import {
  generateLocationMetadata,
  generateLocalBusinessSchema,
  generateLocationBreadcrumbSchema,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) return {};

  // Use centralized location metadata from seo.ts
  return generateLocationMetadata({ location, slug });
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  // Generate schemas from centralized functions
  const localBusinessSchema = generateLocalBusinessSchema({
    name: location.name,
    location: {
      name: location.name,
      latitude: location.latitude,
      longitude: location.longitude,
    },
    slug,
  });

  const breadcrumbSchema = generateLocationBreadcrumbSchema(location.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white text-[#1d1d1f] dark:bg-black dark:text-[#F5F5F7] font-sans antialiased overflow-x-hidden min-h-screen">
        {/* HeroSection */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden relative">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#0077ED] uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full animate-fade-up">
              Empowering {location.name} Businesses
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {location.h1Heading.split("POS").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-[#0077ED]">POS</span>
                  )}
                </span>
              ))}
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Streamline your operations with Sri Lanka leading enterprise
              software. From retail to fleet management, we deliver precision.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up mb-16"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#0077ED] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Free Consultation
              </Link>
              <Link
                href="#products"
                className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Explore Demo
              </Link>
            </div>

            {/* Interactive Animated Dashboard Preview */}
            <AnimatedDashboard />
          </div>
        </section>

        {/* Local Hook */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-[#F5F5F7] dark:bg-[#121212] rounded-4xl p-8 md:p-16 shadow-sm flex flex-col md:flex-row items-center gap-12 border border-gray-200 dark:border-gray-800">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for the heartbeat of {location.name}.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {location.localHook}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                {location.whyChooseUs}
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-800 hover:border-[#0077ED] transition-colors">
                <div className="text-3xl font-bold text-[#0077ED] mb-1">
                  500+
                </div>
                <div className="text-xs uppercase font-semibold text-gray-500">
                  Clients in Region
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-800 hover:border-[#0077ED] transition-colors">
                <div className="text-3xl font-bold text-[#0077ED] mb-1">
                  24/7
                </div>
                <div className="text-xs uppercase font-semibold text-gray-500">
                  Local Support
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-800 hover:border-[#0077ED] transition-colors">
                <div className="text-3xl font-bold text-[#0077ED] mb-1">
                  100%
                </div>
                <div className="text-xs uppercase font-semibold text-gray-500">
                  SL Law Compliant
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-800 hover:border-[#0077ED] transition-colors">
                <div className="text-3xl font-bold text-[#0077ED] mb-1">
                  10x
                </div>
                <div className="text-xs uppercase font-semibold text-gray-500">
                  Faster Checkouts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Product Grid */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
          id="products"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Our Core Solutions in {location.name}
              </h2>
              <p className="text-gray-500">
                Powering every aspect of your enterprise without the generic
                labels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {location.coreProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-white dark:bg-[#1c1c1e] rounded-3xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none hover:border-[#0077ED]"
                >
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-[#0077ED]">
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative inline-block group-hover:text-[#0077ED] transition-colors">
                    {product.title}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0077ED] transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-[#0077ED]">✓</span> Custom for{" "}
                      {location.name}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0077ED]">✓</span> Remote Syncing
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] dark:bg-[#0a0a0a]"
          id="why-vexel"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">
                Why are we the Preferred Choice in {location.name}?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                We dont just provide software; we provide a foundation for your
                business to scale. Our team combines technical excellence with
                deep insights into the Sri Lankan commercial landscape.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl flex items-center justify-center shadow-sm">
                    <svg
                      className="w-6 h-6 text-[#0077ED]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Personalized Training</h4>
                    <p className="text-gray-500 text-sm">
                      On-site training for your staff in {location.name}{" "}
                      ensuring 100% adoption.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl flex items-center justify-center shadow-sm">
                    <svg
                      className="w-6 h-6 text-[#0077ED]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.047a1 1 0 01.897.95l.1 2.052 2.053.1a1 1 0 01.95.897l.1 2.053 2.053.1a1 1 0 01.897.95l-.1 2.052 2.052.1a1 1 0 01.95.897l-.1 2.053 2.053.1a1 1 0 01.897.95l-.1 2.052-2.052.1a1 1 0 01-.95.897l-.1 2.053-2.053.1a1 1 0 01-.897-.95l-.1-2.052-2.053-.1a1 1 0 01-.95-.897l-.1-2.053-2.053-.1a1 1 0 01-.897-.95l.1-2.052-2.052-.1a1 1 0 01-.95-.897l.1-2.053-2.053-.1a1 1 0 01-.897-.95z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Scalable Architecture</h4>
                    <p className="text-gray-500 text-sm">
                      Software that grows with you, from a single shop to a
                      nationwide chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white dark:bg-[#1c1c1e] p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                Standard Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <div className="w-6 h-6 bg-[#0077ED] text-white rounded-full flex items-center justify-center mr-4 text-xs">
                    ✓
                  </div>
                  <span className="font-semibold">
                    Custom Software Development
                  </span>
                </div>
                <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <div className="w-6 h-6 bg-[#0077ED] text-white rounded-full flex items-center justify-center mr-4 text-xs">
                    ✓
                  </div>
                  <span className="font-semibold">Instant Remote Support</span>
                </div>
                <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <div className="w-6 h-6 bg-[#0077ED] text-white rounded-full flex items-center justify-center mr-4 text-xs">
                    ✓
                  </div>
                  <span className="font-semibold">Robust Offline Mode</span>
                </div>
                <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <div className="w-6 h-6 bg-[#0077ED] text-white rounded-full flex items-center justify-center mr-4 text-xs">
                    ✓
                  </div>
                  <span className="font-semibold">Automated Cloud Backups</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800"
          id="industries"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Vertical Specific Solutions
              </h2>
              <p className="text-gray-500">
                Optimized for {location.name}&apos;s diverse economy.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { emoji: "🛒", label: "Supermarkets" },
                { emoji: "🔨", label: "Hardware" },
                { emoji: "💊", label: "Pharmacies" },
                { emoji: "🏗️", label: "Construction" },
                { emoji: "🚚", label: "Distributors" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-gray-800 rounded-2xl text-center hover:border-[#0077ED] transition-colors cursor-default"
                >
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h5 className="font-bold text-sm">{item.label}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
          id="faq"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions in {location.name}
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#121212]">
                <h4 className="font-bold mb-2">
                  Can your POS system work without an active internet
                  connection?
                </h4>
                <p className="text-gray-500 text-sm">
                  Yes, our systems are built with an Offline First architecture.
                  You can continue sales during internet outages, and data will
                  automatically sync once connection is restored.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#121212]">
                <h4 className="font-bold mb-2">
                  Do you provide local support for businesses in {location.name}
                  ?
                </h4>
                <p className="text-gray-500 text-sm">
                  Absolutely. We have a dedicated support team that covers{" "}
                  {location.name}, providing both remote assistance and on-site
                  visits if necessary.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#121212]">
                <h4 className="font-bold mb-2">
                  Is the software compliant with Sri Lankan tax regulations?
                </h4>
                <p className="text-gray-500 text-sm">
                  Yes, all our business systems are fully compliant with local
                  VAT, SSCL, and other tax requirements, with automated
                  reporting features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8" id="contact">
          <div className="max-w-7xl mx-auto bg-[#1d1d1f] dark:bg-[#0077ED] rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#0077ED]/20 dark:bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 dark:bg-black/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your Business in {location.name}?
              </h2>
              <p className="text-xl text-gray-300 dark:text-blue-50 mb-10 max-w-2xl mx-auto">
                Join hundreds of successful businesses relying on modern
                software to drive efficiency and profit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="tel:+94123456789"
                  className="bg-[#0077ED] dark:bg-white dark:text-[#0077ED] px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
                >
                  Call Us Now
                </Link>
                <Link
                  href="mailto:info@vexel.lk"
                  className="bg-transparent border-2 border-white/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors"
                >
                  Send an Email
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
