import { Skeleton } from "@/components/loading/Skeleton";

export default function TeamProfileLoading() {
  return (
    <main id="main-content" className="flex-1 bg-brand-maroon" aria-busy="true">
      <p role="status" className="sr-only">
        Loading team member profile
      </p>

      {/* 01 — PROFILE HERO */}
      <section className="bg-brand-beige">
        <div className="container-editorial py-12 md:py-20 lg:py-24">
          {/* Back navigation */}
          <Skeleton surface="beige" className="h-4 w-40" />

          <div
            className="
              mt-12 grid items-center gap-12
              md:mt-16
              lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
              lg:gap-16 xl:gap-24
            "
          >
            {/* Profile information */}
            <div className="min-w-0">
              {/* Editorial label */}
              <Skeleton surface="beige" className="mb-7 h-3 w-52" />

              {/* Team member name */}
              <Skeleton
                surface="beige"
                className="h-20 w-full max-w-lg md:h-28"
              />

              {/* Professional role */}
              <div className="mt-8 border-l-2 border-brand-orange pl-5">
                <Skeleton surface="beige" className="h-5 w-3/4" />
              </div>

              {/* Short biography */}
              <div className="mt-10 space-y-4">
                <Skeleton surface="beige" className="h-4 w-full" />

                <Skeleton surface="beige" className="h-4 w-11/12" />

                <Skeleton surface="beige" className="h-4 w-2/3" />
              </div>

              {/* Explore profile link */}
              <Skeleton surface="beige" className="mt-10 h-4 w-36" />
            </div>

            {/* Team portrait */}
            <Skeleton
              surface="beige"
              className="
                mx-auto aspect-4/5
                w-full max-w-140
              "
            />
          </div>
        </div>
      </section>

      {/* 02 — BIOGRAPHY */}
      <section className="bg-brand-maroon">
        <div
          className="
            container-editorial
            grid gap-10 py-20
            md:py-28 lg:py-32
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            lg:gap-20
          "
        >
          {/* Biography heading */}
          <div>
            <Skeleton className="mb-7 h-3 w-36" />

            <Skeleton className="h-16 w-52" />

            <Skeleton className="mt-4 h-16 w-48" />

            <Skeleton className="mt-9 h-1 w-20" />
          </div>

          {/* Biography paragraphs */}
          <div className="space-y-5">
            {Array.from({ length: 7 }, (_, index) => (
              <Skeleton
                key={index}
                className={index === 6 ? "h-4 w-2/3" : "h-4 w-full"}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
