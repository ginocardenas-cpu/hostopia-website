import { CheckCircle } from "lucide-react";

const migrationTypes = [
  "Email Migrations",
  "Domain Transfers",
  "Website Migrations",
  "DNS Migrations",
  "Contact & Calendar Sync",
  "Control Panel Transfers",
];

const stats = [
  { value: "20M+", label: "Mailboxes Migrated" },
  { value: "99.99%", label: "Uptime Guaranteed" },
  { value: "0", label: "Minutes of Downtime" },
  { value: "100%", label: "Data Integrity" },
];

export default function Migrations() {
  return (
    <section id="migrations" className="py-28 relative overflow-hidden" style={{ backgroundColor: "#24282B" }}>

      {/* Large decorative text in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black select-none pointer-events-none whitespace-nowrap"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(6rem, 20vw, 18rem)",
          color: "rgba(44,173,178,0.04)",
          lineHeight: 1,
        }}
      >
        MIGRATE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span className="section-label" style={{ color: "#2CADB2" }}>Migration Capabilities</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "#ffffff",
              }}
            >
              Large-Scale
              <br />
              Migrations.{" "}
              <span style={{ color: "#F8CF41" }}>Zero Drama.</span>
            </h2>
            <p
              className="text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
            >
              Switching platforms is one of the biggest risks for any service provider. Hostopia eliminates that risk entirely — at any scale.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white/5 p-8 text-center hover:bg-white/10 transition-colors duration-200"
            >
              <p
                className="font-black mb-1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  color: i % 2 === 0 ? "#2CADB2" : "#F8CF41",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Content split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h3
              className="font-black text-2xl mb-5"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              The Migration Problem — Solved
            </h3>
            <p
              className="leading-relaxed mb-8"
              style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
            >
              Migrating thousands of customers from an old platform to a new one used to mean
              risk, complaints, and churn. Hostopia has engineered that risk out of the equation
              entirely — so you can make the switch confidently and at any scale.
            </p>
            <p
              className="leading-relaxed mb-10"
              style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
            >
              Every email, contact, calendar event, and file is validated pre- and post-migration.
              Your customers never know the switch happened. Business continues uninterrupted.
            </p>

            {/* Pull quote */}
            <div
              className="border-l-4 pl-6 py-2"
              style={{ borderColor: "#F8CF41" }}
            >
              <p
                className="font-semibold text-lg italic"
                style={{ fontFamily: "Raleway, sans-serif", color: "#ffffff" }}
              >
                &ldquo;We moved 2.3 million mailboxes over a long weekend. No tickets. No complaints.&rdquo;
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: "#6b7280" }}
              >
                — Hostopia Migration Team
              </p>
            </div>
          </div>

          {/* Right — migration types */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
            >
              What We Migrate
            </p>
            <div className="grid grid-cols-2 gap-3">
              {migrationTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 rounded-xl px-4 py-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <CheckCircle size={16} style={{ color: "#2CADB2", flexShrink: 0 }} />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#e5e7eb" }}
                  >
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
