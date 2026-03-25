import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Target, BarChart3, Users, Package } from "lucide-react";
import ProductSection from "./ProductSection";

type EmailMarketingPageProps = {
  label: string;
};

export default function EmailMarketingPage({ label }: EmailMarketingPageProps) {
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
                <span className="section-label">Email Marketing by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                White-Label Email Marketing That Drives Revenue
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Your SMB customers need email marketing. The question is whether they get it from you â€” or from a tool that has no connection to your brand.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Hostopia puts an AI-powered campaign platform in their hands, under your logo â€” turning email into a recurring revenue stream you control.
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
                  <Mail size={16} /> AI-powered email marketing, branded as yours
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
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                <li className="flex gap-3">
                  <Sparkles size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Create campaigns in minutes</strong> â€” AI generates professional email copy, images, and layouts tailored to their business type.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Target size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Automate engagement</strong> â€” welcome sequences, promotions, and re-engagement flows run automatically.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Users size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Grow their audience</strong> â€” embeddable signup forms and list management turn website visitors into subscribers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <BarChart3 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>See what&apos;s working</strong> â€” opens, clicks, and conversion analytics give visibility into campaign performance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="What You Deliver" title="Everything Your SMBs Need â€” Under Your Brand" />
        <p
          className="text-base leading-relaxed mb-6 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          Hostopia handles the technology. You own the customer experience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            icon={<Sparkles size={22} />}
            title="AI-Powered Campaign Builder"
            body="Customers create professional emails in minutes using AI-generated copy, images, and layouts tailored to their business type. No design skills required."
          />
          <FeatureCard
            icon={<Target size={22} />}
            title="Smart Segmentation & Automation"
            body="Automated workflows and audience segmentation deliver the right message at the right time â€” welcome sequences, promotions, re-engagement flows."
          />
          <FeatureCard
            icon={<Mail size={22} />}
            title="Drag-and-Drop Editor"
            body="Mobile-responsive templates plus custom HTML support. Simplicity for beginners, full creative control for advanced users."
          />
          <FeatureCard
            icon={<Users size={22} />}
            title="Contact & List Management"
            body="Built-in subscriber forms and list management connect to their website, turning visitors into contacts automatically."
          />
          <FeatureCard
            icon={<BarChart3 size={22} />}
            title="Performance Analytics"
            body="Opens, clicks, conversions, and audience insights â€” giving SMBs visibility into what works and your team data to drive upsell conversations."
          />
          <FeatureCard
            icon={<Package size={22} />}
            title="Flexible Packaging"
            body="Sell standalone or bundled with hosting and website design. You set the plans, tiers, and pricing that match your market strategy."
          />
        </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="The Partner Advantage" title="Built for Service Providers. Not Bolted On." />
        <p
          className="text-base leading-relaxed mb-6 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          Email marketing that integrates into your ecosystem â€” not another disconnected SaaS tool for your customers.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureColumn
            title="Cross-sell into your base"
            points={[
              "Every website and hosting customer is an email marketing prospect.",
              "Bundling drives higher attachment rates and reduces churn across your portfolio.",
            ]}
          />
          <FeatureColumn
            title="Launch without complexity"
            points={[
              "Automated provisioning through Hostopia's platform.",
              "No infrastructure to build, no campaign management to staff, no onboarding bottlenecks.",
            ]}
          />
          <FeatureColumn
            title="Scale revenue, not headcount"
            points={[
              "AI handles the heavy lifting for your SMB customers.",
              "Automation handles it for your operations team. You grow revenue without growing cost.",
            ]}
          />
        </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Portfolio Fit" title="Email Naturally Fits Your Digital Services Stack" />
        <p
          className="text-base leading-relaxed mb-8 max-w-3xl"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          When you deliver email marketing through Hostopia, you capture a service your customers are already paying for elsewhere â€” or missing entirely.
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
              body: "AI-powered websites and hosting launch their digital presence.",
            },
            {
              step: "03",
              title: "Get Found",
              body: "SEO, directories, and reputation management drive visibility.",
            },
            {
              step: "04",
              title: "Grow their Business",
              body: "Email marketing, ecommerce, and custom development fuel repeat business and growth.",
              highlightGold: true,
              conceptLabel: "Grow their Business",
              productName: "Email Marketing",
            },
          ].flatMap((step, index, all) => {
            const card = (
              <div key={step.step} className="md:flex-1 min-w-0 flex flex-col">
                <LifecycleStepCard
                  step={step.step}
                  title={step.title}
                  body={step.body}
                  highlightGold={"highlightGold" in step && step.highlightGold}
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
            Ready to Add Email Marketing to Your Digital Services?
          </h3>
          <p
            className="text-sm md:text-base mb-6 max-w-2xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
          >
            Connect with Hostopia to launch branded email marketing, increase product attachment across your SMB base, and turn a proven channel into scalable recurring revenue.
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
  highlightGold?: boolean;
  conceptLabel?: string;
  productName?: string;
};

function LifecycleStepCard({ step, title, body, highlightGold, conceptLabel, productName }: LifecycleStepCardProps) {
  const useConceptLayout = highlightGold && conceptLabel != null && productName != null;
  return (
    <div
      className={`rounded-2xl border-2 p-5 shadow-sm flex flex-col gap-3 ${
        highlightGold ? "step-card-highlight-gold" : "bg-white border-gray-200"
      }`}
    >
      {highlightGold && conceptLabel != null && (
        <span
          className="text-xs font-bold uppercase tracking-wider mb-1 inline-block w-fit px-2 py-0.5 rounded"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#b45309", backgroundColor: "rgba(248,207,65,0.3)" }}
        >
          {conceptLabel.toUpperCase()}
        </span>
      )}
      <span
        className="text-xs font-bold uppercase tracking-[0.25em]"
        style={{ fontFamily: "Montserrat, sans-serif", color: highlightGold ? "#b45309" : "#9ca3af" }}
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
