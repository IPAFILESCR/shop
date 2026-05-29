import { asset } from "../asset";

export function BentoShowcase() {
  return (
    <section className="bento" aria-label="Ключевые преимущества">
      <div className="container">
        <header className="category__head" data-reveal="out">
          <div className="category__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="8" height="12" rx="1.5" />
              <rect x="13" y="3" width="8" height="6" rx="1.5" />
              <rect x="13" y="11" width="8" height="10" rx="1.5" />
              <rect x="3" y="17" width="8" height="4" rx="1.5" />
            </svg>
          </div>
          <div>
            <h2 className="category__title">Что делает сервис премиальным</h2>
            <p className="category__subtitle">
              Главное в одной плотной сетке — выбирайте взглядом, открывайте за секунды.
            </p>
          </div>
          <div className="category__counter">05 пунктов</div>
        </header>

        <div className="bento__grid" data-reveal-style="stagger-children">
          <article
            className="bento__tile bento__tile--feature bento__tile--with-image"
            data-reveal="out"
            data-parallax="0.08"
            style={{ ["--bento-image" as never]: `url('${asset("/images/bento-feature.webp")}')` }}
          >
            <span className="bento__eyebrow">Главное</span>
            <h3 className="bento__heading">Моментальная регистрация сертификатов</h3>
            <p className="bento__copy">
              Любой сертификат регистрируется в течение нескольких минут — быстро, без лишних
              ожиданий и сложностей. Даже если у вас возникали проблемы с регистрацией в других
              сервисах, мы поможем оформить всё максимально просто и без отказов.
            </p>
            <a className="bento__link" href="#apple-certificates">
              Перейти к тарифам →
            </a>
          </article>

          <article className="bento__tile bento__tile--metric" data-reveal="out">
            <span className="bento__eyebrow">Гарантия</span>
            <h3 className="bento__heading">Любой тариф имеет специальную гарантию</h3>
            <p className="bento__copy">Период подбирается под формат — от месяца до бесконечной.</p>
          </article>

          <article className="bento__tile bento__tile--mono" data-reveal="out">
            <span className="bento__eyebrow">Telegram-бот</span>
            <h3 className="bento__heading">Статус, чек и поддержка — в одном чате</h3>
            <p className="bento__copy">
              Бот ведёт каждый заказ: уведомления о готовности, гарантия, обновления, перевыпуск
              в один тап.
            </p>
          </article>

          <article className="bento__tile bento__tile--quiet" data-reveal="out">
            <span className="bento__eyebrow">Поддержка 24/7</span>
            <h3 className="bento__heading">Менеджер на связи в течение 10 минут</h3>
            <p className="bento__copy">Без чат-ботов с заскриптованными ответами. Живые люди.</p>
          </article>

          <article
            className="bento__tile bento__tile--signature bento__tile--with-image"
            data-reveal="out"
            data-parallax="0.08"
            style={{ ["--bento-image" as never]: `url('${asset("/images/bento-signature.webp")}')` }}
          >
            <span className="bento__eyebrow">Подписано</span>
            <blockquote className="bento__quote">
              «Сервис, к которому возвращаешься без раздумий — потому что работает.»
            </blockquote>
            <span className="bento__author">Команда IPAFILESCR</span>
          </article>
        </div>
      </div>
    </section>
  );
}
