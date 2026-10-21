import Image from "next/image";
import HeroImage from "../../../public/hero.png";
import { TornPaperButton } from "../layout/torn-paper-button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-170 items-center overflow-hidden bg-brand-maroon text-brand-beige md:min-h-190 lg:min-h-205 "
    >
      {/* Background Photograph */}
      <Image
        src={HeroImage}
        alt="Hero Image"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] lg:object-center"
      />

      {/* Gradient for typography contrast */}
      <div
        className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 lg:from-black/70 lg:via-black/25 lg:to-transparent"
        aria-hidden="true"
      />
      {/* Hero Content */}

      <div className="container-editorial relative z-10 w-full py-24 md:py-32">
        <div className="flex max-w-3xl flex-col items-start">
          {/* Eyebrow */}

          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange md:mb-8">
            Independent in spirit
          </p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="max-w-[11ch] font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.98] tracking-[-0.035em] text-brand-beige"
          >
            Stories deserve to be seen.
          </h1>

          {/* Orange accent */}
          <div
            className="mt-8 h-1 w-16 bg-brand-orange md:mt-10 md:w-20"
            aria-hidden="true"
          />

          {/* Supporting statement */}
          <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-brand-beige/90 md:mt-10 md:text-xl">
            Creative development and full-service film and television
            production.
          </p>

          {/* Branded CTA */}
          <div className="mt-8 pb-9 md:mt-2 md:pb-0">
            <TornPaperButton href="/work">Explore Our Work</TornPaperButton>
          </div>
        </div>
      </div>
    </section>
  );
}
