import type { Metadata } from "next";
import { seoCopy } from "@/config/seo";
import { createSocialMetadata } from "@/lib/social-metadata";
import { ContactBusinessCard } from "./_components/ContactBusinessCard";

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

          <div
            className="n4f-hero-reveal flex items-center justify-between gap-4"
            style={{ animationDelay: "150ms" }}
          >
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
                className="n4f-hero-reveal
                  mb-8 font-sans text-xs font-bold
                  uppercase tracking-[0.2em]
                  text-brand-beige/80
                "
                style={{ animationDelay: "250ms" }}
              >
                Your Next Production Starts Here
              </p>

              {/* MAIN HEADLINE */}

              <h1
                id="contact-hero-heading"
                className="n4f-hero-reveal
                  font-display uppercase
                  text-[clamp(2.7rem,5.6vw,7.5rem)]
                  leading-[1.02]
                  tracking-[-0.035em]
                  text-brand-beige
                "
                style={{ animationDelay: "350ms" }}
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
                className="n4f-hero-reveal
                  mt-12 max-w-xl
                  border-l-2 border-brand-orange
                  pl-5
                  md:mt-16 md:pl-7
                "
                style={{ animationDelay: "650ms" }}
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
              className="n4f-hero-reveal
                flex min-w-0 items-center
                justify-center
                px-3 py-6
                lg:justify-end lg:px-0 lg:py-0
              "
              style={{ animationDelay: "500ms" }}
            >
              <ContactBusinessCard variant="reference" />
            </div>
          </div>

          {/* ====================================================
              HERO FOOTER
              ==================================================== */}

          <div
            className="n4f-hero-reveal
              mt-16 flex flex-col
              justify-between gap-5
              border-t border-brand-beige/25
              pt-6
              md:mt-20
              md:flex-row md:items-center
            "
            style={{ animationDelay: "850ms" }}
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
