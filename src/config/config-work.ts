import { WorkEntry } from "@/types/types-work";

export const work = [
  {
    id: "n4f-001",
    slug: "1-plus-1",

    title: "1+1",
    type: "short-film",
    status: "released",

    synopsis:
      "In the aftermath of a devastating war, a man and a woman from opposing sides are the last survivors in a ruined city. Forced to coexist, they must choose between continuing their conflict and finding a way to live in peace.",

    shortSynopsis:
      "Two survivors from opposing sides of a devastating war must choose between continuing their conflict and finding a way to live in peace.",

    companyRoles: ["Executive Producer"],

    poster: {
      src: "/posters/1+1-poster.png",
      alt: "Official poster for 1+1",
      width: 750,
      height: 1000,
    },

    director: "Alaa Mahmoud",
    featured: true,
    featuredOrder: 1,
    published: true,
  },

  {
    id: "n4f-002",
    slug: "meen-yesdak",

    title: "Meen Yesdak",
    originalTitle: "مين يصدق",
    type: "feature-film",
    status: "released",

    synopsis:
      "Nadine, a young woman from a wealthy family, falls for Basem, only to discover that he has deceived her. Despite his betrayal, she joins him in a series of schemes targeting the rich to help the poor.",

    shortSynopsis:
      "After falling for a young con artist, Nadine joins him in a series of schemes targeting the wealthy to help the poor.",

    companyRoles: ["Executive Producer"],

    poster: {
      src: "/posters/meen-yesdak-poster.png",
      alt: "official poster for Meen Yesdak",
      width: 1600,
      height: 2139,
    },

    featured: true,
    featuredOrder: 2,
    published: true,
  },
] as const satisfies readonly WorkEntry[];

const workEntries: readonly WorkEntry[] = work;

//! Public work archive
export function getPublishedWork(): readonly WorkEntry[] {
  return workEntries.filter((entry) => entry.published);
}

export const MAX_FEATURED_WORK = 4;
//! Homepage featured work
export function getFeaturedWork(): readonly WorkEntry[] {
  return workEntries
    .filter((entry) => entry.published && entry.featured)
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
    )
    .slice(0, MAX_FEATURED_WORK);
}

//! Individual Project pages
export function getWorkBySlug(slug: string): WorkEntry | undefined {
  return workEntries.find((entry) => entry.slug === slug && entry.published);
}

//!Static generation for Next.js
export function getWorkSlugs(): string[] {
  return getPublishedWork().map((entry) => entry.slug);
}
