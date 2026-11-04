"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/Logo-Vertical.svg";
import Logo2 from "../../../public/Logo2-svg.svg";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export type MenuPhase = "closed" | "open" | "closing";

export function Header() {
  const pathname = usePathname();

  const [menuPhase, setMenuPhase] = useState<MenuPhase>("closed");

  const openMenu = useCallback(() => {
    setMenuPhase("open");
  }, []);

  const requestClose = useCallback(() => {
    setMenuPhase((current) => (current === "open" ? "closing" : current));
  }, []);

  const finishClose = useCallback(() => {
    setMenuPhase("closed");
  }, []);

  const menuOpen = menuPhase !== "closed";

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="container-editorial flex h-24 items-center justify-between md:h-28">
        {/* OFFICIAL LOGO */}

        <Link
          href="/"
          aria-label="Ninety 4 Film - Home"
          className="relative z-50 block shrink-0"
        >
          <Image
            src={Logo2}
            alt=""
            className="hidden h-auto md:block md:w-60"
            width={400}
            height={400}
            priority
          />

          <Image
            src={Logo}
            alt=""
            className="h-auto w-18 md:hidden"
            width={400}
            height={400}
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative inline-flex py-3
                      font-sans text-xs font-semibold
                      uppercase tracking-[0.2em]
                      transition-colors duration-300
                      hover:text-[#DA8A4B]
                      focus-visible:text-[#DA8A4B]
                      ${isActive ? "text-[#DA8A4B]" : "text-brand-beige"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ORIGINAL ANIMATED MENU SYMBOL */}

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={openMenu}
          className="
            relative z-50
            size-14 shrink-0
            rounded-none
            bg-transparent p-1
            shadow-none
            hover:bg-transparent
            focus-visible:ring-2
            focus-visible:ring-brand-beige
            md:hidden
          "
        >
          <Image
            src="/menu-symbol.png"
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className={`
              h-11 w-11 object-contain
              transition-transform
              duration-500 ease-in-out
              motion-reduce:transition-none
              ${menuPhase === "open" ? "rotate-0" : "rotate-45"}
            `}
          />
        </Button>
      </div>

      {/* ACCESSIBLE MODAL WITH SAME SYMBOL */}

      {menuOpen && (
        <MobileNav
          phase={menuPhase}
          onRequestClose={requestClose}
          onClose={finishClose}
        />
      )}
    </header>
  );
}
