import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import channelContent from "@/content/programs/channel-as-a-service.json";
import marketingContent from "@/content/programs/partner-marketing.json";
import projectContent from "@/content/programs/project-management.json";
import serviceContent from "@/content/programs/service-management.json";
import supportContent from "@/content/programs/support.json";
import ChannelAsAServicePage from "@/components/programs/ChannelAsAServicePage";
import PartnerMarketingPage from "@/components/programs/PartnerMarketingPage";
import ProjectManagementPage from "@/components/programs/ProjectManagementPage";
import ServiceManagementPage from "@/components/programs/ServiceManagementPage";
import SupportPage from "@/components/programs/SupportPage";

type Props = { params: { slug: string } };

const programMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "channel-as-a-service": {
    title: channelContent.seo.metaTitle,
    description: channelContent.seo.metaDescription,
    keywords: [channelContent.seo.primaryKeyword, ...channelContent.seo.secondaryKeywords],
  },
  "partner-marketing": {
    title: marketingContent.seo.metaTitle,
    description: marketingContent.seo.metaDescription,
    keywords: [marketingContent.seo.primaryKeyword, ...marketingContent.seo.secondaryKeywords],
  },
  "project-management": {
    title: projectContent.seo.metaTitle,
    description: projectContent.seo.metaDescription,
    keywords: [projectContent.seo.primaryKeyword, ...projectContent.seo.secondaryKeywords],
  },
  "service-management": {
    title: serviceContent.seo.metaTitle,
    description: serviceContent.seo.metaDescription,
    keywords: [serviceContent.seo.primaryKeyword, ...serviceContent.seo.secondaryKeywords],
  },
  support: {
    title: supportContent.seo.metaTitle,
    description: supportContent.seo.metaDescription,
    keywords: [supportContent.seo.primaryKeyword, ...supportContent.seo.secondaryKeywords],
  },
};

const programComponents: Record<string, ComponentType> = {
  "channel-as-a-service": ChannelAsAServicePage,
  "partner-marketing": PartnerMarketingPage,
  "project-management": ProjectManagementPage,
  "service-management": ServiceManagementPage,
  support: SupportPage,
};

export function generateStaticParams() {
  return Object.keys(programMeta).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const meta = programMeta[params.slug];
  if (!meta) {
    return { title: "Programs | Hostopia" };
  }
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default function ProgramSlugPage({ params }: Props) {
  const Component = programComponents[params.slug];
  if (!Component) notFound();
  return <Component />;
}
