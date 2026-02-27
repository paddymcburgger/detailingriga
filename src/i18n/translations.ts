// src/i18n/translations.ts

export const languages = {
  ru: 'Русский',
  en: 'English',
};

export const defaultLang = 'ru';

export const translations = {
  ru: {
    // Navigation
    nav: {
      services: 'услуги',
      prices: 'цены',
      about: 'о нас',
      contact: 'контакты',
      menu: 'меню',
    },
    
    // Hero
    hero: {
      booking: 'резервация',
      learnMore: 'об услуге',
    },
    
    // Services
    services: {
      title: 'Наши услуги',
      glassPolishing: 'Полировка стёкол',
      ppf: 'Защитная плёнка PPF',
      ceramic: 'Керамическое покрытие',
      chipRemoval: 'Удаление сколов',
      headlights: 'Полировка фар',
      waterStone: 'Удаление водного камня',
      boatUpholstery: 'Перетяжка мебели для яхт',
      boatVinyl: 'Оклейка катеров',
      boatGlass: 'Полировка стёкол катера',
      boatPpf: 'Защитная плёнка для катера',
      boatGraphics: 'Графика и надписи',
      signage: 'Вывески',
      windowGraphics: 'Оклейка витрин',
    },
    
    // Common
    common: {
      booking: 'резервация',
      details: 'об услуге',
      phone: 'Телефон',
      email: 'Email',
      address: 'Адрес',
      workingHours: 'Время работы',
    },
    
    // SEO
    seo: {
      siteTitle: 'Детейлинг в Риге',
      siteDescription: 'Профессиональный детейлинг автомобилей в Риге. Полировка стёкол, керамическое покрытие, защитные плёнки PPF.',
      homeTitle: 'Детейлинг Рига | Профессиональный уход за автомобилем',
      servicesTitle: 'Услуги детейлинга в Риге',
    },
    
    // Footer
    footer: {
      rights: 'Все права защищены',
      privacy: 'Политика конфиденциальности',
    },
  },
  
  en: {
    // Navigation
    nav: {
      services: 'services',
      prices: 'prices',
      about: 'about',
      contact: 'contact',
      menu: 'menu',
    },
    
    // Hero
    hero: {
      booking: 'book now',
      learnMore: 'learn more',
    },
    
    // Services
    services: {
      title: 'Our Services',
      glassPolishing: 'Glass Polishing',
      ppf: 'Paint Protection Film',
      ceramic: 'Ceramic Coating',
      chipRemoval: 'Chip Removal',
      headlights: 'Headlight Restoration',
      waterStone: 'Water Spot Removal',
    },
    
    // Common
    common: {
      booking: 'book now',
      details: 'learn more',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      workingHours: 'Working Hours',
    },
    
    // SEO
    seo: {
      siteTitle: 'Car Detailing in Riga',
      siteDescription: 'Professional car detailing in Riga. Glass polishing, ceramic coating, PPF protection films.',
      homeTitle: 'Car Detailing Riga | Professional Auto Care',
      servicesTitle: 'Detailing Services in Riga',
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
    },
  },
} as const;

// Helper function to get translations
export function getTranslations(lang: keyof typeof translations) {
  return translations[lang] || translations[defaultLang];
}

// Helper to get language from URL
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as keyof typeof translations;
  }
  return defaultLang;
}

// Helper to get translated path
export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
