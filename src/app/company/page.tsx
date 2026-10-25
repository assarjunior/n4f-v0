import { CompanyHero } from "./_components/CompanyHero";
import { OurPhilosophy } from "./_components/OurPhilosophy";
import { OurStory } from "./_components/OurStory";

export default function CompanyPage() {
  return (
    <main className="flex-1 bg-brand-maroon" id="main-content">
      <CompanyHero />
      <OurStory />
      <OurPhilosophy />
    </main>
  );
}
