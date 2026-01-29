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
  title: "Client Portal Login",
  description: "Vexel Systems",
  path: "/login",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function LoginPage() {
  return (
    <MotionWrapper>
      <LoginClient />
    </MotionWrapper>
  );
}
