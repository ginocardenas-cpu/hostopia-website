import type { Metadata } from "next";
import PlatformProductPage, { type PlatformPageContent } from "@/components/platform/PlatformProductPage";

const content: PlatformPageContent = {
  slug: "dms",
  title: "Docket Management System (DMS)",
  tagline: "A structured workflow for delivered-for-you services.",
  intro:
    "DMS is where service providers manage DIFM services such as logo design and website design through a clear, trackable workflow. It centralizes orders, statuses, approvals, comments, and delivery records so everyone involved can see what is happening and what comes next.",
  helps: [
    "Track order progress from request through delivery and signoff.",
    "Keep customer, coordinator, and designer communication in one recorded workflow.",
    "Manage reviews, approvals, and change history with a documented trail.",
    "Capture delivery details such as maintenance hours, updates, and completed work.",
  ],
  forProviders:
    "DMS creates operational control around services that are not instant or self-serve. Instead of relying on scattered emails and informal updates, your teams get a structured system for managing work, documenting interactions, and maintaining accountability at every stage.",
  forCustomers:
    "Customers get visibility into the work being done on their behalf without losing the option of live support. They can review progress, respond to requests, provide approvals, and keep a clear record of decisions and deliverables over time.",
  featuresKicker: "What makes it work",
  featuresHeadline: "Structure, accountability, and a shared record.",
  features: [
    {
      title: "A clear record of every order",
      body: "Track requests, statuses, milestones, and signoffs in one place. DMS gives your teams and your customers a shared system of record for delivered services.",
    },
    {
      title: "Approvals without ambiguity",
      body: "Route work through review and approval steps with a visible history of comments, updates, and final decisions. Approval workflow systems are built to track document history and maintain an audit trail of changes and signoffs.",
    },
    {
      title: "Better coordination across teams",
      body: "Designers, coordinators, support teams, and customers can all work from the same timeline of activity. This improves handoffs and reduces the confusion that comes from managing complex service work across disconnected channels.",
    },
    {
      title: "Insight into delivery trends",
      body: "With orders, statuses, and hours tracked in one system, providers can spot recurring issues, monitor workload patterns, and improve service operations over time. Workflow systems are valuable because they create searchable histories and visibility into approvals, messages, and process bottlenecks.",
    },
  ],
  cta: {
    headline: "Bring structure to your delivered services.",
    body: "Track every order, approval, and delivery in one recorded workflow your teams and customers can rely on.",
    buttonText: "Book a Demo",
  },
};

export const metadata: Metadata = {
  title: "Docket Management System (DMS) | Delivered-Service Workflow | Hostopia",
  description:
    "DMS centralizes orders, statuses, approvals, comments, and delivery records for done-for-you services like logo and website design — a structured, trackable workflow for providers and customers.",
  alternates: { canonical: "/platform/dms" },
};

export default function DmsPage() {
  return <PlatformProductPage content={content} />;
}
