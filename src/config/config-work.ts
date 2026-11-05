import { WorkEntry } from "@/types/types-work";

export const work = [
  //? 1+1
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
    companyRoles: ["Production Execution"],
    companyRoleDescription:
      "Ninety 4 Film handled on-set production execution in collaboration with the project's production partners.",
    poster: {
      src: "/posters/1+1-poster-optimized.jpg",
      alt: "Official poster for 1+1",
      width: 749,
      height: 1000,
    },
    videos: [
      {
        kind: "Trailer",
        title: "1+1 (2022) | Official Trailer",
        youtubeUrl: "https://youtu.be/o-ZrkHXCBcY?si=F5eHSTUnbAIQyOiz",
      },
    ],
    director: "Alaa Mahmoud",
    writer: ["Alaa Mahmoud"],
    cast: ["Amir El-Masry", "Sarah Abd El-Rahman"],
    credits: [
      {
        role: "Cinematographer",
        name: "Mario Ghaly",
      },
      {
        role: "Editor",
        name: "Heba Othman",
      },
      {
        role: "Production Design",
        name: "Mai Gamal",
      },
      {
        role: "Line Producer",
        name: "Ahmed El-Ganzory",
      },
      {
        role: "Costume Designer",
        name: "Reem El-Adl",
      },
      {
        role: "Music Sound Design",
        name: "Hany Adel",
      },
    ],
    executiveProducer: "Ahmed Ehab El-Saeed, Moustafa Bahgat",
    runtimeMinutes: 13,
    languages: ["Arabic"],
    countries: ["Egypt"],
    festivals: [
      "Aswan International Women's Film Festival, Egypt",
      "Meta Film Festival, UAE",
      "Tripoli Film Festival, Lebanon",
      "Bahrain Film Festival",
      "Festival Mon Premier Film,France",
      "Sharm El-Sheikh Film Festival, Egypt",
      "Lavazza Inclucity Festival, Canansa",
      "Cairo International Short Film Festival, Egypt",
    ],
    links: [
      {
        label: "IMDb",
        url: "https://www.imdb.com/title/tt27720812/",
      },
    ],
    featured: true,
    featuredOrder: 3,
    published: true,
  },

  //? Meen Yesdak
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
      { label: "IMDb", url: "https://www.imdb.com/title/tt34823082/" },
      {
        label: "Cairo International Film Festival",
        url: "https://www.ciff.org.eg/ar/program/films/whod-believe-it",
      },
    ],
    synopsis:
      "Nadine, a young woman from a wealthy family, falls for Basem, only to discover that he has deceived her. Despite his betrayal, she joins him in a series of schemes targeting the rich to help the poor.",

    shortSynopsis:
      "After falling for a young con artist, Nadine joins him in a series of schemes targeting the wealthy to help the poor.",

    companyRoles: ["On-Set Production Execution"],
    companyRoleDescription:
      "Ninety 4 Film handled production budgeting, on-set execution, production team management, and delivery coordination.",

    poster: {
      src: "/posters/meen-yesdak-poster-optimized.jpg",
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
      { name: "Ahmed Ehab El-Saeed, Moustafa Bahgat", role: "Producer" },
      { name: "Abd El-Rahman ISO", role: "Cinematographer" },
      { name: "Nada Abd El-Hameed", role: "Production Designer" },
      { name: "Mohamed Soliman", role: "Editor" },
      { name: "Bassem Gamal", role: "Sound Engineer" },
      { name: "Omar Assar", role: "Executive Director" },
    ],

    languages: ["Arabic"],

    featured: true,
    featuredOrder: 1,
    published: true,
  },

  //? 44th Cairo International Film Festival
  {
    id: "n4f-61cb1da9",
    slug: "44th-cairo-international-film-festival",
    title: "44th Cairo International Film Festival",
    type: "media-coverage",
    status: "released",
    releaseYear: 2022,
    synopsis:
      "The Cairo International Film Festival (CIFF) stands as one of the oldest, most prestigious cultural institutions in the Arab world and Africa, holding the distinct honor of being the only festival in the region accredited as an A-category competitive festival by FIAPF (International Federation of Film Producers Associations). Held at the historic Cairo Opera House, the 44th edition served as a vital bridge between heritage and modern cinematic innovation, drawing prominent filmmakers, industry leaders, critics, and global talent for ten days of screenings, panel discussions, and international industry exchanges.",
    shortSynopsis:
      "Media coverage of the 44th Cairo International Film Festival, capturing its ceremonies, screenings, and cinematic celebrations.",
    companyRoles: ["Media Coverage"],
    companyRoleDescription:
      "Tasked with delivering full-spectrum media coverage for this landmark edition, our production company mobilized a multi-camera field unit and an agile post-production workflow to document the festival’s pulse in real time.",
    poster: {
      src: "/media/cairo-int-film.webp",
      alt: "cairo international film festival",
      width: 463,
      height: 662,
    },
    videos: [
      {
        kind: "Recap",
        title: "CIFFTV | CIFF44 | Glimpse of Closing Ceremony",
        youtubeUrl: "https://youtu.be/fl513_tqpjA?si=g4CjAj6m4bXpMiny",
      },
    ],
    credits: [
      {
        name: "Zena Abd El-Baky",
        role: "Media Coverage Director",
      },
      {
        name: "Youssef Ibrahim",
        role: "Director Of Photography",
      },
      {
        name: "Ahmed Badra",
        role: "Location Sound Engineer",
      },
      {
        name: "Habiba Khedr",
        role: "Line Producer",
      },
    ],
    executiveProducer: "Ahmed Ehab El-Saeed, Moustafa Bahgat",
    languages: [],
    countries: ["Egypt"],
    featured: true,
    featuredOrder: 2,
    published: true,
  },

  //? Triangle Of Love
  {
    id: "n4f-b4594787",
    slug: "triangle-of-love",
    title: "Triangle Of Love",
    originalTitle: "مثلث الحب",
    type: "documentary",
    status: "released",
    releaseYear: 2025,
    synopsis:
      "Two years after the passing of Dr. Maha—the woman who brought Alaa and Mustafa together—the couple sits down to reminisce, rekindling their deep affection for her and confronting the lingering grief of her loss. Across this reflective journey spanning the entire film, Alaa and Mustafa exchange long-suppressed thoughts and feelings, with every shared moment carrying them back to a time when Dr. Maha was still by their side.",
    shortSynopsis:
      "Two years after the loss of the mentor who brought them together, a couple spends an intimate evening unearthing long-buried feelings and revisiting memories of the woman who shaped their lives.",
    companyRoles: ["Post House"],
    companyRoleDescription:
      "Ninety 4 Film served as the complete post-production house, fulfilling the director's creative vision across editorial, color and final delivery.",
    poster: {
      src: "/media/triangle.webp",
      alt: "triangle of love official poster",
      width: 800,
      height: 1200,
    },
    director: "Alaa Mahmoud",
    writer: ["Alaa Mahmoud", "Moustafa Bahgat"],
    cast: [
      "Maha El-Shenawy",
      "Khaled Bahgat",
      "Moustafa Bahgat",
      "Alaa Mahmoud",
    ],
    credits: [
      {
        name: "Alaa Mahmoud, Alia Ibrahim",
        role: "Editor",
      },
      {
        name: "Tamer Carawan",
        role: "Musical Score",
      },
      {
        name: "Ahmed Gabr",
        role: "Sound Mix",
      },
      {
        name: "Aya Abd El-Kafy",
        role: "Colorist",
      },
      {
        name: "Mai Badr",
        role: "Post Producer",
      },
      {
        name: "Philopater Hany",
        role: "Graphics",
      },
    ],
    executiveProducer: "Moustafa Bahgat",
    runtimeMinutes: 84,
    languages: ["Arabic"],
    genres: ["Feature Documentary"],
    countries: ["Egypt"],
    festivals: [
      "World Premiere — 46th Cairo International Film Festival (2025), Special Screenings",
    ],
    featured: true,
    featuredOrder: 4,
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
