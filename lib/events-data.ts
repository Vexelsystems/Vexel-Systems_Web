import type { Event } from "@/lib/types";

export const events: Event[] = [
  {
    id: 1,
    slug: "vexel-retail-summit-2026",
    title: "Vexel Retail Summit 2026",
    date: "March 15, 2026",
    time: "09:00 AM - 05:00 PM",
    category: "Summit",
    location: "Colombo, Sri Lanka",
    type: "In-Person",
    image: "/events/photo-1540575467063-178a50c2df87.jpg",
    description:
      "Join industry leaders to discuss the future of retail in the AI era. We will cover topics ranging from predictive analytics in inventory management to hyper-personalized customer experiences.",
    agenda: [
      { time: "09:00 AM", title: "Opening Keynote: The AI Retail Revolution" },
      { time: "11:00 AM", title: "Panel: Supply Chain Resilience" },
      { time: "02:00 PM", title: "Workshop: Vexel POS Deep Dive" },
      { time: "04:00 PM", title: "Networking & Cocktails" },
    ],
    speakers: [
      { name: "Dr. Aruna Perera", role: "AI Research Lead, Vexel" },
      { name: "Sarah Jenkins", role: "CTO, RetailNext" },
    ],
    status: "Upcoming",
  },
  {
    id: 2,
    slug: "mastering-cloud-migration",
    title: "Mastering Cloud Migration",
    date: "April 10, 2026",
    time: "10:00 AM - 12:00 PM",
    category: "Webinar",
    location: "Online (Zoom)",
    type: "Virtual",
    image: "/events/photo-1515187029135-18ee286d815b.jpg",
    description:
      "A deep dive into strategies for seamless cloud infrastructure upgrades. Learn how to migrate legacy systems to the cloud without downtime.",
    agenda: [
      { time: "10:00 AM", title: "Assessment & Planning" },
      { time: "10:45 AM", title: "Execution Strategies" },
      { time: "11:30 AM", title: "Q&A Session" },
    ],
    speakers: [{ name: "Kavinda Silva", role: "Cloud Architect" }],
    status: "Upcoming",
  },
  {
    id: 3,
    slug: "ai-in-healthcare-workshop",
    title: "AI in Healthcare Workshop (2025)",
    date: "May 22, 2025",
    time: "02:00 PM - 06:00 PM",
    category: "Workshop",
    location: "Tech District, Singapore",
    type: "Hybrid",
    image: "/events/photo-1505373877841-8d25f7d46678.jpg",
    description:
      "Hands-on session using Vexel's predictive health algorithms. Participants will build a small model to predict patient inflow trends.",
    agenda: [
      { time: "02:00 PM", title: "Introduction to Healthcare AI" },
      { time: "03:30 PM", title: "Hands-on Coding Session" },
      { time: "05:30 PM", title: "Project Showcase" },
    ],
    speakers: [
      { name: "Dr. Li Wei", role: "Data Scientist" },
      { name: "James Fernando", role: "Product Manager, Vexel Health" },
    ],
    status: "Completed",
  },
];
