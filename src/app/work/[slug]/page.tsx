import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import {
  getPublishedWork,
  getWorkBySlug,
  getWorkSlugs,
} from "@/config/config-work";

import { seoCopy } from "@/config/seo";
import { ProjectDetail } from "../_components/ProjectDetail";
import { createSocialMetadata } from "@/lib/social-metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWorkStructuredData } from "@/lib/structured-data";

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

    // Canonical URL from the verified published project slug.
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    ...createSocialMetadata(
      `/work/${project.slug}`,
      approvedSeo,
      `/og/work/${project.slug}`,
      `${project.title} — Ninety 4 Film production portfolio`,
    ),
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

  return (
    <>
      <JsonLd data={getWorkStructuredData(project)} />

      <ViewTransition
        enter="n4f-page-enter"
        exit="n4f-page-exit"
        default="none"
      >
        <ProjectDetail project={project} nextProject={nextProject} />
      </ViewTransition>
    </>
  );
}
