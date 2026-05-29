import { BENEFITS } from "../data/catalog";
import { Icon } from "./icons";

export function BenefitsGrid() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <header className="category__head">
          <div className="category__icon" aria-hidden="true">
            <Icon name="spark" />
          </div>
          <div>
            <h2 className="category__title">Почему нас выбирают</h2>
            <p className="category__subtitle">
              Четыре опоры сервиса, ради которых клиенты возвращаются и рекомендуют нас.
            </p>
          </div>
          <div className="category__counter">04 принципа</div>
        </header>
        <div className="benefits__grid">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="benefit">
              <div className="benefit__icon" aria-hidden="true">
                <Icon name={benefit.iconKey} />
              </div>
              <h3 className="benefit__title">{benefit.title}</h3>
              <p className="benefit__description">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
