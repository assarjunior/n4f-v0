import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="
        flex min-h-[75svh] flex-1 flex-col
        bg-brand-maroon text-brand-beige
      "
    >
      <div
        className="
          container-editorial
          flex flex-1 flex-col
          py-12 sm:py-16 lg:py-20
        "
      >
        {/* TOP LABEL */}
        <div
          className="
            mb-8 flex items-center justify-between
            gap-4 border-b border-brand-beige/25
            pb-5 sm:mb-12
          "
        >
          <p
            className="
              text-xs font-bold uppercase
              tracking-[0.2em]
            "
          >
            Ninety 4 Film
          </p>

          <Link
            href="/"
            className="
              inline-flex min-h-11
              items-center gap-3
              border-b border-brand-beige
              pb-2
              text-xs font-bold uppercase
              tracking-[0.16em]
              text-brand-beige

              hover:border-brand-orange
              hover:text-brand-orange

              focus-visible:rounded-sm
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-brand-orange
            "
          >
            Back to Home
          </Link>

          <p
            className="
              text-xs font-semibold uppercase
              tracking-[0.18em] text-brand-orange
            "
          >
            Error / 404
          </p>
        </div>

        {/* MISSING FRAME */}
        <div
          className="
            relative flex flex-1 flex-col
            justify-center
            border border-brand-beige/35
            px-6 py-16
            sm:px-12 sm:py-20
            lg:px-16 lg:py-24
          "
        >
          {/* FRAME CORNERS */}
          <span
            aria-hidden="true"
            className="
              absolute -top-px -left-px
              h-8 w-8
              border-t-2 border-l-2
              border-brand-orange
            "
          />

          <span
            aria-hidden="true"
            className="
              absolute -top-px -right-px
              h-8 w-8
              border-t-2 border-r-2
              border-brand-orange
            "
          />

          <span
            aria-hidden="true"
            className="
              absolute -bottom-px -left-px
              h-8 w-8
              border-b-2 border-l-2
              border-brand-orange
            "
          />

          <span
            aria-hidden="true"
            className="
              absolute -bottom-px -right-px
              h-8 w-8
              border-b-2 border-r-2
              border-brand-orange
            "
          />

          {/* ERROR CODE */}
          <p
            aria-hidden="true"
            className="
              font-display
              text-[clamp(6rem,20vw,15rem)]
              leading-none tracking-[-0.06em]
            "
          >
            404
            <span className="text-brand-orange">.</span>
          </p>

          {/* HEADLINE */}
          <h1
            className="
              mt-5 max-w-5xl
              font-display
              text-[clamp(2.25rem,5.5vw,6rem)]
              leading-[1.05]
              tracking-[-0.035em]
              sm:mt-8
            "
          >
            FRAME NOT FOUND.
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6 max-w-lg
              text-base leading-relaxed
              text-brand-beige/80
              sm:text-lg
            "
          >
            Looks like this scene didn&apos;t make the final cut.
          </p>

          {/* FRAME IDENTIFIER */}
          <p
            className="
              mt-12 text-[0.65rem]
              font-semibold uppercase
              tracking-[0.2em]
              text-brand-beige/55
              sm:mt-16
            "
          >
            Missing Frame / 404
          </p>
        </div>

        {/* SINGLE NAVIGATION ACTION */}
        <div
          className="
            mt-8 flex justify-start
            sm:mt-12
          "
        ></div>
      </div>
    </main>
  );
}
