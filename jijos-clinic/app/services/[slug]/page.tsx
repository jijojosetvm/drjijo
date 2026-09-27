// ── Service Detail Page (Dynamic Route) ────────────────────
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { CLINIC, SITE_URL } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HoursNote } from "@/components/HoursNote";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

// Generate all static paths
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Generate metadata per service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${SITE_URL}/services/${service.slug}/`,
      type: "article",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}/`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#conditions" },
    { name: service.shortName, href: `/services/${service.slug}/` },
  ];

  return (
    <>
      <FAQSchema faqs={service.faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <div className="mb-8">
          <span className="text-4xl block mb-3" aria-hidden="true">
            {service.icon}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            {service.name}
          </h1>
          <p className="text-lg text-teal-700 font-medium">
            {service.heroLine}
          </p>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed text-lg">
            {service.overview}
          </p>
        </section>

        {/* Hours Note */}
        <HoursNote className="mb-10" />

        {/* Symptoms */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Common Symptoms
          </h2>
          <ul className="space-y-3">
            {service.symptoms.map((symptom, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-slate-600"
              >
                <span className="text-teal-600 mt-1 flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="leading-relaxed">{symptom}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* When to See a Doctor */}
        <section className="mb-10 bg-red-50 border border-red-100 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span aria-hidden="true">⚠️</span> When to See a Doctor
          </h2>
          <ul className="space-y-3">
            {service.whenToSeeDoctor.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-red-700">
                <span className="mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How Consultation Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            How the Consultation Works
          </h2>
          <ol className="space-y-4">
            {service.consultationProcess.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-800 font-bold rounded-full flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <span className="text-slate-600 leading-relaxed pt-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mb-10 bg-teal-50 border border-teal-200 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">
            Need help with {service.shortName.toLowerCase()}?
          </h2>
          <p className="text-slate-600 mb-5">
            {CLINIC.doctorName} can help. Book an appointment on WhatsApp.
          </p>
          <WhatsAppCTA
            text={`Book for ${service.shortName}`}
            size="lg"
            id={`service-${service.slug}-cta`}
          />
        </section>

        {/* FAQs */}
        <FAQSection faqs={service.faqs} />

        {/* Related Conditions */}
        {related.length > 0 && (
          <section className="mt-10 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Related Conditions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}/`}
                  className="card-hover bg-white border border-slate-200 rounded-xl p-4 text-center group"
                >
                  <span
                    className="text-2xl block mb-1 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    {r.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-600 group-hover:text-teal-700 transition-colors">
                    {r.shortName}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
