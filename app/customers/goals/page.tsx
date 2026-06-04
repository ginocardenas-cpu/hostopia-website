import type { Metadata } from "next";
import ConsolidatedCustomersPage from "@/components/customers/ConsolidatedCustomersPage";
import whatTheyWantPage from "@/content/customers/what-they-want-page.json";
import type { ConsolidatedPage } from "@/lib/consolidated-page-types";

const page = whatTheyWantPage as ConsolidatedPage;

export function generateMetadata(): Metadata {
  return {
    title: page.seo.metaTitle,
    description: page.seo.metaDescription,
    keywords: [page.seo.primaryKeyword, ...page.seo.secondaryKeywords],
    alternates: { canonical: page.seo.urlSlug },
  };
}

export default function CustomerGoalsIndexPage() {
  return <ConsolidatedCustomersPage page={page} />;
}
