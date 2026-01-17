"use client";


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, CheckCircle, Phone, Monitor, User, FileText, ArrowRight, ShieldCheck, Download } from 'lucide-react';

import { toast } from "sonner"; // Import toast
import { companyDetails } from '@/lib/companydetails';

export default function QuoteSuccessClient() {
  const [quoteId, setQuoteId] = useState<string | null>(null);

  const nextSteps = [
    { id: 1, title: "Form Received", description: "We've securely received your project details.", icon: <CheckCircle className="w-6 h-6" />, active: true },
    { id: 2, title: "Technical Review", description: "Our architects analyze your requirements.", icon: <FileText className="w-6 h-6" />, active: false },
    { id: 3, title: "Consultation Call", description: "We'll schedule a call to discuss the roadmap.", icon: <Phone className="w-6 h-6" />, active: false },
    { id: 4, title: "Free Trial", description: "Get hands-on with your own dedicated account.", icon: <User className="w-6 h-6" />, active: false }
  ];

  useEffect(() => {
    const generateReceipt = async () => {
      // Check for quote details in session storage
      const storedData = sessionStorage.getItem("latest_quote");
      
      if (!storedData) {
        // Redirect to quote page if no submission found
        window.location.href = "/quote";
        return;
      }

      if (storedData) {
        // Trigger Toast Notification
        toast.success("Quote submitted successfully!", {
           description: "We have received your project details.",
           duration: 5000,
        });

        try {
          // Dynamic import to ensure client-side execution
          const { default: jsPDF } = await import("jspdf");
          const data = JSON.parse(storedData);
          setQuoteId(data.quoteId);
          
          const doc = new jsPDF();
          const pageWidth = doc.internal.pageSize.getWidth();
          const pageHeight = doc.internal.pageSize.getHeight();
          
          // --- HEADER & BRANDING ---
          // Load Logo
          const logoImg = new Image();
          logoImg.src = "/VLogo.png";
          
          logoImg.onload = () => {
             // Add Logo (Centered)
             const imgWidth = 30; // mm
             const imgHeight = (logoImg.height * imgWidth) / logoImg.width;
             const xPos = (pageWidth - imgWidth) / 2;
             doc.addImage(logoImg, 'PNG', xPos, 10, imgWidth, imgHeight);

             // Company Name
             doc.setFont("helvetica", "bold");
             doc.setFontSize(22);
             doc.setTextColor(40, 40, 40);
             doc.text("VEXEL SYSTEMS", pageWidth / 2, 45, { align: "center" });
             
             // Tagline/Subtitle
             doc.setFont("helvetica", "normal");
             doc.setFontSize(10);
             doc.setTextColor(100, 100, 100);
             doc.text("Technology Made Simple", pageWidth / 2, 50, { align: "center" });

             // Divider
             doc.setDrawColor(200, 200, 200);
             doc.line(20, 55, pageWidth - 20, 55);

             // --- RECEIPT DETAILS ---
             doc.setFontSize(12);
             doc.setTextColor(0, 0, 0);
             doc.text("QUOTE RECEIPT", 20, 70);

             doc.setFontSize(10);
             doc.setTextColor(80, 80, 80);
             doc.text(`Reference ID: ${data.quoteId}`, 20, 80);
             doc.text(`Date: ${new Date(data.timestamp).toLocaleString()}`, 20, 85);

             // --- CONTENT BOX ---
             doc.setFillColor(245, 247, 250);
             doc.roundedRect(20, 95, pageWidth - 40, 70, 3, 3, "F");

             doc.setFont("helvetica", "bold");
             doc.setFontSize(11);
             doc.setTextColor(0, 0, 0);
             doc.text("Project Request Details:", 30, 108);

             let y = 118;
             const addField = (label: string, value: string) => {
                doc.setFont("helvetica", "bold");
                doc.setTextColor(0, 0, 0);
                doc.text(label, 30, y);
                doc.setFont("helvetica", "normal");
                doc.setTextColor(60, 60, 60);
                doc.text(value || "-", 70, y);
                y += 8;
             };

             addField("Type:", data.project_type);
             addField("Budget:", data.budget);
             addField("Timeline:", data.timeline);
             
             doc.setFont("helvetica", "bold");
             doc.text("Requirements:", 30, y + 5);
             doc.setFont("helvetica", "normal");
             doc.setTextColor(60, 60, 60);
             const splitDesc = doc.splitTextToSize(data.project_details || "No details provided.", pageWidth - 70);
             doc.text(splitDesc, 30, y + 12);


             // --- FOOTER & NEXT STEPS ---
             const remainingY = 200;
             doc.setFont("helvetica", "bold");
             doc.setTextColor(0, 51, 102); // Primary Blue
             doc.text("WHAT HAPPENS NEXT?", 20, remainingY);
             
             doc.setFont("helvetica", "normal");
             doc.setFontSize(9);
             doc.setTextColor(80, 80, 80);
             doc.text("1. Our specialized team handles your request.", 20, remainingY + 8);
             doc.text("2. We analyze the feasibility and budget match.", 20, remainingY + 14);
             doc.text("3. You receive a call/email within 24 hours.", 20, remainingY + 20);

             // --- RICH FOOTER ---
             const footerStart = pageHeight - 40;
             
             // Tagline
             doc.setFont("helvetica", "italic");
             doc.setFontSize(10);
             doc.setTextColor(100, 100, 100);
             doc.text(`"${companyDetails.tagline}"`, pageWidth / 2, footerStart, { align: "center" });
             
             // Contact Info
             doc.setFont("helvetica", "normal");
             doc.setFontSize(9);
             doc.setTextColor(60, 60, 60);
             doc.text(`Phone: ${companyDetails.contact.phone}  |  Email: ${companyDetails.contact.email}`, pageWidth / 2, footerStart + 6, { align: "center" });
             
             // Social Links
             doc.setFontSize(8);
             doc.setTextColor(0, 51, 102);
             const socialY = footerStart + 12;
             doc.textWithLink("Facebook", pageWidth / 2 - 35, socialY, { url: companyDetails.socialLinks.facebook });
             doc.textWithLink("LinkedIn", pageWidth / 2 - 12, socialY, { url: companyDetails.socialLinks.linkedin });
             doc.textWithLink("Twitter", pageWidth / 2 + 12, socialY, { url: companyDetails.socialLinks.twitter });
             doc.textWithLink("Instagram", pageWidth / 2 + 32, socialY, { url: companyDetails.socialLinks.instagram });
             
             // Website
             doc.setTextColor(150, 150, 150);
             doc.text(companyDetails.contact.website, pageWidth / 2, footerStart + 20, { align: "center" });

             // Save
             doc.save(`Vexel-Quote-${data.quoteId}.pdf`);
          };

          logoImg.onerror = () => {
             // Fallback if image fails - Text only
             doc.text("VEXEL SYSTEMS", 20, 20);
             doc.save(`Vexel-Quote-${data.quoteId}.pdf`);
          };
          
          // localStorage.removeItem("latest_quote"); // Optional cleanup
        } catch (err) {
          console.error("Error generating receipt:", err);
        }
      }
    };

    generateReceipt();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
      <div className="max-w-[960px] w-full flex flex-col items-center">
        {/* Hero Success Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="size-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4 border border-primary/20 shadow-lg shadow-primary/10">
            <Check className="w-10 h-10 stroke-3" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Thanks for reaching out!
          </h1>
          <h2 className="text-[22px] font-semibold text-primary/90">
            {quoteId ? `Quote #${quoteId} Received` : "Our POS Experts Will Contact You Within 24 Hours"}
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-foreground/60">
            We've received your request and are preparing a personalized experience for your business. 
            <br/><span className="text-primary font-bold">Your receipt has been downloaded automatically.</span>
          </p>
        </div>

        {/* What Happens Next Section */}
        <div className="w-full bg-card rounded-xl p-10 shadow-sm border border-primary/10 mb-12 relative overflow-hidden">
           {/* Decorative background glow */}
           <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
           
          <h3 className="text-xl font-bold mb-10 text-center">What Happens Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {nextSteps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 size-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1 opacity-60">Step {step.id}</h4>
                <p className="font-semibold text-lg mb-1">{step.title}</p>
                <p className="text-sm text-foreground/50">{step.description}</p>
                {step.id < 4 && (
                  <div className="hidden md:block absolute top-6 left-[60%] right-[-40%] h-[2px] bg-primary/20 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="w-full flex flex-col items-center">
          <h3 className="text-lg font-bold mb-6">While you wait, explore our resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Resource Card 1 */}
            <Link href="#" className="flex items-center p-6 bg-card border border-primary/10 rounded-xl hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Vexel Blog</h4>
                <p className="text-sm text-foreground/50">Insights and tips on scaling your retail business.</p>
              </div>
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-2 w-5 h-5" />
            </Link>
            {/* Resource Card 2 */}
            <Link href="/portfolio" className="flex items-center p-6 bg-card border border-primary/10 rounded-xl hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-5 group-hover:bg-primary group-hover:text-white transition-colors">
                 <CheckCircle className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Case Studies</h4>
                <p className="text-sm text-foreground/50">How 500+ businesses grow with Vexel POS.</p>
              </div>
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-16 flex flex-col items-center text-center">
          <Link href="/" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-primary/20 mb-8">
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-foreground/40 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted by leading businesses & Individuals worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}
