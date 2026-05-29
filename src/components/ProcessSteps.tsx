import { PROCESS_STEPS } from "../data/extras";

export function ProcessSteps() {
  return (
    <section className="process" id="process">
      <div className="container">
        <header className="category__head" data-reveal="out">
          <div className="category__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h4l2-7 4 14 2-7h6" />
            </svg>
          </div>
          <div>
            <h2 className="category__title">Как всё устроено</h2>
            <p className="category__subtitle">
              Четыре шага от заявки до готового сертификата. Каждый этап под контролем и виден в Telegram-боте.
            </p>
          </div>
          <div className="category__counter">04 этапа</div>
        </header>

        <ol className="process__list">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.index}
              className="process__step"
              data-reveal="out"
              style={{ ["--reveal-delay" as never]: `${i * 60}ms` }}
            >
              <div className="process__index">{step.index}</div>
              <div className="process__connector" aria-hidden="true" />
              <h3 className="process__title">{step.title}</h3>
              <p className="process__description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
