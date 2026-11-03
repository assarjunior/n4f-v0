"use client";

import { useEffect } from "react";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { ArrowLeft, RotateCcw } from "lucide-react";
import "./globals.css";
import Link from "next/link";

// Match the typography configuration in layout.tsx.
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const aquifer = localFont({
  src: "../fonts/Aquifer.ttf",
  display: "swap",
  variable: "--font-aquifer",
  weight: "400",
  style: "normal",
});

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Diagnostic logging only.
    // Centralized monitoring will be added separately.
    console.error("Ninety 4 Film — Global Error:", error);
  }, [error]);

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${aquifer.variable} h-full`}
    >
      <body
        className="
          flex min-h-svh flex-col
          bg-brand-maroon
          font-sans text-brand-beige
          antialiased
        "
      >
        <title>Something Went Off Script | Ninety 4 Film</title>

        <main
          id="main-content"
          className="
            flex min-h-svh flex-1 flex-col
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
            {/* SECTION IDENTIFICATION */}
            <div
              className="
                mb-8 flex items-center justify-between
                gap-4
                border-b border-brand-beige/25
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

              <p
                className="
                  text-xs font-semibold uppercase
                  tracking-[0.18em]
                  text-brand-orange
                "
              >
                Error / System
              </p>
            </div>

            {/* ERROR FRAME */}
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
              {/* DECORATIVE CORNERS */}
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

              {/* ERROR LABEL */}
              <p
                className="
                  mb-6 text-xs font-bold uppercase
                  tracking-[0.2em]
                  text-brand-orange
                "
              >
                An Unexpected Error
              </p>

              {/* MAIN HEADLINE */}
              <h1
                className="
                  max-w-5xl font-display
                  text-[clamp(2.5rem,6vw,6.5rem)]
                  leading-[1.05]
                  tracking-[-0.035em]
                "
              >
                SOMETHING WENT
                <span className="block">
                  OFF SCRIPT
                  <span className="text-brand-orange">.</span>
                </span>
              </h1>

              {/* USER-FACING MESSAGE */}
              <p
                className="
                  mt-7 max-w-xl
                  text-base leading-relaxed
                  text-brand-beige/85
                  sm:text-lg
                "
              >
                We couldn&apos;t load this part of the website. Please try
                again, or return to the homepage.
              </p>

              {/* RECOVERY ACTIONS */}
              <div
                className="
                  mt-10 flex flex-wrap items-center
                  gap-x-8 gap-y-5 sm:mt-12
                "
              >
                <button
                  type="button"
                  onClick={() => reset()}
                  className="
                    inline-flex min-h-11 cursor-pointer
                    items-center justify-center gap-3
                    border border-brand-beige
                    bg-brand-beige
                    px-6 py-3
                    text-xs font-bold uppercase
                    tracking-[0.16em]
                    text-brand-maroon

                    hover:bg-transparent
                    hover:text-brand-beige

                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-brand-beige
                  "
                >
                  <RotateCcw aria-hidden="true" className="size-4 shrink-0" />
                  Try Again
                </button>

                {/* Native navigation for root-level recovery */}
                <Link
                  href="/"
                  className="
                    inline-flex min-h-11 items-center
                    gap-3 border-b border-brand-beige
                    text-xs font-bold uppercase
                    tracking-[0.16em]
                    text-brand-beige

                    hover:border-brand-orange
                    hover:text-brand-orange

                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-brand-beige
                  "
                >
                  <ArrowLeft aria-hidden="true" className="size-5 shrink-0" />
                  Back to Home
                </Link>
              </div>

              {/* EDITORIAL IDENTIFIER */}
              <p
                className="
                  mt-14 text-[0.65rem]
                  font-semibold uppercase
                  tracking-[0.2em]
                  text-brand-beige/60
                  sm:mt-20
                "
              >
                Production Interrupted / System Error
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
