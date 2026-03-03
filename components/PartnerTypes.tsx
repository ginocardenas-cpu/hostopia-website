import { Building2, Network, Store, Globe } from "lucide-react";
import AnimatedRotatingWord from "@/components/AnimatedRotatingWord";

const partnerTypes = [
  {
    icon: Building2,
    title: "Telcos & Carriers",
    description:
      "Add high-margin digital services to your connectivity bundle. Retain customers with email, web, and ecommerce — products SMBs use every single day.",
  },
  {
    icon: Network,
    title: "Resellers & Distributors",
    description:
      "Expand your catalog with in-demand SMB digital tools. White-label Hostopia's platform and offer a complete suite without building anything from scratch.",
  },
  {
    icon: Store,
    title: "Domain Registrars",
    description:
      "Complement your domain business with email hosting, website builders, and online stores. Turn one-time sales into monthly recurring revenue.",
  },
  {
    icon: Globe,
    title: "ISPs & Hosting Cos.",
    description:
      "Move up the value chain. Add SMB-focused digital marketing, ecommerce, and professional services on top of your infrastructure business.",
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
            <span className="section-label">Who We Partner With</span>
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
            <span
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                flexWrap: "nowrap",
              }}
            >
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
            If you sell to small businesses, Hostopia was built for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="group rounded-3xl p-8 bg-white border border-gray-100 hover:border-teal hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ borderColor: "transparent" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#e8f7f7" : "#fef9e6",
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: i % 2 === 0 ? "#2CADB2" : "#e0b82a" }}
                  />
                </div>
                <h3
                  className="font-bold mb-3 text-base"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  {type.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  {type.description}
                </p>
              </div>
            );
          })}
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
