"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe2, MousePointerClick, Package, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    value: "one-click",
    icon: <MousePointerClick className="h-4 w-4 shrink-0 text-[#2CADB2]" aria-hidden />,
    label: "One-click activation",
    content: {
      badge: "Online Store",
      title: "One-click store activation",
      description:
        "Add a fully functional online store to any Online Presence Builder website with one click. No migration, no separate platform, no disruption — SMBs start selling under your brand immediately.",
      imageSrc:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=700&fit=crop&q=80",
      imageAlt: "Retail checkout and ecommerce setup",
    },
  },
  {
    value: "mobile",
    icon: <Smartphone className="h-4 w-4 shrink-0 text-[#2CADB2]" aria-hidden />,
    label: "Mobile-ready commerce",
    content: {
      badge: "Every device",
      title: "Mobile-ready commerce",
      description:
        "Responsive storefront, checkout, and product browsing optimized for smartphones and tablets — where the majority of shopping happens — so your customers never lose a sale on the go.",
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=700&fit=crop&q=80",
      imageAlt: "Customer shopping on a smartphone",
    },
  },
  {
    value: "channels",
    icon: <Globe2 className="h-4 w-4 shrink-0 text-[#2CADB2]" aria-hidden />,
    label: "Multi-channel selling",
    content: {
      badge: "Omnichannel",
      title: "Multi-channel selling",
      description:
        "Sell on the website plus Facebook, Instagram, TikTok, Pinterest, Amazon, and Google Shopping — with centralized inventory and order management so nothing falls through the cracks.",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=700&fit=crop&q=80",
      imageAlt: "Team collaborating on digital commerce",
    },
  },
  {
    value: "revenue",
    icon: <Package className="h-4 w-4 shrink-0 text-[#2CADB2]" aria-hidden />,
    label: "Revenue-driving tools",
    content: {
      badge: "Growth",
      title: "Revenue-driving tools",
      description:
        "Abandoned cart recovery, discount codes, promotions, social selling, and subscription support. Sell physical goods, digital products, or services — all tuned to grow average order value and retention.",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop&q=80",
      imageAlt: "Analytics and business growth on laptop",
    },
  },
] as const;

export function EcommerceFeature108() {
  return (
    <section className="py-4 md:py-6">
      <div className="flex flex-col items-center gap-3 text-center md:gap-4">
        <Badge variant="outline" className="font-heading">
          What you deliver
        </Badge>
        <h2
          className="max-w-3xl text-2xl font-bold leading-tight text-[#24282B] md:text-3xl lg:text-4xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Full-featured ecommerce — without the complexity
        </h2>
        <p
          className="max-w-2xl text-base text-[#555a5e] md:text-lg"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Online Store gives SMBs everything they need to sell online, integrated into the site they already have with
          you.
        </p>
      </div>

      <Tabs defaultValue={tabs[0].value} className="mt-8 w-full">
        <div className="flex justify-center overflow-x-auto pb-2">
          <TabsList className="flex h-auto min-h-0 w-max max-w-full flex-wrap justify-center gap-1 bg-white p-2 md:gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="shrink-0 px-3 py-2 text-xs md:px-4 md:py-3 md:text-sm"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {tab.icon}
                <span className="max-w-[9rem] text-left leading-snug md:max-w-none">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-sm md:p-10 lg:p-12">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 data-[state=inactive]:hidden"
            >
              <div className="flex flex-col gap-4 text-left lg:gap-5">
                <Badge variant="outline" className="w-fit bg-[#f7f6f2] font-heading">
                  {tab.content.badge}
                </Badge>
                <h3
                  className="text-2xl font-bold leading-tight text-[#24282B] lg:text-4xl"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {tab.content.title}
                </h3>
                <p
                  className="text-base leading-relaxed text-[#555a5e] lg:text-lg"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {tab.content.description}
                </p>
                <Button asChild size="lg" className="mt-1 w-fit gap-2">
                  <Link href="/contact">Book a demo</Link>
                </Button>
              </div>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl bg-[#f7f6f2] shadow-inner lg:max-w-none">
                <Image
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
