"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * TYPEWRITER TEXT COMPONENT
 *
 * Performance:
 * - Client-side only to avoid hydration mismatches.
 * - Uses Framer Motion for smooth, hardware-accelerated animations.
 * - Optimized with AnimatePresence for clean entry/exit of strings.
 */

const defaultPhrases = ["Grows Your Business.", "Solves Complex Problems ."];

export function TypewriterText({
  phrases = defaultPhrases,
  className = "",
}: {
  phrases?: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText === currentPhrase) {
        // Full phrase displayed, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        // Still typing
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 70); // Increased typing speed
      }
    } else {
      if (displayText === "") {
        // Fully deleted, move to next phrase
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      } else {
        // Still deleting
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, 30); // Increased deleting speed
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, phrases]);

  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2 min-h-[1.2em]">
        {displayText}
      </span>
      {/* Animated Cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 translate-y-[2px]"
      />
    </span>
  );
}
