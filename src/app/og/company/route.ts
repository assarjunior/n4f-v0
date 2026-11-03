import { renderSocialCard } from "@/lib/social-card";

export async function GET() {
  return renderSocialCard({
    kind: "company",
  });
}
