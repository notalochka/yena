import type { UiLanguage } from "./language";

export type OfficialDocumentTypeItem = {
  icon: string;
  label: string;
};

export type OfficialDocumentsCopy = {
  heroImageAlt: string;
  heroBreadcrumbServices: string;
  heroBreadcrumbAriaLabel: string;
  ctaOrder: string;
  ctaMore: string;
  heroTitle: string;
  introParagraphs: string[];
  docTypesTitle: string;
  documentTypes: OfficialDocumentTypeItem[];
  silabotLead: string;
  silabotLinkText: string;
  silabotAfterLink: string;
  silabotSecondParagraph: string;
  accordionAriaLabel: string;
  topicsBadge: string;
  topicsTitle: string;
};

export const officialDocumentsCopyByLang: Record<
  UiLanguage,
  OfficialDocumentsCopy
> = {
  UA: {
    heroImageAlt: "Переклад офіційних документів",
    heroBreadcrumbServices: "Послуги",
    heroBreadcrumbAriaLabel: "Переклад офіційних документів",
    ctaOrder: "Замовити переклад",
    ctaMore: "Дізнатися більше",
    heroTitle: "Переклад офіційних документів",
    introParagraphs: [
      "Я є присяжним перекладачем німецької, української та російської мови. Крім того, на підставі мого британського диплому з перекладу для державних та муніципальних служб я вповноважена на виконання засвідчених перекладів на англійську мову та з неї на українську або російську. Я виконую переклади відповідно до стандарту ISO 9: 1995 (E) або Постанови Кабінету міністрів України від 27 січня 2010 р. № 55. Крім того, я маю право посвідчувати їх точність та вичерпність. Йдеться як про переклади на німецьку мову, призначені для німецьких державних установ, так і про переклади на українську, російську та англійську для державних установ за кордоном.",
      "Я пропоную своїм клієнтам 10-річний сервіс. Це означає, що одного разу перекладений документ ви можете повторно замовляти протягом 10 років лише з оплатою виготовлення, засвідчення та накладних витрат.",
      "У засвідчених перекладах російською та українською написання власних імен кирилицею може за бажанням замовника здійснюватися не тільки відповідно до вищезазначеного стандарту ISO або Постанови КМУ, але й згідно з вимогами транслітерації інших країн.",
      "У засвідчених перекладах німецькою та англійською, паралельно з транслітерацією імен з кирилиці латинським алфавітом відповідно до стандарту ISO або Постанови Кабінету Міністрів України, може наводитися написання імен згідно з закордонним паспортом особи, якій видано цей офіційний документ. Для цього мені потрібно підтвердження відповідного написання імен на підставі офіційного посвідчення особи з фотографією.",
      "Зрештою, за бажанням замовника на засвідчений переклад може бути проставлений апостиль. Це, зокрема, необхідно, якщо переклад документа виданого в Німеччині призначений для використання в іншій країні.",
    ],
    docTypesTitle: "Основні види офіційних документів, які я перекладаю:",
    documentTypes: [
      {
        icon: "/official_icon1.png",
        label:
          "РАЦС (свідоцтво про народження, шлюб, зміну прізвища, тощо)",
      },
      {
        icon: "/official_icon2.png",
        label:
          "Муніципальні сервісні центри (свідоцтво про реєстрацію, посвідчення водія)",
      },
      {
        icon: "/official_icon3.png",
        label: "Суди, органи юстиції (рішення про розірвання шлюбу)",
      },
      {
        icon: "/official_icon4.png",
        label:
          "Документи про освіту (дипломи, атестати, кваліфікаційні сертифікати, тощо)",
      },
      {
        icon: "/official_icon5.png",
        label:
          "Професійні посвідчення (трудові книжки, характеристики з роботи)",
      },
      {
        icon: "/official_icon6.png",
        label:
          "Медицина (лікарські довідки, епікризи, ветеринарні довідки)",
      },
    ],
    silabotLead:
      "Для перекладу офіційних документів ми маємо окремий сайт, Силабот:",
    silabotLinkText: "перейти за посиланням",
    silabotAfterLink: ".",
    silabotSecondParagraph:
      "Ми його спеціально створили для перекладу офіційних документів, які потребують засвідчення.",
    accordionAriaLabel:
      "Основні види офіційних документів, які я перекладаю",
    topicsBadge: "ТИПИ ПОСЛУГ",
    topicsTitle: "Послуги",
  },
  RU: {
    heroImageAlt: "Перевод официальных документов",
    heroBreadcrumbServices: "Услуги",
    heroBreadcrumbAriaLabel: "Перевод официальных документов",
    ctaOrder: "Заказать перевод",
    ctaMore: "Узнать больше",
    heroTitle: "Перевод официальных документов",
    introParagraphs: [
      "Я присяжный переводчик немецкого, украинского и русского языков. Кроме того, на основании моего британского диплома по переводу для государственных и муниципальных служб я уполномочена выполнять заверенные переводы на английский язык и с английского на украинский или русский. Я выполняю переводы в соответствии со стандартом ISO 9:1995 (E) или постановлением Кабинета министров Украины от 27 января 2010 г. № 55. Кроме того, я имею право заверять их точность и полноту. Речь идёт как о переводах на немецкий язык для немецких государственных учреждений, так и о переводах на украинский, русский и английский для государственных учреждений за рубежом.",
      "Я предлагаю клиентам 10-летний сервис: один раз переведённый документ можно повторно заказывать в течение 10 лет с оплатой только изготовления, заверения и накладных расходов.",
      "В заверенных переводах на русском и украинском написание имён собственных кириллицей по желанию заказчика может выполняться не только в соответствии с указанным стандартом ISO или постановлением КМУ, но и согласно требованиям транслитерации других стран.",
      "В заверенных переводах на немецком и английском, параллельно с транслитерацией имён с кириллицы латиницей по стандарту ISO или постановлению Кабинета министров Украины, в переведённом документе может указываться написание имён согласно загранпаспорту лица, которому выдан официальный документ. Для этого мне нужно подтверждение написания имён на основании официального удостоверения личности с фотографией.",
      "По желанию заказчика на заверенный перевод может быть проставлен апостиль. Это, в частности, необходимо, если перевод документа, выданного в Германии, предназначен для использования в другой стране.",
    ],
    docTypesTitle: "Основные виды официальных документов, которые я перевожу:",
    documentTypes: [
      {
        icon: "/official_icon1.png",
        label:
          "ЗАГС (свидетельство о рождении, браке, смене фамилии и т. д.)",
      },
      {
        icon: "/official_icon2.png",
        label:
          "Муниципальные сервисные центры (свидетельство о регистрации, водительское удостоверение)",
      },
      {
        icon: "/official_icon3.png",
        label:
          "Суды, органы юстиции (решение о расторжении брака)",
      },
      {
        icon: "/official_icon4.png",
        label:
          "Документы об образовании (дипломы, аттестаты, квалификационные сертификаты и т. д.)",
      },
      {
        icon: "/official_icon5.png",
        label:
          "Профессиональные удостоверения (трудовые книжки, характеристики с работы)",
      },
      {
        icon: "/official_icon6.png",
        label:
          "Медицина (медицинские справки, эпикризы, ветеринарные справки)",
      },
    ],
    silabotLead:
      "Для перевода официальных документов у нас есть отдельный сайт Silabot:",
    silabotLinkText: "перейти по ссылке",
    silabotAfterLink: ".",
    silabotSecondParagraph:
      "Мы создали его специально для перевода официальных документов, требующих заверения.",
    accordionAriaLabel:
      "Основные виды официальных документов, которые я перевожу",
    topicsBadge: "ТИПЫ УСЛУГ",
    topicsTitle: "Услуги",
  },
  EN: {
    heroImageAlt: "Certified translation of official documents",
    heroBreadcrumbServices: "Services",
    heroBreadcrumbAriaLabel: "Certified translation of official documents",
    ctaOrder: "Request a translation",
    ctaMore: "Learn more",
    heroTitle: "Certified translation of official documents",
    introParagraphs: [
      "I am a sworn translator for German, Ukrainian, and Russian. On the basis of my UK translation qualification for public services, I am also authorised to provide certified translations into English and from English into Ukrainian or Russian. I work in accordance with ISO 9:1995 (E) or Cabinet of Ministers of Ukraine Resolution No. 55 of 27 January 2010. I may also certify the accuracy and completeness of translations — both into German for German authorities and into Ukrainian, Russian, and English for authorities abroad.",
      "I offer clients a ten-year service: once a document has been translated, you can reorder it within ten years paying only for production, certification, and overheads.",
      "In certified Russian and Ukrainian translations, spelling of proper names in Cyrillic may, at the client’s request, follow not only the ISO standard or the Cabinet of Ministers rules but also other countries’ transliteration requirements.",
      "In certified German and English translations, alongside transliteration from Cyrillic to Latin per ISO or Cabinet of Ministers rules, the translated document may show name spellings as in the person’s foreign passport. I need confirmation of the spelling on the basis of an official photo ID.",
      "If required, an apostille can be affixed to the certified translation — for example when a translation of a document issued in Germany will be used in another country.",
    ],
    docTypesTitle: "Main types of official documents I translate:",
    documentTypes: [
      {
        icon: "/official_icon1.png",
        label:
          "Civil registry (birth, marriage, name change certificates, etc.)",
      },
      {
        icon: "/official_icon2.png",
        label:
          "Municipal service centres (registration certificates, driving licence)",
      },
      {
        icon: "/official_icon3.png",
        label: "Courts and justice authorities (divorce decisions)",
      },
      {
        icon: "/official_icon4.png",
        label:
          "Education documents (diplomas, certificates, qualification certificates, etc.)",
      },
      {
        icon: "/official_icon5.png",
        label:
          "Professional credentials (employment records, employer references)",
      },
      {
        icon: "/official_icon6.png",
        label:
          "Healthcare (medical certificates, discharge summaries, veterinary certificates)",
      },
    ],
    silabotLead:
      "For certified translations of official documents we have a separate website, Silabot:",
    silabotLinkText: "visit the website",
    silabotAfterLink: ".",
    silabotSecondParagraph:
      "We created it specifically for official documents that require certification.",
    accordionAriaLabel: "Main types of official documents I translate",
    topicsBadge: "TYPES OF SERVICES",
    topicsTitle: "Services",
  },
  DE: {
    heroImageAlt: "Beglaubigte Übersetzung von Urkunden",
    heroBreadcrumbServices: "Leistungen",
    heroBreadcrumbAriaLabel: "Beglaubigte Übersetzung von Urkunden",
    ctaOrder: "Übersetzung anfragen",
    ctaMore: "Mehr erfahren",
    heroTitle: "Beglaubigte Übersetzung von Urkunden",
    introParagraphs: [
      "Ich bin als Dolmetscherin und Übersetzerin für Deutsch, Ukrainisch und Russisch vereidigt. Aufgrund meines britischen Übersetzungsdiploms für Behörden bin ich zudem ermächtigt, beglaubigte Übersetzungen ins Englische und aus dem Englischen ins Ukrainische oder Russische zu erstellen. Ich arbeite nach ISO 9:1995 (E) bzw. dem Beschluss des Ministerrats der Ukraine vom 27. Januar 2010 Nr. 55 und darf die Richtigkeit und Vollständigkeit beglaubigen — sowohl ins Deutsche für deutsche Behörden als auch ins Ukrainische, Russische und Englische für Behörden im Ausland.",
      "Ich biete einen Zehnjahres-Service: Ein einmal übersetztes Dokument kann innerhalb von zehn Jahren erneut bestellt werden; es fallen dann nur Herstellung, Beglaubigung und Nebenkosten an.",
      "In beglaubigten russischen und ukrainischen Übersetzungen kann die Schreibung eigener Namen in kyrillischer Schrift auf Wunsch nicht nur nach ISO oder dem Beschluss des Ministerrats, sondern auch nach Transliterationsregeln anderer Länder erfolgen.",
      "In beglaubigten deutschen und englischen Übersetzungen kann neben der Transliteration vom Kyrillischen ins Lateinische nach ISO bzw. Ministerratsbeschluss im übersetzten Dokument die Schreibweise der Namen wie im Reisepass der Person stehen. Dazu benötige ich eine Bestätigung anhand eines amtlichen Lichtbildausweises.",
      "Auf Wunsch kann eine Apostille auf die beglaubigte Übersetzung gesetzt werden — etwa wenn eine Übersetzung einer in Deutschland ausgestellten Urkunde in einem anderen Land verwendet werden soll.",
    ],
    docTypesTitle: "Die wichtigsten Arten von Urkunden, die ich übersetze:",
    documentTypes: [
      {
        icon: "/official_icon1.png",
        label:
          "Standesamt (Geburts-, Heirats-, Namensänderungsurkunden u. a.)",
      },
      {
        icon: "/official_icon2.png",
        label:
          "Bürgerämter / Servicezentren (Meldebescheinigung, Führerschein)",
      },
      {
        icon: "/official_icon3.png",
        label: "Gerichte, Justiz (Scheidungsbeschlüsse)",
      },
      {
        icon: "/official_icon4.png",
        label:
          "Bildungsnachweise (Diplome, Zeugnisse, Qualifikationszertifikate u. a.)",
      },
      {
        icon: "/official_icon5.png",
        label:
          "Berufliche Nachweise (Arbeitsheft, Arbeitszeugnisse)",
      },
      {
        icon: "/official_icon6.png",
        label:
          "Medizin (ärztliche Bescheinigungen, Epikrisen, Tierarztbescheinigungen)",
      },
    ],
    silabotLead:
      "Für beglaubigte Übersetzungen von Urkunden betreiben wir eine eigene Website, Silabot:",
    silabotLinkText: "Zur Website",
    silabotAfterLink: ".",
    silabotSecondParagraph:
      "Wir haben sie speziell für Urkunden eingerichtet, die eine Beglaubigung erfordern.",
    accordionAriaLabel: "Arten von Urkunden, die ich übersetze",
    topicsBadge: "TYPEN DER LEISTUNGEN",
    topicsTitle: "Leistungen",
  },
};
