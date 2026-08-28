import { ArrowRight } from "lucide-react";
import type { ProductMigrationProcess } from "@/lib/product-json-types";

type Props = {
  data: ProductMigrationProcess;
};

export default function ProductMigrationProcessSection({ data }: Props) {
  return (
    <section className="border-t border-gray-200/80 bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label mb-4 inline-block">{data.eyebrow}</span>
        <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl lg:text-6xl">
          {data.heading}
        </h2>
        <p className="mb-14 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{data.intro}</p>

        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
          {data.steps.flatMap((step, index, all) => {
            const card = (
              <div key={step.step} className="min-w-0 flex-1 md:flex md:flex-col">
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <span className="mb-3 font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                    {step.step}
                  </span>
                  <h3 className="mb-3 font-montserrat text-sm font-semibold text-charcoal">{step.title}</h3>
                  <p className="font-raleway text-sm leading-relaxed text-gray-500">{step.body}</p>
                </div>
              </div>
            );
            const arrow =
              index < all.length - 1 ? (
                <div
                  key={`arrow-${step.step}`}
                  className="flex shrink-0 items-center justify-center py-2 md:w-8 md:py-0"
                  aria-hidden
                >
                  <ArrowRight className="hidden h-7 w-7 text-teal md:block" />
                </div>
              ) : null;
            return arrow ? [card, arrow] : [card];
          })}
        </div>

        <p className="max-w-3xl font-raleway text-base leading-relaxed text-gray-500">{data.closing}</p>
      </div>
    </section>
  );
}
