import type { Benefit, Category } from "../types";

const certFeatures = (guarantee: string, extras: { text: string; tone?: "positive" | "negative" | "neutral" }[] = []) => [
  ...extras,
  {
    text: "Подходит даже после отозванного сертификата",
    tone: "positive" as const,
  },
  { text: "Срок изготовления 5–10 минут" },
  { text: "Отслеживание статуса в Telegram-боте" },
  { text: "Поддержка VPN и виджетов" },
  { text: "Совместимость с Epic Games играми" },
  {
    text: `Гарантия: ${guarantee}`,
    tone: guarantee === "отсутствует" ? ("negative" as const) : ("neutral" as const),
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "apple-certificates",
    title: "Сертификаты Apple Developer",
    subtitle:
      "Подписи под установку любых приложений вне App Store. Любой тариф регистрируется моментально и подходит даже после ранее отозванного сертификата — различие только в сроке гарантии.",
    iconKey: "apple",
    accentImage: "/images/category-certificates",
    kind: "device-tabs",
    devices: [
      {
        id: "iphone",
        label: "iPhone",
        plans: [
          {
            id: "iphone-budget",
            title: "Бюджетный",
            caption: "Старт",
            price: 399,
            currency: "₽",
            features: certFeatures("1 месяц"),
            badge: "Лучшая цена",
            purchaseUrl: "https://t.me/personalcert_bot?start=item_608085",
          },
          {
            id: "iphone-standard",
            title: "Обычный",
            caption: "Базовая подпись",
            price: 699,
            currency: "₽",
            features: certFeatures("2 месяца"),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152552",
          },
          {
            id: "iphone-paired",
            title: "Парный",
            caption: "На два устройства",
            price: 1099,
            currency: "₽",
            features: certFeatures("2 месяца", [
              { text: "Действует на 2 устройства одновременно", tone: "positive" },
            ]),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152554",
          },
          {
            id: "iphone-instant",
            title: "Моментальный",
            caption: "Расширенная гарантия",
            price: 1499,
            currency: "₽",
            features: certFeatures("6 месяцев"),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152553",
          },
          {
            id: "iphone-super",
            title: "СуперМоментальный",
            caption: "Долгий срок",
            price: 1699,
            currency: "₽",
            features: certFeatures("10 месяцев"),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152557",
          },
          {
            id: "iphone-infinite",
            title: "Бесконечный",
            caption: "Premium",
            price: 2099,
            currency: "₽",
            features: certFeatures("Бесконечная", [
              { text: "Безлимитное восстановление при отзыве", tone: "positive" },
              { text: "Бесплатное продление в боте", tone: "positive" },
            ]),
            highlight: true,
            purchaseUrl: "https://t.me/personalcert_bot?start=item_586523",
          },
        ],
      },
      {
        id: "ipad",
        label: "iPad",
        plans: [
          {
            id: "ipad-budget",
            title: "Бюджетный",
            caption: "Старт",
            price: 399,
            currency: "₽",
            features: certFeatures("1 месяц"),
            badge: "Лучшая цена",
            purchaseUrl: "https://t.me/personalcert_bot?start=item_608105",
          },
          {
            id: "ipad-standard",
            title: "Обычный",
            caption: "Базовая подпись",
            price: 499,
            currency: "₽",
            features: certFeatures("1 месяц"),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152558",
          },
          {
            id: "ipad-instant",
            title: "Моментальный",
            caption: "Базовая гарантия",
            price: 699,
            currency: "₽",
            features: certFeatures("2 месяца"),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152555",
          },
          {
            id: "ipad-super",
            title: "СуперМоментальный",
            caption: "Долгий срок",
            price: 999,
            currency: "₽",
            features: certFeatures("10 месяцев"),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152562",
          },
          {
            id: "ipad-paired",
            title: "Парный",
            caption: "На два устройства",
            price: 1099,
            currency: "₽",
            features: certFeatures("2 месяца", [
              { text: "Действует на 2 устройства одновременно", tone: "positive" },
            ]),
            purchaseUrl: "https://t.me/personalcert_bot?start=item_152561",
          },
          {
            id: "ipad-infinite",
            title: "Бесконечный",
            caption: "Premium",
            price: 2099,
            currency: "₽",
            features: certFeatures("Бесконечная", [
              { text: "Безлимитное восстановление при отзыве", tone: "positive" },
              { text: "Бесплатное продление в боте", tone: "positive" },
            ]),
            highlight: true,
            purchaseUrl: "https://t.me/personalcert_bot?start=item_586562",
          },
        ],
      },
    ],
  },
  {
    id: "gbox-catalog",
    title: "GBox — каталог приложений",
    subtitle:
      "Премиум-доступ к каталогу избранных приложений и игр. Поддержка, отсутствие рекламы, регулярные апдейты.",
    iconKey: "gamepad",
    accentImage: "/images/category-gbox",
    kind: "plans",
    plans: [
      {
        id: "gbox-3m",
        title: "Трёхмесячный план",
        caption: "Старт",
        price: 699,
        currency: "₽",
        features: [
          { text: "Полный доступ ко всем приложениям" },
          { text: "Приоритетная поддержка" },
          { text: "Без рекламы" },
        ],
        purchaseUrl: "https://t.me/personalcert_bot?start=item_152565",
      },
      {
        id: "gbox-6m",
        title: "Полугодовой план",
        caption: "Оптимальный",
        price: 999,
        currency: "₽",
        features: [
          { text: "Полный доступ ко всем приложениям" },
          { text: "Приоритетная поддержка" },
          { text: "Без рекламы" },
        ],
        purchaseUrl: "https://t.me/personalcert_bot?start=item_152566",
      },
      {
        id: "gbox-12m",
        title: "Годовой план",
        caption: "Максимум",
        price: 1399,
        currency: "₽",
        features: [
          { text: "Полный доступ ко всем приложениям" },
          { text: "Поддержка 24/7" },
          { text: "Без рекламы" },
        ],
        badge: "Лучшая цена",
        highlight: true,
        purchaseUrl: "https://t.me/personalcert_bot?start=item_152567",
      },
    ],
  },
  {
    id: "vpn-services",
    title: "VPN — частная сеть",
    subtitle:
      "Безлимитный трафик, высокая скорость, доступ к нужным сервисам. Тарифы от месяца до года.",
    iconKey: "shield",
    accentImage: "/images/category-vpn",
    kind: "plans",
    plans: [
      {
        id: "vpn-1m",
        title: "Месячный план",
        caption: "Попробовать",
        price: 250,
        currency: "₽",
        description: "Безлимитный трафик, высокая скорость, доступ к нужным сервисам.",
        features: [
          { text: "Безлимитный трафик" },
          { text: "Высокая скорость" },
          { text: "Активация моментально" },
        ],
        purchaseUrl: "https://t.me/orbit_key_bot",
      },
      {
        id: "vpn-3m",
        title: "Квартальный план",
        caption: "Удобно",
        price: 550,
        currency: "₽",
        description: "Три месяца стабильной работы по выгодной цене.",
        features: [
          { text: "Безлимитный трафик" },
          { text: "Поддержка всех устройств" },
        ],
        purchaseUrl: "https://t.me/orbit_key_bot",
      },
      {
        id: "vpn-6m",
        title: "Полугодовой план",
        caption: "Выгодно",
        price: 900,
        currency: "₽",
        description: "Полгода без забот — лучшая цена на длинной дистанции.",
        features: [
          { text: "Безлимитный трафик" },
          { text: "Приоритетная техподдержка" },
        ],
        badge: "Лучшая цена",
        purchaseUrl: "https://t.me/orbit_key_bot",
      },
      {
        id: "vpn-12m",
        title: "Годовой план",
        caption: "Максимум",
        price: 1400,
        currency: "₽",
        description: "Полный год премиального VPN с максимальной экономией.",
        features: [
          { text: "Безлимитный трафик" },
          { text: "Поддержка 24/7" },
        ],
        highlight: true,
        purchaseUrl: "https://t.me/orbit_key_bot",
      },
    ],
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Сертификаты",
    description: "Официальные сертификаты разработчика Apple, выпускаемые с гарантией.",
    iconKey: "certificate",
  },
  {
    title: "Приложения",
    description: "Каталог премиальных мобильных приложений и игр без рекламы.",
    iconKey: "device",
  },
  {
    title: "Безопасность",
    description: "Защищённое соединение, бережное обращение с данными, NDA-уровень.",
    iconKey: "lock",
  },
  {
    title: "Доверие",
    description: "Нам доверяют тысячи клиентов — реальные отзывы и работающая поддержка.",
    iconKey: "trust",
  },
];

export const HERO = {
  eyebrow: "ipafilescr",
  title: "Сертификаты Apple, подпись IPA и VPN для iOS",
  description:
    "Сертификаты Apple Developer для установки приложений вне App Store, премиум VPN и каталог GBox. Моментальная выдача и гарантия — заказ в Telegram.",
  primaryCta: "Открыть каталог",
  secondaryCta: "Связаться с менеджером",
};

export const FOOTER = {
  copyright: "© 2026 IPAFILESCR. Все права защищены.",
  contact: "@DaniLka_Mm",
  contactHref: "https://t.me/DaniLka_Mm",
  columns: [
    {
      title: "Каталог",
      links: [
        { label: "Сертификаты Apple Developer", href: "#apple-certificates" },
        { label: "GBox каталог приложений", href: "#gbox-catalog" },
        { label: "Премиальный VPN", href: "#vpn-services" },
        { label: "Цифровые товары — Paywave", href: "#paywave" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { label: "Администратор @DaniLka_Mm", href: "https://t.me/DaniLka_Mm" },
        { label: "VPN-поддержка @orbit_key_bot", href: "https://t.me/orbit_key_bot" },
        { label: "VPN-администратор @orbitvpnsupport", href: "https://t.me/orbitvpnsupport" },
      ],
    },
  ],
};
