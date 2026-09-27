// ── Robots.txt ─────────────────────────────────────────────
import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Required for static export
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
