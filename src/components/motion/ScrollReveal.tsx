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

    const earlyTrigger = trigger === "early";
    const triggerPosition = earlyTrigger ? 0.8 : 0.55;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      element.dataset.revealState = "visible";
      return;
    }

    // Elements already at or above the trigger
    // must never be hidden.
    const hasPassedTrigger = () =>
      element.getBoundingClientRect().top <
      window.innerHeight * triggerPosition;

    if (hasPassedTrigger()) {
      element.dataset.revealState = "visible";
      return;
    }

    element.dataset.revealState = "pending";

    let revealed = false;
    let frameId = 0;
    let observer: IntersectionObserver | null = null;

    function reveal() {
      if (revealed) return;

      revealed = true;
      element!.dataset.revealState = "visible";

      observer?.disconnect();

      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.removeEventListener("hashchange", scheduleCheck);
    }

    // Fallback for anchor navigation, browser restoration,
    // and scroll jumps that bypass the observer threshold.
    function checkPosition() {
      frameId = 0;

      if (hasPassedTrigger()) {
        reveal();
      }
    }

    // Limit position checks to one per animation frame.
    function scheduleCheck() {
      if (revealed || frameId !== 0) return;

      frameId = window.requestAnimationFrame(checkPosition);
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting || (entry && hasPassedTrigger())) {
          reveal();
        }
      },
      {
        threshold: 0.1,
        rootMargin: earlyTrigger
          ? `0px 0px -${Math.round(window.innerHeight * 0.2)}px 0px`
          : "0px 0px -45% 0px",
      },
    );

    observer.observe(element);

    window.addEventListener("scroll", scheduleCheck, {
      passive: true,
    });

    window.addEventListener("resize", scheduleCheck);
    window.addEventListener("hashchange", scheduleCheck);

    // Recheck after mounting in case the browser
    // restores its scroll position immediately.
    scheduleCheck();

    return () => {
      observer?.disconnect();

      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.removeEventListener("hashchange", scheduleCheck);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [trigger]);

  return (
    <div ref={elementRef} className={`n4f-scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
