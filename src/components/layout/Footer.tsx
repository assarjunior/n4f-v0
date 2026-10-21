import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo-Vertical.svg";
import { company } from "@/config/company";

const footerNavigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  const year = 2026;
  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial pb-8 pt-16 md:pt-20 lg:pt-36">
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1.35fr_1.1fr] lg:gap-x-8 xl:gap-x-12">
          {/* Brand */}
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <Link
              href="/"
              aria-label="Ninety 4 Film - Home"
              className="inline-flex"
            >
              <Image
                src={Logo}
                alt={company.name}
                width={120}
                height={120}
                className="h-auto w-28 "
              />
            </Link>
            <p className="max-w-52 text-sm leading-7 text-brand-beige/75">
              Creative development and <br />
              full-services film and television production
            </p>
          </div>
          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Explore
            </h2>

            <ul className="flex flex-col items-center gap-4 lg:items-start">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Contact */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Get in touch
            </h2>

            <div className="flex flex-col items-center gap-4 text-sm lg:items-start">
              <p className="text-brand-beige/75">{company.location}</p>

              <a
                href={`mailto:${company.email}`}
                className="break-all transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
              >
                {company.email}
              </a>

              <a
                href={company.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`contact Ninety 4 Film on whatsApp at ${company.whatsapp.display} (opens in a new tab)`}
                className="
              transition-colors duration-200 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
              >
                WhatsApp: {company.whatsapp.display}
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-brand-orange focus-visible:text-brand-orange motion-reduce:transition-none"
              >
                Start a conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <nav
            aria-label="Social Media"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Follow
            </h2>

            <ul className="grid w-fit grid-cols-4 gap-x-2 gap-y-3">
              {company.socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (opens in a new tab)`}
                      title={social.label}
                      className=" inline-flex size-11 items-center text-brand-beige transition-colors duration-300 hover:text-brand-orange focus-visible:rounded-sm  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange motion-reduce:transition-none "
                    >
                      <Icon
                        aria-hidden="true"
                        focusable="false"
                        className="size-5"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center gap-2 text-center text-xs text-brand-beige/60 lg:mt-16 lg:flex-row lg:justify-between lg:text-left">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>{company.location}</p>
        </div>
      </div>
    </footer>
  );
}
