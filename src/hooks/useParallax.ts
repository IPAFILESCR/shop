import { useEffect } from "react";
import { prefersReducedMotion } from "./usePerformanceBoosters";

interface ParallaxTarget {
  el: HTMLElement;
  speed: number;
  last: number;
  visible: boolean;
}

const IDLE_MS = 250;
const SELECTOR = "[data-parallax]";

export function useParallax(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const targets: ParallaxTarget[] = [];
    const targetByEl = new WeakMap<HTMLElement, ParallaxTarget>();

    const addTarget = (el: HTMLElement): ParallaxTarget | null => {
      if (targetByEl.has(el)) return null;
      const t: ParallaxTarget = {
        el,
        speed: Number(el.dataset.parallax ?? 0.15),
        last: Number.NaN,
        visible: false,
      };
      targets.push(t);
      targetByEl.set(el, t);
      return t;
    };

    const initialNodes = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    for (const el of initialNodes) addTarget(el);

    let raf = 0;
    let idleTimer = 0;
    let visibleCount = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;

      const reads: { t: ParallaxTarget; offset: number }[] = [];
      for (let i = 0; i < targets.length; i++) {
        const t = targets[i];
        if (!t.visible) continue;
        const rect = t.el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (vh / 2 - center) * t.speed;
        reads.push({ t, offset });
      }

      for (let i = 0; i < reads.length; i++) {
        const m = reads[i];
        const q = Math.round(m.offset);
        if (Number.isNaN(m.t.last) || q !== m.t.last) {
          m.t.el.style.setProperty("--p", `${q}`);
          m.t.last = q;
        }
      }
    };

    const schedule = () => {
      if (raf === 0 && visibleCount > 0) {
        raf = requestAnimationFrame(update);
      }
    };

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const t = targetByEl.get(entry.target as HTMLElement);
            if (!t) continue;
            if (entry.isIntersecting !== t.visible) {
              t.visible = entry.isIntersecting;
              visibleCount += entry.isIntersecting ? 1 : -1;
            }
          }
          if (visibleCount > 0) schedule();
        },
        { rootMargin: "20% 0px 20% 0px" },
      );
      for (const t of targets) io.observe(t.el);
    } else {
      for (const t of targets) t.visible = true;
      visibleCount = targets.length;
    }

    const observeOne = (el: HTMLElement) => {
      const t = addTarget(el);
      if (!t) return;
      if (io) {
        io.observe(el);
      } else {
        t.visible = true;
        visibleCount += 1;
      }
    };

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          const el = node as HTMLElement;
          if (el.matches?.(SELECTOR)) observeOne(el);
          if (el.querySelectorAll) {
            const inner = el.querySelectorAll<HTMLElement>(SELECTOR);
            for (const n of inner) observeOne(n);
          }
        }
      }
    });
    mo.observe(document.body, { subtree: true, childList: true });

    const onScroll = () => {
      schedule();
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        idleTimer = 0;
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }, IDLE_MS);
    };
    const onResize = () => {
      for (const t of targets) t.last = Number.NaN;
      schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    schedule();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      if (idleTimer) window.clearTimeout(idleTimer);
      io?.disconnect();
      mo.disconnect();
    };
  }, []);
}
