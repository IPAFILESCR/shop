import { useState } from "react";
import type { Category } from "../types";
import { PriceCard } from "./PriceCard";
import { Icon } from "./icons";
import { asset } from "../asset";

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
  const [activeDeviceId, setActiveDeviceId] = useState(
    category.kind === "device-tabs" ? category.devices[0]?.id : null,
  );
  const [accentFailed, setAccentFailed] = useState(false);

  const plans =
    category.kind === "device-tabs"
      ? category.devices.find((d) => d.id === activeDeviceId)?.plans ?? []
      : category.plans;

  const gridModifier = plans.length === 4 ? "plans-grid--4" : "plans-grid--3";
  const hasAccent = Boolean(category.accentImage) && !accentFailed;

  return (
    <section
      className={`category${hasAccent ? " category--with-accent" : ""}`}
      id={category.id}
    >
      {hasAccent ? (
        <div className="category__accent" aria-hidden="true">
          <picture>
            <source srcSet={`${asset(category.accentImage!)}.avif`} type="image/avif" />
            <source srcSet={`${asset(category.accentImage!)}.webp`} type="image/webp" />
            <img
              src={`${asset(category.accentImage!)}.webp`}
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
            <Icon name={category.iconKey} />
          </div>
          <div>
            <h2 className="category__title">{category.title}</h2>
            <p className="category__subtitle">{category.subtitle}</p>
          </div>
          <div className="category__counter">
            {plans.length.toString().padStart(2, "0")} тарифов
          </div>
        </header>

        {category.kind === "device-tabs" ? (
          <div
            className="device-tabs"
            role="tablist"
            aria-label="Устройство"
            onKeyDown={(e) => {
              const devices = category.devices;
              const cur = devices.findIndex((d) => d.id === activeDeviceId);
              if (cur < 0) return;
              let next = cur;
              if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (cur + 1) % devices.length;
              else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (cur - 1 + devices.length) % devices.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = devices.length - 1;
              else return;
              e.preventDefault();
              setActiveDeviceId(devices[next].id);
              e.currentTarget.querySelectorAll<HTMLButtonElement>(".device-tabs__btn")[next]?.focus();
            }}
          >
            {category.devices.map((device) => {
              const selected = device.id === activeDeviceId;
              return (
                <button
                  key={device.id}
                  type="button"
                  role="tab"
                  id={`tab-${device.id}`}
                  aria-selected={selected}
                  aria-controls={`${category.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveDeviceId(device.id)}
                  className="device-tabs__btn"
                >
                  {device.label}
                </button>
              );
            })}
          </div>
        ) : null}

        <div
          className={`plans-grid ${gridModifier}`}
          {...(category.kind === "device-tabs"
            ? {
                role: "tabpanel",
                id: `${category.id}-panel`,
                "aria-labelledby": `tab-${activeDeviceId}`,
              }
            : {})}
        >
          {plans.map((plan) => (
            <PriceCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
