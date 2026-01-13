"use client";

import dynamic from "next/dynamic";

const LiveChat = dynamic(() => import("@/components/LiveChat"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });
const GlowingBackground = dynamic(() => import("@/components/GlowingBackground"), { ssr: false });

export default function GlobalClientWrapper() {
  return (
    <>
      <GlowingBackground />
      <LiveChat />
      <CookieConsent />
    </>
  );
}
