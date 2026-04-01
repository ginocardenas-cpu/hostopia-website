"use client";

import Script from "next/script";
import { createElement } from "react";
import { resolvePublicConvaiAgentId, resolvePublicConvaiScriptSrc } from "@/lib/voice-lead/convai-defaults";

/**
 * Official ElevenLabs conversational widget — same as:
 *   <elevenlabs-convai agent-id="…"></elevenlabs-convai>
 *   <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async />
 */
export default function ElevenLabsHomeConvaiSection() {
  const agentId = resolvePublicConvaiAgentId();
  const scriptSrc = resolvePublicConvaiScriptSrc();

  return (
    <section
      className="border-t border-gray-200/80 bg-cream py-20 md:py-28"
      aria-labelledby="home-convai-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-teal" />
            <span className="section-label">Partner assistant</span>
          </div>
          <h2
            id="home-convai-heading"
            className="font-montserrat text-3xl font-black leading-tight text-charcoal md:text-4xl lg:text-5xl"
          >
            Try a voice conversation
          </h2>
          <p className="mt-4 font-raleway text-lg leading-relaxed text-gray-500">
            Ask questions about Hostopia for service providers. Use the widget below — allow microphone access when
            prompted.
          </p>
        </div>

        <div className="flex min-h-[280px] flex-col items-stretch justify-center rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm md:p-10">
          <div className="convai-embed-root flex w-full justify-center">
            {createElement("elevenlabs-convai", { "agent-id": agentId })}
          </div>
        </div>
      </div>

      <Script src={scriptSrc} strategy="afterInteractive" />
    </section>
  );
}
