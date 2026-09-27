// ── Hours Note Component ───────────────────────────────────
// Shows the friendly hours message and links to WhatsApp
import { CLINIC, HOURS_NOTE } from "@/lib/constants";

interface HoursNoteProps {
  className?: string;
}

export function HoursNote({ className = "" }: HoursNoteProps) {
  return (
    <div
      className={`bg-teal-50 border border-teal-200 rounded-xl p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">
          🕐
        </span>
        <div>
          <p className="text-slate-700 text-sm leading-relaxed">
            {HOURS_NOTE.replace(
              "confirm today's timing on WhatsApp",
              ""
            ).replace("Please  before visiting.", "")}
            Please{" "}
            <a
              href={CLINIC.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 font-semibold underline underline-offset-2 hover:text-teal-900 transition-colors"
            >
              confirm today&apos;s timing on WhatsApp
            </a>{" "}
            before visiting.
          </p>
        </div>
      </div>
    </div>
  );
}
