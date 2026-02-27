import { notFound } from "next/navigation";
import { productSlugToLabel } from "@/lib/nav-products";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  const label = productSlugToLabel[slug];
  if (!label) notFound();

  return (
    <main className="min-h-[60vh] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-700">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{label}</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{label}</h1>
        <p className="text-gray-600">Content coming soon.</p>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(productSlugToLabel).map((slug) => ({ slug }));
}
