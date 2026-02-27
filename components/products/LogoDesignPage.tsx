import Link from "next/link";
import { ArrowRight, PenTool, Image as ImageIcon, Palette, Sparkles } from "lucide-react";

type LogoDesignPageProps = {
  label: string;
};

export default function LogoDesignPage({ label }: LogoDesignPageProps) {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
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

        {/* Hero */}
        <section
          className="rounded-3xl overflow-hidden mb-16 border border-gray-100"
          style={{ backgroundColor: "#f7f6f2" }}
        >
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
                <span className="section-label">Professional Logo Design by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  color: "#24282B",
                }}
              >
                Professional Logo Design: White-Label Branding for SMBs
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Most small businesses struggle to create a logo that truly represents their brand—often DIY-ing it or
                relying on outdated graphics that don&apos;t scale across channels.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                A modern, versatile logo becomes the cornerstone of their website, business cards, ads, and
                social—driving better performance from every digital initiative they buy from you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#F8CF41",
                    color: "#24282B",
                  }}
                >
                  Book a demo
                  <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span
                  className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-gray-200"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
                >
                  <PenTool size={16} /> White-label logo design, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: impact bullets */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Why it matters for SMBs
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
                <li className="flex gap-3">
                  <Sparkles size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Builds instant credibility and trust</strong> with their own customers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ImageIcon size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Unifies branding</strong> across the digital and offline touchpoints you power.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Palette size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Fuels better results</strong> from websites, campaigns, and ecommerce solutions you
                    resell—helping SMBs stand out in crowded local markets.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What you offer */}
        <section className="mb-16">
          <SectionHeading eyebrow="What you offer" title="Under your brand" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Partner with Hostopia to offer Professional Logo Design as a flexible, white-label creative service that
            fits your go-to-market strategy. Position it as a standalone offer, bundle it with website and email, or
            include it in a full &quot;brand launch&quot; package.
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            You can offer:
          </p>
          <ul
            className="space-y-3 text-sm md:text-base mb-10"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                White-label design expertise: professional logo designers working behind the scenes under your brand.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                A simple, guided creative process: your branded questionnaire and coordinator-led workflow capture each
                SMB customer&apos;s vision, values, and audience.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Flexible packages and deliverables: you define packages, and SMBs receive all key logo file formats for
                web and print (11 formats including AI, EPS, PNG, JPG, PDF, ICO).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Fast, rights-ready outcomes: initial concepts in just a few business days, plus full ownership of the
                final logo with no ongoing licensing fees.
              </span>
            </li>
          </ul>
        </section>

        {/* Partner advantage */}
        <section className="mb-16">
          <SectionHeading eyebrow="The partner advantage" title="Anchor your role in brand and presence" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Professional Logo Design is a high-value, low-lift way to deepen relationships and move from &quot;pipe
            provider&quot; to strategic brand partner.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Open new revenue streams by bundling Professional Logo Design with websites, domains, connectivity, or
                managed services.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Boost ARPU and retention with a high-engagement branding product that keeps SMBs anchored to your
                platform.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Deliver agency-quality creative without hiring designers—Hostopia handles fulfillment while you remain
                the provider of record.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Scale quickly with onboarding, sales training, and go-to-market enablement so your teams can confidently
                sell, bundle, and upsell the service.
              </span>
            </li>
          </ul>
        </section>

        {/* Portfolio fit */}
        <section className="mb-16">
          <SectionHeading eyebrow="Portfolio fit" title="Seamless fit in your brand and presence stack" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Professional Logo Design plugs naturally into your &quot;brand and presence&quot; layer alongside the
            digital marketing services you already sell. It helps you move beyond pure infrastructure to become a
            strategic advisor.
          </p>
          <p
            className="text-base leading-relaxed mb-4 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Use logo design as the starting point for cross-sell motions into web, email, ecommerce, and ongoing
            marketing—delivered within the same white-label ecosystem.
          </p>
        </section>

        {/* Lifecycle fit: highlight Build the brand */}
        <section className="mb-16">
          <SectionHeading eyebrow="Lifecycle fit" title="How logo design fits into your SMB portfolio" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Logo design is one of the very first steps in establishing a brand direction—shaping how every other
            product you sell will look and perform.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Define the visual identity early with a professional logo that sets the tone for every channel.",
                highlightTeal: true,
                conceptLabel: "Build a Brand",
                productName: "Logo Design",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Apply that logo across websites, landing pages, and social profiles to create a consistent presence.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Use on ecommerce sites, ads, and promotions so offers feel cohesive and recognizable.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Extend the brand into new campaigns, locations, and products while keeping visuals aligned.",
              },
            ].flatMap((step, index, all) => {
              const card = (
                <div key={step.step} className="md:flex-1 min-w-0 flex flex-col">
                  <LifecycleStepCard
                    step={step.step}
                    title={step.title}
                    body={step.body}
                    highlightTeal={"highlightTeal" in step && step.highlightTeal}
                    conceptLabel={"conceptLabel" in step ? step.conceptLabel : undefined}
                    productName={"productName" in step ? step.productName : undefined}
                  />
                </div>
              );
              const arrow =
                index < all.length - 1 ? (
                  <div
                    key={`arrow-${step.step}`}
                    className="flex shrink-0 items-center justify-center w-8 min-w-8"
                  >
                    <ArrowRight className="w-7 h-7 shrink-0 text-teal" style={{ color: "#2CADB2" }} aria-hidden />
                  </div>
                ) : null;
              return arrow ? [card, arrow] : [card];
            })}
          </div>
        </section>

        {/* Easy to launch */}
        <section className="mb-16">
          <SectionHeading eyebrow="Operations" title="Easy to launch and scale" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            You don&apos;t need to change your systems: Hostopia runs the complete Professional Logo Design workflow
            while you maintain control of packaging, pricing, sales, and billing.
          </p>
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Our fulfillment model and processes are built to support large partner channels, so you can confidently roll
            this out across multiple markets and sales motions without adding internal overhead.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to turn Professional Logo Design into your next white-label growth driver?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch your branded logo design service, equip your sales channels, and start
              bundling it with the SMB products you already sell.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#F8CF41", color: "#24282B", fontFamily: "Montserrat, sans-serif" }}
            >
              Book a demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

type SectionHeadingProps = { eyebrow: string; title: string };

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
        <span className="section-label">{eyebrow}</span>
      </div>
      <h2
        className="font-black"
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.6rem", color: "#24282B" }}
      >
        {title}
      </h2>
    </div>
  );
}

type LifecycleStepCardProps = {
  step: string;
  title: string;
  body: string;
  highlightTeal?: boolean;
  conceptLabel?: string;
  productName?: string;
};

function LifecycleStepCard({ step, title, body, highlightTeal, conceptLabel, productName }: LifecycleStepCardProps) {
  const useConceptLayout = highlightTeal && conceptLabel != null && productName != null;
  return (
    <div
      className={`rounded-2xl border-2 p-5 shadow-sm flex flex-col gap-3 ${
        highlightTeal ? "step-card-highlight" : "bg-white border-gray-200"
      }`}
    >
      {highlightTeal && conceptLabel != null && (
        <span
          className="text-xs font-bold uppercase tracking-wider mb-1 inline-block w-fit px-2 py-0.5 rounded text-teal"
          style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "rgba(44,173,178,0.2)" }}
        >
          {conceptLabel.toUpperCase()}
        </span>
      )}
      <span
        className="text-xs font-bold uppercase tracking-[0.25em]"
        style={{
          fontFamily: "Montserrat, sans-serif",
          color: highlightTeal ? "#2CADB2" : "#9ca3af",
        }}
      >
        {step}
      </span>
      <h3
        className="text-sm font-semibold"
        style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
      >
        {useConceptLayout ? conceptLabel : title}
      </h3>
      {useConceptLayout && (
        <p className="text-sm font-medium -mt-1" style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}>
          {productName}
        </p>
      )}
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
        {body}
      </p>
    </div>
  );
}

