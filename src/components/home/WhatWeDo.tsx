import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Film & Series",
    featured: false,
    image: "/capabilities/film-series.png",
    href: "/services/#film",
  },
  {
    number: "02",
    title: "Commercials & Branded Content",
    featured: false,
    image: "/capabilities/commercial.png",
    href: "/services/#commercial",
  },
  {
    number: "03",
    title: "Production Service",
    featured: true,
    image: "/capabilities/production-services.png",
    href: "/services/#production-service",
  },
  {
    number: "04",
    title: "Short FIlms",
    featured: false,
    image: "/capabilities/short-films.png",
    href: "/services/#short-film",
  },
  {
    number: "05",
    title: "Music Videos",
    featured: false,
    image: "/capabilities/music-videos.png",
    href: "/services/#music-video",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="bg-brand-maroon py-16 text-brand-beige md:py-24"
    >
      <div className="container-editorial">
        {/* Heading */}
        <div className="mb-7 md:mb-10">
          <h2
            className="font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-none"
            id="what-we-do-heading"
          >
            What We Do.
          </h2>
          <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            From Development to Delivery.
          </p>
        </div>

        {/* PHOTOGRAPHIC CAPABILITY GRID */}
        <ul className="grid list-none grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-3">
          {capabilities.map((item) => (
            <li
              key={item.number}
              className={item.featured ? "sm:col-span-2" : ""}
            >
              <Link
                href={item.href}
                aria-label={`Explore ${item.title}`}
                className={[
                  "group relative isolate flex w-full flex-col justify-end overflow-hidden",
                  "border border-brand-beige/25 bg-brand-beige",
                  "px-6 pb-5 pt-12 sm:px-7 sm:pb-5 lg:px-8",
                  "min-h-38.75 sm:min-h-36.25",
                  "transition-colors duration-500",
                  "hover:border-brand-beige",
                  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange",
                  "motion-reduce:transition-none",
                  item.featured ? "sm:min-h-41.25" : "",
                ].join(" ")}
              >
                {/* Full Bleed Photo */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    item.featured
                      ? "(max-width: 640px) 100vw, 95vw"
                      : "(max-width: 640px) 100vw, 48vw"
                  }
                  className="object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none"
                />
                {/* Dark Cinematic Overlay */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none"
                />

                {/* Card Content */}
                <span className="relative z-10 flex w-full items-end justify-between gap-4">
                  <span
                    className={[
                      "max-w-[26ch] font-sans text-base font-bold uppercase",
                      "leading-[1.2] tracking-[0.06em] text-brand-beige",
                      "transition-colors duration-500",
                      "group-hover:text-brand-maroon group-focus-visible:text-brand-maroon",
                      "motion-reduce:transition-none",
                      item.featured ? "md:text-xl" : "md:text-lg",
                    ].join(" ")}
                  >
                    {item.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.8}
                    className="size-6 shrink-0 text-brand-orange transition-[color,transform] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-maroon group-focus-visible:text-brand-maroon motion-reduce:transition-none"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* All Services Link */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 hover:border-b hover:border-brand-beige pb-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
