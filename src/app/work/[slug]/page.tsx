import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPublishedWork,
  getWorkBySlug,
  getWorkSlugs,
} from "@/config/config-work";

import { seoCopy } from "@/config/seo";
import { ProjectDetail } from "../_components/ProjectDetail";

export const instant = false;

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate routes for published projects.
export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({
    slug,
  }));
}

// Generate the approved metadata for each project.
export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getWorkBySlug(slug);

  if (!project) {
    notFound();
  }

  const approvedSeo = seoCopy.work[project.slug];

  // A new project must receive SEO copy approval
  // before it can pass the production build.
  if (!approvedSeo) {
    throw new Error(
      `Missing approved SEO metadata for project: ${project.slug}`,
    );
  }

  return {
    title: {
      absolute: approvedSeo.title,
    },
    description: approvedSeo.description,
  };
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
