"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

import type { WorkImage, WorkVideo } from "@/types/types-work";

// ============================================================
// 01. TYPES
// ============================================================

type ProjectVideoPlayerProps = {
  projectTitle: string;
  poster: WorkImage;
  videos: readonly WorkVideo[];
};

// ============================================================
// 02. YOUTUBE URL VALIDATION
// ============================================================

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.protocol !== "https:") {
      return null;
    }

    const host = parsed.hostname.toLowerCase();
    const parts = parsed.pathname.split("/").filter(Boolean);

    let id: string | null = null;

    if (host === "youtu.be" || host === "www.youtu.be") {
      id = parts[0] ?? null;
    } else if (
      [
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "youtube-nocookie.com",
        "www.youtube-nocookie.com",
      ].includes(host)
    ) {
      if (parts[0] === "watch") {
        id = parsed.searchParams.get("v");
      } else if (["embed", "shorts", "live"].includes(parts[0])) {
        id = parts[1] ?? null;
      }
    }

    return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

// ============================================================
// 03. VIDEO PLAYER
// ============================================================

export function ProjectVideoPlayer({
  projectTitle,
  poster,
  videos,
}: ProjectVideoPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Keep only valid YouTube videos.
  const playableVideos = videos.flatMap((video) => {
    const id = getYouTubeVideoId(video.youtubeUrl);

    return id ? [{ ...video, id }] : [];
  });

  const activeVideo = playableVideos[activeIndex] ?? playableVideos[0];

  // Restore keyboard focus after the Play button
  // has been replaced by the embedded player.
  useEffect(() => {
    if (isLoaded) {
      iframeRef.current?.focus();
    }
  }, [isLoaded]);

  if (!activeVideo) {
    return null;
  }

  function selectVideo(index: number) {
    if (index === activeIndex) return;

    setActiveIndex(index);

    // Stop the current embed and require another
    // explicit Play action for the newly selected video.
    setIsLoaded(false);
  }

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${activeVideo.id}` +
    "?autoplay=1&playsinline=1&rel=0";

  const videoKind = activeVideo.kind.toUpperCase();

  return (
    <section
      id="project-video"
      aria-labelledby="project-video-heading"
      className="scroll-mt-24 bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial py-20 md:py-28">
        {/* ====================================================
            01 / SECTION INTRODUCTION
            ==================================================== */}

        <div className="mb-10 border-t border-brand-beige/25 pt-12">
          <p
            className="
              mb-7 font-sans text-xs
              font-semibold uppercase tracking-[0.2em]
              text-[#DA8A4B]
            "
          >
            Official Video
          </p>

          <h2
            id="project-video-heading"
            className="
              w-full font-display
              text-[clamp(3rem,7vw,8.5rem)]
              leading-[0.98]
              tracking-[-0.035em]
              text-brand-beige
            "
          >
            WATCH THE <span className="block sm:inline">{videoKind}</span>
            <span aria-hidden="true" className="text-brand-orange">
              .
            </span>
          </h2>

          <div className="mt-8 flex justify-start lg:justify-end">
            <p
              className="
                max-w-xl font-sans
                text-sm leading-relaxed
                text-brand-beige/80
                md:text-base
                lg:text-right
              "
            >
              Experience a glimpse of the story through the production&apos;s
              official video.
            </p>
          </div>
        </div>

        {/* ====================================================
            02 / VIDEO SELECTOR
            ==================================================== */}

        {playableVideos.length > 1 && (
          <div
            role="group"
            aria-label="Select an official video"
            className="mb-6 flex flex-wrap gap-3"
          >
            {playableVideos.map((video, index) => (
              <button
                key={`${video.id}-${index}`}
                type="button"
                aria-pressed={activeIndex === index}
                onClick={() => selectVideo(index)}
                className={`
                  min-h-11 border px-5 py-3
                  font-sans text-xs
                  font-semibold uppercase
                  tracking-[0.12em]
                  transition-colors duration-200
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand-beige
                  motion-reduce:transition-none
                  ${
                    activeIndex === index
                      ? "border-brand-orange bg-brand-orange text-[#50100D]"
                      : "border-brand-beige/40 text-brand-beige hover:border-brand-orange hover:text-[#DA8A4B]"
                  }
                `}
              >
                {video.title}
              </button>
            ))}
          </div>
        )}

        {/* ====================================================
            03 / VIDEO FRAME
            ==================================================== */}

        <div className="mx-auto max-w-6xl">
          <div
            className="
              relative aspect-video w-full
              overflow-hidden bg-[#190A09]
              ring-1 ring-brand-beige/20
            "
          >
            {isLoaded ? (
              /* ----------------------------------------------
                 YOUTUBE IFRAME
                 Created ONLY after visitor interaction.
                 ---------------------------------------------- */

              <iframe
                ref={iframeRef}
                key={activeVideo.id}
                src={embedUrl}
                title={`${projectTitle} — ${activeVideo.title}`}
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share"
                allowFullScreen
                className="
                  absolute inset-0
                  h-full w-full border-0
                "
              />
            ) : (
              /* ----------------------------------------------
                 LOCAL POSTER PREVIEW
                 No YouTube iframe or thumbnail request.
                 ---------------------------------------------- */

              <>
                <Image
                  src={poster.src}
                  alt=""
                  fill
                  sizes="(max-width: 1200px) 100vw, 1152px"
                  className="
                    object-cover
                    opacity-45
                    motion-reduce:transition-none
                  "
                />

                {/* DARK CINEMATIC TREATMENT */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-linear-to-t
                    from-black/85
                    via-black/30
                    to-black/45
                  "
                />

                {/* PLAY CONTROL */}

                <button
                  type="button"
                  onClick={() => setIsLoaded(true)}
                  aria-label={`Play ${projectTitle} ${activeVideo.kind.toLowerCase()} using YouTube`}
                  className="
                    group relative z-10
                    flex h-full w-full
                    flex-col items-center
                    justify-center gap-4
                    px-5 text-center
                    text-brand-beige
                    focus-visible:outline-4
                    focus-visible:-outline-offset-6
                    focus-visible:outline-brand-beige
                    sm:gap-6
                  "
                >
                  {/* PLAY ICON CONTAINER */}

                  <span
                    className="
                      flex size-16
                      items-center justify-center
                      rounded-full
                      border border-brand-beige/70
                      bg-brand-beige
                      text-brand-maroon
                      shadow-lg
                      transition-transform duration-300
                      group-hover:scale-110
                      group-focus-visible:scale-110
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                      sm:size-20
                    "
                  >
                    <Play
                      aria-hidden="true"
                      className="ml-1 size-7 fill-current sm:size-8"
                    />
                  </span>

                  {/* PLAY LABEL */}

                  <span
                    className="
                      font-sans text-xs font-bold
                      uppercase tracking-[0.2em]
                      sm:text-sm
                    "
                  >
                    Play {videoKind}
                  </span>

                  {/* PRIVACY INFORMATION */}

                  <span
                    className="
                      max-w-sm font-sans
                      text-[10px] leading-relaxed
                      text-brand-beige/85
                      sm:text-xs
                    "
                  >
                    Playing this video connects to YouTube.
                  </span>
                </button>
              </>
            )}
          </div>

          {/* ==================================================
              04 / VIDEO INFORMATION
              ================================================== */}

          <div
            className="
              mt-5 flex flex-col
              justify-between gap-4
              border-b border-brand-beige/25
              pb-6
              sm:flex-row sm:items-center
            "
          >
            <div>
              <p
                className="
                  font-sans text-xs
                  font-semibold uppercase
                  tracking-[0.15em]
                  text-[#DA8A4B]
                "
              >
                {activeVideo.kind}
              </p>

              <p className="mt-2 font-sans text-sm text-brand-beige/80">
                {activeVideo.title}
              </p>
            </div>

            {/* EXTERNAL YOUTUBE LINK */}

            <a
              href={activeVideo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${activeVideo.title} on YouTube (opens in a new tab)`}
              className="
                group inline-flex w-fit
                items-center gap-2
                border-b border-brand-orange
                pb-2 font-sans text-xs
                font-semibold uppercase
                tracking-[0.14em]
                text-brand-beige
                transition-colors duration-300
                hover:text-[#DA8A4B]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-brand-beige
                motion-reduce:transition-none
              "
            >
              Watch on YouTube
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-5 text-brand-orange"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
