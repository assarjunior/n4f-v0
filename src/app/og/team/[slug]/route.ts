import { getTeamMemberBySlug, getTeamSlugs } from "@/config/team";

import { renderSocialCard } from "@/lib/social-card";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

// OG-specific image overrides.
// Keep the regular WebP portraits for the website.

const ogPortraits: Record<string, string> = {
  "omar-assar": "/og-source/omar-assar.jpg",
  "adham-hamed": "/og-source/adham-hamed.jpg",
  "farris-hanafy": "/og-source/farris-hanafy.jpg",
  "edward-nabil": "/og-source/edward-nabil-fixed.jpg",
};

export function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;

  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return new Response("Not Found", {
      status: 404,
    });
  }

  const imageSrc = ogPortraits[member.slug] ?? member.portrait.src;

  const role =
    member.slug === "omar-assar" ? "Director & Co-Founder" : member.role;

  return renderSocialCard({
    kind: "team",
    title: member.name,
    role,
    imageSrc,
  });
}
