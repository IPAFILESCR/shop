import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "./usePerformanceBoosters";

function isTouchPrimary(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  try {
    return (
      window.matchMedia("(pointer: coarse)").matches &&
      window.matchMedia("(hover: none)").matches
    );
  } catch {
    return false;
  }
}

export function useSmoothScroll(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (isTouchPrimary()) return;

    const lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      smoothWheel: true,
      autoRaf: false,
    });

    let rafId = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
