import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/extras";
import { useCountUp } from "../hooks/useCountUp";

function StatTile({ stat, start }: { stat: (typeof STATS)[number]; start: boolean }) {
  const value = useCountUp({
    target: stat.value,
    duration: 1500,
    start,
    decimals: Number.isInteger(stat.value) ? 0 : 1,
  });
  const display = Number.isInteger(stat.value)
    ? Math.round(value).toLocaleString("ru-RU")
    : value.toLocaleString("ru-RU", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <div className="stat-tile">
      <div className="stat-tile__value">
        <span className="stat-tile__number">{display}</span>
        {stat.suffix ? <span className="stat-tile__suffix">{stat.suffix}</span> : null}
      </div>
      <div className="stat-tile__label">{stat.label}</div>
    </div>
  );
}

export function StatsBand() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-band" ref={ref}>
      <div className="container">
        <div className="stats-band__grid">
          {STATS.map((stat) => (
            <StatTile key={stat.label} stat={stat} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
