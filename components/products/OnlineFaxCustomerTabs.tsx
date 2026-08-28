"use client";

import type { ProductCustomerTabs } from "@/lib/product-json-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  data: ProductCustomerTabs;
};

export default function OnlineFaxCustomerTabs({ data }: Props) {
  const defaultTab = data.tabs[0]?.id ?? "";

  return (
    <section className="border-t border-gray-200/80 bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label mb-4 inline-block">{data.eyebrow}</span>
        <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl lg:text-6xl">
          {data.heading}
        </h2>
        <p className="mb-10 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{data.intro}</p>

        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
            <TabsList className="flex h-auto min-h-0 w-max max-w-none flex-nowrap justify-start gap-1 bg-cream p-2 md:gap-2">
              {data.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="shrink-0 px-3 py-2 text-xs md:px-4 md:py-3 md:text-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {data.tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-8 rounded-2xl border border-gray-100 bg-cream/50 p-6 md:p-10 data-[state=inactive]:hidden motion-reduce:transition-none"
              tabIndex={0}
            >
              <p className="mb-4 font-montserrat text-base font-bold text-charcoal md:text-lg">{tab.opportunityLine}</p>
              <p className="mb-6 font-raleway text-base leading-relaxed text-gray-500">{tab.body}</p>
              <ul className="list-none space-y-3">
                {tab.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)} className="flex items-start gap-3">
                    <span className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden />
                    <span className="font-raleway text-sm leading-relaxed text-gray-500 md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
