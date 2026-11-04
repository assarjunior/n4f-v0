import type { MetadataRoute } from "next";

import { getPublishedWork } from "@/config/config-work";
import { getPublishedTeam } from "@/config/team";
import { SITE_ORIGIN } from "@/lib/social-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPaths = ["/", "/company", "/services", "/work", "/contact"];

  const mainPages: MetadataRoute.Sitemap = mainPaths.map((path) => ({
    url: new URL(path, SITE_ORIGIN).toString(),
  }));

  const workPages: MetadataRoute.Sitemap = getPublishedWork().map(
    (project) => ({
      url: new URL(`/work/${project.slug}`, SITE_ORIGIN).toString(),
    }),
  );

  const teamPages: MetadataRoute.Sitemap = getPublishedTeam().map((member) => ({
    url: new URL(`/company/team/${member.slug}`, SITE_ORIGIN).toString(),
  }));

  return [...mainPages, ...workPages, ...teamPages];
}
