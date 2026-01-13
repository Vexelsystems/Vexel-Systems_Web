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

const events = [
  {
    id: 1,
    title: "Vexel Retail Summit 2026",
    date: "March 15, 2026",
    time: "09:00 AM - 05:00 PM",
    category: "Summit",
    location: "Colombo, Sri Lanka",
    type: "In-Person",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3s5Q09yB3v5JbT17Oa8T1lB_k3uFz06c0O5q8d0X0mQ5q4nE0vH2rJ0w1t7bM8lY8v3z6oE2pG4x5a9sC7uF3iK_L1vN6t0mP9rD4h8_jB2c5x1k3o8w7q0t4y9u1i6_d8f0g3hA8j2e5k7l9m4n1p6_q0r4s8_v2w5x9z0A1b3c6d8e2f4g7h9j1k2l3m5n7o9p0",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3z6P07yC3w5IaT18Oc8S1lD_j3uEz06d0P5q8e0Y0nQ5r4oE0wH2sJ0x1u7cM8mY8w3A6pE2qG4y5b9tC7vF3jK_M1wN6u0nP9sD4i8_kB2d5y1l3p8x7r0u4z9v1j6_e8g0h4iA8k2f5l7m9o1q6_r0s4t8_w2x5y9A1c3d6e8f4g7h9k1l2m3n5o7p9",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4x7Q08zD3x5JbT19Pd8T1mE_k3vFz07e0Q5r9f0Z0oQ6s4pE0xH3tJ0y1v8dN9nZ9x4B7qF3rG5z6c0uD8wF4jL_N2xO7v0qQ9tE5j9_lC3e6z2m4q9y8s1v5A2j7_f9h1i5jB9l3g6m8n0p2q7_s0t5u9_x3y6z0B2d4e7f9g5h8j0k2m3n4o6p8",
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
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {filteredEvents.map((event) => (
          <div key={event.id} className="group bg-card border border-primary/10 rounded-2xl overflow-hidden shadow-sm transition-all">
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
