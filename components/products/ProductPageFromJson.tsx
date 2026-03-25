import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductJson } from "@/lib/product-json-types";
import ProductLucideIcon from "@/components/products/ProductLucideIcon";

function splitHeadline(headline: string): ReactNode {
  const parts = headline.split(/\s[—–]\s/);
  if (parts.length >= 2) {
    const rest = parts.slice(1).join(" — ");
    return (
      <>
        <span className="text-charcoal">{parts[0]}</span>
        <br />
        <span className="text-teal">{rest}</span>
      </>
    );
  }
  return <span className="text-charcoal">{headline}</span>;
}

type ProductImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes: string;
};

function ProductImage({ src, alt, priority, className, sizes }: ProductImageProps) {
  return (
    <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={className} />
  );
}

export default function ProductPageFromJson({ data }: { data: ProductJson }) {
  const { hero, features, partnerAdvantage, lifecycleFit, cta, media } = data;
  const heroImg = media?.heroImage;
  const contentImg = media?.contentImage;

  return (
    <main>
      {/* Hero — homepage rhythm: cream, large optional image column */}
      <section className="relative overflow-hidden bg-cream pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-2 lg:gap-14 lg:pb-28">
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <nav className="mb-8 font-raleway text-sm text-gray-500">
              <Link href="/" className="hover:text-teal">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-teal">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">{data.label}</span>
            </nav>

            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-teal" />
              <span className="section-label">{hero.eyebrow}</span>
            </div>

            {hero.stat ? (
              <p className="mb-4 font-raleway text-sm font-semibold uppercase tracking-wide text-teal">{hero.stat}</p>
            ) : null}

            <h1 className="mb-6 font-montserrat text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {splitHeadline(hero.headline)}
            </h1>

            {hero.subheadline ? (
              <p className="mb-4 font-raleway text-lg leading-relaxed text-gray-500 lg:text-xl lg:leading-7">
                {hero.subheadline}
              </p>
            ) : null}

            {hero.description ? (
              <p className="mb-8 font-raleway text-base leading-relaxed text-gray-500 lg:text-lg">{hero.description}</p>
            ) : null}

            {hero.badge ? (
              <p className="mb-8 font-raleway text-sm font-medium text-charcoal/80">{hero.badge}</p>
            ) : null}

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-gold-dark hover:shadow-md"
              >
                {hero.cta.primary}
              </Link>
              <Link
                href="mailto:partners@hostopia.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-transparent px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-white"
              >
                {hero.cta.secondary}
              </Link>
            </div>
          </div>

          {/* Right column: large hero visual (homepage-style) + optional sidebar */}
          <div className="relative flex w-full flex-col justify-center gap-8">
            {heroImg ? (
              <div className="relative mx-auto aspect-[4/3] w-full min-h-[280px] max-w-[920px] sm:min-h-[340px] lg:mx-0 lg:aspect-auto lg:h-[min(85vh,960px)] lg:max-h-[960px] lg:max-w-none">
                <ProductImage
                  src={heroImg.src}
                  alt={heroImg.alt}
                  priority={heroImg.priority ?? true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center lg:object-right"
                />
              </div>
            ) : null}

            {!heroImg && hero.sidebar ? (
              <div className="rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm lg:ml-auto lg:max-w-md">
                <p className="mb-6 font-montserrat text-lg font-black text-charcoal">{hero.sidebar.heading}</p>
                <ul className="space-y-5">
                  {hero.sidebar.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-montserrat text-sm font-bold text-charcoal">{item.title}</p>
                      <p className="mt-1 font-raleway text-sm leading-relaxed text-gray-500">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {heroImg && hero.sidebar ? (
              <div className="mt-10 rounded-2xl border border-gray-200/80 bg-white/95 p-6 shadow-sm backdrop-blur-sm lg:mt-8 lg:max-w-md lg:self-end">
                <p className="mb-4 font-montserrat text-base font-black text-charcoal">{hero.sidebar.heading}</p>
                <ul className="space-y-4">
                  {hero.sidebar.items.slice(0, 3).map((item) => (
                    <li key={item.title}>
                      <p className="font-montserrat text-xs font-bold text-charcoal">{item.title}</p>
                      <p className="mt-0.5 font-raleway text-xs leading-relaxed text-gray-500">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {features ? (
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6">
            <span className="section-label mb-4 inline-block">{features.eyebrow}</span>
            <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl lg:text-6xl">
              {splitHeadline(features.heading)}
            </h2>
            <p className="mb-14 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{features.intro}</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.cards.map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-colors duration-300 hover:bg-gray-50"
                >
                  <div className="mb-6">
                    <ProductLucideIcon name={card.icon} className="h-8 w-8 text-teal" size={32} />
                  </div>
                  <div className="mb-4 h-1 w-12 bg-teal" />
                  <h3 className="mb-3 font-montserrat text-xl font-black text-charcoal">{card.title}</h3>
                  <p className="font-raleway text-sm leading-relaxed text-gray-500">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {contentImg ? (
        <section className="bg-white py-0">
          <div className="mx-auto max-w-[1920px] px-0">
            <figure className="relative mx-auto w-full">
              <div className="relative aspect-[21/9] min-h-[280px] w-full max-h-[min(85vh,1000px)] sm:min-h-[360px]">
                <ProductImage
                  src={contentImg.src}
                  alt={contentImg.alt}
                  priority={false}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              {contentImg.caption ? (
                <figcaption className="mx-auto max-w-7xl px-6 py-4 font-raleway text-sm text-gray-500">
                  {contentImg.caption}
                </figcaption>
              ) : null}
            </figure>
          </div>
        </section>
      ) : null}

      {partnerAdvantage ? (
        <section className="bg-charcoal py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-teal" />
              <span className="section-label">{partnerAdvantage.eyebrow}</span>
            </div>
            <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              {splitHeadline(partnerAdvantage.heading)}
            </h2>
            <p className="mb-14 max-w-3xl font-raleway text-lg leading-relaxed text-white/70">{partnerAdvantage.intro}</p>
            <div className="grid gap-10 md:grid-cols-3">
              {partnerAdvantage.items.map((item) => (
                <div key={item.title} className="border-t border-white/15 pt-6">
                  <h3 className="mb-3 font-montserrat text-lg font-black text-white">{item.title}</h3>
                  <p className="font-raleway text-base leading-relaxed text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {lifecycleFit ? (
        <section className="bg-cream py-28">
          <div className="mx-auto max-w-7xl px-6">
            <span className="section-label mb-4 inline-block">{lifecycleFit.eyebrow}</span>
            <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl">
              {lifecycleFit.heading}
            </h2>
            <p className="mb-12 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{lifecycleFit.intro}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {lifecycleFit.steps.map((step) => (
                <div
                  key={step.step}
                  className={`rounded-2xl border border-gray-100 bg-white p-8 transition-colors duration-300 hover:bg-gray-50 ${
                    step.highlight ? "ring-2 ring-teal/30" : ""
                  }`}
                >
                  <span className="mb-4 block font-montserrat text-7xl font-black text-gray-100">{step.step}</span>
                  <div className="mb-4 h-1 w-12 bg-teal" />
                  <h3 className="mb-3 font-montserrat text-xl font-black text-charcoal">{step.title}</h3>
                  <p className="font-raleway text-sm leading-relaxed text-gray-500">{step.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-4xl font-raleway text-base leading-relaxed text-gray-500">{lifecycleFit.positioning}</p>
          </div>
        </section>
      ) : null}

      {cta ? (
        <section className="bg-charcoal py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-montserrat text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
              {cta.headline}
            </h2>
            <p className="mb-10 font-raleway text-lg leading-relaxed text-white/70">{cta.body}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-gold-dark"
            >
              {cta.buttonText}
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
