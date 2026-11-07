import { getPublishedWork } from "@/config/config-work";
import { seoCopy } from "@/config/seo";
import { createSocialMetadata } from "@/lib/social-metadata";
import { WorkEntry, WorkType } from "@/types/types-work";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

const workTypeLabels: Record<WorkType, string> = {
  "feature-film": "Feature Film",
  "short-film": "Short Film",
  series: "Series",
  documentary: "Documentary",
  commercial: "Commercial",
  "music-video": "Music Video",
  other: "Other",
  event: "Event",
  "media-coverage": "Media Coverage",
};

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.work.title,
  },
  description: seoCopy.pages.work.description,
  alternates: {
    canonical: "/work",
  },
  ...createSocialMetadata(
    "/work",
    seoCopy.pages.work,
    "/og/company",
    "Ninety 4 Film — Selected Productions",
  ),
};

function ArchiveProjectCard({
  project,
  index,
}: {
  project: WorkEntry;
  index: number;
}) {
  const href = `/work/${project.slug}`;

  return (
    <li
      className="n4f-hero-reveal min-w-0"
      style={{ animationDelay: `${850 + index * 150}ms` }}
    >
      <article className="group flex h-full flex-col">
        {/* Project Poster */}
        <Link
          href={href}
          aria-label={`Explore ${project.title}`}
          className="relative block aspect-3/4 overflow-hidden border border-brand-beige/20 bg-[#32110E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        >
          <Image
            src={project.poster.src}
            alt={project.poster.alt}
            fill
            sizes="(max-width: 639px) 100vw,
                     (max-width: 1023px) 50vw,
                     440px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
          />

          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 flex size-5 items-center justify-center bg-brand-orange text-brand-maroon"
          >
            <ArrowUpRight strokeWidth={1.5} className="size-4" />
          </span>
        </Link>

        {/* Production Metadata */}
        <div className="mt-5 flex items-center justify-between gap-4 font-sans text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="text-brand-orange">
            {workTypeLabels[project.type]}
          </span>

          {project.releaseYear && (
            <span className="text-brand-beige/70">{project.releaseYear}</span>
          )}
        </div>

        {/* Title */}
        <h2 className="mt-4 font-display text-[clamp(1.6rem,2vw,2.25rem)] leading-[1.12] tracking-tight text-brand-beige wrap-break-word">
          <Link
            href={href}
            className="transition-colors duration-300 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange motion-reduce:transition-none"
          >
            {project.title}
          </Link>
        </h2>

        {/* Optional Original Title */}
        {project.originalTitle && (
          <p
            className="mt-2 font-sans text-lg text-brand-beige/75"
            lang="ar"
            dir="rtl"
          >
            {project.originalTitle}
          </p>
        )}

        {/* Short Synopsis */}
        <p className="mt-3 font-sans text-sm leading-[1.65] text-brand-beige/80">
          {project.shortSynopsis}
        </p>

        {/* Company Role and navigation */}
        <div className="mt-auto flex flex-col gap-4 pt-5">
          <div className="border-t border-brand-beige/20 pt-5">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              Ninety 4 Film Involvement
            </p>

            <p className="mt-2 font-sans text-sm text-brand-beige">
              {project.companyRoles.join(" / ")}
            </p>
          </div>
          <Link
            href={href}
            className="flex w-fit items-center gap-3 border-b border-brand-orange pb-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-beige transition-colors duration-300 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange motion-reduce:transition-none"
          >
            Explore Project
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-5 text-brand-orange"
            />
          </Link>
        </div>
      </article>
    </li>
  );
}

export default function WorkPage() {
  const projects = [...getPublishedWork()].sort(
    (a, b) => (b.releaseYear ?? 0) - (a.releaseYear ?? 0),
  );
  return (
    <ViewTransition enter="n4f-page-enter" exit="n4f-page-exit" default="none">
      <main id="main-content" className="flex-1 bg-brand-maroon">
        {/* Work Hero */}
        <section
          aria-labelledby="work-heading"
          className="bg-brand-beige text-brand-maroon"
        >
          <div className="container-editorial py-20 md:py-28 lg:py-12">
            <div
              className="n4f-hero-reveal mb-10 flex items-center gap-4 md:mb-14 lg:mb-8"
              style={{ animationDelay: "150ms" }}
            >
              <span aria-hidden="true" className="h-px w-10 bg-brand-maroon" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-maroon">
                Ninety 4 Film / Our Work
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-12">
              <h1
                id="work-heading"
                className="n4f-hero-reveal font-display text-[clamp(3.5rem,8vw,9rem)] leading-[0.96] tracking-[-0.035em] lg:text-[clamp(5rem,6.5vw,7rem)]"
                style={{ animationDelay: "350ms" }}
              >
                OUR
                <br />
                WORK
                <span className="text-brand-orange">.</span>
              </h1>

              <div
                className="n4f-hero-reveal max-w-2xl"
                style={{ animationDelay: "550ms" }}
              >
                <div
                  className="mb-7 h-1 w-16 bg-brand-orange"
                  aria-hidden="true"
                />

                <div className="space-y-5 font-sans text-base leading-[1.8] text-brand-maroon/85 md:text-lg lg:space-y-4 lg:text-base lg:leading-[1.65]">
                  <p>
                    Our portfolio brings together feature films, short films,
                    documentaries, and major film industry events. Each project
                    represents a different creative ambition, production
                    challenge, and collaboration.
                  </p>

                  <p>
                    Our involvement spans production planning, on-set execution,
                    media coverage, full post house services, and final
                    delivery. Beyond production and post-production, we also
                    support short-film distribution to festivals and digital
                    platforms, helping filmmakers connect their stories with
                    audiences beyond the screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Archive */}

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="bg-brand-maroon text-brand-beige"
        >
          <div className="container-editorial py-20 md:py-28 lg:pt-12 lg:pb-32">
            <div
              className="n4f-hero-reveal mb-12 flex flex-col justify-between gap-4 border-b border-brand-beige/25 pb-7 sm:flex-row sm:items-end md:mb-16"
              style={{ animationDelay: "700ms" }}
            >
              <div>
                <h2
                  id="projects-heading"
                  className="font-display text-[clamp(2.4rem,4.2vw,4.8rem)] leading-[1.06]"
                >
                  THE PRODUCTIONS
                  <span className="text-brand-orange">.</span>
                </h2>
              </div>

              <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-beige/70">
                {String(projects.length).padStart(2, "0")}{" "}
                {projects.length === 1 ? "Project" : "Projects"}
              </span>
            </div>
            {/* Project Gallery */}
            {projects.length > 0 ? (
              <ul className="grid w-full list-none grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-7 xl:gap-y-16">
                {projects.map((project, index) => (
                  <ArchiveProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </ul>
            ) : (
              <p className="font-sans text-base text-brand-beige/75">
                Our Selected production archive is being prepared.
              </p>
            )}
            {/* Closing Editorial Rule */}
            <div className="mt-20 flex flex-col gap-3 border-t border-brand-beige/25 pt-7 md:mt-28 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
                Ninety 4 Film / Work
              </p>

              <p className="font-sans text-xs uppercase tracking-[0.15em] text-brand-beige/65">
                Stories worth telling
              </p>
            </div>
          </div>
        </section>
      </main>
    </ViewTransition>
  );
}
