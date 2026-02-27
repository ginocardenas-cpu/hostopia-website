import Link from "next/link";
import { ArrowRight, Globe2, Mail, ShieldCheck, Network, LineChart } from "lucide-react";

type DomainsPageProps = {
  label: string;
};

export default function DomainsPage({ label }: DomainsPageProps) {
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
                <span className="section-label">Domains by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                  color: "#24282B",
                }}
              >
                Turn domains into a powerful growth driver.
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Domains are where most businesses start their online journey—and where they decide which provider will
                power everything that comes next. With Hostopia&apos;s{" "}
                <span className="font-semibold">white-label Domains platform</span>, you sell and manage domains under
                your own brand, then seamlessly attach email, websites, and security services that drive long-term
                revenue and loyalty.
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
                  Talk to Partner Success
                  <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span
                  className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-gray-200"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
                >
                  <Globe2 size={16} /> White-label domain experiences, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right-side stats / highlights */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                Why it matters
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
                <li className="flex gap-3">
                  <Mail size={18} className="mt-1" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Start with name &amp; email.</strong> Most SMBs begin online by registering a domain and
                    setting up domain-based email before investing in websites or marketing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck size={18} className="mt-1" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Protect the brand.</strong> Secure key extensions, common misspellings, and the domain your
                    customers build everything on.
                  </span>
                </li>
                <li className="flex gap-3">
                  <LineChart size={18} className="mt-1" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Anchor long-term ARPU.</strong> Use domains as the on-ramp to websites, ecommerce, SEO,
                    security, and more.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What you offer */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="md:w-1/2">
              <h2
                className="font-black mb-4"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.75rem", color: "#24282B" }}
              >
                What you offer under your brand
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
              >
                Package domains as a simple, high-attach “start here” product that feeds the rest of your digital
                portfolio. Hostopia runs the domain infrastructure and tooling; your brand owns the experience and the
                commercial model.
              </p>
              <ul className="space-y-3 text-sm md:text-base" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    Branded domain search, registration, and renewal flows with your URL, pricing, and UX—fully
                    white-labeled.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    Support for 24+ extensions, from popular TLDs like <code>.com</code>, <code>.net</code>, and{" "}
                    <code>.org</code> to country codes including <code>.us</code>, <code>.ca</code>, and <code>.mx</code>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    Flexible registration terms from 1–10 years, plus add-ons such as SSL, privacy, and protection.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    Intelligent search and recommendation tools that surface alternatives, premium domains, and relevant
                    upsells.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    A branded domain manager for expiration tracking, DNS management, forwarding, and auto‑renewals.
                  </span>
                </li>
              </ul>
            </div>

            {/* Key benefits cards */}
            <div className="md:w-1/2 grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={<Mail size={22} />}
                title="Professional identity"
                body="Help SMBs look credible with domain-based email and a consistent identity across web, email, and social."
              />
              <FeatureCard
                icon={<ShieldCheck size={22} />}
                title="Brand protection"
                body="Protect core names, extensions, and common misspellings so competitors can’t squat on SMB brands."
              />
              <FeatureCard
                icon={<Network size={22} />}
                title="Attach more services"
                body="Use every domain sale as the trigger to attach websites, ecommerce, SSL, and marketing services."
              />
              <FeatureCard
                icon={<LineChart size={22} />}
                title="Higher ARPU, lower churn"
                body="Keep the SMB’s most critical asset—their domain—anchored to your platform and ecosystem."
              />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Product capabilities"
            title="Key features for SMBs and partners"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureBulletColumn
              title="Simple for SMBs"
              points={[
                "Clean domain search and registration with smart suggestions when the first choice is taken.",
                "Clear ownership—your customers fully own their domains and can easily attach complementary products.",
                "Guided flows that highlight next steps like “Add email” or “Create a website” after purchase.",
              ]}
            />
            <FeatureBulletColumn
              title="Powerful for providers"
              points={[
                "Central domain manager for registrations, expirations, DNS, and auto‑renewals across your base.",
                "Streamlined migrations so you can consolidate domains into your platform and simplify billing.",
                "Actionable visibility into attach rates for email, websites, SSL, and marketing products.",
              ]}
            />
            <FeatureBulletColumn
              title="Backed by Hostopia"
              points={[
                "Global DNS and hosting footprint across 34 countries and 14 languages.",
                "Proven operations, migrations, and support models used by 350+ service provider partners.",
                "Enterprise-grade infrastructure without the cost and complexity of building your own registrar.",
              ]}
            />
          </div>
        </section>

        {/* Lifecycle & portfolio fit */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Lifecycle fit"
            title="How domains fit into your SMB portfolio"
          />
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build the brand",
                body: "Register the domain and set up domain‑based email so the SMB looks polished from day one.",
                highlight: true,
              },
              {
                step: "02",
                title: "Get online",
                body: "Attach DIY or DIFM websites using Online Presence Builder or professional design services.",
              },
              {
                step: "03",
                title: "Start selling",
                body: "Layer on Online Store and SSL so SMBs can take payments and sell securely.",
              },
              {
                step: "04",
                title: "Get found & chosen",
                body: "Upsell directories, SEO assistance, and reviews tools to drive discovery and conversion.",
              },
            ].flatMap((step, index, all) => {
              const card = (
                <div key={step.step} className="md:flex-1 min-w-0 flex flex-col">
                  <StepCard step={step.step} title={step.title} body={step.body} highlight={step.highlight} />
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

        {/* What's included & CTA */}
        <section className="mb-10">
          <div className="grid md:grid-cols-[3fr,2fr] gap-10 items-center">
            <div>
              <SectionHeading eyebrow="What’s included" title="Everything you need to launch a branded domains offer" />
              <ul
                className="space-y-3 text-sm md:text-base"
                style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
              >
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>White-label tools for search, registration, transfer, and domain management.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    Integrated domain-based email, plus security and productivity features to keep SMBs operating
                    confidently.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Branded customer dashboard and domain manager experience under your URL.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>
                    Partner training, sales scripts, and objection handling content for your sales and care teams.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Ongoing support, reporting, and engagement programs to drive activation and upsell.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl p-8 text-white" style={{ backgroundColor: "#24282B" }}>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
              >
                Ready to make domains your next growth engine?
              </h3>
              <p
                className="text-sm md:text-base mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
              >
                Connect with Hostopia to launch your branded domain platform, bundle domains with email and web
                services, and turn every new registration into a long-term SMB relationship.
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
          </div>
        </section>
      </div>
    </main>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

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

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

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

type FeatureBulletColumnProps = {
  title: string;
  points: string[];
};

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
          <li key={point} className="flex gap-2">
            <span className="text-teal mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  body: string;
  highlight?: boolean;
};

function StepCard({ step, title, body, highlight }: StepCardProps) {
  return (
    <div
      className={`rounded-2xl border-2 p-5 shadow-sm flex flex-col gap-3 ${highlight ? "step-card-highlight" : "bg-white border-gray-200"}`}
    >
      {highlight && (
        <span className="text-xs font-bold uppercase tracking-wider mb-1 inline-block w-fit px-2 py-0.5 rounded text-teal" style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "rgba(44,173,178,0.25)" }}>
          Start here — Domains
        </span>
      )}
      <span
        className={`text-xs font-bold uppercase tracking-[0.25em] ${highlight ? "text-teal" : ""}`}
        style={{ fontFamily: "Montserrat, sans-serif", color: highlight ? undefined : "#9ca3af" }}
      >
        {step}
      </span>
      <h3
        className="text-sm font-semibold"
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

