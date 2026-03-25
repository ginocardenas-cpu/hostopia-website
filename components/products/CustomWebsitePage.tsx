import Link from "next/link";
import { ArrowRight, PenTool, Smartphone, Puzzle, RefreshCw, Code2, Layers } from "lucide-react";
import ProductSection from "./ProductSection";

type CustomWebsitePageProps = {
  label: string;
};

export default function CustomWebsitePage({ label }: CustomWebsitePageProps) {
  return (
    <main className="pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 pt-2 pb-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-700">Products</Link>
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
                <span className="section-label">Custom Website Design by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Premium Custom Websites â€” Delivered Under Your Brand, Built by Our Team
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Not every SMB fits into a template. Some need advanced functionality, complex site structures, or a brand presence that stands completely on its own.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Hostopia&apos;s white-label custom website design service lets you offer fully bespoke WordPress websites without building an in-house design agency. Our team manages discovery through launch â€” you own the customer relationship.
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
                  <ArrowRight size={16} />
                </Link>
                <span
                  className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-gray-200"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  <Code2 size={16} /> Custom WordPress builds, white-labeled for partners
                </span>
              </div>
            </div>

            {/* Right column: what SMBs get */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                What your SMB customers get
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                <li className="flex gap-3">
                  <PenTool size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Built from scratch</strong> â€” no templates. A fully custom website designed around their brand, business goals, and audience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Layers size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>WordPress foundation</strong> â€” built for flexibility, scalability, and the ability to extend with plugins and integrations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Puzzle size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Collaborative process</strong> â€” direct collaboration with professional designers through a structured discovery, design, and revision process.
                  </span>
                </li>
                <li className="flex gap-3">
                  <RefreshCw size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Full ownership</strong> â€” the SMB owns the website, content, and database. Optional hosting and maintenance plans keep it running.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="What You Deliver" title="A Managed Design Service â€” Without Managing Designers" />
        <p
          className="text-base leading-relaxed mb-6 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          You sell the service. We handle everything from initial discovery through launch and ongoing maintenance.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            icon={<PenTool size={22} />}
            title="Structured Discovery & Proposal"
            body="Every project starts with a documented discovery process and detailed proposal â€” so scope, timeline, and pricing are clear before work begins."
          />
          <FeatureCard
            icon={<Smartphone size={22} />}
            title="Mobile-Responsive, SEO-Ready"
            body="Every site ships responsive, fast, and optimized for search engines from day one. Built to perform on every device and in every market."
          />
          <FeatureCard
            icon={<Puzzle size={22} />}
            title="Advanced Functionality & Integrations"
            body="Third-party integrations, custom forms, booking systems, ecommerce â€” whatever the SMB's business requires, the build supports it."
          />
          <FeatureCard
            icon={<RefreshCw size={22} />}
            title="Optional Maintenance & Hosting"
            body="Ongoing plans cover updates, backups, security patches, and hosting â€” turning a one-time project into recurring revenue."
          />
        </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="The Partner Advantage" title="Compete with Local Agencies â€” Without Building One" />
        <p
          className="text-base leading-relaxed mb-6 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          Custom Website Design lets you serve the SMBs that outgrow templated solutions and need a higher-touch experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureColumn
            title="Move upmarket without headcount"
            points={[
              "Offer premium custom builds alongside your DIY website builder.",
              "No need to hire designers, developers, or project managers.",
            ]}
          />
          <FeatureColumn
            title="Bundle into higher-value packages"
            points={[
              "Custom builds pair naturally with hosting, SSL, SEO, and ongoing maintenance.",
              "Multi-product engagements with stronger retention.",
            ]}
          />
          <FeatureColumn
            title="Position as a full-service digital partner"
            points={[
              "Offering custom design alongside your existing services signals to SMBs that you can support them at every stage of digital maturity.",
            ]}
          />
        </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Portfolio Fit" title="The Premium Tier in Your Website Portfolio" />
        <p
          className="text-base leading-relaxed mb-8 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          Custom Website Design serves SMBs who need more than a builder but don&apos;t want to manage an agency relationship on their own.
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
          {[
            {
              step: "01",
              title: "Build a Brand",
              body: "Domains, logo, and professional email establish the SMB identity.",
            },
            {
              step: "02",
              title: "Get Online",
              body: "Website Builder for DIY customers, DIFM for hands-off, Custom for complex needs.",
              highlightTeal: true,
              conceptLabel: "Get Online",
              productName: "Custom Website Design",
            },
            {
              step: "03",
              title: "Get Found",
              body: "SEO, directories, and reputation management drive visibility.",
            },
            {
              step: "04",
              title: "Grow their Business",
              body: "Custom websites anchor ecommerce, integrations, and premium digital services.",
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
                  <ArrowRight className="w-7 h-7 shrink-0" style={{ color: "#2CADB2" }} aria-hidden />
                </div>
              ) : null;
            return arrow ? [card, arrow] : [card];
          })}
        </div>
      </ProductSection>

      <ProductSection variant="gray">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
          <h3
            className="text-xl md:text-2xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
          >
            Ready to Deliver Premium Custom Websites at Scale?
          </h3>
          <p
            className="text-sm md:text-base mb-6 max-w-2xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
          >
            Connect with Hostopia to launch white-label custom website design, expand your digital portfolio into higher-value engagements, and strengthen long-term SMB relationships.
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

type FeatureCardProps = { icon: React.ReactNode; title: string; body: string };

function FeatureCard({ icon, title, body }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ backgroundColor: "rgba(44,173,178,0.08)", color: "#2CADB2" }}
      >
        {icon}
      </div>
      <h3
        className="text-sm font-semibold mb-2"
        style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
      >
        {title}
      </h3>
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {body}
      </p>
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
      <ul className="space-y-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {points.map((point) => (
          <li key={point.slice(0, 40)} className="flex gap-2">
            <span style={{ color: "#2CADB2" }}>â€¢</span>
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
          className="text-xs font-bold uppercase tracking-wider mb-1 inline-block w-fit px-2 py-0.5 rounded"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2", backgroundColor: "rgba(44,173,178,0.15)" }}
        >
          {conceptLabel.toUpperCase()}
        </span>
      )}
      <span
        className="text-xs font-bold uppercase tracking-[0.25em]"
        style={{ fontFamily: "Montserrat, sans-serif", color: highlightTeal ? "#2CADB2" : "#9ca3af" }}
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {body}
      </p>
    </div>
  );
}
