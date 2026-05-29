import { FOOTER } from "../data/catalog";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="brand">
              <span className="brand__mark" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 19 12 4l7 15Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="15.5" r="1.4" fill="currentColor" />
                </svg>
              </span>
              <span>
                <span className="brand__name">IPAFILESCR</span>
                <span className="brand__suffix"> · Premium catalog</span>
              </span>
            </div>
            <p>
              Сертификаты Apple Developer, премиальные приложения и VPN — тщательно
              отобранный каталог под аккуратное премиум-сопровождение.
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title} className="site-footer__col">
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <span>{FOOTER.copyright}</span>
          <a href={FOOTER.contactHref}>Telegram {FOOTER.contact}</a>
        </div>
      </div>
    </footer>
  );
}
