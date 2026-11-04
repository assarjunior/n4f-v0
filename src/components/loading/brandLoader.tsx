import Image from "next/image";

export function BrandLoader() {
  return (
    <main
      id="main-content"
      aria-busy="true"
      className="
        flex min-h-[65vh] flex-1
        items-center justify-center
        bg-brand-maroon px-6 py-20
        text-brand-beige
      "
    >
      <div className="flex flex-col items-center text-center">
        {/* BRAND IDENTITY */}

        {/* BRAND IDENTITY */}
        <div
          aria-hidden="true"
          className="
    relative flex size-64
    items-center justify-center
    sm:size-72
  "
        >
          {/* Rotating beige ring */}
          <Image
            src="/brand/ring.svg"
            alt=""
            fill
            sizes="288px"
            className="
      animate-spin object-contain
      animation-duration-[25s]
      motion-reduce:animate-none
    "
          />

          {/* Central logo with opacity pulse */}
          <div
            className="
      relative z-10 w-[50%]
      animate-pulse
      animation-duration-[3s]
      motion-reduce:animate-none
    "
          >
            <Image
              src="/Logo-Vertical.svg"
              alt=""
              width={2772}
              height={1801}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        {/* COMPANY NAME */}
        <p className="mt-10 font-display text-2xl tracking-wide">
          NINETY 4 FILM
        </p>

        {/* LOADING STATUS */}
        <p
          role="status"
          aria-live="polite"
          className="
            mt-5 font-sans text-[11px]
            font-semibold uppercase
            tracking-[0.2em]
            text-brand-beige/75
          "
        >
          Preparing the next frame
        </p>

        {/* LOADING DOTS */}
        <div aria-hidden="true" className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="
                size-1.5 rounded-full
                bg-brand-orange
                animate-pulse
                motion-reduce:animate-none
              "
              style={{
                animationDelay: `${index * 250}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
