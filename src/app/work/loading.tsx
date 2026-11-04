import { Skeleton } from "@/components/loading/Skeleton";

export default function WorkLoading() {
  return (
    <main id="main-content" className="flex-1 bg-brand-maroon" aria-busy="true">
      <p role="status" className="sr-only">
        Loading our productions
      </p>

      {/* 01 — WORK HERO */}
      <section className="bg-brand-beige">
        <div className="container-editorial py-20 md:py-28 lg:py-12">
          {/* Editorial label */}
          <Skeleton surface="beige" className="mb-12 h-3 w-48 max-w-full" />

          <div
            className="
              grid gap-8
              lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]
              lg:items-end lg:gap-16
            "
          >
            <div className="space-y-4">
              <Skeleton
                surface="beige"
                className="h-16 w-60 max-w-full md:h-24"
              />

              <Skeleton
                surface="beige"
                className="h-16 w-48 max-w-full md:h-24"
              />
            </div>

            <div className="space-y-4">
              <Skeleton surface="beige" className="mb-7 h-1 w-16" />

              <Skeleton surface="beige" className="h-4 w-full" />

              <Skeleton surface="beige" className="h-4 w-5/6" />

              <Skeleton surface="beige" className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — PROJECT ARCHIVE */}
      <section className="bg-brand-maroon">
        <div className="container-editorial py-20 md:py-28 lg:py-32">
          {/* Section heading */}
          <div className="mb-16 border-b border-brand-beige/25 pb-7">
            <Skeleton className="mb-5 h-3 w-44" />

            <Skeleton className="h-12 w-72 max-w-full" />
          </div>

          {/* Film poster placeholders */}
          <div
            className="
              mx-auto grid max-w-5xl
              grid-cols-1 gap-x-10 gap-y-16
              sm:grid-cols-2
              lg:gap-x-16 lg:gap-y-20
            "
          >
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index}>
                {/* Poster */}
                <Skeleton className="aspect-3/4 w-full" />

                {/* Category and year */}
                <div className="mt-5 flex justify-between">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-3 w-12" />
                </div>

                {/* Film title */}
                <Skeleton className="mt-5 h-10 w-3/4" />

                {/* Synopsis */}
                <div className="mt-5 space-y-3">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <Skeleton className="h-3 w-2/3" />
                </div>

                {/* Project link */}
                <Skeleton className="mt-9 h-4 w-36" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
