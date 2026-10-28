import { WorkEntry } from "@/types/types-work";

export const work = [
  {
    id: "n4f-001",
    slug: "1-plus-1",

    title: "1+1",
    type: "short-film",
    status: "released",
    releaseYear: 2021,

    synopsis:
      "In the aftermath of a devastating war, a man and a woman from opposing sides are the last survivors in a ruined city. Forced to coexist, they must choose between continuing their conflict and finding a way to live in peace.",

    shortSynopsis:
      "Two survivors from opposing sides of a devastating war must choose between continuing their conflict and finding a way to live in peace.",

    companyRoles: ["Executive Producer"],
    companyRoleDescription:
      "Handling the project from development to the final delivery getting the crew all together and step by step oversight over the entire project",

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
    releaseYear: 2024,
    director: "Zena Abd El-Baky",
    writer: ["Zena Abd El-Baky", "Moustafa Bahgat", "Moustafa Askar"],
    executiveProducer: "Mohamed Abd El-Wahab",
    runtimeMinutes: 124,
    countries: ["Egypt"],
    cast: [
      "Youssef Omar",
      "Jayda Mansour",
      "Ashraf Abd El-Baky",
      "Sherif Moneer",
    ],
    genres: ["Romance"],
    links: [
      { label: "El Cinema", url: "https://elcinema.com/work/2090320" },
      { label: "IMDB", url: "https://www.imdb.com/title/tt34823082/" },
      {
        label: "Cairo International Film Festival",
        url: "https://www.ciff.org.eg/ar/program/films/whod-believe-it",
      },
    ],
    synopsis:
      "Nadine, a young woman from a wealthy family, falls for Basem, only to discover that he has deceived her. Despite his betrayal, she joins him in a series of schemes targeting the rich to help the poor.",

    shortSynopsis:
      "After falling for a young con artist, Nadine joins him in a series of schemes targeting the wealthy to help the poor.",

    companyRoles: ["Executive Producer"],
    companyRoleDescription:
      "Handling the project from development to the final delivery getting the crew all together and step by step oversight over the entire project",

    poster: {
      src: "/posters/meen-yesdak-poster.png",
      alt: "official poster for Meen Yesdak",
      width: 1600,
      height: 2139,
    },

    videos: [
      {
        kind: "Trailer",
        title: "Official Theatrical Trailer",
        youtubeUrl: "https://youtu.be/uRJb9VtCmTY?si=Sr2lGC3rWCc0gXJU",
      },
    ],

    credits: [
      { name: "Ahmed Ehab, Moustafa Bahgat", role: "Producer" },
      { name: "Abd El-Rahman ISO", role: "Cinematographer" },
      { name: "Nada Abd El-Hameed", role: "Production Designer" },
      { name: "Mohamed Soliman", role: "Editor" },
      { name: "Bassem Gamal", role: "Sound Engineer" },
      { name: "Omar Assar", role: "First Assistant Director" },
    ],

    languages: ["Arabic"],

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
