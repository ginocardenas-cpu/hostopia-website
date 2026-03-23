# Programs Pages — Implementation Guide

## Overview

Six new pages to build: one Programs hub (`/programs`) and five individual program detail pages. Content is ready in `content/programs/` as structured JSON, matching the pattern established by product pages.

## Content Files

```
content/programs/
├── programs-hub.json              # /programs index page
├── channel-as-a-service.json      # /programs/channel-as-a-service
├── partner-marketing.json         # /programs/partner-marketing
├── project-management.json        # /programs/project-management
├── service-management.json        # /programs/service-management
└── support.json                   # /programs/support
```

Each JSON file includes all copy, SEO metadata, Lucide icon names, and section structure. Import directly:

```tsx
import content from '@/content/programs/channel-as-a-service.json';
```

---

## Step-by-Step Implementation

### 1. Create the Programs Hub Page

**File**: `app/programs/page.tsx` (NEW — does not exist yet)

This is the index page for `/programs`. Renders a hero and five program cards linking to detail pages.

**Data source**: `content/programs/programs-hub.json`

**Sections**:
- Hero (eyebrow + headline + subheadline + 2 CTAs) — same pattern as homepage hero but simpler
- Intro paragraph
- Program cards grid (5 cards, each with Lucide icon, title, description, and link)

**Layout suggestion**:
- Hero: full-width, cream background (`#f7f6f2`), Montserrat heading
- Cards: 2-3 column grid, white cards with `border border-gray-100 shadow-sm rounded-xl p-8`, hover state with `shadow-md` transition
- Each card links to `href` in the JSON

**SEO**: Add metadata using the `seo` object:
```tsx
export const metadata: Metadata = {
  title: "Go-to-Market Programs for Service Providers | Hostopia",
  description: "Launch faster, sell smarter, and retain more...",
  keywords: ["go-to-market programs", "partner enablement", ...],
};
```

### 2. Update the Programs Detail Pages

**File**: `app/programs/[slug]/page.tsx` (EXISTS — currently placeholder)

Replace the placeholder with a routing system that renders the right component per slug, mirroring how `app/products/[slug]/page.tsx` works.

**Option A — Separate component per program** (recommended, matches product pattern):

Create `components/programs/` with:
```
components/programs/
├── ChannelAsAServicePage.tsx
├── PartnerMarketingPage.tsx
├── ProjectManagementPage.tsx
├── ServiceManagementPage.tsx
└── SupportPage.tsx
```

Update `app/programs/[slug]/page.tsx`:
```tsx
import ChannelAsAServicePage from '@/components/programs/ChannelAsAServicePage';
import PartnerMarketingPage from '@/components/programs/PartnerMarketingPage';
// ...etc

const programComponents: Record<string, React.ComponentType> = {
  'channel-as-a-service': ChannelAsAServicePage,
  'partner-marketing': PartnerMarketingPage,
  'project-management': ProjectManagementPage,
  'service-management': ServiceManagementPage,
  'support': SupportPage,
};

export default function ProgramsPage({ params }: Props) {
  const Component = programComponents[params.slug];
  if (!Component) return notFound();
  return <Component />;
}
```

**Option B — Single data-driven component** (less code, less layout flexibility):

Create one `ProgramDetailPage.tsx` that reads JSON and renders sections dynamically. Simpler but harder to customize layout per page (Support has unique sections like tiered support and stats).

**Recommendation**: Option A gives the flexibility to make each page feel distinct, which matters for these differentiator pages.

### 3. Add SEO Metadata to the Route

In `app/programs/[slug]/page.tsx`, add:

```tsx
import channelContent from '@/content/programs/channel-as-a-service.json';
import marketingContent from '@/content/programs/partner-marketing.json';
// ...etc

const programMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'channel-as-a-service': {
    title: channelContent.seo.metaTitle,
    description: channelContent.seo.metaDescription,
    keywords: [channelContent.seo.primaryKeyword, ...channelContent.seo.secondaryKeywords],
  },
  // ...repeat for each program
};

export function generateMetadata({ params }: Props): Metadata {
  const meta = programMeta[params.slug];
  return meta ?? { title: 'Programs | Hostopia' };
}

export function generateStaticParams() {
  return Object.keys(programMeta).map((slug) => ({ slug }));
}
```

### 4. Add Programs Hub Link to Navigation

The navbar already has individual program links. If you want a "Programs Overview" link at the top of the dropdown, add it in `Navbar.tsx` where `programLinks` is defined:

```tsx
const programLinks = [
  { label: "Programs Overview", href: "/programs" },  // ADD THIS
  { label: "Channel as a Service", href: "/programs/channel-as-a-service" },
  // ...existing links
];
```

---

## Section Pattern Reference

Each program page has 3-5 sections. Here's how they map to existing component patterns:

| Section | Pattern | Background | Reference |
|---------|---------|------------|-----------|
| Hero | Eyebrow + H1 + subheadline + 2 CTAs + image | Cream (`#f7f6f2`) | `Hero.tsx` (simplified) |
| How It Works | Eyebrow + H2 + intro + 4 icon cards | White | `features` section in product pages |
| Differentiators | Eyebrow + H2 + 4 cards (2-col) | Dark (`#24282B`) | `partnerAdvantage` in product pages |
| Lifecycle (marketing only) | 3-column layout | Gray (`#f7f6f2`) | `lifecycleFit` in product pages |
| Migration Expertise (PM only) | 5 icon+text items | Gray (`#f7f6f2`) | — |
| Tiered Support (support only) | 3 tier cards | White | — |
| Upserve (support only) | 3 feature cards | Gray (`#f7f6f2`) | — |
| Stats (support only) | 4 large stat callouts | Dark (`#24282B`) | `MetricCard.tsx` |
| Reporting (support only) | 4 icon+text items | White | — |
| CTA | H2 + body + button | Dark (`#24282B`) | `CTA.tsx` / product CTA pattern |

Use the `ProductSection` wrapper for alternating backgrounds:
```tsx
<ProductSection variant="gray"> // or "white"
  <section className="max-w-7xl mx-auto px-6 py-16">
    ...
  </section>
</ProductSection>
```

---

## Styling Quick Reference

| Element | Style |
|---------|-------|
| Eyebrow | `section-label` class + teal line (`w-8 h-px bg-[#2CADB2]`) |
| H1 (hero) | Montserrat, `font-black`, `clamp(2rem, 4vw, 3.5rem)`, `#24282B` |
| H2 (section) | Montserrat, `font-bold`, `clamp(1.5rem, 3vw, 2.5rem)`, `#24282B` (or `#fff` on dark) |
| Body | Raleway, `#555a5e`, `1.125rem` |
| Primary CTA button | `bg-[#F8CF41]`, `text-[#24282B]`, `font-bold`, `rounded-full`, `px-8 py-3` |
| Secondary CTA | Border outline, `text-[#24282B]`, same shape |
| Feature card | `bg-white rounded-xl border border-gray-100 shadow-sm p-6` |
| Dark section | `bg-[#24282B]`, text `#fff`, accent `#2CADB2` |
| Icons | Lucide React, `size={24}`, teal color `#2CADB2` |

---

## Images

See `PROGRAMS-IMAGE-RECOMMENDATIONS.md` for detailed image suggestions per page. Images should be placed in:

```
public/programs/
├── channel-as-a-service-hero.jpg
├── partner-marketing-hero.jpg
├── project-management-hero.jpg
├── service-management-hero.jpg
└── support-hero.jpg
```

Use Next.js `Image` component with `priority` on hero images:
```tsx
<Image
  src="/programs/channel-as-a-service-hero.jpg"
  alt="Sales team working on behalf of service provider partners"
  fill
  className="object-cover"
  priority
/>
```

---

## Checklist

- [ ] Create `app/programs/page.tsx` (hub page)
- [ ] Create `components/programs/` directory with 5 component files
- [ ] Update `app/programs/[slug]/page.tsx` to route to components
- [ ] Add `generateMetadata()` and `generateStaticParams()` to route file
- [ ] Add "Programs Overview" to navbar dropdown (optional)
- [ ] Create `public/programs/` and add hero images
- [ ] Test all 6 routes render correctly
- [ ] Verify SEO metadata in page source
- [ ] Test mobile responsiveness
- [ ] Test internal links between program pages
