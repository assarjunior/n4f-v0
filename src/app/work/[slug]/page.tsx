import { notFound } from "next/navigation";

import {
  getPublishedWork,
  getWorkBySlug,
  getWorkSlugs,
} from "@/config/config-work";

import { ProjectDetail } from "../_components/ProjectDetail";

export const instant = false;

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({
    slug,
  }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  const project = getWorkBySlug(slug);

  if (!project) {
    notFound();
  }

  const projects = [...getPublishedWork()].sort(
    (a, b) => (b.releaseYear ?? 0) - (a.releaseYear ?? 0),
  );

  const currentIndex = projects.findIndex(
    (entry) => entry.slug === project.slug,
  );

  const nextProject =
    currentIndex >= 0 && projects.length > 1
      ? projects[(currentIndex + 1) % projects.length]
      : undefined;

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
