import Link from "next/link";
import { productsDropdownSections } from "@/lib/nav-products";

export default function ProductsPage() {
  return (
    <main className="bg-cream pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-px w-8 bg-teal" />
          <span className="section-label">Our Solutions</span>
        </div>
        <h1 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
          Products for <span className="text-teal">every</span> stage of the SMB journey
        </h1>
        <p className="mb-16 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500 lg:text-xl">
          White-label digital services you can bundle, price, and sell under your brand — from domains and email to
          websites, growth, and commerce.
        </p>

        <div className="space-y-20">
          {productsDropdownSections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-2 font-montserrat text-2xl font-black text-charcoal">{section.heading}</h2>
              <p className="mb-8 font-raleway text-sm text-gray-500">Help your customers succeed — and grow your digital revenue.</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-teal/30 hover:bg-gray-50"
                  >
                    <h3 className="mb-2 font-montserrat text-lg font-black text-charcoal group-hover:text-teal">{link.label}</h3>
                    <p className="font-raleway text-sm leading-relaxed text-gray-500">{link.description}</p>
                    <span className="mt-4 inline-block font-raleway text-sm font-semibold text-teal">Learn more →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-charcoal px-8 py-12 text-center md:px-16">
          <h2 className="mb-4 font-montserrat text-2xl font-black text-white md:text-3xl">Not sure where to start?</h2>
          <p className="mx-auto mb-8 max-w-2xl font-raleway text-base text-white/70">
            Our team helps partners prioritize SKUs, packaging, and go-to-market — so you launch faster with the right
            portfolio mix.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-gold px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-gold-dark"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </main>
  );
}
