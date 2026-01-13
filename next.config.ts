import type { NextConfig } from "next";

/**
 * NEXT.JS CONFIGURATION
 * 
 * Functional Overview:
 * - Images: Whitelists external domains (Google, Unsplash, CDN) for `next/image` optimization.
 * - Security: Defines Content Security Policy (CSP) to restrict script sources.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.tailwindcss.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
