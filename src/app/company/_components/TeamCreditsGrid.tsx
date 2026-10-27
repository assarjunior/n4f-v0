import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { TeamCredit } from "@/types/types-team";

type TeamCreditsGridProps = {
  credits: readonly TeamCredit[];
};

export function TeamCreditsGrid({ credits }: TeamCreditsGridProps) {
  return (
    <ul
      className="
        mt-10 grid list-none
        grid-cols-2 gap-x-3 gap-y-8
        sm:grid-cols-3 sm:gap-x-4
        lg:grid-cols-4 lg:gap-x-5
        2xl:grid-cols-5
      "
    >
      {credits.map((credit, index) => {
        const hasArtwork = Boolean(credit.artwork);
        const isLightCard = !hasArtwork && index % 3 === 1;

        const artworkClasses = isLightCard
          ? "bg-brand-beige text-brand-maroon"
          : "bg-[#37130F] text-brand-beige";

        const content = (
          <>
            {/* ================================================
                PROJECT ARTWORK
                ================================================ */}
            <div
              className={`
                relative aspect-4/5
                overflow-hidden border
                border-brand-beige/20
                ${artworkClasses}
              `}
            >
              {credit.artwork ? (
                <Image
                  src={credit.artwork.src}
                  alt={credit.artwork.alt}
                  fill
                  sizes="
                    (max-width: 639px) 50vw,
                    (max-width: 1023px) 33vw,
                    (max-width: 1535px) 25vw,
                    20vw
                  "
                  style={{
                    objectPosition: credit.artwork.objectPosition ?? "center",
                  }}
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.035]
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                />
              ) : (
                /* EDITORIAL PLACEHOLDER */
                <div
                  className="
                    flex h-full flex-col
                    justify-between p-3
                    sm:p-4
                  "
                >
                  <p
                    className="
                      font-sans text-[9px]
                      font-semibold uppercase
                      tracking-[0.12em]
                      opacity-70
                      sm:text-[10px]
                    "
                  >
                    Selected Credit
                  </p>

                  <p
                    className="
                      font-display uppercase
                      text-[clamp(0.95rem,1.5vw,1.6rem)]
                      leading-[1.12]
                      wrap-break-word
                    "
                  >
                    {credit.title}
                  </p>

                  <div
                    aria-hidden="true"
                    className="
                      h-0.5 w-10
                      bg-brand-orange
                    "
                  />
                </div>
              )}

              {/* EXTERNAL LINK INDICATOR */}
              {credit.url && (
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-3 right-3
                    flex size-8 items-center
                    justify-center
                    bg-brand-orange
                    text-brand-maroon
                  "
                >
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="
                      size-4
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      motion-reduce:transition-none
                    "
                  />
                </span>
              )}
            </div>

            {/* ================================================
                PROJECT INFORMATION
                ================================================ */}
            <div className="pt-3">
              {/* TITLE AND YEAR */}
              <div
                className="
                  flex items-start
                  justify-between gap-2
                "
              >
                <h3
                  className="
                    min-w-0 font-sans
                    text-sm font-semibold
                    leading-snug
                    text-brand-beige
                    sm:text-base
                  "
                >
                  {credit.title}
                </h3>

                {credit.year && (
                  <span
                    className="
                      shrink-0 pt-0.5
                      font-sans text-[11px]
                      font-semibold
                      text-brand-orange
                    "
                  >
                    {credit.year}
                  </span>
                )}
              </div>

              {/* INDIVIDUAL PROFESSIONAL ROLE */}
              {credit.role && (
                <p
                  className="
                    mt-1 font-sans text-xs
                    leading-relaxed
                    text-brand-beige/70
                  "
                >
                  {credit.role}
                </p>
              )}

              {/* EXTERNAL SOURCE LABEL */}
              {credit.url && (
                <p
                  className="
                    mt-2 font-sans
                    text-[10px] font-semibold
                    uppercase tracking-[0.12em]
                    text-brand-orange
                  "
                >
                  View {credit.source ?? "Project"}
                </p>
              )}
            </div>
          </>
        );

        return (
          <li
            key={`${credit.title}-${credit.year ?? "na"}-${index}`}
            className="min-w-0"
          >
            {credit.url ? (
              /* LINKED CREDIT */
              <a
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${credit.title} on ${
                  credit.source ?? "external website"
                }`}
                className="
                  group block h-full
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand-orange
                "
              >
                {content}
              </a>
            ) : (
              /* CREDIT WITHOUT EXTERNAL REFERENCE */
              <div className="h-full">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
