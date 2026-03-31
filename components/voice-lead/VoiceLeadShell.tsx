"use client";

import { useState } from "react";
import {
  ConversationProvider,
  useConversationClientTool,
  useConversationControls,
  useConversationInput,
  useConversationStatus,
} from "@elevenlabs/react";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { isElevenLabsHomeEmbedEnabled } from "@/lib/voice-lead/home-embed";
import { HOSTOPIA_OPEN_BOOKING_TOOL, HOSTOPIA_SUBMIT_LEAD_TOOL } from "@/lib/voice-lead/tools";

function VoiceLeadPanel({ setOpen }: { setOpen: (open: boolean) => void }) {
  const { startSession, endSession, getId } = useConversationControls();
  const { status, message } = useConversationStatus();
  const { isMuted, setMuted } = useConversationInput();
  const [localError, setLocalError] = useState<string | null>(null);

  useConversationClientTool(HOSTOPIA_SUBMIT_LEAD_TOOL, async (p: Record<string, unknown>) => {
    const body = {
      source: "elevenlabs_voice" as const,
      fullName: String(p.fullName ?? "").trim(),
      email: String(p.email ?? "").trim(),
      company: String(p.company ?? "").trim(),
      phone: p.phone != null ? String(p.phone).trim() : undefined,
      role: p.role != null ? String(p.role).trim() : undefined,
      estimatedSMBs: p.estimatedSMBs != null ? String(p.estimatedSMBs).trim() : undefined,
      timeline: p.timeline != null ? String(p.timeline).trim() : undefined,
      qualified: p.qualified === true || p.qualified === "true" || p.qualified === "yes",
      qualificationSummary: p.qualificationSummary != null ? String(p.qualificationSummary).trim() : undefined,
      conversationId: getId() || undefined,
    };

    const res = await fetch("/api/voice-lead/ingest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return `Could not save lead: ${(err as { error?: string }).error ?? res.status}. Please try again or use Contact.`;
    }
    return "Lead captured successfully.";
  });

  useConversationClientTool(HOSTOPIA_OPEN_BOOKING_TOOL, async () => {
    const url = process.env.NEXT_PUBLIC_QUALIFIED_BOOKING_URL?.trim() || "/contact";
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    return `Opened the scheduling page in a new browser tab.`;
  });

  const handleStart = () => {
    setLocalError(null);
    startSession({
      onError: (msg) => setLocalError(typeof msg === "string" ? msg : "Connection error"),
    });
  };

  const handleClose = () => {
    endSession();
    setOpen(false);
  };

  const statusLabel =
    status === "disconnected"
      ? "Ready when you are"
      : status === "connecting"
        ? "Connecting…"
        : status === "connected"
          ? "Live — speak naturally"
          : "Something went wrong";

  return (
    <DialogContent className="max-w-md gap-6">
      <DialogHeader>
        <DialogTitle>Partner voice assistant</DialogTitle>
        <DialogDescription>
          Ask about Hostopia for telcos and resellers. We will collect a few details, confirm fit, and if it makes
          sense, open a calendar to book time with our team. Microphone access is required.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        <p className="font-raleway text-sm text-gray-500">
          Status: <span className="font-semibold text-charcoal">{statusLabel}</span>
          {message ? ` — ${message}` : null}
        </p>
        {(localError || (status === "error" && message)) ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 font-raleway text-sm text-red-800" role="alert">
            {localError || message}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3">
          {status === "disconnected" || status === "error" ? (
            <Button type="button" onClick={handleStart}>
              Start voice chat
            </Button>
          ) : null}
          {status === "connected" ? (
            <Button type="button" variant="outline" onClick={() => setMuted(!isMuted)}>
              {isMuted ? (
                <>
                  <MicOff className="mr-2 h-4 w-4" aria-hidden />
                  Unmute
                </>
              ) : (
                <>
                  <Mic className="mr-2 h-4 w-4" aria-hidden />
                  Mute
                </>
              )}
            </Button>
          ) : null}
          <Button type="button" variant="outline" onClick={handleClose}>
            <PhoneOff className="mr-2 h-4 w-4" aria-hidden />
            Close
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

function VoiceLeadDialog({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const { endSession } = useConversationControls();

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) endSession();
        setOpen(next);
      }}
    >
      <VoiceLeadPanel setOpen={setOpen} />
    </Dialog>
  );
}

/**
 * Site-wide ElevenLabs voice lead agent. Renders nothing until NEXT_PUBLIC_ELEVENLABS_AGENT_ID is set.
 */
export default function VoiceLeadShell() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID?.trim();
  const [open, setOpen] = useState(false);

  if (!agentId || isElevenLabsHomeEmbedEnabled()) {
    return null;
  }

  return (
    <ConversationProvider agentId={agentId}>
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-lg transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          aria-label="Open partner voice assistant"
        >
          <Mic className="h-6 w-6" aria-hidden />
        </button>
      </div>
      <VoiceLeadDialog open={open} setOpen={setOpen} />
    </ConversationProvider>
  );
}
