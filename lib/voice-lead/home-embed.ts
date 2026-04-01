import { resolvePublicConvaiAgentId } from "./convai-defaults";

/** True when the official convai block should render on the home page. */
export function isElevenLabsHomeEmbedEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_ELEVENLABS_HIDE_HOME_CONVAI === "true") return false;
  return Boolean(resolvePublicConvaiAgentId());
}
