import { getPublishedWork } from "@/config/config-work";
import { WorkEntry, WorkType } from "@/types/types-work";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

function ArchiveProjectCard({ project }: { project: WorkEntry }) {
  const href = `/work/${project.slug}`;

  return (
    <li className="min-w-0">
      <article className="group flex h-full flex-col">
        {/* Project Poster */}
        <Link
          href={href}
          aria-label={`Explore ${project.title}`}
          className="relative block aspect-3/4 overflow-hidden border border-brand-beige/20 bg-[#32110E] focus-visible::outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        >
          <Image
            src={project.poster.src}
            alt={project.poster.alt}
            fill
            sizes="(max-width: 639px) 100vw,
        (max-width: 1023px) 50vw,
        440px
        "
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
        <h2 className="mt-4 font-display text-[clamp(2rem,3vw,3.5rem)] leading-[1.08] text-brand-beige">
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
        <p className="mt-4 max-w-xl font-sans text-sm leading-[1.8] text-brand-beige/80 md:text-base">
          {project.shortSynopsis}
        </p>

        {/* Company Role and navigation */}
        <div className="mt-auto flex flex-col gap-5 pt-7">
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
    <main id="main-content" className="flex-1 bg-brand-maroon">
      {/* Work Hero */}
      <section
        aria-labelledby="work-heading"
        className="bg-brand-beige text-brand-maroon"
      >
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          <p className="mb-7 font-sans text-xs font-bold uppercase tracking-[0.27em]">
            Ninety 4 Film / Productions
          </p>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <h1
              className="font-display text-[clamp(3.5rem,8vw,9rem)] leading-[0.96] tracking-[-0.035em]"
              id="work-heading"
            >
              OUR
              <br />
              WORK
              <span className="text-brand-orange">.</span>
            </h1>

            <div className="max-w-xl">
              <div
                className="mb-7 h-1 w-16 bg-brand-orange"
                aria-hidden="true"
              />

              <p className="font-sans text-base leading-[1.8] text-brand-maroon/85 md:text-lg">
                Every production brings its own creative challenges,
                collaborators, and possibilities. Explore a selection of
                projects we have helped bring to screen.
              </p>
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
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-brand-beige/25 pb-7 sm:flex-row sm:items-end md:mb-16">
            <div>
              <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                01 / Selected Productions
              </p>

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
            <ul className="mx-auto grid max-w-5xl list-none grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
              {projects.map((project) => (
                <ArchiveProjectCard key={project.id} project={project} />
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
  );
}
