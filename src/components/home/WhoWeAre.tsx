import Image from "next/image";
import Link from "next/link";

type WhoWeAreProps = {
  productionImageSrc?: string;
  logoSrc?: string;
  ringSrc?: string;
  productionImageAlt?: string;
};

export function WhoWeAre({
  productionImageSrc = "/who-we-are.png",
  logoSrc = "/brand/94-vertical-maroon.svg",
  ringSrc = "/brand/ring-maroon.svg",
  productionImageAlt = "Film production storyboards and creative planning materials",
}: WhoWeAreProps) {
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-heading">
      {/* LEFT — EDITORIAL TYPOGRAPHY */}
      <div className="who-we-are__panel">
        <h2 id="who-we-are-heading" className="sr-only">
          Who We Are — Ninety 4 Film
        </h2>

        {/* WHO */}
        <div className="who-we-are__top">
          <Link
            href="/company"
            className="who-we-are__word who-we-are__who font-display"
            aria-label="Who — About Ninety 4 Film"
          >
            WHO
          </Link>
        </div>

        {/* COMPANY INTRODUCTION + WE */}
        <div className="who-we-are__middle">
          <div className="who-we-are__intro">
            <p className="who-we-are__statement">
              INDEPENDENT IN SPIRIT.
              <br />
              COLLABORATIVE BY
              <br />
              DESIGN. ROOTED IN EGYPT.
            </p>

            <div className="who-we-are__rule" aria-hidden="true" />

            <p className="who-we-are__description">
              Ninety 4 Film is an Egyptian production company bringing creative
              ambition and production expertise together. From the first idea to
              the final frame, we work to bring stories to life.
            </p>
          </div>

          <Link
            href="/company"
            className="who-we-are__word who-we-are__we font-display"
            aria-label="We — About Ninety 4 Film"
          >
            WE
          </Link>
        </div>

        {/* ARE + BRAND STAMP */}
        <div className="who-we-are__bottom">
          <div className="who-we-are__are-group">
            <Link
              href="/company"
              className="who-we-are__word who-we-are__are font-display"
              aria-label="Are — About Ninety 4 Film"
            >
              ARE
            </Link>
            <span className="who-we-are__period" aria-hidden="true">
              .
            </span>
          </div>

          <div className="who-we-are__stamp" aria-hidden="true">
            <Image
              src={ringSrc}
              alt=""
              width={3062}
              height={3062}
              className="who-we-are__stamp-ring"
            />

            <Image
              src={logoSrc}
              alt=""
              width={2772}
              height={1801}
              className="who-we-are__stamp-logo"
            />
          </div>
        </div>
      </div>

      {/* RIGHT — PRODUCTION PHOTOGRAPH */}
      <div className="who-we-are__visual">
        <Image
          src={productionImageSrc}
          alt={productionImageAlt}
          fill
          sizes="(max-width: 820px) 100vw, 46vw"
          className="who-we-are__visual-image"
        />
      </div>
    </section>
  );
}
