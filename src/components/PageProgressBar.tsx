import { useScrollProgress } from "../hooks/useScrollProgress";

export function PageProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      className="page-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Прогресс прокрутки"
    >
      <span
        className="page-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
