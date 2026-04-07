# Session handoff – pick up after reboot

**Last updated:** HostopiaConnects now lives only in its **own repo** (not in this monorepo).

---

## Project overview

- **This repo (`hostopia-website`):** Main Hostopia corporate site (Next.js).
- **HostopiaConnects:** Separate repository — e.g. local folder `hostopiaconnects-mac`, remote `ginocardenas-cpu/hostopiaconnects`. Deploy via that repo’s Vercel project; **do not** expect a `HostopiaConnects/` subfolder here.

---

## Run locally

**Main site (this repo):**

```bash
cd hostopia-website-mac   # or your clone path
npm run dev
```

**HostopiaConnects:** open your Connects clone (e.g. `hostopiaconnects-mac`), then `npm run dev`.

---

## Deploy / push

- **Main site:** `git push origin main` on **this** repo.
- **Connects:** `git push origin main` on the **hostopiaconnects** repo only.

---

## If something’s broken

- **Main site build fails:** `tsconfig.json` no longer excludes a nested Connects app; the root app is self-contained.
- **Connects not on Vercel:** Push the **hostopiaconnects** repository, not this one.

You can delete this file once you’re back up to speed, or keep it as a reference.
