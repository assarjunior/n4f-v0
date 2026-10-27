import { notFound } from "next/navigation";

import {
  getPublishedTeam,
  getTeamMemberBySlug,
  getTeamSlugs,
} from "@/config/team";

import { TeamProfile } from "../../_components/TeamProfile";

//! Allow blocking navigation for this dynamic route
export const instant = false;

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate published team profile routes at build time
export function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({
    slug,
  }));
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;

  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const members = getPublishedTeam();

  const currentIndex = members.findIndex((entry) => entry.slug === member.slug);

  const nextMember =
    currentIndex >= 0 && members.length > 1
      ? members[(currentIndex + 1) % members.length]
      : undefined;

  return <TeamProfile member={member} nextMember={nextMember} />;
}
