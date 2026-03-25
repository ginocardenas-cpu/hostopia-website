/** Curated Unsplash sets for customer pages — varied per slug + section salt */

const POOL: { src: string; alt: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=675&fit=crop&q=80",
    alt: "Team collaborating in a modern office",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=675&fit=crop&q=80",
    alt: "Professionals working together at a table",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=675&fit=crop&q=80",
    alt: "Business team meeting with laptops",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=675&fit=crop&q=80",
    alt: "Office workspace with analytics on screen",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=675&fit=crop&q=80",
    alt: "Laptop with business charts",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=675&fit=crop&q=80",
    alt: "Team presentation in bright office",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=675&fit=crop&q=80",
    alt: "Minimal open office environment",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=675&fit=crop&q=80",
    alt: "Handshake and business discussion",
  },
];

function hashSlug(slug: string, salt: number): number {
  let h = salt;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Returns 4 images for a carousel; `salt` differentiates sections on the same page */
export function getCustomerCarouselImages(slug: string, salt: number): { src: string; alt: string }[] {
  const h = hashSlug(slug, salt);
  const out: { src: string; alt: string }[] = [];
  for (let i = 0; i < 4; i++) {
    const idx = (h + i * 7) % POOL.length;
    out.push(POOL[idx]);
  }
  return out;
}
