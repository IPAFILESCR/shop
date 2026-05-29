import { TESTIMONIALS } from "../data/extras";
import { SmartImage } from "./SmartImage";
import { asset } from "../asset";

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <header className="category__head" data-reveal="out">
          <div className="category__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4H6.5A2.5 2.5 0 0 1 4 14.5v-8z" />
            </svg>
          </div>
          <div>
            <h2 className="category__title">Отзывы клиентов</h2>
            <p className="category__subtitle">
              Голоса разработчиков, дизайнеров и продюсеров, которые пользуются сервисом регулярно.
            </p>
          </div>
          <div className="category__counter">04 отзыва</div>
        </header>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.author}
              className="testimonial"
              data-reveal="out"
              style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
            >
              <span className="testimonial__quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial__body">{t.body}</blockquote>
              <figcaption className="testimonial__author">
                {t.avatar ? (
                  <span className="testimonial__avatar" aria-hidden="true">
                    <SmartImage
                      src={asset(t.avatar)}
                      alt=""
                      width={80}
                      height={80}
                      sizes="80px"
                    />
                  </span>
                ) : null}
                <span className="testimonial__author-meta">
                  <span className="testimonial__author-name">{t.author}</span>
                  <span className="testimonial__author-role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
