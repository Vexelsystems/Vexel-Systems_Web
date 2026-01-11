import { MapPin, Phone, Mail, Send, ChevronsUpDown, Facebook, Twitter, Linkedin, Clock, ExternalLink, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { companyDetails } from "@/lib/companydetails";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12 lg:py-20">
      {/* Page Heading */}
      <div className="mb-12 lg:mb-16">
        <h1 className="text-foreground text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">Talk to an Expert</h1>
        <p className="text-foreground/60 text-lg max-w-2xl">
          Partner with {companyDetails.name} for global technology solutions and innovative software development. We're here to turn your vision into reality.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column: Contact Form */}
        <section className="bg-white dark:bg-black p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent successfully!", {
              description: "Thank you for reaching out. We will get back to you shortly."
            });
            // Reset form if needed, for now just toast.
            (e.target as HTMLFormElement).reset();
          }}>
            {/* ... fields ... */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
                <span>Send Message</span>
                <Send size={18} />
              </button>
              <button 
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('vexel-chat-open'))}
                className="flex-1 py-4 bg-white dark:bg-zinc-900 text-foreground border border-gray-200 dark:border-gray-800 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
              >
                <span>Vexel Chat</span>
                <MessageSquare size={18} className="text-primary" />
              </button>
            </div>
          </form>
        </section>

        {/* Right Column: Contact Details */}
        <section className="flex flex-col justify-between py-4">
          <div className="space-y-10">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Our Office</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {companyDetails.address.street},<br/>
                  {companyDetails.address.city} {companyDetails.address.postalCode},<br/>
                  {companyDetails.address.country}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {companyDetails.contact.phone}<br/>
                  {companyDetails.contact.whatsapp}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {companyDetails.contact.email}<br/>
                  {companyDetails.contact.salesEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 pt-10 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Connect with us</h3>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-foreground/60" href={companyDetails.socialLinks.facebook} target="_blank">
                <Facebook size={20} />
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-foreground/60" href={companyDetails.socialLinks.twitter} target="_blank">
                <Twitter size={20} />
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-foreground/60" href={companyDetails.socialLinks.linkedin} target="_blank">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Google Maps Section */}
      <section className="mt-20 lg:mt-32">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 h-[450px] relative">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 font-medium">Loading Map...</span>
          </div>
          <iframe 
            allowFullScreen 
            className="w-full h-full relative z-10 border-0 grayscale hover:grayscale-0 transition-all duration-700" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63044.15242337628!2d80.461621370217!3d9.040989065604473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3af9642531d054e7%3A0x6a0c5c366e6c4331!2sVavuniya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            title="Office Location Map"
          >
          </iframe>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground/60 text-sm">
            <Clock size={16} />
            <span>Opening Hours: Mon - Fri, 9:00 AM - 6:00 PM (IST)</span>
          </div>
          <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="https://maps.google.com" target="_blank">
            Get Directions
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
