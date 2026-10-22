import { getFeaturedWork } from "@/config/config-work";
import { WorkCard } from "../layout/WorkCard";

export function SelectedWorkSection() {
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
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
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
              className="mx-auto w-full max-w-[320px] min-w-0 lg:mx-0 lg:w-[calc((100%-4.5rem)/4)] lg:max-w-none xl:w-[calc((100%-6rem)/4)]"
            >
              <WorkCard film={film} />

              {/* Mobile Separator */}
              {index < featuredFilms.length - 1 && (
                <div
                  aria-hidden="true"
                  className="mt-4  w-full border-b to-brand-beige/20 lg:hidden"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
