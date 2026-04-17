import type { UiLanguage } from "./language";

export type InterpretingCopy = {
  heroImageAlt: string;
  ctaOrder: string;
  ctaMore: string;
  heroTitle: string;
  heroParagraphs: string[];
  accordionAriaLabel: string;
  priceCalculatorTitle: string;
};

export const interpretingCopyByLang: Record<UiLanguage, InterpretingCopy> = {
  UA: {
    heroImageAlt: "Ілюстрація: конференц-переклад",
    ctaOrder: "Замовити переклад",
    ctaMore: "Дізнатися більше",
    heroTitle: "Усний переклад",
    heroParagraphs: [
      "Моєю головною спеціалізацією є усне міжмовне посередництво, переклад, а ще точніше – конференц-переклад. Переважно я перекладаю з моєї пасивної (англійської) на мої активні мови (українську або російську). З німецької мови я перекладаю на українську або російську і навпаки.",
      "Проте дедалі більше моєю активною мовою стає не тільки німецька, але також і англійська, тому вже кілька років я перекладаю з української на англійську. Я пропоную професійні послуги з перекладу як кваліфікований перекладач.",
      "Я набула освіти конференц-перекладача в найкращих школах перекладу України та Німеччини. Крім того, я вчилась у Великобританії, країні однієї з провідних моїх робочих мов.",
    ],
    accordionAriaLabel: "Послуги усного перекладу",
    priceCalculatorTitle: "Калькулятор ціни",
  },
  RU: {
    heroImageAlt: "Иллюстрация: конференц-перевод",
    ctaOrder: "Заказать перевод",
    ctaMore: "Узнать больше",
    heroTitle: "Устный перевод",
    heroParagraphs: [
      "Моя основная специализация — устное межъязыковое посредничество, перевод, а точнее — конференц-перевод. В основном я перевожу с пассивного языка (английского) на активные языки (украинский или русский). С немецкого я перевожу на украинский или русский и наоборот.",
      "Однако всё чаще моим активным языком становится не только немецкий, но и английский, поэтому уже несколько лет я перевожу с украинского на английский. Я предлагаю профессиональные услуги перевода как квалифицированный переводчик.",
      "Образование конференц-переводчика я получила в лучших школах перевода Украины и Германии. Кроме того, я училась в Великобритании — стране одного из ведущих моих рабочих языков.",
    ],
    accordionAriaLabel: "Услуги устного перевода",
    priceCalculatorTitle: "Калькулятор цены",
  },
  EN: {
    heroImageAlt: "Illustration: conference interpreting",
    ctaOrder: "Request a translation",
    ctaMore: "Learn more",
    heroTitle: "Interpreting",
    heroParagraphs: [
      "My main specialisation is oral cross-language mediation — interpreting, and more specifically conference interpreting. I primarily interpret from my passive language (English) into my active languages (Ukrainian or Russian). From German I interpret into Ukrainian or Russian and vice versa.",
      "Over time, not only German but also English has increasingly become my active language, so for several years I have been interpreting from Ukrainian into English as well. I provide professional language services as a qualified interpreter/translator.",
      "I trained as a conference interpreter at leading translation schools in Ukraine and Germany. In addition, I studied in the United Kingdom — the country of one of my key working languages.",
    ],
    accordionAriaLabel: "Interpreting services",
    priceCalculatorTitle: "Price calculator",
  },
  DE: {
    heroImageAlt: "Illustration: Konferenzdolmetschen",
    ctaOrder: "Übersetzung anfragen",
    ctaMore: "Mehr erfahren",
    heroTitle: "Dolmetschen",
    heroParagraphs: [
      "Meine Hauptspezialisierung ist mündliche mehrsprachige Vermittlung — Dolmetschen, genauer: Konferenzdolmetschen. Meist dolmetsche ich aus meiner passiven Sprache (Englisch) in meine aktiven Sprachen (Ukrainisch oder Russisch). Aus dem Deutschen dolmetsche ich ins Ukrainische oder Russische und umgekehrt.",
      "Zunehmend wird neben Deutsch auch Englisch zu einer meiner aktiven Sprachen — seit einigen Jahren dolmetsche ich auch aus dem Ukrainischen ins Englische. Ich biete professionelle Sprachdienstleistungen als qualifizierte Dolmetscherin/Übersetzerin an.",
      "Die Ausbildung zur Konferenzdolmetscherin absolvierte ich an führenden Übersetzungsschulen in der Ukraine und in Deutschland. Außerdem studierte ich in Großbritannien — dem Land einer meiner wichtigsten Arbeitssprachen.",
    ],
    accordionAriaLabel: "Dolmetschleistungen",
    priceCalculatorTitle: "Preisrechner",
  },
};

