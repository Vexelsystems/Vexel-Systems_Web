import { generatePageMetadata } from "@/lib/seo";
import LoginClient from "@/components/LoginClient";

export const metadata = generatePageMetadata({
  title: "Login - Vexel Nexus",
  description: "Secure login portal for Vexel Systems clients and staff.",
  path: "/login",
});

export default function LoginPage() {
  return <LoginClient />;
}
