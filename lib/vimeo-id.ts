/** Accepts a numeric id or a vimeo.com URL and returns the numeric video id. */
export function normalizeVimeoId(input: string): string | null {
  const s = input.trim();
  if (!s) return null;
  const fromUrl = s.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (fromUrl) return fromUrl[1];
  const digits = s.replace(/\D/g, "");
  return digits.length > 0 ? digits : null;
}
