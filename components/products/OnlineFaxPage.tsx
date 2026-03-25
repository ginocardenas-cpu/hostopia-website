import Link from "next/link";
import { ArrowRight, Printer, ShieldCheck, Globe2, Inbox, Cpu } from "lucide-react";
import ProductSection from "./ProductSection";

type OnlineFaxPageProps = {
  label: string;
};

export default function OnlineFaxPage({ label }: OnlineFaxPageProps) {
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
                <span className="section-label">Online Fax by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Replace Legacy Fax Machines â€” Keep Trusted Workflows
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Many SMBs still rely on fax for contracts, medical records, and legal documents. Legacy fax machines are costly, insecure, and tied to physical offices.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Hostopia&apos;s white-label Online Fax lets you deliver a secure, cloud-based fax service that modernizes how your SMB customers send and receive documents â€” without changing the workflows they depend on. A natural add-on to your connectivity and communications portfolio.
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
                  <Printer size={16} /> White-label Online Fax, powered by Hostopia
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
                  <Globe2 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Send and receive faxes securely from anywhere</strong> with an internet connectionâ€”no
                    hardware required.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Meet privacy and regulatory requirements</strong> with encrypted transmission and
                    HIPAA-aligned configurations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Inbox size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Simplify document workflows</strong> with email-to-fax, fax-to-email, and web portal access.
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
            Online Fax becomes a flexible, high-attach communications service you can bundle with business internet,
            voice, and email. You control packaging, pricing, and positioningâ€”while Hostopia powers the platform behind
            your brand.
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
              <span>A fully white-label fax solution inside your branded portal and customer experience.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Single-user and multi-user plans with shared page pools for teams and departments.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Local and toll-free fax numbers, plus number porting to migrate customers off legacy lines.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Flexible usage and overage models with per-number reporting to support account reviews and monetization.
              </span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Product capabilities" title="Key features of Online Fax" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Online Fax replaces physical fax infrastructure with a secure, digital experienceâ€”without changing how SMBs
            work.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureColumn
              title="Digital-first experience"
              points={[
                "Web-based interface to send, receive, and manage faxes from anywhere.",
                "Email integration so users can fax directly from their inbox.",
              ]}
            />
            <FeatureColumn
              title="Security & compliance"
              points={[
                "Security and compliance options with encryption and HIPAA-aligned configurations.",
                "Centralized fax logs, delivery confirmations, and auditability.",
              ]}
            />
            <FeatureColumn
              title="Team-ready"
              points={[
                "Multi-user functionality with admin roles, shared page allotments, and usage reporting.",
                "Productivity tools such as cover pages, group sends, and centralized management.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Platform capabilities" title="Telecom-grade platform behind your brand" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Behind your brand, Hostopia delivers Online Fax on telecom-grade infrastructure built for scale and
            reliability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureColumn
              title="White-label experience"
              points={[
                "White-label dashboards integrated with your other digital services.",
                "Simplified provisioning with no customer-side system integration.",
              ]}
            />
            <FeatureColumn
              title="Infrastructure"
              points={[
                "Reliable global infrastructure designed for high-volume partner environments.",
                "Enterprise-grade operations and anti-abuse controls.",
              ]}
            />
            <FeatureColumn
              title="Insights & control"
              points={[
                "Admin reporting for fax usage, page volumes, and plan utilization.",
                "Compatibility with your business email, website, and communications offerings.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="The partner advantage" title="Modernize fax and grow revenue" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Online Fax modernizes a critical but often overlooked communication channelâ€”while driving incremental
            revenue.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Create stickier bundles by pairing Online Fax with connectivity, VoIP, and business email.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Grow ARPU by converting paper-based fax users into recurring cloud subscriptions.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Retire analog fax lines and hardware while keeping customers on your network and platform.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>
                Reduce support burden with a browser- and email-based experience that Hostopia maintains.
              </span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Ideal segments" title="Ideal SMB customer profiles" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Online Fax is a strong fit for SMBs handling sensitive or time-critical documents.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SegmentCard
              title="Healthcare"
              body="Clinics and practices needing HIPAA-aligned faxing for medical records and referrals."
            />
            <SegmentCard
              title="Legal & financial"
              body="Firms exchanging signed contracts, case documents, and financial records."
            />
            <SegmentCard
              title="Multi-location services"
              body="Service businesses seeking a centralized digital fax hub across locations."
            />
            <SegmentCard
              title="Fax-heavy SMBs"
              body="Any SMB ready to eliminate physical fax machines while keeping existing numbers and workflows."
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Lifecycle fit" title="How Online Fax fits into your SMB portfolio" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Online Fax lives squarely in the &quot;get online&quot; stageâ€”helping SMBs move critical communications
            into the cloud so they can work from anywhere.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Establish the SMB identity with domains, logo, and professional email.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Move legacy fax workflows online so documents can be sent and received securely from anywhere.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Use fax as part of a modern communications stack alongside voice, email, and digital tools.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Centralize reporting and administration as the SMB grows locations, teams, and volume.",
                highlightBlue: true,
                conceptLabel: "Grow their Business",
                productName: "Online Fax",
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

      <ProductSection variant="white">
        <SectionHeading eyebrow="Operations" title="Easy to launch and scale" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            No new infrastructure is required. Online Fax is delivered through Hostopia&apos;s white-label platform with
            simple provisioning through your existing workflows.
          </p>
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            SMBs activate quickly via web or emailâ€”no on-site installs needed. Hostopia supports you with onboarding,
            training, and go-to-market guidance so your teams can confidently             position Online Fax across segments.
          </p>
      </ProductSection>

      <ProductSection variant="gray">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to turn Online Fax into a high-value communications add-on?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch your branded Online Fax service, migrate existing fax users, and bundle it
              with the connectivity and digital services you already sell.
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {body}
      </p>
    </div>
  );
}

