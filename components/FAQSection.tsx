"use client";

import { HelpCircle } from "lucide-react";

/**
 * FAQ SECTION - Homepage
 * Hover-based FAQ with smooth reveal animations
 */

const faqs = [
  {
    question: "What services does Vexel Systems offer?",
    answer:
      "We specialize in AI/ML solutions, web development, mobile app development, custom software, POS systems, and digital marketing. Our team delivers end-to-end technology solutions tailored to your business needs.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "Timelines vary based on complexity. A simple website takes 2-4 weeks, while custom web applications or mobile apps typically take 8-16 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer support after project completion?",
    answer:
      "Yes! We provide ongoing maintenance, updates, and technical support. Our support packages include bug fixes, security updates, feature enhancements, and 24/7 emergency assistance.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer transparent, project-based pricing and flexible payment plans. Costs depend on project scope, features, and timeline. Visit our pricing page or contact us for a detailed quote tailored to your needs.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Absolutely! We specialize in seamless integrations with existing CRMs, ERPs, payment gateways, and third-party APIs. Our team ensures smooth data migration and system compatibility.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both! From startups needing MVPs to enterprises requiring complex systems, we scale our solutions to match your stage and budget. We've helped businesses of all sizes achieve their digital goals.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="w-[80%] mx-auto max-w-[1920px]">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              Questions
            </span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl leading-relaxed">
            Got questions? We've got answers. Hover over any question to see the
            details.
          </p>
          <div className="w-24 h-2 bg-primary rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer isolate"
            >
              {/* Question - Always visible */}
              <div className="flex items-start gap-3 mb-0 group-hover:mb-4 transition-all duration-300">
                <HelpCircle
                  className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <h3 className="text-foreground text-lg font-bold leading-tight">
                  {faq.question}
                </h3>
              </div>

              {/* Answer - Revealed ONLY on THIS card's hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-foreground/70 text-sm leading-relaxed pt-3 border-t border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
