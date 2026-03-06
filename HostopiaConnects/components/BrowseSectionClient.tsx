"use client";

import { useState } from "react";
import { UniqueAccordion } from "@/components/ui/interactive-accordion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function BrowseSectionClient() {
  const [showWizard, setShowWizard] = useState(false);

  if (showWizard) {
    return (
      <UniqueAccordion onStartOver={() => setShowWizard(false)} />
    );
  }

  return (
    <>
      <div className="space-y-4 mb-10">
        <h2
          className="font-black leading-tight"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            color: "#24282B"
          }}
        >
          Let Us Help You Find What You&apos;re Looking For
        </h2>
        <p
          className="text-base max-w-2xl"
          style={{
            fontFamily: "Raleway, sans-serif",
            color: "#555A5E",
            lineHeight: 1.625
          }}
        >
          Use this guided experience to quickly surface the right resources in four simple steps.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-base max-w-2xl" style={{ fontFamily: "Raleway, sans-serif", color: "#555A5E", lineHeight: 1.625 }}>
          <li><strong style={{ color: "#24282B" }}>Customer Stage</strong> – Choose where your customer is in their journey</li>
          <li><strong style={{ color: "#24282B" }}>Product</strong> – Select the product or solution</li>
          <li><strong style={{ color: "#24282B" }}>Content Type</strong> – Identify the format you need</li>
          <li><strong style={{ color: "#24282B" }}>Workflow</strong> – Define the task you&apos;re working on</li>
        </ol>
        <div className="pt-2">
          <p className="font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>View Your Results</p>
          <p className="text-sm mt-0.5 max-w-2xl" style={{ fontFamily: "Raleway, sans-serif", color: "#555A5E", lineHeight: 1.625 }}>
            See all matching assets, review them online, download them, or refine your filters to narrow the results.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <InteractiveHoverButton
          text="Begin"
          onClick={() => setShowWizard(true)}
          className="!w-auto min-w-[140px] px-6"
        />
      </div>
    </>
  );
}
