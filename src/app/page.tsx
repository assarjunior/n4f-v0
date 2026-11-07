import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { SelectedWorkSection } from "@/components/home/selected-work";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { JsonLd } from "@/components/seo/JsonLd";
import { seoCopy } from "@/config/seo";
import { createSocialMetadata } from "@/lib/social-metadata";
import { getHomeStructuredData } from "@/lib/structured-data";
import { Metadata } from "next";
import { ViewTransition } from "react";

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.home.title,
  },
  description: seoCopy.pages.home.description,
  alternates: {
    canonical: "/",
  },
  ...createSocialMetadata(
    "/",
    seoCopy.pages.home,
    "/og/company",
    "Ninety 4 film - Ideas Are only the beginning",
  ),
};

export default function Home() {
  return (
    <ViewTransition enter="n4f-page-enter" exit="n4f-page-exit" default="none">
      <main id="main-content" className="flex-1">
        <JsonLd data={getHomeStructuredData()} />
        <Hero />
        <SelectedWorkSection />
        <WhoWeAre />
        <WhatWeDo />
        <ContactSection />
      </main>
    </ViewTransition>
  );
}
