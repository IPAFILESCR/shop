import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./usePerformanceBoosters";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  start?: boolean;
  decimals?: number;
}

export function useCountUp({
  target,
  duration = 1400,
  start = true,
  decimals = 0,
}: UseCountUpOptions): number {
  const [value, setValue] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let raf = 0;
    let lastEmitted = Number.NaN;
    startTime.current = null;

    const step = (t: number) => {
      if (startTime.current == null) startTime.current = t;
      const elapsed = t - startTime.current;
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const raw = target * eased;
      const factor = Math.pow(10, decimals);
      const next = Math.round(raw * factor) / factor;
      if (next !== lastEmitted) {
        lastEmitted = next;
        setValue(next);
      }
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, start, decimals]);

  return value;
}
