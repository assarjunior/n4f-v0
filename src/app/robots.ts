import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/social-metadata";

// Must be explicitly enabled in the production build.
const isIndexable = process.env.SITE_INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    // Advertise the production sitemap only
    // when indexing has been authorized.
    ...(isIndexable
      ? {
          sitemap: `${SITE_ORIGIN}/sitemap.xml`,
        }
      : {}),
  };
}
