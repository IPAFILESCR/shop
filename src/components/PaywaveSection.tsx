import { useState } from "react";
import { PAYWAVE } from "../data/paywave";
import { Icon, ArrowIcon, CheckIcon, DotIcon } from "./icons";
import { asset } from "../asset";

export function PaywaveSection() {
  const [accentFailed, setAccentFailed] = useState(false);
  const hasAccent = Boolean(PAYWAVE.accentImage) && !accentFailed;

  return (
    <section
      className={`category paywave${hasAccent ? " category--with-accent" : ""}`}
      id={PAYWAVE.id}
    >
      {hasAccent ? (
        <div className="category__accent" aria-hidden="true">
          <picture>
            <source srcSet={`${asset(PAYWAVE.accentImage!)}.avif`} type="image/avif" />
            <source srcSet={`${asset(PAYWAVE.accentImage!)}.webp`} type="image/webp" />
            <img
              src={`${asset(PAYWAVE.accentImage!)}.webp`}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setAccentFailed(true)}
              draggable={false}
            />
          </picture>
        </div>
      ) : null}

      <div className="container">
        <header className="category__head">
          <div className="category__icon" aria-hidden="true">
            <Icon name="wave" />
          </div>
          <div>
            <h2 className="category__title">{PAYWAVE.title}</h2>
            <p className="category__subtitle">{PAYWAVE.lede}</p>
          </div>
          <div className="category__counter">десятки направлений</div>
        </header>

        <div className="paywave__grid">
          <div className="paywave__column paywave__column--products" data-reveal="out">
            <span className="paywave__column-eyebrow">Каталог</span>
            <h3 className="paywave__column-title">{PAYWAVE.productsTitle}</h3>
            <ul className="paywave__list">
              {PAYWAVE.products.map((item) => (
                <li key={item} className="paywave__list-item">
                  <span className="paywave__list-bullet" aria-hidden="true">
                    <DotIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="paywave__list-footnote">{PAYWAVE.productsFootnote}</p>
          </div>

          <div className="paywave__column paywave__column--features" data-reveal="out">
            <span className="paywave__column-eyebrow">Преимущества</span>
            <h3 className="paywave__column-title">{PAYWAVE.featuresTitle}</h3>
            <ul className="paywave__features-list">
              {PAYWAVE.features.map((feature) => (
                <li key={feature.title} className="paywave__feature">
                  <span className="paywave__feature-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <div className="paywave__feature-text">
                    <span className="paywave__feature-title">{feature.title}</span>
                    <span className="paywave__feature-desc">{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="paywave__footer" data-reveal="out">
          <div className="paywave__cta">
            <a className="btn btn--primary" href={PAYWAVE.cta.primary.href}>
              {PAYWAVE.cta.primary.label}
              <ArrowIcon />
            </a>
            <a className="btn btn--secondary" href={PAYWAVE.cta.secondary.href}>
              {PAYWAVE.cta.secondary.label}
            </a>
          </div>

          <div className="paywave__contacts">
            <a className="paywave__contact" href={PAYWAVE.contacts.site.href}>
              <span className="paywave__contact-label">Сайт</span>
              <span className="paywave__contact-value">{PAYWAVE.contacts.site.label}</span>
            </a>
            <a className="paywave__contact" href={PAYWAVE.contacts.bot.href}>
              <span className="paywave__contact-label">Telegram-бот</span>
              <span className="paywave__contact-value">{PAYWAVE.contacts.bot.label}</span>
            </a>
          </div>
        </div>

        <p className="paywave__note">{PAYWAVE.registrationNote}</p>
      </div>
    </section>
  );
}
