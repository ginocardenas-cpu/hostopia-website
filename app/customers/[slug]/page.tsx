import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomerStoryPage from "@/components/customers/CustomerStoryPage";
import { customerTypeSlugs, getCustomerTypeContent } from "@/lib/customer-types-content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return customerTypeSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = getCustomerTypeContent(params.slug);
  if (!content) return { title: "Customers | Hostopia" };
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    keywords: [content.seo.primaryKeyword, ...content.seo.secondaryKeywords],
  };
}

export default function CustomerTypePage({ params }: Props) {
  const content = getCustomerTypeContent(params.slug);
  if (!content) notFound();

  return (
    <CustomerStoryPage content={content} breadcrumbGroup="Who we work with" sectionEyebrow="Who we work with" />
  );
}
