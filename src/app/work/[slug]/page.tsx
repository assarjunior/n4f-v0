import { getWorkBySlug, getWorkSlugs } from "@/config/config-work";
import { notFound } from "next/navigation";

export const instant = false;

type workDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({
    slug,
  }));
}

export default async function WorkDetailPage({ params }: workDetailPageProps) {
  const { slug } = await params;
  const film = getWorkBySlug(slug);

  if (!film) {
    notFound();
  }

  return (
    <main className="container-editorial min-h-screen py-24 text-brand-beige">
      <h1 className="font-display text-5xl md:text-7xl">{film.title}</h1>

      <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed md:text-lg">
        {film.synopsis}
      </p>
    </main>
  );
}
