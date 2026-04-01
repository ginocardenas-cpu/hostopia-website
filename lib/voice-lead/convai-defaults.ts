/** Fallback when env vars are unset (override per environment in Vercel if needed). */
export const DEFAULT_CONVAI_AGENT_ID = "agent_2401kn27gva3fxva74wgvdsdt4mp";

export const DEFAULT_CONVAI_SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";

export function resolvePublicConvaiAgentId(): string {
  return (
    process.env.NEXT_PUBLIC_ELEVENLABS_CONVAI_AGENT_ID?.trim() ||
    process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID?.trim() ||
    DEFAULT_CONVAI_AGENT_ID
  );
}

export function resolvePublicConvaiScriptSrc(): string {
  return (
    process.env.NEXT_PUBLIC_ELEVENLABS_CONVAI_SCRIPT_URL?.trim() || DEFAULT_CONVAI_SCRIPT_SRC
  );
}
