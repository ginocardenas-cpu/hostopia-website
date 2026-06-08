import type { Metadata } from "next";
import PlatformProductPage, { type PlatformPageContent } from "@/components/platform/PlatformProductPage";

const content: PlatformPageContent = {
  slug: "portal",
  title: "Portal",
  tagline: "One branded place to manage customers, services, support, and billing.",
  intro:
    "Portal gives service providers full visibility and control across their customer base in a completely white-labeled experience. Partners manage accounts at the top level, while SMB customers use a similar self-service view to access and manage their own services from one centralized workspace.",
  helps: [
    "Manage customers, services, billing, and support from a single platform.",
    "Give customers one place to access applications and service settings.",
    "Maintain ownership of the brand experience with a partner-branded interface.",
    "Reduce friction with self-service actions like password resets, service changes, and account administration.",
  ],
  forProviders:
    "You stay in control of the customer relationship, the support experience, and the service environment. Portal gives your teams a top-level operational view across accounts, while preserving a clear record of account activity, service changes, and customer interactions.",
  forCustomers:
    "Customers get a simple admin experience that helps them manage their business without jumping between tools. From Portal, they can access website builder tools, email, DNS settings, and other subscribed services in one place.",
  featuresKicker: "What makes it work",
  featuresHeadline: "Control, visibility, and self-service in one place.",
  features: [
    {
      title: "Full control, under your brand",
      body: "Portal is fully white-labeled, so your customers stay inside your ecosystem from login to support. Your brand, your language, your service experience.",
    },
    {
      title: "A single view across the relationship",
      body: "Manage customers, subscriptions, billing touchpoints, and support workflows from one operational hub. Give internal teams the visibility they need without adding complexity for the customer.",
    },
    {
      title: "Self-service that supports retention",
      body: "Customers can log in, access their applications, manage settings, reset passwords, and adjust services from one centralized place. Self-service portals are designed to let users resolve tasks and manage accounts without relying on an agent for every action.",
    },
    {
      title: "Track activity over time",
      body: "Portal helps maintain a running record of service activity and account events, giving teams better continuity across support, billing, and customer management. Analytics and reporting tools are commonly used in self-service portals to track behavior and understand usage trends.",
    },
  ],
  cta: {
    headline: "See Portal in your brand.",
    body: "Give your team one operational hub and your customers one self-service home — fully white-labeled, from login to support.",
    buttonText: "Book a Demo",
  },
};

export const metadata: Metadata = {
  title: "Portal | White-Label Customer & Service Management | Hostopia",
  description:
    "Portal gives service providers full visibility and control across their customer base in a completely white-labeled experience — manage customers, services, billing, and support from one place.",
  alternates: { canonical: "/platform/portal" },
};

export default function PortalPage() {
  return <PlatformProductPage content={content} />;
}
