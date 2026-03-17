import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Layers, Globe2, SlidersHorizontal } from "lucide-react";
import ProductSection from "./ProductSection";

type HostingPageProps = {
  label: string;
};

export default function HostingPage({ label }: HostingPageProps) {
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
                <span className="section-label">Website Hosting by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Enterprise-Grade Hosting Infrastructure — Sold Under Your Brand
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Some SMBs need more than a website builder. Agencies need multi-site management. Developers need configurable environments. Your hosting platform needs to serve them all.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Hostopia&apos;s white-label Website Hosting lets you deliver secure, scalable infrastructure under your brand — from simple managed hosting for SMBs to advanced multi-site environments for agencies and developers. No hosting stack to build or maintain.
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
                  <Server size={16} /> White-label hosting, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: why it matters */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Why this matters for SMBs and developers
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                <li className="flex gap-3">
                  <Globe2 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Deploy custom websites</strong> beyond standard SaaS builders in a secure environment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Server size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Host WordPress and other CMS sites</strong> with control over files, databases, and
                    configurations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <SlidersHorizontal size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Scale resources</strong> as traffic and complexity increase while relying on stable
                    infrastructure.
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
            Website Hosting becomes a core infrastructure layer in your digital portfolio—supporting both SMB SaaS users
            and technical developers under your brand.
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            You can offer:
          </p>
          <ul
            className="space-y-3 text-sm md:text-base mb-10"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Fully white-label hosting plans branded and sold under your name.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Tiered hosting packages to meet varying storage, performance, and technical needs.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Hosting for CMS platforms and custom-built websites.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Multi-site hosting plans for agencies and developers managing multiple clients.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Add-on services such as business email, SSL, domains, and security products.</span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Product capabilities" title="Key features of Website Hosting" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Hostopia&apos;s hosting platform supports both simplicity and technical flexibility.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureColumn
              title="Flexible infrastructure"
              points={[
                "Secure, reliable hosting infrastructure for SMB and developer workloads.",
                "Support for CMS-based and custom websites.",
              ]}
            />
            <FeatureColumn
              title="Right-sized resources"
              points={[
                "Resource tiers aligned to different traffic and performance requirements.",
                "Scalable environments as business needs evolve.",
              ]}
            />
            <FeatureColumn
              title="Integrated stack"
              points={[
                "Integration with domains, SSL, email, and ecommerce products.",
                "White-label experience alongside your existing digital services.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="For agencies and developers" title="Built for multi-site management" />
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureColumn
              title="Multi-site hosting"
              points={[
                "Multi-site plans to host and manage multiple client websites.",
                "Virtualized environments for account separation and control.",
              ]}
            />
            <FeatureColumn
              title="Control & visibility"
              points={[
                "User management and access controls across accounts.",
                "Usage visibility and email allocation across hosted environments.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Platform capabilities" title="Enterprise-grade infrastructure behind your brand" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Behind your brand, Hostopia delivers hosting infrastructure designed for scale and reliability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureColumn
              title="White-label control"
              points={[
                "Management portal with SSO across your digital services.",
                "Centralized administration for single-site and multi-site environments.",
              ]}
            />
            <FeatureColumn
              title="Infrastructure"
              points={[
                "Secure data center infrastructure with high availability.",
                "Performance-optimized hosting environments for modern sites and apps.",
              ]}
            />
            <FeatureColumn
              title="Reporting"
              points={[
                "Reporting and visibility into account usage and resource consumption.",
                "Insights to support account reviews and packaging decisions.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="The partner advantage" title="Strengthen your infrastructure portfolio" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Website Hosting reinforces your role beyond connectivity by anchoring customers on your infrastructure
                layer.
              </p>
              <ul
                className="space-y-3 text-sm md:text-base"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Serve both SaaS-focused SMBs and technically advanced users.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Expand recurring revenue through tiered hosting plans and add-ons.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Increase attachment by bundling domains, SSL, and email with hosting.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Retain agencies and developers managing multiple client environments.</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg w-full bg-gray-50 h-[280px] md:h-[320px]">
              <Image
                src="/images/hosting-hero.png"
                alt="Professional in a server room with laptop—hosting and infrastructure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Ideal segments" title="Ideal customer profiles" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Website Hosting is ideal for SMBs and partners that need more than a simple builder.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SegmentCard
              title="Advanced SMBs"
              body="SMBs requiring more flexibility than a standard website builder can provide."
            />
            <SegmentCard
              title="WordPress users"
              body="Businesses and creators seeking reliable managed infrastructure for WordPress."
            />
            <SegmentCard
              title="Developers"
              body="Developers building custom sites who need control over the full stack."
            />
            <SegmentCard
              title="Agencies"
              body="Agencies managing multiple client websites across a unified hosting layer."
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Lifecycle fit" title="How hosting helps SMBs get online" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Website Hosting anchors the &quot;get online&quot; stage—powering websites and applications with secure,
            scalable infrastructure.
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
                body: "Launch websites and applications on secure, reliable hosting under your brand.",
                highlightBlue: true,
                conceptLabel: "Get Online",
                productName: "Hosting",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Use hosting as the foundation for ecommerce and application deployments.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Upgrade resources, add sites, and attach additional services as the business grows.",
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
      </ProductSection>

      <ProductSection variant="gray">
          <SectionHeading eyebrow="What’s included" title="What’s included with Website Hosting" />
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>White-label hosting plans and management tools.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Multi-site options for agencies and developers.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Integration with domains, SSL, email, and ecommerce products.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Partner onboarding, sales enablement, and ongoing platform support.</span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="white">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to strengthen your infrastructure portfolio under your brand?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch white-label Website Hosting that serves both SMB SaaS users and technical
              developers. Bundle hosting with domains, security, and ecommerce to deliver a complete digital foundation.
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
        {body}
      </p>
    </div>
  );
}

