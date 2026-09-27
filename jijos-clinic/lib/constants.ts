// ── Clinic-wide constants ──────────────────────────────────
export const SITE_URL = "https://drjijo.netlify.app"

export const CLINIC = {
  doctorName: "Dr. Jijo Jose M",
  title: "Consultant Physician",
  degree: "MBBS, MD General Medicine",
  college: "Govt. Medical College, Kannur",
  experience: "13+ years",
  languages: "Malayalam, English",
  phone: "+917012998903",
  phoneDisplay: "+91 70129 98903",
  email: "jijojosetvm@gmail.com",
  address: "Near Municipal Town Hall, Pulikunnu, Kasaragod, Keralam 671121",
  addressShort: "Pulikunnu, Kasaragod",
  pincode: "671121",
  state: "Kerala",
  city: "Kasaragod",
  mapQuery: "12.49925,74.9925128",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.25762382591!2d74.99261697372344!3d12.49907582506459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba483b514e0afb1%3A0x78011a5fd25eb837!2sDr.%20Jijo%20Jose%20M%20%7C%20Consultant%20Physician%20%7C%20MD%20General%20Medicine!5e0!3m2!1sen!2sin!4v1790516553662!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
  whatsappUrl:
    "https://wa.me/917012998903?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.",
} as const;

/** Friendly hours note — displayed wherever hours would usually go */
export const HOURS_NOTE =
  "Consultation hours vary — usually around 4:00–6:00 PM, not every day. Please confirm today's timing on WhatsApp before visiting.";

/** Google Tag Manager container ID — set via env or hardcode after setup */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/** GA4 Measurement ID (used only for the WhatsApp click event via dataLayer) */
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";

/** Google Search Console verification (HTML meta tag value) */
export const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";

/** Local SEO keywords used naturally in content */
export const LOCAL_AREAS = [
  "Kasaragod",
  "Pulikunnu",
  "Vidyanagar",
  "Chemnad",
] as const;
