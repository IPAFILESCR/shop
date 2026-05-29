import { useState } from "react";
import { HERO } from "../data/catalog";
import { ArrowIcon } from "./icons";
import { asset } from "../asset";

export function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="hero hero--banner" id="top">
      {!imgFailed ? (
        <div className="hero__banner" data-parallax="0.22" aria-hidden="true">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${asset("/images/hero-banner-4k.avif")} 3840w, ${asset("/images/hero-banner-2k.avif")} 2560w`}
              sizes="100vw"
              type="image/avif"
            />
            <source
              media="(min-width: 600px)"
              srcSet={`${asset("/images/hero-banner-2k.avif")} 2560w, ${asset("/images/hero-banner-1k.avif")} 1280w`}
              sizes="100vw"
              type="image/avif"
            />
            <source
              srcSet={`${asset("/images/hero-banner-1k.avif")} 1280w`}
              sizes="100vw"
              type="image/avif"
            />
            <source
              media="(min-width: 1280px)"
              srcSet={`${asset("/images/hero-banner-4k.webp")} 3840w, ${asset("/images/hero-banner-2k.webp")} 2560w`}
              sizes="100vw"
              type="image/webp"
            />
            <source
              media="(min-width: 600px)"
              srcSet={`${asset("/images/hero-banner-2k.webp")} 2560w, ${asset("/images/hero-banner-1k.webp")} 1280w`}
              sizes="100vw"
              type="image/webp"
            />
            <source
              srcSet={`${asset("/images/hero-banner-1k.webp")} 1280w`}
              sizes="100vw"
              type="image/webp"
            />
            <img
              src={asset("/images/hero-banner-2k.webp")}
              alt=""
              width={2560}
              height={1086}
              loading="eager"
              decoding="sync"
              {...({ fetchpriority: "high" } as Record<string, string>)}
              onError={() => setImgFailed(true)}
              draggable={false}
            />
          </picture>
        </div>
      ) : null}

      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span aria-hidden="true">●</span>
            {HERO.eyebrow}
          </div>
          <h1 className="hero__title">{HERO.title}</h1>
          <p className="hero__description">{HERO.description}</p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#apple-certificates">
              {HERO.primaryCta}
              <ArrowIcon />
            </a>
            <a className="btn btn--secondary" href="https://t.me/DaniLka_Mm">
              {HERO.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
