import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, FileText, Rss } from "lucide-react";
import ProductGuideForm from "@/components/ProductGuideForm";

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(44,173,178,0.1) 0%, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span className="section-label">Resources</span>
          </div>
          <h1
            className="font-black leading-tight mb-6 max-w-4xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#24282B",
            }}
          >
            Tools, Insights &amp; Enablement
          </h1>
          <p
            className="text-lg leading-relaxed max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Explore tools, insights, and enablement designed to help telecoms, ISVs, resellers, and service providers grow recurring revenue, strengthen customer relationships, and accelerate time to market. Our resource center gives you access to the content and expertise needed to build, launch, and scale digital services with confidence.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {/* HostopiaConnects */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#e8f7f7" }}
                >
                  <FileText className="w-6 h-6" style={{ color: "#2CADB2" }} />
                </div>
                <h2
                  className="font-black text-2xl md:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  HostopiaConnects
                </h2>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
                >
                  HostopiaConnects is your partner enablement hub, designed to support your go-to-market strategy. Access a comprehensive library of ready-to-use sales and marketing assets, including product sheets, presentations, campaign materials, videos, and customer-facing content. Equip your teams with proven resources to drive demand, improve sales productivity, and expand wallet share across your customer base.
                </p>
                <a
                  href="https://connects.hostopia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#2CADB2",
                    color: "#ffffff",
                    boxShadow: "0 4px 20px rgba(44,173,178,0.3)",
                  }}
                >
                  Explore HostopiaConnects
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex justify-center">
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] w-full max-w-xl">
                  <Image
                    src="/images/hostopia-connects-office.png"
                    alt="Business professionals collaborating in a modern office with digital connectivity"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Hostopia Blog */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                <Image
                  src="/images/blog.png"
                  alt="Person at laptop engaging with blog content"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#fef9e6" }}
                >
                  <Rss className="w-6 h-6" style={{ color: "#e0b82a" }} />
                </div>
                <h2
                  className="font-black text-2xl md:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  Hostopia Blog
                </h2>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
                >
                  Stay ahead of industry trends and discover new growth opportunities. The Hostopia Blog delivers insights on digital transformation, cloud and SaaS monetization, customer lifecycle management, and partner success strategies. Learn how leading telecoms, ISVs, and service providers are evolving their portfolios to stay competitive in a rapidly changing market.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#F8CF41",
                    color: "#24282B",
                    boxShadow: "0 4px 20px rgba(248,207,65,0.3)",
                  }}
                >
                  Read the Blog
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Hostopia Product Guide + image & download */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#e8f7f7" }}
                >
                  <BookOpen className="w-6 h-6" style={{ color: "#2CADB2" }} />
                </div>
                <h2
                  className="font-black text-2xl md:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  Hostopia Product Guide
                </h2>
                <p
                  className="text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
                >
                  See how Hostopia&apos;s platforms and solutions help you launch new services, increase ARPU, and create sustainable recurring revenue. Our product guide provides a clear overview of our digital experience, commerce, and customer lifecycle capabilities designed to power your business and support long-term growth.
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  Complete the form to receive your copy and discover how to unlock new revenue streams.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-6 items-stretch max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden border-2 shadow-lg bg-[#24282B] min-h-[320px] sm:min-h-[420px]">
                  <Image
                    src="/images/product-guide-2026.png"
                    alt="Hostopia Product Guide 2026"
                    fill
                    className="object-contain object-center p-4"
                    sizes="(max-width: 640px) 100vw, 320px"
                    priority={false}
                  />
                </div>
                <div
                  className="rounded-2xl border-2 shadow-lg flex flex-col min-h-[320px] sm:min-h-[420px]"
                  style={{ borderColor: "#e5e7eb", backgroundColor: "#fafafa" }}
                >
                  <h3
                    className="font-bold text-lg pt-6 px-6 pb-2 shrink-0"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                  >
                    Download the Product Guide
                  </h3>
                  <div className="flex-1 px-6 pb-6 flex flex-col justify-center">
                    <ProductGuideForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
