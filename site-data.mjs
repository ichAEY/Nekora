import reviews from "./reviews.mjs";

const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetBase = `${publicBase}/assets/lyudmila`;

export default {
  basePath: publicBase,

  template: {
    specialty: "lashes",
    bookingProvider: "",
    reviewSource: "Авито",
  },

  brand: {
    name: "Некора Людмила",
    subtitle: "",
    monogram: "ЛН",
  },

  master: {
    name: "Людмила",
    dative: "Людмиле",
    genitive: "Людмилы",
    instrumental: "Людмилой",
    monogram: "ЛН",
    profession: "Мастер по LED-наращиванию ресниц",
    heroTitle: "",
    heroEmphasis: "мастер по LED-наращиванию ресниц",
    heroCaption: "Опыт работы — 8 лет",
    imageAlt: "мастер по LED-наращиванию ресниц",
    heroCopy: "",
    visitMotto: "",
    experienceYears: 8,
    experienceAria: "8 лет опыта",
    aboutTitle: "О мастере",
    aboutLead: "Меня зовут Людмила, я мастер по LED-наращиванию ресниц с 8-летним опытом.",
    aboutParagraphs: [
      "Для меня важно подчеркнуть вашу природную красоту и индивидуальность. Я тщательно подбираю длину, изгиб и объём с учётом формы глаз и ваших пожеланий.",
      "В каждой работе уделяю особое внимание деталям, чтобы результат был не только красивым, но и комфортным на каждый день.",
    ],
    skills: [
      "LED-наращивание ресниц",
      "Ламинирование ресниц",
      "Дизайн ресниц",
    ],
  },

  location: {
    country: "Россия",
    countryCode: "RU",
    city: "Москва",
    metro: "Филатов Луг",
    cityMetro: "Москва · м. Филатов Луг",
    address: "г. Москва, м. Филатов Луг, ул. Малое Понизовье, д. 9",
    mapCardAddress: "м. Филатов Луг, ул. Малое Понизовье, д. 9",
    schedule: "Пн–Сб 09:00–18:00 · Вс — выходной",
    scheduleCapitalized: "Пн–Сб 09:00–18:00 · Вс — выходной",
    timeZone: "Europe/Moscow",
    openTime: "09:00",
    closeTime: "18:00",
    workingDays: [1, 2, 3, 4, 5, 6],
  },

  contacts: {
    phoneDisplay: "+7 (924) 825-21-25",
    phoneHref: "tel:+79248252125",
    channels: [
      {
        type: "whatsapp",
        label: "WhatsApp",
        url: "https://wa.me/79248252125",
      },
      {
        type: "telegram",
        label: "Telegram",
        url: "https://t.me/+79248252125",
      },
    ],
    messenger: null,
  },

  links: {
    bookingUrl: "",
    reviewsUrl: "",
    mapUrl: "https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9C%D0%B0%D0%BB%D0%BE%D0%B5%20%D0%9F%D0%BE%D0%BD%D0%B8%D0%B7%D0%BE%D0%B2%D1%8C%D0%B5%2C%209",
    routeUrl: "https://yandex.ru/maps/?rtext=~%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9C%D0%B0%D0%BB%D0%BE%D0%B5%20%D0%9F%D0%BE%D0%BD%D0%B8%D0%B7%D0%BE%D0%B2%D1%8C%D0%B5%2C%209&rtt=auto",
    mobileMapEmbedUrl: "about:blank",
    desktopMapEmbedUrl: "about:blank",
    yandexMapHrefMatch: "yandex.ru/maps",
  },

  reputation: {
    rating: "5.0",
    reviewCount: String(reviews.length),
  },

  images: {
    logo: "",
    portrait: `${assetBase}/master.webp`,
    about: `${assetBase}/masterpc.webp`,
    favicon: `${publicBase}/favicon-source.png`,
    heroDecoration: `${assetBase}/shablonLED.webp`,
    beforeAfter: [],
    gallery: [
      "galery00001.webp",
      "galery00002.webp",
      "galery00003.webp",
      "galery00004.webp",
      "galery00005.webp",
      "galery00006.webp",
      "galery00007.webp",
      "galery00008.webp",
      "galery00009.webp",
      "galery00010.webp",
    ].map((file, index) => ({
      src: `${assetBase}/portfolio/${file}`,
      alt: `Работа Людмилы Некоры — фото ${index + 1}`,
    })),
  },

  services: {
    groups: [
      {
        id: "lashes",
        label: "Ресницы",
        services: [
          { name: "Снятие наращенных ресниц", price: "500 ₽", time: "", description: "" },
          { name: "Классическое наращивание ресниц", price: "3 000 ₽", time: "", description: "" },
          { name: "Наращивание ресниц 1,5D", price: "3 200 ₽", time: "", description: "" },
          { name: "Наращивание ресниц 2D", price: "3 400 ₽", time: "", description: "" },
          { name: "Наращивание ресниц 2,5D", price: "3 600 ₽", time: "", description: "" },
          { name: "Наращивание ресниц 3D", price: "3 700 ₽", time: "", description: "" },
          { name: "Дизайн ресниц «Рваная линия»", price: "3 700 ₽", time: "", description: "" },
          { name: "Дизайн ресниц «Лучики»", price: "3 700 ₽", time: "", description: "" },
          { name: "Ламинирование ресниц", price: "2 500 ₽", time: "", description: "" },
          { name: "Наращивание ресниц в уголках глаз", price: "2 700 ₽", time: "", description: "" },
          { name: "Снятие ресниц другого мастера с последующим перенаращиванием", price: "300 ₽", time: "", description: "" },
        ],
      },
    ],
  },

  i18n: {
    localLocale: "ru",
    locales: [
      { code: "ru", label: "RU" },
      { code: "en", label: "EN" },
    ],
    translations: {
      en: {
        "Некора Людмила": "Lyudmila Nekora",
        "Людмила": "Lyudmila",
        "Мастер по LED-наращиванию ресниц": "LED eyelash extension specialist",
        "мастер по LED-наращиванию ресниц": "LED eyelash extension specialist",
        "LED-наращивание ресниц": "LED eyelash extensions",
        "Опыт работы — 8 лет": "8 years of experience",
        "О мастере": "About the specialist",
        "Меня зовут Людмила, я мастер по LED-наращиванию ресниц с 8-летним опытом.": "My name is Lyudmila, and I’m an LED eyelash extension specialist with 8 years of experience.",
        "Для меня важно подчеркнуть вашу природную красоту и индивидуальность. Я тщательно подбираю длину, изгиб и объём с учётом формы глаз и ваших пожеланий.": "For me, it is important to highlight your natural beauty and individuality. I carefully select the length, curl and volume based on your eye shape and preferences.",
        "В каждой работе уделяю особое внимание деталям, чтобы результат был не только красивым, но и комфортным на каждый день.": "I pay close attention to every detail so the result is not only beautiful, but also comfortable for everyday wear.",
        "Ламинирование ресниц": "Lash lamination",
        "Дизайн ресниц": "Lash design",
        "Москва": "Moscow",
        "Филатов Луг": "Filatov Lug",
        "Москва · м. Филатов Луг": "Moscow · Filatov Lug metro",
        "г. Москва, м. Филатов Луг, ул. Малое Понизовье, д. 9": "Moscow, Filatov Lug metro, 9 Maloye Ponizovye St.",
        "м. Филатов Луг, ул. Малое Понизовье, д. 9": "Filatov Lug metro, 9 Maloye Ponizovye St.",
        "Пн–Сб 09:00–18:00 · Вс — выходной": "Mon–Sat 09:00–18:00 · Sun — closed",
        "Закрыто · сегодня выходной": "Closed · day off",
        "Ресницы": "Eyelashes",
        "Снятие наращенных ресниц": "Eyelash extension removal",
        "Классическое наращивание ресниц": "Classic eyelash extensions",
        "Наращивание ресниц 1,5D": "1.5D eyelash extensions",
        "Наращивание ресниц 2D": "2D eyelash extensions",
        "Наращивание ресниц 2,5D": "2.5D eyelash extensions",
        "Наращивание ресниц 3D": "3D eyelash extensions",
        "Дизайн ресниц «Рваная линия»": "Lash design “Ragged Line”",
        "Дизайн ресниц «Лучики»": "Lash design “Rays”",
        "Наращивание ресниц в уголках глаз": "Outer-corner eyelash extensions",
        "Снятие ресниц другого мастера с последующим перенаращиванием": "Removal of another technician’s lashes with subsequent re-extension",
      },
    },
  },

  reviews: reviews.slice(0, 9),
  promotions: [],
  amenities: [],

  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ichaey.github.io/Nekora/",
    title: "Людмила Некора — LED-наращивание ресниц в Москве",
    description: "Мастер по LED-наращиванию ресниц Людмила Некора. Москва, метро Филатов Луг.",
    keywords: ["LED-наращивание ресниц", "наращивание ресниц", "Москва", "Филатов Луг"],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
