import { TornPaperButton } from "@/components/layout/torn-paper-button";

export function ServicesCTA() {
  return (
    <section
      aria-labelledby="services-contact-heading"
      className="bg-brand-maroon py-20 text-brand-beige md:py-28 lg:py-36"
    >
      <div className="container-editorial">
        <div className="flex flex-col items-start gap-8 pt-12 md:pt-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
            Have a Project in Mind?
          </p>

          <h2
            id="services-contact-heading"
            className="max-w-5xl font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.98] tracking-[-0.035em]"
          >
            LET&apos;S BRING
            <br />
            IT TO LIFE<span className="text-brand-orange">.</span>
          </h2>

          <p className="max-w-2xl font-sans text-base leading-relaxed text-brand-beige/85 md:text-xl">
            Every project begins with a conversation. Tell us about your idea,
            your creative goals, and the challenges ahead. Together, we can
            explore what it takes to bring your vision to the screen.
          </p>

          <div className="pt-2">
            <TornPaperButton href="/contact">Start a Project</TornPaperButton>
          </div>
        </div>
      </div>
    </section>
  );
}
