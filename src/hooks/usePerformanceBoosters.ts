type IdleDeadline = { didTimeout: boolean; timeRemaining: () => number };
type IdleCallback = (deadline: IdleDeadline) => void;
type IdleWindow = Window & {
  requestIdleCallback?: (cb: IdleCallback, opts?: { timeout?: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function idle(callback: () => void, timeoutMs: number = 1500): () => void {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  const w = window as IdleWindow;
  if (typeof w.requestIdleCallback === "function") {
    const handle = w.requestIdleCallback(() => callback(), { timeout: timeoutMs });
    return () => {
      if (typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(handle);
    };
  }
  const t = window.setTimeout(callback, 50);
  return () => window.clearTimeout(t);
}

function mediaMatches(query: string): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  try {
    return window.matchMedia(query).matches;
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  return mediaMatches("(prefers-reduced-motion: reduce)");
}
