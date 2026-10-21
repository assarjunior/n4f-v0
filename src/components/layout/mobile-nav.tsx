"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previousPathname = useRef(pathname);

  //! Close the mobile nav when the route changes
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;

      if (isOpen) {
        onClose();
      }
    }
  }, [pathname, isOpen, onClose]);

  //!  Lock scrolling and manage keyboard interaction

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = [
        triggerRef.current,
        ...Array.from(
          panelRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        ),
      ].filter((element): element is HTMLElement => element !== null);

      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="
    fixed inset-0 z-40
    flex flex-col
    overflow-y-auto
    bg-brand-maroon
    text-brand-beige
    md:hidden
    motion-safe:animate-in
    motion-safe:fade-in
    motion-safe:duration-700"
    >
      {/* This div is a space for the header logo and close button */}
      <div className="h-24 shrink-0" aria-hidden="true"></div>

      <nav
        aria-label="Mobile-main navigation"
        className="
        container-editorial
        flex flex-1 flex-col
        justify-center
        py-12"
      >
        <ul className="flex flex-col gap-5 sm:gap-7">
          {navigation.map((item, index) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                            inline-block
                            font-sans
                            text-[clamp(2.75rem,10vw,5rem)]
                            font-light
                            uppercase
                            leading-[1.1]
                            tracking-[0.08em]
                            transition-colors
                            duration-200
                            hover:text-brand-orange
                            focus-visible:text-brand-orange
                            motion-reduce:transition-none
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

      {/* Editorial Footer */}

      <div className="container-editorial pb-8 pt-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-beige/60">
          Ninety 4 Film - Cairo, Egypt
        </p>
      </div>
    </div>
  );
}
