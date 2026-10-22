import { Hero } from "@/components/home/Hero";
import { SelectedWorkSection } from "@/components/home/selected-work";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <SelectedWorkSection />
    </main>
  );
}
