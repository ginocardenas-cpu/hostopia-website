import Link from "next/link";
import { ArrowRight, LayoutPanelTop, Sparkles, Globe2, Zap } from "lucide-react";

type WebsiteBuilderPageProps = {
  label: string;
};

export default function WebsiteBuilderPage({ label }: WebsiteBuilderPageProps) {
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
                <span className="section-label">Online Presence Builder by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  color: "#24282B",
                }}
              >
                White-Label Website Builder and Hosting for Service Providers
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Your SMB customers need more than basic hosting—they need a modern, mobile-ready website that drives
                credibility, engagement, and growth.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Hostopia&apos;s white-label Online Presence Builder (OPB) gives you a turnkey way to deliver AI-powered
                websites and reliable hosting under your own brand—without adding operational complexity.
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
                  <Sparkles size={16} /> AI-powered websites & hosting, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: With OPB your SMB customers can */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                With OPB, your SMB customers can
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
                <li className="flex gap-3">
                  <LayoutPanelTop size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Launch polished, mobile-friendly websites</strong> that perform beautifully across every
                    device.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Sparkles size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Get online faster</strong> using AI-assisted text, layouts, and imagery tailored to their
                    business.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Zap size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Convert visitors into leads and customers</strong> with built-in forms, maps, galleries, and
                    calls-to-action.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Globe2 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Manage their DIY website, domain, and related services</strong> from one intuitive,
                    partner-branded dashboard.
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
            Hostopia enables you to deliver a fully white-labeled website builder and hosting experience—complete with
            your logo, URL, and customer journey—while you retain full control over pricing, packaging, and portfolio
            placement.
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
                A white-label, AI-powered website builder and hosting solution inside your branded customer portal.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Guided AI onboarding that uses business details to pre-populate layouts, copy, imagery, maps, and
                contact forms—so SMBs start from a near-finished site instead of a blank page.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Self-serve website plans for DIY customers.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Scalable hosting on Hostopia&apos;s global infrastructure, including performance SLAs and the ability to
                consolidate legacy web platforms onto a single modern stack.
              </span>
            </li>
          </ul>
        </section>

        {/* Key features */}
        <section className="mb-16">
          <SectionHeading eyebrow="Product capabilities" title="Key features of Online Presence Builder" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            OPB combines intuitive site creation with enterprise-grade hosting to give your SMB customers everything they
            need in one solution.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Sparkles size={22} />}
              title="AI-powered tools"
              body="AI onboarding, layouts, writing assistant, image generation, page descriptions, and guided hints so SMBs launch faster."
            />
            <FeatureCard
              icon={<LayoutPanelTop size={22} />}
              title="Drag-and-drop editor"
              body="Responsive themes, vertical-specific templates, and pre-built blocks for hero sections, galleries, FAQs, and contact pages."
            />
            <FeatureCard
              icon={<Zap size={22} />}
              title="Conversion & marketing"
              body="Lead forms, Google Maps, social widgets, and one-click Online Store activation to turn visitors into customers."
            />
            <FeatureCard
              icon={<Globe2 size={22} />}
              title="Hosting & platform"
              body="Unlimited pages, per-page SEO settings, Google Analytics, 24/7 access, and centralized management through your branded dashboard."
            />
          </div>
        </section>

        {/* Partner advantage */}
        <section className="mb-16">
          <SectionHeading eyebrow="The partner advantage" title="A foundational product in your digital portfolio" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Online Presence Builder supports both SMB acquisition and long-term growth—embedding your brand at the
            center of your SMBs&apos; digital presence.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Drive faster activation by delivering a complete &quot;get online&quot; experience under your brand.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Grow ARPU through clear upgrade paths into ecommerce, SEO, reputation, and marketing tools once
                websites are live.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Differentiate from low-cost hosting and standalone builders with an AI-powered, white-label platform
                integrated into your existing products and billing.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Reduce operational complexity by relying on Hostopia&apos;s infrastructure, automation, and support
                instead of building your own web stack.
              </span>
            </li>
          </ul>
        </section>

        {/* Perfect for SMB customers */}
        <section className="mb-16">
          <SectionHeading eyebrow="Ideal segments" title="Perfect for your SMB customers" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            OPB is designed for the SMB segments you already serve—across industries and digital maturity levels.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SegmentCard
              title="New businesses"
              body="SMBs launching their first website without hiring developers."
            />
            <SegmentCard
              title="Established SMBs"
              body="Businesses replacing outdated or non-responsive sites with a modern presence."
            />
            <SegmentCard
              title="Service & local businesses"
              body="Businesses relying on search, maps, and inbound leads to grow."
            />
            <SegmentCard
              title="Ready for ecommerce"
              body="SMBs ready to expand using integrated Online Store capabilities."
            />
          </div>
        </section>

        {/* Seamless fit */}
        <section className="mb-16">
          <SectionHeading eyebrow="Portfolio fit" title="Seamless fit in your portfolio" />
          <p
            className="text-base leading-relaxed mb-4 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            OPB sits at the center of your brand and presence offering—alongside domains, business email, SSL, and
            marketing solutions. It gives SMBs one place to secure their domain, launch a website, connect email, and
            activate conversion tools—under your logo, on your URL, with one bill.
          </p>
          <p
            className="text-base leading-relaxed mb-4 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            You can position DIY hosting as the default website option for new customers, a modern upgrade path for
            hosting-only or parked-domain accounts, and the foundation for expanding into SEO, reviews, and marketing
            automation once the site is live.
          </p>
        </section>

        {/* Lifecycle fit: highlight Get online */}
        <section className="mb-16">
          <SectionHeading eyebrow="Lifecycle fit" title="How Website Builder helps SMBs get online" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Online Presence Builder is where the &quot;get online&quot; journey begins—AI-powered sites and hosting in
            minutes, under your brand.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Secure domains, logo, and professional email to define the SMB identity.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Launch a beautiful, mobile-ready website in minutes with AI-powered OPB and hosting.",
                highlightBlue: true,
                conceptLabel: "Get Online",
                productName: "Website Builder",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Add ecommerce, forms, and conversion tools so the site drives leads and sales.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Layer on SEO, reputation, and marketing to drive traffic and retention.",
              },
            ].flatMap((step, index, all) => {
              const card = (
                <div key={step.step} className="md:flex-1 min-w-0 flex flex-col">
                  <LifecycleStepCard
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
        </section>

        {/* Easy to launch */}
        <section className="mb-16">
          <SectionHeading eyebrow="Operations" title="Easy to launch and scale" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            No new infrastructure or workflows are required. OPB is delivered through Hostopia&apos;s white-label
            platform with automated provisioning and a unified dashboard.
          </p>
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Hostopia supports you with product onboarding and configuration, migration strategy and execution, and sales
            enablement and positioning guidance. As SMB adoption grows, AI-driven onboarding and automation reduce
            support demands—allowing you to scale digital revenue without scaling headcount.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to turn DIY hosting into a white-label growth engine?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch Online Presence Builder under your brand, equip your teams, and deliver a
              modern digital foundation to your SMB customers.
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

type LifecycleStepCardProps = {
  step: string;
  title: string;
  body: string;
  highlightBlue?: boolean;
  conceptLabel?: string;
  productName?: string;
};

function LifecycleStepCard({ step, title, body, highlightBlue, conceptLabel, productName }: LifecycleStepCardProps) {
  const useConceptLayout = highlightBlue && conceptLabel != null && productName != null;
  return (
    <div
      className={`rounded-2xl border-2 p-5 shadow-sm flex flex-col gap-3 ${
        highlightBlue ? "step-card-highlight-blue" : "bg-white border-gray-200"
      }`}
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
        className="text-xs font-bold uppercase tracking-[0.25em]"
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
