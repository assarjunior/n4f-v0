export const WORK_TYPES = [
  "feature-film",
  "short-film",
  "series",
  "documentary",
  "commercial",
  "music-video",
  "other",
] as const;

export type WorkType = (typeof WORK_TYPES)[number];

export const WORK_STATUS = [
  "development",
  "pre-production",
  "production",
  "post-production",
  "completed",
  "released",
] as const;

export type WorkStatus = (typeof WORK_STATUS)[number];

export const PRODUCTION_ROLES = [
  "Executive Producer",
  "Producer",
  "Co-Producer",
  "Production Services",
  "Post-Production",
  "Creative Development",
  "Other",
] as const;

export type ProductionRole = (typeof PRODUCTION_ROLES)[number];

export type WorkCredit = {
  name: string;
  role: string;
};

export type WorkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type WorkLink = {
  label: string;
  url: string;
};

export type WorkEntry = {
  //? Identity
  id: string;
  slug: string;

  //? Core information
  title: string;
  originalTitle?: string;
  type: WorkType;
  status: WorkStatus;
  releaseYear?: number;

  //? Editorial Content
  synopsis: string;
  shortSynopsis: string;

  //? Ninety 4 film involvement
  companyRoles: readonly ProductionRole[];
  companyRoleDescription?: string;

  //? Artwork
  poster: WorkImage;
  heroImage?: WorkImage;
  gallery?: readonly WorkImage[];

  //? Production information
  director?: string;
  writer?: readonly string[];
  cast?: readonly string[];
  credits?: readonly WorkCredit[];

  //? Additional Information
  runtimeMinutes?: number;
  languages?: readonly string[];
  genres?: readonly string[];
  countries?: readonly string[];

  //? Recognition and external links
  festivals?: readonly string[];
  awards?: readonly string[];
  links?: readonly WorkLink[];

  //! Website Presentation
  featured: boolean;
  featuredOrder: number;
  published: boolean;
};
