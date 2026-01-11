import Image from "next/image";
import { Rocket, Eye, Lightbulb, ShieldCheck, Users, ArrowRight, Share2, MapPin } from "lucide-react";

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {/* Hero Section */}
      <section className="mb-24">
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
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-24">
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
      </section>

      {/* Company Timeline */}
      <section className="mb-24 py-16 bg-inner-box/50 -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-3xl">
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
                <h4 className="text-primary font-black text-xl mb-1">2015</h4>
                <p className="font-bold text-lg text-foreground">Foundation Laid</p>
                <p className="text-sm text-foreground/50">Vexel Systems starts in Colombo, Sri Lanka with a team of 5 visionaries.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50"></div>
              <div className="w-[45%]"></div>
            </div>

            {/* Milestone 2 */}
            <div className="relative flex items-center justify-between mb-16 group">
              <div className="w-[45%]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10 shadow-lg shadow-primary/50"></div>
              <div className="w-[45%] text-left pl-8">
                <h4 className="text-primary font-black text-xl mb-1">2018</h4>
                <p className="font-bold text-lg text-foreground">Regional Expansion</p>
                <p className="text-sm text-foreground/50">Expanding services to Southeast Asian markets and establishing core DevOps expertise.</p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative flex items-center justify-between mb-16 group">
              <div className="w-[45%] text-right pr-8">
                <h4 className="text-primary font-black text-xl mb-1">2021</h4>
                <p className="font-bold text-lg text-foreground">Global Footprint</p>
                <p className="text-sm text-foreground/50">Opening our first international desk and serving Tier-1 enterprise clients globally.</p>
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
                <p className="font-bold text-lg text-foreground">Innovation Hub</p>
                <p className="text-sm text-foreground/50">Leading AI and Cloud integration projects for Fortune 500 companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-24">
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
      </section>

      {/* Team Section */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">The Minds Behind Vexel</h2>
            <p className="text-foreground/60 mt-2">Meet the leadership driving our global mission.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See All Members <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="group">
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO7bjv_DiwfhHynhYvM0HSulVj7Ip29YON384zA-uUoh3v-SGTQgGUu4Nieea7kNTJ_uJt-pVIbUStMrOlFe5bZ6VKw2jx1iNRYXZrWkDQVlWgjcb08aZMLcQR-KLAQPfrpQxPShxkMFrAHjcyiD1u5CUdbeaA41vUPhnxDUkbeQMX5QLm5nelmktYgd7sE98hbYMOODzOnrkz-qXoqw6RwgjZtN6uNYKo-UXMOMK8FMz3XcCUHWugt-eAU2par_1WNvypH4yZ5mWs"
                alt="Harsha Perera - CEO"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3 text-white">
                  <Share2 className="cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold text-foreground">Harsha Perera</h5>
            <p className="text-sm text-foreground/50">Chief Executive Officer</p>
          </div>
          {/* Team Member 2 */}
          <div className="group">
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_yjE6IvE1UiGDj9sDAQmXwcftpqi_MGTNdrKsuocx0WpaIOn19kF5B0L6KPd69ZzSpD0O9crJa-Z46hljboStI5ZlYMKIIg7SvbEYIH8K6dGkhUzRfh2n-4X05yU0LXtIoX-zaJJYdGrQ-Sa9xc1WoMP-y8OG5myxXRiT8lG6fghxrkzkBJ9PDSU66SB27dpXgL95ObEsznPbvSeE-ZgRGQs9pRy2lnBe1-QwrE7RnmY5ffO3mLqhzHwByH8cXfbsm1CGPL4Ana0E"
                alt="Sadhna Jayawardena - CTO"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3 text-white">
                     <Share2 className="cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold text-foreground">Sadhna Jayawardena</h5>
            <p className="text-sm text-foreground/50">Chief Technology Officer</p>
          </div>
          {/* Team Member 3 */}
          <div className="group">
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH3vdwPvR1Su_uVYmovbRoaEV-oZXLDLzF3OfHBiP61GIQPIdwr7C8nHLWz9WYONBT8ja41fZPjIog5jvE8xTXmCvwKBZHhX6Lo6mWDY2zZ207CVsY4UTu8_LzsIn54slewsS88TOTI1ySi39B5SR681ee5iRWs85mnKRvJYZAkp7-awxkMU94yRjLgCzWGdHyC7RitEU_vgkhrCNOGDXHe_7HdOP-UlCWeLQ0xshcn6_CGUAe5FePIWFPAkXeiDzZP_3NQNACpK2l"
                alt="Dilshan Fernando - Head of Engineering"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3 text-white">
                     <Share2 className="cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold text-foreground">Dilshan Fernando</h5>
            <p className="text-sm text-foreground/50">Head of Engineering</p>
          </div>
          {/* Team Member 4 */}
          <div className="group">
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwR9YLWazx9U-aJ_uAMFm2ZyKBd6Bf0I3IWGQrorpB2vZG8q7dGj2cMWTLqqGAsWOAvLehr0MVyql2xRsRqrq7SVTcymajZNVsGTs0XGRMzO5a__1OpDFYsIddxa4igQVgz669DylQfEiFi3OQ09BeO2Axh9gRDceBRLkMJCWDjs0RBxsbSW2Tk5IZkKFkUbBKdcByoUxvNbj-bX-sKJoHG_l6Vf0nGm_UqnMXSSKVbtTt1jtFGs-Yqho8F-KrDqs385szW5izkJZ"
                alt="Anjali De Silva - Creative Director"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3 text-white">
                     <Share2 className="cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold text-foreground">Anjali De Silva</h5>
            <p className="text-sm text-foreground/50">Creative Director</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-12">
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
      </section>
    </main>
  );
}
