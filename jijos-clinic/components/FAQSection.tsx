"use client";

// ── FAQ Accordion Section ──────────────────────────────────
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl overflow-hidden transition-all"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 min-h-[56px] hover:bg-slate-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-slate-700 text-sm sm:text-base leading-snug">
                {faq.question}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`flex-shrink-0 text-teal-600 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
