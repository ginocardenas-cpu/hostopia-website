import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MessageCircle, ShieldCheck, Megaphone } from "lucide-react";
import ProductSection from "./ProductSection";

type ReputationManagementPageProps = {
  label: string;
};

export default function ReputationManagementPage({ label }: ReputationManagementPageProps) {
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
                <span className="section-label">Reputation Management by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Turn Happy Customers into 5-Star Reviews â€” Under Your Brand
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Online reviews influence every buying decision. But most SMBs don&apos;t have a system to consistently request, monitor, and respond to feedback across Google, social media, and review sites.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Reputation Management is an AI-driven platform built for SMBs who need a simple way to generate trust, build social proof, and stay visible â€” all delivered white-label under your brand.
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
                  <Star size={16} /> White-label reputation tools, powered by Hostopia
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
                  <Star size={18} className="mt-1 shrink-0" style={{ color: "#FBBF24" }} />
                  <span>
                    <strong>Ratings influence decisions</strong>â€”customers compare stars and recent reviews before they
                    choose a provider.
                  </span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Timely responses build trust</strong> and demonstrate that the business listens and takes
                    feedback seriously.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck size={18} className="mt-1 shrink-0" style={{ color: "#2CADB2" }} />
                  <span>
                    <strong>Consistent reputation data</strong> across platforms reduces risk from outdated or unfair
                    information.
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
            Offer Reputation Management as a turnkey, white-label service that helps SMBs monitor reviews, request new
            feedback, and respond from one placeâ€”fully branded as your own solution.
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
              <span>A branded dashboard that aggregates reviews from top platforms.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>Tools to request new reviews via email or SMS campaigns.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>Workflows to respond to reviews quickly using templates and approvals.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal mt-1">â€¢</span>
              <span>Reporting on ratings trends, review volume, and channel performance.</span>
            </li>
          </ul>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="The partner advantage" title="From being seen to being selected" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                Reputation Management builds on local presence and websites to help SMBs stand out when customers compare
                options side by side.
              </p>
              <ul
                className="space-y-3 text-sm md:text-base"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                <li className="flex gap-2">
                  <span className="text-teal mt-1">â€¢</span>
                  <span>Bundle reputation with websites, listings, and SEO to grow ARPU.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">â€¢</span>
                  <span>Reduce churn by tying your value to real customer outcomes and reviews.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal mt-1">â€¢</span>
                  <span>Position your brand as a growth advisor, not just an infrastructure provider.</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg w-full bg-gray-50 h-[280px] md:h-[320px]">
              <Image
                src="/images/reputation-management-hero.png"
                alt="Team representing reputation and reach: reviews, ratings, location, and global presence"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Lifecycle fit" title="Where reputation fits in the SMB journey" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Reputation Management is all about helping SMBs get found and chosenâ€”turning presence into preference.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Define the identity with logo, domain, and professional email.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Launch websites and profiles that tell the SMBâ€™s story.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Use Reputation Management to earn reviews, boost ratings, and respond so customers pick them.",
                highlightTeal: true,
                conceptLabel: "Get Found",
                productName: "Reputation Management",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Use listings and directories to ensure the business appears where customers search.",
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

      <ProductSection variant="gray">
        <div className="rounded-3xl p-8 md:p-10 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to make Reputation Management your next white-label growth driver?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch a branded reputation solution, equip your sales teams, and bundle it with
              the digital products you already sell.
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
        {body}
      </p>
    </div>
  );
}

