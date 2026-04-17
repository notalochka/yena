import type { UiLanguage } from "./language";

export type SeoPageKey =
  | "home"
  | "about"
  | "services"
  | "contacts"
  | "interpreting"
  | "writtenTranslation"
  | "officialDocuments"
  | "notFound";

const PATHS: Record<SeoPageKey, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  contacts: "/contacts",
  interpreting: "/interpreting",
  writtenTranslation: "/written-translation",
  officialDocuments: "/official-documents",
  notFound: "/404",
};

type SeoEntry = { title: string; description: string };

const COPY: Record<SeoPageKey, Record<UiLanguage, SeoEntry>> = {
  home: {
    UA: {
      title: "Yena Translations | Професійний переклад та конференц-переклад",
      description:
        "Yena Translations: усний і письмовий переклад, офіційні документи, локалізація. Досвід, ISO та індивідуальний підхід.",
    },
    RU: {
      title: "Yena Translations | Профессиональный перевод и конференц-перевод",
      description:
        "Yena Translations: устный и письменный перевод, официальные документы, локализация. Опыт и индивидуальный подход.",
    },
    EN: {
      title: "Yena Translations | Professional interpreting and translation",
      description:
        "Yena Translations: conference interpreting, written translation, certified documents, and localization for business and institutions.",
    },
    DE: {
      title: "Yena Translations | Professionelles Dolmetschen und Übersetzen",
      description:
        "Yena Translations: Konferenzdolmetschen, schriftliche Übersetzung, beglaubigte Urkunden und Lokalisierung.",
    },
  },
  about: {
    UA: {
      title: "Про нас | Yena Translations",
      description:
        "Дізнайтеся про досвід Yena Translations: освіта, спеціалізація, міжнародні проєкти та підхід до перекладу.",
    },
    RU: {
      title: "О нас | Yena Translations",
      description:
        "Опыт и специализация Yena Translations: образование, международные проекты и принципы работы.",
    },
    EN: {
      title: "About us | Yena Translations",
      description:
        "Learn about Yena Translations: qualifications, specialisations, international experience, and how we work with clients.",
    },
    DE: {
      title: "Über uns | Yena Translations",
      description:
        "Erfahren Sie mehr über Yena Translations: Qualifikationen, Schwerpunkte und internationale Erfahrung.",
    },
  },
  services: {
    UA: {
      title: "Послуги | Yena Translations",
      description:
        "Усний і письмовий переклад, офіційні документи, локалізація сайтів та супровід заходів — огляд послуг Yena Translations.",
    },
    RU: {
      title: "Услуги | Yena Translations",
      description:
        "Устный и письменный перевод, официальные документы, локализация и сопровождение мероприятий — услуги Yena Translations.",
    },
    EN: {
      title: "Services | Yena Translations",
      description:
        "Interpreting, written translation, certified documents, website localisation, and event support — Yena Translations services.",
    },
    DE: {
      title: "Leistungen | Yena Translations",
      description:
        "Dolmetschen, Übersetzung, beglaubigte Urkunden, Website-Lokalisierung und Veranstaltungsservice bei Yena Translations.",
    },
  },
  contacts: {
    UA: {
      title: "Контакти | Yena Translations",
      description:
        "Зв’яжіться з Yena Translations: контакти для замовлення перекладу та консультацій у Франкфурті та онлайн.",
    },
    RU: {
      title: "Контакты | Yena Translations",
      description:
        "Свяжитесь с Yena Translations: заказ перевода и консультаций во Франкфурте и онлайн.",
    },
    EN: {
      title: "Contacts | Yena Translations",
      description:
        "Contact Yena Translations for interpreting and translation requests, quotes, and consultations in Frankfurt and online.",
    },
    DE: {
      title: "Kontakt | Yena Translations",
      description:
        "Kontaktieren Sie Yena Translations für Dolmetschen, Übersetzungen und Beratung in Frankfurt und online.",
    },
  },
  interpreting: {
    UA: {
      title: "Усний переклад | Yena Translations",
      description:
        "Конференц-переклад, синхрон і послідовний переклад, RSI та переклад на заходах — Yena Translations.",
    },
    RU: {
      title: "Устный перевод | Yena Translations",
      description:
        "Конференц-перевод, синхронный и последовательный перевод, RSI и сопровождение мероприятий.",
    },
    EN: {
      title: "Interpreting | Yena Translations",
      description:
        "Conference interpreting, simultaneous and consecutive interpreting, RSI, and on-site support — Yena Translations.",
    },
    DE: {
      title: "Dolmetschen | Yena Translations",
      description:
        "Konferenzdolmetschen, Simultan- und Konsekutivdolmetschen, RSI und Dolmetschen vor Ort.",
    },
  },
  writtenTranslation: {
    UA: {
      title: "Письмовий переклад | Yena Translations",
      description:
        "Професійний письмовий переклад технічних, юридичних і маркетингових текстів, локалізація та редагування.",
    },
    RU: {
      title: "Письменный перевод | Yena Translations",
      description:
        "Профессиональный письменный перевод технических, юридических и маркетинговых текстов, локализация и редактура.",
    },
    EN: {
      title: "Written translation | Yena Translations",
      description:
        "Professional written translation for technical, legal, and marketing content, localisation, and editing.",
    },
    DE: {
      title: "Schriftliche Übersetzung | Yena Translations",
      description:
        "Professionelle schriftliche Übersetzung für Technik, Recht und Marketing, Lokalisierung und Redaktion.",
    },
  },
  officialDocuments: {
    UA: {
      title: "Переклад офіційних документів | Yena Translations",
      description:
        "Засвідчені переклади офіційних документів, апостиль, нотаріальне посвідчення — присяжний перекладач Yena Translations.",
    },
    RU: {
      title: "Перевод официальных документов | Yena Translations",
      description:
        "Заверенные переводы официальных документов, апостиль и нотариальное заверение — присяжный переводчик.",
    },
    EN: {
      title: "Certified translation of official documents | Yena Translations",
      description:
        "Certified translations of civil registry, education, and legal documents, apostille support, and sworn translator services.",
    },
    DE: {
      title: "Beglaubigte Übersetzung von Urkunden | Yena Translations",
      description:
        "Beglaubigte Übersetzungen von Standes-, Bildungs- und Behördenurkunden, Apostille und vereidigte Übersetzung.",
    },
  },
  notFound: {
    UA: {
      title: "Сторінку не знайдено | Yena Translations",
      description:
        "Сторінку не знайдено. Поверніться на головну Yena Translations або скористайтеся меню.",
    },
    RU: {
      title: "Страница не найдена | Yena Translations",
      description:
        "Страница не найдена. Вернитесь на главную Yena Translations или воспользуйтесь меню.",
    },
    EN: {
      title: "Page not found | Yena Translations",
      description:
        "Page not found. Return to the Yena Translations home page or use the site menu.",
    },
    DE: {
      title: "Seite nicht gefunden | Yena Translations",
      description:
        "Seite nicht gefunden. Zurück zur Startseite von Yena Translations oder Navigation nutzen.",
    },
  },
};

export function getSeo(
  page: SeoPageKey,
  language: UiLanguage,
): SeoEntry & { path: string } {
  const entry = COPY[page][language];
  return { ...entry, path: PATHS[page] };
}
