import type { PricingPlan } from "../types";
import { CheckIcon, DotIcon, MinusIcon } from "./icons";

interface PriceCardProps {
  plan: PricingPlan;
}

const formatPrice = (n: number) => n.toLocaleString("ru-RU");

export function PriceCard({ plan }: PriceCardProps) {
  return (
    <article
      className={`price-card${plan.highlight ? " price-card--highlight" : ""}`}
    >
      {plan.badge ? (
        <span className="price-card__badge">{plan.badge}</span>
      ) : null}

      {plan.caption ? (
        <div className="price-card__caption">{plan.caption}</div>
      ) : null}

      <h3 className="price-card__title">{plan.title}</h3>

      {plan.description ? (
        <p className="price-card__description">{plan.description}</p>
      ) : null}

      <div className="price-card__price" aria-label={`Цена ${formatPrice(plan.price)} рублей`}>
        <span className="price-card__price-value">{formatPrice(plan.price)}</span>
        <span className="price-card__price-currency">{plan.currency}</span>
      </div>

      <ul className="price-card__features">
        {plan.features.map((feature, index) => {
          const tone = feature.tone ?? "neutral";
          return (
            <li
              key={index}
              className={`price-card__feature price-card__feature--${tone}`}
            >
              <span className="price-card__feature-icon" aria-hidden="true">
                {tone === "positive" ? (
                  <CheckIcon />
                ) : tone === "negative" ? (
                  <MinusIcon />
                ) : (
                  <DotIcon />
                )}
              </span>
              <span>{feature.text}</span>
            </li>
          );
        })}
      </ul>

      {plan.purchaseUrl ? (
        <a
          className="btn btn--primary btn--block price-card__cta"
          href={plan.purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Купить тариф «${plan.title}» за ${formatPrice(plan.price)} ${plan.currency} — откроется в новой вкладке`}
        >
          Купить за {formatPrice(plan.price)} {plan.currency}
        </a>
      ) : (
        <button
          type="button"
          className="btn btn--primary btn--block price-card__cta"
          disabled
          aria-label={`Тариф «${plan.title}»: ссылка на оплату временно недоступна`}
        >
          Скоро в продаже
        </button>
      )}
    </article>
  );
}
