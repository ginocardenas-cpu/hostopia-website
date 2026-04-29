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
    if (!data?.vimeoId || typeof data.vimeoId !== "string") return null;
    return data;
  } catch {
    return null;
  }
}
