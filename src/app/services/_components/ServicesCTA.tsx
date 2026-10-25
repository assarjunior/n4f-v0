import { ArrowUpRight } from "lucide-react";
import { TornPaperButton } from "@/components/layout/torn-paper-button";

export function ServicesCTA() {
  return (
    <section
      aria-labelledby="services-contact-heading"
      className="bg-brand-maroon py-16 text-brand-beige md:py-24 lg:py-28"
    >
      <div className="container-editorial">
        {/* OUTER EDITORIAL FRAME */}
        <div className="border border-brand-beige/50 p-2 sm:p-3">
          {/* TWO-TONE STATEMENT PANEL */}
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            {/* LEFT — STATEMENT */}
            <div
              className="
                relative flex min-w-0 flex-col
                justify-between overflow-hidden
                bg-brand-beige px-6 py-12
                text-brand-maroon
                sm:px-10 sm:py-16
                lg:min-h-120 lg:px-12 lg:py-16
                xl:px-16 xl:py-20
              "
            >
              {/* ORANGE TOP ACCENT */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1.5 w-28 bg-brand-orange"
              />

              {/* EYEBROW */}
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em]">
                04 / Start a Project
              </p>

              {/* MAIN STATEMENT */}
              <h2
                id="services-contact-heading"
                className="
                  my-12 font-display
                  text-[clamp(2.8rem,5.3vw,6.5rem)]
                  leading-[1.02] tracking-[-0.035em]
                  sm:my-16
                "
              >
                <span className="block">LET&apos;S BRING</span>

                <span className="block">
                  IT TO LIFE
                  <span className="text-brand-orange">.</span>
                </span>
              </h2>

              {/* STATEMENT UNDERLINE */}
              <div aria-hidden="true" className="h-1 w-20 bg-brand-orange" />
            </div>

            {/* RIGHT — CONVERSATION & ACTION */}
            <div
              className="
                flex min-w-0 flex-col
                justify-between gap-12
                bg-brand-maroon px-6 py-10
                sm:px-10 sm:py-14
                lg:px-10 lg:py-16
                xl:px-14 xl:py-20
              "
            >
              {/* TOP DECORATIVE DETAIL */}
              <div className="flex items-start justify-between gap-5">
                <p
                  className="
                    font-sans text-xs font-bold
                    uppercase tracking-[0.2em]
                    text-brand-orange
                  "
                >
                  Your Next Production
                </p>

                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="size-9 shrink-0 text-brand-orange"
                />
              </div>

              {/* INVITATION */}
              <div className="max-w-md">
                <p
                  className="
                    font-sans text-lg font-medium
                    leading-relaxed text-brand-beige
                    md:text-xl lg:text-2xl
                  "
                >
                  Every great production begins with a conversation.
                </p>

                <p
                  className="
                    mt-6 font-sans text-sm
                    leading-relaxed text-brand-beige/75
                    md:text-base
                  "
                >
                  Whether you have a fully developed project, a creative brief,
                  or an idea still taking shape, we&apos;re ready to hear about
                  it. Tell us what you&apos;re imagining, and let&apos;s explore
                  the people, planning and production approach needed to bring
                  it to the screen.
                </p>
              </div>

              {/* PRIMARY CTA */}
              <div className="flex flex-col items-start gap-4">
                <TornPaperButton href="/contact">
                  Start a Project
                </TornPaperButton>

                <p
                  className="
                    font-sans text-[0.65rem]
                    font-semibold uppercase
                    tracking-[0.16em]
                    text-brand-beige/55
                  "
                >
                  Ninety 4 Film / Cairo, Egypt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
