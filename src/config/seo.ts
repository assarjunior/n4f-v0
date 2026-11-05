export type SeoEntry = {
  title: string;
  description: string;
};

type MainPage = "home" | "company" | "services" | "work" | "contact";

export const seoCopy: {
  pages: Record<MainPage, SeoEntry>;
  work: Record<string, SeoEntry>;
  team: Record<string, SeoEntry>;
} = {
  pages: {
    home: {
      title: "Ninety 4 Film | Film & Television Production in Egypt",
      description:
        "Ninety 4 Film is an Egypt-based production company connecting creative ambition with production execution across films, series, commercials and more.",
    },

    company: {
      title: "About Us | Ninety 4 Film",
      description:
        "Meet Ninety 4 Film, an Egypt-based production company bringing creative vision, collaboration and disciplined production execution together.",
    },

    services: {
      title: "Film & TV Production Services in Egypt | Ninety 4 Film",
      description:
        "Explore Ninety 4 Film's production services for films, television series, commercials, music videos and production support in Egypt.",
    },

    work: {
      title: "Selected Film & Television Work | Ninety 4 Film",
      description:
        "Explore productions Ninety 4 Film helped bring to screen, including 1+1 and Meen Yesdak, with project details and credited production roles.",
    },

    contact: {
      title: "Contact Ninety 4 Film | Ninety 4 Film",
      description:
        "Discuss your next film, series, commercial or production in Egypt with Ninety 4 Film. Contact our team directly by email or WhatsApp.",
    },
  },

  work: {
    "1-plus-1": {
      title: "1+1 (2021) — Production Execution | Ninety 4 Film",
      description:
        "Discover 1+1, the 2021 short film directed by Alaa Mahmoud, and Ninety 4 Film's collaborative production execution on the project.",
    },

    "meen-yesdak": {
      title: "Meen Yesdak (2024) — Production Execution | Ninety 4 Film",
      description:
        "Explore Meen Yesdak (مين يصدق), directed by Zena Abd El-Baky, and Ninety 4 Film's work on production budgeting, on-set execution and delivery coordination.",
    },

    "44th-cairo-international-film-festival": {
      title:
        "44th Cairo International Film Festival (2022) — Media Coverage | Ninety 4 Film",
      description:
        "Explore Ninety 4 Film's media coverage of the 44th Cairo International Film Festival in 2022, documenting the festival's events and closing ceremony.",
    },
    "triangle-of-love": {
      title: "Triangle of Love (2025) — Documentary | Ninety 4 Film",
      description:
        "Explore Triangle of Love (مثلث الحب), a 2025 feature documentary directed by Alaa Mahmoud, with complete post-production by Ninety 4 Film.",
    },
  },

  team: {
    "ahmed-ehab": {
      title: "Ahmed Ehab EL-Saeed — CEO & Executive Producer | Ninety 4 Film",
      description:
        "Meet Ahmed Ehab EL-Saeed, CEO and Executive Producer at Ninety 4 Film, specializing in film and television production execution and project management.",
    },

    "omar-assar": {
      title: "Omar Assar — Director & Co-Founder | Ninety 4 Film",
      description:
        "Meet Omar Assar, Egyptian film director and co-founder of Ninety 4 Film, with experience in directing, visual storytelling and assistant directing.",
    },

    "ahmed-ganzory": {
      title: "Ahmed El-Ganzory — Co-Founder & Producer | Ninety 4 Film",
      description:
        "Meet Ahmed El-Ganzory, co-founder and producer at Ninety 4 Film, with experience in line production, unit production management, and production coordination.",
    },

    "adham-hamed": {
      title: "Adham Hamed — Head of Post-Production | Ninety 4 Film",
      description:
        "Meet Adham Hamed, Head of Post-Production at Ninety 4 Film, specializing in editing, color grading, finishing and production-to-post workflows.",
    },
    "farris-hanafy": {
      title: "Farris Hanafy — Production Coordinator | Ninety 4 Film",
      description:
        "Meet Farris Hanafy, Production Coordinator at Ninety 4 Film, with experience in project management, client relations, and creative production.",
    },
  },
};
