import Link from "next/link";
import {
  ArrowRight,
  LayoutPanelTop,
  Smartphone,
  Store,
  Users,
  Target,
  Palette,
  FileCheck,
} from "lucide-react";
import ProductSection from "./ProductSection";

type WebsiteDesignPageProps = {
  label: string;
};

export default function WebsiteDesignPage({ label }: WebsiteDesignPageProps) {
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
                <span className="section-label">DIFM Website Design by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  color: "#24282B",
                }}
              >
                DIFM Website Design: White-Label Professional Websites for Service Providers
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Boost revenue. Build loyalty. Power growth with Hostopia&apos;s Website Design service.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Thousands of SMBs still struggle online — many have no website or have outdated websites that hurt their
                credibility and visibility. Many don&apos;t have the time to invest and prefer a do-it-for-me
                alternative. With Hostopia&apos;s white-label DIFM Website Design service, you can deliver beautiful,
                mobile-ready websites that convert visitors into customers — all under your brand.
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
                  <LayoutPanelTop size={16} /> White-label DIFM websites, powered by Hostopia
                </span>
              </div>
            </div>

            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Partnering with Hostopia helps you
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
                <li className="flex gap-3">
                  <Store size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Unlock new, high-margin revenue</strong> with done-for-you website design and management.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Users size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Strengthen customer relationships</strong> by offering a complete &quot;get online&quot;
                    solution.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Target size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Position yourself as a digital advisor</strong> and deliver professional,
                    search-optimized, responsive sites without lifting a finger.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Create natural upsell opportunities</strong> in email, logo, ecommerce, SEO, and digital
                    marketing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading
            eyebrow="What you offer"
            title="Under your brand"
          />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Partner with Hostopia to deliver professional SMB website design as a fully managed, white-label service
            where your customers work with &quot;your&quot; web experts from start to finish. You decide how to price,
            package, and bundle the offer across your channels and markets.
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            Your customers receive:
          </p>
          <ul
            className="space-y-3 text-sm md:text-base mb-10"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                A complete done-for-me website package: 1:1 consultation, professional design from experts who handle
                build and deployment, plus hosting and ongoing maintenance — all under your brand.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Each DIFM website managed by a team of designers, copywriters, and QA.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Flexible packages and add-ons: extra pages, lead forms, interactive galleries, appointment schedulers,
                coupons, and optional Online Store setup for e-commerce.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Ongoing monthly maintenance time with no extra design work on your side.</span>
            </li>
          </ul>

          {/* Key features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Palette size={22} />}
              title="Professional themes"
              body="Industry-aligned themes with modern layouts, high-quality imagery, and on-brand colors and fonts."
            />
            <FeatureCard
              icon={<Smartphone size={22} />}
              title="Mobile & search-friendly"
              body="Responsive, search-optimized builds that work across desktop, tablet, and smartphone."
            />
            <FeatureCard
              icon={<LayoutPanelTop size={22} />}
              title="Integrated tools"
              body="Contact forms, maps, business hours, galleries, coupons, and Online Store options for lead gen and sales."
            />
            <FeatureCard
              icon={<FileCheck size={22} />}
              title="Private-label project center"
              body="SMBs review drafts, approve changes, and collaborate with their Website Coordinator under your brand."
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading
            eyebrow="Product capabilities"
            title="Key features"
          />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            DIFM Website Design combines agency-quality creative with a scalable, white-label delivery model built for
            telcos, MSPs, and service providers.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureBulletColumn
              title="For your customers"
              points={[
                "Professionally designed, industry-aligned themes with modern layouts and on-brand visuals.",
                "Mobile-responsive and search-friendly builds that optimize across devices.",
                "Integrated tools: contact forms, maps, business hours, galleries, coupons, and Online Store options.",
              ]}
            />
            <FeatureBulletColumn
              title="For your brand"
              points={[
                "Private-label project center where SMBs review drafts and collaborate with their Website Coordinator.",
                "Fully white-label: your customers work with “your” web experts from start to finish.",
                "You control pricing, packaging, and bundling across channels and markets.",
              ]}
            />
            <FeatureBulletColumn
              title="Backed by Hostopia"
              points={[
                "Experienced fulfillment team, proprietary delivery platform, and proven processes.",
                "Quality and consistency at scale without hiring new teams or building new processes.",
                "Sales enablement, training, scripts, and objection handlers so your channels can compete with agencies.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="The partner advantage" title="High-ARPU, low-effort growth" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            DIFM Website Design becomes a high-ARPU, low-effort way to anchor SMB relationships and unlock long-term
            revenue under your brand.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Acquire and upgrade customers</strong> by offering &quot;we build it for you&quot; websites to
                SMBs who don&apos;t have time or skills.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Increase product adoption and margin</strong> by bundling DIFM websites with domains, business
                email, hosting, and digital marketing services.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Become a digital advisor</strong> and use this as a differentiator — a full-service digital
                partner without building an agency in-house.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Scale confidently</strong> using Hostopia&apos;s experienced fulfillment team, proprietary
                delivery platform, and proven processes for quality and consistency.
              </span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Ideal segments" title="Perfect for your SMB customers" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            DIFM Website Design is ideal for SMB segments where time and expertise are the key barriers to getting
            online or staying current.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SegmentCard
              title="No time or interest"
              body="Owners who know they need a website but have no time or interest in building it themselves."
            />
            <SegmentCard
              title="Outdated sites"
              body="Established businesses with outdated websites and no internal resources to manage ongoing changes."
            />
            <SegmentCard
              title="Local & service-based"
              body="Local service providers, trades, and professional firms that rely on search, maps, and reviews to drive inbound calls and visits."
            />
            <SegmentCard
              title="Ready to grow"
              body="Growth-oriented SMBs ready to add online booking, promotions, or ecommerce as part of a broader digital expansion."
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading
            eyebrow="Portfolio fit"
            title="Seamless fit in your portfolio"
          />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            DIFM Website Design slots into your &quot;get online and grow&quot; stack, complementing domains,
            OPB/hosting, Business Email, SSL, and marketing offers. Serve both DIY and DIFM buyers: tech-comfortable
            SMBs can use OPB, while time-poor or less technical customers choose DIFM — without leaving your
            ecosystem.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Register the domain and set up domain-based email so the SMB looks polished from day one.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Attach DIY or DIFM websites using Online Presence Builder or professional design services.",
                highlightBlue: true,
                conceptLabel: "Get Online",
                productName: "Website Design",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Layer on Online Store and SSL so SMBs can take payments and sell securely.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Upsell directories, SEO assistance, and reviews tools to drive discovery and conversion.",
              },
            ].flatMap((step, index, all) => {
              const card = (
                <div key={step.step} className="md:flex-1 min-w-0 flex flex-col">
                  <StepCard
                    step={step.step}
                    title={step.title}
                    body={step.body}
                    highlightBlue={"highlightBlue" in step && step.highlightBlue}
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
        <SectionHeading eyebrow="Operations" title="Easy to launch and scale" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Scale your success — we&apos;ll handle the rest. With Hostopia&apos;s white-label DIFM Website Design,
            there&apos;s no need to hire new teams or build new processes. We manage the entire workflow — from
            consultation and design to copy, QA, and ongoing maintenance — all under your brand.
          </p>
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Your team focuses on what they do best: selling, bundling, and growing customer relationships. Behind the
            scenes, our expert Website Coordinators and designers deliver high-quality sites at scale. Plus, we provide
            everything you need to win — sales enablement tools, training, scripts, and objection handlers — so your
            channels can confidently compete with agencies, freelancers, and DIY site builders.
          </p>
      </ProductSection>

      <ProductSection variant="white">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to turn DIFM Website Design into your next white-label growth driver?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch your branded website design service, enable your sales and care teams, and
              start bundling it with the digital products you already sell.
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
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.6rem", color: "#24282B" }}
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
        {body}
      </p>
    </div>
  );
}

type FeatureBulletColumnProps = { title: string; points: string[] };

function FeatureBulletColumn({ title, points }: FeatureBulletColumnProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h3
        className="text-sm font-semibold mb-3"
        style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
      >
        {title}
      </h3>
      <ul className="space-y-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
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

type SegmentCardProps = { title: string; body: string };

function SegmentCard({ title, body }: SegmentCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3
        className="text-sm font-semibold mb-2"
        style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
      >
        {title}
      </h3>
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
        {body}
      </p>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  body: string;
  highlightBlue?: boolean;
  conceptLabel?: string;
  productName?: string;
};

function StepCard({ step, title, body, highlightBlue, conceptLabel, productName }: StepCardProps) {
  const useConceptLayout = highlightBlue && conceptLabel != null && productName != null;
  return (
    <div
      className={`rounded-2xl border-2 p-5 shadow-sm flex flex-col gap-3 ${highlightBlue ? "step-card-highlight-blue" : "bg-white border-gray-200"}`}
    >
      {highlightBlue && conceptLabel != null && (
        <span
          className="text-xs font-bold uppercase tracking-wider mb-1 inline-block w-fit px-2 py-0.5 rounded"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#1d4ed8", backgroundColor: "rgba(37,99,235,0.2)" }}
        >
          {conceptLabel.toUpperCase()}
        </span>
      )}
      <span
        className={`text-xs font-bold uppercase tracking-[0.25em] ${highlightBlue ? "" : ""}`}
        style={{
          fontFamily: "Montserrat, sans-serif",
          color: highlightBlue ? "#2563eb" : "#9ca3af",
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
