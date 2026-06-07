import { createElement, Fragment, type ReactNode } from "react";
import type { UiLanguage } from "./language";
import type {
  FaqAnswerCopy,
  HomePageSectionsCopy,
  ProcessStepText,
  ServiceCardExtra,
} from "./homePageTypes";
import { homePageSectionsDe } from "./homePageLocales/de";
import { homePageSectionsEn } from "./homePageLocales/en";
import { homePageSectionsRu } from "./homePageLocales/ru";
import { homePageProcessFlowsUa } from "./homePageProcessFlows/ua";

export type {
  AboutPreviewCopy,
  AboutPreviewHighlightCopy,
  BenefitItemCopy,
  FaqAnswerCopy,
  FaqItemCopy,
  HomePageSectionsCopy,
  ProcessFlowCopy,
  ProcessStepCopy,
  ProcessStepText,
  ServiceCardCopy,
  ServiceCardExtra,
} from "./homePageTypes";

const silabotUrl = "https://silabot.de/uk/homepage/";

/** Чи є у картки другий абзац для розгортання */
export function hasServiceCardContinuedText(
  extraDescription: ServiceCardExtra,
): boolean {
  if (typeof extraDescription === "string") {
    return extraDescription.trim().length > 0;
  }
  return extraDescription.before.trim().length > 0;
}

/** Рендер опису картки послуги (текст або текст із посиланням) */
export function renderServiceCardDescription(
  description: ServiceCardExtra,
  linkClass: string,
): ReactNode {
  if (typeof description === "string") return description;
  return createElement(
    Fragment,
    null,
    description.before,
    createElement(
      "a",
      {
        className: linkClass,
        target: "_blank",
        href: description.href,
        rel: "noreferrer",
      },
      description.linkLabel,
    ),
    description.after,
  );
}

/** Рендер тексту кроку процесу (текст або текст із посиланням) */
export function renderProcessStepText(
  text: ProcessStepText,
  linkClass: string,
): ReactNode {
  if (typeof text === "string") return text;
  return createElement(
    Fragment,
    null,
    text.before,
    createElement(
      "a",
      {
        className: linkClass,
        target: "_blank",
        href: text.href,
        rel: "noreferrer",
      },
      text.linkLabel,
    ),
    text.after,
  );
}

/** Рендер відповіді FAQ (посилання + клас зі сторінки) */
export function renderFaqAnswer(
  answer: FaqAnswerCopy,
  faqAnswerLinkClass: string,
): ReactNode {
  if (typeof answer === "string") return answer;
  return createElement(
    Fragment,
    null,
    answer.before,
    " ",
    createElement(
      "a",
      {
        className: faqAnswerLinkClass,
        target: "_blank",
        href: answer.href,
        rel: "noreferrer",
      },
      answer.linkText,
    ),
    answer.after,
  );
}

const ua: HomePageSectionsCopy = {
  learnMore: "Замовити переклад",
  readFull: "Читати повністю",
  servicesCta: "Переглянути всі послуги",
  processBadge: "Процес",
  processTitle: "Як це працює?",
  processLead:
    "Декілька простих кроків — від вашого запиту до готового перекладу.",
  processTabsAriaLabel: "Тип перекладу",
  processSecondaryTabsAriaLabel: "Формат усного перекладу",
  processCta: "Розрахувати вартість перекладу",
  aboutPreview: {
    imageAlt: "Наталія Єна — перекладач",
    quote:
      "Якість перекладу та дотримання конфіденційності — це не просто слова. Це фундамент, на якому я будую кожен проєкт з 1991 року.",
    author: "—Наталія Єна",
    badge: "Про нас",
    title: "Перекладач, якому довіряють суди та посольства",
    highlights: [
      {
        title: "Присяжний перекладач",
        text: "визнаний судами та держорганами Гессену для DE/UA/RU",
      },
      {
        title: "British Diploma in Translation",
        text: "уповноважена на засвідчені переклади EN",
      },
      {
        title: "LSE, London",
        text: "додаткова освіта з політології",
      },
      {
        title: "Конференц-перекладач",
        text: "організовую команди та технічне забезпечення заходів",
      },
      {
        title: "Силабот",
        text: "наш спеціалізований портал для присяжних перекладів офіційних документів з доставкою",
      },
    ],
  },
  serviceCards: [
    {
      title: "Усний переклад",
      description:
        "Я надаю професійні послуги усного перекладу з фокусом на конференц-перекладі, багатомовних заходах та офіційних контекстах. Я працюю з англійської на українську або російську, з німецької на українську або російську і навпаки у різних форматах – синхронному, послідовному, віддаленому та переговорному. До усного перекладу я залюбки долучаю досвідчених і перевірених колег, з декотрими з них я знайома більше 30 років.",
      extraDescription: "",
      image: "/main_photo3.png",
      imageAlt: "Усний переклад",
      href: "/interpreting",
      colorClass: "serviceCardOrange",
      ctaClass: "serviceCardCtaOrange",
      accentClass: "serviceAccentOrange",
    },
    {
      title: "Письмовий переклад",
      description:
        "Я і моя команда кваліфікованих перекладачів надаємо професійні послуги письмового перекладу спеціалізованих, юридичних, технічних, медичних та художніх текстів. Ми працюємо з документацією для промисловості, ІТ, договорами, фаховими та науково-популярними виданнями, рекламою та контентом для веб-сайтів. Локалізація веб-сайтів виконується досвідченими фахівцями, які добре знайомі з різними системами управління контенту та мають практичні навички у цій сфері.",
      extraDescription:
        "На бажання замовника, ми можемо не використовувати машинний переклад. У такому випадку переклад виконується виключно людськими ресурсами. Однак, йдучи в ногу з технікою, ми пропонуємо редагування машинного перекладу як окремий вид послуг.",
      image: "/main_photo4.png",
      imageAlt: "Письмовий переклад",
      href: "/written-translation",
      colorClass: "serviceCardBlue",
      ctaClass: "serviceCardCtaBlue",
      accentClass: "serviceAccentBlue",
    },
    {
      title: "Переклад офіційних документів",
      description:
        "Я є присяжним перекладачем української та російської мов, а також уповноваженою на виконання засвідчених перекладів з англійської та на англійську мову на підставі британського диплому з перекладу для державних і муніципальних служб. Я маю право посвідчувати точність та повноту перекладу. Засвідчені мною як присяжним перекладачам переклади визнаються державними установами Німеччині та у інших країнах.",
      extraDescription: {
        before:
          "У певних випадках засвідчений переклад може потребувати подальшої легалізації, наприклад, через одержання апостилю на нього. Більше про цей вид перекладу ви можете дізнатись на окремому порталі мого бюро перекладів, який називається Силабот, ",
        linkLabel: "перейти за посиланням",
        after: ".",
        href: silabotUrl,
      },
      image: "/main_photo5.png",
      imageAlt: "Переклад офіційних документів",
      href: "/official-documents",
      colorClass: "serviceCardOlive",
      ctaClass: "serviceCardCtaOlive",
      accentClass: "serviceAccentOlive",
    },
  ],
  processFlows: homePageProcessFlowsUa,
  benefitsItems: [
    {
      image: "/translate1.svg",
      alt: "Кваліфіковані перекладачі",
      text: "Кваліфіковані перекладачі",
      extraText:
        "Мої понад 35 років професійного досвіду у перекладі дозволяють мені набрати найбільш кваліфікованих і талановитих перекладачів робочих мов мого бюро перекладу. Якість перекладу – для нас це є основний важіль нашої праці. ",
    },
    {
      image: "/translate2.svg",
      alt: "Судовий присяжний перекладач",
      text: "Судовий присяжний перекладач",
      extraText: {
        before:
          "Я працюю у сфері судового перекладу з початку двохтисячних років. Через мій портал Силабот, ",
        linkLabel: "перейти за посиланням",
        after:
          ", моє бюро перекладів надає послуги у сфері присяжного перекладу. Присяжний переклад найчастіше використовується для офіційних документів, переклад яких потребує засвідчення, а інколи ще і легалізації, наприклад, у формі одержання апостилю на переклад.",
        href: silabotUrl,
      },
    },
    {
      image: "/translate3.svg",
      alt: "Конфіденційність",
      text: "Конфіденційність",
      extraText:
        "Дотримання конфіденційності у перекладі є таким же важливим фундаментальним чинником як дотримання таємниці банками, поштою, лікарями та адвокатами. Тут перекладачі успішно конкурують з машинним перекладом, і виграють. Машинний переклад не лише часто містить приховані помилки, він також зберігається на серверах, які контролюють інші. Він не може по своїй природі гарантувати захист персональної інформації як це може зробити людина. Окрім того, не забуваймо про авторське право, яке є і у машинного перекладу. ",
    },
    {
      image: "/translate4.svg",
      alt: "Дотримання термінів",
      text: "Дотримання термінів",
      extraText:
        "Поряд з якістю перекладеного тексту, другим вагомим фактором нашої роботи є неухильне дотримання строків виконання перекладу. Ми прагнемо надати бездоганно виконаний переклад не лише вчасно, а інколи навіть до узгодженого строку виконання перекладу.",
    },
  ],
  faqTitle: "Відповіді на часті запитання",
  faqItems: [
    {
      question: "Скільки часу займає переклад?",
      answer:
        "У середньому перекладач виконує приблизно 3 сторінки тексту середньої складності за день. Одна сторінка тексту має 30 рядків, це приблизно 1.500 знаків з пробілами. Звісно, що редагування та корегування тексту виконується у додатковий час. Великі за обсягом тексти рекомендуємо виконувати одним перекладачем. Для подібних текстів на бажання замовника можемо укладати спеціалізовані глосарії. У певних випадках можемо запропонувати термінове виконання перекладу, однак це потребує окремого узгодження і залежить від складності, читабельності та обсягу вихідного тексту.",
    },
    {
      question: "Які документи ви приймаєте?",
      answer:
        "Ми приймаємо тексти у відкритому форматі. Зазвичай це формат Word. Тексти, які надаються у PDF, або інших форматах, потребують узгодження з нами. Розпізнавання та форматування тексту вважаються окремою послугою і виконуються зазвичай верстальником.",
    },
    {
      question: "Чи можливий терміновий переклад?",
      answer:
        "Так, за певних умов ми можемо запропонувати термінове виконання перекладу. Як зазначено вище, умови термінового перекладу залежать від складності, обсягу, термінологічної насиченості та інших параметрів.",
    },
    {
      question: "З якими мовами працюємо?",
      answer:
        "Наші основні мови – німецька, українська та англійська. Однак, ми можемо запропонувати і інші мови по запиту.",
    },
    {
      question: "У якому форматі я отримаю готовий переклад?",
      answer: {
        before:
          "Формат перекладу визначається замовленням. Ми можемо надавати як відкритий формат, це зазвичай Word, так і захищені формати, як то PDF та інші. Засвідчений переклад, який ми надаємо через наш портал Силабот,",
        linkText: "перейти за посиланням",
        after:
          ", надається як у аналоговому форматі (роздруковані з підписом та печаткою присяжного перекладача), так і у цифровому форматі, а саме з кваліфікованим цифровим підписом.",
        href: silabotUrl,
      },
    },
    {
      question: "Чи зберігаються мої дані після виконання замовлення?",
      answer:
        "Так, виконаний переклад ми зазвичай зберігаємо протягом 10 років. Після цього переклад як правило видаляється. Професійна архівація перекладів здійснюється нами на сервері, розташованому у Німеччині з дотриманням вимог захисту даних.",
    },
  ],
};

export const homePageSectionsByLang: Record<UiLanguage, HomePageSectionsCopy> = {
  UA: ua,
  EN: homePageSectionsEn,
  RU: homePageSectionsRu,
  DE: homePageSectionsDe,
};
