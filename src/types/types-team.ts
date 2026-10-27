export const TEAM_TITLE_STATUS = ["provisional", "final"] as const;

export type TeamTitleStatus = (typeof TEAM_TITLE_STATUS)[number];

export const TEAM_LINK_PLATFORMS = [
  "IMDb",
  "ElCinema",
  "Vimeo",
  "LinkedIn",
  "YouTube",
  "Instagram",
  "Website",
] as const;

export type TeamLinkPlatform = (typeof TEAM_LINK_PLATFORMS)[number];

export type TeamImage = {
  src: string;
  alt: string;

  //! Optional positioning for portrait cropping
  objectPosition?: string;
};

export type TeamProfessionalLink = {
  platform: TeamLinkPlatform;
  url: string;
};

export const TEAM_CREDIT_SOURCES = [
  "IMDB",
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

  // External reference is optional
  source?: TeamCreditSource;
  url?: string;
};

export type TeamMember = {
  //? Identity
  id: string;
  slug: string;
  name: string;
  fullName?: string;

  //? Professional Role
  role: string;
  titleStatus: TeamTitleStatus;

  //? Editorial Content
  shortBio: string;
  biography: readonly string[];
  expertise: readonly string[];

  //?   Approved personal philosophy
  quote: string;

  //? Photography
  portrait: TeamImage;
  heroImage?: TeamImage;

  //? Professional Career
  credits: readonly TeamCredit[];
  links: readonly TeamProfessionalLink[];

  //? Website Presentation
  order: number;
  published: boolean;
};
