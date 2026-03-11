# Product Page Design & Content Recommendations

## Summary

The home page works well: strong hero with imagery, clear hierarchy, and visual variety. The product pages feel text-heavy and repetitive. Here’s how to improve them.

---

## 1. Add Visual Variety with Alternating Blocks & Shading

**Current:** Most sections use the same white/beige background, so the page feels flat.

**Recommendation:**
- Alternate section backgrounds: `#f7f6f2` (warm gray) → white → `#f7f6f2` → white
- Add a charcoal block (`#24282B`) for one key section (e.g. “Why it matters”) with white text
- Use subtle borders or soft shadows (`shadow-sm`, `border-gray-100`) to separate sections
- Add more padding between sections (e.g. `py-16` or `py-20`) for clearer rhythm

---

## 2. Use Images to Break Up Copy

**Current:** Product pages have almost no imagery. You already have:
- `directories-hero.png`
- `hosting-hero.png`
- `reputation-management-hero.png`

**Recommendation:**
- Add a product hero image to each product page (right side of hero, like the home page)
- Use product-specific images where they exist; use a generic “partner/SMB” image for others
- Add small illustrations or icons in feature blocks (you already use Lucide icons; consider larger, more prominent icon treatments)
- Use a “split layout” pattern: image left, copy right (or vice versa) for 1–2 sections per page

---

## 3. Cut Copy — Be More Concise

**Current:** Long paragraphs and bullet lists. Example from Domains hero:
> "Domains are where most businesses start their online journey—and where they decide which provider will power everything that comes next. With Hostopia's white-label Domains platform, you sell and manage domains under your own brand, then seamlessly attach email, websites, and security services that drive long-term revenue and loyalty."

**Recommendation:** Shorten to:
> "Domains are where SMBs start online—and where they choose who powers everything next. Sell and manage domains under your brand, then attach email, websites, and security to drive long-term revenue."

**General rules:**
- Hero: 1–2 short sentences max
- Section intros: 1 sentence
- Bullets: 1 line each; remove filler
- Combine overlapping sections (e.g. “What you offer” + “Key features” → one “What you get” section)

---

## 4. Reduce Number of Sections

**Current:** Domains has 6+ sections: Hero, What you offer, Key features, Lifecycle fit, What’s included, CTA.

**Recommendation:** Aim for 4–5 sections:
1. **Hero** — Headline, 1–2 sentence value prop, CTA, optional image
2. **What you get** — 4 feature cards (icons + short copy)
3. **Why it matters** — 3–4 bullets in a shaded block
4. **Portfolio fit** — Keep the lifecycle step cards (they’re clear)
5. **CTA** — Single dark block with headline + CTA

Merge “What you offer,” “Key features,” and “What’s included” into one “What you get” section with cards.

---

## 5. Stronger Visual Hierarchy

**Recommendation:**
- Use larger section headings (e.g. `text-2xl` or `text-3xl`) with more spacing
- Add a thin teal accent line above section titles (you already do this; use it consistently)
- Limit body copy to ~60–70 characters per line (`max-w-prose` or `max-w-2xl`)
- Use bold for the first few words of key bullets instead of full sentences in bold

---

## 6. Reuse Home Page Patterns

**Current:** Home has imagery, stats, and varied layouts. Product pages don’t.

**Recommendation:**
- Add a small “stats” or “proof” strip on product pages (e.g. “500+ partners,” “34 countries”)
- Use the same card style as the home page (rounded corners, light shadow, hover state)
- Add a “Related products” strip at the bottom (e.g. “Also consider: Business Email, Website Builder”)

---

## 7. Quick Wins (Low Effort, High Impact)

| Change | Impact |
|--------|--------|
| Alternate section backgrounds (gray/white) | Breaks up the page |
| Add hero images to product pages | More visual, less text-first |
| Shorten hero copy to 1–2 sentences | Faster scan, clearer message |
| Add `py-16` between sections | Clearer section separation |
| Use existing product images (hosting, directories, reputation) | Immediate visual upgrade |

---

## 8. Suggested Page Structure (Template)

```
1. Hero (with image)
   - Eyebrow
   - Headline (short, benefit-focused)
   - 1–2 sentence value prop
   - CTA + badge
   - Optional: “Why it matters” 3-bullet sidebar

2. What you get (4 cards, 2x2 grid)
   - Icon + title + 1 line of copy per card

3. Key benefits (shaded block, charcoal or light gray)
   - 3–4 bullets, 1 line each

4. Portfolio fit (lifecycle steps)
   - Keep current step cards; consider reducing to 3 steps

5. CTA block
   - Headline + 1 sentence + button
```

---

## Next Steps

1. **Pick one product page** (e.g. Domains or Business Email) as a pilot.
2. **Apply the template** — fewer sections, shorter copy, alternating backgrounds.
3. **Add a hero image** — use an existing asset or a placeholder.
4. **Review** — if it feels right, roll the pattern out to other product pages.

I can implement this on one product page (e.g. Domains) as a reference for the rest.
