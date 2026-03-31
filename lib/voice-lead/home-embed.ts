/** True when the official convai block should render on the home page. */
export function isElevenLabsHomeEmbedEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_ELEVENLABS_CONVAI_AGENT_ID?.trim()) return true;
  if (
    process.env.NEXT_PUBLIC_ELEVENLABS_EMBED_ON_HOME === "true" &&
    process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID?.trim()
  ) {
    return true;
  }
  return false;
}
