"use client";

import Script from "next/script";
import { createElement, useCallback, useState } from "react";
import { ArrowRight, MessagesSquare } from "lucide-react";
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
 * Form → ElevenLabs convai with variant expanded (full UI, not compact bubble first).
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

  const isWidgetStep = dynamicVariablesJson != null;

  return (
    <>
      {!sheetOpen ? (
        <button
          type="button"
          onClick={openLauncher}
          className="fixed bottom-6 right-6 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-lg transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 md:bottom-8 md:right-8"
          aria-haspopup="dialog"
          aria-expanded={sheetOpen}
          aria-label="Open Hostopia AI Assistant"
        >
          <MessagesSquare className="h-7 w-7" strokeWidth={2} aria-hidden />
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
        <DialogContent
          className={cn(
            "!flex w-[calc(100%-1.5rem)] flex-col gap-0 overflow-y-auto p-5 sm:p-6",
            isWidgetStep
              ? "max-h-[min(94vh,920px)] min-h-[min(88vh,800px)] max-w-4xl sm:max-w-4xl"
              : "max-h-[min(90vh,720px)] max-w-md",
          )}
        >
          <DialogHeader className={cn("shrink-0 pb-4 text-left")}>
            <DialogTitle>Hostopia AI Assistant</DialogTitle>
            <DialogDescription className="font-raleway text-sm text-gray-500">
              {isWidgetStep ? (
                <>Allow microphone access when asked. Use voice or chat below.</>
              ) : (
                <>Provide us your contact details to start a voice or chat conversation.</>
              )}
            </DialogDescription>
          </DialogHeader>

          {!isWidgetStep ? (
            <form onSubmit={onFormSubmit} className="flex flex-col gap-4 pb-2">
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
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  size="icon"
                  className="h-12 w-12 shrink-0 rounded-full"
                  aria-label="Continue to assistant"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex min-h-0 w-full flex-1 flex-col border-t border-gray-100">
              <div
                key={widgetKey}
                className="hostopia-convai-slot box-border min-h-[min(600px,62vh)] w-full flex-1 py-4 sm:min-h-[min(640px,65vh)] sm:py-6"
                style={{ minWidth: 0 }}
              >
                {createElement("elevenlabs-convai", {
                  "agent-id": agentId,
                  "dynamic-variables": dynamicVariablesJson,
                  variant: "expanded",
                })}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Script src={scriptSrc} strategy="afterInteractive" />
    </>
  );
}
