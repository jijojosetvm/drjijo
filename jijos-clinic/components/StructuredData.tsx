// ── Structured Data (JSON-LD @graph) ───────────────────────
// Renders MedicalClinic, IndividualPhysician, Organization, WebSite schemas
import { CLINIC, SITE_URL } from "@/lib/constants";

export function StructuredData() {
  const graph = [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: CLINIC.doctorName,
      description: `${CLINIC.title} — ${CLINIC.degree}. General medicine clinic in ${CLINIC.city}, ${CLINIC.state}.`,
      url: SITE_URL,
      telephone: CLINIC.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Municipal Town Hall, Pulikunnu",
        addressLocality: CLINIC.city,
        addressRegion: CLINIC.state,
        postalCode: CLINIC.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.4996,
        longitude: 75.0003,
      },
      medicalSpecialty: "GeneralPractice",
      // omit openingHoursSpecification — hours vary
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#doctor`,
      name: CLINIC.doctorName,
      description: `${CLINIC.degree} from ${CLINIC.college}. ${CLINIC.experience} of clinical experience.`,
      url: `${SITE_URL}/about/`,
      telephone: CLINIC.phone,
      medicalSpecialty: "GeneralPractice",
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: CLINIC.college,
      },
      knowsLanguage: ["ml", "en", "ta", "hi"],
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: CLINIC.doctorName,
      url: SITE_URL,
      telephone: CLINIC.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Municipal Town Hall, Pulikunnu",
        addressLocality: CLINIC.city,
        addressRegion: CLINIC.state,
        postalCode: CLINIC.pincode,
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${CLINIC.doctorName} | ${CLINIC.title}`,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: CLINIC.doctorName,
      url: SITE_URL,
      telephone: CLINIC.phone,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

// ── FAQ Page Schema ────────────────────────────────────────
interface FAQ {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Breadcrumb Schema ──────────────────────────────────────
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
