import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductSection from "@/components/products/ProductSection";
import type { CustomerStoryContent, SolutionBlock } from "@/lib/customer-story-types";

type CustomerStoryPageProps = {
  content: CustomerStoryContent;
  breadcrumbGroup: string;
  sectionEyebrow: string;
};

function formatFieldLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function secondaryCtaHref(label: string): string {
  const t = label.toLowerCase();
  if (t.includes("portfolio") || t.includes("product")) return "/products";
  return "#customer-solution";
}

function SolutionBlockBody({ block }: { block: SolutionBlock }) {
  return (
    <div className="space-y-6">
      {block.content ? (
        <p className="text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
          {block.content}
        </p>
      ) : null}

      {block.bundles && block.bundles.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-[#f7f6f2]">
                <th className="px-4 py-3 font-heading font-semibold text-[#24282B]">Bundle</th>
                <th className="px-4 py-3 font-heading font-semibold text-[#24282B]">Products</th>
                <th className="px-4 py-3 font-heading font-semibold text-[#24282B]">Impact</th>
              </tr>
            </thead>
            <tbody>
              {block.bundles.map((b) => (
                <tr key={b.name} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {b.name}
                  </td>
                  <td className="px-4 py-3" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                    {b.products}
                  </td>
                  <td className="px-4 py-3" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                    {b.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {block.scenarios && block.scenarios.length > 0 ? (
        <div className="space-y-6">
          {block.scenarios.map((s) => (
            <div key={s.provider} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h4 className="text-lg font-bold text-[#24282B] mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {s.provider}
              </h4>
              <p className="text-sm mb-4" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {s.details}
              </p>
              <dl className="grid gap-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {Object.entries(s.projections).map(([k, v]) => (
                  <div key={k} className="flex flex-wrap gap-2">
                    <dt className="font-semibold text-[#24282B]">{formatFieldLabel(k)}:</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      ) : null}

      {block.segments && block.segments.length > 0 ? (
        <div className="space-y-4">
          {block.segments.map((seg, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              {Object.entries(seg).map(([k, v]) => (
                <p key={k} className="mb-2 last:mb-0 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                  <span className="font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {formatFieldLabel(k)}:{" "}
                  </span>
                  {v}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : null}

      {block.examples && block.examples.length > 0 ? (
        <ul className="space-y-4">
          {block.examples.map((ex) => (
            <li key={ex.provider} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="font-bold text-[#24282B] mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {ex.provider}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {ex.positioning}
              </p>
            </li>
          ))}
        </ul>
      ) : null}

      {block.productLadder && block.productLadder.length > 0 ? (
        <div className="rounded-xl border border-[#2CADB2]/30 bg-[#e8f7f7]/40 p-5">
          <ul className="space-y-3">
            {block.productLadder.map((r, i) => (
              <li key={i} className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                <span className="font-semibold text-[#24282B]">
                  {r.from} → {r.to}
                </span>
                <span className="text-[#2CADB2]"> — </span>
                {r.reason}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function TierObjectCard({ tier }: { tier: Record<string, string | number> }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <ul className="space-y-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
        {Object.entries(tier).map(([k, v]) => (
          <li key={k}>
            <span className="font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {formatFieldLabel(k)}:{" "}
            </span>
            {String(v)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CustomerStoryPage({ content, breadcrumbGroup, sectionEyebrow }: CustomerStoryPageProps) {
  const { hero, challenge, solution, outcomes, migrationScenarios, retentionByProvider, bundleFrameworks, whyBundlesWork, whyNow, faq, stats, cta } =
    content;

  const secondaryHref = secondaryCtaHref(hero.cta.secondary);

  return (
    <main className="pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 pt-2 pb-4">
        <nav className="text-sm text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
          <Link href="/" className="hover:text-[#2CADB2]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{breadcrumbGroup}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{content.label}</span>
        </nav>
      </div>

      <ProductSection variant="gray">
        <section
          className="rounded-3xl overflow-hidden border border-gray-100 p-8 md:p-12"
          style={{ backgroundColor: "#f7f6f2" }}
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">{hero.eyebrow ?? sectionEyebrow}</span>
            </div>
            <h1
              className="font-black leading-tight mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#24282B",
              }}
            >
              {hero.headline}
            </h1>
            <p
              className="text-lg md:text-xl font-semibold leading-snug mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
            >
              {hero.subheadline}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              {hero.description}
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
                {hero.cta.primary}
                <ArrowRight size={16} />
              </Link>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center font-semibold px-8 py-3 rounded-full text-sm md:text-base border-2 transition-all duration-200 hover:bg-white/80"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  borderColor: "#24282B",
                  color: "#24282B",
                }}
              >
                {hero.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </ProductSection>

      {challenge ? (
        <ProductSection variant="white">
          <section id="customer-challenge" className="scroll-mt-28 max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">The challenge</span>
            </div>
            <h2
              className="font-bold leading-tight mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {challenge.heading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
              {challenge.content}
            </p>
            {challenge.callout ? (
              <blockquote
                className="border-l-4 pl-5 py-2 text-base md:text-lg font-medium italic"
                style={{ borderColor: "#2CADB2", fontFamily: "Raleway, sans-serif", color: "#24282B" }}
              >
                {challenge.callout}
              </blockquote>
            ) : null}
            {challenge.sources && challenge.sources.length > 0 ? (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Sources
                </p>
                <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {challenge.sources.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        </ProductSection>
      ) : null}

      {solution ? (
        <ProductSection variant="gray">
          <section id="customer-solution" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">The solution</span>
            </div>
            <h2
              className="font-bold leading-tight mb-4 max-w-3xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {solution.heading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
              {solution.intro}
            </p>
            <div className="space-y-12">
              {solution.blocks.map((block) => (
                <div key={block.heading}>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                  >
                    {block.heading}
                  </h3>
                  <SolutionBlockBody block={block} />
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      {bundleFrameworks ? (
        <ProductSection variant="white">
          <section className="scroll-mt-28">
            <h2
              className="font-bold leading-tight mb-8"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {bundleFrameworks.heading}
            </h2>
            <div className="space-y-12">
              {bundleFrameworks.frameworks.map((fw) => (
                <div key={fw.providerType}>
                  <h3 className="text-lg font-bold mb-4 text-[#2CADB2]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {fw.providerType}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {fw.tiers.map((tier, i) => (
                      <TierObjectCard key={i} tier={tier} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      {whyBundlesWork ? (
        <ProductSection variant="gray">
          <section>
            <h2
              className="font-bold leading-tight mb-8"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {whyBundlesWork.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyBundlesWork.perspectives.map((p) => (
                <div key={p.for} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-bold text-[#2CADB2] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {p.for}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                    {p.benefit}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      {whyNow ? (
        <ProductSection variant="white">
          <section className="max-w-4xl">
            <h2
              className="font-bold leading-tight mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {whyNow.heading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
              {whyNow.content}
            </p>
          </section>
        </ProductSection>
      ) : null}

      {outcomes ? (
        <ProductSection variant="gray">
          <section>
            <h2
              className="font-bold leading-tight mb-8 text-center max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {outcomes.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.cards.map((card) => (
                <div key={card.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      {migrationScenarios ? (
        <ProductSection variant="white">
          <section>
            <h2
              className="font-bold leading-tight mb-8"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {migrationScenarios.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {migrationScenarios.cards.map((card) => (
                <div key={card.title} className="rounded-xl border border-gray-100 bg-[#f7f6f2] p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      {retentionByProvider ? (
        <ProductSection variant="gray">
          <section>
            <h2
              className="font-bold leading-tight mb-8"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#24282B",
              }}
            >
              {retentionByProvider.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {retentionByProvider.cards.map((card, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  {"provider" in card && card.provider ? (
                    <h3 className="text-lg font-bold mb-2 text-[#2CADB2]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {card.provider}
                    </h3>
                  ) : null}
                  {"strategy" in card && card.strategy ? (
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                      {card.strategy}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      {stats && stats.length > 0 ? (
        <section className="py-[60px]" style={{ backgroundColor: "#24282B" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-black text-2xl md:text-3xl mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}>
                    {s.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {faq && faq.length > 0 ? (
        <ProductSection variant="white">
          <section className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">FAQ</span>
            </div>
            <div className="space-y-8">
              {faq.map((item) => (
                <div key={item.q.slice(0, 48)}>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}>
                    {item.q}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ProductSection>
      ) : null}

      <section className="py-[60px]" style={{ backgroundColor: "#24282B" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-bold leading-tight mb-4 max-w-3xl mx-auto"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#ffffff",
            }}
          >
            {cta.headline}
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
            {cta.body}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#F8CF41",
              color: "#24282B",
            }}
          >
            {cta.buttonText}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
