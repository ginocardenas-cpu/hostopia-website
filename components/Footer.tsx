import { Mail, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Solutions: ["Business Email", "Website Builder", "Ecommerce", "Digital Marketing", "Bilingual Support", "Migrations"],
  Partners: ["Become a Partner", "Partner Portal", "Case Studies", "API Documentation", "Partner Support"],
  Company: ["About Hostopia", "Leadership", "Careers", "Press", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "SLA", "Security", "CASL Compliance"],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#24282B" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/logo.png"
                alt="Hostopia — A HostPapa Company"
                className="h-11 w-auto max-w-[220px] object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              The wholesale white-label platform powering digital service providers across North America.
              Platforms. People. Technology.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email", href: "mailto:partners@hostopia.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href || "#"}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <Icon size={15} style={{ color: "#9ca3af" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
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
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs"
            style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
          >
            © {new Date().getFullYear()} Hostopia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span
              className="flex items-center gap-2 text-xs font-semibold"
              style={{ color: "#2CADB2" }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#2CADB2" }}
              />
              All systems operational
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "Raleway, sans-serif", color: "#4b5563" }}
            >
              English | Français
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
