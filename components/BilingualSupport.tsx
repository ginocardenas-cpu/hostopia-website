const supportStats = [
  { value: "EN/FR", label: "Bilingual", sub: "English & French" },
  { value: "24/7", label: "Availability", sub: "Always on" },
  { value: "< 60s", label: "First Reply", sub: "Response SLA" },
  { value: "98%", label: "CSAT", sub: "Satisfaction score" },
];

export default function BilingualSupport() {
  return (
    <section id="support" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#F8CF41" }} />
              <span className="section-label">Bilingual Support</span>
            </div>

            <h2
              className="font-black leading-tight mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
              }}
            >
              Support That
              <br />
              Sounds Like{" "}
              <span
                style={{
                  color: "#2CADB2",
                  textDecoration: "underline",
                  textDecorationColor: "#F8CF41",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "4px",
                }}
              >
                You.
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-5"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              In Canada&apos;s bilingual market, seamless English and French customer support isn&apos;t optional —
              it&apos;s a competitive necessity. Hostopia provides full bilingual support, delivered in your
              brand&apos;s voice.
            </p>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              Your customers interact with <strong style={{ color: "#24282B" }}>your brand</strong>,
              supported by <strong style={{ color: "#24282B" }}>our people</strong>. We never break
              the white-label experience — not in tickets, not in chat, not on the phone.
            </p>

            <a
              href="#partner"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#2CADB2",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(44,173,178,0.3)",
              }}
            >
              Talk to Us About Support
            </a>
          </div>

          {/* Right: Stats grid + visual accent */}
          <div className="relative">
            {/* Big background flag emoji / accent */}
            <div
              className="absolute -top-8 -right-8 text-9xl select-none pointer-events-none opacity-10"
            >
              🇨🇦
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {supportStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-3xl p-8"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#e8f7f7" : "#fef9e6",
                  }}
                >
                  <p
                    className="font-black text-3xl mb-1"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: i % 2 === 0 ? "#2CADB2" : "#24282B",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-bold text-sm mb-0.5"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Language tags */}
            <div className="flex gap-3 mt-6">
              {["English", "Français"].map((lang) => (
                <div
                  key={lang}
                  className="flex items-center gap-2 px-5 py-3 rounded-full border-2 font-bold text-sm"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    borderColor: "#2CADB2",
                    color: "#2CADB2",
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
