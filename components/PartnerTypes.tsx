import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedRotatingWord from "@/components/AnimatedRotatingWord";

const partnerTypes = [
  {
    title: "Telcos & Carriers",
    shortCopy: "Add high-margin digital services to your connectivity bundle. Transform one-time activations into long-term digital relationships with email, websites, and marketing tools your subscribers actually use.",
    href: "/customers/telcos",
    image: "/Home%20Page%20images/homepage-telcos.png",
    alt: "Telecommunications infrastructure",
  },
  {
    title: "ISPs & Cable Operators",
    shortCopy: "Move beyond bandwidth. Offer branded email, website hosting, and business tools that increase wallet share and reduce churn across your residential and business customer base.",
    href: "/customers/isps",
    image: "/Home%20Page%20images/homepage-isps.png",
    alt: "ISP and cable operator infrastructure",
  },
  {
    title: "Resellers & Distributors",
    shortCopy: "Expand your catalog with white-label SMB digital services — from domains and email to full ecommerce. Hostopia handles provisioning, support, and fulfillment while you own the customer.",
    href: "/customers/resellers",
    image: "/Home%20Page%20images/homepage-resellersanddistrib.png",
    alt: "Business partnership and distribution",
  },
  {
    title: "MSPs & Hosting Companies",
    shortCopy: "Complement your managed services with SMB-ready digital marketing, ecommerce, and website tools. Differentiate your offer without building or maintaining new platforms.",
    href: "/customers/msps",
    image: "/Home%20Page%20images/homepage-domainregistrars.png",
    alt: "Managed service providers and hosting companies",
  },
];

export default function PartnerTypes() {
  return (
    <section id="platform" className="py-28" style={{ backgroundColor: "#f7f6f2" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span className="section-label">Built for Service Providers Who Sell to Small Business</span>
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#24282B",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "baseline", flexWrap: "nowrap" }}>
              Built for{" "}
              <span style={{ color: "#2CADB2" }}>
                <AnimatedRotatingWord />
              </span>
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            If you have an established base of SMB customers and want to deliver more value — Hostopia was built for you.
          </p>
        </div>

        {/* Image card gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((type) => (
            <Link
              key={type.title}
              href={type.href}
              className="group block rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(36,40,43,0.85) 0%, transparent 50%)",
                  }}
                />
              </div>
              <div className="p-6">
                <h3
                  className="font-bold mb-2 text-lg"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  {type.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  {type.shortCopy}
                </p>
                <span
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
                >
                  Learn more
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Montserrat, sans-serif",
              borderColor: "#24282B",
              color: "#24282B",
            }}
          >
            Don&apos;t see your category? Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
