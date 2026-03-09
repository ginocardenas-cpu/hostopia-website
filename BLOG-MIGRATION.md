# Migrating blog.hostopia.com posts to the new blog (Sanity)

The new blog at **/blog** is powered by Sanity. You can copy all posts from the old blog (blog.hostopia.com) into Sanity using the migration script.

## Prerequisites

1. **Sanity project** – Same one used for the main site (see [BLOG-CMS.md](./BLOG-CMS.md)): `post` document type with `title`, `slug`, `excerpt`, `publishedAt`, `category`, `mainImage`, `body`.
2. **Node 18+** – The script uses built-in `fetch`. No extra npm packages.
3. **Write token (for creating posts)** – In [sanity.io/manage](https://sanity.io/manage) → your project → API → Tokens, create a token with **Editor** (or **Admin**) rights. Use it as `SANITY_API_TOKEN`.

## Steps

### 1. Scrape and save (no token needed)

This fetches all post URLs from blog.hostopia.com’s sitemap, then each post page, and writes `data/migrated-posts.json`. No Sanity credentials required.

```bash
node scripts/migrate-blog-from-hostopia.js
```

Options:

- **`--dry-run`** – Only scrape and write JSON; do not create Sanity documents (useful if you haven’t set a token yet).
- **`--limit=N`** – Process only the first N posts (e.g. `--limit=5` to test).

Example (test with 3 posts, no Sanity write):

```bash
node scripts/migrate-blog-from-hostopia.js --dry-run --limit=3
```

### 2. Create documents in Sanity

Set your Sanity env vars and token, then run the script again **without** `--dry-run`:

```bash
export NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
export NEXT_PUBLIC_SANITY_DATASET=production
export SANITY_API_TOKEN=your_editor_token
node scripts/migrate-blog-from-hostopia.js
```

Or in one line:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx NEXT_PUBLIC_SANITY_DATASET=production SANITY_API_TOKEN=xxx node scripts/migrate-blog-from-hostopia.js
```

The script will:

- Create (or replace) one Sanity document per post with `_id`: `post-<slug>`.
- Set `title`, `slug`, `excerpt`, `publishedAt`, `category` (default "Insights"), and `body`.
- **Not** upload images: `mainImage` is left empty. Featured image URLs are stored in `data/migrated-posts.json` under `mainImageUrl`; you can add images in Sanity Studio later or use a separate image-import step.

### 3. Publish in Sanity Studio

Documents are created as **drafts**. In Sanity Studio, open the “Post” type, review the imported posts, and **Publish** the ones you want to appear on the site.

## Output

| File | Description |
|------|-------------|
| `data/migrated-posts.json` | One object per post: `title`, `slug`, `excerpt`, `publishedAt`, `category`, `mainImageUrl`, `body`. Use this to review or re-run imports. |

## Notes

- The script throttles requests (~400 ms between posts) to avoid overloading the source site.
- Slugs are taken from the URL path (e.g. `how-telcos-measure-roi-from-digital-services-in-2026`).
- Body text is stripped of HTML; formatting is plain. For rich text later, you could extend the script to output Portable Text or keep HTML and change the schema.
- If you already have a `post` with the same `_id` (`post-<slug>`), it will be **replaced** by the migrated content.
