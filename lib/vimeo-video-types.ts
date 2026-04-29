/** Shared shape for homepage JSON and `media.vimeoOverview` on products. */
export type VimeoVideoContent = {
  /** Vimeo numeric id (used when `mp4Src` is not set on the homepage). */
  vimeoId?: string;
  /** Direct MP4 URL for native `<video>` player (homepage). When set, home uses custom controls instead of Vimeo dialog. */
  mp4Src?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional poster; falls back to brand gradient if omitted */
  posterSrc?: string;
  posterAlt?: string;
  playLabel?: string;
};
