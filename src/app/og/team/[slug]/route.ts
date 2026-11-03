import { getTeamMemberBySlug, getTeamSlugs } from "@/config/team";

import { renderSocialCard } from "@/lib/social-card";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;

  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return new Response("Not Found", { status: 404 });
  }

  const imageSrc =
    member.slug === "adham-hamed"
      ? "/og-source/adham-hamed.jpg"
      : member.portrait.src;

  const role =
    member.slug === "omar-assar" ? "Director & Co-Founder" : member.role;

  return renderSocialCard({
    kind: "team",
    title: member.name,
    role,
    imageSrc,
  });
}
