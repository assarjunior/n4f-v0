import Image from "next/image";

const productionCapabilities = [
  {
    number: "01",
    title: "Budgeting & Scheduling",
    description:
      "Building realistic budgets, detailed schedules and production plans that balance creative priorities with practical requirements.",
  },
  {
    number: "02",
    title: "Locations & Permits",
    description:
      "Location research, scouting, permit coordination and the logistical preparation required for filming in Egypt.",
  },
  {
    number: "03",
    title: "Crew & Department Coordination",
    description:
      "Bringing together the right production crew and creative departments for the specific needs, scale and direction of each project.",
  },
  {
    number: "04",
    title: "Equipment & Vendor Sourcing",
    description:
      "Coordinating cameras, lighting, grip, sound and specialist production resources through rental houses and trusted vendors.",
  },
  {
    number: "05",
    title: "On-Set Production Management",
    description:
      "Managing daily operations, crew coordination, communication and logistics to keep production moving with purpose and clarity.",
  },
  {
    number: "06",
    title: "Post-Production Coordination",
    description:
      "Supervising the transition from shoot to final delivery, aligning post-production teams, workflows and deliverables with the creative direction.",
  },
] as const;

export function ProductionServices() {
  return (
    <section
      id="production-service"
      aria-labelledby="production-services-heading"
      className="scroll-mt-28 bg-brand-beige text-brand-maroon"
    >
      <div className="container-editorial py-20 md:py-28 lg:py-32">
        {/* INTRODUCTION + PHOTOGRAPH */}
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 xl:gap-20">
          {/* EDITORIAL INTRODUCTION */}
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-8 font-sans text-xs font-bold uppercase tracking-[0.22em] text-brand-maroon/75">
              02 / Production Services
            </p>

            <h2
              id="production-services-heading"
              className="font-display text-[clamp(2.6rem,4.6vw,5.5rem)] leading-[1.04] tracking-[-0.035em]"
            >
              <span className="block">YOUR VISION.</span>

              <span className="mt-3 block">
                OUR GROUNDWORK
                <span className="text-brand-orange">.</span>
              </span>
            </h2>

            {/* LEAD STATEMENT */}
            <div className="mt-10 border-l-2 border-brand-orange pl-5 md:mt-12 md:pl-7">
              <p className="max-w-2xl font-sans text-lg font-medium leading-relaxed md:text-xl">
                Your creative direction shouldn&apos;t get lost in logistics. We
                connect ambitious ideas with the people, planning and on-ground
                resources needed to bring them to life.
              </p>
            </div>

            {/* SUPPORTING DESCRIPTION */}
            <div className="mt-8 max-w-2xl space-y-5 font-sans text-base leading-relaxed text-brand-maroon/85 md:text-lg">
              <p>
                For agencies, studios, filmmakers and international production
                teams working in Egypt, Ninety 4 Film provides production
                expertise that bridges creative ambition and practical
                execution.
              </p>

              <p>
                Whether supporting an established creative team or coordinating
                an entire production, we bring structure to the process without
                losing sight of the original vision. Every decision, from
                budgeting and crew selection to on-set management, is made with
                the project&apos;s creative and production requirements in mind.
              </p>
            </div>
          </div>

          {/* CINEMATIC PRODUCTION PHOTOGRAPH */}
          <figure className="relative isolate min-h-80 overflow-hidden bg-brand-maroon sm:min-h-105 lg:min-h-145">
            <Image
              src="/capabilities/production-services.png"
              alt="Film production crew working on location"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-center"
            />

            {/* PHOTOGRAPHIC OVERLAY */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent"
            />

            {/* EDITORIAL PHOTO CAPTION */}
            <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 p-6 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-beige md:p-8">
              <span>Production On The Ground</span>
              <span className="shrink-0 text-brand-orange">Egypt</span>
            </figcaption>
          </figure>
        </div>

        {/* CAPABILITIES INTRODUCTION */}
        <div className="mt-20 border-t border-brand-maroon/25 pt-10 md:mt-28 md:pt-12">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-12">
            <div>
              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-maroon/70">
                Production Support
              </p>

              <h3 className="font-display text-[clamp(2rem,3.7vw,4rem)] leading-[1.05]">
                WHAT WE HANDLE.
              </h3>
            </div>

            <p className="max-w-md font-sans text-sm leading-relaxed text-brand-maroon/80 md:text-base">
              The production infrastructure and coordination each project needs,
              built around its specific scope, creative direction and
              challenges.
            </p>
          </div>

          {/* SIX CORE PRODUCTION CAPABILITIES */}
          <ul className="mt-10 grid list-none grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {productionCapabilities.map((capability) => (
              <li
                key={capability.number}
                className="flex flex-col border-t border-brand-maroon/30 pt-6"
              >
                <span className="mb-5 font-sans text-xs font-semibold tracking-[0.15em] text-brand-orange">
                  {capability.number} / 06
                </span>

                <h4 className="max-w-lg font-sans text-lg font-bold leading-snug md:text-xl">
                  {capability.title}
                </h4>

                <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-brand-maroon/80 md:text-base">
                  {capability.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
