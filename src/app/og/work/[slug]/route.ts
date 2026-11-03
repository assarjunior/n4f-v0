import { getWorkBySlug, getWorkSlugs } from "@/config/config-work";

import { renderSocialCard } from "@/lib/social-card";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;

  const project = getWorkBySlug(slug);

  if (!project) {
    return new Response("Not Found", { status: 404 });
  }

  return renderSocialCard({
    kind: "film",
    title: project.title,
    role: project.companyRoles.join(" / "),
    imageSrc: project.poster.src,
  });
}
