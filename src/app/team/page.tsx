import type { Metadata } from "next";
import { ViewTransition } from "react";

import { createSocialMetadata } from "@/lib/social-metadata";
import { MeetTheTeam } from "@/app/company/_components/MeetTheTeam";
import { seoCopy } from "@/config/seo";

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.team.title,
  },
  description: seoCopy.pages.team.description,
  alternates: {
    canonical: "/team",
  },
  ...createSocialMetadata(
    "/team",
    seoCopy.pages.team,
    "/og/company",
    "Meet the team behind Ninety 4 Film",
  ),
};

export default function TeamPage() {
  return (
    <ViewTransition enter="n4f-page-enter" exit="n4f-page-exit" default="none">
      <main id="main-content" className="flex-1 bg-brand-maroon">
        <section
          aria-labelledby="team-page-heading"
          className="bg-brand-beige text-brand-maroon"
        >
          <div className="container-editorial py-9 md:py-12 lg:py-10">
            <div
              className="n4f-hero-reveal mb-5 flex items-center gap-4"
              style={{ animationDelay: "150ms" }}
            >
              <span aria-hidden="true" className="h-px w-10 bg-brand-maroon" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em]">
                Ninety 4 Film / Our Team
              </p>
            </div>

            <h1
              id="team-page-heading"
              className="n4f-hero-reveal font-display text-[clamp(2.4rem,4.55vw,5.75rem)] leading-[1.06] tracking-[-0.035em] lg:whitespace-nowrap"
              style={{ animationDelay: "300ms" }}
            >
              THE PEOPLE BEHIND THE{" "}
              <span className="text-brand-orange">WORK.</span>
            </h1>
          </div>
        </section>

        <MeetTheTeam />
      </main>
    </ViewTransition>
  );
}
