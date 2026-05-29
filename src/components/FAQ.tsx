import { useState } from "react";
import { FAQ_ITEMS } from "../data/extras";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <header className="category__head" data-reveal="out">
          <div className="category__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17.5v.01" />
            </svg>
          </div>
          <div>
            <h2 className="category__title">Частые вопросы</h2>
            <p className="category__subtitle">
              Если ответа нет ниже — менеджер в Telegram ответит в течение 10 минут в рабочее время.
            </p>
          </div>
          <div className="category__counter">{String(FAQ_ITEMS.length).padStart(2, "0")} вопросов</div>
        </header>

        <ul className="faq__list">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <li
                key={item.question}
                className={`faq__item${open ? " faq__item--open" : ""}`}
                data-reveal="out"
                style={{ ["--reveal-delay" as never]: `${i * 40}ms` }}
              >
                <button
                  type="button"
                  className="faq__trigger"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="faq__index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="faq__question">{item.question}</span>
                  <span className="faq__plus" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M5 12h14" />
                      <path className="faq__plus-v" d="M12 5v14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                >
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
