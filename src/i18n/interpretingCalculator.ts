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
      business: string;
      medium: string;
      complex: string;
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
    withRecordingOrBroadcast: string;
    projectFee: string;
    withProjectFee: string;
    withRecordingAndProjectFee: string;
    totalAria: string;
    totalLabel: string;
  };
  step5: {
    estimatedCost: string;
    vat: string;
    subtotalCost: string;
    grandTotalAria: string;
    grandTotalLabel: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    mailingAddressTitle: string;
    countryPlaceholder: string;
    cityPlaceholder: string;
    streetPlaceholder: string;
    houseNumberPlaceholder: string;
    postalCodePlaceholder: string;
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
        complexityTitle: "Рівень",
        complexityAria: "Оберіть рівень",
        complexityPlaceholder: "Оберіть рівень",
        complexityOptions: {
          business: "Бізнес",
          medium: "Середній",
          complex: "Складний",
        },
        typeTitle: "Тип",
        typeAria: "Тип перекладу",
        typeSync: "Синхронний",
        typeCons: "Послідовний",
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
        totalAria: "Вартість",
        totalLabel: "Вартість",
      },
      step4: {
        title: "Запис чи трансляція перекладу",
        aria: "Запис чи трансляція перекладу",
        yes: "Так",
        no: "Ні",
        withRecordingOrBroadcast: "Разом з записом чи трансляцією",
        projectFee: "Проєктний збір",
        withProjectFee: "Разом з проєктним збором",
        withRecordingAndProjectFee: "Разом із записом і проєктним збором",
        totalAria: "Вартість",
        totalLabel: "Вартість",
      },
      step5: {
        estimatedCost: "Оцінена вартість",
        vat: "ПДВ",
        subtotalCost: "Підсумкова вартість",
        grandTotalAria: "Всього",
        grandTotalLabel: "Всього",
        firstName: "Ім’я",
        lastName: "Прізвище",
        phone: "Номер телефону",
        email: "Адреса електронної пошти",
        mailingAddressTitle: "Поштова адреса",
        countryPlaceholder: "Країна",
        cityPlaceholder: "Місто",
        streetPlaceholder: "Вулиця",
        houseNumberPlaceholder: "Номер будинку",
        postalCodePlaceholder: "Поштовий індекс",
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
        complexityTitle: "Уровень",
        complexityAria: "Выберите уровень",
        complexityPlaceholder: "Выберите уровень",
        complexityOptions: {
          business: "Бизнес",
          medium: "Средний",
          complex: "Сложный",
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
        totalAria: "Стоимость",
        totalLabel: "Стоимость",
      },
      step4: {
        title: "Запись или трансляция перевода",
        aria: "Запись или трансляция перевода",
        yes: "Да",
        no: "Нет",
        withRecordingOrBroadcast: "Итого с записью или трансляцией",
        projectFee: "Проектный сбор",
        withProjectFee: "Итого с проектным сбором",
        withRecordingAndProjectFee: "Итого с записью и проектным сбором",
        totalAria: "Стоимость",
        totalLabel: "Стоимость",
      },
      step5: {
        estimatedCost: "Оценённая стоимость",
        vat: "НДС",
        subtotalCost: "Итоговая стоимость",
        grandTotalAria: "Итого",
        grandTotalLabel: "Итого",
        firstName: "Имя",
        lastName: "Фамилия",
        phone: "Номер телефона",
        email: "Адрес электронной почты",
        mailingAddressTitle: "Почтовый адрес",
        countryPlaceholder: "Страна",
        cityPlaceholder: "Город",
        streetPlaceholder: "Улица",
        houseNumberPlaceholder: "Номер дома",
        postalCodePlaceholder: "Почтовый индекс",
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
        complexityTitle: "Level",
        complexityAria: "Choose level",
        complexityPlaceholder: "Choose level",
        complexityOptions: {
          business: "Business",
          medium: "Intermediate",
          complex: "Advanced",
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
        totalAria: "Cost",
        totalLabel: "Cost",
      },
      step4: {
        title: "Recording or broadcast of interpreting",
        aria: "Recording or broadcast of interpreting",
        yes: "Yes",
        no: "No",
        withRecordingOrBroadcast: "Total incl. recording or broadcast",
        projectFee: "Project fee",
        withProjectFee: "Total incl. project fee",
        withRecordingAndProjectFee: "Total incl. recording and project fee",
        totalAria: "Cost",
        totalLabel: "Cost",
      },
      step5: {
        estimatedCost: "Estimated cost",
        vat: "VAT",
        subtotalCost: "Subtotal cost",
        grandTotalAria: "Total",
        grandTotalLabel: "Total",
        firstName: "First name",
        lastName: "Last name",
        phone: "Phone number",
        email: "Email address",
        mailingAddressTitle: "Mailing address",
        countryPlaceholder: "Country",
        cityPlaceholder: "City",
        streetPlaceholder: "Street",
        houseNumberPlaceholder: "House number",
        postalCodePlaceholder: "Postal code",
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
        complexityTitle: "Niveau",
        complexityAria: "Niveau wählen",
        complexityPlaceholder: "Niveau wählen",
        complexityOptions: {
          business: "Business",
          medium: "Mittel",
          complex: "Komplex",
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
        totalAria: "Kosten",
        totalLabel: "Kosten",
      },
      step4: {
        title: "Aufzeichnung oder Übertragung des Dolmetschens",
        aria: "Aufzeichnung oder Übertragung des Dolmetschens",
        yes: "Ja",
        no: "Nein",
        withRecordingOrBroadcast: "Summe inkl. Aufzeichnung oder Übertragung",
        projectFee: "Projektgebühr",
        withProjectFee: "Summe inkl. Projektgebühr",
        withRecordingAndProjectFee: "Summe inkl. Aufzeichnung und Projektgebühr",
        totalAria: "Kosten",
        totalLabel: "Kosten",
      },
      step5: {
        estimatedCost: "Geschätzte Kosten",
        vat: "MwSt.",
        subtotalCost: "Gesamtkosten",
        grandTotalAria: "Gesamt",
        grandTotalLabel: "Gesamt",
        firstName: "Vorname",
        lastName: "Nachname",
        phone: "Telefonnummer",
        email: "E‑Mail-Adresse",
        mailingAddressTitle: "Postanschrift",
        countryPlaceholder: "Land",
        cityPlaceholder: "Stadt",
        streetPlaceholder: "Straße",
        houseNumberPlaceholder: "Hausnummer",
        postalCodePlaceholder: "Postleitzahl",
      },
    },
  };

