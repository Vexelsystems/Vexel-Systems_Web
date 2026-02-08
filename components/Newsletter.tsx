"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function Newsletter({
  category = "General",
  className = "",
}: {
  category?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const playSuccessSound = () => {
      const audio = new Audio("/sounds/notification.wav");
      audio.volume = 0.5;
      audio
        .play()
        .catch((e) => console.error("Error playing success sound:", e));
    };

    // Simulate/Prepare for Backend
    // This will be updated to fetch('/api/newsletter') later
    setTimeout(() => {
      toast.success(`Subscribed to ${category} Updates!`, {
        description: `You'll now receive insights related to ${category} and more.`,
      });
      playSuccessSound();
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className={`p-8 bg-primary rounded-[32px] text-white shadow-2xl shadow-primary/20 ${className}`}
    >
      <h4 className="text-2xl font-bold mb-4">Stay Informed</h4>
      <p className="text-white/80 text-sm leading-relaxed mb-6">
        Get the latest insights on business automation and{" "}
        <Link
          href="/products/vexel-pos"
          className="text-white hover:underline font-semibold"
        >
          POS
        </Link>{" "}
        trends delivered to your inbox weekly.
      </p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:bg-white/20 transition-all placeholder:text-white/40 text-white"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:brightness-105 transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Joining..." : "Join Newsletter"}
        </button>
      </form>
    </div>
  );
}
