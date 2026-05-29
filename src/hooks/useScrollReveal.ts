import { useEffect } from "react";
import { idle, prefersReducedMotion } from "./usePerformanceBoosters";

let sharedObserver: IntersectionObserver | null = null;
let mutationObserver: MutationObserver | null = null;
let consumerCount = 0;

const REVEAL_SELECTOR = '[data-reveal="out"]';

function ensureSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal", "in");
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  return sharedObserver;
}

function observeAll(root: ParentNode): void {
  if (!sharedObserver) return;
  const nodes = root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  for (const n of nodes) sharedObserver.observe(n);
}

function ensureMutationObserver(): void {
  if (mutationObserver) return;
  mutationObserver = new MutationObserver((mutations) => {
    if (!sharedObserver) return;
    for (const m of mutations) {
      for (const added of m.addedNodes) {
        if (added.nodeType !== 1) continue;
        const el = added as Element;
        if (el.matches?.(REVEAL_SELECTOR)) sharedObserver.observe(el);
        if (el.querySelectorAll) {
          const inner = el.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
          for (const n of inner) sharedObserver.observe(n);
        }
      }
      if (
        m.type === "attributes" &&
        m.attributeName === "data-reveal" &&
        m.target.nodeType === 1
      ) {
        const el = m.target as HTMLElement;
        if (el.getAttribute("data-reveal") === "out") sharedObserver.observe(el);
      }
    }
  });
  mutationObserver.observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["data-reveal"],
  });
}

export function useScrollReveal(): void {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      const nodes = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
      nodes.forEach((n) => n.setAttribute("data-reveal", "in"));
      return;
    }

    consumerCount += 1;

    const cancelIdle = idle(() => {
      ensureSharedObserver();
      ensureMutationObserver();
      observeAll(document);
    });

    return () => {
      cancelIdle();
      consumerCount = Math.max(0, consumerCount - 1);
      if (consumerCount === 0) {
        sharedObserver?.disconnect();
        sharedObserver = null;
        mutationObserver?.disconnect();
        mutationObserver = null;
      }
    };
  }, []);
}
