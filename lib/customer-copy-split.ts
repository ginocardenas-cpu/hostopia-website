/** Split prose into a visible lead (complete sentences) and remainder for expanders — avoids duplicate copy in <details>. */

export function splitSentences(text: string): string[] {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t) return [];
  const parts = t.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return parts ? parts.map((s) => s.trim()).filter(Boolean) : [t];
}

export function splitLeadRest(text: string, leadSentenceCount: number): { lead: string; rest: string } {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return { lead: "", rest: "" };
  const n = Math.max(1, Math.min(leadSentenceCount, sentences.length));
  const lead = sentences.slice(0, n).join(" ").trim();
  const rest = sentences.slice(n).join(" ").trim();
  return { lead, rest };
}
