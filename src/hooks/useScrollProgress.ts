import { useEffect, useState } from "react";

const MIN_DELTA = 0.002;
const IDLE_MS = 250;

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let idleTimer = 0;
    let maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
    let lastWritten = -1;

    const writeVar = (p: number) => {
      root.style.setProperty("--scroll-progress", p.toFixed(4));
    };

    const compute = () => {
      raf = 0;
      const p = maxScroll > 0
        ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
        : 0;
      const crossedFloor = p === 0 && lastWritten !== 0;
      const crossedCeil = p === 1 && lastWritten !== 1;
      if (Math.abs(p - lastWritten) >= MIN_DELTA || crossedFloor || crossedCeil) {
        lastWritten = p;
        writeVar(p);
        setProgress(p);
      }
    };

    const schedule = () => {
      if (raf === 0) raf = window.requestAnimationFrame(compute);
    };

    const onScroll = () => {
      schedule();
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        idleTimer = 0;
        if (raf) {
          window.cancelAnimationFrame(raf);
          raf = 0;
        }
      }, IDLE_MS);
    };

    const refreshMax = () => {
      maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
      lastWritten = -1;
      schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refreshMax);

    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(refreshMax);
      ro.observe(root);
    }

    compute();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refreshMax);
      ro?.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
      if (idleTimer) window.clearTimeout(idleTimer);
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return progress;
}
