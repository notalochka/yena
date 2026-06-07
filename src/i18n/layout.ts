import type { UiLanguage } from "./language";

export type HeaderCopy = {
  navLabel: string;
  burgerOpen: string;
  burgerClose: string;
  ctaEstimate: string;
  menu: {
    home: string;
    about: string;
    services: string;
    contacts: string;
  };
};

export type FooterCopy = {
  brandLine: string;
  servicesTitle: string;
  services: string[];
  contactsTitle: string;
  contacts: {
    company: string;
    ownerLine: string;
    addressLine1: string;
    addressLine2: string;
    country: string;
    email: string;
  };
  rightsReserved: string;
};

export type LayoutCopy = {
  header: HeaderCopy;
  footer: FooterCopy;
};

export const layoutCopyByLang: Record<UiLanguage, LayoutCopy> = {
  UA: {
    header: {
      navLabel: "Головне меню",
      burgerOpen: "Відкрити меню",
      burgerClose: "Закрити меню",
      ctaEstimate: "Замовити кошторис",
      menu: {
        home: "Головна",
        about: "Про нас",
        services: "Послуги",
        contacts: "Контакти",
      },
    },
    footer: {
      brandLine: "Бюро перекладів Yena Translations",
      servicesTitle: "Послуги",
      services: [
        "Усний переклад",
        "Віддалений синхронний переклад у воєнний час",
        "Переклад офіційних документів",
        "Письмовий переклад",
      ],
      contactsTitle: "Контакти",
      contacts: {
        company: "Yena Translations",
        ownerLine: "Власник Наталія Єна",
        addressLine1: "Дармштадтер Ландштрассе 199",
        addressLine2: "60598 Франкфурт-на-Майні",
        country: "Німеччина",
        email: "contact@yena.de",
      },
      rightsReserved: "Усі права захищено",
    },
  },
  RU: {
    header: {
      navLabel: "Главное меню",
      burgerOpen: "Открыть меню",
      burgerClose: "Закрыть меню",
      ctaEstimate: "Заказать смету",
      menu: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        contacts: "Контакты",
      },
    },
    footer: {
      brandLine: "Бюро переводов Yena Translations",
      servicesTitle: "Услуги",
      services: [
        "Устный перевод",
        "Удалённый синхронный перевод в военное время",
        "Перевод официальных документов",
        "Письменный перевод",
      ],
      contactsTitle: "Контакты",
      contacts: {
        company: "Yena Translations",
        ownerLine: "Владелец Наталия Ена",
        addressLine1: "Darmstädter Landstraße 199",
        addressLine2: "60598 Frankfurt am Main",
        country: "Германия",
        email: "contact@yena.de",
      },
      rightsReserved: "Все права защищены",
    },
  },
  EN: {
    header: {
      navLabel: "Main menu",
      burgerOpen: "Open menu",
      burgerClose: "Close menu",
      ctaEstimate: "Request an estimate",
      menu: {
        home: "Home",
        about: "About",
        services: "Services",
        contacts: "Contact",
      },
    },
    footer: {
      brandLine: "Translation agency Yena Translations",
      servicesTitle: "Services",
      services: [
        "Interpreting",
        "Remote simultaneous interpreting (wartime)",
        "Certified translation of official documents",
        "Written translation",
      ],
      contactsTitle: "Contact",
      contacts: {
        company: "Yena Translations",
        ownerLine: "Owner: Nataliia Yena",
        addressLine1: "Darmstädter Landstraße 199",
        addressLine2: "60598 Frankfurt am Main",
        country: "Germany",
        email: "contact@yena.de",
      },
      rightsReserved: "All rights reserved",
    },
  },
  DE: {
    header: {
      navLabel: "Hauptmenü",
      burgerOpen: "Menü öffnen",
      burgerClose: "Menü schließen",
      ctaEstimate: "Kostenvoranschlag anfragen",
      menu: {
        home: "Startseite",
        about: "Über uns",
        services: "Leistungen",
        contacts: "Kontakt",
      },
    },
    footer: {
      brandLine: "Übersetzungsbüro Yena Translations",
      servicesTitle: "Leistungen",
      services: [
        "Dolmetschen",
        "Remote-Simultandolmetschen (Kriegszeit)",
        "Übersetzung offizieller Dokumente",
        "Schriftliche Übersetzung",
      ],
      contactsTitle: "Kontakt",
      contacts: {
        company: "Yena Translations",
        ownerLine: "Inhaberin: Nataliia Yena",
        addressLine1: "Darmstädter Landstraße 199",
        addressLine2: "60598 Frankfurt am Main",
        country: "Deutschland",
        email: "contact@yena.de",
      },
      rightsReserved: "Alle Rechte vorbehalten",
    },
  },
};

