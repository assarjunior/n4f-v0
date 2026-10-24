import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative isolate overflow-hidden bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial w-full py-20 md:py-28 lg:py-32">
        {/* EYEBROW */}
        <div className="mb-10 flex items-center gap-4 md:mb-14">
          <span aria-hidden="true" className="h-px w-10 bg-brand-orange" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
            Ninety 4 Film / Our Services
          </p>
        </div>

        {/* MAIN HEADLINE */}
        <h1
          id="services-hero-heading"
          className="max-w-[22ch] font-display text-[clamp(3rem,6.4vw,7.8rem)] leading-[0.98] tracking-[-0.04em]"
        >
          <span className="block">THE VISION MATTERS.</span>
          <span className="mt-3 block text-brand-orange md:mt-4">
            SO DOES THE EXECUTION.
          </span>
        </h1>

        {/* EDITORIAL INTRODUCTION */}
        <div className="mt-12 grid gap-10 border-t border-brand-beige/25 pt-10 md:mt-16 md:pt-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(15rem,0.6fr)] lg:gap-20">
          {/* DESCRIPTION */}
          <div className="max-w-3xl space-y-6 font-sans">
            <p className="text-lg leading-relaxed text-brand-beige md:text-xl">
              Every production starts with a vision. A story worth telling, an
              idea worth exploring, or a moment worth capturing. Bringing that
              vision to life takes more than creative ambition. It takes
              experience, collaboration, careful planning, and the ability to
              deliver when it matters.
            </p>

            <p className="text-base leading-relaxed text-brand-beige/85 md:text-lg">
              At Ninety 4 Film, we bring creative understanding and hands-on
              production expertise together. From narrative and documentary, and
              commercial & branded content, to live events, we approach every
              project with the same commitment: protect the creative intention
              while building the right people, resources and production process
              around it.
            </p>

            <p className="text-base leading-relaxed text-brand-beige/75 md:text-lg">
              Behind every production is a team that understands both sides of
              filmmaking — the creative decisions that shape the story and the
              operational discipline that brings it to the screen.
            </p>
          </div>

          {/* CTA AREA */}
          <div className="flex flex-col items-start justify-end gap-7">
            {/* MEET THE TEAM */}
            <Link
              href="/company#team"
              className="group flex w-full max-w-sm flex-col justify-between gap-12 border border-brand-beige/35 p-6 transition-[background-color,border-color] duration-500 hover:border-brand-beige hover:bg-brand-beige focus-visible:bg-brand-beige focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange md:p-8 motion-reduce:transition-none"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange group-hover:text-brand-maroon group-focus-visible:text-brand-maroon">
                  Behind The Vision
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-7 shrink-0 text-brand-orange transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                  strokeWidth={1.5}
                />
              </span>

              <span className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-[1.05] text-brand-beige transition-colors duration-300 group-hover:text-brand-maroon group-focus-visible:text-brand-maroon motion-reduce:transition-none">
                MEET THE TEAM.
              </span>
            </Link>

            {/* SCROLL TO SERVICES */}
            <Link
              href="#what-we-produce"
              className="group inline-flex items-center gap-3 border-b border-brand-orange pb-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
            >
              Explore Our Services
              <ArrowDownRight
                aria-hidden="true"
                className="size-5 text-brand-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:translate-y-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
