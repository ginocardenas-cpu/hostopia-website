import { voiceLeadIngestSchema } from "@/lib/voice-lead/schema";

export const runtime = "nodejs";

/**
 * Persists / forwards voice-qualified leads. Called from the site when the ElevenLabs agent
 * invokes the `hostopia_submit_lead` client tool (browser POST).
 *
 * Optional: set VOICE_LEAD_FORWARD_URL to POST the same JSON to Zapier, Slack incoming webhook, etc.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = voiceLeadIngestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Validation failed", details: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const payload = { ...parsed.data, source: "elevenlabs_voice" as const, receivedAt: new Date().toISOString() };

  const forwardUrl = process.env.VOICE_LEAD_FORWARD_URL;
  if (forwardUrl) {
    const secret = process.env.VOICE_LEAD_FORWARD_SECRET;
    try {
      const headers: HeadersInit = { "Content-Type": "application/json" };
      if (secret) headers.Authorization = `Bearer ${secret}`;
      const fr = await fetch(forwardUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      if (!fr.ok) {
        console.error("[voice-lead] forward failed", fr.status, await fr.text());
      }
    } catch (e) {
      console.error("[voice-lead] forward error", e);
    }
  } else {
    console.info("[voice-lead] ingest (no VOICE_LEAD_FORWARD_URL)", {
      email: payload.email,
      company: payload.company,
      qualified: payload.qualified,
    });
  }

  return Response.json({ ok: true });
}
