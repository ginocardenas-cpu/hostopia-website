import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Service Provider Partners" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "20M+", label: "Mailboxes Migrated" },
  { value: "EN/FR", label: "Bilingual Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" style={{ backgroundColor: "#f7f6f2" }}>

      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(44,173,178,0.12) 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(248,207,65,0.1) 0%, transparent 70%)",
          transform: "translate(-20%, 20%)",
        }}
      />

      {/* Floating geometric accents */}
      <div
        className="absolute top-32 right-24 w-24 h-24 rounded-2xl rotate-12 opacity-40 animate-float pointer-events-none"
        style={{ backgroundColor: "#2CADB2" }}
      />
      <div
        className="absolute bottom-40 right-48 w-14 h-14 rounded-full opacity-30 pointer-events-none"
        style={{ backgroundColor: "#F8CF41" }}
      />
      <div
        className="absolute top-1/2 right-16 w-4 h-32 rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: "#2CADB2" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span className="section-label">Wholesale &amp; White-Label Digital Services</span>
          </div>

          {/* Main headline — large editorial type */}
          <h1
            className="font-black leading-[1.02] tracking-tight mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              color: "#24282B",
            }}
          >
            The Platform
            <br />
            <span style={{ color: "#2CADB2" }}>Behind</span> the
            <br />
            Brands That
            <br />
            Power Small
            <br />
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#F8CF41",
                textUnderlineOffset: "8px",
                textDecorationThickness: "6px",
              }}
            >
              Business.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Hostopia gives telcos, resellers, and distributors a complete
            white-label platform to launch digital services, drive new revenue,
            and become true digital advisors to the small businesses they serve.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#partner"
              className="group inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#F8CF41",
                color: "#24282B",
                boxShadow: "0 4px 20px rgba(248,207,65,0.3)",
              }}
            >
              Become a Partner
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full text-base border-2 transition-all duration-200 hover:bg-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
                borderColor: "#24282B",
                color: "#24282B",
              }}
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-8 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <span
                className="font-black mb-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.25rem",
                  color: i % 2 === 0 ? "#2CADB2" : "#24282B",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-wider text-center"
                style={{ fontFamily: "Raleway, sans-serif", color: "#888" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
