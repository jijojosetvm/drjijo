// ── Blog Post Page (Dynamic Route) ─────────────────────────
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { CLINIC, SITE_URL } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/StructuredData";

// Generate all static paths
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// Generate metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `${SITE_URL}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [CLINIC.doctorName],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Health Tips", href: "/blog/" },
    { name: post.title, href: `/blog/${post.slug}/` },
  ];

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    author: {
      "@type": "Person",
      name: CLINIC.doctorName,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: CLINIC.doctorName,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-teal-50 text-teal-700 text-xs font-medium px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="font-medium text-slate-700">
              {CLINIC.doctorName}
            </span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <section className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">
            Have Health Concerns?
          </h2>
          <p className="text-slate-600 mb-5">
            {CLINIC.doctorName} is here to help. Book a consultation on
            WhatsApp.
          </p>
          <WhatsAppCTA
            text="Book on WhatsApp"
            size="lg"
            id="blog-post-whatsapp-cta"
          />
        </section>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <a
            href="/blog/"
            className="text-teal-700 font-medium hover:text-teal-900 transition-colors"
          >
            ← Back to Health Tips
          </a>
        </div>
      </article>
    </>
  );
}
