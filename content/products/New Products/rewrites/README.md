# Hostopia product rewrites — markdown export

## Canonical source

**Live site copy = `content/products/*.json`.**  
This folder’s **`.md` files are generated** for reviews, briefs, and handoffs. Do not treat them as the editable source unless you first change the JSON and re-run the sync command below.

```bash
# From repo root
npm run content:sync-product-md
```

Generator: `scripts/sync-product-md-from-json.mjs`

---

## File map

| # | Markdown | JSON slug | Notes |
|---|----------|-----------|--------|
| 01 | `md/01-brand-monitoring.md` | `brand-competitor-monitoring` | |
| 02 | `md/02-reputation-management.md` | `reputation-management` | |
| 03 | `md/03-seo.md` | `seo` | |
| 04 | `md/04-marketing-essentials.md` | — | **Legacy stub** — no live product |
| 05 | `md/05-marketing-360.md` | `ppc-management` | Nav: Marketing 360 |
| 06 | `md/06-social-media-management.md` | `social-media-management` | |
| 07 | `md/07-directory-listings.md` | `directories` | |
| 08 | `md/08-logo-design.md` | `logo-design` | |
| 09 | `md/09-domains.md` | `domains` | |
| 10 | `md/10-business-email.md` | `business-email` | |
| 11 | `md/11-ssl.md` | `ssl` | |
| 12 | `md/12-hosting.md` | `hosting` | |
| 13 | `md/13-website-builder.md` | `website-builder` | |
| 14 | `md/14-website-design.md` | `website-design` | |
| 15 | `md/15-ecommerce.md` | `ecommerce` | |
| 16 | `md/16-custom-website-development.md` | `custom-website-development` | |
| 17 | `md/17-digital-fax.md` | `digital-fax` | Nav: Online Fax |
| 18 | `md/18-email-marketing.md` | `email-marketing` | |

**`docx/`** — Word versions, if present, are for stakeholder review only; they are not wired to the site.

---

## Mid-page layout (generated section 2)

The sync script labels each product’s mid-page block to match `ProductPageFromJson.tsx`:

- **Alternating story (zigzag)** — `hero.storyAlternating` → `AlternatingStorySection`
- **Vertical tabs** — `hero.sidebar` + slug in vertical-tabs set
- **Hero accordion** — `hero.sidebar` + default accordion layout
- **Interactive image accordion** — `business-email` only

---

## Portfolio fit (high level)

| Portfolio step | Products (nav names) |
|----------------|----------------------|
| **Build a Brand** | Domains, Logo Design, Business Email |
| **Get Online** | Brand Monitoring, SSL, Hosting, Website Builder, Website Design |
| **Get Found** | Reputation & Listing Management, Directory Listings, Social Media Management, Search Engine Optimization |
| **Grow their Business** | Ecommerce, Email Marketing, Marketing 360, Custom Website Development, Online Fax |

Exact step highlights and intros live in each JSON `lifecycleFit` object.
