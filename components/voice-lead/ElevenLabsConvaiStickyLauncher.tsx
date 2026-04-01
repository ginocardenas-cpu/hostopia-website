"use client";

import Script from "next/script";
import { createElement, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buildConvaiDynamicVariables } from "@/lib/voice-lead/convai-dynamic-config";
import { resolvePublicConvaiAgentId, resolvePublicConvaiScriptSrc } from "@/lib/voice-lead/convai-defaults";
import { isElevenLabsConvaiLauncherEnabled } from "@/lib/voice-lead/home-embed";

const inputClass =
  "w-full rounded-xl border-2 border-gray-200 px-4 py-3 font-raleway text-gray-900 placeholder-gray-400 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

/**
 * Fixed bottom control opens a modal: collect details → set `dynamic-variables` → show ElevenLabs convai widget.
 */
export default function ElevenLabsConvaiStickyLauncher() {
  const enabled = isElevenLabsConvaiLauncherEnabled();
  const agentId = resolvePublicConvaiAgentId();
  const scriptSrc = resolvePublicConvaiScriptSrc();

  const [sheetOpen, setSheetOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dynamicVariablesJson, setDynamicVariablesJson] = useState<string | null>(null);
  const [widgetKey, setWidgetKey] = useState(0);

  const openLauncher = useCallback(() => setSheetOpen(true), []);

  const onFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const json = buildConvaiDynamicVariables({ firstName, companyName, email, phone });
      setDynamicVariablesJson(json);
      setWidgetKey((k) => k + 1);
    },
    [firstName, companyName, email, phone],
  );

  if (!enabled) {
    return null;
  }

  return (
    <>
      {!sheetOpen ? (
        <button
          type="button"
          onClick={openLauncher}
          className="fixed bottom-6 right-6 z-[95] min-h-12 rounded-full bg-teal px-6 py-3 font-raleway text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 md:bottom-8 md:right-8"
          aria-haspopup="dialog"
          aria-expanded={sheetOpen}
        >
          Submit
        </button>
      ) : null}

      <Dialog
        open={sheetOpen}
        onOpenChange={(next) => {
          setSheetOpen(next);
          if (!next) {
            setDynamicVariablesJson(null);
          }
        }}
      >
        <DialogContent className="max-h-[min(90vh,720px)] max-w-md gap-0 overflow-y-auto p-5 sm:p-6">
          <DialogHeader className="pb-4 text-left">
            <DialogTitle>Partner assistant</DialogTitle>
            <DialogDescription className="font-raleway text-sm text-gray-500">
              {dynamicVariablesJson == null
                ? "Add your details, then you can start a voice conversation."
                : "Use the controls below to speak with the assistant. Allow microphone access when asked."}
            </DialogDescription>
          </DialogHeader>

          {dynamicVariablesJson == null ? (
            <form onSubmit={onFormSubmit} className="space-y-4 pb-2">
              <div>
                <label
                  htmlFor="convai-sticky-first-name"
                  className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal"
                >
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  id="convai-sticky-first-name"
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
                <label
                  htmlFor="convai-sticky-company"
                  className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal"
                >
                  Company name <span className="text-red-600">*</span>
                </label>
                <input
                  id="convai-sticky-company"
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
                <label
                  htmlFor="convai-sticky-email"
                  className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal"
                >
                  Work email
                </label>
                <input
                  id="convai-sticky-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className={cn(inputClass)}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="convai-sticky-phone"
                  className="mb-1.5 block font-montserrat text-sm font-semibold text-charcoal"
                >
                  Phone
                </label>
                <input
                  id="convai-sticky-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                  className={cn(inputClass)}
                  placeholder="+1 …"
                />
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full sm:w-auto">
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <div
              key={widgetKey}
              className="convai-embed-root flex min-h-[260px] w-full justify-center border-t border-gray-100 pt-6"
            >
              {createElement("elevenlabs-convai", {
                "agent-id": agentId,
                "dynamic-variables": dynamicVariablesJson,
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Script src={scriptSrc} strategy="afterInteractive" />
    </>
  );
}
