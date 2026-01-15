
import { Metadata } from "next";
import VexelHireClient from "./client";

export const metadata: Metadata = {
  title: "Vexel Hire",
  description: "Smart Recruitment & Staff Management System. AI-powered Applicant Tracking System (ATS) for Sri Lankan businesses.",
};

export default function VexelHirePage() {
  return <VexelHireClient />;
}
