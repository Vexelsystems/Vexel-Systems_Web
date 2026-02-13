import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/events-data";
import {
  generateDynamicMetadata,
  generateArticleSchema,
  BASE_URL,
} from "@/lib/seo";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  Video,
  Mic,
  Share2,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";

// 1. Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Event Not Founded - Vexel Systems",
    };
  }

  return generateDynamicMetadata({
    title: event.title,
    description: event.description,
    keywords: [
      event.category,
      "Tech Event",
      "Workshop",
      "Vexel Systems",
      event.location,
    ],
    path: `/events/${event.slug}`,
    image: event.image,
    type: "website",
  });
}

// 2. SSG
export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

// 3. Page Component
export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <HeroBackground />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex flex-col gap-12">
        {/* Back Button */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors font-bold text-sm w-fit group"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-10">
            <MotionWrapper type="slideUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                {event.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-bold text-foreground/70 mb-8 p-6 bg-card border border-foreground/5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  {event.type === "Virtual" ? (
                    <Video size={18} className="text-primary" />
                  ) : (
                    <MapPin size={18} className="text-primary" />
                  )}
                  {event.location}
                </div>
              </div>

              <div className="aspect-video relative rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </MotionWrapper>

            <div className="prose dark:prose-invert prose-lg max-w-none">
              <h3>About this Event</h3>
              <p>{event.description}</p>

              {event.agenda && (
                <div className="mt-12">
                  <h3 className="mb-6">Agenda</h3>
                  <div className="space-y-4 not-prose">
                    {event.agenda.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-6 p-4 rounded-xl border border-foreground/5 bg-foreground/5 items-center"
                      >
                        <div className="font-mono font-bold text-primary whitespace-nowrap">
                          {item.time}
                        </div>
                        <div className="w-px h-6 bg-foreground/10"></div>
                        <div className="font-bold">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.speakers && (
                <div className="mt-12">
                  <h3 className="mb-6">Speakers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
                    {event.speakers.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-foreground/5 shadow-sm"
                      >
                        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {s.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold">{s.name}</div>
                          <div className="text-xs text-foreground/50 uppercase tracking-widest font-bold">
                            {s.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="flex flex-col gap-10">
            {/* Registration / Status Card */}
            <div className="p-8 bg-zinc-900 text-white rounded-[32px] sticky top-32 shadow-2xl">
              {event.status === "Completed" ? (
                <div className="flex flex-col gap-4 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock size={32} className="text-white/40" />
                  </div>
                  <h3 className="text-2xl font-bold">Event Concluded</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    This event has ended. Subscribe to our newsletter to get
                    notified about future workshops and summaries.
                  </p>
                  <div className="py-4 mt-2 px-6 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-1">
                      Held On
                    </span>
                    <span className="font-bold text-lg">{event.date}</span>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Reserve Your Spot</h3>
                  <p className="text-white/60 text-sm mb-8">
                    Limited seats available for this {event.type.toLowerCase()}{" "}
                    event.
                  </p>

                  <form className="flex flex-col gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:bg-white/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:bg-white/20 transition-all"
                      />
                    </div>
                    <button className="w-full py-4 bg-primary rounded-xl font-bold hover:brightness-110 transition-all shadow-lg text-white mt-4">
                      Complete Registration
                    </button>
                  </form>
                  <p className="text-center text-[10px] text-white/30 mt-6 uppercase tracking-widest font-bold">
                    Secure Vexel Ticketing
                  </p>
                </>
              )}
            </div>

            <Newsletter category="Events" />
          </div>
        </div>
      </div>
    </div>
  );
}
