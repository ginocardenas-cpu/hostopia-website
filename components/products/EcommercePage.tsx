import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingCart, CreditCard, Package, Smartphone } from "lucide-react";
import ProductSection from "./ProductSection";

type EcommercePageProps = {
  label: string;
};

export default function EcommercePage({ label }: EcommercePageProps) {
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
                <span className="section-label">Online Store by Hostopia</span>
              </div>
              <h1
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  color: "#24282B",
                }}
              >
                White-Label Ecommerce & Online Store Platform
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                SMBs face increasing pressure to sell online, expand beyond their local market, and deliver modern
                checkout experiences—but many lack the skills, budget, or time to manage a full ecommerce stack.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Hostopia&apos;s white-label Online Store gives you a turnkey, mobile-ready ecommerce platform to resell
                under your own brand. Fully integrated with Online Presence Builder, it lets SMBs start small, scale over
                time, and keep everything connected to the websites and services they already buy from you.
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
                  <ShoppingCart size={16} /> White-label Online Store, powered by Hostopia
                </span>
              </div>
            </div>

            {/* Right column: Hero image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Ecommerce/hero.png"
                alt="Ecommerce platform with online store on laptop and smartphone"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="What you offer" title="Under your brand" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/Ecommerce/under-your-brand.png"
              alt="Office setting with tablet displaying inventory and order management"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
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
              style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
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

      <ProductSection variant="gray">
        <SectionHeading eyebrow="Product capabilities" title="Key features of Online Store" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Online Store gives SMBs a feature-rich ecommerce solution without complexity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<ShoppingCart size={22} />}
              title="Integrated with OPB"
              body="Add a store to existing websites with one click from Online Presence Builder."
            />
            <FeatureCard
              icon={<Smartphone size={22} />}
              title="Mobile-ready"
              body="Seamless store and checkout experience on smartphones and tablets."
            />
            <FeatureCard
              icon={<CreditCard size={22} />}
              title="Global selling"
              body="Multi-currency, real-time shipping, and 40+ payment gateways including PayPal and Square. No transaction fees."
            />
            <FeatureCard
              icon={<Package size={22} />}
              title="Product versatility"
              body="Sell physical goods, digital products, gift cards, and subscriptions."
            />
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FeatureColumn
              title="Guided setup"
              points={[
                "5-step onboarding for products, taxes, shipping, and payments.",
                "Centralized management for inventory, orders, coupons, and channel integrations.",
              ]}
            />
            <FeatureColumn
              title="Revenue-driving features"
              points={[
                "Social selling on Facebook and Instagram.",
                "Abandoned cart recovery emails, discount codes, and promotions.",
                "CSV export for products, orders, and customers.",
              ]}
            />
          </div>
      </ProductSection>

      <ProductSection variant="white">
        <SectionHeading eyebrow="Platform capabilities" title="Behind your brand" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
            >
              Hostopia provides the infrastructure, integrations, and management tools to deliver ecommerce at scale.
            </p>
            <ul
              className="space-y-3 text-sm md:text-base"
              style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
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
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Ecommerce/behind-your-brand.png"
              alt="Ecommerce dashboard with analytics and product management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ProductSection>

      <ProductSection variant="gray">
        <SectionHeading eyebrow="What's included" title="When you launch Online Store with Hostopia" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/Ecommerce/launch-online-store.png"
              alt="SMB owner with product gallery and ecommerce platform"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <ul
              className="space-y-3 text-sm md:text-base"
              style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
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
        <SectionHeading eyebrow="Lifecycle fit" title="How Online Store helps SMBs start selling" />
          <p
            className="text-base leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            Ecommerce is where the &quot;start selling&quot; journey begins—giving businesses the tools to build and
            manage an online store, take payments for goods and services, and sell gift cards and subscriptions.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                step: "01",
                title: "Build a Brand",
                body: "Establish identity with domains, logo, and professional email.",
              },
              {
                step: "02",
                title: "Get Online",
                body: "Launch a website with hosting or Online Presence Builder.",
              },
              {
                step: "03",
                title: "Get Found",
                body: "Add an online store to take payments, sell goods, services, gift cards, and subscriptions.",
              },
              {
                step: "04",
                title: "Grow their Business",
                body: "Layer on SEO, reputation, and marketing to drive traffic and repeat sales.",
                highlightGold: true,
                conceptLabel: "Grow their Business",
                productName: "Ecommerce",
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
              Ready to make ecommerce a growth engine under your brand?
            </h3>
            <p
              className="text-sm md:text-base mb-6 max-w-2xl"
              style={{ fontFamily: "Raleway, sans-serif", color: "#d1d5db" }}
            >
              Connect with Hostopia to launch your white-label Online Store, bundle it with web, hosting, and security
              products, and help SMBs start selling online quickly and confidently.
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
      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}>
        {body}
      </p>
    </div>
  );
}
