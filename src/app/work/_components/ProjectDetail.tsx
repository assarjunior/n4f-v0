import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";
import type { WorkEntry } from "@/types/types-work";

import { ProjectGalleryCarousel } from "./ProjectGalleryCarousel";

type ProjectDetailProps = {
  project: WorkEntry;
  nextProject?: WorkEntry;
};

function formatWorkType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const projectFacts = [
    {
      label: "Format",
      value: formatWorkType(project.type),
    },
    {
      label: "Release Year",
      value: project.releaseYear?.toString(),
    },
    {
      label: "Director",
      value: project.director,
    },
    {
      label: "Writer",
      value: project.writer?.join(", "),
    },
    {
      label: "Runtime",
      value: project.runtimeMinutes
        ? `${project.runtimeMinutes} min`
        : undefined,
    },
    {
      label: "Language",
      value: project.languages?.join(", "),
    },
    {
      label: "Country",
      value: project.countries?.join(", "),
    },
    {
      label: "Genre",
      value: project.genres?.join(", "),
    },
  ].filter((fact): fact is { label: string; value: string } =>
    Boolean(fact.value),
  );

  const hasRecognition =
    Boolean(project.awards?.length) || Boolean(project.festivals?.length);

  return (
    <main id="main-content" className="flex-1 bg-brand-maroon">
      {/* 01 / PROJECT HERO */}
      <section
        aria-labelledby="project-heading"
        className="bg-brand-beige text-brand-maroon"
      >
        <div className="container-editorial py-12 md:py-20 lg:py-24">
          {/* BACK TO WORK */}
          <Link
            href="/work#projects"
            className="group inline-flex items-center gap-3 border-b border-brand-maroon/50 pb-2 font-sans text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
          >
            <ArrowLeft
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-5"
            />
            Back to Our Work
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
            {/* PROJECT IDENTITY */}
            <div className="min-w-0">
              <p className="mb-7 font-sans text-xs font-bold uppercase tracking-[0.2em]">
                Ninety 4 Film / Selected Production
              </p>

              <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-brand-maroon/75">
                {formatWorkType(project.type)}
                {project.releaseYear ? ` / ${project.releaseYear}` : ""}
              </p>

              <h1
                id="project-heading"
                className="font-display text-[clamp(2.8rem,5.4vw,7rem)] leading-[1.02] tracking-[-0.035em] wrap-break-word"
              >
                {project.title}
                <span className="text-brand-orange">.</span>
              </h1>

              {project.originalTitle && (
                <p
                  lang="ar"
                  dir="rtl"
                  className="mt-5 w-fit font-sans text-xl md:text-2xl"
                >
                  {project.originalTitle}
                </p>
              )}

              <div
                aria-hidden="true"
                className="mt-8 h-1 w-16 bg-brand-orange"
              />

              <p className="mt-8 max-w-2xl font-sans text-base leading-[1.85] text-brand-maroon/85 md:text-lg">
                {project.shortSynopsis}
              </p>

              <Link
                href="#story"
                className="mt-9 inline-flex items-center gap-3 border-b border-brand-maroon pb-2 font-sans text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
              >
                Explore Project
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5"
                />
              </Link>
            </div>

            {/* OFFICIAL PROJECT POSTER */}
            <figure className="relative mx-auto aspect-3/4 w-full max-w-110 overflow-hidden bg-[#32110E]">
              <Image
                src={project.poster.src}
                alt={project.poster.alt}
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 38vw"
                className="object-contain"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 02 / STORY & OUR INVOLVEMENT */}
      <section
        id="story"
        aria-labelledby="story-heading"
        className="scroll-mt-24 bg-brand-maroon text-brand-beige"
      >
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          {/* STORY */}
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <p className="mb-7 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                01 / The Story
              </p>

              <h2
                id="story-heading"
                className="font-display text-[clamp(2.8rem,4.6vw,5.6rem)] leading-[1.04]"
              >
                THE
                <br />
                STORY
                <span className="text-brand-orange">.</span>
              </h2>
            </div>

            <p className="max-w-3xl font-sans text-lg leading-[1.9] text-brand-beige/85 md:text-xl">
              {project.synopsis}
            </p>
          </div>

          {/* OUR INVOLVEMENT */}
          <div className="mt-20 grid gap-10 border-t border-brand-beige/25 pt-12 md:mt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                02 / Our Involvement
              </p>

              <h2
                id="involvement-heading"
                className="font-display text-[clamp(2rem,3.6vw,4.4rem)] leading-[1.08]"
              >
                OUR
                <br />
                ROLE
                <span className="text-brand-orange">.</span>
              </h2>
            </div>

            <div>
              <ul aria-labelledby="involvement-heading" className="list-none">
                {project.companyRoles.map((role) => (
                  <li
                    key={role}
                    className="border-b border-brand-beige/25 py-5 font-sans text-lg font-semibold md:text-xl"
                  >
                    {role}
                  </li>
                ))}
              </ul>

              {project.companyRoleDescription && (
                <p className="mt-7 max-w-2xl font-sans text-base leading-[1.85] text-brand-beige/75">
                  {project.companyRoleDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 03 / PRODUCTION INFORMATION */}
      <section
        aria-labelledby="project-info-heading"
        className="bg-brand-beige text-brand-maroon"
      >
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          <p className="mb-7 font-sans text-xs font-bold uppercase tracking-[0.2em]">
            03 / Production Information
          </p>

          <h2
            id="project-info-heading"
            className="font-display text-[clamp(2.5rem,4.8vw,5.7rem)] leading-[1.05]"
          >
            PROJECT
            <br />
            DETAILS
            <span className="text-brand-orange">.</span>
          </h2>

          <dl className="mt-12 grid gap-x-12 border-t border-brand-maroon/30 sm:grid-cols-2 lg:grid-cols-3">
            {projectFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-brand-maroon/25 py-7"
              >
                <dt className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-brand-maroon/70">
                  {fact.label}
                </dt>

                <dd className="mt-3 font-sans text-base font-semibold leading-relaxed md:text-lg">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 04 / PROJECT GALLERY CAROUSEL */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGalleryCarousel images={project.gallery} />
      )}

      {/*  05 / ADDITIONAL PRODUCTION CREDITS */}
      {project.credits && project.credits.length > 0 && (
        <section
          aria-labelledby="production-credits-heading"
          className="bg-brand-maroon text-brand-beige"
        >
          <div className="container-editorial py-16 md:py-24">
            <div className="grid gap-10 border-t border-brand-beige/25 pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  The People Behind the Production
                </p>

                <h2
                  id="production-credits-heading"
                  className="font-display text-[clamp(2rem,3.6vw,4.4rem)] leading-[1.08]"
                >
                  PRODUCTION
                  <br />
                  CREDITS
                  <span className="text-brand-orange">.</span>
                </h2>
              </div>

              <dl className="grid gap-x-8 sm:grid-cols-2">
                {project.credits.map((credit, index) => (
                  <div
                    key={`${credit.name}-${index}`}
                    className="border-b border-brand-beige/25 py-5"
                  >
                    <dt className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
                      {credit.role}
                    </dt>

                    <dd className="mt-2 font-sans text-base font-medium text-brand-beige">
                      {credit.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* 06 / FESTIVALS & AWARDS — EDITORIAL DESIGN */}
      {hasRecognition && (
        <section
          aria-labelledby="recognition-heading"
          className="bg-brand-maroon text-brand-beige"
        >
          <div className="container-editorial py-16 md:py-24">
            <div className="grid gap-10 border-t border-brand-beige/25 pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              {/* LEFT — EDITORIAL HEADING */}
              <div>
                <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Festivals & Awards
                </p>

                <h2
                  id="recognition-heading"
                  className="font-display text-[clamp(2.2rem,3.8vw,4.6rem)] leading-[1.08]"
                >
                  RECOGNITION
                  <span className="text-brand-orange">.</span>
                </h2>
              </div>

              {/* RIGHT — FESTIVALS AND AWARDS */}
              <dl className="min-w-0">
                {project.awards?.map((award, index) => (
                  <div
                    key={`award-${index}`}
                    className="border-b border-brand-beige/25 py-6"
                  >
                    <dt className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
                      Award
                    </dt>

                    <dd className="font-sans text-base font-semibold leading-relaxed text-brand-beige md:text-lg">
                      {award}
                    </dd>
                  </div>
                ))}

                {project.festivals?.map((festival, index) => (
                  <div
                    key={`festival-${index}`}
                    className="border-b border-brand-beige/25 py-6"
                  >
                    <dt className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
                      Festival Selection
                    </dt>

                    <dd className="font-sans text-base font-semibold leading-relaxed text-brand-beige md:text-lg">
                      {festival}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/*  07 / EXTERNAL LINKS — HORIZONTAL */}
      {project.links && project.links.length > 0 && (
        <section
          aria-labelledby="project-links-heading"
          className="bg-brand-maroon text-brand-beige"
        >
          <div className="container-editorial py-16 md:py-24">
            <div className="grid gap-10 border-t border-brand-beige/25 pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
              {/* HEADING */}
              <div>
                <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  External Project Links
                </p>

                <h2
                  id="project-links-heading"
                  className="font-display text-[clamp(2rem,3.6vw,4.4rem)] leading-[1.08]"
                >
                  EXPLORE MORE
                  <span className="text-brand-orange">.</span>
                </h2>
              </div>

              {/* LINKS — ONE HORIZONTAL ROW */}
              <ul
                aria-labelledby="project-links-heading"
                className="flex flex-wrap items-center gap-x-8 gap-y-5"
              >
                {project.links.map((link) => (
                  <li key={`${link.label}-${link.url}`}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 border-b border-brand-orange pb-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-brand-beige transition-colors duration-300 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange motion-reduce:transition-none"
                    >
                      {link.label}

                      <ArrowUpRight
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="size-5 shrink-0 text-brand-orange transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/*  08 / PROJECT NAVIGATION — BUTTON VARIANT */}
      <nav
        aria-label="Project navigation"
        className="bg-brand-maroon text-brand-beige"
      >
        <div className="container-editorial flex flex-col justify-between gap-8 border-t border-brand-beige/25 py-12 md:flex-row md:items-center">
          {/* RETURN TO ARCHIVE */}
          <Link
            href="/work#projects"
            className="group inline-flex w-fit items-center gap-3 border-b border-brand-orange pb-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
          >
            <ArrowLeft
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-5"
            />
            All Productions
          </Link>

          {/* NEXT PROJECT BUTTON */}
          {nextProject && (
            <div className="flex flex-col items-start gap-3 md:items-end">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-beige/65">
                Continue Exploring
              </span>

              <Link
                href={`/work/${nextProject.slug}`}
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  }),
                  "h-auto min-h-13 gap-4 rounded-none border border-brand-beige bg-brand-beige px-6 py-4 font-sans text-xs font-bold uppercase tracking-[0.14em] text-brand-maroon hover:border-brand-orange hover:bg-brand-orange hover:text-brand-maroon focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange motion-reduce:transition-none",
                )}
              >
                <span>{nextProject.title}</span>

                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5"
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
}
