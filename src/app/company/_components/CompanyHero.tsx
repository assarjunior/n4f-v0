import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export function CompanyHero() {
  return (
    <section
      aria-labelledby="company-hero-heading"
      className="relative isolate overflow-hidden bg-brand-beige text-brand-maroon"
    >
      <div className="container-editorial py-16 md:py-24 lg:py-28">
        {/* TOP EDITORIAL LABELS */}
        <div className="flex items-center justify-between gap-4">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em]">
            Ninety 4 Film / Company
          </p>

          <p className="hidden font-sans text-xs font-semibold uppercase tracking-[0.16em] sm:block">
            Cairo, Egypt
          </p>
        </div>

        {/* STATEMENT + BRAND ARTWORK */}
        <div className="mt-14 grid items-center gap-8 lg:mt-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.5fr)] lg:gap-12">
          {/* MAIN STATEMENT */}
          <div className="relative z-10 min-w-0">
            <h1
              id="company-hero-heading"
              className="font-display text-[clamp(2.55rem,6.4vw,7.5rem)] leading-[1.02] tracking-[-0.035em]"
            >
              <span className="block">BUILT FOR</span>

              <span className="block">THE STORIES</span>

              <span className="block">
                WORTH TELLING
                <span className="text-brand-orange">.</span>
              </span>
            </h1>

            {/* BRAND STATEMENT */}
            <div className="mt-10 border-l-2 border-brand-orange pl-5 md:mt-14 md:pl-7">
              <p className="max-w-xl font-sans text-lg font-semibold leading-relaxed md:text-xl">
                Independent in spirit.
                <br />
                Collaborative by design.
                <br />
                Rooted in Egypt.
              </p>
            </div>
          </div>

          {/* OFFICIAL BRAND STAMP */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative mx-auto aspect-square w-full max-w-72 sm:max-w-96 lg:max-w-none"
          >
            <Image
              src="/brand/ring-maroon.svg"
              alt=""
              fill
              sizes="(max-width: 1023px) 384px, 30vw"
              className="object-contain animate-spin animation-duration-[25s]"
            />

            <Image
              src="/brand/94-vertical-maroon.svg"
              alt=""
              fill
              sizes="(max-width: 1023px) 240px, 19vw"
              className="object-contain p-[22%]"
            />
          </div>
        </div>

        {/* BOTTOM EDITORIAL NAVIGATION */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-brand-maroon/30 pt-6 md:mt-20 md:flex-row md:items-center">
          <p className="max-w-xl font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-maroon/75">
            Creative Ambition / Production Discipline
          </p>

          <Link
            href="#our-story"
            className="group inline-flex w-fit items-center gap-3 border-b border-brand-maroon pb-2 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
          >
            Discover Our Story
            <ArrowDownRight
              aria-hidden="true"
              strokeWidth={1.6}
              className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
