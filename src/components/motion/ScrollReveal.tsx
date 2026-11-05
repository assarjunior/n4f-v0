"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  trigger?: "standard" | "early";
};

export function ScrollReveal({
  children,
  className = "",
  trigger = "standard",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const earlyTrigger = trigger == "early";
    const triggerPosition = earlyTrigger ? 0.8 : 0.55;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    //! Only animate elements that start below
    //! the viewport. Avoid hiding visible content
    //! during hydration or browser restoration.
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight * triggerPosition) {
      return;
    }

    element.dataset.revealState = "pending";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        element.dataset.revealState = "visible";
        observer.disconnect();
      },
      {
        threshold: 0.1,
        rootMargin: earlyTrigger
          ? `0px 0px -${Math.round(window.innerHeight * 0.2)}px 0px`
          : "0px 0px -45% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [trigger]);

  return (
    <div ref={elementRef} className={`n4f-scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
