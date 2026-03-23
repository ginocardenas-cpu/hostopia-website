# Hostopia Website — Image Strategy Guide

## The Core Challenge

Hostopia sells to service providers (B2B), but the services are consumed by small businesses (B2C). Every image on the site needs to navigate this dual audience without confusing who the hero of the story is.

**The hero is always the service provider.** The SMB is the beneficiary. Hostopia is the enabler behind the scenes.

---

## The Image Framework: Three Layers

Think of every Hostopia image as having three layers. The image should emphasize Layer 1, show Layer 2 as context, and imply Layer 3.

| Layer | Who | Role in Image | Visual Treatment |
|-------|-----|---------------|-----------------|
| **Layer 1 — Foreground** | Service provider | The subject. The person making decisions, delivering value, reviewing results. | Sharp focus, facing camera or engaged in action |
| **Layer 2 — On-screen / Background** | SMB outcome | The result. A storefront, a dashboard, a website, a happy customer metric. | Visible on a screen, tablet, or in soft focus behind the subject |
| **Layer 3 — Implied** | Hostopia | The invisible enabler. Never shown directly — implied through the platform, tools, or results on screen. | Not depicted. The viewer understands Hostopia made this possible through the page context. |

---

## Image Types Ranked (Best to Worst for Hostopia)

### 1. Partner Enablement Shot (BEST)
**What it is**: A service provider professional reviewing, presenting, or delivering a digital service — with the SMB outcome visible on a screen or in the background.

**Why it works**: Puts the buyer (service provider) in the hero seat. Shows the outcome without making the page feel like it's for the SMB. Reinforces "you deliver this to your customers."

**Examples**:
- Ecommerce: Two professionals at a table, one showing the other an online store on a tablet. The store is the context. The conversation is the subject.
- Email: A service provider rep reviewing an email dashboard showing mailbox stats, customer count, uptime — their success metrics.
- Support: A support agent on a branded call, with the service provider's logo subtly visible on the screen.

### 2. Dashboard / Results Shot (STRONG)
**What it is**: A screen showing performance data, customer growth, revenue metrics, or platform activity — with a person reviewing it or with the dashboard as the hero.

**Why it works**: Service providers care about results. A dashboard showing "new revenue from digital services" or "active SMB customers" speaks their language directly.

**Examples**:
- Channel as a Service: A dashboard showing pipeline activity, conversion rates, and revenue generated — the CaaS metrics.
- Service Management: A QBR slide or account performance report on a screen.
- Partner Marketing: A campaign performance dashboard showing leads generated.

### 3. Collaborative Moment (GOOD)
**What it is**: Two or more professionals working together — reviewing plans, discussing strategy, handing off deliverables.

**Why it works**: Reinforces Hostopia's "extension of your team" positioning. Shows partnership in action.

**Examples**:
- Project Management: A PM and a partner reviewing a project timeline together.
- Partner Marketing: A marketing manager and a partner planning a campaign on a whiteboard.

### 4. SMB Success Moment (USE SPARINGLY)
**What it is**: An SMB owner benefiting from a digital service — managing their online store, checking their website on mobile, reading a positive review.

**Why it works**: Emotional resonance. Service providers want to see their customers succeeding.

**When to use**: Only as a secondary image within a page, never as the hero. Works well in testimonial sections or "your customers will experience" callouts.

**Risk**: If used as the hero image, it positions the page as B2C. The service provider visitor thinks "this page isn't for me."

### 5. Abstract / Conceptual (AVOID)
**What it is**: Generic tech imagery — cloud icons, circuit boards, abstract gradients, floating devices.

**Why it doesn't work**: Says nothing about who benefits or how. Feels generic. Doesn't differentiate Hostopia from any other SaaS provider.

---

## Applying This to Product Pages

| Product | Hero Image Recommendation | Layer 1 (Foreground) | Layer 2 (On-screen/Background) |
|---------|--------------------------|---------------------|-------------------------------|
| **Ecommerce** | Partner enablement shot | Service provider showing an SMB their new online store on a tablet or laptop | The online store is visible on screen — products, cart, storefront design |
| **Business Email** | Dashboard shot | Professional reviewing email platform metrics | Dashboard showing mailbox counts, uptime, customer growth |
| **Website Builder** | Partner enablement shot | Service provider and SMB owner reviewing a website build together | Website preview visible on screen |
| **Domains** | Dashboard shot | Professional at a workstation | Domain management panel or registration flow on screen |
| **SEO** | Results shot | Professional presenting search performance | Google Analytics or ranking dashboard visible |
| **Directory Listings** | SMB success moment (secondary image OK here) | SMB owner checking their business listing on mobile | Map listing, reviews, and ratings visible on phone screen |
| **Logo Design** | Collaborative moment | Designer and client reviewing logo options | Logo variations on screen or printed |
| **SSL** | Dashboard shot | IT professional reviewing security status | SSL certificate dashboard, green padlock indicators |
| **Hosting** | Dashboard shot | Professional monitoring infrastructure | Uptime dashboard, server health metrics |
| **Reputation Management** | Results shot | Professional reviewing customer feedback | Review dashboard with ratings and response tools |

## Applying This to Programs Pages

| Program | Hero Image Recommendation | Layer 1 (Foreground) | Layer 2 (On-screen/Background) |
|---------|--------------------------|---------------------|-------------------------------|
| **Channel as a Service** | Dashboard shot | Sales consultant on a call or reviewing data | CRM/pipeline dashboard showing activity and conversions |
| **Partner Marketing** | Collaborative moment | Marketing manager and partner planning together | Campaign materials, whiteboard with strategy, or email campaign on screen |
| **Project Management** | Dashboard shot | PM presenting or reviewing timeline | Gantt chart, milestone tracker, or SNAP migration dashboard |
| **Service Management** | Collaborative moment | Service manager in a review meeting | QBR slide or account performance report visible |
| **Support** | Partner enablement shot | Support agent at a clean workstation | Ticketing system on screen, branded interface visible |

---

## Sourcing Recommendations

### Free Options
- **Unsplash** — Best for: professional environments, workspaces, collaborative moments. Search tip: use specific terms like "B2B meeting tablet" not generic "business team."
- **Pexels** — Similar quality to Unsplash, sometimes better for diverse professional imagery.

### Paid Options
- **Shutterstock** — Best for: specific compositions (e.g., "person showing online store on tablet"). More control over exactly what you get.
- **Adobe Stock** — Same tier as Shutterstock. Good editorial-style professional imagery.
- **iStock** — Budget-friendly paid option. Quality varies more.

### Custom Options
- **AI-generated (Midjourney, DALL-E)** — Best for: getting the exact composition described above when stock can't deliver. Risk: can look uncanny for close-up faces. Works well for dashboard mockups and environmental shots.
- **Custom photography** — Best quality and brand consistency. If budget allows, shoot a batch in one session covering all pages. Use a real office environment (Hostopia's or a partner's) for authenticity.

### Recommended Image Format
- **Hero images**: JPG, 1920×1080px minimum (16:9 aspect ratio), optimized for web (< 300KB after compression). Next.js `Image` component will handle responsive sizing.
- **Supporting/section images**: JPG or PNG, 1200×800px, < 200KB.
- **Icons**: Use Lucide React (already in the project) — no image files needed for icon-based sections.

---

## Quick Decision Checklist

Before placing any image on the site, ask:

1. **Who is the hero of this image?** → It should be the service provider, not the SMB.
2. **Can the viewer see the outcome?** → The SMB benefit should be visible (on a screen, in the background) but not the primary subject.
3. **Does this feel B2B or B2C?** → If it feels like a consumer marketing page, swap the image.
4. **Would a VP of Product at a telco relate to this?** → That's your buyer. The image should reflect their world.
5. **Is Hostopia visible?** → No. Hostopia is the invisible enabler. The service provider's brand is what should be implied.
