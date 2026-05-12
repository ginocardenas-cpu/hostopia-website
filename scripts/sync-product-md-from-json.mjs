/**
 * Regenerates `content/products/New Products/rewrites/md/*.md` from
 * `content/products/*.json` so editorial markdown mirrors the live site.
 *
 * Run: npm run content:sync-product-md
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const productsDir = path.join(repoRoot, "content", "products");
const mdDir = path.join(productsDir, "New Products", "rewrites", "md");

/** Must match `VERTICAL_TABS_LAYOUT_SLUGS` in `components/products/ProductPageFromJson.tsx`. */
const VERTICAL_TABS_LAYOUT_SLUGS = new Set([
  "logo-design",
  "ssl",
  "digital-fax",
  "website-builder",
  "email-marketing",
  "social-media-management",
  "seo",
]);

const BUSINESS_EMAIL_SLUG = "business-email";

/**
 * Order matches existing numbered filenames in `rewrites/md/`.
 * slug = JSON filename without .json; outFile = markdown basename.
 */
const PRODUCT_FILES = [
  { slug: "brand-competitor-monitoring", outFile: "01-brand-monitoring.md" },
  { slug: "reputation-management", outFile: "02-reputation-management.md" },
  { slug: "seo", outFile: "03-seo.md" },
  { slug: "ppc-management", outFile: "05-marketing-360.md" },
  { slug: "social-media-management", outFile: "06-social-media-management.md" },
  { slug: "directories", outFile: "07-directory-listings.md" },
  { slug: "logo-design", outFile: "08-logo-design.md" },
  { slug: "domains", outFile: "09-domains.md" },
  { slug: "business-email", outFile: "10-business-email.md" },
  { slug: "ssl", outFile: "11-ssl.md" },
  { slug: "hosting", outFile: "12-hosting.md" },
  { slug: "website-builder", outFile: "13-website-builder.md" },
  { slug: "website-design", outFile: "14-website-design.md" },
  { slug: "ecommerce", outFile: "15-ecommerce.md" },
  { slug: "custom-website-development", outFile: "16-custom-website-development.md" },
  { slug: "digital-fax", outFile: "17-digital-fax.md" },
  { slug: "email-marketing", outFile: "18-email-marketing.md" },
];

function midPageSectionLabel(slug, hero) {
  if (hero.storyAlternating) {
    return {
      title: "Alternating story (zigzag)",
      blurb:
        "Rendered by `AlternatingStorySection` — copy and image alternate left/right (same pattern as Ecommerce, Website Design, Marketing 360, Custom Website Development, etc., when `hero.storyAlternating` is set).",
    };
  }
  if (!hero.sidebar) {
    return {
      title: "—",
      blurb: "No `hero.sidebar` or `hero.storyAlternating` in JSON for this product.",
    };
  }
  if (slug === BUSINESS_EMAIL_SLUG) {
    return {
      title: "Interactive image accordion",
      blurb:
        "Business Email uses `InteractiveImageAccordion` with `hero.sidebar` items (see `ProductPageFromJson.tsx`).",
    };
  }
  if (VERTICAL_TABS_LAYOUT_SLUGS.has(slug)) {
    return {
      title: "Vertical tabs",
      blurb:
        "Rendered by `VerticalTabs` — left rail tabs, gallery, teal-dot list under the image (`ProductPageFromJson.tsx` + `vertical-tabs.tsx`).",
    };
  }
  return {
    title: "Hero accordion",
    blurb: "Rendered by `ProductHeroAccordion` below the hero (`ProductPageFromJson.tsx`).",
  };
}

function esc(s) {
  if (!s) return "";
  return String(s).replace(/\r\n/g, "\n");
}

function formatStoryAlternating(sa) {
  const lines = [];
  lines.push(`**Section H2:** ${esc(sa.heading)}`, "");
  for (const block of sa.blocks || []) {
    lines.push(`### ${esc(block.title)}`);
    if (block.icon) lines.push(`**Icon (Lucide):** \`${esc(block.icon)}\``);
    if (block.image?.src) {
      lines.push(`**Image:** \`${esc(block.image.src)}\``);
      if (block.image.alt) lines.push(`**Image alt:** ${esc(block.image.alt)}`);
    }
    lines.push("");
    for (const b of block.bullets || []) {
      lines.push(`- ${esc(b)}`);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd();
}

function formatSidebar(sidebar) {
  const lines = [];
  lines.push(`**Section heading:** ${esc(sidebar.heading)}`, "");
  for (const item of sidebar.items || []) {
    lines.push(`### ${esc(item.title)}`);
    if (item.icon) lines.push(`**Icon (Lucide):** \`${esc(item.icon)}\``);
    if (item.image?.src) {
      lines.push(`**Image:** \`${esc(item.image.src)}\``);
      if (item.image.alt) lines.push(`**Image alt:** ${esc(item.image.alt)}`);
    }
    lines.push("");
    const body = esc(item.body);
    if (body.includes("\n")) {
      for (const line of body.split("\n").map((l) => l.trim()).filter(Boolean)) {
        const stripped = line.replace(/^\s*[•·]\s*/, "").replace(/^\s*[-*]\s+/, "");
        lines.push(`- ${stripped}`);
      }
    } else {
      lines.push(body);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd();
}

function formatFeatures(features) {
  const lines = [];
  lines.push(
    `**Eyebrow:** ${esc(features.eyebrow)}`,
    "",
    `**Heading:** ${esc(features.heading)}`,
    "",
    `**Intro:** ${esc(features.intro)}`,
    "",
    "**Feature cards:**",
    "",
  );
  for (const c of features.cards || []) {
    lines.push(`#### ${esc(c.title)}`, `**Icon:** \`${esc(c.icon)}\``, "", esc(c.body), "");
  }
  return lines.join("\n").trimEnd();
}

function formatPartner(pa) {
  const lines = [];
  lines.push(
    `**Eyebrow:** ${esc(pa.eyebrow)}`,
    "",
    `**Heading:** ${esc(pa.heading)}`,
    "",
    `**Intro:** ${esc(pa.intro)}`,
    "",
  );
  for (const it of pa.items || []) {
    lines.push(`### ${esc(it.title)}`, "", esc(it.body), "");
  }
  return lines.join("\n").trimEnd();
}

function formatLifecycle(lf) {
  const lines = [];
  lines.push(
    `**Eyebrow:** ${esc(lf.eyebrow)}`,
    "",
    `**Heading:** ${esc(lf.heading)}`,
    "",
    `**Intro:** ${esc(lf.intro)}`,
    "",
    "**Steps:**",
    "",
  );
  for (const s of lf.steps || []) {
    const hi = s.highlight ? " *(highlight)*" : "";
    lines.push(`- **${esc(s.step)} · ${esc(s.title)}**${hi}`, `  ${esc(s.body)}`);
    if (s.productName) lines.push(`  *Product name:* ${esc(s.productName)}`);
    lines.push("");
  }
  if (lf.positioning) {
    lines.push("**Positioning:**", "", esc(lf.positioning), "");
  }
  return lines.join("\n").trimEnd();
}

function buildMarkdown(data) {
  const { slug, label, productName, seo, hero, features, partnerAdvantage, lifecycleFit, cta, media } = data;
  const layout = midPageSectionLabel(slug, hero);
  const heroMedia = media?.heroImage;

  let section2Body = "";
  if (hero.storyAlternating) {
    section2Body = formatStoryAlternating(hero.storyAlternating);
  } else if (hero.sidebar) {
    section2Body = formatSidebar(hero.sidebar);
  } else {
    section2Body = "_No mid-page story or sidebar content._";
  }

  const secondary = seo.secondaryKeywords?.length
    ? seo.secondaryKeywords.map((k) => `\`${esc(k)}\``).join(", ")
    : "—";

  const lines = [
    `# ${esc(productName)}`,
    "",
    "> **Canonical source:** `" + `content/products/${slug}.json` + "` — this file is generated for reference and handoffs. Edit the JSON (or adjust the site) and run `npm run content:sync-product-md` to refresh these exports.",
    "",
    "| Field | Value |",
    "| --- | --- |",
    `| **Nav label** | ${esc(label)} |`,
    `| **Slug** | \`${esc(slug)}\` |`,
    `| **URL** | \`${esc(seo.urlSlug)}\` |`,
    `| **Meta title** | ${esc(seo.metaTitle)} |`,
    `| **Meta description** | ${esc(seo.metaDescription)} |`,
    `| **Primary keyword** | ${esc(seo.primaryKeyword)} |`,
    `| **Secondary keywords** | ${secondary} |`,
    "",
    "---",
    "",
    "## 1 · Hero",
    "",
    `**Eyebrow:** ${esc(hero.eyebrow)}`,
    "",
    `**H1:** ${esc(hero.headline)}`,
    "",
  ];

  if (hero.subheadline) {
    lines.push(`**Subheadline:** ${esc(hero.subheadline)}`, "");
  }
  if (hero.description) {
    lines.push("**Description:**", "", esc(hero.description), "");
  }
  if (hero.badge) {
    lines.push(`**Badge:** ${esc(hero.badge)}`, "");
  }
  lines.push(
    "**CTAs:**",
    "",
    `- Primary: \`${esc(hero.cta.primary)}\``,
    `- Secondary: \`${esc(hero.cta.secondary)}\``,
    "",
  );

  if (heroMedia?.src) {
    lines.push(
      "### Hero media",
      "",
      `- **src:** \`${esc(heroMedia.src)}\``,
      `- **alt:** ${esc(heroMedia.alt || "")}`,
      "",
    );
  }

  lines.push(
    "---",
    "",
    `## 2 · ${layout.title}`,
    "",
    layout.blurb,
    "",
    section2Body,
    "",
    "---",
    "",
    "## 3 · What you deliver (`features`)",
    "",
    formatFeatures(features),
    "",
    "---",
    "",
    "## 4 · Partner advantage (`partnerAdvantage`)",
    "",
    formatPartner(partnerAdvantage),
    "",
    "---",
    "",
    "## 5 · Portfolio fit (`lifecycleFit`)",
    "",
    formatLifecycle(lifecycleFit),
    "",
    "---",
    "",
    "## 6 · Final CTA (`cta`)",
    "",
    `**Headline:** ${esc(cta.headline)}`,
    "",
    esc(cta.body),
    "",
    `**Button:** \`${esc(cta.buttonText)}\``,
    "",
    "---",
    "",
    `_Generated from \`content/products/${slug}.json\` — run \`npm run content:sync-product-md\`._`,
    "",
  );

  return lines.join("\n");
}

function writeLegacyMarketingEssentials() {
  const body = `# Marketing Essentials (legacy)

**Status:** Not in the current live product catalog. There is no \`content/products/marketing-essentials.json\` and no route under \`lib/nav-products.ts\`.

This numbered slot (**04**) is kept only so older v4 batches and filenames stay aligned. **Do not** treat this as shipped site copy.

**Canonical copy** for all live Hostopia product pages is \`content/products/*.json\` (rendered by \`ProductPageFromJson.tsx\`).

---

_Generated by \`scripts/sync-product-md-from-json.mjs\`._`;

  fs.writeFileSync(path.join(mdDir, "04-marketing-essentials.md"), body, "utf8");
  console.log("Wrote 04-marketing-essentials.md (legacy stub)");
}

function main() {
  if (!fs.existsSync(mdDir)) {
    console.error("Missing md dir:", mdDir);
    process.exit(1);
  }

  for (const { slug, outFile } of PRODUCT_FILES) {
    const jsonPath = path.join(productsDir, `${slug}.json`);
    if (!fs.existsSync(jsonPath)) {
      console.error("Missing JSON:", jsonPath);
      process.exit(1);
    }
    const raw = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(raw);
    const md = buildMarkdown(data);
    const outPath = path.join(mdDir, outFile);
    fs.writeFileSync(outPath, md, "utf8");
    console.log("Wrote", outFile);
  }

  writeLegacyMarketingEssentials();
  console.log("Done.");
}

main();
