import Image from "next/image";
import { ReactNode } from "react";
import Paper from "../../../public/UI/Torn Paper_05 copy.webp";
import Link from "next/link";

type TornPaperButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function TornPaperButton({
  href,
  children,
  className = "",
  external = false,
}: TornPaperButtonProps) {
  const content = (
    <>
      {/* Decorative paper asset */}

      <Image
        src={Paper}
        alt="paper torn"
        fill
        sizes="(max-width: 640px) 220px, 260px"
        className="pointer-events-none select-none object-fill sepia-[2] brightness-[0.90] transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none"
        aria-hidden="true"
      />

      {/* Accessible button label */}
      <span className="relative z-10 flex h-full w-full items-center justify-center px-8 text-center font-sans text-xs font-semibold uppercase tracking-[0.16rem] text-brand-maroon sm:px-10 sm:text-sm">
        {children}
      </span>
    </>
  );

  const classes = `group relative inline-flex h-[76px] w-[220px] shrink-0 items-center justify-center overflow-visible focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange sm:h-[90px] sm:w-[260px] ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
