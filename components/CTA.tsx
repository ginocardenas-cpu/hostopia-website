import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="partner" className="relative overflow-hidden bg-gold py-28">

      {/* Large decorative background word */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-montserrat font-black"
        style={{
          fontSize: "clamp(6rem, 18vw, 16rem)",
          color: "rgba(36,40,43,0.05)",
          lineHeight: 1,
        }}
      >
        PARTNER
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Headline */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-teal" />
              <span className="section-label">Ready to Grow?</span>
            </div>

            <h2 className="mb-8 font-montserrat text-5xl font-black leading-tight text-charcoal sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[88px]">
              Launch Your
              <br />
              <span className="text-white">White-Label</span>
              <br />
              Digital Services
              <br />
              Portfolio.
            </h2>

            <p className="mb-8 font-raleway text-lg leading-relaxed text-[#4a4e52]">
              Join 500+ service providers who trust Hostopia to power their digital services.
              Talk to our team and discover how quickly you can go to market.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Unlock new recurring revenue from your existing customer base",
                "Go to market in weeks with a proven, white-label platform",
                "Scale confidently with migration expertise and 24/7 support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-charcoal" />
                  <span className="font-raleway text-sm font-semibold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div id="contact" className="rounded-3xl bg-charcoal p-8">
            <h3 className="mb-6 font-montserrat text-xl font-black text-white">Talk to a Partner Expert</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {["First Name", "Last Name"].map((field) => (
                  <div key={field}>
                    <label className="mb-1.5 block font-raleway text-xs font-semibold text-gray-400">
                      {field}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/12 bg-white/[0.07] px-4 py-3 font-raleway text-sm text-white outline-none transition-colors"
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
                  <label className="mb-1.5 block font-raleway text-xs font-semibold text-gray-400">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full rounded-xl border border-white/12 bg-white/[0.07] px-4 py-3 font-raleway text-sm text-white outline-none"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="mb-1.5 block font-raleway text-xs font-semibold text-gray-400">
                  What are you looking to achieve?
                </label>
                <textarea
                  rows={3}
                  className="w-full resize-none rounded-xl border border-white/12 bg-white/[0.07] px-4 py-3 font-raleway text-sm text-white outline-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal shadow-md transition-colors duration-200 hover:bg-gold-dark"
              >
                <Mail size={18} />
                Send Message
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="mt-4 text-center font-raleway text-xs text-gray-500">
              Or email us directly at{" "}
              <a href="mailto:partners@hostopia.com" className="text-teal hover:text-teal-dark">
                partners@hostopia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
