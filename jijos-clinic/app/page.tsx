// ── Home Page ──────────────────────────────────────────────
import Image from "next/image";
import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { services } from "@/data/services";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HoursNote } from "@/components/HoursNote";
import { FAQSection } from "@/components/FAQSection";
import { FAQSchema } from "@/components/StructuredData";

const homeFAQs = [
  {
    question: "How do I book an appointment with Dr. Jijo Jose M?",
    answer:
      "You can book an appointment directly through WhatsApp. Simply click the 'Book on WhatsApp' button on this page, send a message, and the clinic will confirm your appointment time.",
  },
  {
    question: "Where is the clinic located?",
    answer: `The clinic is located ${CLINIC.address}. It is easily accessible from Vidyanagar, Ramdas Nagar, Anebagilu, Thalangara, Thayalangadi and Chemnad areas.`,
  },
  {
    question: "What conditions does Dr. Jijo treat?",
    answer:
      "Dr. Jijo Jose M treats a wide range of conditions including diabetes, hypertension, thyroid disorders, high cholesterol, anemia, fever and acute infections, respiratory and gastrointestinal diseases, and lifestyle disorders. Preventive health check-ups are also available.",
  },
  {
    question: "Does the doctor speak English and other languages?",
    answer:
      "Yes. Dr. Jijo Jose M is fluent in Malayalam and English, and also speaks some Tamil and Hindi, making consultations comfortable for patients from different language backgrounds.",
  },
  {
    question: "What are the consultation hours?",
    answer:
      "Consultation hours vary — usually around 4:00–6:00 PM, not every day. Please confirm today's timing on WhatsApp before visiting to avoid a wasted trip.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homeFAQs} />

      {/* ── Hero Section ──────────────────────────────────── */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-50/30 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {CLINIC.degree} • {CLINIC.experience} Experience
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Trusted General Medicine Care in{" "}
                <span className="text-teal-700">Kasaragod</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {CLINIC.doctorName} — {CLINIC.title}. Compassionate,
                evidence-based care for you and your family near Pulikunnu,
                Kasaragod.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppCTA
                  text="Book Appointment"
                  size="lg"
                  id="hero-whatsapp-cta"
                />
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors min-h-[44px] text-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Clinic
                </a>
              </div>
              <div className="mt-6">
                <HoursNote />
              </div>
            </div>

            {/* Doctor Photo */}
            <div className="animate-fade-in animate-delay-200 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/doctor.jpg"
                  alt={`${CLINIC.doctorName} — ${CLINIC.title} in ${CLINIC.city}`}
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Condition Cards ───────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Conditions We Treat
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Expert care for a wide range of medical conditions. Click to learn
              more about each.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className={`card-hover bg-white border border-slate-200 rounded-xl p-4 sm:p-5 text-center group animate-fade-in`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span
                  className="text-3xl block mb-2 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-700 group-hover:text-teal-700 transition-colors">
                  {service.shortName}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Doctor Section ──────────────────────────── */}
      <section className="py-14 bg-teal-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/doctor.jpg"
                  alt={`${CLINIC.doctorName} at the clinic`}
                  fill
                  sizes="(max-width: 640px) 224px, 288px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                About {CLINIC.doctorName}
              </h2>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>
                  Dr. Jijo Jose M is a Consultant Physician with{" "}
                  <strong>{CLINIC.experience}</strong> of clinical experience.
                  He completed his{" "}
                  <strong>MBBS and MD in General Medicine</strong> from{" "}
                  {CLINIC.college} — one of Kerala&apos;s most respected medical
                  institutions.
                </p>
                <p>
                  He provides comprehensive care for chronic conditions like
                  diabetes, hypertension, thyroid disorders, and lifestyle
                  diseases, as well as acute conditions including fevers,
                  infections, and respiratory illnesses.
                </p>
                <p>
                  Dr. Jijo is fluent in <strong>{CLINIC.languages}</strong>,
                  making consultations comfortable for patients from diverse
                  backgrounds across the Kasaragod district.
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about/"
                  className="inline-flex items-center justify-center px-5 py-3 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-colors min-h-[44px]"
                >
                  Learn More About Dr. Jijo
                </Link>
                <WhatsAppCTA
                  variant="outline"
                  size="md"
                  id="about-section-whatsapp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Qualified & Experienced",
                desc: `${CLINIC.degree} from ${CLINIC.college}. Over ${CLINIC.experience} in clinical practice.`,
              },
              {
                icon: "🗣️",
                title: "Multilingual Consultations",
                desc: "Comfortable conversations in Malayalam, English, Tamil, and Hindi.",
              },
              {
                icon: "💊",
                title: "Evidence-Based Treatment",
                desc: "Up-to-date medical protocols tailored to each patient's needs and lifestyle.",
              },
              {
                icon: "📱",
                title: "Easy WhatsApp Booking",
                desc: "No phone queues or apps. Book and confirm appointments through WhatsApp.",
              },
              {
                icon: "🏥",
                title: "Convenient Location",
                desc: "Near Municipal Town Hall, Pulikunnu — easily accessible from Vidyanagar, Kanhangad, and Chemnad.",
              },
              {
                icon: "🤝",
                title: "Patient-Centred Care",
                desc: "Thorough consultations with time given to understand your concerns and explain your treatment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <span className="text-3xl block mb-3" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <FAQSection faqs={homeFAQs} />
        </div>
      </section>

      {/* ── Map & Directions ──────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-6">
            Find Us
          </h2>
          <p className="text-center text-slate-500 mb-8 max-w-lg mx-auto">
            {CLINIC.address}
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              title="Clinic location on Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "12.499080,74.9951194"
              )}&output=embed`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={CLINIC.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-colors min-h-[44px]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────── */}
      <section className="py-14 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Book a Consultation?
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Reach out via WhatsApp or call to confirm your appointment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA
              text="Book on WhatsApp"
              size="lg"
              id="bottom-cta-whatsapp"
            />
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-700 transition-colors min-h-[44px] text-lg"
            >
              📞 {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
