// Example GROQ queries — extend when you add document types in Sanity Studio.
// Use: const data = await client.fetch(HERO_QUERY);

export const HERO_QUERY = `*[_type == "hero"][0]{ headline, subhead, ctaText, ctaUrl }`;
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ title, phone, footerCta }`;

// Blog (CMS-editable). Schema: see BLOG-CMS.md
export const BLOG_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  category,
  "mainImageUrl": mainImage.asset->url
}`;
export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  category,
  "mainImageUrl": mainImage.asset->url,
  body
}`;
