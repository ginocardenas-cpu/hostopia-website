import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="partner" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
          Ready to Grow?
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Let&apos;s Build Your{" "}
          <span className="text-gradient">Digital Revenue</span>{" "}
          Engine Together.
        </h2>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Join hundreds of service providers who trust Hostopia to power their
          digital services portfolio. Talk to our team today and discover what&apos;s
          possible.
        </p>

        {/* Contact form strip */}
        <div
          id="contact"
          className="glass rounded-3xl p-8 mb-8 max-w-lg mx-auto text-left"
        >
          <h3 className="text-white font-bold text-lg mb-5">
            Talk to a Partner Expert
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1 block">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1 block">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1 block">
                Work Email
              </label>
              <input
                type="email"
                placeholder="jane@telco.com"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1 block">
                Company & Role
              </label>
              <input
                type="text"
                placeholder="VP Product, Acme Telco"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1 block">
                What are you looking to achieve?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your goals..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 hover:scale-[1.02]">
              <Mail size={18} />
              Send Message
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <p className="text-slate-500 text-sm">
          Prefer email?{" "}
          <a
            href="mailto:partners@hostopia.com"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            partners@hostopia.com
          </a>
        </p>
      </div>
    </section>
  );
}
