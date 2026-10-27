const principles = [
  {
    number: "01",
    title: "THE IDEA COMES FIRST.",
    category: "Creative Integrity",
    description:
      "Every project has something at its heart: a story, a message, an emotion, or a creative ambition. Our responsibility begins with understanding that intention. We believe production decisions should serve the idea, not force the idea to fit the production.",
  },
  {
    number: "02",
    title: "WE BUILD TOGETHER.",
    category: "Collaboration by Design",
    description:
      "Filmmaking is a collective effort. Directors, producers, writers, artists, technicians and clients all bring something essential to the process. We believe in clear communication, mutual respect and building the right team around the needs of each project.",
  },
  {
    number: "03",
    title: "DISCIPLINE MAKES ROOM.",
    category: "Production Responsibility",
    description:
      "Great creative work needs the freedom to explore, but that freedom depends on preparation. Thoughtful budgets, realistic schedules, clear responsibilities and decisive production management create the conditions for creativity to thrive, especially when challenges arise.",
  },
  {
    number: "04",
    title: "ROOTED HERE. OPEN BEYOND.",
    category: "Egyptian Roots, Wider Outlook",
    description:
      "Cairo is where we work and where our understanding of filmmaking has taken shape. We value the people, perspectives and creative possibilities of the Egyptian industry while remaining open to new voices, international collaborations and stories that travel beyond borders.",
  },
] as const;

export function OurPhilosophy() {
  return (
    <section
      id="our-philosophy"
      aria-labelledby="our-philosophy-heading"
      className="scroll-mt-24 bg-brand-beige text-brand-maroon"
    >
      <div className="container-editorial py-20 md:py-28 lg:py-32">
        {/* SECTION INTRODUCTION */}
        <div
          className="
            grid gap-8 border-b border-brand-maroon/30 pb-12
            md:pb-16
            lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]
            lg:items-end lg:gap-16
          "
        >
          {/* HEADLINE */}
          <div className="min-w-0">
            <p
              className="
                mb-7 font-sans text-xs font-bold
                uppercase tracking-[0.22em]
              "
            >
              02 / Our Philosophy
            </p>

            <h2
              id="our-philosophy-heading"
              className="
                max-w-5xl font-display
                text-[clamp(2.5rem,5.1vw,6rem)]
                leading-[1.04] tracking-[-0.035em]
              "
            >
              WHAT WE BELIEVE
              <br />
              <span className="text-brand-orange">SHOWS IN</span>
              <br />
              THE WORK
              <span className="text-brand-orange">.</span>
            </h2>
          </div>

          {/* INTRODUCTION */}
          <div className="max-w-xl lg:pb-2">
            <div aria-hidden="true" className="mb-7 h-1 w-16 bg-brand-orange" />

            <p
              className="
                font-sans text-base leading-relaxed
                text-brand-maroon/85
                md:text-lg
              "
            >
              Our identity isn&apos;t defined by a single genre or the scale of
              a production. It&apos;s defined by the decisions we make, the
              people we work with and the responsibility we take for bringing an
              idea to life.
            </p>

            <p
              className="
                mt-5 font-sans text-sm leading-relaxed
                text-brand-maroon/75 md:text-base
              "
            >
              These are the principles that shape how we approach every creative
              challenge.
            </p>
          </div>
        </div>

        {/* FOUR PHILOSOPHY PRINCIPLES */}
        <ol className="list-none">
          {principles.map((principle) => (
            <li
              key={principle.number}
              className="
                grid min-w-0
                grid-cols-[2.5rem_minmax(0,1fr)]
                gap-x-4 gap-y-6
                border-b border-brand-maroon/25
                py-10
                sm:grid-cols-[3.5rem_minmax(0,1fr)]
                sm:gap-x-7
                md:py-14
                lg:grid-cols-[4.5rem_minmax(0,1.15fr)_minmax(0,0.85fr)]
                lg:gap-x-12 lg:py-16
              "
            >
              {/* NUMBER */}
              <span
                className="
                  pt-2 font-sans text-sm font-bold
                  tracking-[0.12em] text-brand-maroon
                "
              >
                {principle.number}
              </span>

              {/* PRINCIPLE STATEMENT */}
              <div className="min-w-0">
                <h3
                  className="
                    max-w-2xl font-display
                    text-[clamp(2rem,3.5vw,4.2rem)]
                    leading-[1.08]
                    tracking-tight
                  "
                >
                  {principle.title}
                </h3>

                <div
                  aria-hidden="true"
                  className="mt-7 h-1 w-12 bg-brand-orange"
                />
              </div>

              {/* DESCRIPTION */}
              <div
                className="
                  col-start-2 min-w-0
                  lg:col-start-3 lg:self-center
                "
              >
                <p
                  className="
                    mb-5 font-sans text-xs font-bold
                    uppercase tracking-[0.17em]
                    text-brand-maroon/75
                  "
                >
                  {principle.category}
                </p>

                <p
                  className="
                    max-w-xl font-sans text-base
                    leading-[1.85] text-brand-maroon/85
                    md:text-lg
                  "
                >
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CLOSING SIGNATURE */}
        <div
          className="
            mt-12 flex flex-col gap-4
            md:mt-16 md:flex-row
            md:items-center md:justify-between
          "
        >
          <p
            className="
              font-sans text-xs font-bold uppercase
              tracking-[0.18em]
            "
          >
            Ninety 4 Film
          </p>

          <p
            className="
              font-sans text-xs font-semibold uppercase
              tracking-[0.15em]
              text-brand-maroon/70
            "
          >
            Independent in Spirit. Collaborative by Design.
          </p>
        </div>
      </div>
    </section>
  );
}
