# Product page content — canonical source

## Single source of truth

**Authoritative copy for every live Hostopia product page is in:**

`content/products/<slug>.json`

Pages are rendered data-driven from that JSON via `components/products/ProductPageFromJson.tsx` and `app/products/[slug]/page.tsx`. When you change copy for production, **edit the JSON** (or the sync pipeline that feeds it), not orphaned Word/Google drafts.

### Markdown exports (reference only)

The folder `content/products/New Products/rewrites/md/` contains **generated** markdown mirrors (numbered `01`–`18`) for reviews, handoffs, and AI context. They are **not** the source of truth.

Refresh them after JSON edits so stakeholders stay aligned:

```bash
npm run content:sync-product-md
```

Implementation: `scripts/sync-product-md-from-json.mjs` (layout labels mirror `VERTICAL_TABS_LAYOUT_SLUGS` and related logic in `ProductPageFromJson.tsx`).

**Legacy file:** `04-marketing-essentials.md` — there is no live `marketing-essentials` product or JSON; the stub explains the gap.

---

## Page template (JSON → UI)

Roughly the same six areas on every product page:

1. **Hero** — `hero.eyebrow`, `headline`, optional `subheadline` / `badge`, `description`, `cta`, optional `media.heroImage`
2. **Mid-page story** — **one of:**
   - **`hero.storyAlternating`** — Zigzag rows (`AlternatingStorySection`): section heading + blocks with title, Lucide `icon`, `bullets[]`, `image`
   - **`hero.sidebar`** — Then either:
     - **`VerticalTabs`** (e.g. Logo Design, SSL, Online Fax, SEO, Website Builder, Email Marketing, Social Media Management) — tab rail + gallery + bullets under image
     - **`ProductHeroAccordion`** — Classic accordion below hero
     - **`InteractiveImageAccordion`** — Business Email only
3. **`features`** — “What you deliver” grid (`eyebrow`, `heading`, `intro`, `cards[]` with Lucide `icon`)
4. **`partnerAdvantage`** — Dark “partner advantage” block
5. **`lifecycleFit`** — Portfolio fit steps
6. **`cta`** — Final CTA

Optional extras in JSON: `media.beforeAfter`, `media.vimeoOverview`, `media.logoShowcase`, etc.

---

## JSON shape (abbreviated)

```json
{
  "slug": "product-slug",
  "label": "Nav label",
  "productName": "Full marketing name",

  "seo": {
    "primaryKeyword": "...",
    "secondaryKeywords": ["..."],
    "metaTitle": "...",
    "metaDescription": "...",
    "urlSlug": "/products/..."
  },

  "hero": { ... },
  "media": { "heroImage": { "src", "alt", "priority" } },
  "features": { ... },
  "partnerAdvantage": { ... },
  "lifecycleFit": { ... },
  "cta": { ... }
}
```

---

## Live catalog (17 products)

Routes and labels come from `lib/nav-products.ts`.

### Build a Brand

| JSON | Nav label | Slug |
|------|-----------|------|
| `domains.json` | Domains | `domains` |
| `logo-design.json` | Logo Design | `logo-design` |
| `business-email.json` | Business Email | `business-email` |

### Get Online

| JSON | Nav label | Slug |
|------|-----------|------|
| `brand-competitor-monitoring.json` | Brand Monitoring | `brand-competitor-monitoring` |
| `ssl.json` | SSL | `ssl` |
| `hosting.json` | Hosting | `hosting` |
| `website-builder.json` | Website Builder | `website-builder` |
| `website-design.json` | Website Design | `website-design` |

### Get Found

| JSON | Nav label | Slug |
|------|-----------|------|
| `reputation-management.json` | Reputation & Listing Management | `reputation-management` |
| `directories.json` | Directory Listings | `directories` |
| `social-media-management.json` | Social Media Management | `social-media-management` |
| `seo.json` | Search Engine Optimization | `seo` |

### Grow their Business

| JSON | Nav label | Slug |
|------|-----------|------|
| `ecommerce.json` | Ecommerce | `ecommerce` |
| `email-marketing.json` | Email Marketing | `email-marketing` |
| `ppc-management.json` | Marketing 360 | `ppc-management` |
| `custom-website-development.json` | Custom Website Development | `custom-website-development` |
| `digital-fax.json` | Online Fax | `digital-fax` |

---

## Design tokens (reference)

- Fonts: Montserrat (headings), Raleway (body)
- Teal accent: `#2CADB2`
- Yellow CTA: `#F8CF41`
- Dark block: `#24282B`
- Cream / gray backgrounds per section in components
- Feature icons: Lucide React (`icon` string must match an export from `lucide-react`)

---

## SEO metadata

Product meta is driven from each JSON `seo` object in the product page route; keep `metaTitle`, `metaDescription`, and keywords in sync with campaigns.
