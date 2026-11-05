import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../motion/ScrollReveal";

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="
        grid w-full grid-cols-1
        overflow-hidden
        border-t border-brand-maroon/20
        bg-brand-beige text-brand-maroon
        lg:grid-cols-[minmax(0,54%)_minmax(0,46%)]
      "
    >
      {/* LEFT — COMPLETE MANIFESTO */}
      <div
        className="
          container-editorial
          flex min-w-0 flex-col
          justify-between gap-12
          py-16 sm:py-20
          lg:min-h-192 lg:py-24
          xl:py-28
        "
      >
        {/* MANIFESTO HEADLINE */}
        <ScrollReveal>
          <h2
            id="who-we-are-heading"
            className="
            font-display
            text-[clamp(2.15rem,5.1vw,6.75rem)]
            leading-[1.02]
            tracking-[-0.035em]
            text-brand-maroon
          "
          >
            <span className="block">IDEAS ARE</span>

            <span className="block">ONLY THE</span>

            <span className="block">
              BEGINNING
              <span aria-hidden="true" className="text-brand-orange">
                .
              </span>
            </span>
          </h2>
        </ScrollReveal>

        {/* MANIFESTO CONTENT */}
        <ScrollReveal className="max-w-172">
          <div className="max-w-172">
            {/* BRAND ACCENT */}
            <div
              aria-hidden="true"
              className="
              mb-8 h-0.5 w-12
              bg-brand-orange
            "
            />

            {/* SUPPORTING STATEMENT */}
            <p
              className="
              max-w-[32ch]
              text-[clamp(1.3rem,2.1vw,2rem)]
              font-semibold
              leading-[1.28]
              tracking-tight
              text-brand-maroon
            "
            >
              A vision is only as strong as the work that brings it to life.
            </p>

            {/* APPROVED BODY COPY */}
            <p
              className="
              mt-6 max-w-[62ch]
              text-base leading-[1.75]
              text-brand-maroon/90
              sm:mt-8 sm:text-lg
            "
            >
              Rooted in Egypt, Ninety 4 Film connects creative ambition with the
              craft and discipline of production. We bring the right people
              together, tackle the practical challenges, and carry each project
              forward with purpose — from the first plan to the final frame.
            </p>

            {/* SINGLE COMPANY CTA */}
            <Link
              href="/company"
              className="
              mt-10 inline-flex min-h-11
              items-center gap-3
              border-b border-brand-maroon
              pb-2
              text-xs font-bold uppercase
              tracking-[0.16em]
              text-brand-maroon

              hover:border-brand-maroon/60
              hover:text-brand-maroon/75

              focus-visible:rounded-sm
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-brand-maroon

              sm:mt-12
            "
            >
              Discover Our Company
              <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* RIGHT — FULL-HEIGHT ARTWORK */}

      {/* RIGHT — FULL-HEIGHT ARTWORK */}
      <ScrollReveal
        className="
    n4f-image-reveal
    relative w-full
    min-h-104
    sm:min-h-144
    md:mt-20
    md:mb-20
    rounded-xl
    overflow-hidden
    bg-brand-maroon/10
  "
      >
        <Image
          src="/who-we-are.webp"
          alt="Film production storyboards and creative planning materials"
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="
      object-cover
      object-center
    "
        />
      </ScrollReveal>
    </section>
  );
}
