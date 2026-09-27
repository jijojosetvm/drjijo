// ── Blog Listing Page ──────────────────────────────────────
import { Metadata } from "next";
import Link from "next/link";
import { CLINIC, SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: `Health Tips & Blog | ${CLINIC.doctorName}`,
  description: `Health tips, medical advice, and wellness articles by ${CLINIC.doctorName}. Practical health guidance for patients in Kasaragod and Kerala.`,
  openGraph: {
    title: `Health Tips | ${CLINIC.doctorName}`,
    description: `Practical health articles and tips from a trusted physician in ${CLINIC.city}.`,
    url: `${SITE_URL}/blog/`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Health Tips", href: "/blog/" },
];

export default function BlogListingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          Health Tips
        </h1>
        <p className="text-slate-500 mb-10 text-lg">
          Practical health advice and medical information from{" "}
          {CLINIC.doctorName}.
        </p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block card-hover bg-white border border-slate-200 rounded-xl p-5 sm:p-6 group"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-50 text-teal-700 text-xs font-medium px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
