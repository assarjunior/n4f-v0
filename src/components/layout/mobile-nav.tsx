"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Logo from "../../../public/Logo-Vertical.svg";

import type { MenuPhase } from "./Header";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

type MobileNavProps = {
  phase: MenuPhase;
  onRequestClose: () => void;
  onClose: () => void;
};

export function MobileNav({ phase, onRequestClose, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousPathname = useRef(pathname);

  const [entered, setEntered] = useState(false);

  // The first frame begins at 45 degrees.
  // After the dialog is shown, rotate to 0 degrees.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (!dialog.open) {
      dialog.showModal();
    }

    closeButtonRef.current?.focus();

    let secondFrame = 0;

    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        setEntered(true);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      document.body.style.overflow = previousOverflow;

      if (dialog.open) {
        dialog.close();
      }
    };
  }, []);

  // Dismiss immediately if navigation changes.
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Avoid leaving a mobile modal open at desktop widths.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleBreakpointChange = () => {
      if (mediaQuery.matches) {
        onClose();
      }
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    handleBreakpointChange();

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [onClose]);

  // Fallback if the CSS transition is interrupted.
  useEffect(() => {
    if (phase !== "closing") return;

    const timeout = window.setTimeout(() => {
      onClose();
    }, 550);

    return () => window.clearTimeout(timeout);
  }, [phase, onClose]);

  function requestClose() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      onClose();
      return;
    }

    onRequestClose();
  }

  const symbolIsOpen = phase === "open" && entered;

  return (
    <dialog
      ref={dialogRef}
      id="mobile-navigation"
      aria-label="Mobile navigation"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      className="
        fixed inset-0 z-50
        m-0 h-dvh w-full
        max-h-none max-w-none
        overflow-y-auto
        border-0 p-0
        bg-brand-maroon text-brand-beige
        backdrop:bg-transparent
        md:hidden
      "
    >
      <div className="flex min-h-dvh flex-col">
        {/* MOBILE HEADER */}

        <div
          className="
            container-editorial
            flex h-24 shrink-0
            items-center justify-between
          "
        >
          <Link
            href="/"
            onClick={onClose}
            aria-label="Ninety 4 Film - Home"
            className="block shrink-0"
          >
            <Image
              src={Logo}
              alt=""
              width={400}
              height={400}
              className="h-auto w-18"
            />
          </Link>

          {/* ORIGINAL MENU SYMBOL — NOT AN X */}

          <button
            ref={closeButtonRef}
            type="button"
            onClick={requestClose}
            aria-label="Close navigation menu"
            className="
              inline-flex size-14 shrink-0
              items-center justify-center
              rounded-none bg-transparent p-1
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-brand-beige
            "
          >
            <Image
              src="/menu-symbol.png"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              onTransitionEnd={(event) => {
                if (phase === "closing" && event.propertyName === "transform") {
                  onClose();
                }
              }}
              className={`
                h-11 w-11 object-contain
                transition-transform
                duration-500 ease-in-out
                motion-reduce:transition-none
                ${symbolIsOpen ? "rotate-0" : "rotate-45"}
              `}
            />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        <nav
          aria-label="Mobile primary navigation"
          className="
            container-editorial
            flex flex-1 flex-col
            justify-center py-12
          "
        >
          <ul className="flex flex-col gap-5 sm:gap-7">
            {navigation.map((item, index) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li
                  key={item.href}
                  className={`
    transition-[opacity,transform]
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
    motion-reduce:translate-y-0
    motion-reduce:opacity-100
    motion-reduce:transition-none
  `}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      inline-block
                      font-sans
                      text-[clamp(2.75rem,10vw,5rem)]
                      font-light uppercase
                      leading-[1.1]
                      tracking-[0.08em]
                      transition-colors duration-200
                      hover:text-[#DA8A4B]
                      focus-visible:text-[#DA8A4B]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-brand-beige
                      motion-reduce:transition-none
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

        {/* EDITORIAL FOOTER */}

        <div className="container-editorial pb-8 pt-4">
          <p
            className="
              font-sans text-[10px]
              uppercase tracking-[0.2em]
              text-brand-beige/80
            "
          >
            Ninety 4 Film — Cairo, Egypt
          </p>
        </div>
      </div>
    </dialog>
  );
}
