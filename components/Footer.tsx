import { Mail, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Solutions: [
    "Business Email",
    "Website Builder",
    "Ecommerce",
    "Digital Marketing",
    "Bilingual Support",
    "Migrations",
  ],
  Partners: [
    "Become a Partner",
    "Partner Portal",
    "Case Studies",
    "API Documentation",
    "Partner Support",
  ],
  Company: [
    "About Hostopia",
    "Leadership",
    "Careers",
    "Press",
    "Contact Us",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "SLA",
    "Security",
    "CASL Compliance",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                host<span className="text-gradient-orange">opia</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The wholesale white-label platform powering digital service
              providers across North America. Platforms. People. Technology.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-slate-300" />
              </a>
              <a
                href="mailto:partners@hostopia.com"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} className="text-slate-300" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hostopia. All rights reserved. Powered
            by Platforms. People. Technology.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
            <span className="text-slate-500 text-xs">
              English | Français
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
