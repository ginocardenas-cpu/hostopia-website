# Product Page Content Files

## What This Is

Structured content for all Hostopia product pages, rewritten for tighter copy, stronger value props, and SEO optimization. Each JSON file maps directly to a product page component in `components/products/`.

## How to Use These Files

Each JSON file follows the **5-section product page template** outlined in `PRODUCT-PAGE-RECOMMENDATIONS.md`:

```
1. hero        → Hero section with headline, value prop, CTA, sidebar bullets
2. features    → "What you deliver" — 4-6 feature cards with icons
3. partnerAdvantage → "Partner advantage" — 3-4 benefit blocks (use dark bg)
4. lifecycleFit     → Portfolio fit with lifecycle step cards
5. cta         → Final CTA block (dark bg)
```

### JSON Structure

```json
{
  "slug": "product-slug",           // matches route and nav-products.ts
  "label": "Display Name",
  "productName": "Full Product Name",

  "seo": {
    "primaryKeyword": "...",
    "secondaryKeywords": ["..."],
    "metaTitle": "...",             // update in [slug]/page.tsx productMeta
    "metaDescription": "...",
    "urlSlug": "/products/..."
  },

  "hero": { ... },
  "features": { ... },
  "partnerAdvantage": { ... },
  "lifecycleFit": { ... },
  "cta": { ... }
}
```

### Mapping to Components

**Option A — Direct reference**: Read the JSON and copy text into the existing component pattern (like `WebsiteBuilderPage.tsx`).

**Option B — Data-driven**: Import the JSON and render dynamically:
```tsx
import content from '@/content/products/website-builder.json';
// Use content.hero.headline, content.features.cards, etc.
```

### SEO Metadata

Update `productMeta` in `app/products/[slug]/page.tsx` using the `seo` object from each content file.

### Design System Reference

- Fonts: Montserrat (headings), Raleway (body)
- Teal accent: `#2CADB2`
- Yellow CTA: `#F8CF41`
- Dark block: `#24282B`
- Gray bg: `#f7f6f2`
- Icons: Lucide React (icon names in feature cards map to lucide-react exports)

## Files

All 14 product pages are complete. Each file maps to a slug in `lib/nav-products.ts`.

### Build a Brand
| File | Product | Slug | Status |
|------|---------|------|--------|
| `domains.json` | Domains | `domains` | Rewrite of existing page |
| `logo-design.json` | Professional Logo Design | `logo-design` | Rewrite of existing page |
| `business-email.json` | Business Email | `business-email` | Rewrite of existing page |

### Get Online
| File | Product | Slug | Status |
|------|---------|------|--------|
| `website-builder.json` | Online Presence Builder | `website-builder` | Rewrite of existing page |
| `website-design.json` | DIFM Website Design | `website-design` | Rewrite of existing page |
| `custom-website-development.json` | Custom Website Design | `custom-website-development` | NEW — needs component |
| `hosting.json` | Website Hosting | `hosting` | Rewrite of existing page |
| `ssl.json` | SSL Certificates | `ssl` | Rewrite of existing page |

### Get Found
| File | Product | Slug | Status |
|------|---------|------|--------|
| `seo.json` | Search Engine Assist | `seo` | NEW — needs component + nav entry |
| `directories.json` | OneList Plus | `directories` | Rewrite of existing page |
| `reputation-management.json` | Reviews Promoter | `reputation-management` | Rewrite of existing page |

### Grow their Business
| File | Product | Slug | Status |
|------|---------|------|--------|
| `ecommerce.json` | Online Store | `ecommerce` | Rewrite of existing page |
| `email-marketing.json` | Email Marketing | `email-marketing` | NEW — needs component + nav entry |
| `digital-fax.json` | Online Fax | `digital-fax` | Rewrite of existing page |

## Notes

- **New components needed**: Email Marketing, SEO (Search Engine Assist), and Custom Website Design exist in `nav-products.ts` but don't have dedicated page components yet
- Content is written for service provider partners (Hostopia's B2B audience), not end SMBs
- All copy follows Hostopia brand voice: professional, educational, partner-empowering, specific
- Each JSON includes an `seo` object — use it to update `productMeta` in `app/products/[slug]/page.tsx`
