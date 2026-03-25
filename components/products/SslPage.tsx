import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, Globe2, CreditCard, Server, CheckCircle2 } from "lucide-react";
import ProductSection from "./ProductSection";

type SslPageProps = {
  label: string;
};

export default function SslPage({ label }: SslPageProps) {
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
                <span className="section-label">SSL by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Website Security That Sells Itself â€” Under Your Brand
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Every SMB website that collects data or takes payments needs encryption. Most owners don&apos;t know which SSL they need or how to install it.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Hostopia&apos;s white-label SSL Certificates let you offer trusted encryption, visible trust signals, and PCI compliance support â€” directly from your brand. The highest-attach add-on in your portfolio.
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
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  <Lock size={16} /> White-label SSL protection, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: why it matters */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Why this matters for SMBs
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                <li className="flex gap-3">
                  <ShieldCheck size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Protect sensitive information</strong> in transitâ€”logins, payments, and personal data
                    between browser and server.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CreditCard size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Support PCI and security baselines</strong> for accepting card payments and meeting basic
                    compliance expectations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Globe2 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Increase visitor confidence</strong> with browser trust indicators, HTTPS, and clickable
                    site seals that prove the site is secure and legitimate.
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
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            SSL becomes a simple, trusted security add-on embedded inside your existing web, hosting, and ecommerce
            offers. Hostopia runs the SSL platform; your brand owns the experience, pricing, and support.
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            You can offer:
          </p>
          <ul
            className="space-y-3 text-sm md:text-base mb-10"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>Fully white-label SSL products branded, sold, and supported under your name.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                A self-service SSL Manager where customers can set up, install, and manage certificates through your
                dashboard.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Bundled SSL with ecommerce sites and online stores to strengthen your &quot;secure presence&quot;
                positioning.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Flexible packaging (per-domain, per-store, or tiered security bundles) to match different SMB segments
                and ARPU goals.
              </span>
            </li>
          </ul>

          {/* Key options cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Lock size={22} />}
              title="DV SSL"
              body="Entry-level Domain Validation SSL with encryption, static site seal, and warrantyâ€”ideal for blogs and simple sites."
            />
            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="OV SSL"
              body="Organization Validation SSL for commercial and public-facing sites, with company validation, dynamic site seal, and higher warranty."
            />
            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="EV SSL"
              body="Extended Validation SSL for ecommerce and login-heavy sites with company verification, dynamic seal, and premium warranty."
            />
            <FeatureCard
              icon={<Server size={22} />}
              title="Wildcard SSL"
              body="Secures a domain and all its subdomains with one certificate, reducing complexity and cost."
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Platform capabilities" title="Enterprise-grade SSL platform" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            SSL is delivered through Hostopia&apos;s scalable, partner-ready platform so you can launch and grow a
            secure presence offer without building your own certificate infrastructure.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureBulletColumn
              title="Platform features"
              points={[
                "White-label SSL Manager for provisioning, setup, and renewal under your brand.",
                "Integration with hosting and website products so SMBs can request and install SSL with minimal friction.",
                "Automated workflows to simplify certificate issuance, rekeys, and renewals.",
              ]}
            />
            <FeatureBulletColumn
              title="Coverage and options"
              points={[
                "Support for multiple SSL types and use casesâ€”from informational sites to ecommerce and multi-subdomain environments.",
                "At least 128-bit encryption from trusted certificate authorities.",
                "Visible site seals that visitors can click to verify site security details.",
              ]}
            />
            <FeatureBulletColumn
              title="Infrastructure"
              points={[
                "Global infrastructure and enterprise-grade hosting environment around SSL-enabled sites.",
                "Established relationships with leading certificate providers and proven SSL workflows.",
                "24/7 partner and customer support under private-label models, plus training and documentation.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="The partner advantage" title="High-attach, high-trust revenue" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            SSL is a natural, high-attach product that boosts revenue and stickiness while reinforcing your role as a
            trusted advisor on security.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                <strong>Drive one-time and recurring revenue</strong> by bundling SSL with websites, ecommerce, email,
                and security products.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                <strong>Increase retention</strong> by embedding SSL into core hosting and presence plans.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                <strong>Differentiate beyond basic connectivity</strong> by offering a complete &quot;secure
                presence&quot; package under your brand.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                <strong>Reduce operational complexity</strong> by relying on Hostopia&apos;s platform and support
                model.
              </span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Ideal segments" title="Ideal SMB customer profiles" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            These are the SMB scenarios where SSL is a must-have.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SegmentCard
              title="Online retailers & services"
              body="Businesses accepting credit card payments or deposits via their websites."
            />
            <SegmentCard
              title="Professional services"
              body="Legal, financial, medical, and real estate firms collecting personal or sensitive client information."
            />
            <SegmentCard
              title="Login-protected portals"
              body="Any SMB running member areas, customer dashboards, or login-protected tools."
            />
            <SegmentCard
              title="Growing multi-page sites"
              body="Business sites looking to boost trust, reduce browser warnings, and support SEO with HTTPS."
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Portfolio fit" title="How SSL fits your SMB portfolio" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            SSL sits at the heart of a secure online presence. It underpins domains, hosting, ecommerce, and login
            experiencesâ€”making it a key part of your &quot;get online and grow&quot; stack.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Register the domain and set up branded email so the SMB looks credible from day one.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Attach hosting, website, and SSL so the SMB can go live with a trusted, encrypted experience.",
                highlightBlue: true,
                conceptLabel: "Get Online",
                productName: "SSL",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Layer on ecommerce and payments knowing customer data is protected in transit.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Add marketing, SEO, and additional security services on top of a secure foundation.",
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
        <SectionHeading eyebrow="Enterprise-grade platform" title="Infrastructure behind your SSL offer" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Behind your brand, Hostopia provides the infrastructure, tooling, and expertise that make SSL easy for both
            you and your customers.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>Global data center presence and enterprise-grade hosting capabilities.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>Established relationships with leading certificate providers and proven SSL workflows.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                24/7 partner and customer support under private-label models, plus training and documentation.
              </span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="white">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to turn SSL into a simple, high-value security add-on across your base?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch white-label SSL certificates under your brand, bundle them with your core
              web and ecommerce products, and give your SMB customers the trust and protection they expect online.
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
      <ul className="space-y-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {points.map((point) => (
          <li key={point.slice(0, 40)} className="flex gap-2">
            <span className="text-teal mt-1">â€¢</span>
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {body}
      </p>
    </div>
  );
}

