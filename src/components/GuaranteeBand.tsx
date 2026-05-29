import { GUARANTEES } from "../data/extras";

export function GuaranteeBand() {
  return (
    <section className="guarantee" aria-label="Гарантии и обязательства">
      <div className="container">
        <div className="guarantee__inner" data-reveal="out">
          <header className="guarantee__title">
            <span className="guarantee__eyebrow">Наши обязательства</span>
            <h2 className="guarantee__heading">
              Четыре пункта, под которыми мы готовы&nbsp;подписаться лично
            </h2>
            <p className="guarantee__lede">
              Прозрачные условия, проверенные годами работы. Без мелкого шрифта и сноски на «исключения».
            </p>
          </header>

          <ol className="guarantee__pillars" data-reveal-style="stagger-children">
            {GUARANTEES.map((g, i) => (
              <li
                key={g.title}
                className="guarantee__pillar"
                data-reveal="out"
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
              >
                <span className="guarantee__pillar-rule" aria-hidden="true" />
                <span className="guarantee__pillar-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="guarantee__pillar-value">{g.title}</span>
                <span className="guarantee__pillar-caption">{g.caption}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
