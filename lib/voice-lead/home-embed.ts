import { resolvePublicConvaiAgentId } from "./convai-defaults";

/** True when the sticky convai launcher + modal should be available site-wide. */
export function isElevenLabsConvaiLauncherEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_ELEVENLABS_HIDE_HOME_CONVAI === "true") return false;
  return Boolean(resolvePublicConvaiAgentId());
}
