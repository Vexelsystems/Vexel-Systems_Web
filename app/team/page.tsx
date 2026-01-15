

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Facebook, Send, Award, Clock, ArrowRight, User } from "lucide-react";

const teamMembers = [
  {
    name: "Jathushan Varnakulasingam",
    role: "Founder, CEO & CTO",
    tagline: "Visionary Leader | Full-Stack Architect | Technology Strategist",
    image: "/devlopers/jathushan-ceo.png",
    about: "I am Jathushan Varnakulasingam, Founder, CEO, and CTO of Vexel Systems—a technology-driven company built with the vision of making modern digital solutions simple, reliable, and impactful. As a full-stack developer and technology strategist, I specialize in web development, backend systems, cloud-based solutions, automation, and AI-assisted technologies.\n\nWith hands-on experience across MERN, LAMP, Java, Python, machine learning, networking, and system architecture, I focus on building scalable products that solve real-world problems for businesses and startups. My journey in technology is driven by curiosity, continuous learning, and a strong belief that great technology should empower people.\n\nI actively work on complex systems such as REST APIs, enterprise backends, POS platforms, and AI-powered applications—always prioritizing performance, security, and user experience. At Vexel Systems, I lead both technical innovation and product strategy, ensuring every solution aligns with business goals and long-term growth.",
    quote: "Technology should simplify life, not complicate it—that is the philosophy behind everything we build.",
    expertise: [
      "Full-Stack Development (MERN, LAMP)",
      "Backend Architecture & API Design",
      "Cloud-based Systems & Firebase",
      "Machine Learning & AI Integration",
      "POS Systems & Business Automation",
      "System Design & Scalability"
    ],
    socials: {
      linkedin: "#",
      github: "#",
      email: "vexelsystems@gmail.com",
      website: "https://www.vexelsystems.lk"
    }
  },
  {
    name: "Kajakaran Sivananthan",
    role: "Founder, COO & CBO",
    tagline: "Operations Lead | Business Strategist | Growth Manager",
    image: "/devlopers/kajakaran.png",
    about: "I am Kajakaran Sivananthan, the founder and creative mind behind VexelSystem. I am a passionate technology enthusiast, problem solver, and digital creator who believes that technology should not only work — it should inspire, empower, and simplify life. From web applications and system design to digital solutions, I focus on building products that combine functionality, performance, and visual clarity.\n\nMy expertise lies in web development, system architecture, UI/UX thinking, and modern frameworks such as React, Next.js, and backend technologies. I enjoy turning complex problems into simple, elegant solutions that real people can use easily. Through VexelSystem, I aim to provide scalable, secure, and future-ready digital solutions for individuals, startups, and businesses that want to grow in the digital world.\n\nI have hands-on experience working with frontend and backend systems, APIs, databases, and cloud-based architectures, and I continuously experiment with new technologies to stay ahead. Whether it is creating a full-stack application, designing a logical system flow, or improving user experience, I always focus on quality, efficiency, and long-term value. Through VexelSystem, my goal is to build solutions that are not only technically strong, but also meaningful, scalable, and impactful in the real world 🚀",
    quote: "Technology is not just about code — it is about creating possibilities for people.",
    expertise: [
      "Business Operations & Management",
      "Client Communication & Support",
      "Sales Strategy & Growth Planning",
      "Product Strategy & Market Research",
      "Startup Operations & Process Design",
      "Partnership & Vendor Management"
    ],
    socials: {
      linkedin: "#",
      email: "vexelsystems@gmail.com",
      facebook: "#"
    }
  }
];

const milestones = [
  { year: "2023", title: "Inception", description: "Vexel Systems founded with a vision to simplify technology." },
  { year: "2024", title: "First Major ERP", description: "Launched our flagship ERP solution for retail businesses." },
  { year: "2025", title: "Global Expansion", description: "Expanded operations to serve international clients." },
];

/**
 * TEAM PAGE
 * 
 * Functional Overview:
 * - Rendering Strategy: Iterates over static `teamMembers` and `milestones` arrays.
 * - Layout: Alternating grid layout (zig-zag pattern) for team member profiles using flexbox reversal logic.
 * - Interaction: Hover effects on profile images reveal "Message" CTA overlays.
 */

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Our Team - The People Behind Vexel",
  description: "Meet the visionary leaders and talented developers at Vexel Systems dedicated to your success. A founder-driven startup focused on innovation.",
  keywords: [
    "Vexel Team",
    "Software Developers Sri Lanka",
    "Tech Leadership",
    "Jathushan Varnakulasingam",
    "Kajakaran Sivananthan",
    "Vexel Founders"
  ],
  path: "/team",
});

export default function TeamPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-[1920px] w-[90%] md:w-[80%] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">              The People Behind <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Vexel Systems</span>
</h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                At Vexel Systems, our strength lies in the people who build, innovate, and lead with purpose. We are a founder-driven startup focused on delivering simple, powerful, and reliable technology solutions.
            </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-[1920px] w-[90%] md:w-[80%] mx-auto grid gap-24">
            {teamMembers.map((member, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Image Card */}
                    <div className="w-full md:w-1/3 relative">
                         <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                fill 
                                priority
                                sizes="(max-width: 768px) 90vw, 33vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-6 pt-24 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="font-bold flex items-center gap-2">
                                    <Send size={16} /> Message {member.name.split(' ')[0]}
                                </p>
                            </div>
                         </div>
                         {/* Decorative Element */}
                         <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl hidden md:block group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3 space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                                {member.role}
                            </div>
                            <h2 className="text-4xl font-bold mb-2">{member.name}</h2>
                            <p className="text-lg text-foreground/70 font-medium italic">{member.tagline}</p>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-6 py-2 bg-foreground/5 rounded-r-lg">
                            <p className="text-lg italic font-medium">“{member.quote}”</p>
                        </blockquote>

                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Clock className="text-primary" size={20} /> About
                            </h3>
                            <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-wrap">
                                {member.about}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Award className="text-primary" size={20} /> Expertise
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {member.expertise.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg text-sm font-medium shadow-sm hover:border-primary/50 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                            {member.socials.linkedin && (
                                <Link href={member.socials.linkedin} className="p-3 bg-foreground/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1">
                                    <Linkedin size={20} />
                                </Link>
                            )}
                            {member.socials.github && (
                                <Link href={member.socials.github} className="p-3 bg-foreground/5 rounded-full hover:bg-[#333] hover:text-white transition-all transform hover:-translate-y-1">
                                    <Github size={20} />
                                </Link>
                            )}
                             {member.socials.facebook && (
                                <Link href={member.socials.facebook} className="p-3 bg-foreground/5 rounded-full hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                                    <Facebook size={20} />
                                </Link>
                            )}
                            <Link href={`mailto:${member.socials.email}`} className="p-3 bg-foreground/5 rounded-full hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Culture & Milestones Section */}
      <section className="py-24 bg-foreground/5">
         <div className="max-w-[1920px] w-[90%] md:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Culture */}
                <div>
                     <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Team <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Culture</span></h2>
                     <div className="grid gap-6">
                        {[
                            { title: "We Build Useful Things", desc: "We don't just build; we solve problems." },
                            { title: "No Secrets", desc: "Open communication is our foundation." },
                            { title: "We Care About You", desc: "Your success is our success." },
                            { title: "Always Learning", desc: "We evolve as technology evolves." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm border border-foreground/5 cursor-default hover:border-primary/30 transition-colors">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="text-foreground/80 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>

                {/* Timeline / Milestones */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Journey <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">So Far</span></h2>
                    <div className="space-y-8 pl-4 border-l-2 border-primary/20 ml-4">
                        {milestones.map((milestone, i) => (
                            <div key={i} className="relative pl-8">
                                <div className="absolute top-1 -left-[9px] w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
                                <span className="text-sm font-bold text-primary mb-1 block">{milestone.year}</span>
                                <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                                <p className="text-foreground/80">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 p-8 bg-black text-white rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Want to join our journey?</h3>
                        <p className="text-gray-400 mb-6 relative z-10">We are always looking for passionate individuals to join our team.</p>
                        <Link href="/careers" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-colors relative z-10">
                            View Openings <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

            </div>
         </div>
      </section>

    </div>
  );
}
