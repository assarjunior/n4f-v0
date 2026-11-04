import { Skeleton } from "@/components/loading/Skeleton";

export default function WorkDetailLoading() {
  return (
    <main id="main-content" className="flex-1 bg-brand-maroon" aria-busy="true">
      <p role="status" className="sr-only">
        Loading production details
      </p>

      {/* 01 — PROJECT HERO */}
      <section className="bg-brand-beige">
        <div className="container-editorial py-12 md:py-20 lg:py-24">
          {/* Back navigation */}
          <Skeleton surface="beige" className="h-4 w-40" />

          <div
            className="
              mt-12 grid items-center gap-12
              lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
              lg:gap-20
            "
          >
            {/* Project identity */}
            <div className="min-w-0">
              <Skeleton surface="beige" className="mb-7 h-3 w-52" />

              <Skeleton surface="beige" className="mb-5 h-3 w-32" />

              {/* Film title */}
              <Skeleton
                surface="beige"
                className="h-20 w-full max-w-lg md:h-28"
              />

              {/* Orange accent */}
              <Skeleton className="mt-8 h-1 w-16 bg-brand-orange/40" />

              {/* Synopsis */}
              <div className="mt-8 space-y-4">
                <Skeleton surface="beige" className="h-4 w-full" />

                <Skeleton surface="beige" className="h-4 w-5/6" />

                <Skeleton surface="beige" className="h-4 w-2/3" />
              </div>

              {/* Explore project link */}
              <Skeleton surface="beige" className="mt-9 h-4 w-36" />
            </div>

            {/* Film poster */}
            <Skeleton
              surface="beige"
              className="
                mx-auto aspect-3/4
                w-full max-w-110
              "
            />
          </div>
        </div>
      </section>

      {/* 02 — THE STORY */}
      <section className="bg-brand-maroon">
        <div
          className="
            container-editorial
            grid gap-12 py-20
            md:py-28
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            lg:gap-20
          "
        >
          {/* Section heading */}
          <div>
            <Skeleton className="mb-7 h-3 w-28" />

            <Skeleton className="h-16 w-48" />

            <Skeleton className="mt-4 h-16 w-44" />
          </div>

          {/* Story content */}
          <div className="space-y-4">
            {Array.from({ length: 5 }, (_, index) => (
              <Skeleton
                key={index}
                className={`
                  h-4
                  ${index === 4 ? "w-3/5" : "w-full"}
                `}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — PRODUCTION DETAILS */}
      <section className="bg-brand-beige">
        <div className="container-editorial py-20 md:py-28">
          <Skeleton surface="beige" className="mb-8 h-3 w-48" />

          <Skeleton surface="beige" className="h-16 w-64 max-w-full md:h-24" />

          {/* Production information grid */}
          <div
            className="
              mt-12 grid gap-x-12
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="
                  border-b border-brand-maroon/20
                  py-7
                "
              >
                <Skeleton surface="beige" className="h-3 w-24" />

                <Skeleton surface="beige" className="mt-4 h-5 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
