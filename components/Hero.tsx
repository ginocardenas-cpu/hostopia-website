import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Service Provider Partners" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "20M+", label: "Mailboxes Migrated" },
  { value: "24/7", label: "Multilingual Support" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cream pt-20">
      {/* Hero image — full height, right-aligned, never stretched */}
      <div className="absolute right-0 top-0 hidden h-full w-[55%] md:block lg:w-[62%] xl:w-[58%]">
        <Image
          src="/Home Page images/New/2023-03-16-hero.png"
          alt="Bundles of white-label digital services held by a partner"
          fill
          priority
          sizes="(max-width: 768px) 0vw, (max-width: 1280px) 62vw, 58vw"
          className="object-contain object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-8 bg-teal" />
            <span className="section-label">Wholesale &amp; White-Label Digital Services</span>
          </div>

          {/* Main headline — H1: Montserrat black, 72px scale, teal accents per design system */}
          <h1 className="mb-8 font-montserrat text-5xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Behind the
            <br />
            <span className="text-teal">Brands</span> That
            <br />
            <span className="text-teal">Power</span> Small
            <br />
            Business
            <sup className="ml-[0.15em] align-super text-[0.4em]">TM</sup>
          </h1>

          {/* Subheadline — 20px, gray-500, max-w-xl */}
          <p className="mb-10 max-w-xl font-raleway text-xl leading-7 text-gray-500">
            Hostopia gives telcos, ISPs, resellers, and distributors a complete white-label platform to
            launch digital services, grow recurring revenue, and become the digital advisor their SMB
            customers trust.
          </p>

          {/* Primary CTA — gold pill (brand); secondary charcoal outline per design system */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#partner"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal shadow-md transition-colors duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Become a Partner
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-transparent px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-white"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-sm md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-white p-8 transition-colors duration-200 hover:bg-gray-50"
            >
              <span className="mb-1 font-montserrat text-4xl font-black text-teal">{stat.value}</span>
              <span className="text-center font-raleway text-xs font-semibold uppercase tracking-wider text-[#888888]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
