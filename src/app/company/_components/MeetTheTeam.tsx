import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getPublishedTeam } from "@/config/team";

export function MeetTheTeam() {
  const members = getPublishedTeam();

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-24 bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial py-20 md:py-28 lg:py-32">
        {/* SECTION INTRODUCTION */}
        <div
          className="
            mb-12 grid gap-8
            border-b border-brand-beige/25 pb-10
            md:mb-16 md:pb-14
            lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]
            lg:items-end lg:gap-16
          "
        >
          <div className="min-w-0">
            <p
              className="
                mb-7 font-sans text-xs font-semibold
                uppercase tracking-[0.22em]
                text-brand-orange
              "
            >
              03 / The People Behind the Work
            </p>

            <h2
              id="team-heading"
              className="
                max-w-5xl font-display
                text-[clamp(2.8rem,5.3vw,6.2rem)]
                leading-[1.03] tracking-[-0.035em]
              "
            >
              PEOPLE MAKE
              <br />
              <span className="text-brand-orange">THE DIFFERENCE .</span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <div aria-hidden="true" className="mb-7 h-1 w-16 bg-brand-orange" />

            <p
              className="
                font-sans text-base leading-relaxed
                text-brand-beige/85 md:text-lg
              "
            >
              Different disciplines. A shared commitment to the work. Meet the
              people bringing creative understanding, production experience and
              technical expertise together at Ninety 4 Film.
            </p>
          </div>
        </div>

        {/* TEAM DIRECTORY */}
        <ul
          className="
            grid list-none grid-cols-1
            gap-x-5 gap-y-12
            sm:grid-cols-2
            lg:gap-x-6 lg:gap-y-16
            xl:grid-cols-4
          "
        >
          {members.map((member) => {
            const nameId = `team-name-${member.slug}`;
            const roleId = `team-role-${member.slug}`;

            return (
              <li key={member.id} className="min-w-0">
                <Link
                  href={`/company/team/${member.slug}`}
                  aria-labelledby={nameId}
                  aria-describedby={roleId}
                  className="
                    group flex h-full min-w-0 flex-col
                    outline-none
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-brand-orange
                  "
                >
                  {/* PORTRAIT */}
                  <div
                    className="
                      relative aspect-4/5
                      overflow-hidden
                      border border-brand-beige/20
                      bg-[#37110E]
                      transition-colors duration-500
                      group-hover:border-brand-orange
                      group-focus-visible:border-brand-orange
                      motion-reduce:transition-none
                    "
                  >
                    <Image
                      src={member.portrait.src}
                      alt={member.portrait.alt}
                      fill
                      sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1279px) 50vw,
                        25vw
                      "
                      style={{
                        objectPosition:
                          member.portrait.objectPosition ?? "center",
                      }}
                      className="
                        object-cover
                        transition-transform duration-700
                        ease-out
                        group-hover:scale-[1.045]
                        group-focus-visible:scale-[1.045]
                        motion-reduce:transition-none
                        motion-reduce:transform-none
                      "
                    />

                    {/* SUBTLE PHOTOGRAPHIC GRADIENT */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-linear-to-t
                        from-black/45
                        via-transparent
                        to-black/15
                      "
                    />

                    {/* INTERACTIVE ARROW */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute bottom-5 right-5
                        flex size-11 items-center
                        justify-center
                        border border-brand-beige/70
                        text-brand-beige
                        transition-[background-color,color,border-color]
                        duration-300
                        group-hover:border-brand-orange
                        group-hover:bg-brand-orange
                        group-hover:text-brand-maroon
                        group-focus-visible:border-brand-orange
                        group-focus-visible:bg-brand-orange
                        group-focus-visible:text-brand-maroon
                        motion-reduce:transition-none
                      "
                    >
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="
                          size-6
                          transition-transform duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-focus-visible:-translate-y-0.5
                          group-focus-visible:translate-x-0.5
                          motion-reduce:transition-none
                        "
                      />
                    </span>
                  </div>

                  {/* MEMBER INFORMATION */}
                  <div className="flex flex-1 flex-col pt-6">
                    <h3
                      id={nameId}
                      className="
                        font-display
                        text-[clamp(1.8rem,2.25vw,2.6rem)]
                        leading-[1.08]
                        tracking-[-0.02em]
                        text-brand-beige
                        transition-colors duration-300
                        group-hover:text-brand-orange
                        group-focus-visible:text-brand-orange
                        motion-reduce:transition-none
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      id={roleId}
                      className="
                        mt-3 min-h-0 font-sans
                        text-xs font-semibold
                        uppercase tracking-widest
                        text-brand-orange
                        xl:min-h-12
                      "
                    >
                      {member.role}
                    </p>

                    <p
                      className="
                        mt-5 font-sans text-sm
                        leading-[1.8]
                        text-brand-beige/75
                      "
                    >
                      {member.shortBio}
                    </p>

                    {/* PROFILE LINK INDICATOR */}
                    <div
                      className="
                        mt-auto flex items-center
                      gap-3 pt-3
                        font-sans text-xs font-semibold
                        uppercase tracking-[0.15em]
                        text-brand-beige
                      "
                    >
                      <span
                        className="
                          border-b border-brand-orange
                          pb-2
                          transition-colors duration-300
                          group-hover:text-brand-orange
                          group-focus-visible:text-brand-orange
                          motion-reduce:transition-none
                        "
                      >
                        View Profile
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="
                          size-5 text-brand-orange
                          transition-transform duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-focus-visible:-translate-y-0.5
                          group-focus-visible:translate-x-0.5
                          motion-reduce:transition-none
                        "
                      />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CLOSING EDITORIAL RULE */}
        <div
          className="
            mt-16 flex flex-col justify-between
            gap-4 border-t border-brand-beige/25 pt-7
            sm:flex-row sm:items-center
            md:mt-24
          "
        >
          <p
            className="
              font-sans text-xs font-semibold
              uppercase tracking-[0.16em]
              text-brand-orange
            "
          >
            Ninety 4 Film / The Team
          </p>

          <p
            className="
              font-sans text-xs
              uppercase tracking-[0.16em]
              text-brand-beige/65
            "
          >
            Cairo, Egypt
          </p>
        </div>
      </div>
    </section>
  );
}
