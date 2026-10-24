import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceGroups = [
  {
    title: "Narrative & Documentary",
    range: "01—04",
    services: [
      {
        number: "01",
        id: "film",
        title: "Feature Films",
        description:
          "Stories built for the big screen, from creative development to final delivery.",
        image: "/services/film-series.jpg",
      },
      {
        number: "02",
        id: "series",
        title: "Series",
        description:
          "Episodic storytelling supported by consistent creative and production coordination.",
        image: "/services/series.png",
      },
      {
        number: "03",
        id: "short-film",
        title: "Short Films",
        description:
          "Focused filmmaking for distinctive voices and powerful ideas.",
        image: "/services/short-films.jpeg",
      },
      {
        number: "04",
        id: "documentary",
        title: "Documentaries",
        description:
          "Real stories approached with curiosity, sensitivity and a clear creative purpose.",
        image: "/services/documentary.jpg",
      },
    ],
  },
  {
    title: "Commercial & Music",
    range: "05—06",
    services: [
      {
        number: "05",
        id: "commercial",
        title: "Commercials",
        description:
          "Brand ambitions translated into purposeful, visually distinctive productions.",
        image: "/services/commercial.jpg",
      },
      {
        number: "06",
        id: "music-video",
        title: "Music Videos",
        description:
          "Performance, rhythm and imagery brought together in a visual world of their own.",
        image: "/services/music-videos.jpg",
      },
    ],
  },
  {
    title: "Live & Factual",
    range: "07—08",
    services: [
      {
        number: "07",
        id: "event",
        title: "Events",
        description:
          "Capturing the energy, atmosphere and defining moments of live experiences.",
        image: "/services/events.jpg",
      },
      {
        number: "08",
        id: "media-coverage",
        title: "Media Coverage",
        description:
          "Purposeful visual coverage with professional coordination and attention to detail.",
        image: "/services/media-coverage.jpg",
      },
    ],
  },
] as const;

export function WhatWeProduce() {
  return (
    <section
      id="what-we-produce"
      aria-labelledby="what-we-produce-heading"
      className="bg-brand-maroon py-12 text-brand-beige md:py-12"
    >
      <div className="container-editorial">
        {/* Section Intro */}
        <div className="mb-14 max-w-5xl">
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            What We Produce
          </p>

          <h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05]"
            id="what-we-produce-heading"
          >
            ONE PRODUCTION PARTNER.
            <br />
            MANY WAYS TO TELL A STORY.
          </h2>
        </div>

        {/* Service Groups */}
        <div className="space-y-16 md:space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              {/* Category Heading */}
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-brand-beige/25 pb-4">
                <h3 className="font-sans text-base font-semibold uppercase tracking-[0.08em] md:text-xl">
                  {group.title}
                </h3>
              </div>

              {/* Two-COLUMN photographic grid */}
              <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                {group.services.map((service) => (
                  <li
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 target:outline-2 target:outline-offset-4 target:outline-brand-orange"
                  >
                    <Link
                      href={"/contact"}
                      aria-labelledby={`Discuss ${service.title} with Ninety 4 Film`}
                      className="group relative isolate flex min-h-72.5 flex-col justify-between overflow-hidden border border-brand-beige/15 bg-[#37110E] p-6 text-brand-beige transition-colors duration-500 hover:border-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange md:min-h-85 md:p-8 motion-reduce:transition-none"
                    >
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transition-none"
                      />

                      {/* Cinematic Gradient */}
                      <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-black/25 transition-colors duration-500" />

                      {/* Service description */}
                      <span className="relative z-10 block max-w-lg">
                        <span className="mb-3 block font-display text-[clamp(1.8rem,3vw,3rem)] leading-[1.05]">
                          {service.title}
                        </span>

                        <span className="block max-w-md font-sans text-sm leading-relaxed text-brand-beige/85 md:text-base">
                          {service.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* unconventional projects */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-brand-beige/25 pt-8 md:flex-row md:items-center">
          <p className="max-w-xl font-sans text-sm leading-relaxed text-brand-beige/80 md:text-base">
            Have something different in mind? We&apos;re open to ideas that
            don&apos;t fit a conventional format.
          </p>

          <Link
            href={"/contact"}
            className="inline-flex items-center gap-3 border-b border-brand-orange pb-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
          >
            Tell Us About It
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
