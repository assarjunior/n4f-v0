import Image from "next/image";

import { company } from "@/config/company";

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1 bg-brand-maroon">
      {/* =====================================================
          01 / CONTACT HERO
          ===================================================== */}
      <section
        aria-labelledby="contact-hero-heading"
        className="bg-brand-beige text-brand-maroon"
      >
        <div className="container-editorial py-14 md:py-20 lg:py-28">
          {/* TOP EDITORIAL LABELS */}
          <div className="flex items-center justify-between gap-4 border-b border-brand-maroon/30 pb-6">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em]">
              Ninety 4 Film / Contact
            </p>

            <p className="hidden font-sans text-xs font-semibold uppercase tracking-[0.16em] sm:block">
              {company.location}
            </p>
          </div>

          {/* HERO COMPOSITION */}
          <div
            className="
              mt-12 grid items-center gap-14
              lg:mt-20
              lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
              lg:gap-12
              xl:gap-20
            "
          >
            {/* ===============================================
                LEFT — MAIN STATEMENT
                =============================================== */}
            <div className="flex min-w-0 flex-col">
              {/* EYEBROW */}
              <p className="mb-8 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-maroon/75">
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
                "
              >
                <span className="block">LET&apos;S MAKE</span>

                <span className="block">SOMETHING</span>

                <span className="block">
                  WORTH SEEING
                  <span className="text-brand-orange">.</span>
                </span>
              </h1>

              {/* SUPPORTING STATEMENT */}
              <div className="mt-12 max-w-xl border-l-2 border-brand-orange pl-5 md:mt-16 md:pl-7">
                <p className="font-sans text-base font-semibold leading-[1.75] md:text-lg lg:text-xl">
                  Every production begins somewhere. Tell us what you have in
                  mind.
                </p>

                <p className="mt-4 font-sans text-sm leading-[1.85] text-brand-maroon/75 md:text-base">
                  From an early creative idea to a production-ready brief,
                  we&apos;re ready to explore what we can build together.
                </p>
              </div>
            </div>

            {/* ===============================================
                RIGHT — BUSINESS CARD
                =============================================== */}
            <div className="flex min-w-0 items-center justify-center px-3 py-6 lg:justify-end lg:px-0 lg:py-0">
              <div className="relative mx-auto w-full max-w-140 lg:mx-0">
                {/* OFFSET CARD OUTLINE */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0
                    translate-x-3 translate-y-3
                    border border-brand-maroon/35
                    sm:translate-x-4
                    sm:translate-y-4
                  "
                />

                {/* MAIN BUSINESS CARD */}
                <div
                  className="
                    relative isolate
                    aspect-7/4
                    min-h-64 w-full
                    overflow-hidden
                    border border-brand-orange/55
                    bg-brand-maroon
                    text-brand-beige
                    sm:min-h-72
                  "
                >
                  {/* INNER EDITORIAL BORDER */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-3
                      border border-brand-beige/20
                      sm:inset-4
                    "
                  />

                  {/* BRAND RING WATERMARK */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute -right-16 -top-16
                      size-64 opacity-20
                      sm:-right-20 sm:-top-20
                      sm:size-80
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
                      relative z-10 flex h-full
                      flex-col justify-between
                      gap-8 p-6
                      sm:p-9
                    "
                  >
                    {/* CARD HEADER — LOGO */}
                    <div className="flex items-start justify-between gap-4">
                      <Image
                        src="/Logo2-svg.svg"
                        alt="Ninety 4 Film"
                        width={280}
                        height={70}
                        className="h-auto w-36 sm:w-52"
                      />

                      <p
                        className="
                          shrink-0 text-right
                          font-sans text-[9px]
                          font-semibold uppercase
                          leading-relaxed
                          tracking-[0.14em]
                          text-brand-beige/65
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
                            mb-1 font-sans text-[9px]
                            font-bold uppercase
                            tracking-[0.18em]
                            text-brand-orange
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
                            hover:text-brand-orange
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-brand-orange
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
                            mb-1 font-sans text-[9px]
                            font-bold uppercase
                            tracking-[0.18em]
                            text-brand-orange
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
                            inline-block font-sans
                            text-sm font-semibold
                            text-brand-beige
                            transition-colors duration-300
                            hover:text-brand-orange
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-brand-orange
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

          {/* HERO FOOTER */}
          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-brand-maroon/30 pt-6 md:mt-20 md:flex-row md:items-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.16em]">
              Independent in Spirit. Collaborative by Design.
            </p>

            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-maroon/65">
              Film / Television / Commercials
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
