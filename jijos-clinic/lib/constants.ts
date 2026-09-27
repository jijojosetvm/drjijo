// ── Clinic-wide constants ──────────────────────────────────
export const SITE_URL = "https://drjijojose.in"; // change after deploying

export const CLINIC = {
  doctorName: "Dr. Jijo Jose M",
  title: "Consultant Physician",
  degree: "MBBS, MD General Medicine",
  college: "Govt. Medical College, Kannur",
  experience: "13+ years",
  languages: "Malayalam, English, Tamil, Hindi",
  phone: "+917012998903",
  phoneDisplay: "+91 70129 98903",
  email: "drjijojosem@gmail.com", // placeholder — change if needed
  address: "Near Municipal Town Hall, Pulikunnu, Kasaragod, Keralam 671121",
  addressShort: "Pulikunnu, Kasaragod",
  pincode: "671121",
  state: "Kerala",
  city: "Kasaragod",
  mapQuery: "Dr+Jijo+Jose+M+Kasaragod",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Near+Municipal+Town+Hall+Pulikunnu+Kasaragod+Kerala+671121",
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
  "Kanhangad",
  "Chemnad",
] as const;
