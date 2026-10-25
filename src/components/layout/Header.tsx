"use client";

import Image from "next/image";
import Logo from "../../../public/Logo-Vertical.svg";
import Logo2 from "../../../public/Logo2-svg.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="container-editorial flex h-24 items-center justify-between md:h-28">
        {/* Official Logo */}
        <Link
          href="/"
          aria-label="Ninety 4 Film - Home"
          className="relative z-50 block shrink-0"
        >
          <Image
            src={Logo2}
            alt="Ninety 4 Film Logo"
            className="h-auto hidden md:block md:w-60"
            width={400}
            height={400}
            priority
          />

          <Image
            src={Logo}
            alt="Ninety 4 Film Logo"
            className="h-auto w-18 md:hidden"
            width={400}
            height={400}
            priority
          />
        </Link>

        {/* Desktop Navigation */}

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
                        hover:text-brand-orange
                        focus-visible:text-brand-orange
                        ${isActive ? "text-brand-orange" : "text-brand-beige"}
                        `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          ref={menuButtonRef}
          type="button"
          variant="ghost"
          size="icon"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="
        relative z-50
        size-14 shrink-0
        rounded-none
        bg-transparent
        p-1
        shadow-none
        hover:bg-transparent
        focus-visible:ring-2
        focus-visible:ring-brand-beige
        md:hidden"
        >
          <Image
            src="/menu-symbol.png"
            alt="Menu symbol"
            aria-hidden="true"
            width={32}
            height={32}
            className={`
                h-11 w-11
                object-contain
                transition-transform duration-500
                ease-in-out
                ${menuOpen ? "rotate-0" : "rotate-45"}
                `}
          />
        </Button>
      </div>

      {/* Mobile navigation items */}

      <MobileNav
        isOpen={menuOpen}
        onClose={closeMenu}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
