/**
 * JSON keys sent as `dynamic-variables` on `<elevenlabs-convai>`.
 * Must match the dynamic variable names configured on your ElevenLabs agent exactly.
 */
export const CONVAI_DYNAMIC_KEYS = {
  firstName: "first_name",
  companyName: "company_name",
  email: "email",
  phone: "phone",
} as const;

export function buildConvaiDynamicVariables(fields: {
  firstName: string;
  companyName: string;
  email: string;
  phone: string;
}): string {
  const out: Record<string, string> = {};
  const t = (s: string) => s.trim();
  if (t(fields.firstName)) out[CONVAI_DYNAMIC_KEYS.firstName] = t(fields.firstName);
  if (t(fields.companyName)) out[CONVAI_DYNAMIC_KEYS.companyName] = t(fields.companyName);
  if (t(fields.email)) out[CONVAI_DYNAMIC_KEYS.email] = t(fields.email);
  if (t(fields.phone)) out[CONVAI_DYNAMIC_KEYS.phone] = t(fields.phone);
  return JSON.stringify(out);
}
