import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductSection from "@/components/products/ProductSection";
import ProgramHeroImage from "./ProgramHeroImage";
import { ProgramIcon } from "./programIcon";

export function ProgramsBreadcrumb({ label }: { label: string }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-2 pb-4">
      <nav className="text-sm text-gray-500" style={{ fontFamily: "Raleway, sans-serif" }}>
        <Link href="/" className="hover:text-[#2CADB2]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/programs" className="hover:text-[#2CADB2]">
          Programs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{label}</span>
      </nav>
    </div>
  );
}

type HeroCta = { primary: string; secondary: string };

type ProgramHeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  cta: HeroCta;
  imageFilename?: string;
  imageAlt?: string;
  secondaryHref?: string;
};

export function ProgramHero({
  eyebrow,
  headline,
  subheadline,
  cta,
  imageFilename,
  imageAlt = "",
  secondaryHref = "#how-it-works",
}: ProgramHeroProps) {
  return (
    <ProductSection variant="gray">
      <section
        className="rounded-3xl overflow-hidden border border-gray-100"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <div className="grid lg:grid-cols-2 gap-10 p-8 md:p-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">{eyebrow}</span>
            </div>
            <h1
              className="font-black leading-tight mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#24282B",
              }}
            >
              {headline}
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              {subheadline}
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
                {cta.primary}
                <ArrowRight size={16} className="shrink-0" />
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
                {cta.secondary}
              </a>
            </div>
          </div>
          {imageFilename ? <ProgramHeroImage filename={imageFilename} alt={imageAlt} /> : null}
        </div>
      </section>
    </ProductSection>
  );
}

type IconCard = { icon: string; title: string; body: string };

type HowItWorksProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: IconCard[];
};

export function HowItWorksSection({ eyebrow, heading, intro, cards }: HowItWorksProps) {
  return (
    <ProductSection variant="white">
      <section id="how-it-works" className="scroll-mt-28">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-4 max-w-3xl"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#24282B",
          }}
        >
          {heading}
        </h2>
        <p
          className="text-lg leading-relaxed mb-10 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
        >
          {intro}
        </p>
        <div
          className={`grid gap-6 ${
            cards.length === 3
              ? "md:grid-cols-3"
              : cards.length <= 4
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <ProgramIcon name={card.icon} className="mb-4" />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                {card.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ProductSection>
  );
}

type DifferentiatorsProps = {
  eyebrow: string;
  heading: string;
  items: IconCard[];
};

export function DifferentiatorsDarkSection({ eyebrow, heading, items }: DifferentiatorsProps) {
  return (
    <section className="py-[60px]" style={{ backgroundColor: "#24282B" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label text-gray-300">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-10 max-w-3xl"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#ffffff",
          }}
        >
          {heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <ProgramIcon name={item.icon} className="mb-4" />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
              >
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type LifecycleColumn = { title: string; icon: string; body: string };

type LifecycleProps = {
  eyebrow: string;
  heading: string;
  columns: LifecycleColumn[];
};

export function LifecycleSection({ eyebrow, heading, columns }: LifecycleProps) {
  return (
    <ProductSection variant="gray">
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-10"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#24282B",
          }}
        >
          {heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <ProgramIcon name={col.icon} className="mb-4" />
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                {col.title}
              </h3>
              <p className="text-base leading-relaxed flex-1" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ProductSection>
  );
}

type MigrationExpertiseProps = {
  eyebrow: string;
  heading: string;
  items: IconCard[];
};

export function MigrationExpertiseSection({ eyebrow, heading, items }: MigrationExpertiseProps) {
  return (
    <ProductSection variant="gray">
      <section id="migration-expertise" className="scroll-mt-28">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-10 max-w-4xl"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#24282B",
          }}
        >
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <ProgramIcon name={item.icon} className="shrink-0 mt-1" />
              <div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProductSection>
  );
}

type Tier = { level: string; title: string; body: string; icon: string };

type TieredSupportProps = {
  eyebrow: string;
  heading: string;
  tiers: Tier[];
};

export function TieredSupportSection({ eyebrow, heading, tiers }: TieredSupportProps) {
  return (
    <ProductSection variant="white">
      <section id="tiered-support" className="scroll-mt-28">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-10"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#24282B",
          }}
        >
          {heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.level}
              className="rounded-xl border border-gray-100 shadow-sm p-8 bg-white hover:shadow-md transition-shadow"
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
              >
                {tier.level}
              </p>
              <ProgramIcon name={tier.icon} className="mb-4" />
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                {tier.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {tier.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ProductSection>
  );
}

type UpserveProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: IconCard[];
};

export function UpserveSection({ eyebrow, heading, intro, cards }: UpserveProps) {
  return (
    <ProductSection variant="gray">
      <section id="upserve" className="scroll-mt-28">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-4 max-w-3xl"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#24282B",
          }}
        >
          {heading}
        </h2>
        <p
          className="text-lg leading-relaxed mb-10 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
        >
          {intro}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <ProgramIcon name={card.icon} className="mb-4" />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                {card.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ProductSection>
  );
}

type ReportingProps = {
  eyebrow: string;
  heading: string;
  items: IconCard[];
};

export function ReportingSection({ eyebrow, heading, items }: ReportingProps) {
  return (
    <ProductSection variant="white">
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">{eyebrow}</span>
        </div>
        <h2
          className="font-bold leading-tight mb-10"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#24282B",
          }}
        >
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <ProgramIcon name={item.icon} className="shrink-0 mt-1" />
              <div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProductSection>
  );
}

type StatItem = { stat: string; label: string };

type StatsProps = {
  heading: string;
  items: StatItem[];
};

export function StatsDarkSection({ heading, items }: StatsProps) {
  return (
    <section className="py-[60px]" style={{ backgroundColor: "#24282B" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-bold leading-tight mb-12 text-center max-w-3xl mx-auto"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "#ffffff",
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="font-black text-3xl md:text-4xl mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
              >
                {item.stat}
              </p>
              <p className="text-sm md:text-base text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type CtaProps = {
  headline: string;
  body: string;
  buttonText: string;
};

export function ProgramCTADarkSection({ headline, body, buttonText }: CtaProps) {
  return (
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
          {headline}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-gray-300"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          {body}
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
          {buttonText}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
