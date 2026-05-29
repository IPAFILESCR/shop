import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CAROUSEL_SLIDES } from "../data/showcase";

const PIN_MEDIA =
  "(min-width: 880px) and (min-height: 720px) and (max-height: 1400px) and (prefers-reduced-motion: no-preference)";

export function HorizontalCarousel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fallbackTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinned, setPinned] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(PIN_MEDIA).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(PIN_MEDIA);
    const onChange = (e: MediaQueryListEvent) => setPinned(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    if (!pinned) return;
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!wrap || !stage || !track) return;

    let raf = 0;
    let maxTranslate = 0;
    let runway = 0;

    const measure = () => {
      const vh = window.innerHeight;
      maxTranslate = Math.max(track.scrollWidth - stage.clientWidth, 0);
      runway = vh + maxTranslate;
      wrap.style.height = `${runway}px`;
    };

    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), maxTranslate);
      track.style.transform = `translate3d(${-scrolled}px, 0, 0)`;

      const progress = maxTranslate > 0 ? scrolled / maxTranslate : 0;
      const idx = Math.min(
        CAROUSEL_SLIDES.length - 1,
        Math.round(progress * (CAROUSEL_SLIDES.length - 1)),
      );
      setActiveIndex(idx);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const settleTimer = window.setTimeout(onResize, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(settleTimer);
      if (raf) cancelAnimationFrame(raf);
      track.style.transform = "";
      wrap.style.height = "";
    };
  }, [pinned]);

  useEffect(() => {
    if (pinned) return;
    const track = fallbackTrackRef.current;
    const viewport = track?.parentElement;
    if (!track || !viewport) return;
    const slides = Array.from(track.querySelectorAll<HTMLElement>(".carousel__slide"));
    if (slides.length === 0) return;
    const ratios = new Map<HTMLElement, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target as HTMLElement, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let bestIdx = -1;
        let bestRatio = 0;
        slides.forEach((s, i) => {
          const r = ratios.get(s) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestIdx = i;
          }
        });
        if (bestIdx >= 0) setActiveIndex(bestIdx);
      },
      { root: viewport, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    slides.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [pinned]);

  const goTo = (i: number) => {
    if (pinned) {
      const wrap = wrapRef.current;
      const stage = stageRef.current;
      const track = trackRef.current;
      if (!wrap || !stage || !track) return;
      const maxTranslate = Math.max(track.scrollWidth - stage.clientWidth, 0);
      const wrapTop = window.scrollY + wrap.getBoundingClientRect().top;
      const lastIndex = Math.max(CAROUSEL_SLIDES.length - 1, 1);
      const target = wrapTop + (maxTranslate * i) / lastIndex;
      window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }
    const track = fallbackTrackRef.current;
    const slide = track?.querySelectorAll<HTMLElement>(".carousel__slide")[i];
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const header = (
    <header className="category__head" data-reveal="out">
      <div className="category__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M12 3v18" />
        </svg>
      </div>
      <div>
        <h2 className="category__title">Премиум-направления</h2>
        <p className="category__subtitle">
          Ключевые направления сервиса — пролистайте, посмотрите детали или открывайте напрямую.
        </p>
      </div>
      <div className="category__counter">{String(activeIndex + 1).padStart(2, "0")} / {String(CAROUSEL_SLIDES.length).padStart(2, "0")}</div>
    </header>
  );

  const dots = (
    <div
      className="carousel__dots"
      role="group"
      aria-label="Навигация по слайдам"
      onKeyDown={(e) => {
        const last = CAROUSEL_SLIDES.length - 1;
        let next = activeIndex;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = Math.min(activeIndex + 1, last);
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = Math.max(activeIndex - 1, 0);
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        else return;
        e.preventDefault();
        goTo(next);
        e.currentTarget.querySelectorAll<HTMLButtonElement>(".carousel__dot")[next]?.focus();
      }}
    >
      {CAROUSEL_SLIDES.map((slide, i) => (
        <button
          key={slide.index}
          type="button"
          className="carousel__dot"
          aria-label={`Слайд ${i + 1} из ${CAROUSEL_SLIDES.length}: ${slide.title}`}
          aria-current={i === activeIndex ? "true" : undefined}
          tabIndex={i === activeIndex ? 0 : -1}
          onClick={() => goTo(i)}
        >
          <span className="carousel__dot-fill" />
        </button>
      ))}
    </div>
  );

  const renderSlide = (slide: typeof CAROUSEL_SLIDES[number], i: number) => (
    <article
      key={slide.index}
      className={`carousel__slide${i === activeIndex ? " carousel__slide--active" : ""}`}
      aria-current={i === activeIndex}
    >
      <div className="carousel__slide-index">{slide.index}</div>
      <h3 className="carousel__slide-title">{slide.title}</h3>
      <p className="carousel__slide-caption">{slide.caption}</p>
      <div className="carousel__slide-meta">{slide.meta}</div>
    </article>
  );

  if (pinned) {
    return (
      <section className="carousel carousel--pinned" aria-label="Премиум-направления каталога">
        <div ref={wrapRef} className="carousel__pin-wrap">
          <div className="carousel__pin-viewport">
            <div className="container">{header}</div>
            <div ref={stageRef} className="carousel__pin-stage">
              <div ref={trackRef} className="carousel__pin-track">
                {CAROUSEL_SLIDES.map(renderSlide)}
              </div>
            </div>
            <div className="container">{dots}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="carousel" aria-label="Премиум-направления каталога">
      <div className="container">{header}</div>
      <div className="carousel__viewport" data-reveal="out">
        <div className="carousel__track" ref={fallbackTrackRef}>
          {CAROUSEL_SLIDES.map(renderSlide)}
        </div>
      </div>
      <div className="container">{dots}</div>
    </section>
  );
}
