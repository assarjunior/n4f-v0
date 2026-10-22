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
      className="bg-brand-maroon py-16 text-brand-beige md:py-24 lg:py-28"
    >
      <div className="container-editorial">
        {/* Section Heading */}
        <div className="mb-10 md:mb-14">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            Featured Productions
          </p>

          <h2
            id="selected-work-heading"
            className="font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] text-brand-beige"
          >
            Selected Work
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 gap-y-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-6 xl:gap-8">
          {featuredFilms.map((film, index) => (
            <div
              key={film.id}
              className="
                mx-auto
                w-full
                max-w-[320px]
                min-w-0
                lg:mx-0
                lg:w-[calc((100%-4.5rem)/4)]
                lg:max-w-none
                xl:w-[calc((100%-6rem)/4)]
              "
            >
              {/* Film Card */}
              <article className="flex h-full flex-col">
                {/* Poster Frame */}
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-[#272727]">
                  <Image
                    src={film.poster.src}
                    alt={film.poster.alt}
                    fill
                    sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 320px, 100vw"
                    className="object-contain"
                  />
                </div>

                {/* Film Title */}
                <h3 className="mt-5 font-display text-[clamp(1.75rem,2.2vw,2.5rem)] leading-[1.1] text-brand-beige">
                  {film.title}
                </h3>

                {/* Film Synopsis */}
                <p className="mt-3 font-sans text-sm leading-relaxed text-brand-beige/85 md:text-base">
                  {film.synopsis}
                </p>

                {/* Company Role */}
                <div className="mt-5 lg:mt-auto lg:pt-5">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    Ninety 4 Film&apos;s Role
                  </p>

                  <p className="mt-1.5 font-sans text-sm font-medium text-brand-beige">
                    {film.companyRoles.join(" · ")}
                  </p>
                </div>
              </article>

              {/* Mobile Project Separator */}
              {index < featuredFilms.length - 1 && (
                <div
                  aria-hidden="true"
                  className="mt-10 w-full border-b border-brand-beige/20 lg:hidden"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
