import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductSection from "./ProductSection";

type OverviewProductPageProps = {
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
};

export default function OverviewProductPage({ label, eyebrow, headline, description }: OverviewProductPageProps) {
  return (
    <main className="pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 pt-2 pb-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-700">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{label}</span>
        </nav>
      </div>

      <ProductSection variant="gray">
        <section
          className="rounded-3xl overflow-hidden border border-gray-100"
          style={{ backgroundColor: "#f7f6f2" }}
        >
          <div className="p-8 md:p-12 max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">{eyebrow}</span>
            </div>
            <h1
              className="font-black leading-tight mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#24282B",
              }}
            >
              {headline}
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              {description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#F8CF41",
                color: "#24282B",
              }}
            >
              Talk to our team
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <p className="text-base leading-relaxed max-w-2xl" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
          Offer {label} fully white-labeled under your brand. Hostopia helps service providers launch, bundle, and scale
          digital services for SMBs â€” with the operations and support already built in.
        </p>
      </ProductSection>
    </main>
  );
}
