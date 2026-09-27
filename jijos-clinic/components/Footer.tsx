// ── Footer ─────────────────────────────────────────────────
import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { HoursNote } from "./HoursNote";

const serviceLinks = [
  { href: "/services/diabetes/", label: "Diabetes" },
  { href: "/services/hypertension/", label: "Hypertension" },
  { href: "/services/thyroid-disorders/", label: "Thyroid" },
  { href: "/services/health-checkup/", label: "Health Checkup" },
  { href: "/services/fever/", label: "Fever" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Clinic Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              {CLINIC.doctorName}
            </h3>
            <p className="text-sm text-slate-400 mb-1">{CLINIC.title}</p>
            <p className="text-sm text-slate-400 mb-1">{CLINIC.degree}</p>
            <p className="text-sm text-slate-400 mt-4">{CLINIC.address}</p>
            <a
              href={`tel:${CLINIC.phone}`}
              className="text-sm text-teal-400 hover:text-teal-300 mt-2 inline-block transition-colors"
            >
              📞 {CLINIC.phoneDisplay}
            </a>

            {/* Hours Note */}
            <div className="mt-4">
              <HoursNote />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  About Dr. Jijo
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Health Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Disclaimer */}
          <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Disclaimer:</strong> This
              website provides general health information for educational
              purposes only. It is not a substitute for professional medical
              advice, diagnosis, or treatment. No guaranteed cures are implied.
              Always consult a qualified healthcare provider for medical
              concerns.
            </p>
            <p className="text-xs text-red-400 mt-2 font-medium">
              ⚠️ Not for emergencies. Call 108 or go to the nearest hospital.
            </p>
          </div>

          {/* Privacy & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {CLINIC.doctorName}. All rights
              reserved.
            </p>
            <p>
              We respect your privacy. No personal health data is collected
              through this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
