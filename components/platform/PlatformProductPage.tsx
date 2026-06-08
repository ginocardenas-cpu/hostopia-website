import { SectionCta } from "@/components/marketing/marketingLayout";

export type PlatformFeature = { title: string; body: string };

export type PlatformPageContent = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  helps: string[];
  forProviders: string;
  forCustomers: string;
  featuresKicker: string;
  featuresHeadline: string;
  features: PlatformFeature[];
  cta: { headline: string; body: string; buttonText: string };
};

export default function PlatformProductPage({ content }: { content: PlatformPageContent }) {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gray-50 py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-teal" />
            <span className="section-label">Platform</span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-5 font-montserrat text-4xl font-black tracking-tight text-charcoal md:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mx-auto mb-6 max-w-2xl font-montserrat text-xl font-bold leading-snug text-charcoal md:text-2xl">
            {content.tagline}
          </p>
          <p className="mx-auto mb-9 max-w-2xl font-raleway text-lg leading-relaxed text-gray-500">
            {content.intro}
          </p>
          <div className="flex justify-center">
            <SectionCta href="/contact">{content.cta.buttonText}</SectionCta>
          </div>
        </div>
      </section>

      {/* What it helps you do */}
      <section className="border-t border-neutral-200/60 bg-white py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <span className="section-label mb-3 inline-block">What it helps you do</span>
          <h2 className="mb-10 max-w-3xl font-montserrat text-3xl font-black tracking-tight text-charcoal md:text-4xl">
            One platform, less friction at every step.
          </h2>
          <ul className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {content.helps.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-raleway text-lg leading-relaxed text-gray-500"
              >
                <span className="mt-[0.6rem] h-1.5 w-1.5 flex-none rounded-full bg-teal" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-neutral-200/60 bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <span className="section-label mb-3 inline-block">Who it's for</span>
          <h2 className="mb-10 max-w-3xl font-montserrat text-3xl font-black tracking-tight text-charcoal md:text-4xl">
            Built for both sides of the relationship.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 border-t-4 border-t-teal bg-white p-8 shadow-sm">
              <h3 className="mb-3 font-montserrat text-xl font-black text-charcoal">For service providers</h3>
              <p className="font-raleway text-base leading-relaxed text-gray-500">{content.forProviders}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 border-t-4 border-t-teal bg-white p-8 shadow-sm">
              <h3 className="mb-3 font-montserrat text-xl font-black text-charcoal">For customers</h3>
              <p className="font-raleway text-base leading-relaxed text-gray-500">{content.forCustomers}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature copy blocks */}
      <section className="border-t border-neutral-200/60 bg-white py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <span className="section-label mb-3 inline-block">{content.featuresKicker}</span>
          <h2 className="mb-10 max-w-3xl font-montserrat text-3xl font-black tracking-tight text-charcoal md:text-4xl">
            {content.featuresHeadline}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {content.features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-200 bg-cream p-8">
                <h3 className="mb-3 font-montserrat text-lg font-black text-charcoal">{feature.title}</h3>
                <p className="font-raleway text-base leading-relaxed text-gray-500">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="border-t border-neutral-200/60 bg-gray-50 py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="section-label mb-4 inline-block">Next step</span>
          <h2 className="mb-5 font-montserrat text-3xl font-black tracking-tight text-charcoal md:text-4xl">
            {content.cta.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-raleway text-lg leading-relaxed text-gray-500">
            {content.cta.body}
          </p>
          <div className="flex justify-center">
            <SectionCta href="/contact">{content.cta.buttonText}</SectionCta>
          </div>
        </div>
      </section>
    </main>
  );
}
