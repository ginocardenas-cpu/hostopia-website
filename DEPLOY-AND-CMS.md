# Deploy this version and connect Sanity

This branch (`restore-best-version`) is the **Feb 18 “Redesign with Hostopia branding”** version — the one at:
`https://hostopia-website-ead88pfpy-ginos-projects-21427f6a.vercel.app`

## Deploy to Vercel

1. **Push this branch**
   ```bash
   git add lib/ .env.example package.json package-lock.json
   git commit -m "Add Sanity client and env example for CMS"
   git push -u origin restore-best-version
   ```

2. **In Vercel**
   - Either set the **production** branch to `restore-best-version`, or
   - Deploy this branch as a **preview** and promote it to production when ready.

3. **Env vars (optional for build)**
   - Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in Vercel if you want the site to fetch content from Sanity. The app builds without them.

## Connect the CMS

- **Sanity client** is in `lib/sanity.ts` (build-safe: works without env).
- **Example queries** are in `lib/sanity.queries.ts`. Add your own GROQ and document types from your Sanity project.
- To make content editable from Sanity, you can:
  - Fetch hero/nav/settings in `app/layout.tsx` or `app/page.tsx` and pass them to `Hero`, `Navbar`, `Footer`, etc.
  - Keep current copy as fallbacks when `NEXT_PUBLIC_SANITY_PROJECT_ID` is not set.

## Go back to the other design

- Your previous work is on **main** and in the stash:
  ```bash
  git checkout main
  git stash list   # "current-design-before-restore"
  git stash pop    # if you want those changes back
  ```
