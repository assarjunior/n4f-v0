import { ProductionServices } from "./_components/ProductionServices";
import { ServicesHero } from "./_components/ServiceHero";
import { ServicesCTA } from "./_components/ServicesCTA";
import { WhatWeProduce } from "./_components/WhatWeProduce";

export default function ServicePage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicesHero />
      <WhatWeProduce />
      <ProductionServices />
      <ServicesCTA />
    </main>
  );
}
