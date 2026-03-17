import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, Users, Inbox, Server, CalendarDays, Globe2 } from "lucide-react";
import ProductSection from "./ProductSection";

type BusinessEmailPageProps = {
  label: string;
};

export default function BusinessEmailPage({ label }: BusinessEmailPageProps) {
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
                <span className="section-label">Business Email by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Secure, Professional Email — Delivered Under Your Brand
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Email is mission-critical infrastructure. Every business needs it, every customer expects it, and the provider who delivers it becomes the anchor of that relationship.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Hostopia&apos;s white-label Business Email gives you a scalable, enterprise-grade email platform to resell under your brand. Domain-based business email, consumer email, or both — with flexible packaging, expert migrations, and 24/7 end-user support.
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
                  <Mail size={16} /> White-label business email, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: key promises */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
              >
                What your customers get
              </h3>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
                <li className="flex gap-3">
                  <ShieldCheck size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Peace of mind</strong> with enterprise-grade security and unmatched reliability.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Globe2 size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Brand-building professionalism</strong> with domain-based email like{" "}
                    <code>sales@mycompany.com</code>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Inbox size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Modern, ad-free webmail</strong> accessible anywhere, branded as your own.
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
            Partner with Hostopia to design flexible email packages that match your go-to-market strategy—whether
            that&apos;s the number of mailboxes you want to offer, mailbox sizes, feature tiers, or more. You can
            customize your email offering exactly the way you want for your customers.
          </p>
          <p
            className="text-sm font-semibold mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            Choose to offer:
          </p>
          <ul
            className="space-y-3 text-sm md:text-base mb-10"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Domain-based business email, consumer email, or both—delivering a seamless experience that reflects
                your brand across every customer segment.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                The right size for every user, with flexible tiers at 3 GB, 6 GB, 9 GB, and 12 GB so you can tailor
                plans, upsell premium options, and monetize overages.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                Simple account management from a central portal where you and your customers can add mailboxes, manage
                storage, and adjust spam controls.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>Free legacy email migration to the Hostopia platform so you can move existing users with ease.</span>
            </li>
          </ul>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Mail size={22} />}
              title="Professional mailboxes"
              body="Full IMAP, POP, and SMTP support with aliases and forwarding for flexible, professional mailbox setups."
            />
            <FeatureCard
              icon={<Inbox size={22} />}
              title="Branded webmail"
              body="Ad-free, feature-rich webmail branded as your own, with modern UI and attachment management."
            />
            <FeatureCard
              icon={<CalendarDays size={22} />}
              title="Built-in productivity"
              body="Shared calendars, contacts, and tasks to keep SMB teams aligned and working together."
            />
            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="Security & control"
              body="Anti-virus protection, configurable spam filtering, trusted and blocked sender lists, and optional backups."
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="The partner advantage" title="A sticky, high-usage anchor product" />
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Business Email becomes a high-value anchor that keeps SMB customers on your platform for years while
            creating ongoing revenue opportunities.
          </p>
          <ul
            className="space-y-3 text-sm md:text-base max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Create a sticky, high-usage product</strong> that users rely on every day for mission-critical
                communication.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Increase ARPU</strong> by bundling business email with domains, hosting, security, and other
                digital services.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Replace fragmented legacy platforms</strong> with a modern, scalable solution that simplifies
                operations.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">•</span>
              <span>
                <strong>Leverage Hostopia migrations and support</strong> so you can move large bases quickly while we
                handle end-user email support under your brand.
              </span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Ideal segments" title="Perfect for your SMB customers" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Business Email is ideal wherever credibility, security, and team coordination matter.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SegmentCard
              title="New businesses"
              body="SMBs buying their first domain and needing a professional email identity from day one."
            />
            <SegmentCard
              title="Upgrading from free email"
              body="Established SMBs still using consumer email addresses and ready for a more professional alternative."
            />
            <SegmentCard
              title="Multi-user teams"
              body="Teams that need shared calendars, contacts, and tasks to stay organized and responsive."
            />
            <SegmentCard
              title="Connectivity customers"
              body="ISP and telco customers who expect a reliable email inbox included with their connectivity services."
            />
          </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Portfolio fit" title="How Business Email fits into your SMB portfolio" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Email is a natural part of your &quot;build the brand and get online&quot; stack—anchoring domains, web
            presence, and digital services with an identity customers use every day.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Pair the domain with professional, domain-based email like sales@mycompany.com to establish a credible identity.",
                highlightTeal: true,
                conceptLabel: "Build a Brand",
                productName: "Business Email",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Attach hosting and websites so the SMB can promote that brand and capture demand.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Use email to support ecommerce, appointments, and lead follow-up alongside your other digital tools.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Layer on marketing, automation, and advanced security to deepen engagement over time.",
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
            Hostopia&apos;s platform lets you provision, manage, and report on mailboxes from a single, branded portal
            — with no new infrastructure required.
          </p>
          <p
            className="text-base leading-relaxed mb-6 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            With expert email migration (including legacy platforms) and 24/7 support, you can move large bases quickly
            while minimizing risk and churn. Your team focuses on selling and relationship-building; we handle the
            complexity behind the scenes.
          </p>
      </ProductSection>

      <ProductSection variant="gray">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to make white-label Business Email your next high-value anchor product?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch your branded Business Email service, migrate existing users, and bundle it
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

