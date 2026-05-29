import { useEffect } from "react";

export type DeviceTier = "high" | "mid" | "low";

let currentTier: DeviceTier = "mid";

type NavigatorConnectionLike = {
  saveData?: boolean;
  effectiveType?: string;
};

function measureStaticTier(): DeviceTier {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return "mid";
  }

  const conn = (navigator as Navigator & { connection?: NavigatorConnectionLike })
    .connection;
  if (conn?.saveData) return "low";
  if (conn?.effectiveType && /(^|-)2g$|^slow-2g$/.test(conn.effectiveType)) return "low";

  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const noHover = window.matchMedia("(hover: none)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  if (coarse || noHover) {
    if (cores <= 4 || (typeof mem === "number" && mem <= 2)) return "low";
    return "mid";
  }

  if (cores >= 8 && (typeof mem !== "number" || mem >= 4)) return "high";
  if (cores >= 4) return "mid";
  return "low";
}

export function useDeviceTier(): void {
  useEffect(() => {
    const html = document.documentElement;

    currentTier = measureStaticTier();
    html.setAttribute("data-perf", currentTier);

    if (currentTier === "low") return;

    let last = performance.now();
    let badFrames = 0;
    let raf = 0;
    const start = last;
    const deltas: number[] = [];

    const watchdog = (t: number) => {
      const delta = t - last;
      last = t;
      if (delta > 0 && delta < 250) {
        deltas.push(delta);
        if (delta > 22) badFrames += 1;
      }

      if (t - start < 3000) {
        raf = requestAnimationFrame(watchdog);
        return;
      }

      if (deltas.length < 30) return;

      const sorted = deltas.slice().sort((a, b) => a - b);
      const median = sorted[sorted.length >> 1];
      const badRatio = badFrames / deltas.length;

      if (badRatio > 0.25 || median > 22) {
        currentTier = "low";
        html.setAttribute("data-perf", "low");
      } else if (currentTier === "high" && median > 14) {
        currentTier = "mid";
        html.setAttribute("data-perf", "mid");
      }
    };

    raf = requestAnimationFrame(watchdog);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
