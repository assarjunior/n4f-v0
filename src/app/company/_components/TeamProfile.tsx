import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react";

import type { TeamMember } from "@/types/types-team";
import { TeamCreditsGrid } from "./TeamCreditsGrid";

type TeamProfileProps = {
  member: TeamMember;
  nextMember?: TeamMember;
};

export function TeamProfile({ member, nextMember }: TeamProfileProps) {
  const image = member.portrait;

  return (
    <main id="main-content" className="flex-1 bg-brand-maroon">
      {/* 01 / PROFILE HERO */}
      <section
        aria-labelledby="member-name"
        className="bg-brand-beige text-brand-maroon"
      >
        <div className="container-editorial py-12 md:py-20 lg:py-24">
          {/* BACK NAVIGATION */}
          <Link
            href="/company#team"
            className="
              group inline-flex items-center gap-3
              border-b border-brand-maroon/50 pb-2
              font-sans text-xs font-bold
              uppercase tracking-[0.15em]
              transition-colors duration-300
              hover:text-brand-orange
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-brand-orange
              motion-reduce:transition-none
            "
          >
            <ArrowLeft
              aria-hidden="true"
              strokeWidth={1.5}
              className="
                size-5 transition-transform duration-300
                group-hover:-translate-x-1
                motion-reduce:transition-none
              "
            />
            Back to the Team
          </Link>

          {/* PROFILE INTRODUCTION */}
          <div
            className="
              mt-12 grid items-center gap-12
              md:mt-16
              lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
              lg:gap-16 xl:gap-24
            "
          >
            {/* LEFT — PROFILE IDENTITY */}
            <div className="flex min-w-0 flex-col items-start">
              <p
                className="
                  mb-7 font-sans text-xs font-bold
                  uppercase tracking-[0.2em]
                "
              >
                Ninety 4 Film / The People
              </p>

              <h1
                id="member-name"
                className="
                  max-w-4xl font-display
                  text-[clamp(2.8rem,5.3vw,7rem)]
                  uppercase leading-[1.02]
                  tracking-[-0.035em]
                  wrap-break-word
                "
              >
                {member.name}
                <span className="text-brand-orange">.</span>
              </h1>

              {/* POSITION */}
              <div className="mt-8 border-l-2 border-brand-orange pl-5">
                <p
                  className="
                    max-w-xl font-sans text-base
                    font-bold uppercase
                    leading-relaxed tracking-[0.08em]
                    md:text-lg
                  "
                >
                  {member.role}
                </p>
              </div>

              {/* SHORT BIOGRAPHY */}
              <p
                className="
                  mt-10 max-w-2xl font-sans
                  text-base leading-[1.85]
                  text-brand-maroon/85
                  md:text-lg
                "
              >
                {member.shortBio}
              </p>

              {/* BIOGRAPHY SCROLL LINK */}
              <Link
                href="#biography"
                className="
                  group mt-10 inline-flex items-center
                  gap-3 border-b border-brand-maroon
                  pb-2 font-sans text-xs font-bold
                  uppercase tracking-[0.15em]
                  transition-colors duration-300
                  hover:text-brand-orange
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand-orange
                  motion-reduce:transition-none
                "
              >
                Explore Profile
                <ArrowDownRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="
                    size-5 transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                    motion-reduce:transition-none
                  "
                />
              </Link>
            </div>

            {/* RIGHT — CINEMATIC PORTRAIT */}
            <figure
              className="
                relative mx-auto aspect-4/5
                w-full max-w-140
                overflow-hidden
                bg-brand-maroon
              "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                style={{
                  objectPosition: image.objectPosition ?? "center",
                }}
                className="object-cover"
              />

              {/* SUBTLE PHOTOGRAPHIC TREATMENT */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-linear-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                "
              />

              <figcaption
                className="
                  absolute bottom-0 left-0 right-0
                  px-6 py-6
                  font-sans text-xs font-semibold
                  uppercase tracking-[0.16em]
                  text-white md:px-8 md:py-8
                "
              >
                Ninety 4 Film / {member.name}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 02 / BIOGRAPHY & EXPERTISE */}
      <section
        id="biography"
        aria-labelledby="biography-heading"
        className="
          scroll-mt-24
          bg-brand-maroon
          text-brand-beige
        "
      >
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          {/* BIOGRAPHY */}
          <div
            className="
              grid gap-10
              lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
              lg:gap-20
            "
          >
            <div className="min-w-0">
              <p
                className="
                  mb-7 font-sans text-xs
                  font-semibold uppercase
                  tracking-[0.22em] text-brand-beige
                "
              >
                01 / The Biography
              </p>

              <h2
                id="biography-heading"
                className="
                  font-display
                  text-[clamp(2.6rem,4.6vw,5.6rem)]
                  leading-[1.05]
                  tracking-[-0.035em]
                "
              >
                BEHIND
                <br />
                THE WORK
                <span className="text-brand-orange">.</span>
              </h2>

              <div
                aria-hidden="true"
                className="mt-9 h-1 w-20 bg-brand-orange"
              />
            </div>

            {/* FULL BIOGRAPHY FROM TEAM DATA */}
            <div className="max-w-3xl space-y-6">
              {member.biography.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "font-sans text-lg font-medium leading-relaxed text-brand-beige md:text-xl"
                      : "font-sans text-base leading-[1.85] text-brand-beige/80 md:text-lg"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* EXPERTISE */}
          {member.expertise.length > 0 && (
            <div
              className="
                mt-20 grid gap-10
                border-t border-brand-beige/25 pt-10
                md:mt-28 md:pt-14
                lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
                lg:gap-20
              "
            >
              <div>
                <p
                  className="
                    mb-5 font-sans text-xs
                    font-semibold uppercase
                    tracking-[0.22em]
                    text-brand-beige
                  "
                >
                  02 / Expertise
                </p>

                <h2
                  id="expertise-heading"
                  className="
                    font-display
                    text-[clamp(2rem,3.6vw,4.2rem)]
                    leading-[1.08]
                  "
                >
                  WHAT THEY
                  <br />
                  BRING
                  <span className="text-brand-orange">.</span>
                </h2>
              </div>

              <ul
                aria-labelledby="expertise-heading"
                className="
                  grid list-none gap-x-8
                  sm:grid-cols-2
                "
              >
                {member.expertise.map((expertise) => (
                  <li
                    key={expertise}
                    className="
                      flex items-center
                      border-b border-brand-beige/20
                      py-5
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        mr-4 h-1.5 w-1.5
                        shrink-0 bg-brand-orange
                      "
                    />

                    <span
                      className="
                        font-sans text-sm font-semibold
                        leading-relaxed
                        text-brand-beige md:text-base
                      "
                    >
                      {expertise}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 03 / PERSONAL PHILOSOPHY */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-brand-beige text-brand-maroon"
      >
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          <p
            id="philosophy-heading"
            className="
              font-sans text-xs font-bold uppercase
              tracking-[0.22em]
            "
          >
            03 / Personal Philosophy
          </p>

          <blockquote
            className="
              mt-12 max-w-6xl
              border-l-4 border-brand-orange
              pl-6 md:mt-16 md:pl-10
              lg:pl-14
            "
          >
            <p
              className="
                font-display
                text-[clamp(2rem,4vw,4.9rem)]
                leading-[1.14]
                tracking-tight
              "
            >
              &ldquo;{member.quote}&rdquo;
            </p>

            <footer
              className="
                mt-10 font-sans text-sm
                font-bold uppercase
                tracking-[0.15em] md:mt-14
              "
            >
              — {member.name}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* 04 / SELECTED PROFESSIONAL CREDITS */}
      <section
        id="credits"
        aria-labelledby="credits-heading"
        className="
          scroll-mt-24 bg-brand-maroon
          text-brand-beige
        "
      >
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          {/* CREDITS INTRO */}
          <div
            className="
              grid gap-8
              border-b border-brand-beige/25 pb-10
              lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]
              lg:items-end lg:gap-16
            "
          >
            <div>
              <p
                className="
                  mb-7 font-sans text-xs
                  font-semibold uppercase
                  tracking-[0.22em]
                  text-brand-beige
                "
              >
                04 / Professional Credits
              </p>

              <h2
                id="credits-heading"
                className="
                  font-display
                  text-[clamp(2.7rem,5vw,5.8rem)]
                  leading-[1.05]
                "
              >
                SELECTED
                <br />
                WORK
                <span className="text-brand-orange">.</span>
              </h2>
            </div>

            <p
              className="
                max-w-xl font-sans text-sm
                leading-relaxed text-brand-beige/75
                md:text-base
              "
            >
              A selection of individual professional experience across film,
              television, and production. Credits reflect the member&apos;s own
              contribution, independently of Ninety 4 Film&apos;s company
              portfolio.
            </p>
          </div>

          {/* EDITORIAL PROJECT GALLERY */}
          {member.credits.length > 0 ? (
            <TeamCreditsGrid credits={member.credits} />
          ) : (
            <p className="py-10 font-sans text-base text-brand-beige/75">
              Selected professional credits will be added to this profile.
            </p>
          )}

          {/* PROFILE NAVIGATION */}
          <nav
            aria-label="Team profile navigation"
            className="
              mt-20 flex flex-col gap-8
              border-t border-brand-beige/25 pt-8
              md:mt-28 md:flex-row
              md:items-end md:justify-between
            "
          >
            <Link
              href="/company#team"
              className="
                group inline-flex w-fit items-center
                gap-3 border-b border-brand-orange
                pb-2 font-sans text-xs font-semibold
                uppercase tracking-[0.15em]
                transition-colors duration-300
                hover:text-brand-orange
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-brand-orange
                motion-reduce:transition-none
              "
            >
              <ArrowLeft
                aria-hidden="true"
                strokeWidth={1.5}
                className="
                  size-5 transition-transform duration-300
                  group-hover:-translate-x-1
                  motion-reduce:transition-none
                "
              />
              All Team Members
            </Link>

            {nextMember && (
              <Link
                href={`/company/team/${nextMember.slug}`}
                className="
                  group flex w-fit flex-col
                  items-start gap-3
                  md:items-end md:text-right
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand-orange
                "
              >
                <span
                  className="
                    font-sans text-xs font-semibold
                    uppercase tracking-[0.16em]
                    text-brand-beige/70
                  "
                >
                  Next Profile
                </span>

                <span
                  className="
                    flex items-center gap-3
                    font-display text-2xl
                    transition-colors duration-300
                    group-hover:text-brand-orange
                    motion-reduce:transition-none
                    md:text-3xl
                  "
                >
                  {nextMember.name}

                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="
                      size-6 shrink-0
                      text-brand-orange
                      transition-transform duration-300
                      group-hover:translate-x-1
                      motion-reduce:transition-none
                    "
                  />
                </span>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </main>
  );
}
