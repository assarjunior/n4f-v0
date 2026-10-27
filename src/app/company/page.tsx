import { CompanyHero } from "./_components/CompanyHero";
import { MeetTheTeam } from "./_components/MeetTheTeam";
import { OurPhilosophy } from "./_components/OurPhilosophy";
import { OurStory } from "./_components/OurStory";

export default function CompanyPage() {
  return (
    <main className="flex-1 bg-brand-maroon" id="main-content">
      <CompanyHero />
      <OurStory />
      <OurPhilosophy />
      <MeetTheTeam />
    </main>
  );
}
