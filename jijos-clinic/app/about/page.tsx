// ── About Page ─────────────────────────────────────────────
import { Metadata } from "next";
import Image from "next/image";
import { CLINIC, SITE_URL } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HoursNote } from "@/components/HoursNote";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: `About ${CLINIC.doctorName} | ${CLINIC.title}`,
  description: `Learn about ${CLINIC.doctorName} — ${CLINIC.degree} from ${CLINIC.college}. ${CLINIC.experience} of experience in general medicine in ${CLINIC.city}.`,
  openGraph: {
    title: `About ${CLINIC.doctorName}`,
    description: `${CLINIC.degree}. ${CLINIC.experience} of clinical experience in ${CLINIC.city}.`,
    url: `${SITE_URL}/about/`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
          About {CLINIC.doctorName}
        </h1>

        {/* Doctor Photo + Intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/doctor.jpg"
                alt={`${CLINIC.doctorName} — ${CLINIC.title}`}
                fill
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-teal-50 rounded-xl p-5 mb-5">
              <h2 className="font-bold text-teal-800 text-lg mb-2">
                {CLINIC.doctorName}
              </h2>
              <p className="text-teal-700 font-medium">{CLINIC.title}</p>
              <p className="text-teal-600 text-sm mt-1">{CLINIC.degree}</p>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Dr. Jijo Jose M is a Consultant Physician specialising in
                General Medicine with <strong>{CLINIC.experience}</strong> of
                clinical experience. He completed both his MBBS and MD in
                General Medicine from{" "}
                <strong>Government Medical College, Kannur</strong> — one of
                Kerala&apos;s premier medical institutions known for producing
                some of the state&apos;s finest physicians.
              </p>
              <p>
                His practice covers a broad spectrum of internal medicine —
                from managing chronic conditions like diabetes, hypertension,
                thyroid disorders, and lifestyle diseases, to diagnosing and
                treating acute illnesses including fevers, infections, and
                respiratory conditions that are common in the Kasaragod
                region.
              </p>
              <p>
                Dr. Jijo believes in a patient-centred approach where each
                consultation begins with listening. He takes time to
                understand not just the medical condition but the
                patient&apos;s lifestyle, concerns, and goals — creating
                treatment plans that patients can realistically follow.
              </p>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Qualifications & Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🎓",
                title: "Education",
                desc: `${CLINIC.degree} — ${CLINIC.college}`,
              },
              {
                icon: "⏱️",
                title: "Experience",
                desc: `${CLINIC.experience} in general medicine`,
              },
              {
                icon: "🗣️",
                title: "Languages",
                desc: CLINIC.languages,
              },
              {
                icon: "📍",
                title: "Location",
                desc: CLINIC.address,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-5 border border-slate-100"
              >
                <span className="text-2xl block mb-2" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-bold text-slate-800 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach to Care */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Approach to Patient Care
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Every patient who walks into Dr. Jijo&apos;s clinic receives
              unhurried, attentive care. The consultation process typically
              involves:
            </p>
            <ol className="space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-100 text-teal-800 font-bold rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                <span>
                  <strong>Thorough history-taking:</strong> Understanding
                  symptoms, lifestyle, family history, and current medications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-100 text-teal-800 font-bold rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                <span>
                  <strong>Clinical examination:</strong> Careful physical
                  examination and review of any existing reports.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-100 text-teal-800 font-bold rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                <span>
                  <strong>Clear explanation:</strong> Discussing findings in
                  simple language, explaining the diagnosis and treatment
                  options.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-100 text-teal-800 font-bold rounded-full flex items-center justify-center text-sm">
                  4
                </span>
                <span>
                  <strong>Practical treatment plan:</strong> Medication,
                  lifestyle advice, and a follow-up schedule tailored to the
                  patient&apos;s routine.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Hours Note */}
        <HoursNote className="mb-10" />

        {/* CTA */}
        <section className="bg-teal-50 border border-teal-200 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">
            Book a Consultation
          </h2>
          <p className="text-slate-600 mb-5">
            Get in touch via WhatsApp to schedule your appointment with{" "}
            {CLINIC.doctorName}.
          </p>
          <WhatsAppCTA
            text="Book on WhatsApp"
            size="lg"
            id="about-page-whatsapp-cta"
          />
        </section>
      </div>
    </>
  );
}
