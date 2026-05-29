import { useEffect, useId, useRef, useState } from "react";
import { ArrowIcon } from "./icons";

const LINKS = [
  { href: "#apple-certificates", label: "Сертификаты" },
  { href: "#gbox-catalog", label: "GBox" },
  { href: "#vpn-services", label: "VPN" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="nav-burger">
      <button
        ref={buttonRef}
        type="button"
        className="hamburger"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      {open && (
        <div id={menuId} className="nav-dropdown">
          <nav className="nav-dropdown__nav" aria-label="Разделы">
            <ul>
              {LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    className="nav-dropdown__link"
                    href={link.href}
                    onClick={close}
                  >
                    <span className="nav-dropdown__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="nav-dropdown__label">{link.label}</span>
                    <ArrowIcon className="nav-dropdown__arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-dropdown__cta">
            <a
              className="btn btn--primary btn--small"
              href="https://t.me/DaniLka_Mm"
              onClick={close}
            >
              Связаться в Telegram
              <ArrowIcon />
            </a>
            <span className="nav-dropdown__cta-hint">
              Ответ в течение 10 минут в рабочее время
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
