/** Shared shape for homepage JSON and `media.vimeoOverview` on products. */
export type VimeoVideoContent = {
  vimeoId: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional poster; falls back to brand gradient if omitted */
  posterSrc?: string;
  posterAlt?: string;
  playLabel?: string;
};
