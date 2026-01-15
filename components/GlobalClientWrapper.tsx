/**
 * GLOBAL CLIENT WRAPPER
 * Lazy loads non-critical client components to improve initial page load
 * All use ssr:false to prevent server-side rendering (browser APIs required)
 */

"use client";

import dynamic from "next/dynamic";

// Lazy loaded with ssr:false - loads after initial render
const LiveChat = dynamic(() => import("@/components/LiveChat"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });
const GlowingBackground = dynamic(() => import("@/components/GlowingBackground"), { ssr: false });

export default function GlobalClientWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <LiveChat />
      <CookieConsent />
     <GlowingBackground />
      {children}
    </>
  );
}
