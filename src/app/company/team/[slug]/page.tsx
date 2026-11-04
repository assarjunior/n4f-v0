import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPublishedTeam,
  getTeamMemberBySlug,
  getTeamSlugs,
} from "@/config/team";

import { seoCopy } from "@/config/seo";
import { TeamProfile } from "../../_components/TeamProfile";
import { createSocialMetadata } from "@/lib/social-metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTeamStructuredData } from "@/lib/structured-data";

export const instant = false;

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate published team profile routes.
export function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({
    slug,
  }));
}

// Generate approved metadata per team member.

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;

  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const approvedSeo = seoCopy.team[member.slug];

  if (!approvedSeo) {
    throw new Error(
      `Missing approved SEO metadata for team member: ${member.slug}`,
    );
  }

  return {
    title: {
      absolute: approvedSeo.title,
    },
    description: approvedSeo.description,

    // Canonical URL from the verified published team slug.
    alternates: {
      canonical: `/company/team/${member.slug}`,
    },
    ...createSocialMetadata(
      `/company/team/${member.slug}`,
      approvedSeo,
      `/og/team/${member.slug}`,
      `${member.name} — ${member.role} at Ninety 4 Film`,
    ),
  };
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

  return (
    <>
      <JsonLd data={getTeamStructuredData(member)} />
      <TeamProfile member={member} nextMember={nextMember} />
    </>
  );
}
