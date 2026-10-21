import { getFeaturedWork } from "@/config/config-work";
import Image from "next/image";

export function SelectedWork() {
  const featuredFilms = getFeaturedWork();

  if (featuredFilms.length === 0) {
    return null;
  }

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="bg-brand-maroon py-20 text-brand-beige md:py-28 lg:py-36"
    >
      <div className="container-editorial">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            Featured Production
          </p>

          <h2
            id="selected-work-heading"
            className="font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] text-brand-beige"
          >
            Selected Work
          </h2>
        </div>

        {/* Film Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20">
          {featuredFilms.map((film) => (
            <article
              key={film.id}
              className="grid min-w-0 grid-rows-[auto_auto_1fr_auto]"
            >
              {/* Poster Frame */}
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl bg-[#272727]">
                <Image
                  src={film.poster.src}
                  alt={film.poster.alt}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-contain"
                />
              </div>

              {/* Film Title */}
              <h3 className="mt-7 min-h-[2.2em] font-display text-[clamp(2rem,3vw,3.5rem)] leading-[1.1] text-brand-beige md:mt-8">
                {film.title}
              </h3>

              {/* Film Synopsis */}
              <p className="mt-5 font-sans text-base leading-relaxed text-brand-beige/85 md:text-lg">
                {film.synopsis}
              </p>

              {/* Company Role */}
              <div className="mt-7 border-t border-brand-beige/20 pt-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Ninety 4 Film&apos;s Role
                </p>

                <p className="mt-2 font-sans text-sm font-medium text-brand-beige md:text-base">
                  {film.companyRoles.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
