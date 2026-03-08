import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { allChannels } from "@/lib/marketing-dashboard-data";
import ChannelSection from "@/components/marketing-dashboard/ChannelSection";

export const metadata: Metadata = {
  title: "Marketing Dashboard | Hostopia",
  description:
    "View website traffic, social performance, email marketing, and search metrics in one place.",
};

export default function MarketingDashboardPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand-teal"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal text-white">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-heading text-2xl font-bold text-brand-charcoal sm:text-3xl">
                  Marketing Dashboard
                </h1>
                <p className="text-sm text-gray-500">
                  Share this page to view channel performance with your team
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Last updated: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
        </div>

        {/* Channel sections */}
        <div className="space-y-8">
          {allChannels.map((channel) => (
            <ChannelSection key={channel.id} channel={channel} />
          ))}
        </div>

        {/* Footer note for sharing */}
        <div className="mt-12 rounded-xl border border-brand-teal/20 bg-brand-teal-light/50 p-4 text-center text-sm text-gray-600">
          <p>
            This dashboard uses sample data. Connect Google Analytics, Meta, your email provider, and Search Console to show live metrics.
          </p>
        </div>
      </div>
    </main>
  );
}
