import { WorkEntry, WorkType } from "@/types/types-work";
import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  film: WorkEntry;
};

const workTypeLabels: Record<WorkType, string> = {
  "feature-film": "Feature Film",
  "short-film": "Short Film",
  series: "Series",
  documentary: "Documentary",
  commercial: "Commercial",
  "music-video": "Music Video",
  other: "Other",
  event: "Event",
  "media-coverage": "Media coverage",
};

export function WorkCard({ film }: WorkCardProps) {
  const filmUrl = `/work/${film.slug}`;

  return (
    <article className="flex h-full flex-col">
      {/* Project Metadata */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
          {workTypeLabels[film.type]}
        </p>

        {film.releaseYear !== undefined && (
          <p className="font-sans text-xs font-medium text-brand-beige/75">
            {film.releaseYear}
          </p>
        )}
      </div>

      {/* Poster */}
      <Link
        href={filmUrl}
        aria-label={`View ${film.title} Project`}
        className="group relative block aspect-3/4 w-full overflow-hidden rounded-xl bg-#272727 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
      >
        <Image
          src={film.poster.src}
          alt={film.poster.alt}
          fill
          sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 320px, 100vw"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
        />
      </Link>

      {/* Film Title */}
      <h3 className="mt-5 font-display text-[clamp(1.75rem,2.2vw,2.5rem)] leading-[1.1] text-brand-beige">
        <Link
          href={filmUrl}
          className="transition-colors duration-300 hover:text-brand-orange focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        >
          {film.title}
        </Link>
      </h3>

      {/* Synopsis */}
      <p className="mt-3 font-sans text-sm leading-relaxed text-brand-beige/85 md:text-base">
        {film.synopsis}
      </p>

      {/* Company Role */}
      <div className="mt-5 lg:mt-auto lg:pt-5">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
          Ninety 4 Film&apos; Role
        </p>

        <p className="mt-1.5 font-sans text-sm font-medium text-brand-beige">
          {film.companyRoles.join(" . ")}
        </p>
      </div>
    </article>
  );
}
