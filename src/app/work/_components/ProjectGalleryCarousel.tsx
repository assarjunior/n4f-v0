"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import type { WorkImage } from "@/types/types-work";

type ProjectGalleryCarouselProps = {
  images: readonly WorkImage[];
};

export function ProjectGalleryCarousel({
  images,
}: ProjectGalleryCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const manuallyPaused = useRef(false);

  // Create one stable autoplay plugin instance.
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5500,
        playOnInit: false,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    [],
  );

  useEffect(() => {
    if (!api || images.length < 2) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateSelected = () => {
      setActiveIndex(api.selectedScrollSnap() + 1);
    };

    const updatePlaying = () => {
      setIsPlaying(autoplay.isPlaying());
    };

    const syncMotionPreference = () => {
      if (motionPreference.matches) {
        autoplay.stop();
      } else if (!manuallyPaused.current) {
        autoplay.play();
      }
    };

    // Subscribe before starting autoplay.
    api.on("select", updateSelected);
    api.on("reInit", updateSelected);
    api.on("autoplay:play", updatePlaying);
    api.on("autoplay:stop", updatePlaying);

    motionPreference.addEventListener("change", syncMotionPreference);

    // Start autoplay unless reduced motion is requested.
    syncMotionPreference();

    return () => {
      autoplay.stop();

      api.off("select", updateSelected);
      api.off("reInit", updateSelected);
      api.off("autoplay:play", updatePlaying);
      api.off("autoplay:stop", updatePlaying);

      motionPreference.removeEventListener("change", syncMotionPreference);
    };
  }, [api, autoplay, images.length]);

  if (images.length === 0) {
    return null;
  }

  const hasMultipleImages = images.length > 1;

  function toggleAutoplay() {
    if (autoplay.isPlaying()) {
      manuallyPaused.current = true;
      autoplay.stop();
    } else {
      manuallyPaused.current = false;
      autoplay.play();
    }
  }

  return (
    <section
      aria-labelledby="project-gallery-heading"
      className="bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial py-16 md:py-24">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: hasMultipleImages,
          }}
          plugins={hasMultipleImages ? [autoplay] : []}
          className="w-full"
        >
          {/* SECTION HEADING & CONTROLS */}
          <div
            className="
              mb-10 flex flex-col gap-6
              border-t border-brand-beige/25 pt-10
              md:flex-row md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-5 font-sans text-xs
                  font-semibold uppercase
                  tracking-[0.2em]
                  text-brand-orange
                "
              >
                Production Gallery
              </p>

              <h2
                id="project-gallery-heading"
                className="
                  font-display
                  text-[clamp(2.5rem,4.5vw,5rem)]
                  leading-[1.05]
                "
              >
                THE GALLERY
                <span className="text-brand-orange">.</span>
              </h2>
            </div>

            {/* NAVIGATION & AUTOPLAY CONTROLS */}
            {hasMultipleImages && (
              <div className="flex items-center gap-3">
                <CarouselPrevious
                  className="
                    static size-11
                    translate-x-0 translate-y-0
                    rounded-none
                    border-brand-beige/40
                    bg-transparent text-brand-beige
                    hover:border-brand-orange
                    hover:bg-brand-orange
                    hover:text-brand-maroon
                    focus-visible:ring-brand-orange
                  "
                />

                <CarouselNext
                  className="
                    static size-11
                    translate-x-0 translate-y-0
                    rounded-none
                    border-brand-beige/40
                    bg-transparent text-brand-beige
                    hover:border-brand-orange
                    hover:bg-brand-orange
                    hover:text-brand-maroon
                    focus-visible:ring-brand-orange
                  "
                />

                {/* MANUAL PLAY / PAUSE */}
                <button
                  type="button"
                  onClick={toggleAutoplay}
                  aria-label={
                    isPlaying
                      ? "Pause gallery autoplay"
                      : "Play gallery autoplay"
                  }
                  aria-pressed={isPlaying}
                  className="
                    flex size-11 items-center
                    justify-center
                    border border-brand-beige/40
                    text-brand-beige
                    transition-colors duration-300
                    hover:border-brand-orange
                    hover:bg-brand-orange
                    hover:text-brand-maroon
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-brand-orange
                    motion-reduce:transition-none
                  "
                >
                  {isPlaying ? (
                    <Pause
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-5"
                    />
                  ) : (
                    <Play
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-5"
                    />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* CAROUSEL SLIDES */}
          <div className="mx-auto max-w-6xl">
            <CarouselContent className="-ml-0">
              {images.map((image, index) => (
                <CarouselItem
                  key={`${image.src}-${index}`}
                  className="basis-full pl-0"
                >
                  <figure>
                    <div
                      className="
                        relative aspect-video
                        w-full overflow-hidden
                        bg-[#32110E]
                      "
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="
                          (max-width: 1023px) 100vw,
                          85vw
                        "
                        className="object-contain"
                      />
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* GALLERY FOOTER */}
            <div
              className="
                mt-5 flex items-center
                justify-between gap-4
                border-b border-brand-beige/20
                pb-5
              "
            >
              <p
                className="
                  font-sans text-xs
                  font-semibold uppercase
                  tracking-[0.15em]
                  text-brand-beige/65
                "
              >
                Production Gallery
              </p>

              <span
                aria-live={isPlaying ? "off" : "polite"}
                aria-atomic="true"
                className="
                  font-sans text-sm
                  font-semibold tracking-[0.12em]
                  text-brand-orange
                "
              >
                {String(activeIndex).padStart(2, "0")}
                {" / "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
