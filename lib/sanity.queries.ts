// Example GROQ queries — extend when you add document types in Sanity Studio.
// Use: const data = await client.fetch(HERO_QUERY);

export const HERO_QUERY = `*[_type == "hero"][0]{ headline, subhead, ctaText, ctaUrl }`;
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ title, phone, footerCta }`;
