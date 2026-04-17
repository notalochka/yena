import type { UiLanguage } from "./language";

export type WrittenCalculatorCopy = {
  stepperAriaLabel: string;
  steps: string[];
  nav: {
    prev: string;
    next: string;
    quote: string;
  };
  step1: {
    sectionLanguage: string;
    fromLabel: string;
    toLabel: string;
    chooseLanguage: string;
    languages: { uk: string; de: string; en: string; ru: string };
    sectionVolume: string;
    complexityLabel: string;
    complexityPlaceholder: string;
    complexityOptions: {
      general: string;
      business: string;
      technical: string;
      medical: string;
      legal: string;
    };
    optionsLabel: string;
    volumeAria: string;
    words: string;
    symbols: string;
    pages: string;
    goalLabel: string;
    goalPlaceholder: string;
    goalOptions: {
      personal: string;
      business: string;
      website: string;
      official: string;
    };
    priceAria: string;
    priceLabel: string;
    next: string;
  };
  step2: {
    title: string;
    toggleText: string;
  };
  step3: {
    titleFiles: string;
    uploadText: string;
    filesAria: string;
    remove: string;
    titleFormatting: string;
    addFormatting: string;
    formattingCostAria: string;
    formattingCostLabel: string;
  };
  step4: {
    title: string;
    selectAria: string;
    placeholder: string;
    deliveryDays: {
      d1: string;
      d2: string;
      d3: string;
      d5: string;
    };
    deliveryCostAria: string;
    deliveryCostLabel: string;
  };
  step5: {
    recalculation: string;
    editingCost: string;
    formattingCost: string;
    deliveryCost: string;
    estimatedNoVat: string;
    apostilleTranslation: string;
    apostilleDocument: string;
    certification: string;
    officeFee: string;
    orderTotalNoVat: string;
    shippingPackaging: string;
    vat: string;
    grandEstimatedWithVat: string;
    grandTotalAria: string;
    grandTotalLabel: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
  };
};

export const writtenTranslationCalculatorCopyByLang: Record<
  UiLanguage,
  WrittenCalculatorCopy
> = {
  UA: {
    stepperAriaLabel: "Кроки калькулятора",
    steps: ["Сторінка 1", "Сторінка 2", "Сторінка 3", "Сторінка 4", "Фініш"],
    nav: {
      prev: "Попередня сторінка",
      next: "Наступна сторінка",
      quote: "Запит цінової пропозиції",
    },
    step1: {
      sectionLanguage: "Мова",
      fromLabel: "Перекласти з",
      toLabel: "Перекласти на",
      chooseLanguage: "Оберіть мову",
      languages: {
        uk: "Українська",
        de: "Німецька",
        en: "Англійська",
        ru: "Російська",
      },
      sectionVolume: "Об’єм",
      complexityLabel: "Рівень складності тексту",
      complexityPlaceholder: "Оберіть складність",
      complexityOptions: {
        general: "Загальна тематика",
        business: "Бізнес / переговори",
        technical: "Технічна тематика",
        medical: "Медична тематика",
        legal: "Юридична тематика",
      },
      optionsLabel: "Варіанти",
      volumeAria: "Варіанти об’єму",
      words: "Слова",
      symbols: "Символи",
      pages: "Сторінки",
      goalLabel: "Мета перекладу",
      goalPlaceholder: "Оберіть мету перекладу",
      goalOptions: {
        personal: "Особисте використання",
        business: "Бізнес",
        website: "Сайт / маркетинг",
        official: "Офіційні документи",
      },
      priceAria: "Ціна",
      priceLabel: "Ціна",
      next: "Наступна сторінка",
    },
    step2: {
      title: "Редагування або виправлення тексту",
      toggleText: "Редагування або виправлення тексту",
    },
    step3: {
      titleFiles: "Файли",
      uploadText: "Перетягнути або вибір файлів",
      filesAria: "Додані файли",
      remove: "Прибрати",
      titleFormatting: "Форматування",
      addFormatting: "Додати форматування",
      formattingCostAria: "Форматування витрат",
      formattingCostLabel: "Форматування витрат",
    },
    step4: {
      title: "Термін доставки (робочі дні)",
      selectAria: "Час доставки",
      placeholder: "Час доставки",
      deliveryDays: {
        d1: "1 робочий день",
        d2: "2 робочі дні",
        d3: "3 робочі дні",
        d5: "5 робочих днів",
      },
      deliveryCostAria: "Вартість доставки",
      deliveryCostLabel: "Вартість доставки",
    },
    step5: {
      recalculation: "Перерахунок вартості",
      editingCost: "Вартість редагування або виправлення тексту",
      formattingCost: "Форматування витрат",
      deliveryCost: "Вартість доставки",
      estimatedNoVat: "Оцінена вартість (без ПДВ)",
      apostilleTranslation: "Поставити апостиль на перекладі",
      apostilleDocument: "Поставити апостиль на документі",
      certification: "Засвідчення",
      officeFee: "Канцелярський збір",
      orderTotalNoVat: "Загальна вартість замовлення (без ПДВ)",
      shippingPackaging: "Доставка та упаковка",
      vat: "ПДВ",
      grandEstimatedWithVat: "Загальна оцінена вартість замовлення (з ПДВ)",
      grandTotalAria: "Всього",
      grandTotalLabel: "Всього",
      firstName: "Ім’я",
      lastName: "Прізвище",
      phone: "Номер телефону",
      email: "Адреса електронної пошти",
      address: "Адреса",
    },
  },
  RU: {
    stepperAriaLabel: "Шаги калькулятора",
    steps: ["Страница 1", "Страница 2", "Страница 3", "Страница 4", "Финиш"],
    nav: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
      quote: "Запрос ценового предложения",
    },
    step1: {
      sectionLanguage: "Язык",
      fromLabel: "Перевести с",
      toLabel: "Перевести на",
      chooseLanguage: "Выберите язык",
      languages: {
        uk: "Украинский",
        de: "Немецкий",
        en: "Английский",
        ru: "Русский",
      },
      sectionVolume: "Объём",
      complexityLabel: "Уровень сложности текста",
      complexityPlaceholder: "Выберите сложность",
      complexityOptions: {
        general: "Общая тематика",
        business: "Бизнес / переговоры",
        technical: "Техническая тематика",
        medical: "Медицинская тематика",
        legal: "Юридическая тематика",
      },
      optionsLabel: "Варианты",
      volumeAria: "Варианты объёма",
      words: "Слова",
      symbols: "Знаки",
      pages: "Страницы",
      goalLabel: "Цель перевода",
      goalPlaceholder: "Выберите цель перевода",
      goalOptions: {
        personal: "Личное использование",
        business: "Бизнес",
        website: "Сайт / маркетинг",
        official: "Официальные документы",
      },
      priceAria: "Цена",
      priceLabel: "Цена",
      next: "Следующая страница",
    },
    step2: {
      title: "Редактирование или исправление текста",
      toggleText: "Редактирование или исправление текста",
    },
    step3: {
      titleFiles: "Файлы",
      uploadText: "Перетащите файлы или выберите",
      filesAria: "Добавленные файлы",
      remove: "Удалить",
      titleFormatting: "Форматирование",
      addFormatting: "Добавить форматирование",
      formattingCostAria: "Стоимость форматирования",
      formattingCostLabel: "Стоимость форматирования",
    },
    step4: {
      title: "Срок доставки (рабочие дни)",
      selectAria: "Срок доставки",
      placeholder: "Срок доставки",
      deliveryDays: {
        d1: "1 рабочий день",
        d2: "2 рабочих дня",
        d3: "3 рабочих дня",
        d5: "5 рабочих дней",
      },
      deliveryCostAria: "Стоимость доставки",
      deliveryCostLabel: "Стоимость доставки",
    },
    step5: {
      recalculation: "Пересчёт стоимости",
      editingCost: "Стоимость редактирования или исправления текста",
      formattingCost: "Стоимость форматирования",
      deliveryCost: "Стоимость доставки",
      estimatedNoVat: "Оценочная стоимость (без НДС)",
      apostilleTranslation: "Апостиль на переводе",
      apostilleDocument: "Апостиль на документе",
      certification: "Засвидетельствование",
      officeFee: "Канцелярский сбор",
      orderTotalNoVat: "Общая стоимость заказа (без НДС)",
      shippingPackaging: "Доставка и упаковка",
      vat: "НДС",
      grandEstimatedWithVat: "Общая оценочная стоимость заказа (с НДС)",
      grandTotalAria: "Итого",
      grandTotalLabel: "Итого",
      firstName: "Имя",
      lastName: "Фамилия",
      phone: "Номер телефона",
      email: "Электронная почта",
      address: "Адрес",
    },
  },
  EN: {
    stepperAriaLabel: "Calculator steps",
    steps: ["Page 1", "Page 2", "Page 3", "Page 4", "Finish"],
    nav: {
      prev: "Previous page",
      next: "Next page",
      quote: "Request a quote",
    },
    step1: {
      sectionLanguage: "Language",
      fromLabel: "Translate from",
      toLabel: "Translate into",
      chooseLanguage: "Select a language",
      languages: {
        uk: "Ukrainian",
        de: "German",
        en: "English",
        ru: "Russian",
      },
      sectionVolume: "Volume",
      complexityLabel: "Text complexity",
      complexityPlaceholder: "Select complexity",
      complexityOptions: {
        general: "General",
        business: "Business / negotiations",
        technical: "Technical",
        medical: "Medical",
        legal: "Legal",
      },
      optionsLabel: "Options",
      volumeAria: "Volume units",
      words: "Words",
      symbols: "Characters",
      pages: "Pages",
      goalLabel: "Purpose of the translation",
      goalPlaceholder: "Select purpose",
      goalOptions: {
        personal: "Personal use",
        business: "Business",
        website: "Website / marketing",
        official: "Official documents",
      },
      priceAria: "Price",
      priceLabel: "Price",
      next: "Next page",
    },
    step2: {
      title: "Editing or text correction",
      toggleText: "Editing or text correction",
    },
    step3: {
      titleFiles: "Files",
      uploadText: "Drag and drop or choose files",
      filesAria: "Uploaded files",
      remove: "Remove",
      titleFormatting: "Formatting",
      addFormatting: "Add formatting",
      formattingCostAria: "Formatting cost",
      formattingCostLabel: "Formatting cost",
    },
    step4: {
      title: "Delivery time (working days)",
      selectAria: "Delivery time",
      placeholder: "Delivery time",
      deliveryDays: {
        d1: "1 working day",
        d2: "2 working days",
        d3: "3 working days",
        d5: "5 working days",
      },
      deliveryCostAria: "Delivery cost",
      deliveryCostLabel: "Delivery cost",
    },
    step5: {
      recalculation: "Cost recalculation",
      editingCost: "Editing or correction cost",
      formattingCost: "Formatting cost",
      deliveryCost: "Delivery cost",
      estimatedNoVat: "Estimated cost (excl. VAT)",
      apostilleTranslation: "Apostille on the translation",
      apostilleDocument: "Apostille on the document",
      certification: "Certification",
      officeFee: "Administrative fee",
      orderTotalNoVat: "Order total (excl. VAT)",
      shippingPackaging: "Shipping and packaging",
      vat: "VAT",
      grandEstimatedWithVat: "Total estimated order value (incl. VAT)",
      grandTotalAria: "Total",
      grandTotalLabel: "Total",
      firstName: "First name",
      lastName: "Last name",
      phone: "Phone number",
      email: "Email address",
      address: "Address",
    },
  },
  DE: {
    stepperAriaLabel: "Schritte des Rechners",
    steps: ["Seite 1", "Seite 2", "Seite 3", "Seite 4", "Ende"],
    nav: {
      prev: "Vorherige Seite",
      next: "Nächste Seite",
      quote: "Angebot anfragen",
    },
    step1: {
      sectionLanguage: "Sprache",
      fromLabel: "Ausgangssprache",
      toLabel: "Zielsprache",
      chooseLanguage: "Sprache wählen",
      languages: {
        uk: "Ukrainisch",
        de: "Deutsch",
        en: "Englisch",
        ru: "Russisch",
      },
      sectionVolume: "Umfang",
      complexityLabel: "Textkomplexität",
      complexityPlaceholder: "Komplexität wählen",
      complexityOptions: {
        general: "Allgemein",
        business: "Business / Verhandlungen",
        technical: "Technik",
        medical: "Medizin",
        legal: "Recht",
      },
      optionsLabel: "Optionen",
      volumeAria: "Mengeneinheit",
      words: "Wörter",
      symbols: "Zeichen",
      pages: "Seiten",
      goalLabel: "Zweck der Übersetzung",
      goalPlaceholder: "Zweck wählen",
      goalOptions: {
        personal: "Privat",
        business: "Business",
        website: "Website / Marketing",
        official: "Amtliche Dokumente",
      },
      priceAria: "Preis",
      priceLabel: "Preis",
      next: "Nächste Seite",
    },
    step2: {
      title: "Bearbeitung oder Textkorrektur",
      toggleText: "Bearbeitung oder Textkorrektur",
    },
    step3: {
      titleFiles: "Dateien",
      uploadText: "Dateien ziehen oder auswählen",
      filesAria: "Hochgeladene Dateien",
      remove: "Entfernen",
      titleFormatting: "Formatierung",
      addFormatting: "Formatierung hinzufügen",
      formattingCostAria: "Formatierungskosten",
      formattingCostLabel: "Formatierungskosten",
    },
    step4: {
      title: "Lieferzeit (Werktage)",
      selectAria: "Lieferzeit",
      placeholder: "Lieferzeit",
      deliveryDays: {
        d1: "1 Werktag",
        d2: "2 Werktage",
        d3: "3 Werktage",
        d5: "5 Werktage",
      },
      deliveryCostAria: "Lieferkosten",
      deliveryCostLabel: "Lieferkosten",
    },
    step5: {
      recalculation: "Neuberechnung",
      editingCost: "Kosten für Bearbeitung oder Korrektur",
      formattingCost: "Formatierungskosten",
      deliveryCost: "Lieferkosten",
      estimatedNoVat: "Geschätzte Kosten (ohne MwSt.)",
      apostilleTranslation: "Apostille auf der Übersetzung",
      apostilleDocument: "Apostille auf dem Dokument",
      certification: "Beglaubigung",
      officeFee: "Kanzleigebühr",
      orderTotalNoVat: "Gesamtauftragswert (ohne MwSt.)",
      shippingPackaging: "Versand und Verpackung",
      vat: "MwSt.",
      grandEstimatedWithVat: "Geschätzter Gesamtauftragswert (inkl. MwSt.)",
      grandTotalAria: "Gesamt",
      grandTotalLabel: "Gesamt",
      firstName: "Vorname",
      lastName: "Nachname",
      phone: "Telefonnummer",
      email: "E-Mail-Adresse",
      address: "Adresse",
    },
  },
};
