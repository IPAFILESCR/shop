export interface CarouselSlide {
  index: string;
  title: string;
  caption: string;
  meta: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    index: "01",
    title: "Apple Developer Certificates",
    caption: "Подписи под установку любых приложений вне App Store — 5–10 минут на любой тариф.",
    meta: "Apple · iOS · iPadOS",
  },
  {
    index: "02",
    title: "GBox каталог приложений",
    caption: "Курированная коллекция мобильных приложений без рекламы, с поддержкой 24/7.",
    meta: "Каталог · iOS",
  },
  {
    index: "03",
    title: "Премиальный VPN",
    caption: "Безлимитный трафик, высокая скорость и стабильное соединение — от месяца до года.",
    meta: "WireGuard · OpenVPN",
  },
  {
    index: "04",
    title: "Telegram-бот",
    caption: "Статус заказа, гарантийный перевыпуск и поддержка — в одном чате.",
    meta: "Telegram · бот",
  },
  {
    index: "05",
    title: "Бесплатный перевыпуск",
    caption: "Любой сертификат перевыпускается бесплатно в гарантийный период — без вопросов и доплат.",
    meta: "Сервис · гарантия",
  },
  {
    index: "06",
    title: "Paywave — цифровые товары",
    caption: "Оплата зарубежных сервисов российскими картами и СБП. Apple App Store, Telegram Premium, Steam, PSN и десятки других.",
    meta: "Paywave · цифровой каталог",
  },
];
