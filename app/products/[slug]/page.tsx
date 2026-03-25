import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productSlugToLabel } from "@/lib/nav-products";
import { loadProductJson } from "@/lib/load-product-json";
import ProductPageFromJson from "@/components/products/ProductPageFromJson";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(productSlugToLabel).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const json = loadProductJson(params.slug);
  if (json) {
    return {
      title: json.seo.metaTitle,
      description: json.seo.metaDescription,
      keywords: [json.seo.primaryKeyword, ...json.seo.secondaryKeywords],
    };
  }
  const label = productSlugToLabel[params.slug];
  if (!label) return { title: "Product | Hostopia" };
  return {
    title: `${label} | Hostopia`,
    description: `Hostopia white-label ${label} for service providers.`,
  };
}

export default function ProductSlugPage({ params }: Props) {
  const label = productSlugToLabel[params.slug];
  if (!label) notFound();

  const json = loadProductJson(params.slug);
  if (!json) notFound();

  return <ProductPageFromJson data={json} />;
}
