import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Search, ListChecks, Globe2, BarChart3 } from "lucide-react";
import ProductSection from "./ProductSection";

type DirectoriesPageProps = {
  label: string;
};

export default function DirectoriesPage({ label }: DirectoriesPageProps) {
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
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
                <span className="section-label">OneList Plus by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Accurate Listings Everywhere — Managed from One Dashboard
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Inconsistent business listings kill search visibility, erode customer trust, and cost SMBs foot traffic. Most can&apos;t keep up with dozens of directories manually.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                OneList Plus distributes and syncs accurate business information across Google, Bing, Facebook, Yelp, and other major directories — automatically. Delivered white-label under your brand as a recurring subscription that drives retention and ARPU.
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
                  style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
                >
                  <MapPin size={16} /> White-label local listings, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: why it matters */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Why this matters for your customers
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                <li className="flex gap-3">
                  <Search size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Support local SEO and maps</strong> with accurate listings across major directories and
                    search engines.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Globe2 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Boost customer trust</strong> by ensuring consistent business information everywhere SMBs
                    show up online.
                  </span>
                </li>
                <li className="flex gap-3">
                  <BarChart3 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Drive more discovery and foot traffic</strong> with always-on visibility in the directories
                    that matter most.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="What you offer" title="Under your brand" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Hostopia&apos;s white-label OneList Plus gives you a scalable way to productize local presence management
            under your own brand. It helps you activate website customers, strengthen search performance, and anchor
            retention to always-on visibility.
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            You provide:
          </p>
          <ul
            className="space-y-3 text-sm md:text-base mb-10"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>A branded listings dashboard with single sign-on.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Automated business data distribution across top directories and search platforms.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Centralized management of business info, hours, categories, and descriptions.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Monthly visibility reports showing listing status and reach.</span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Product capabilities" title="Key features of OneList Plus" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            OneList Plus is built for scale and operational simplicity, giving you a turnkey listings solution.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureColumn
              title="Directory coverage"
              points={[
                "Distribution to major directories including Google, Bing, Facebook, Yelp, and more.",
                "Coverage across search engines, maps, and key local discovery platforms.",
              ]}
            />
            <FeatureColumn
              title="Data accuracy"
              points={[
                "Continuous sync to keep business data accurate everywhere.",
                "Duplicate suppression and listing correction from a single source of truth.",
              ]}
            />
            <FeatureColumn
              title="Operational simplicity"
              points={[
                "Centralized updates from a single dashboard.",
                "Automated reporting on listing health and reach.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="The partner advantage" title="Recurring revenue from local presence" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                OneList Plus gives you an easy-entry digital product that naturally drives attachment to SEO, reputation,
                and website services.
              </p>
              <ul
                className="space-y-3 text-sm md:text-base"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Monetize local presence as a recurring subscription.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Improve churn by tying your value to always-on visibility.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Position your brand as a growth partner—not just a connectivity provider.</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg w-full bg-gray-50 h-[280px] md:h-[320px]">
              <Image
                src="/images/directories-hero.png"
                alt="Person using smartphone to browse listings and local search"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Lifecycle fit" title="How OneList Plus helps SMBs get found and chosen" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Listings sit at the &quot;get found and chosen&quot; stage—turning your brand and web presence into real
            local discovery and inbound demand.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Establish a credible identity with logo, domain, and professional email.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Launch websites and landing pages that tell the SMB's story.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Use OneList Plus to keep listings accurate everywhere so customers can find—and choose—them.",
                highlightTeal: true,
                conceptLabel: "Get Found",
                productName: "Directories",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Enable ecommerce, bookings, and lead capture so customers can take action.",
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
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Operations" title="Easy to launch and scale" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            OneList Plus is delivered through Hostopia&apos;s white-label platform with automated provisioning and
            reporting—no directory relationships or manual fulfillment required.
          </p>
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Your teams focus on packaging and sales while the platform handles synchronization and updates at scale.
          </p>
      </ProductSection>

      <ProductSection variant="gray">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to operationalize local presence at scale?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch OneList Plus under your brand and transform listings into a recurring
              revenue stream. Schedule a demo or talk to Partner Success to see how OneList Plus can drive activation,
              ARPU, and retention across your SMB base.
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
      </ProductSection>
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
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", color: "#24282B" }}
      >
        {title}
      </h2>
    </div>
  );
}

type FeatureColumnProps = { title: string; points: string[] };

function FeatureColumn({ title, points }: FeatureColumnProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h3
        className="text-sm font-semibold mb-3"
        style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
      >
        {title}
      </h3>
      <ul className="space-y-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
        {points.map((point) => (
          <li key={point.slice(0, 40)} className="flex gap-2">
            <span className="text-teal mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
        {body}
      </p>
    </div>
  );
}

