export interface PaywaveFeature {
  title: string;
  description: string;
}

export const PAYWAVE = {
  id: "paywave",
  eyebrow: "Цифровые товары",
  title: "Paywave — цифровые товары и подписки без ограничений",
  lede:
    "Оплачивайте зарубежные сервисы российскими картами, через СБП и популярные банки — быстро, удобно и без лишних сложностей.",
  productsTitle: "Доступно уже сейчас",
  products: [
    "Apple App Store / iTunes — 23 региона",
    "Telegram Premium — 3, 6 и 12 месяцев",
    "Пополнение Steam по логину",
    "PlayStation Store Gift Cards",
    "Steam Wallet, Xbox Gift Card, Game Pass, PSN",
    "Fortnite, Discord Nitro, ExitLag, Spotify",
    "Google Play, Adobe, Microsoft Windows",
  ],
  productsFootnote: "И ещё десятки цифровых товаров — каталог постоянно расширяется",
  featuresTitle: "Почему выбирают Paywave",
  features: [
    {
      title: "Прозрачные цены",
      description: "Без скрытых комиссий — стоимость на старте равна финальной.",
    },
    {
      title: "Мгновенная доставка",
      description: "Обычно от 1 минуты после оплаты — без ожиданий и переписки.",
    },
    {
      title: "Личный кабинет",
      description: "История заказов и быстрый доступ к товарам в один клик.",
    },
    {
      title: "Поддержка через тикеты",
      description: "Каждый запрос — в собственной нитке. Ничего не теряется.",
    },
    {
      title: "Безопасная оплата через Wata.pro",
      description: "Лицензированный российский эквайер с поддержкой 3D-Secure и СБП.",
    },
  ] as PaywaveFeature[],
  cta: {
    primary: { label: "Открыть Paywave", href: "https://rupaywave.ru" },
    secondary: { label: "Перейти в бот", href: "https://t.me/PaywaveRu_bot" },
  },
  registrationNote:
    "Покупка доступна даже без регистрации. После регистрации — история заказов, быстрый доступ к поддержке и управление покупками в один клик.",
  contacts: {
    site: { label: "rupaywave.ru", href: "https://rupaywave.ru" },
    bot: { label: "@PaywaveRu_bot", href: "https://t.me/PaywaveRu_bot" },
  },
  accentImage: "/images/category-paywave",
};
