import Link from "next/link";
import { ArrowRight, Map, ListChecks, BarChart3, FileText, Search, TrendingUp } from "lucide-react";
import ProductSection from "./ProductSection";

type SearchEnginePageProps = {
  label: string;
};

export default function SearchEnginePage({ label }: SearchEnginePageProps) {
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
                <span className="section-label">Search Engine Assist by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Guided SEO That SMBs Actually Use — Under Your Brand
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Most SMBs know they should invest in SEO. They don&apos;t have the expertise or budget to do it. Agency-grade tools are overkill. They need guided, step-by-step SEO they can execute themselves.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Search Engine Assist is a white-label, task-based SEO platform that walks SMBs through the actions that improve their search rankings — with customized plans, keyword tracking, and progress reporting. All under your brand.
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
                  style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
                >
                  <Search size={16} /> White-label SEO platform, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: what SMBs get */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Your SMB customers can
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                <li className="flex gap-3">
                  <Map size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Follow a clear SEO roadmap</strong> — customized plans based on their industry, location, website platform, and current rankings.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ListChecks size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Execute tasks step by step</strong> — guided instructions and video walkthroughs for every SEO action, built for non-experts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Track keyword rankings</strong> — monitor up to 20 keywords with search volume, competitiveness, and ranking history.
                  </span>
                </li>
                <li className="flex gap-3">
                  <BarChart3 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>See measurable progress</strong> — monthly reports show completed tasks, ranking improvements, and recommended next steps.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="What You Deliver" title="SEO Made Simple for SMBs — Scalable for You" />
        <p
          className="text-base leading-relaxed mb-6 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
        >
          Search Engine Assist is designed for non-expert SMBs and built for partners who need scale without support overhead.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            icon={<Map size={22} />}
            title="Customized SEO Plans"
            body="Onboarding generates a tailored roadmap based on industry, geography, website platform, and current search performance — so every SMB starts with relevant actions."
          />
          <FeatureCard
            icon={<ListChecks size={22} />}
            title="Guided Task Execution"
            body="Step-by-step instructions with clear explanations and video walkthroughs. SMBs complete SEO tasks month by month without needing to understand the technical details."
          />
          <FeatureCard
            icon={<BarChart3 size={22} />}
            title="Keyword & Ranking Tracking"
            body="Keyword recommendations based on search volume and competitiveness. Ranking history, indexing checks for Google and Bing, and local competitor benchmarking."
          />
          <FeatureCard
            icon={<FileText size={22} />}
            title="Automated Reporting"
            body="Monthly email reports showing ranking progress, completed tasks, and next steps — giving SMBs visibility and your team data for upsell conversations."
          />
        </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="The Partner Advantage" title="Capture SMB SEO Spend — Without Building an Agency" />
        <p
          className="text-base leading-relaxed mb-6 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
        >
          SEO is one of the highest-demand digital services for SMBs. Search Engine Assist lets you offer it at scale without hiring specialists.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureColumn
            title="Natural attachment to your web portfolio"
            points={[
              "Every website customer is an SEO prospect.",
              "Bundle Search Engine Assist with websites, hosting, and OneList Plus for stronger product attachment and lower churn.",
            ]}
          />
          <FeatureColumn
            title="Recurring revenue with low support overhead"
            points={[
              "DIY, task-based design means SMBs self-serve month to month.",
              "Support demands stay low even across large customer bases.",
            ]}
          />
          <FeatureColumn
            title="Differentiate from basic hosting"
            points={[
              "Offering guided SEO alongside websites and listings positions you as a growth partner — not just an infrastructure provider.",
            ]}
          />
        </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Portfolio Fit" title="The Next Step After Getting Online" />
        <p
          className="text-base leading-relaxed mb-8 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
        >
          Once an SMB has a website live, the next question is always: how do I get found? Search Engine Assist answers that question inside your ecosystem.
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
              body: "Website Builder, DIFM, or custom development launches their digital presence.",
            },
            {
              step: "03",
              title: "Get Found",
              body: "Search Engine Assist guides SEO improvements month by month. Pair with OneList Plus and Reviews Promoter.",
              highlightTeal: true,
              conceptLabel: "Get Found",
              productName: "Search Engine Assist",
            },
            {
              step: "04",
              title: "Grow their Business",
              body: "Ecommerce, email marketing, and advanced services fuel business growth.",
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
            Ready to Turn SEO into a Scalable Revenue Stream?
          </h3>
          <p
            className="text-sm md:text-base mb-6 max-w-2xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
          >
            Connect with Hostopia to launch Search Engine Assist under your brand, bundle it with your web and marketing portfolio, and help SMBs get found by the customers searching for them.
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
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
      <ul className="space-y-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
        {points.map((point) => (
          <li key={point.slice(0, 40)} className="flex gap-2">
            <span style={{ color: "#2CADB2" }}>•</span>
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
        {body}
      </p>
    </div>
  );
}
