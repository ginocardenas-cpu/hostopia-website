import type { ProductOpportunity } from "@/lib/product-json-types";

type Props = {
  data: ProductOpportunity;
};

export default function ProductOpportunitySection({ data }: Props) {
  return (
    <section className="border-t border-gray-200/80 bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label mb-4 inline-block">{data.eyebrow}</span>
        <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl lg:text-6xl">
          {data.heading}
        </h2>
        <div className="mb-14 max-w-3xl space-y-6">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="font-raleway text-lg leading-relaxed text-gray-500">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-sm md:grid-cols-3">
          {data.stats.map((stat) => (
            <div
              key={stat.figure}
              className="flex flex-col bg-white p-8 transition-colors duration-200 hover:bg-gray-50"
            >
              <span className="mb-2 font-montserrat text-4xl font-black text-teal">{stat.figure}</span>
              <p className="mb-3 font-raleway text-sm leading-relaxed text-gray-500">{stat.label}</p>
              <p className="mt-auto font-raleway text-xs text-gray-400">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
