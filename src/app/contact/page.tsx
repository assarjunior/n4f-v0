import Image from "next/image";
import type { Metadata } from "next";

import { company } from "@/config/company";
import { seoCopy } from "@/config/seo";
import { createSocialMetadata } from "@/lib/social-metadata";

// ============================================================
// 01. SEO METADATA
// ============================================================

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.contact.title,
  },

  description: seoCopy.pages.contact.description,

  alternates: {
    canonical: "/contact",
  },

  ...createSocialMetadata(
    "/contact",
    seoCopy.pages.contact,
    "/og/company",
    "Ninety 4 Film — Contact Our Production Team",
  ),
};

// ============================================================
// 02. CONTACT PAGE
// ============================================================

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1 bg-brand-maroon text-brand-beige">
      {/* ====================================================
          01 / CONTACT HERO
          ==================================================== */}

      <section
        aria-labelledby="contact-hero-heading"
        className="bg-brand-maroon text-brand-beige"
      >
        <div className="container-editorial py-20 md:py-28 lg:py-12">
          {/* TOP EDITORIAL LABEL */}

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-brand-orange" />

              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#DA8A4B]">
                Ninety 4 Film / Contact
              </p>
            </div>
          </div>

          {/* ====================================================
              HERO COMPOSITION
              ==================================================== */}

          <div
            className="
              mt-12 grid items-center gap-14
              lg:mt-12
              lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
              lg:gap-12
              xl:gap-20
            "
          >
            {/* ================================================
                LEFT — MAIN STATEMENT
                ================================================ */}

            <div className="flex min-w-0 flex-col">
              {/* EYEBROW */}

              <p
                className="
                  mb-8 font-sans text-xs font-bold
                  uppercase tracking-[0.2em]
                  text-brand-beige/80
                "
              >
                Your Next Production Starts Here
              </p>

              {/* MAIN HEADLINE */}

              <h1
                id="contact-hero-heading"
                className="
                  font-display uppercase
                  text-[clamp(2.7rem,5.6vw,7.5rem)]
                  leading-[1.02]
                  tracking-[-0.035em]
                  text-brand-beige
                "
              >
                <span className="block">LET&apos;S MAKE</span>

                <span className="block">SOMETHING</span>

                <span className="block">
                  WORTH SEEING
                  <span aria-hidden="true" className="text-brand-orange">
                    .
                  </span>
                </span>
              </h1>

              {/* SUPPORTING STATEMENT */}

              <div
                className="
                  mt-12 max-w-xl
                  border-l-2 border-brand-orange
                  pl-5
                  md:mt-16 md:pl-7
                "
              >
                <p
                  className="
                    font-sans text-base
                    font-semibold leading-[1.75]
                    text-brand-beige
                    md:text-lg lg:text-xl
                  "
                >
                  Every production begins somewhere. Tell us what you have in
                  mind.
                </p>

                <p
                  className="
                    mt-4 font-sans text-sm
                    leading-[1.85]
                    text-brand-beige/80
                    md:text-base
                  "
                >
                  From an early creative idea to a production-ready brief,
                  we&apos;re ready to explore what we can build together.
                </p>
              </div>
            </div>

            {/* ================================================
                RIGHT — BUSINESS CARD
                ================================================ */}

            <div
              className="
                flex min-w-0 items-center
                justify-center
                px-3 py-6
                lg:justify-end lg:px-0 lg:py-0
              "
            >
              <div className="relative mx-auto w-full max-w-140 lg:mx-0">
                {/* BEIGE OFFSET CARD BACKING */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0
                    translate-x-3 translate-y-3
                    bg-brand-beige
                    sm:translate-x-4
                    sm:translate-y-4
                  "
                />

                {/* MAIN MAROON BUSINESS CARD */}

                <div
                  className="
                   relative isolate
                   aspect-4/3
                   min-h-64 w-full
                   overflow-hidden
                   border border-brand-orange/70
                   bg-brand-maroon
                   text-brand-beige
                   sm:aspect-7/4
                   sm:min-h-0
                  "
                >
                  {/* INNER EDITORIAL BORDER */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-3
                      border border-brand-beige/25
                      sm:inset-4
                    "
                  />

                  {/* BRAND RING WATERMARK */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute -right-8 -top-8
                      size-40 opacity-15
                      sm:-right-20 sm:-top-20
                      sm:size-80 sm:opacity-20
                    "
                  >
                    <Image
                      src="/brand/ring.svg"
                      alt=""
                      fill
                      sizes="320px"
                      className="object-contain"
                    />
                  </div>

                  {/* CARD CONTENT */}

                  <div
                    className="
                     relative z-10
                     flex h-full flex-col
                     justify-between
                     gap-5 p-5
                     sm:gap-8 sm:p-9
                    "
                  >
                    {/* CARD HEADER — BRAND LOGO */}

                    <div
                      className="
                        flex items-start
                        justify-between gap-4
                      "
                    >
                      <Image
                        src="/Logo2-svg.svg"
                        alt="Ninety 4 Film"
                        width={280}
                        height={70}
                        className="h-auto w-32 sm:w-52"
                      />

                      <p
                        className="
                          shrink-0 text-right
                          font-sans text-[9px]
                          font-semibold uppercase
                          leading-relaxed
                          tracking-[0.14em]
                          text-brand-beige/75
                          sm:text-[10px]
                        "
                      >
                        Cairo
                        <span className="block">Egypt</span>
                      </p>
                    </div>

                    {/* CARD CONTACT DETAILS */}

                    <div className="flex flex-col gap-4">
                      {/* EMAIL */}

                      <div>
                        <p
                          className="
                            mb-1 font-sans text-[10px]
                            font-bold uppercase
                            tracking-[0.18em]
                            text-[#DA8A4B]
                          "
                        >
                          Email
                        </p>

                        <a
                          href={`mailto:${company.email}`}
                          className="
                            inline-block max-w-full
                            break-all font-sans
                            text-sm font-semibold
                            text-brand-beige
                            transition-colors duration-300
                            hover:text-[#DA8A4B]
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-brand-beige
                            sm:text-base
                            motion-reduce:transition-none
                          "
                        >
                          {company.email}
                        </a>
                      </div>

                      {/* WHATSAPP */}

                      <div>
                        <p
                          className="
                            mb-1 font-sans text-[10px]
                            font-bold uppercase
                            tracking-[0.18em]
                            text-[#DA8A4B]
                          "
                        >
                          WhatsApp
                        </p>

                        <a
                          href={company.whatsapp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Contact Ninety 4 Film on WhatsApp at ${company.whatsapp.display} (opens in a new tab)`}
                          className="
                            inline-block
                            font-sans text-sm
                            font-semibold
                            text-brand-beige
                            transition-colors duration-300
                            hover:text-[#DA8A4B]
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-brand-beige
                            sm:text-base
                            motion-reduce:transition-none
                          "
                        >
                          {company.whatsapp.display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              HERO FOOTER
              ==================================================== */}

          <div
            className="
              mt-16 flex flex-col
              justify-between gap-5
              border-t border-brand-beige/25
              pt-6
              md:mt-20
              md:flex-row md:items-center
            "
          >
            <p
              className="
                font-sans text-xs font-bold
                uppercase tracking-[0.16em]
                text-brand-beige
              "
            >
              Independent in Spirit. Collaborative by Design.
            </p>

            <p
              className="
                font-sans text-xs font-semibold
                uppercase tracking-[0.14em]
                text-brand-beige/75
              "
            >
              Film / Television / Commercials
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
