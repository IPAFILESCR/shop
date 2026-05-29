import { ArrowIcon } from "./icons";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="brand" aria-label="IPAFILESCR — на главную">
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
        </a>

        <nav className="site-header__nav" aria-label="Основное меню">
          <a href="#apple-certificates">Сертификаты</a>
          <a href="#gbox-catalog">GBox</a>
          <a href="#vpn-services">VPN</a>
          <a href="#benefits">Преимущества</a>
        </nav>

        <a
          className="btn btn--primary btn--small site-header__cta"
          href="https://t.me/DaniLka_Mm"
        >
          Связаться
          <ArrowIcon />
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
