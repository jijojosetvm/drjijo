// ── Root Layout ────────────────────────────────────────────
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { StructuredData } from "@/components/StructuredData";
import { CLINIC, SITE_URL, GSC_VERIFICATION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLINIC.doctorName} | ${CLINIC.title} | Kasaragod`,
    template: `%s | ${CLINIC.doctorName}`,
  },
  description: `${CLINIC.doctorName}, ${CLINIC.degree} — ${CLINIC.title} in ${CLINIC.city}, ${CLINIC.state}. ${CLINIC.experience} of experience. Book an appointment on WhatsApp.`,
  keywords: [
    "doctor Kasaragod",
    "general physician Kasaragod",
    "MD medicine Kasaragod",
    "Dr Jijo Jose",
    "Pulikunnu doctor",
    "Vidyanagar doctor",
    "clinic Kasaragod",
  ],
  authors: [{ name: CLINIC.doctorName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${CLINIC.doctorName} — ${CLINIC.title}`,
    title: `${CLINIC.doctorName} | ${CLINIC.title} | ${CLINIC.city}`,
    description: `${CLINIC.degree}. ${CLINIC.experience} of experience in general medicine. Trusted care near Pulikunnu, ${CLINIC.city}.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${CLINIC.doctorName} — ${CLINIC.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.doctorName} | ${CLINIC.title}`,
    description: `${CLINIC.degree}. Trusted general medicine care in ${CLINIC.city}.`,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: GSC_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleTagManager />
        <StructuredData />
      </head>
      <body className="antialiased font-sans">
        <GoogleTagManagerNoScript />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
