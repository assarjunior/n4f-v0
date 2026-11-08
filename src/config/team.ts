import type { TeamMember } from "@/types/types-team";

export const team = [
  //! 01 — AHMED EHAB ELSAEED

  {
    id: "n4f-team-001",
    slug: "ahmed-ehab",

    name: "Ahmed Ehab EL-Saeed",
    role: "CEO / Executive Producer",

    shortBio:
      "Ahmed Ehab is a film and television producer and CEO of Ninety 4 Film. Working in production since 2019, he specializes in production execution, project management, and coordinating the people and processes that bring screen projects to life.",

    biography: [
      "Ahmed Ehab Elsaeed is a film producer and CEO of Ninety 4 Film, with professional experience across film and television production since 2019.",

      "His work focuses on production execution, project management, and coordinating the different elements of a production. From planning and organization to managing the requirements of individual projects, his professional focus is on bringing structure and coordination to the filmmaking process.",

      "Ahmed graduated from the Faculty of Engineering and Technology at Future University in Egypt, specializing in Mechatronics Engineering.",
    ],

    expertise: [
      "Executive Production",
      "Film & Television Production",
      "Production Execution",
      "Project Management",
      "Production Coordination",
      "Operational Planning",
    ],

    quote:
      "The work behind the camera should give the story in front of it every chance to succeed.",

    portrait: {
      src: "/team/ahmed-ehab.jpeg",
      alt: "Portrait of Ahmed Ehab Elsaeed",
      objectPosition: "center 10%",
    },

    credits: [
      {
        title: "74th Police Day Celebrations",
        year: "2026",
        role: "Producer",
        source: "YouTube",
        url: "https://youtu.be/b6nj_0XatW0?si=tItJVtFHUQoVcVx3",
        artwork: {
          src: "/posters/polica-event.webp",
          alt: "police event official poster",
        },
      },
      {
        title: "National Bank of Egypt — TVC",
        year: "2025",
        role: "Producer",
        source: "YouTube",
        url: "https://youtu.be/UzLPAWT-uaM?si=URB1cs_9QcP-iszc",
        artwork: {
          src: "/posters/bank-ahly.jpeg",
          alt: "Official poster for bank ahly Add",
        },
      },
      {
        title: "Meen Yesadaq",
        role: "Producer",
        year: "2024",
        source: "ElCinema",
        url: "https://elcinema.com/work/2090320/",
        artwork: {
          src: "/posters/meen-yesdak-poster-optimized.jpg",
          alt: "Official Poster for meen yesadak",
        },
      },
      {
        title: "Love, Life & Everything in Between — Episode 5",
        role: "Production Assistant",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt18253682/?ref_=ext_shr_lnk",
        year: "2022",
        artwork: {
          src: "/media/love,life.webp",
          alt: "Love, Life & Everything in Between official poster",
        },
      },
      {
        title: "44th Cairo International Film Festival",
        role: "Media Coverage",
        year: "2022",
        artwork: {
          src: "/posters/cairo-int-film.jpeg",
          alt: "Official poster for cairo international film festival",
        },
      },
      {
        title: "1+1",
        role: "Executive Producer",
        year: "2021",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt27720812/",
        artwork: {
          src: "/posters/1+1-poster-optimized.jpg",
          alt: "Official poster for 1+1",
        },
      },
      {
        title: "Ansaf Maganeen",
        role: "Production Manager",
        year: "2021",
        source: "ElCinema",
        url: "https://elcinema.com/work/2067079/",
        artwork: {
          src: "/posters/ansaf-maganen.jpg",
          alt: "Official poster for ansaf maganen",
        },
      },
    ],

    order: 1,
    published: true,
  },

  //! 02 — OMAR ASSAR

  {
    id: "n4f-team-002",
    slug: "omar-assar",
    name: "Omar Assar",
    role: "Director",
    shortBio:
      "Omar Assar is an Egyptian film director, producer and co-founder of Ninety 4 Film. A graduate of the Higher Institute of Cinema's Directing Department, his experience spans film, television, commercials, music videos, and theatre, combining visual storytelling with an understanding of production and performance.",
    biography: [
      "Omar Assar is an Egyptian film director, Producer and co-founder of Ninety 4 Film. A graduate of the Higher Institute of Cinema's Directing Department, he has developed a career spanning feature films, television series, commercials, music videos, and theatrical productions.",
      "His experience as a First Assistant Director includes Al Frensawy (2026), Walad Bent Shayeb (2025), Ala Nesbet Moshahda (2024), and Wesh W Dahr (2022). He also served as Executive Director on the feature film Meen Yesadaq (2024). These experiences have strengthened his understanding of the relationship between creative direction, performance, and the practical demands of production.",
      "Alongside his work on larger productions, Omar has directed independent short films, music videos, and theatrical performances, including Louder Than Shame (2026).",
      "His approach to filmmaking brings together visual storytelling, performance-driven direction, and an understanding of both the artistic and technical sides of the filmmaking process. Through Ninety 4 Film, he contributes to the company's creative development, directing approach, and the process of translating ideas into screen productions.",
    ],
    expertise: [
      "Film Directing",
      "Visual Storytelling",
      "Creative Development",
      "Performance Direction",
      "Assistant Directing",
      "Production Planning",
    ],
    quote:
      "Every frame should make you feel something. Every decision behind it should help make that feeling possible.",

    portrait: {
      src: "/media/497714934_10232050351896485_4138977675105830512_n.webp",
      alt: "Omar Assar on a film production set",
    },

    directoryPortrait: {
      src: "/team/omar-assar-directory.webp",
      alt: "Omar Assar on a film production set",
      objectPosition: "center",
    },

    credits: [
      {
        title: "Al Frensawy",
        year: "2026",
        role: "First Assistant Director",
        source: "ElCinema",
        url: "https://elcinema.com/work/2098504",
        artwork: {
          src: "/media/671975295_122125721517170344_8371973076470749313_n.webp",
          alt: "el faransawy offical poster",
        },
      },
      {
        title: "Louder Than Shame",
        year: "2026",
        role: "Director",
        artwork: {
          src: "/media/630855422_18552226714042080_6916410836148454564_n.webp",
          alt: "louder than shame picture",
        },
      },
      {
        title: "Walad Bent Shayeb",
        year: "2025",
        role: "First Assistant Director",
        source: "ElCinema",
        url: "https://elcinema.com/work/2095533/",
        artwork: {
          src: "/media/545698457_806923168365449_4829585139458908500_n.webp",
          alt: "walad we bent we shayeb official poster",
        },
      },
      {
        title: "Meen Yesadaq",
        year: "2024",
        role: "Executive Director",
        source: "ElCinema",
        url: "https://elcinema.com/work/2090320/",
        artwork: {
          src: "/media/meen-yesdak-poster.webp",
          alt: "meen yesdak official poster",
        },
      },
      {
        title: "Ala Nesbet Moshahda",
        year: "2024",
        role: "First Assistant Director",
        source: "ElCinema",
        url: "https://elcinema.com/work/2083749/",
        artwork: {
          src: "/media/_-_-_-_.webp",
          alt: "ala nesbet mosahda official poster",
        },
      },
      {
        title: "Taghyeer Gaw",
        year: "2023",
        role: "First Assistant Director",
        source: "ElCinema",
        url: "https://elcinema.com/work/2077515/",
        artwork: {
          src: "/media/images.webp",
          alt: "taghyer gaw official poster",
        },
      },
      {
        title: "Wesh W Dahr",
        year: "2022",
        role: "First Assistant Director",
        source: "ElCinema",
        url: "https://elcinema.com/work/2074439/",
        artwork: {
          src: "/media/474618301_1152987096414808_2742276285382818859_n.webp",
          alt: "wesh we dahr official poster",
        },
      },
    ],
    order: 2,
    published: true,
  },

  //! 03 — AHMED EL-GANZORY

  {
    id: "n4f-team-003",
    slug: "ahmed-ganzory",

    name: "Ahmed El-Ganzory",
    role: "Producer",

    shortBio:
      "Ahmed El-Ganzory is a co-founder and producer at Ninety 4 Film, with experience in production coordination, line production, and unit production management. His work spans scripted television, short films, and major film industry events, with a focus on production operations.",

    biography: [
      "Ahmed El-Ganzory is a co-founder and producer at Ninety 4 Film whose experience spans scripted television, short films, and major film industry events.",

      "Working across production coordination, line production, and unit production management, Ahmed has developed a practical understanding of the workflows, personnel, and logistical requirements involved in bringing audiovisual projects to life.",

      "His professional credits include Ansaf Maganen (Parts 1 and 2), produced for VIU, and the Netflix production Love, Life & Everything in Between, where he worked as a Production Assistant on Episode 5, National Day of Mourning in Mexico.",

      "He also served as Line Producer on the short film 1+1 and Unit Production Manager for the 2020 Cairo International Film Festival.",

      "Through his work, Ahmed brings experience in coordinating production requirements across different formats, supporting the relationship between creative objectives and practical execution.",
    ],

    expertise: [
      "Film & Television Production",
      "Line Production",
      "Unit Production Management",
      "Production Coordination",
      "Production Logistics",
    ],

    quote:
      "The strength of a production lies in the details no one sees, but everyone feels.",

    portrait: {
      src: "/media/ahmed-ganzory.jpeg",
      alt: "Portrait of Ahmed El-Ganzory",
    },

    credits: [
      {
        title: "Love, Life & Everything in Between — Episode 5",
        role: "Production Assistant",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt18253682/?ref_=ext_shr_lnk",
        year: "2022",
        artwork: {
          src: "/media/love,life.webp",
          alt: "Love, Life & Everything in Between official poster",
        },
      },
      {
        title: "Ansaf Maganeen",
        role: "Production Manager",
        year: "2021",
        source: "ElCinema",
        url: "https://elcinema.com/work/2067079/",
        artwork: {
          src: "/posters/ansaf-maganen.jpg",
          alt: "Official poster for ansaf maganen",
        },
      },
      {
        title: "1+1",
        year: "2021",
        role: "Line Producer",
        artwork: {
          src: "/posters/1+1-poster-optimized.jpg",
          alt: "Official poster for 1+1",
        },
        source: "IMDb",
        url: "https://www.imdb.com/title/tt27720812/",
      },
      {
        title: "44th Cairo International Film Festival",
        role: "Media Coverage",
        year: "2022",
        artwork: {
          src: "/posters/cairo-int-film.jpeg",
          alt: "Official poster for cairo international film festival",
        },
      },
      {
        title: "Cairo International Film Festival",
        year: "2020",
        role: "Unit Production Manager",
        artwork: {
          src: "/media/cairo international.webp",
          alt: "Cairo International Film Festival official poster",
        },
      },
    ],

    order: 3,
    published: true,
  },

  //! 04 — ADHAM HAMED

  {
    id: "n4f-team-004",
    slug: "adham-hamed",

    name: "Adham Hamed",

    role: "Head of Post-Production",

    shortBio:
      "Adham Hamed is Head of Post-Production at Ninety 4 Film, bringing 14 years of cinematography experience across television, feature films, commercials, and digital media. His expertise spans editing, color grading, HDR and Dolby Vision workflows, and post-production supervision, connecting creative storytelling with the technical demands of finishing.",

    biography: [
      "Adham Ehab Hamed is Head of Post-Production at Ninety 4 Film, with 14 years of experience in cinematography across television series, feature films, commercials, and digital media.",

      "Beginning his career at a young age as a production coordinator, Adham developed his understanding of production workflows before progressing into post-production leadership.",

      "His expertise spans cinematography, editing, color grading, HDR and Dolby Vision workflows, and post-production supervision. Drawing on his experience both on set and in post-production, he brings an understanding of how decisions made during filming shape the creative and technical possibilities of the finished work.",

      "At Ninety 4 Film, Adham oversees post-production from editorial through mastering and final delivery. His work focuses on coordinating workflows while maintaining image quality, visual consistency, and the creative intention behind each project.",
    ],

    expertise: [
      "Post-Production Supervision",
      "Cinematography",
      "Editing",
      "Color Grading",
      "HDR & Dolby Vision",
      "Mastering & Delivery",
    ],

    quote:
      "A story doesn't end when the camera stops rolling. Every decision in post-production is another opportunity to shape what the audience feels.",

    portrait: {
      src: "/media/WhatsApp-Image-2026-11-05-at-15.51.11.webp",
      alt: "adham hamed posing in picutre",
      objectPosition: "center 5%",
    },

    credits: [
      {
        title: "Faat El Maad",
        year: "2025",
        role: "In house Post Producer",
        source: "ElCinema",
        url: "https://elcinema.com/work/2093972/gallery/124623637/",
        artwork: {
          src: "/media/_640x_d7f970bed802cb38dd14fa8a592b3d7aab5ddd5d3d436a8f1de14015a63e4f00.webp",
          alt: "faat el maad offcial poster",
        },
      },
      {
        title: "El Captain",
        year: "2025",
        role: "In house Post Producer",
        source: "ElCinema",
        url: "https://elcinema.com/work/2090081/",
        artwork: {
          src: "/media/elcaptain.webp",
          alt: "el captain official poster",
        },
      },
      {
        title: "Adel Mesh Adel",
        year: "2024",
        role: "In house Post Producer",
        source: "ElCinema",
        url: "https://elcinema.com/work/2083197/",
        artwork: {
          src: "/media/WhatsApp-Image-2026-11-03-at-22.14.00-1.webp",
          alt: "adel mesh adel official poster",
        },
      },
      {
        title: "El Batta El Safra",
        year: "2023",
        role: "In house Post Producer",
        source: "ElCinema",
        url: "https://elcinema.com/work/2077794/",
        artwork: {
          src: "/media/WhatsApp-Image-2026-11-03-at-22.14.00.webp",
          alt: "el batta el safra official poster",
        },
      },
      {
        title: "Qabeel",
        year: "2019",
        role: "Focus Puller",
        source: "ElCinema",
        url: "https://elcinema.com/work/2056050/",
        artwork: {
          src: "/media/kabel.webp",
          alt: "kabel official poster",
        },
      },
      {
        title: "Kaeno Embareh",
        year: "2018",
        role: "Focus Puller",
        source: "ElCinema",
        url: "https://elcinema.com/work/2048659/",
        artwork: {
          src: "/media/kaeno-embareh.webp",
          alt: "Kaeeno embareh official poster",
        },
      },
      {
        title: "Haza Al Masaa",
        year: "2017",
        role: "Focus Puller",
        source: "ElCinema",
        url: "https://elcinema.com/work/2045613/",
        artwork: {
          src: "/media/haza-el-masaa.webp",
          alt: "haza el masaa official poster",
        },
      },
      {
        title: "Shahadat Melad",
        year: "2016",
        role: "Focuser Puller",
        source: "ElCinema",
        url: "https://elcinema.com/work/2040991/",
        artwork: {
          src: "/media/shehdet-melad.webp",
          alt: "shehadet melad official poster",
        },
      },
    ],
    order: 4,
    published: true,
  },

  //! 05 - Edward Nabil
  {
    id: "n4f-team-b9d66376",
    slug: "edward-nabil",
    name: "Edward Nabil",
    role: "Head of Production",
    shortBio:
      "Edward Nabil is the Head of Production at Ninety 4 Film, with over 20 years of experience in the film and entertainment industry. Since 2005, he has worked across feature films, television series, commercials, TV programs, and music videos, specializing in production management, budgeting, crew coordination, and production execution.",
    biography: [
      "Edward Nabil is the Head of Production at Ninety 4 Film, bringing over two decades of experience in the film and entertainment industry. Since beginning his career in 2005, he has worked across a wide range of productions, including feature films, television series, commercials, television programs, and music videos.",
      "Throughout his career, Edward has contributed to several notable productions, including the television series Lams Aktaf (2019) and Hadouta Morra (2019), as well as the feature films El Diesel (2018) and Alb Omo (2018). His production credits also include the National Bank of Egypt’s Ramadan 2025 advertising campaign.",
      "With extensive hands-on experience, Edward specializes in production management, production supervision, budget management, crew coordination, and production execution. His approach focuses on turning creative concepts into successful productions through effective planning, strong teamwork, problem-solving, and attention to detail.",
    ],
    expertise: [
      "Production Management",
      "Production Supervision",
      "Production Execution",
      "Budget Management",
      "Crew Management",
      "Production Planning",
    ],
    quote:
      "Successful production is about turning creative vision into reality through smart planning, strong teamwork, and the ability to overcome every challenge. Every detail matters when delivering excellence.",
    portrait: {
      src: "/media/edward-nabil.webp",
      alt: "edward nabil profile picture",
    },
    credits: [
      {
        title: "Lams Aktaf",
        year: "2019",
        role: "Head of Production",
        source: "ElCinema",
        url: "https://elcinema.com/work/2054313/",
        artwork: {
          src: "/media/lams-aktaf.webp",
          alt: "lams aktaf official poster",
        },
      },
      {
        title: "Hadouta Morra",
        year: "2019",
        role: "Head of Production",
        source: "ElCinema",
        url: "https://elcinema.com/work/2055958/",
        artwork: {
          src: "/media/hadota-morra.webp",
          alt: "Hadouta Morra official poster",
        },
      },
      {
        title: "El Diesel",
        year: "2018",
        role: "Head of Production",
        source: "ElCinema",
        url: "https://elcinema.com/work/2047852/",
        artwork: {
          src: "/media/eldiesel.webp",
          alt: "El deisel official poster",
        },
      },
      {
        title: "Alb Omo",
        year: "2018",
        role: "Head of Production",
        source: "ElCinema",
        url: "https://elcinema.com/work/2051036/",
        artwork: {
          src: "/media/alb-omo.webp",
          alt: "Alb omo official poster",
        },
      },
      {
        title: "National Bank of Egypt — TVC",
        year: "2025",
        role: "Head of Production",
        source: "YouTube",
        url: "https://youtu.be/UzLPAWT-uaM?si=URB1cs_9QcP-iszc",
        artwork: {
          src: "/media/bank-ahly.webp",
          alt: "bank ahly official poster",
        },
      },
    ],
    order: 5,
    published: true,
  },

  //! 05 - Farris Hanafy
  {
    id: "n4f-team-bf28585f",
    slug: "farris-hanafy",
    name: "Farris Hanafy",
    role: "Production Coordinator",
    shortBio:
      "Farris Hanafy is a production coordinator and public relations professional whose work brings together project management, client relations, and creative production.",
    biography: [
      "Farris Hanafy is a production coordinator and public relations professional whose work brings together project management, client relations, and creative production.",
      "He coordinates production schedules, supports collaboration across teams, and manages communication with clients and partners. Alongside this work, Farris is a creative writer, voice actor, and voice-over artist working in English and Arabic. His experience on both the creative and operational sides of media gives him a well-rounded understanding of how to bring a production from concept to completion.",
    ],
    expertise: [
      "Production Coordination between departments.",
      "Production workflow and logistics optimization.",
      "Client Relations.",
      "Creative Conceptualization & Development.",
    ],
    quote:
      "Some days you tell the story. Some days you help someone else tell theirs. Both matter.",
    portrait: {
      src: "/media/WhatsApp-Image-2026-11-03-at-21.58.02.webp",
      alt: "farris hanafy public image",
    },
    credits: [
      {
        title: "Fat El Ma'ad",
        year: "2025",
        role: "Post-Production Supervisor",
        source: "ElCinema",
        url: "https://elcinema.com/work/2093972/",
        artwork: {
          src: "/media/WhatsApp-Image-2026-11-03-at-22.14.00-2.webp",
          alt: "fat el maad official poster",
        },
      },
      {
        title: "Dhibat Al Mahal",
        year: "2025",
        role: "VO & Post-Production Supervisor",
        artwork: {
          src: "/media/Screenshot-2026-11-03-at-10.38.22-PM.webp",
          alt: "dhibet el mahal official poster",
        },
      },
      {
        title: "Adel Mesh Adel",
        year: "2024",
        role: "Post-Production Supervisor",
        url: "https://elcinema.com/work/2083197/",
        source: "ElCinema",
        artwork: {
          src: "/media/WhatsApp-Image-2026-11-03-at-22.14.00-1.webp",
          alt: "adel mesh adel official poster",
        },
      },
      {
        title: "El Bata El Safra",
        year: "2023",
        role: "Post-Production Supervisor",
        url: "https://elcinema.com/work/2077794/",
        source: "ElCinema",
        artwork: {
          src: "/media/WhatsApp-Image-2026-11-03-at-22.14.00.webp",
          alt: "el batta el safra official poster",
        },
      },
      {
        title: "#Gawwezni",
        year: "2022",
        role: "Executive Producer",
        url: "https://elcinema.com/work/2076309/",
        source: "ElCinema",
        artwork: {
          src: "/media/WhatsApp-Image-2026-11-03-at-22.14.00-3.webp",
          alt: "hashtag gawezny official poster",
        },
      },
    ],
    order: 6,
    published: true,
  },
] as const satisfies readonly TeamMember[];

//! TYPED DATA SOURCE

const teamEntries: readonly TeamMember[] = team;

//! PUBLIC TEAM DIRECTORY

export function getPublishedTeam(): readonly TeamMember[] {
  return teamEntries
    .filter((member) => member.published)
    .sort((a, b) => a.order - b.order);
}

//! INDIVIDUAL TEAM PROFILE

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamEntries.find((member) => member.slug === slug && member.published);
}

//! NEXT.JS STATIC PARAMETER GENERATION

export function getTeamSlugs(): string[] {
  return getPublishedTeam().map((member) => member.slug);
}
