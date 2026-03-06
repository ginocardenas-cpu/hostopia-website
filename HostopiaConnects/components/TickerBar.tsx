"use client";

import { HeroPill } from "@/components/ui/hero-pill";

const defaultMessage = {
  announcement: "What's New!",
  label: "The 2026 Hostopia Product Guide is now available in Connects.",
  href: "/#featured",
};

export function TickerBar() {
  const { announcement, label, href } = defaultMessage;

  return (
    <div
      className="flex items-center justify-center px-6 py-2.5 border-b border-white/10"
      style={{ backgroundColor: "#24282B" }}
    >
      <HeroPill
        href={href}
        label={label}
        announcement={announcement}
        className="bg-[#2CADB2]/20 ring-1 ring-white/20 [&_div]:bg-white/95 [&_div]:text-[#2CADB2] [&_p]:text-white [&_svg]:text-white"
      />
    </div>
  );
}
