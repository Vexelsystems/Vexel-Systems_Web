import { generatePageMetadata } from "@/lib/seo";
import LoginClient from "@/components/LoginClient";

/**
 * LOGIN ROOT PAGE
 * 
 * Functional Overview:
 * - Purpose: Secure entry point for the "Vexel Nexus" client portal.
 * - Implementation: Wraps `LoginClient` which handles the actual auth form and state.
 */

export const metadata = generatePageMetadata({
  title: "Login - Vexel Nexus",
  description: "Secure login portal for Vexel Systems clients and staff.",
  path: "/login",
});

export default function LoginPage() {
  return <LoginClient />;
}
