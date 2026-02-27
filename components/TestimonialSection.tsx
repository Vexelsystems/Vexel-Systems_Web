"use client";

import React from "react";
import { Quote, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

const testimonials = [
  {
    id: 1,
    name: "Salujah",
    role: "Student, South Eastern University",
    content:
      "I worked with Vexel Systems on my ML project for South Eastern University’s biology department, and the experience was amazing! They helped me build the Triang model to analyze biological data, and the results were impressive. The team was patient, explained complex concepts clearly, and made sure everything worked perfectly.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Pavishan Sivakumaran",
    role: "Owner, Skywix E-commerce",
    content:
      "Vexel Systems transformed our old website into a sleek, responsive platform. Their team handled our e-commerce site and corporate portal projects flawlessly. They also helped integrate AI features for better user recommendations. Professional, friendly, and always available to assist!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Kosika",
    role: "Student, Open University",
    content:
      "Vexel Systems with Jathushan has been a valuable learning experience. While not every project goes perfectly, we faced real challenges during an AI project involving a customer FAQ-based chatbot. The environment encourages transparency, problem-solving, and growth, making it a great place to develop real-world skills.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    name: "Mathushi",
    role: "Creative Professional",
    content:
      "I hired Vexel Systems to create my personal portfolio website, and I’m beyond happy! They understood my style perfectly, made the design elegant and modern, and even added subtle interactive features that make my work stand out. The team was friendly, patient, and guided me through every step.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: 5,
    name: "Vinoshika",
    role: "Photographer",
    content:
      "Vexel Systems built my personal portfolio website, and I couldn’t be happier! The design is chic, easy to navigate, and really highlights my photography work. They listened to all my ideas and even suggested improvements that made it look more professional. Highly recommend them!",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: 6,
    name: "Tharshan",
    role: "Client, United Kingdom",
    content:
      "Vexel Systems delivered a stylish, modern site that truly represents my brand. The design is easy to navigate and very professional. They listened to all my ideas and the team was patient and guided me through every step. Highly recommend them for anyone wanting a premium web presence!",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    rating: 5,
  },
];

/**
 * TESTIMONIAL SECTION
 *
 * Functional Overview:
 * - Rendering: Dynamic generation of star ratings using array mapping.
 * - Layout: Responsive grid for testimonials and a 4-column statistic block for impact metrics.
 * - Interaction: FAQ accordion using native `<details>` and `<summary>` elements for semantic toggle behavior.
 */

export const TestimonialSection = () => {
  return (
    <div className="flex flex-col bg-transparent">
      {/* Testimonials Masonry Grid */}
      <section className="py-20">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              <Star className="w-4 h-4" /> Client Success
            </div>
            <h2 className="text-foreground text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Our Community &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Well-wishers
              </span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We don't just build software; we build lasting human connections.
              Here's what our community members and partners have to say.
            </p>
          </div>

          <SnapCarousel
            className="md:block"
            scrollContainerClassName="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8 md:pb-0"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-primary/10 p-5 rounded-2xl shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full min-w-[75vw] md:min-w-0 snap-center"
              >
                <Quote className="absolute top-5 right-5 text-primary/10 w-10 h-10 transform rotate-180" />

                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>

                <p className="text-sm font-medium leading-relaxed mb-6 grow relative z-10 text-foreground/80">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-dashed border-primary/10">
                  <div className="relative size-10 rounded-full overflow-hidden border border-primary/20">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">
                      {t.name}
                    </h3>
                    <p className="text-[10px] font-black text-primary uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </SnapCarousel>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="w-[90%] md:w-[80%] mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Serve
              </span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Delivering high-performance, tailored technology solutions across
              diverse business sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Healthcare", icon: "🏥" },
              { name: "E-Commerce", icon: "🛒" },
              { name: "Education", icon: "🎓" },
              { name: "Fashion & Retail", icon: "👗" },
              { name: "Restaurants", icon: "🍽️" },
              { name: "Logistics", icon: "🚚" },
              { name: "Hospitality", icon: "🏨" },
              { name: "Entertainment", icon: "🎬" },
              { name: "Automotive", icon: "🚗" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group relative flex items-center gap-6 p-6 rounded-[2rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="size-16 rounded-2xl bg-linear-to-br from-primary/10 to-purple-600/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {industry.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-black text-foreground tracking-tight">
                    {industry.name}
                  </h3>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Tailored Solutions
                  </span>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary to-purple-600 rounded-[48px] w-[90%] md:w-[80%] mx-auto mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative z-10 text-center px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to Build Something{" "}
            <span className="text-white drop-shadow-lg">Amazing?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's turn your vision into reality. Schedule a free consultation
            and get a custom proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/consultation"
              className="px-8 py-4 bg-white text-primary font-black rounded-2xl shadow-2xl hover:shadow-white/20 transition-all"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-black rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
