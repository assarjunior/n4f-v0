export type TeamImage = {
  src: string;
  alt: string;

  //! Optional positioning for portrait cropping
  objectPosition?: string;
};

export const TEAM_CREDIT_SOURCES = [
  "IMDb",
  "ElCinema",
  "YouTube",
  "Instagram",
  "Vimeo",
  "Facebook",
  "Official Website",
  "Other",
] as const;

export type TeamCreditSource = (typeof TEAM_CREDIT_SOURCES)[number];

export type TeamCredit = {
  title: string;
  year?: string;
  role?: string;
  source?: TeamCreditSource;
  url?: string;

  //! Poster, key art, event artwork, or production still
  artwork?: TeamImage;
};

export type TeamMember = {
  //? Identity
  id: string;
  slug: string;
  name: string;

  //? Professional Role
  role: string;

  //? Editorial Content
  shortBio: string;
  biography: readonly string[];
  expertise: readonly string[];

  //?   Approved personal philosophy
  quote: string;

  //? Photography
  portrait: TeamImage;
  //! Optional image specifically cropped for the team directory.
  //! Falls back to portrait when omitted.
  directoryPortrait?: TeamImage;

  //? Professional Career
  credits: readonly TeamCredit[];

  //? Website Presentation
  order: number;
  published: boolean;
};
