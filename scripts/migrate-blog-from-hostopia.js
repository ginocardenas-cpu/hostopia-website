#!/usr/bin/env node
/**
 * Migrate posts from blog.hostopia.com to Sanity.
 *
 * 1. Fetches post-sitemap.xml to get all post URLs and lastmod.
 * 2. For each URL, fetches the page and extracts title, excerpt, date, image, body.
 * 3. Writes data/migrated-posts.json (for review).
 * 4. If SANITY_API_TOKEN is set, creates "post" documents in your Sanity dataset.
 *
 * Requires: Node 18+ (for fetch). No extra npm deps.
 *
 * Usage:
 *   node scripts/migrate-blog-from-hostopia.js [--dry-run] [--limit=N]
 *
 * Env: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN (optional, for create)
 */

const fs = require('fs');
const path = require('path');

const SITEMAP_URL = 'https://blog.hostopia.com/post-sitemap.xml';
const BASE = 'https://blog.hostopia.com';
const DRY_RUN = process.argv.includes('--dry-run');
const LIMIT_ARG = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = LIMIT_ARG ? parseInt(LIMIT_ARG.split('=')[1], 10) : null;

function extractAll(html, regex) {
  const matches = [];
  let m;
  const re = new RegExp(regex.source, 'g');
  while ((m = re.exec(html)) !== null) matches.push(m[1]);
  return matches;
}

function extractOne(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : null;
}

function stripHtmlToText(html) {
  if (!html || !html.length) return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugFromUrl(url) {
  try {
    const path = new URL(url).pathname.replace(/\/$/, '').replace(/^\//, '');
    return path || 'post';
  } catch {
    return 'post';
  }
}

async function fetchSitemap() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();
  const locs = extractAll(xml, /<loc>([^<]+)<\/loc>/);
  const lastmods = extractAll(xml, /<lastmod>([^<]+)<\/lastmod>/);
  const entries = locs
    .map((loc, i) => ({ url: loc.trim(), lastmod: lastmods[i] ? lastmods[i].trim() : null }))
    .filter((e) => !e.url.includes('/older-posts/') && e.url.startsWith(BASE));
  return entries;
}

async function fetchPost(url, lastmod) {
  const res = await fetch(url, { headers: { 'User-Agent': 'HostopiaBlogMigration/1' } });
  const html = await res.text();

  const title = extractOne(html, /<title>([^<]+)<\/title>/);
  const excerpt = extractOne(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/);
  const publishedTime = extractOne(html, /<meta\s+property=["']article:published_time["']\s+content=["']([^"']*)["']/);
  const ogImage = extractOne(html, /<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/);

  let body = '';
  const entryMatch = html.match(/<div\s+class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<(?:div|section|footer|nav)/i);
  if (entryMatch) {
    body = stripHtmlToText(entryMatch[1]);
    body = body.replace(/\s+/g, ' ').trim();
  }
  if (!body && title) {
    body = excerpt || title;
  }

  const slug = slugFromUrl(url);
  const publishedAt = publishedTime || (lastmod ? new Date(lastmod).toISOString() : null) || new Date().toISOString();
  const cleanTitle = (title || slug).replace(/\s*[-|]\s*Hostopia\s*\|\s*blog\s*$/i, '').trim() || title || slug;

  return {
    title: cleanTitle,
    slug,
    excerpt: excerpt || (body ? body.slice(0, 200) + (body.length > 200 ? '…' : '') : ''),
    publishedAt,
    category: 'Insights',
    mainImageUrl: ogImage || null,
    body: body || '',
  };
}

async function main() {
  const dataDir = path.join(__dirname, '..', 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  console.log('Fetching sitemap...');
  const entries = await fetchSitemap();
  const toFetch = LIMIT ? entries.slice(0, LIMIT) : entries;
  console.log(`Found ${entries.length} posts; processing ${toFetch.length}${LIMIT ? ` (limit ${LIMIT})` : ''}.`);

  const posts = [];
  for (let i = 0; i < toFetch.length; i++) {
    const { url, lastmod } = toFetch[i];
    try {
      const post = await fetchPost(url, lastmod);
      posts.push(post);
      console.log(`  [${i + 1}/${toFetch.length}] ${post.slug}`);
    } catch (err) {
      console.warn(`  [${i + 1}] Failed ${url}:`, err.message);
    }
    await new Promise((r) => setTimeout(r, 400));
  }

  const outPath = path.join(dataDir, 'migrated-posts.json');
  fs.writeFileSync(outPath, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`\nWrote ${posts.length} posts to ${outPath}`);

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  const token = process.env.SANITY_API_TOKEN;

  if (!token || !projectId) {
    console.log('\nTo create documents in Sanity, set SANITY_API_TOKEN and NEXT_PUBLIC_SANITY_PROJECT_ID (and optionally NEXT_PUBLIC_SANITY_DATASET).');
    console.log('Then run: SANITY_API_TOKEN=xxx node scripts/migrate-blog-from-hostopia.js');
    return;
  }

  if (DRY_RUN) {
    console.log('\nDry run: skipping Sanity create.');
    return;
  }

  const { createClient } = require('@sanity/client');
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  });

  console.log(`\nCreating ${posts.length} documents in Sanity (${projectId}/${dataset})...`);
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const doc = {
      _type: 'post',
      _id: `post-${p.slug}`,
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      excerpt: p.excerpt || undefined,
      publishedAt: p.publishedAt || undefined,
      category: p.category || undefined,
      body: p.body || undefined,
      // mainImage: add in Sanity Studio or run an image-import script; mainImageUrl is in data/migrated-posts.json
    };
    try {
      await client.createOrReplace(doc);
      console.log(`  [${i + 1}/${posts.length}] Created post: ${p.slug}`);
    } catch (err) {
      console.warn(`  [${i + 1}] Failed to create ${p.slug}:`, err.message);
    }
  }
  console.log('\nDone. Publish drafts in Sanity Studio if needed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
