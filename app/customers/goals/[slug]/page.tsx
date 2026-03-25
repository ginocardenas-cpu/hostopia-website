import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomerStoryPage from "@/components/customers/CustomerStoryPage";
import { customerGoalSlugs, getCustomerGoalContent } from "@/lib/customer-goals-content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return customerGoalSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = getCustomerGoalContent(params.slug);
  if (!content) return { title: "Customer goals | Hostopia" };
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    keywords: [content.seo.primaryKeyword, ...content.seo.secondaryKeywords],
  };
}

export default function CustomerGoalPage({ params }: Props) {
  const content = getCustomerGoalContent(params.slug);
  if (!content) notFound();

  return (
    <CustomerStoryPage content={content} breadcrumbGroup="What they want" sectionEyebrow="What they want" />
  );
}
