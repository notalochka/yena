import type { UiLanguage } from "./language";

export type InterpretingCalculatorCopy = {
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
    sectionStart: string;
    sectionEnd: string;
    dateLabel: string;
    pickStartDateAria: string;
    pickEndDateAria: string;
    timeLabel: string;
    hoursPlaceholder: string;
    minutesPlaceholder: string;
    complexityTitle: string;
    complexityAria: string;
    complexityPlaceholder: string;
    complexityOptions: {
      general: string;
      business: string;
      technical: string;
      medical: string;
      legal: string;
    };
    typeTitle: string;
    typeAria: string;
    typeSync: string;
    typeCons: string;
    interpretersTitle: string;
    interpretersAria: string;
    priceAria: string;
    priceLabel: string;
  };
  step2: {
    title: string;
    selectAria: string;
    placeholder: string;
    options: { none: string; basic: string; advanced: string };
    costLabel: string;
    totalWithTrainingLabel: string;
  };
  step3: {
    title: string;
    aria: string;
    online: string;
    offline: string;
    totalAria: string;
    totalLabel: string;
  };
  step4: {
    title: string;
    aria: string;
    yes: string;
    no: string;
    summaryWithRecording: string;
    organisation: string;
    totalWithOrganisation: string;
    totalAria: string;
    totalLabel: string;
  };
  step5: {
    estimatedCostNoVat: string;
    apostilleInTranslation: string;
    apostilleInDocument: string;
    certification: string;
    orderTotalNoVat: string;
    vat: string;
    finalTotalWithVat: string;
    grandTotalAria: string;
    grandTotalLabel: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
  };
};

export const interpretingCalculatorCopyByLang: Record<UiLanguage, InterpretingCalculatorCopy> =
  {
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
        sectionStart: "Початок події",
        sectionEnd: "Кінець події",
        dateLabel: "Дата",
        pickStartDateAria: "Обрати дату початку",
        pickEndDateAria: "Обрати дату завершення",
        timeLabel: "Час",
        hoursPlaceholder: "Години (напр. 08)",
        minutesPlaceholder: "Хвилини (напр. 00)",
        complexityTitle: "Рівень складності тексту",
        complexityAria: "Оберіть мету перекладу",
        complexityPlaceholder: "Оберіть мету перекладу",
        complexityOptions: {
          general: "Загальна тематика",
          business: "Бізнес / переговори",
          technical: "Технічна тематика",
          medical: "Медична тематика",
          legal: "Юридична тематика",
        },
        typeTitle: "Тип",
        typeAria: "Тип перекладу",
        typeSync: "Синхронний",
        typeCons: "Консекутивний",
        interpretersTitle: "Перекладачі",
        interpretersAria: "Кількість перекладачів",
        priceAria: "Ціна",
        priceLabel: "Ціна",
      },
      step2: {
        title: "Навчання перекладачів",
        selectAria: "Навчання перекладачів",
        placeholder: "Навчання перекладачів",
        options: { none: "Не потрібно", basic: "Базове навчання", advanced: "Поглиблене навчання" },
        costLabel: "Вартість навчання",
        totalWithTrainingLabel: "Разом з навчанням",
      },
      step3: {
        title: "Де?",
        aria: "Формат перекладу",
        online: "Онлайн",
        offline: "Офлайн",
        totalAria: "Разом",
        totalLabel: "Разом",
      },
      step4: {
        title: "Запис чи трансляція",
        aria: "Запис чи трансляція",
        yes: "Так",
        no: "Ні",
        summaryWithRecording: "Разом із записом",
        organisation: "Організація",
        totalWithOrganisation: "Разом з організацією",
        totalAria: "Разом",
        totalLabel: "Разом",
      },
      step5: {
        estimatedCostNoVat: "Оцінена вартість перекладу (без ПДВ)",
        apostilleInTranslation: "Поставити апостоль в перекладі",
        apostilleInDocument: "Поставити апостоль в документі",
        certification: "Засвідчення",
        orderTotalNoVat: "Загальна вартість замовлення (без ПДВ)",
        vat: "ПДВ",
        finalTotalWithVat: "Підсумкова ціна замовлення (з ПДВ)",
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
      nav: { prev: "Предыдущая страница", next: "Следующая страница", quote: "Запрос ценового предложения" },
      step1: {
        sectionLanguage: "Язык",
        fromLabel: "Перевести с",
        toLabel: "Перевести на",
        chooseLanguage: "Выберите язык",
        languages: { uk: "Украинский", de: "Немецкий", en: "Английский", ru: "Русский" },
        sectionStart: "Начало события",
        sectionEnd: "Окончание события",
        dateLabel: "Дата",
        pickStartDateAria: "Выбрать дату начала",
        pickEndDateAria: "Выбрать дату окончания",
        timeLabel: "Время",
        hoursPlaceholder: "Часы (напр. 08)",
        minutesPlaceholder: "Минуты (напр. 00)",
        complexityTitle: "Уровень сложности текста",
        complexityAria: "Выберите тематику",
        complexityPlaceholder: "Выберите тематику",
        complexityOptions: {
          general: "Общая тематика",
          business: "Бизнес / переговоры",
          technical: "Техническая тематика",
          medical: "Медицинская тематика",
          legal: "Юридическая тематика",
        },
        typeTitle: "Тип",
        typeAria: "Тип перевода",
        typeSync: "Синхронный",
        typeCons: "Последовательный",
        interpretersTitle: "Переводчики",
        interpretersAria: "Количество переводчиков",
        priceAria: "Цена",
        priceLabel: "Цена",
      },
      step2: {
        title: "Инструктаж переводчиков",
        selectAria: "Инструктаж переводчиков",
        placeholder: "Инструктаж переводчиков",
        options: { none: "Не требуется", basic: "Базовый", advanced: "Расширенный" },
        costLabel: "Стоимость инструктажа",
        totalWithTrainingLabel: "Итого с инструктажем",
      },
      step3: {
        title: "Где?",
        aria: "Формат перевода",
        online: "Онлайн",
        offline: "Офлайн",
        totalAria: "Итого",
        totalLabel: "Итого",
      },
      step4: {
        title: "Запись или трансляция",
        aria: "Запись или трансляция",
        yes: "Да",
        no: "Нет",
        summaryWithRecording: "Итого с записью",
        organisation: "Организация",
        totalWithOrganisation: "Итого с организацией",
        totalAria: "Итого",
        totalLabel: "Итого",
      },
      step5: {
        estimatedCostNoVat: "Оценочная стоимость перевода (без НДС)",
        apostilleInTranslation: "Апостиль на перевод",
        apostilleInDocument: "Апостиль на документ",
        certification: "Заверение",
        orderTotalNoVat: "Общая стоимость заказа (без НДС)",
        vat: "НДС",
        finalTotalWithVat: "Итоговая стоимость (с НДС)",
        grandTotalAria: "Итого",
        grandTotalLabel: "Итого",
        firstName: "Имя",
        lastName: "Фамилия",
        phone: "Телефон",
        email: "Email",
        address: "Адрес",
      },
    },
    EN: {
      stepperAriaLabel: "Calculator steps",
      steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Finish"],
      nav: { prev: "Previous", next: "Next", quote: "Request a quote" },
      step1: {
        sectionLanguage: "Languages",
        fromLabel: "Translate from",
        toLabel: "Translate to",
        chooseLanguage: "Choose a language",
        languages: { uk: "Ukrainian", de: "German", en: "English", ru: "Russian" },
        sectionStart: "Event start",
        sectionEnd: "Event end",
        dateLabel: "Date",
        pickStartDateAria: "Pick start date",
        pickEndDateAria: "Pick end date",
        timeLabel: "Time",
        hoursPlaceholder: "Hours (e.g. 08)",
        minutesPlaceholder: "Minutes (e.g. 00)",
        complexityTitle: "Topic complexity",
        complexityAria: "Choose topic",
        complexityPlaceholder: "Choose topic",
        complexityOptions: {
          general: "General",
          business: "Business / negotiations",
          technical: "Technical",
          medical: "Medical",
          legal: "Legal",
        },
        typeTitle: "Mode",
        typeAria: "Interpreting mode",
        typeSync: "Simultaneous",
        typeCons: "Consecutive",
        interpretersTitle: "Interpreters",
        interpretersAria: "Number of interpreters",
        priceAria: "Price",
        priceLabel: "Price",
      },
      step2: {
        title: "Interpreter briefing",
        selectAria: "Interpreter briefing",
        placeholder: "Interpreter briefing",
        options: { none: "Not needed", basic: "Basic", advanced: "Advanced" },
        costLabel: "Briefing cost",
        totalWithTrainingLabel: "Total incl. briefing",
      },
      step3: {
        title: "Where?",
        aria: "Format",
        online: "Online",
        offline: "On-site",
        totalAria: "Total",
        totalLabel: "Total",
      },
      step4: {
        title: "Recording or broadcast",
        aria: "Recording or broadcast",
        yes: "Yes",
        no: "No",
        summaryWithRecording: "Total incl. recording",
        organisation: "Organisation",
        totalWithOrganisation: "Total incl. organisation",
        totalAria: "Total",
        totalLabel: "Total",
      },
      step5: {
        estimatedCostNoVat: "Estimated interpreting cost (excl. VAT)",
        apostilleInTranslation: "Apostille for translation",
        apostilleInDocument: "Apostille for document",
        certification: "Certification",
        orderTotalNoVat: "Order total (excl. VAT)",
        vat: "VAT",
        finalTotalWithVat: "Final total (incl. VAT)",
        grandTotalAria: "Grand total",
        grandTotalLabel: "Grand total",
        firstName: "First name",
        lastName: "Last name",
        phone: "Phone",
        email: "Email",
        address: "Address",
      },
    },
    DE: {
      stepperAriaLabel: "Rechenschritte",
      steps: ["Schritt 1", "Schritt 2", "Schritt 3", "Schritt 4", "Fertig"],
      nav: { prev: "Zurück", next: "Weiter", quote: "Angebot anfragen" },
      step1: {
        sectionLanguage: "Sprachen",
        fromLabel: "Übersetzen aus",
        toLabel: "Übersetzen in",
        chooseLanguage: "Sprache wählen",
        languages: { uk: "Ukrainisch", de: "Deutsch", en: "Englisch", ru: "Russisch" },
        sectionStart: "Beginn",
        sectionEnd: "Ende",
        dateLabel: "Datum",
        pickStartDateAria: "Startdatum wählen",
        pickEndDateAria: "Enddatum wählen",
        timeLabel: "Uhrzeit",
        hoursPlaceholder: "Stunden (z. B. 08)",
        minutesPlaceholder: "Minuten (z. B. 00)",
        complexityTitle: "Themenkomplexität",
        complexityAria: "Thema wählen",
        complexityPlaceholder: "Thema wählen",
        complexityOptions: {
          general: "Allgemein",
          business: "Business / Verhandlung",
          technical: "Technisch",
          medical: "Medizinisch",
          legal: "Juristisch",
        },
        typeTitle: "Art",
        typeAria: "Dolmetschmodus",
        typeSync: "Simultan",
        typeCons: "Konsekutiv",
        interpretersTitle: "Dolmetscher:innen",
        interpretersAria: "Anzahl Dolmetscher:innen",
        priceAria: "Preis",
        priceLabel: "Preis",
      },
      step2: {
        title: "Briefing für Dolmetscher:innen",
        selectAria: "Briefing",
        placeholder: "Briefing",
        options: { none: "Nicht nötig", basic: "Basis", advanced: "Vertieft" },
        costLabel: "Kosten Briefing",
        totalWithTrainingLabel: "Summe inkl. Briefing",
      },
      step3: {
        title: "Wo?",
        aria: "Format",
        online: "Online",
        offline: "Vor Ort",
        totalAria: "Summe",
        totalLabel: "Summe",
      },
      step4: {
        title: "Aufzeichnung oder Übertragung",
        aria: "Aufzeichnung oder Übertragung",
        yes: "Ja",
        no: "Nein",
        summaryWithRecording: "Summe inkl. Aufzeichnung",
        organisation: "Organisation",
        totalWithOrganisation: "Summe inkl. Organisation",
        totalAria: "Summe",
        totalLabel: "Summe",
      },
      step5: {
        estimatedCostNoVat: "Geschätzte Dolmetschkosten (ohne MwSt.)",
        apostilleInTranslation: "Apostille für Übersetzung",
        apostilleInDocument: "Apostille für Dokument",
        certification: "Beglaubigung",
        orderTotalNoVat: "Gesamtkosten (ohne MwSt.)",
        vat: "MwSt.",
        finalTotalWithVat: "Endsumme (inkl. MwSt.)",
        grandTotalAria: "Gesamt",
        grandTotalLabel: "Gesamt",
        firstName: "Vorname",
        lastName: "Nachname",
        phone: "Telefon",
        email: "E‑Mail",
        address: "Adresse",
      },
    },
  };

