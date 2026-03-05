import Link from "next/link";
import Image from "next/image";
import { client, isSanityConfigured } from "@/lib/sanity";
import { BLOG_POSTS_QUERY } from "@/lib/sanity.queries";
import { ArrowRight, Rss, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | Hostopia",
  description:
    "Insights on digital transformation, cloud and SaaS monetization, and partner success strategies for telcos, ISVs, and service providers.",
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  mainImageUrl?: string;
};

async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return [];
  try {
    const posts = await client.fetch<Post[]>(BLOG_POSTS_QUERY);
    return Array.isArray(posts) ? posts : [];
  } catch {
    return [];
  }
}

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(44,173,178,0.1) 0%, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: "Raleway, sans-serif", color: "#2CADB2" }}
            >
              Blog
            </span>
          </div>
          <h1
            className="font-black leading-tight mb-6 max-w-4xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#24282B",
            }}
          >
            Hostopia Decoded
          </h1>
          <p
            className="text-lg leading-relaxed max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
          >
            Stay ahead of industry trends and discover new growth opportunities.
            Insights on digital transformation, cloud and SaaS monetization,
            customer lifecycle management, and partner success strategies.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div
              className="rounded-2xl border-2 border-dashed border-gray-200 py-16 px-8 text-center"
              style={{ backgroundColor: "#fafafa" }}
            >
              <Rss className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h2
                className="font-bold text-xl mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                Latest stories
              </h2>
              <p
                className="text-base max-w-md mx-auto"
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
              >
                Blog posts are managed in the CMS. Add a &quot;post&quot; type in
                Sanity and publish posts to see them here. See BLOG-CMS.md for
                the schema.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-semibold mt-6 text-[#2CADB2] hover:underline"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Back to Resources
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              <h2
                className="font-black text-2xl mb-10"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                Latest stories
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-black/5 overflow-hidden bg-white hover:shadow-lg hover:border-[#2CADB2]/30 transition-all duration-200"
                  >
                    <div className="relative aspect-[16/10] bg-gray-100">
                      {post.mainImageUrl ? (
                        <Image
                          src={post.mainImageUrl}
                          alt=""
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ backgroundColor: "#e8f7f7" }}
                        >
                          <Rss className="w-12 h-12 text-[#2CADB2]/50" />
                        </div>
                      )}
                      {post.category && (
                        <span
                          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90"
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            color: "#2CADB2",
                          }}
                        >
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <p
                        className="flex items-center gap-2 text-xs text-gray-500 mb-2"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                      >
                        <Calendar size={12} />
                        {formatDate(post.publishedAt)}
                      </p>
                      <h3
                        className="font-bold text-lg leading-snug mb-2 group-hover:text-[#2CADB2] transition-colors"
                        style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                      >
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p
                          className="text-sm line-clamp-3"
                          style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
                        >
                          {post.excerpt}
                        </p>
                      )}
                      <span
                        className="inline-flex items-center gap-1 mt-3 text-sm font-semibold"
                        style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
                      >
                        Read more
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
