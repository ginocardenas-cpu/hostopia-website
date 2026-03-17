import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingCart, CreditCard, Package, Globe2, Smartphone } from "lucide-react";
import ProductSection from "./ProductSection";

type EcommercePageProps = {
  label: string;
};

export default function EcommercePage({ label }: EcommercePageProps) {
  return (
    <main className="pb-0">

      {/* Full-bleed hero — same treatment as home page */}
      <section
        className="relative min-h-[600px] md:min-h-[700px] flex flex-col justify-end overflow-hidden pt-20"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        {/* Background image fills entire hero */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/Ecommerce/hero-1920x980-2.jpg"
            alt=""
            fill
            className="object-cover object-right"
            priority
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right, rgba(247,246,242,1) 0%, rgba(247,246,242,0.98) 35%, rgba(247,246,242,0.3) 60%, rgba(247,246,242,0) 75%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-10" style={{ fontFamily: "Raleway, sans-serif" }}>
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-gray-700">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{label}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            {/* Left: Copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
                <span className="section-label">Online Store by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-5"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#24282B",
                }}
              >
                Help Your SMB Customers Start Selling Online — Under Your Brand
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-6 max-w-lg"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                SMBs face growing pressure to sell online, but most lack the skills, budget, or time to manage a full ecommerce stack. Hostopia&apos;s white-label Online Store gives you a turnkey, mobile-ready ecommerce platform to resell under your brand. Integrated with Online Presence Builder, SMBs add a store to their existing website with one click — then scale as they grow.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "#F8CF41",
                  color: "#24282B",
                  boxShadow: "0 4px 20px rgba(248,207,65,0.3)",
                }}
              >
                Book a demo
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Key benefits card */}
            <div className="bg-white/95 rounded-2xl py-5 px-6 shadow-lg border border-gray-100 self-end max-w-sm ml-auto">
              <ul className="space-y-3" style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}>
                <li className="flex items-center gap-3">
                  <ShoppingCart size={18} className="shrink-0" style={{ color: "#2CADB2" }} />
                  <span className="font-bold text-sm">Launch a store fast with a guided 5-step setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe2 size={18} className="shrink-0" style={{ color: "#2CADB2" }} />
                  <span className="font-bold text-sm">Sell on website, social, Amazon, and Google Shopping</span>
                </li>
                <li className="flex items-center gap-3">
                  <CreditCard size={18} className="shrink-0" style={{ color: "#2CADB2" }} />
                  <span className="font-bold text-sm">40+ payment gateways — zero transaction fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <Package size={18} className="shrink-0" style={{ color: "#2CADB2" }} />
                  <span className="font-bold text-sm">Sell physical goods, digital products, or services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProductSection variant="white">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="relative aspect-[5/4] min-h-[190px] md:min-h-[220px] order-2 md:order-1">
            <Image
              src="/Ecommerce/under-your-brand (3).png"
              alt="Office setting with tablet displaying inventory and order management"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2 py-2">
            <SectionHeading eyebrow="What you offer" title="Under your brand" />
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              You can package Hostopia&apos;s Online Store as a branded ecommerce add-on or core bundle with your website
              and hosting offerings.
            </p>
            <p
              className="text-sm font-semibold mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
            >
              You can offer:
            </p>
            <ul
              className="space-y-3 text-sm md:text-base"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>
                  A fully white-label online store builder integrated into your branded dashboard and website builder.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Tiered ecommerce plans that let SMBs upgrade as they add products, traffic, and revenue.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>DIY and DIFM delivery models: self-serve setup or full managed service for higher-touch clients.</span>
              </li>
            </ul>
          </div>
        </div>
      </ProductSection>

      <ProductSection variant="gray" className="!py-8 md:!py-12">
          <div className="mb-4">
          <SectionHeading eyebrow="What You Deliver" title="Full-Featured Ecommerce — Without the Complexity" center />
        </div>
          <p
            className="text-base leading-relaxed mb-4 max-w-3xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Online Store provides everything SMBs need to sell online, integrated into the website they already have with you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <FeatureCard
              icon={<ShoppingCart size={22} />}
              title="One-Click Store Activation"
              body="Add a fully functional online store to any Online Presence Builder website with one click. No migration, no separate platform, no disruption."
            />
            <FeatureCard
              icon={<Smartphone size={22} />}
              title="Mobile-Ready Commerce"
              body="Responsive storefront, checkout, and product browsing optimized for smartphones and tablets — where the majority of shopping happens."
            />
            <FeatureCard
              icon={<Globe2 size={22} />}
              title="Multi-Channel Selling"
              body="Sell on the website plus Facebook, Instagram, TikTok, Pinterest, Amazon, and Google Shopping Ads — with centralized inventory and order management."
            />
            <FeatureCard
              icon={<Package size={22} />}
              title="Revenue-Driving Tools"
              body="Abandoned cart recovery, discount codes, promotions, social selling, and subscription support. Sell physical goods, digital products, or services."
            />
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <FeatureColumn
              title="Guided Setup"
              points={[
                "A guided 5-step setup wizard handles products, taxes, shipping, and payment configuration.",
                "Centralized inventory and order management from one dashboard.",
              ]}
            />
            <FeatureColumn
              title="The Partner Advantage"
              points={[
                "Every website customer is a potential store customer — expand ARPU with tiered ecommerce plans.",
                "Bundle with websites, SSL, and marketing tools to create high-value, hard-to-replace packages.",
                "Offer DIY and managed models — same platform, two revenue models.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="py-2">
            <SectionHeading eyebrow="Platform capabilities" title="Behind your brand" />
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              Hostopia provides the infrastructure, integrations, and management tools to deliver ecommerce at scale.
            </p>
            <ul
              className="space-y-3 text-sm md:text-base"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>SSO and deep integration across website, email, and Online Store tools.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Centralized dashboard for inventory, orders, coupons, and multi-channel management.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Flexible design customization for layout, colors, fonts, and branding.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Multi-channel support: website, social, Google Shopping Ads.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Global hosting infrastructure with secure, high-performance transactions.</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[5/4] min-h-[190px] md:min-h-[220px]">
            <Image
              src="/Ecommerce/behind-your-brand (2).png"
              alt="Ecommerce dashboard with analytics and product management"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </ProductSection>

      <ProductSection variant="gray">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="relative aspect-[5/4] min-h-[190px] md:min-h-[220px] order-2 md:order-1">
            <Image
              src="/Ecommerce/launch-online-store (1).png"
              alt="SMB owner with product gallery and ecommerce platform"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2 py-2">
            <SectionHeading eyebrow="What's included" title="When you launch Online Store with Hostopia" />
            <ul
              className="space-y-3 text-sm md:text-base"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>White-label ecommerce platform fully integrated with Online Presence Builder.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Multi-currency, multi-gateway support (40+ payment options) with real-time shipping.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Guided setup wizard and management dashboards.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Upsell-driving features like social selling, abandoned cart recovery, and promotions.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Partner training, sales enablement, and ongoing support.</span>
              </li>
            </ul>
          </div>
        </div>
      </ProductSection>

      <ProductSection variant="white">
          <div className="mb-4">
          <SectionHeading eyebrow="Portfolio Fit" title="The Growth Layer in Your Digital Portfolio" center />
        </div>
          <p
            className="text-base leading-relaxed mb-4 max-w-3xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Online Store sits at the intersection of &quot;Get Online&quot; and &quot;Grow&quot; — the natural next step for any SMB with a website and an audience ready to buy.
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
                body: "Website Builder, DIFM design, or custom development launches their presence.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "SEO, directories, and reputation management drive traffic to the site.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Online Store converts that traffic into revenue with multi-channel selling.",
                highlightGold: true,
                conceptLabel: "Grow their Business",
                productName: "Online Store",
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
        <div className="rounded-3xl p-5 md:p-6 text-white" style={{ backgroundColor: "#24282B" }}>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Ready to Make Ecommerce a Growth Engine Under Your Brand?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch your white-label Online Store, bundle it with web and security products, and help SMBs start selling online — quickly, confidently, and under your brand.
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

type SectionHeadingProps = { eyebrow: string; title: string; center?: boolean };

function SectionHeading({ eyebrow, title, center }: SectionHeadingProps) {
  return (
    <div className={`mb-3 ${center ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-2 ${center ? "justify-center" : ""}`}>
        <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
        <span className="section-label" style={{ fontFamily: "Montserrat, sans-serif" }}>{eyebrow}</span>
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
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
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
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
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
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#b45309",
            backgroundColor: "rgba(248,207,65,0.3)",
          }}
        >
          {conceptLabel.toUpperCase()}
        </span>
      )}
      <span
        className="text-xs font-bold uppercase tracking-[0.25em]"
        style={{
          fontFamily: "Montserrat, sans-serif",
          color: highlightGold ? "#b45309" : "#9ca3af",
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
