import fs from "fs";
import path from "path";
import type { VimeoVideoContent } from "@/lib/vimeo-video-types";

const FILE = path.join(process.cwd(), "content", "home-vimeo.json");

export function loadHomeVimeo(): VimeoVideoContent | null {
  if (!fs.existsSync(FILE)) return null;
  try {
    const raw = fs.readFileSync(FILE, "utf8");
    const data = JSON.parse(raw) as VimeoVideoContent & { enabled?: boolean };
    if (data.enabled === false) return null;
    const mp4 = typeof data.mp4Src === "string" && data.mp4Src.trim().length > 0;
    const vimeoId = typeof data.vimeoId === "string" ? data.vimeoId.trim() : "";
    if (!mp4 && !vimeoId) return null;
    return data;
  } catch {
    return null;
  }
}
