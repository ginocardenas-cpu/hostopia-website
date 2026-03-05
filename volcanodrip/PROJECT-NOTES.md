# Volcanodrip — Project Notes & Conversation Summary

This file captures the conversation history and project state so you can pick up where you left off after restarting or switching machines.

---

## What This Project Is

- **Volcanodrip**: A rebuild of the volcanodrip.com coffee site, inspired by [SILENCIO on Godly](https://godly.website/website/silencio-964).
- Built because the original site was on Hostinger’s AI builder and locked down; this version is a full Next.js app you control.
- Design direction: **clean, light, long-scrolling, small type**, with animated elements (Framer Motion). Warm palette, not dark.

---

## Repo & Deployment

- **Git repo**: Same repo as Hostopia — `https://github.com/rollen77-spec/hostopia-website`
- **App lives in**: `volcanodrip/` (root directory for this app)
- **Vercel**: Separate Vercel project for Volcanodrip. In **Settings → General**, set **Root Directory** to `volcanodrip` so builds and deploys use this app only.
- **Live URL** (example): `https://volcanodrip-34j5729ya-ginos-projects-21427f6a.vercel.app` — your actual URL is in the Vercel dashboard.

---

## Tech Stack

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS**
- **Framer Motion** for scroll and entrance animations
- **shadcn-style UI** in `src/components/ui/` (Button, Sheet, Separator, etc.) + **lucide-react** icons
- **Radix** primitives: `@radix-ui/react-dialog`, `@radix-ui/react-slot`, `@radix-ui/react-label`, `@radix-ui/react-separator`
- **class-variance-authority** for component variants

---

## What’s Been Built

### Home (`/`)
- Light, long-scrolling layout with **pinned coffee bag** on the left (your real bag image) and scroll story on the right.
- **Scroll animation**: Bag has subtle vertical movement and tilt (Framer Motion `useScroll` / `useTransform`).
- Four story sections: The Origin, The Soil, The Roast, The Ritual.
- Logo in header (no “Volcano Drip” text next to it); logo is 2× size.

### Global header
- **SiteHeader** (`src/components/site-header.tsx`): Logo only on the left; nav on the right: Home, Coffees, Sourcing, Brewing, About, Contact, Cart.
- Small uppercase type; active link underline.

### Pages (content pulled from current volcanodrip.com where possible)
- **Coffees** (`/coffees`) — “Born of fire. Where flavour erupts.” + volcanic origins lineup intro.
- **Sourcing** (`/sourcing`) — Redesigned with your full copy: fertile/fragile soil intro, Organic Farming (90% organic, bullets, two Unsplash images), Beyond Fair Trade (Direct Trade, certification pills), Globally Sourced / Canadian Roasted.
- **Brewing** (`/brewing`) — “Master the eruption,” V60 pour-over (ratio, grind, temp, time), step-by-step ritual, storage & freshness.
- **About** (`/about`) — “Forged in fire,” origin story, Our Core Magma (Intensity, Precision, Respect, Community).
- **Contact** (`/contact`) — “Make contact,” email/phone, upcoming appearances (Global Coffee Expo, Barista Championship, Winter Roast Festival), contact form.
- **Cart** (`/cart`) — Eruption Box + subscription benefits; placeholder for future Stripe cart/checkout.

### Assets
- **Logo**: `public/volcanodrip-logo.png` (your Volcanodrip logo).
- **Bag**: `public/volcanodrip-bag.png` (Sumatra Black bag image).
- Sourcing page uses **Unsplash** images (coffee farm, volcanic landscape); `next.config.ts` has `images.remotePatterns` for `images.unsplash.com`.

---

## Key Config

- **Root Directory (Vercel)**: Must be `volcanodrip`.
- **next.config.ts**: `turbopack.root: __dirname` to silence multi-lockfile warning; `images.remotePatterns` for Unsplash.

---

## Run Locally

```bash
cd /Users/maccomputer/Desktop/hostopia-website-2/volcanodrip
npm install
npm run dev
```

Then open the URL shown (e.g. `http://localhost:3006` if 3000 is in use).

---

## Possible Next Steps (from conversation)

1. **Visual polish**: More SILENCIO-like refinements (typography, whitespace, parallax on the bag).
2. **Shop + Stripe**: Wire Coffees page to real products (five single origins + subscription) and Stripe checkout like the current Hostinger site.
3. **Replace placeholders**: Swap Unsplash images on Sourcing for your own farm/landscape photos; add real Canada Organic / Fair Trade logo images if you have them.
4. **Contact form**: Connect the form to an API or email service.

---

## Pushing Changes

From repo root:

```bash
cd /Users/maccomputer/Desktop/hostopia-website-2
git add volcanodrip/   # or specific files
git commit -m "Your message"
git push origin main
```

Vercel will auto-deploy from `main` when Root Directory is set to `volcanodrip`.

---

*Last updated from conversation: Volcanodrip sourcing page redesign and deployment.*
