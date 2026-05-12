# Product page copy — change log & pointers

## Canonical source (May 2026 onward)

All **live** Hostopia product page copy lives in:

**`content/products/<slug>.json`**

Rendered by `components/products/ProductPageFromJson.tsx`. Markdown and Word files under `New Products/rewrites/` are **exports for humans**, not the deployment source.

Keep editorial docs aligned with production:

```bash
npm run content:sync-product-md
```

(`scripts/sync-product-md-from-json.mjs`)

---

## March 2026 — Online Marketing Center JSON refresh

Summary of the earlier **Online Marketing Center** batch (Brand Monitoring, Directory Listings, Reputation Management, SEO, Marketing 360): sidebar/story copy expansion, feature grids, partner advantage, SEO fields. Details of that batch are preserved in git history; the JSON files on `main` supersede any static summary tables.

**Nav today:** Brand Monitoring (`brand-competitor-monitoring`), Marketing 360 (`ppc-management`). Plan-tier badges called out in the March note may no longer match the live UI — trust the JSON and components.

---

## Later 2026 — layout + copy iterations (examples)

Site work has continued in JSON only for many products, including (non-exhaustive):

- **Marketing 360** — `hero.storyAlternating` zigzag + new block copy (replaces long sidebar prose).
- **Online Fax** — vertical-tabs sidebar: new heading + bullet-style tab bodies + icons.
- **Custom Website Development** — `hero.storyAlternating` + new blocks (replaces accordion sidebar).

For the exact wording and structure, see the corresponding JSON files and regenerated `rewrites/md/*.md` exports.

---

## Portfolio fit (lifecycle grid)

Per-product **highlighted** lifecycle step and intros are defined in each file’s `lifecycleFit` object. Older static tables in this doc may drift; use JSON + sync output as reference.
