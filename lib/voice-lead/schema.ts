import { z } from "zod";

const boolish = z.union([
  z.boolean(),
  z.string().transform((s) => ["true", "yes", "1", "qualified"].includes(s.trim().toLowerCase())),
]);

/** Payload posted from the browser when the agent invokes the `hostopia_submit_lead` client tool. */
export const voiceLeadIngestSchema = z.object({
  source: z.literal("elevenlabs_voice").optional(),
  fullName: z.string().min(1).max(200),
  email: z.string().email().max(320),
  company: z.string().min(1).max(200),
  phone: z.string().max(40).optional(),
  role: z.string().max(120).optional(),
  estimatedSMBs: z.string().max(80).optional(),
  timeline: z.string().max(120).optional(),
  qualified: boolish,
  qualificationSummary: z.string().max(4000).optional(),
  conversationId: z.string().max(128).optional(),
});

export type VoiceLeadIngest = z.infer<typeof voiceLeadIngestSchema>;
