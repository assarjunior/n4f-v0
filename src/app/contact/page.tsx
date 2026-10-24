import { company } from "@/config/company";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="flex-1 bg-brand-maroon  text-brand-beige py-16 md:py-24"
    >
      <div className="container-editorial">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
          Ninety 4 Film / Cairo
        </p>

        <h1 className="mb-12 font-display text-[clamp(3rem,8vw,8rem)] leading-none">
          LET&apos;S TALK.
        </h1>

        <div className="flex max-w-xl flex-col gap-8 border-t border-brand-beige/25 pt-8">
          <p className="text-base leading-relaxed text-brand-beige/80 md:text-lg">
            Have a production in mind? Tell us about it.
          </p>

          <a
            href={`mailto:${company.email}`}
            className="w-fit break-all text-xl underline decoration-brand-orange underline-offset-8 transition-colors hover:text-brand-orange md:text-2xl"
          >
            {company.email}
          </a>

          <a
            href={company.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 text-base transition-colors hover:text-brand-orange"
          >
            WhatsApp: {company.whatsapp.display}
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </a>

          <p className="text-sm text-brand-beige/65">{company.location}</p>
        </div>
      </div>
    </main>
  );
}
