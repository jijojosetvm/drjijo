// ── Contact Page ───────────────────────────────────────────
import { Metadata } from "next";
import { CLINIC, SITE_URL } from "@/lib/constants";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HoursNote } from "@/components/HoursNote";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: `Contact ${CLINIC.doctorName} | Book Appointment`,
  description: `Contact ${CLINIC.doctorName} in ${CLINIC.city}. Book an appointment on WhatsApp or call ${CLINIC.phoneDisplay}. Clinic near Pulikunnu, Vidyanagar.`,
  openGraph: {
    title: `Contact ${CLINIC.doctorName}`,
    description: `Book an appointment or get directions. Clinic near Pulikunnu, ${CLINIC.city}.`,
    url: `${SITE_URL}/contact/`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span aria-hidden="true">📍</span> Clinic Address
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {CLINIC.doctorName}
                <br />
                {CLINIC.title}
                <br />
                {CLINIC.address}
              </p>
              <a
                href={'https://www.google.com/maps/dir/?api=1&destination=12.499082,74.995194'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-teal-700 font-medium hover:text-teal-900 transition-colors text-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions on Google Maps →
              </a>
            </div>

            {/* Phone */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span aria-hidden="true">📞</span> Phone
              </h2>
              <a
                href={`tel:${CLINIC.phone}`}
                className="text-teal-700 font-semibold text-lg hover:text-teal-900 transition-colors"
              >
                {CLINIC.phoneDisplay}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span aria-hidden="true">💬</span> WhatsApp (Preferred)
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                The fastest way to book an appointment or confirm clinic hours.
              </p>
              <WhatsAppCTA
                text="Message on WhatsApp"
                size="md"
                id="contact-page-whatsapp-cta"
              />
            </div>

            {/* Hours */}
            <HoursNote />
          </div>

          {/* Map */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 h-full min-h-[300px]">
              <iframe
                title="Clinic location on Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  "12.499082,74.995194"
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* How to Reach */}
        <section className="bg-slate-50 rounded-xl p-6 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            How to Reach the Clinic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">
                From Kasaragod Town
              </h3>
              <p>
                The clinic is near Municipal Town Hall, Pulikunnu — a short
                auto-rickshaw ride from Kasaragod bus stand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">
                From Kanhangad
              </h3>
              <p>
                About 20 minutes by road. Frequent KSRTC and private buses
                available to Kasaragod.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">
                Nearby Areas
              </h3>
              <p>
                Easily accessible from Vidyanagar, Chemnad, Kumbla, and other
                areas in Kasaragod district.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
