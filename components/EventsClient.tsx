/**
 * EVENTS CLIENT COMPONENT
 * 
 * Functional Overview:
 * - Filtering: Segments events by Type (In-Person, Virtual, Hybrid) using simple client-side logic.
 * - Rendering: Displays events in a responsive grid with category tags.
 */

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, Video, MapPin, Mic, Clock, ArrowRight, Tag } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

const events = [
  {
    id: 1,
    title: "Vexel Retail Summit 2026",
    date: "March 15, 2026",
    time: "09:00 AM - 05:00 PM",
    category: "Summit",
    location: "Colombo, Sri Lanka",
    type: "In-Person",
    image: "/events/photo-1540575467063-178a50c2df87.jpg",
    description: "Join industry leaders to discuss the future of retail in the AI era."
  },
  {
    id: 2,
    title: "Mastering Cloud Migration",
    date: "April 10, 2026",
    time: "10:00 AM - 12:00 PM",
    category: "Webinar",
    location: "Online (Zoom)",
    type: "Virtual",
    image: "/events/photo-1515187029135-18ee286d815b.jpg",
    description: "A deep dive into strategies for seamless cloud infrastructure upgrades."
  },
  {
    id: 3,
    title: "AI in Healthcare Workshop",
    date: "May 22, 2026",
    time: "02:00 PM - 06:00 PM",
    category: "Workshop",
    location: "Tech District, Singapore",
    type: "Hybrid",
    image: "/events/photo-1505373877841-8d25f7d46678.jpg",
    description: "Hands-on session using Vexel's predictive health algorithms."
  }
];

export default function EventsClient() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(e => e.type === filter);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {["All", "In-Person", "Virtual", "Hybrid"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === type 
                 ? "bg-primary text-white shadow-lg shadow-primary/20" 
                 : "bg-card border border-primary/10 hover:border-primary/50 text-foreground/70"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <MotionWrapper type="slideUp" delay={0.2} duration={1.2}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group bg-card border border-primary/10 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                   <Tag size={12} className="text-primary" />
                   {event.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3">
                   <Calendar size={14} />
                   <span>{event.date}</span>
                   <span className="w-1 h-1 rounded-full bg-primary/20"></span>
                   <Clock size={14} className="ml-1" />
                   <span>{event.time}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 leading-tight transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-sm text-foreground/60 mb-6 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-foreground/50 mb-8">
                   {event.type === 'Virtual' ? <Video size={14} /> : <MapPin size={14} />}
                   {event.location}
                </div>

                <div className="pt-6 border-t border-primary/10 flex justify-between items-center bg-gray-50/50 dark:bg-black/20 -m-8 mt-0 p-6 px-8">
                   <div className="flex -space-x-2">
                      {[1,2,3].map((i) => (
                         <div key={i} className="size-8 rounded-full border-2 border-white dark:border-zinc-800 bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-[8px] font-bold text-gray-500">
                            U{i}
                         </div>
                      ))}
                      <div className="size-8 rounded-full border-2 border-white dark:border-zinc-800 bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                        +42
                      </div>
                   </div>
                   <button className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Register Now <ArrowRight size={16} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionWrapper>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
         <div className="text-center py-20 opacity-50">
            <div className="inline-block p-6 rounded-full bg-gray-100 dark:bg-white/10 mb-4">
               <Calendar size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold">No events found for this filter.</h3>
            <p>Check back later for updates!</p>
         </div>
      )}
    </>
  );
}
