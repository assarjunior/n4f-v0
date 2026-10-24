import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="bg-brand-maroon py-4 md:py-6"
    >
      <div className="container-editorial">
        {/* BEIGE CONTACT PANEL */}
        <div className="relative isolate overflow-hidden rounded-xl bg-brand-beige px-6 py-12 text-brand-maroon sm:px-9 md:px-12 md:py-16 lg:px-16 lg:py-20">
          {/* SOFT DECORATIVE WARMTH */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 78% 40%, rgba(214,131,64,0.14), transparent 65%)",
            }}
          />

          <div className="relative z-10">
            {/* EYEBROW */}
            <p className="mb-7 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-maroon/80 md:mb-10">
              Let&apos;s Make Something
            </p>

            {/* HEADLINE + CONTACT CARD */}
            <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,25rem)] xl:gap-14">
              {/* HEADLINE */}
              <h2
                id="contact-section-heading"
                className="font-display text-[clamp(2.2rem,6.5vw,6.5rem)] leading-[1.02] tracking-[-0.035em] text-brand-maroon"
              >
                <span className="block">YOUR NEXT</span>
                <span className="block">PRODUCTION</span>
                <span className="block">
                  STARTS HERE
                  <span className="text-brand-orange">.</span>
                </span>
              </h2>

              {/* INTERACTIVE CONTACT CARD */}
              <Link
                href="/contact"
                aria-label="Start a conversation with Ninety 4 Film"
                className="
      group relative flex min-h-50 w-full max-w-sm
      flex-col justify-between overflow-hidden
      border border-brand-maroon/50 bg-brand-maroon/5
      p-6 text-brand-maroon
      transition-[background-color,color,border-color] duration-500
      hover:border-brand-maroon hover:bg-brand-maroon
      hover:text-brand-beige
      focus-visible:border-brand-maroon
      focus-visible:bg-brand-maroon
      focus-visible:text-brand-beige
      focus-visible:outline-2
      focus-visible:outline-offset-4
      focus-visible:outline-brand-orange
      sm:min-h-57.5
      xl:min-h-72.5 xl:max-w-none xl:p-8
      motion-reduce:transition-none
    "
              >
                {/* TOP ROW */}
                <span className="flex items-start justify-between gap-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]">
                    Have a Project?
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="
          size-8 shrink-0 text-brand-orange
          transition-transform duration-500
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-focus-visible:-translate-y-1
          group-focus-visible:translate-x-1
          motion-reduce:transform-none
          motion-reduce:transition-none
        "
                  />
                </span>

                {/* MAIN CARD TITLE */}
                <span className="font-display text-[clamp(2.2rem,3.2vw,3.8rem)] leading-none">
                  LET&apos;S TALK.
                </span>

                {/* BOTTOM CTA */}
                <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                  Start a Conversation →
                </span>
              </Link>
            </div>

            {/* SUPPORTING TEXT & CTA */}
            <div className="mt-9 flex flex-col items-start justify-between gap-8 border-t border-brand-maroon/20 pt-7 md:mt-12 lg:flex-row lg:items-end">
              <p className="font-sans text-base leading-relaxed text-brand-maroon/85 md:text-lg">
                From films and series to commercials and international
                productions in Egypt, we&apos;re ready to discuss your next
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
