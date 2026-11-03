import { seoCopy } from "@/config/seo";
import { CompanyHero } from "./_components/CompanyHero";
import { MeetTheTeam } from "./_components/MeetTheTeam";
import { OurPhilosophy } from "./_components/OurPhilosophy";
import { OurStory } from "./_components/OurStory";
import { Metadata } from "next";
import { createSocialMetadata } from "@/lib/social-metadata";

export const metadata: Metadata = {
  title: {
    absolute: seoCopy.pages.company.title,
  },
  description: seoCopy.pages.company.description,
  alternates: {
    canonical: "/company",
  },
  ...createSocialMetadata(
    "/company",
    seoCopy.pages.company,
    "og/company",
    "Ninety 4 Film - Company Overview",
  ),
};

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
