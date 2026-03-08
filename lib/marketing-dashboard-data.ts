/**
 * Marketing dashboard types and mock data.
 * Replace with real API calls (Google Analytics, Meta, Mailchimp, Search Console, etc.) when ready.
 */

export type Trend = "up" | "down" | "neutral";

export interface MetricSummary {
  label: string;
  value: string | number;
  change?: number; // percentage change vs previous period
  trend?: Trend;
  subtitle?: string;
}

export interface TimeSeriesPoint {
  date: string;
  value: number;
  label?: string;
}

export interface ChannelSummary {
  id: string;
  name: string;
  metrics: MetricSummary[];
  chartData?: TimeSeriesPoint[];
  description?: string;
}

// Mock data — replace with your APIs
export const websiteTraffic: ChannelSummary = {
  id: "website",
  name: "Website Traffic",
  description: "Sessions, pageviews, and engagement",
  metrics: [
    { label: "Sessions", value: "124.2K", change: 12.4, trend: "up", subtitle: "Last 30 days" },
    { label: "Pageviews", value: "318.5K", change: 8.2, trend: "up", subtitle: "Last 30 days" },
    { label: "Avg. session", value: "2m 34s", change: 5.1, trend: "up" },
    { label: "Bounce rate", value: "42%", change: -3.2, trend: "down" },
  ],
  chartData: [
    { date: "Week 1", value: 28500 },
    { date: "Week 2", value: 30100 },
    { date: "Week 3", value: 32200 },
    { date: "Week 4", value: 33400 },
  ],
};

export const socialPerformance: ChannelSummary = {
  id: "social",
  name: "Social Performance",
  description: "Reach, engagement, and followers",
  metrics: [
    { label: "Total reach", value: "89.4K", change: 18.2, trend: "up", subtitle: "Last 30 days" },
    { label: "Engagements", value: "12.1K", change: 22.0, trend: "up" },
    { label: "New followers", value: "1,240", change: 7.5, trend: "up" },
    { label: "Eng. rate", value: "4.2%", change: 0.8, trend: "up" },
  ],
  chartData: [
    { date: "Week 1", value: 18500 },
    { date: "Week 2", value: 22100 },
    { date: "Week 3", value: 24200 },
    { date: "Week 4", value: 24600 },
  ],
};

export const emailMarketing: ChannelSummary = {
  id: "email",
  name: "Email Marketing",
  description: "Sends, opens, and clicks",
  metrics: [
    { label: "Emails sent", value: "45.2K", change: 2.1, trend: "up", subtitle: "Last 30 days" },
    { label: "Open rate", value: "34.6%", change: 1.2, trend: "up" },
    { label: "Click rate", value: "5.8%", change: -0.4, trend: "down" },
    { label: "Unsubscribes", value: "128", change: -12.0, trend: "down" },
  ],
  chartData: [
    { date: "Week 1", value: 32 },
    { date: "Week 2", value: 35 },
    { date: "Week 3", value: 36 },
    { date: "Week 4", value: 35 },
  ],
};

export const searchPerformance: ChannelSummary = {
  id: "search",
  name: "Search (SEO & Paid)",
  description: "Organic and paid search",
  metrics: [
    { label: "Organic clicks", value: "28.4K", change: 14.3, trend: "up", subtitle: "Last 30 days" },
    { label: "Impressions", value: "412K", change: 9.1, trend: "up" },
    { label: "Avg. position", value: "4.2", change: -0.3, trend: "up" },
    { label: "CTR", value: "6.9%", change: 0.5, trend: "up" },
  ],
  chartData: [
    { date: "Week 1", value: 6200 },
    { date: "Week 2", value: 7100 },
    { date: "Week 3", value: 7500 },
    { date: "Week 4", value: 7700 },
  ],
};

export const allChannels: ChannelSummary[] = [
  websiteTraffic,
  socialPerformance,
  emailMarketing,
  searchPerformance,
];
