import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client, isSanityConfigured } from "@/lib/sanity";
import { BLOG_POST_BY_SLUG_QUERY } from "@/lib/sanity.queries";
import { ArrowLeft, Calendar } from "lucide-react";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  mainImageUrl?: string;
  body?: string;
};

async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return null;
  try {
    const post = await client.fetch<Post | null>(BLOG_POST_BY_SLUG_QUERY, { slug });
    return post ?? null;
  } catch {
    return null;
  }
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post | Hostopia Blog" };
  return {
    title: `${post.title} | Hostopia Blog`,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const bodyParagraphs =
    typeof post.body === "string" && post.body
      ? post.body.split(/\n\n+/).filter(Boolean)
      : [];

  return (
    <main>
      {/* Article header */}
      <section
        className="relative pt-28 pb-12 overflow-hidden"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:text-[#2CADB2] transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          {post.category && (
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                fontFamily: "Raleway, sans-serif",
                backgroundColor: "#e8f7f7",
                color: "#2CADB2",
              }}
            >
              {post.category}
            </span>
          )}
          <h1
            className="font-black leading-tight mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#24282B",
            }}
          >
            {post.title}
          </h1>
          <p
            className="flex items-center gap-2 text-sm text-gray-500"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            <Calendar size={14} />
            {formatDate(post.publishedAt)}
          </p>
          {post.excerpt && (
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Featured image */}
      {post.mainImageUrl && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={post.mainImageUrl}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {bodyParagraphs.length > 0 ? (
            <div
              className="prose prose-lg max-w-none"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
            >
              {bodyParagraphs.map((para, i) => (
                <p key={i} className="mb-6 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ) : (
            <p
              className="text-gray-500 italic"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Content for this post is managed in the CMS. Add a &quot;body&quot;
              field (text or block content) to your post type.
            </p>
          )}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold mt-12 text-[#2CADB2] hover:underline"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <ArrowLeft size={16} />
            All posts
          </Link>
        </div>
      </section>
    </main>
  );
}
