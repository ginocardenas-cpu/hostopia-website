"use client";

import Script from "next/script";
import { createElement, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildConvaiDynamicVariables, CONVAI_DYNAMIC_KEYS } from "@/lib/voice-lead/convai-dynamic-config";
import { resolvePublicConvaiAgentId, resolvePublicConvaiScriptSrc } from "@/lib/voice-lead/convai-defaults";

const inputClass =
  "w-full rounded-xl border-2 border-gray-200 px-4 py-3 font-raleway text-gray-900 placeholder-gray-400 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

/**
 * ElevenLabs convai widget with required dynamic variables (form → JSON string on `dynamic-variables`).
 * Field keys default to first_name, company_name, email, phone — edit CONVAI_DYNAMIC_KEYS if your agent differs.
 */
export default function ElevenLabsHomeConvaiSection() {
  const agentId = resolvePublicConvaiAgentId();
  const scriptSrc = resolvePublicConvaiScriptSrc();

  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [dynamicVariablesJson, setDynamicVariablesJson] = useState<string | null>(null);
  const [widgetKey, setWidgetKey] = useState(0);

  const pushDynamicVarsToWidget = useCallback(() => {
    const json = buildConvaiDynamicVariables({ firstName, companyName, email, phone });
    setDynamicVariablesJson(json);
    setWidgetKey((k) => k + 1);
  }, [firstName, companyName, email, phone]);

  const onFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      pushDynamicVarsToWidget();
    },
    [pushDynamicVarsToWidget],
  );

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
            Add a few details first so the assistant can personalize the conversation. Then use the voice widget and
            allow microphone access when prompted.
          </p>
          <p className="mt-2 font-raleway text-sm text-gray-500">
            Dynamic variable keys sent to ElevenLabs:{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-charcoal">
              {CONVAI_DYNAMIC_KEYS.firstName}
            </code>
            ,{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-charcoal">
              {CONVAI_DYNAMIC_KEYS.companyName}
            </code>
            ,{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-charcoal">
              {CONVAI_DYNAMIC_KEYS.email}
            </code>
            ,{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-charcoal">
              {CONVAI_DYNAMIC_KEYS.phone}
            </code>{" "}
            (optional fields omitted if left blank). Change these in{" "}
            <code className="font-mono text-xs">lib/voice-lead/convai-dynamic-config.ts</code> to match your agent.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm md:p-10">
          <form onSubmit={onFormSubmit} className="mb-8 max-w-xl space-y-4">
            <div>
              <label htmlFor="convai-first-name-input" className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal">
                First name <span className="text-red-600">*</span>
              </label>
              <input
                id="convai-first-name-input"
                name="convai_first_name"
                type="text"
                required
                autoComplete="given-name"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                className={cn(inputClass)}
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="convai-company-name-input" className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal">
                Company name <span className="text-red-600">*</span>
              </label>
              <input
                id="convai-company-name-input"
                name="convai_company_name"
                type="text"
                required
                autoComplete="organization"
                value={companyName}
                onChange={(ev) => setCompanyName(ev.target.value)}
                className={cn(inputClass)}
                placeholder="Acme Telco"
              />
            </div>
            <div>
              <label htmlFor="convai-email-input" className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal">
                Work email
              </label>
              <input
                id="convai-email-input"
                name="convai_email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className={cn(inputClass)}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="convai-phone-input" className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal">
                Phone
              </label>
              <input
                id="convai-phone-input"
                name="convai_phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
                className={cn(inputClass)}
                placeholder="+1 …"
              />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit">Save details &amp; load assistant</Button>
              {dynamicVariablesJson != null ? (
                <Button type="button" variant="outline" onClick={pushDynamicVarsToWidget}>
                  Apply updates to assistant
                </Button>
              ) : null}
            </div>
          </form>

          <div className="flex min-h-[280px] flex-col items-stretch justify-center border-t border-gray-100 pt-8">
            {dynamicVariablesJson == null ? (
              <p className="text-center font-raleway text-sm text-gray-500">
                Complete the form above and click <strong className="text-charcoal">Save details &amp; load assistant</strong>{" "}
                to show the voice widget.
              </p>
            ) : (
              <div key={widgetKey} className="convai-embed-root flex w-full justify-center">
                {createElement("elevenlabs-convai", {
                  "agent-id": agentId,
                  "dynamic-variables": dynamicVariablesJson,
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <Script src={scriptSrc} strategy="afterInteractive" />
    </section>
  );
}
