# Product hero images — file specs (Hostopia site)

Use this when exporting art for **`media.heroImage`** on product pages so heroes stay sharp and sit cleanly on the cream background.

## Recommended format

| Setting | Guidance |
|--------|------------|
| **Format** | **PNG** (24-bit), or **WebP** at 90%+ quality if you need smaller files. JPG is fine for photos without transparency. |
| **Color** | Prefer **no extra white matte** behind the art. If the layout is a composite on **transparent** PNG, letterboxing matches the page (`bg-cream`) instead of a harsh white box. |
| **Pixel dimensions** | **1600–2400 px** on the **longest edge** for typical portrait/hero composites. Minimum **1200 px** on the long edge; below that, upscaling on large screens can look soft. |
| **Aspect ratio** | Portrait / collage heroes (e.g. Domains): roughly **4:5** or **3:4** works well with the current frame. Landscape: **4:3** or **16:10**. Export at a **consistent** ratio so the browser does not have to crop oddly. |
| **File size** | Aim under **~1.5 MB** per hero PNG when possible; very large files slow LCP. Optimize with lossless or near-lossless compression. |

## What the site does

- Next.js **Image** optimizes and serves responsive widths; we set **`sizes`** and **`quality`≈88–92** on key heroes so retina displays get enough pixels.
- **`object-contain`** keeps the full artwork visible (no stretching). If the container aspect does not match the file, **bands** appear: we tint them **cream** (`bg-cream`) to match the hero section, not white.
- **Domains** uses a **flat** (no 3D tilt) hero at up to **~860px** wide so the composite can read clearly.

## JPG vs PNG in your workflow

- **JPG**: layout / mood reference for designers and stakeholders.
- **PNG** (or WebP): **final asset** referenced in `content/products/*.json` under `media.heroImage.src`.

## Future: maximum “pop” (optional)

For the strongest control, supply **separate layers** (background photo + floating cards) and we can position them in CSS. Single flat PNGs are faster to ship and are what Domains uses today.
