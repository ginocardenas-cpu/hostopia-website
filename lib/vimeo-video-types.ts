/** Shared shape for homepage JSON and `media.vimeoOverview` on products. */
export type VimeoVideoContent = {
  vimeoId: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional poster; falls back to brand gradient if omitted */
  /** Ignored for display — `VimeoVideoSection` uses the shared Hostopia brand poster; kept for authoring / future use. */
  posterSrc?: string;
  posterAlt?: string;
  playLabel?: string;
};
