"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import type { WorkVideo } from "@/types/types-work";

type ProjectVideoPlayerProps = {
  projectTitle: string;
  videos: readonly WorkVideo[];
};

// Extract and validate a YouTube video ID from supported URLs.
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

export function ProjectVideoPlayer({
  projectTitle,
  videos,
}: ProjectVideoPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const playableVideos = videos.flatMap((video) => {
    const id = getYouTubeVideoId(video.youtubeUrl);

    return id ? [{ ...video, id }] : [];
  });

  if (playableVideos.length === 0) {
    return null;
  }

  const activeVideo = playableVideos[activeIndex] ?? playableVideos[0];

  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeVideo.id}`;

  return (
    <section
      id="project-video"
      aria-labelledby="project-video-heading"
      className="scroll-mt-24 bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial py-20 md:py-28">
        {/* SECTION INTRODUCTION */}

        {/* SECTION INTRODUCTION */}
        <div className="mb-10 border-t border-brand-beige/25 pt-12">
          {/* EYEBROW */}
          <p className="mb-7 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Official Video
          </p>

          {/* FULL-WIDTH HEADING */}
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
            WATCH THE{" "}
            <span className="block sm:inline">
              {activeVideo.kind === "Trailer" ? "TRAILER" : "TEASER"}
            </span>
            <span className="text-brand-orange">.</span>
          </h2>

          {/* SUPPORTING DESCRIPTION */}
          <div className="mt-8 flex justify-start lg:justify-end">
            <p
              className="
        max-w-xl font-sans
        text-sm leading-relaxed
        text-brand-beige/70
        md:text-base
        lg:text-right
      "
            >
              Experience a glimpse of the story through the production&apos;s
              official video.
            </p>
          </div>
        </div>

        {/* VIDEO SELECTOR — ONLY FOR MULTIPLE CLIPS */}
        {playableVideos.length > 1 && (
          <div className="mb-6 flex flex-wrap gap-3">
            {playableVideos.map((video, index) => (
              <button
                key={`${video.id}-${index}`}
                type="button"
                aria-pressed={activeVideo.id === video.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  border px-5 py-3
                  font-sans text-xs font-semibold
                  uppercase tracking-[0.12em]
                  transition-colors duration-200
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand-orange
                  ${
                    activeIndex === index
                      ? "border-brand-orange bg-brand-orange text-brand-maroon"
                      : "border-brand-beige/40 text-brand-beige hover:border-brand-orange hover:text-brand-orange"
                  }
                `}
              >
                {video.title}
              </button>
            ))}
          </div>
        )}

        {/* EMBEDDED YOUTUBE VIDEO */}
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
              key={activeVideo.id}
              src={embedUrl}
              title={`${projectTitle} — ${activeVideo.title}`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          {/* VIDEO INFORMATION */}
          <div className="mt-5 flex flex-col justify-between gap-4 border-b border-brand-beige/25 pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
                {activeVideo.kind}
              </p>

              <p className="mt-2 font-sans text-sm text-brand-beige/75">
                {activeVideo.title}
              </p>
            </div>

            <a
              href={activeVideo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 border-b border-brand-orange pb-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-beige transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
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
