import { Metadata } from "next";
import { ProductionProcess } from "./_components/ProductionProcess";
import { ProductionServices } from "./_components/ProductionServices";
import { ServicesHero } from "./_components/ServiceHero";
import { ServicesCTA } from "./_components/ServicesCTA";
import { WhatWeProduce } from "./_components/WhatWeProduce";
import { seoCopy } from "@/config/seo";
import { createSocialMetadata } from "@/lib/social-metadata";
import { ViewTransition } from "react";

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.services.title,
  },
  description: seoCopy.pages.services.description,
  alternates: {
    canonical: "/services",
  },
  ...createSocialMetadata(
    "/services",
    seoCopy.pages.services,
    "/og/company",
    "Ninety 4 Film — Production Services",
  ),
};

export default function ServicePage() {
  return (
    <ViewTransition enter="n4f-page-enter" exit="n4f-page-exit" default="none">
      <main id="main-content" className="flex-1">
        <ServicesHero />
        <WhatWeProduce />
        <ProductionServices />
        <ProductionProcess />
        <ServicesCTA />
      </main>
    </ViewTransition>
  );
}
