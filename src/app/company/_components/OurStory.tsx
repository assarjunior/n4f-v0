export function OurStory() {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="scroll-mt-24 bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial py-20 md:py-28 lg:py-32">
        {/* SECTION LABEL */}
        <div className="flex items-center justify-between gap-4 border-b border-brand-beige/25 pb-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
            01 / Our Story
          </p>

          <p className="hidden font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-beige/65 sm:block">
            The Thinking Behind Ninety 4 Film
          </p>
        </div>

        {/* EDITORIAL SPLIT */}
        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          {/* LEFT — CREATIVE STATEMENT */}
          <div className="min-w-0">
            <h2
              id="our-story-heading"
              className="font-display text-[clamp(2.7rem,5vw,5.8rem)] leading-[1.05] tracking-[-0.035em]"
            >
              TWO
              <br />
              DISCIPLINES.
              <br />
              ONE SHARED
              <br />
              PURPOSE
              <span className="text-brand-orange">.</span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-10 h-1 w-20 bg-brand-orange md:mt-14"
            />
          </div>

          {/* RIGHT — COMPANY STORY */}
          <div className="flex max-w-2xl flex-col gap-6 font-sans">
            <p className="text-xl font-medium leading-relaxed text-brand-beige md:text-2xl">
              Ninety 4 Film was built around a simple belief: a strong creative
              idea deserves production that can carry it all the way through.
            </p>

            <p className="text-base leading-relaxed text-brand-beige/85 md:text-lg">
              Based in Cairo, we bring together the creative and operational
              sides of filmmaking. We understand that storytelling requires
              imagination and instinct, but also planning, coordination and the
              ability to make difficult decisions under real production
              conditions.
            </p>

            <p className="text-base leading-relaxed text-brand-beige/85 md:text-lg">
              We develop original stories while working with filmmakers,
              agencies and production partners to bring their own projects to
              the screen. Every collaboration begins with understanding the
              idea, respecting the people behind it and building an approach
              suited to its needs.
            </p>

            <p className="text-base leading-relaxed text-brand-beige/75 md:text-lg">
              Our ambition is to build a production company defined by the
              quality of its relationships, the care behind its work, and the
              consistency of its execution. Rooted in Egypt, with an outlook
              that extends beyond its borders.
            </p>
          </div>
        </div>

        {/* CLOSING PHILOSOPHY STATEMENT */}
        <div className="mt-20 border-t border-brand-beige/25 pt-8 md:mt-28 md:pt-10">
          <p className="max-w-5xl font-display text-[clamp(1.8rem,3.3vw,3.7rem)] leading-[1.15]">
            WE THINK LIKE STORYTELLERS.
            <br />
            <span className="text-brand-orange">WE WORK LIKE PRODUCERS</span>
            <span className="text-brand-orange">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
