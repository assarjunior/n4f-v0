import Image from "next/image";

import { company } from "@/config/company";

export type ContactCardVariant = "original" | "reference";

type ContactBusinessCardProps = {
  variant?: ContactCardVariant;
};

export function ContactBusinessCard({
  variant = "reference",
}: ContactBusinessCardProps) {
  const isReference = variant === "reference";

  const instagram = company.socialLinks.find(
    (link) => link.label === "Instagram",
  );

  const details = [
    {
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
      external: false,
    },
    {
      label: "WhatsApp",
      value: company.whatsapp.display,
      href: company.whatsapp.url,
      external: true,
    },
    ...(instagram
      ? [
          {
            label: "Instagram",
            value: "@ninety4film",
            href: instagram.href,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <div className="relative mx-auto w-full max-w-140 lg:mx-0">
      {/* OFFSET BACKING */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-0
          translate-x-3 translate-y-3
          sm:translate-x-4 sm:translate-y-4
          ${isReference ? "bg-brand-orange" : "bg-brand-beige"}
        `}
      />

      {/* MAIN BUSINESS CARD */}
      <div
        className={`
          relative isolate
          aspect-4/3 min-h-64 w-full
          overflow-hidden border
          font-display
          sm:aspect-7/4 sm:min-h-0
          ${
            isReference
              ? "border-brand-maroon/70 bg-brand-beige text-brand-maroon"
              : "border-brand-orange/70 bg-brand-maroon text-brand-beige"
          }
        `}
      >
        {/* INNER EDITORIAL BORDER */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute inset-3 border
            sm:inset-4
            ${isReference ? "border-brand-maroon/25" : "border-brand-beige/25"}
          `}
        />

        {/* BRAND RING WATERMARK */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute -right-8 -top-8
            size-40
            sm:-right-20 sm:-top-20 sm:size-80
            ${isReference ? "opacity-25" : "opacity-15 sm:opacity-20"}
          `}
        >
          <Image
            src={isReference ? "/brand/ring-maroon.svg" : "/brand/ring.svg"}
            alt=""
            fill
            sizes="320px"
            className="object-contain"
          />
        </div>

        {/* CARD CONTENT — SHARED LAYOUT */}
        <div
          className="
            relative z-10 flex h-full flex-col
            justify-between gap-5 p-5
            sm:gap-8 sm:p-9
          "
        >
          {/* HEADER — BRAND LOGO & LOCATION */}
          <div className="flex items-start justify-between gap-4">
            {isReference ? (
              <Image
                src="/brand/logo-maroon.png"
                alt="Ninety 4 Film"
                width={280}
                height={70}
                className="h-auto w-32 object-contain sm:w-52"
              />
            ) : (
              <Image
                src="/Logo2-svg.svg"
                alt="Ninety 4 Film"
                width={280}
                height={70}
                className="h-auto w-32 sm:w-52"
              />
            )}

            <p
              className={`
                shrink-0 text-right
                text-[9px] uppercase leading-relaxed
                tracking-[0.12em]
                sm:text-[10px]
                ${isReference ? "text-brand-maroon/75" : "text-brand-beige/75"}
              `}
            >
              Cairo
              <span className="block">Egypt</span>
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {details.map((detail) => (
              <div key={detail.label}>
                <p
                  className={`
                    mb-1 text-[10px] uppercase
                    tracking-[0.12em]
                    ${
                      isReference ? "text-brand-maroon/70" : "text-brand-orange"
                    }
                  `}
                >
                  {detail.label}
                </p>

                <a
                  href={detail.href}
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noopener noreferrer" : undefined}
                  aria-label={
                    detail.external
                      ? `${detail.label}: ${detail.value} (opens in a new tab)`
                      : undefined
                  }
                  className={`
                    inline-block max-w-full break-all
                    text-xs leading-snug
                    transition-opacity duration-300
                    hover:opacity-65
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    sm:text-sm
                    motion-reduce:transition-none
                    ${
                      isReference
                        ? "focus-visible:outline-brand-maroon"
                        : "focus-visible:outline-brand-beige"
                    }
                  `}
                >
                  {detail.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
