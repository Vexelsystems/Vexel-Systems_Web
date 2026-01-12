import Image from "next/image";
import { Rocket, Eye, Lightbulb, ShieldCheck, Users, ArrowRight, Share2, MapPin } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "About Us - Our Story, Mission & Vision",
  description: "Learn about Vexel Systems, a premier software and technology solutions provider from Sri Lanka. Discover our mission to empower businesses through digital excellence and innovative solutions.",
  keywords: [
    "About Vexel Systems",
    "Software Company Sri Lanka",
    "Technology Solutions Provider",
    "Vavuniya Tech Company",
    "Our Mission",
    "Our Vision",
    "Company Story",
    "Digital Transformation",
  ],
  path: "/about",
});

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <div className="relative aspect-video bg-center bg-cover rounded-xl shadow-2xl overflow-hidden">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfWI_BIEvx28E-bwNePxvNfb5bqT0SluXxCyU11yFZl0jJ52IpRzlC5s15OItuKryvTQZHk9ORVN2Zkn51vCh_4ZbLprg7T5EX91hKmOJhbt9VAnajIgXqr5IRoWOG9mh8ye1D1MWXozW1p7gG6Wau2_2tihT9qThaQbXsY7VuBpH0PDvWCcILBZE8LGkJBgh0hAB4oGUlo1RVMB9Xl1L7NvefUuHd3sgu3xUp_vp-6UssQ1sHCL5jjK6aV2AUlIohi866el-2PuWR"
                    alt="Modern high-tech workspace with professional developers"
                    fill
                    className="object-cover"
                    unoptimized
                />
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full w-fit">
                Our Story
                </div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight text-foreground">
                Pioneering Digital <br /><span className="text-primary">Global Excellence</span>
                </h1>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
                A premier software and technology solutions provider, bridging the gap between Sri Lankan innovation and global business needs. We empower enterprises with future-ready digital transformations.
                </p>
                <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all">
                    View Our Work
                </button>
                <button className="border-2 border-gray-200 dark:border-gray-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-foreground">
                    Contact Us
                </button>
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-24">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Purpose Driven Innovation</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-primary transition-colors group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Rocket size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-foreground/60 leading-relaxed">
                To empower businesses through digital excellence and innovative software solutions that drive sustainable growth, efficiency, and competitive advantage in a fast-evolving global market.
                </p>
            </div>
            <div className="p-8 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-primary transition-colors group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-foreground/60 leading-relaxed">
                To become a global leader in sustainable tech solutions, recognized for engineering excellence, creative problem solving, and unwavering reliability across borders.
                </p>
            </div>
            </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="mb-24 py-16 bg-inner-box/50">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Journey</h2>
                <p className="text-foreground/60 mt-2">From Sri Lanka to the global stage</p>
            </div>
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
                
                {/* Milestone 1 */}
                <div className="relative flex items-center justify-between mb-16 group">
                <div className="w-[45%] text-right pr-8">
                    <h4 className="text-primary font-black text-xl mb-1">2018</h4>
                    <p className="font-bold text-lg text-foreground">The Spark</p>
                    <p className="text-sm text-foreground/50">It started as a group of passionate freelancers, working late nights to deliver exceptional web projects.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50"></div>
                <div className="w-[45%]"></div>
                </div>

                {/* Milestone 2 */}
                <div className="relative flex items-center justify-between mb-16 group">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50"></div>
                <div className="w-[45%] text-left pl-8">
                    <h4 className="text-primary font-black text-xl mb-1">2020</h4>
                    <p className="font-bold text-lg text-foreground">Gaining Expertise</p>
                    <p className="text-sm text-foreground/50">Our team underwent rigorous training within established tech companies, refining our skills in enterprise development.</p>
                </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative flex items-center justify-between mb-16 group">
                <div className="w-[45%] text-right pr-8">
                    <h4 className="text-primary font-black text-xl mb-1">2022</h4>
                    <p className="font-bold text-lg text-foreground">Vexel Systems Born</p>
                    <p className="text-sm text-foreground/50">Officially registered as a business. We established our physical office and launched our core web & mobile development services.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50"></div>
                <div className="w-[45%]"></div>
                </div>

                {/* Milestone 4 */}
                <div className="relative flex items-center justify-between group">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50"></div>
                <div className="w-[45%] text-left pl-8">
                    <h4 className="text-primary font-black text-xl mb-1">Present</h4>
                    <p className="font-bold text-lg text-foreground">AI Integration Era</p>
                    <p className="text-sm text-foreground/50">Now pioneering AI-driven solutions, we integrate intelligent automation into modern web and mobile applications.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-24">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Core Values</h2>
            <p className="text-foreground/60 mt-2">The principles that guide every line of code we write.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
                <div className="mb-6 p-4 bg-primary/5 text-primary rounded-full">
                <Lightbulb size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Innovation</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">Constantly pushing the boundaries of what's possible with software and emerging technologies.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
                <div className="mb-6 p-4 bg-primary/5 text-primary rounded-full">
                <ShieldCheck size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Integrity</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">Honest communication, transparent processes, and ethical technology practices are non-negotiable.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
                <div className="mb-6 p-4 bg-primary/5 text-primary rounded-full">
                <Users size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Client-Centricity</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">Your success is our metric. We build solutions tailored to your unique business challenges.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Team Section Removed - Moved to /team */}

      {/* Final CTA */}
      <section className="mb-12">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
            <div className="relative bg-primary rounded-2xl p-12 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Ready to build the future of your business with Vexel?</h2>
                <p className="text-white/80 text-lg">Join dozens of global enterprises that have trusted us with their digital evolution.</p>
                <button className="bg-white text-primary px-10 py-4 rounded-lg font-black text-lg hover:bg-gray-100 transition-all shadow-xl">
                Schedule a Consultation
                </button>
            </div>
            </div>
        </div>
      </section>
    </main>
  );
}
