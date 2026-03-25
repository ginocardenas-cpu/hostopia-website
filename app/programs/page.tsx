import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import hub from "@/content/programs/programs-hub.json";
import ProductSection from "@/components/products/ProductSection";
import { ProgramIcon } from "@/components/programs/programIcon";

export const metadata: Metadata = {
  title: hub.seo.metaTitle,
  description: hub.seo.metaDescription,
  keywords: [hub.seo.primaryKeyword, ...hub.seo.secondaryKeywords],
};

export default function ProgramsHubPage() {
  return (
    <main className="pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 pt-2 pb-4">
        <nav className="text-sm text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
          <Link href="/" className="hover:text-[#2CADB2]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{hub.pageName}</span>
        </nav>
      </div>

      <ProductSection variant="gray">
        <section
          className="rounded-3xl overflow-hidden border border-gray-100 px-8 py-12 md:px-12 md:py-16"
          style={{ backgroundColor: "#f7f6f2" }}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">{hub.hero.eyebrow}</span>
            </div>
            <h1
              className="font-black leading-tight mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#24282B",
              }}
            >
              {hub.hero.headline}
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              {hub.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "#F8CF41",
                  color: "#24282B",
                }}
              >
                {hub.hero.cta.primary}
                <ArrowRight size={16} className="shrink-0" />
              </Link>
              <a
                href="#program-cards"
                className="inline-flex items-center justify-center font-semibold px-8 py-3 rounded-full text-sm md:text-base border-2 transition-all duration-200 hover:bg-white/80"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  borderColor: "#24282B",
                  color: "#24282B",
                }}
              >
                {hub.hero.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <p
          className="text-lg leading-relaxed max-w-3xl mb-12"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          {hub.intro}
        </p>
        <div id="program-cards" className="scroll-mt-28 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {hub.programCards.map((card) => (
            <Link
              key={card.slug}
              href={card.href}
              className="group block rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <ProgramIcon name={card.icon} className="mb-5" />
              <h2
                className="text-xl font-bold mb-3 group-hover:text-[#2CADB2] transition-colors"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                {card.title}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                {card.description}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
              >
                Learn more
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </ProductSection>
    </main>
  );
}
