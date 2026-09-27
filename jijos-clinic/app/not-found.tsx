// ── 404 Not Found Page ─────────────────────────────────────
import Link from "next/link";
import { CLINIC } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-500 mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back to {CLINIC.doctorName}&apos;s clinic.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-colors min-h-[44px]"
        >
          Go to Home Page
        </Link>
        <a
          href={CLINIC.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 whatsapp-bg text-white font-semibold rounded-xl hover:shadow-md transition-all min-h-[44px]"
        >
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
}
