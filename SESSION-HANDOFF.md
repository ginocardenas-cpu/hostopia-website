# Session handoff – pick up after reboot

**Last updated:** This session (HostopiaConnects + main site work)

---

## Project overview

- **Root repo:** `hostopia-website-2` – main Hostopia corporate site (Next.js).
- **HostopiaConnects:** Lives in the `HostopiaConnects/` subfolder; it’s a **separate Next.js app** and is deployed from its **own Git remote** via `git subtree`.

---

## Run locally

**Main site (root):**
```bash
cd /Users/maccomputer/Desktop/hostopia-website-2
npm run dev
```
→ Usually http://localhost:3000 (or next free port, e.g. 3004 if 3000 is in use).

**HostopiaConnects:**
```bash
cd /Users/maccomputer/Desktop/hostopia-website-2/HostopiaConnects
npm run dev
```
→ Use the port shown in the terminal (e.g. 3001 or 3004).

---

## Deploy / push

**Main site:** Push to the main repo and Vercel will deploy from that repo.
```bash
cd /Users/maccomputer/Desktop/hostopia-website-2
git add .
git commit -m "Your message"
git push origin main
```

**HostopiaConnects:** It deploys from the **hostopiaconnects** subtree remote. After committing, push both:
```bash
cd /Users/maccomputer/Desktop/hostopia-website-2
git push origin main
git subtree push --prefix=HostopiaConnects hostopiaconnects main
```
If you only push `origin main`, the HostopiaConnects Vercel project **won’t** get the update until you run the subtree push.

---

## Recent work (this session)

**HostopiaConnects**
- **Browse options:** Accordion moved **below** the “Choose how you want to find assets” intro copy (no more side‑by‑side). Expanding each accordion item shows:
  - **Browse by journey** → copy + 4 journey cards (Build a Brand, Get Online, Get Found, Grow their Business) linking to `/assets/journey/{slug}`.
  - **Browse by content type** → copy + 4 type blocks (Videos, Decks & Presentations, etc.).
  - **Browse by use case** → copy + 4 use case blocks (Sales, Marketing, Training, Support).
- **Removed** the old standalone “Browse by Product Journey” and “Browse by type / use case” sections; everything is in the one accordion section now.
- **Hero CTA** “Start Browsing by Product” now links to `#browse-options` (the accordion section).
- **Ticker bar:** Background `#24282B`, label “What’s New!” (teal), news text/date white; no close button (always visible).
- **Hero:** “HostopiaConnects” title is **black** and has **no period**.

**Main site**
- Product pages, dropdowns, resources page, blog, etc. are in the root app (not in HostopiaConnects).

---

## Key paths (HostopiaConnects)

| What | Where |
|------|--------|
| Home page | `HostopiaConnects/app/page.tsx` |
| Ticker bar | `HostopiaConnects/components/TickerBar.tsx` |
| Browse accordion + content blocks | `HostopiaConnects/components/ui/interactive-accordion.tsx` |
| Layout (ticker, nav, footer) | `HostopiaConnects/app/layout.tsx` |
| Journeys / assets data | `HostopiaConnects/lib/assets.ts` |

---

## Optional next steps (from earlier discussion)

- Multi-step drill-down in the accordion (Journey → Products → Content type / Use case → show filtered assets).
- “Browse by” in nav with badge for unseen assets; accordion shrinks into nav when user selects an asset; shade viewed assets.

---

## If something’s broken

- **Main site build fails:** Root `tsconfig.json` excludes `HostopiaConnects` so the main build doesn’t type-check the subfolder.
- **Connects not updating on Vercel:** Run `git subtree push --prefix=HostopiaConnects hostopiaconnects main`.
- **Port in use:** Use the next port Next suggests, or stop the other process using that port.

You can delete this file once you’re back up to speed, or keep it as a reference.
