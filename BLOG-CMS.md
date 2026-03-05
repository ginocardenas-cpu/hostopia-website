# Blog CMS (Sanity)

The blog at **/blog** is driven by Sanity. You can edit posts and the site will show them once the CMS is connected.

## 1. Sanity project

- Create or use a Sanity project at [sanity.io](https://sanity.io).
- In the Hostopia website repo, set in **.env** (and in Vercel):
  - `NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id`
  - `NEXT_PUBLIC_SANITY_DATASET=production` (or your dataset name)

## 2. Schema for “post”

In your Sanity Studio, add a document type **`post`** with these fields:

| Field name   | Type     | Notes |
|-------------|----------|--------|
| `title`     | string   | Required. |
| `slug`      | slug     | Required. Used in URL: `/blog/[slug]`. |
| `excerpt`   | text     | Short summary for cards and meta. |
| `publishedAt` | datetime | Used for ordering and display. |
| `category`  | string   | e.g. "Insights", "Partner Resources", "News". |
| `mainImage` | image    | Optional. Featured image for listing and post. |
| `body`      | text     | Post body. Use a **text** field for now so the site can render it as paragraphs. (You can switch to **block content** later and add `@portabletext/react` to render rich blocks.) |

Minimal schema example (JavaScript):

```js
// In your Sanity schema (e.g. post.js or schemaTypes/post.js)
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() },
    { name: 'excerpt', type: 'text' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'category', type: 'string' },
    { name: 'mainImage', type: 'image', options: { hotspot: true } },
    { name: 'body', type: 'text' },
  ],
};
```

## 3. Where it appears on the site

- **Blog listing:** [your-site]/blog  
- **Single post:** [your-site]/blog/[slug]  
- **Resources page:** The “Hostopia Blog” block already links to **/blog** (“Read the Blog”).

## 4. If Sanity isn’t configured yet

The site still builds and the **/blog** page loads. With no `NEXT_PUBLIC_SANITY_PROJECT_ID`, the listing shows a short message that posts are managed in the CMS and points to this doc. Once you add the env vars and publish posts in Sanity, they appear automatically.
