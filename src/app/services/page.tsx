import { Metadata } from "next";
import { ProductionProcess } from "./_components/ProductionProcess";
import { ProductionServices } from "./_components/ProductionServices";
import { ServicesHero } from "./_components/ServiceHero";
import { ServicesCTA } from "./_components/ServicesCTA";
import { WhatWeProduce } from "./_components/WhatWeProduce";
import { seoCopy } from "@/config/seo";

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.services.title,
  },
  description: seoCopy.pages.services.description,
};

export default function ServicePage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicesHero />
      <WhatWeProduce />
      <ProductionServices />
      <ProductionProcess />
      <ServicesCTA />
    </main>
  );
}
