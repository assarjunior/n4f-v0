import type { Metadata } from "next";
import type { SeoEntry } from "@/config/seo";

export const SITE_ORIGIN = "https://www.ninety4film.com";

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

export function createSocialMetadata(
  pagePath: string,
  seo: SeoEntry,
  imagePath: string,
  imageAlt: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const pageUrl = new URL(pagePath, SITE_ORIGIN).toString();
  const imageUrl = new URL(imagePath, SITE_ORIGIN).toString();

  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Ninety 4 Film",
      url: pageUrl,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: imageUrl,
          width: SOCIAL_IMAGE_SIZE.width,
          height: SOCIAL_IMAGE_SIZE.height,
          alt: imageAlt,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}
