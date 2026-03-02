import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="partner" className="py-28 relative overflow-hidden" style={{ backgroundColor: "#F8CF41" }}>

      {/* Large decorative background word */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black select-none pointer-events-none whitespace-nowrap"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(6rem, 18vw, 16rem)",
          color: "rgba(36,40,43,0.05)",
          lineHeight: 1,
        }}
      >
        PARTNER
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Headline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#24282B" }} />
              <span className="section-label" style={{ color: "#24282B" }}>Ready to Grow?</span>
            </div>

            <h2
              className="font-black leading-tight mb-8"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                color: "#24282B",
              }}
            >
              Let&apos;s Build
              <br />
              Your Digital
              <br />
              Revenue
              <br />
              Engine.
            </h2>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ fontFamily: "Raleway, sans-serif", color: "#4a4e52" }}
            >
              Join hundreds of service providers who trust Hostopia to power their
              digital services portfolio. Talk to our team and discover what&apos;s possible.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Unlock new recurring revenue",
                "Accelerate time to market",
                "Scale efficiently with a trusted partner",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#24282B" }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            id="contact"
            className="rounded-3xl p-8"
            style={{ backgroundColor: "#24282B" }}
          >
            <h3
              className="font-black text-xl mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
            >
              Talk to a Partner Expert
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {["First Name", "Last Name"].map((field) => (
                  <div key={field}>
                    <label
                      className="text-xs font-semibold mb-1.5 block"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "#9ca3af" }}
                    >
                      {field}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#ffffff",
                        fontFamily: "Raleway, sans-serif",
                      }}
                      placeholder={field === "First Name" ? "Jane" : "Smith"}
                    />
                  </div>
                ))}
              </div>

              {[
                { label: "Work Email", placeholder: "jane@telco.com", type: "email" },
                { label: "Company & Role", placeholder: "VP Product, Acme Telco", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="text-xs font-semibold mb-1.5 block"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#9ca3af" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                    placeholder={field.placeholder}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontFamily: "Raleway, sans-serif",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="text-xs font-semibold mb-1.5 block"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#9ca3af" }}
                >
                  What are you looking to achieve?
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                  placeholder="Tell us about your goals..."
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontFamily: "Raleway, sans-serif",
                  }}
                />
              </div>

              <button
                className="w-full font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "#F8CF41",
                  color: "#24282B",
                  boxShadow: "0 4px 20px rgba(248,207,65,0.3)",
                }}
              >
                <Mail size={18} />
                Send Message
                <ArrowRight size={18} />
              </button>
            </div>

            <p
              className="text-center text-xs mt-4"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              Or email us directly at{" "}
              <a href="mailto:partners@hostopia.com" style={{ color: "#2CADB2" }}>
                partners@hostopia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
