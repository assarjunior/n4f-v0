import { company } from "@/config/company";
import { seoCopy } from "@/config/seo";
import type { WorkEntry } from "@/types/types-work";
import type { TeamMember } from "@/types/types-team";

import { SITE_ORIGIN } from "./social-metadata";

const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

function absoluteUrl(path: string): string {
  return new URL(path, SITE_ORIGIN).toString();
}

// Homepage: organization identity and website.
export function getHomeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: company.name,
        url: SITE_ORIGIN,
        logo: absoluteUrl("/brand/logo-maroon.png"),
        description: seoCopy.pages.home.description,
        email: company.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "production inquiries",
          email: company.email,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        name: company.name,
        url: SITE_ORIGIN,
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        inLanguage: "en",
      },
    ],
  };
}

// Individual film project.
// Do not imply Ninety 4 Film was the sole producer.
export function getWorkStructuredData(project: WorkEntry) {
  const url = absoluteUrl(`/work/${project.slug}`);
  const isMovie =
    project.type === "feature-film" ||
    project.type === "short-film" ||
    project.type === "documentary";

  return {
    "@context": "https://schema.org",
    "@type": isMovie ? "Movie" : "CreativeWork",
    "@id": `${url}#${isMovie ? "movie" : "work"}`,
    url,
    name: project.title,
    ...(project.originalTitle ? { alternateName: project.originalTitle } : {}),
    description: project.shortSynopsis,
    image: absoluteUrl(project.poster.src),
    ...(project.director
      ? {
          director: {
            "@type": "Person",
            name: project.director,
          },
        }
      : {}),
  };
}

// Individual team profile.
export function getTeamStructuredData(member: TeamMember) {
  const url = absoluteUrl(`/team/${member.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#webpage`,
    url,
    mainEntity: {
      "@type": "Person",
      "@id": `${url}#person`,
      name: member.name,
      jobTitle: member.role,
      description: member.shortBio,
      image: absoluteUrl(member.portrait.src),
      worksFor: {
        "@id": ORGANIZATION_ID,
      },
    },
  };
}
