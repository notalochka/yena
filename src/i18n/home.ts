import type { UiLanguage } from "./language";

export type HomeCopy = {
  heroTitle: string;
  heroLine1: string;
  heroLine2: string;
  ctaOrder: string;
  ctaMore: string;
  aboutPreviewLine1: string;
  aboutPreviewLine2: string;
  aboutButton: string;
  stats: {
    staff: string;
    weekly: string;
    clients: string;
    years: string;
  };
  servicesBadge: string;
  servicesTitle: string;
  servicesLead: string;
};

const ua: HomeCopy = {
  heroTitle: "Ласкаво просимо до бюро перекладів Yena\u00A0Translations!",
  heroLine1: "Переклади на німецьку, англійську, українську та інші мови",
  heroLine2:
    "Якщо вам потрібні рішення з міжмовної комунікації, то вам саме до нас!",
  ctaOrder: "Замовити переклад",
  ctaMore: "Дізнатися більше",
  aboutPreviewLine1:
    "Ваш міжмовний експерт для німецької, англійської, української та інших мов в регіоні Рейн-Майн!",
  aboutPreviewLine2:
    "Якщо вам потрібні рішення з міжмовної комунікації, то ви звернулися за правильною адресою, надто коли йдеться про наші основні мови: німецьку, українську та англійську.",
  aboutButton: "Про нас",
  stats: {
    staff: "штатних та позаштатних співробітників",
    weekly: "ПЕРЕКЛАДІВ щотижня",
    clients: "задоволених клієнтів з 1991 року",
    years: "років на ринку",
  },
  servicesBadge: "Послуги",
  servicesTitle: "Що ми перекладаємо?",
  servicesLead:
    "Я – професійний кваліфікований перекладач. Крім того, як досвідчений старший перекладач я надаю консультації з конференц-перекладу. Я організовую команди перекладачів, консультую з питань проведення конференцій та підбираю технічні засоби для перекладу. Крім того, я є судовим присяжним перекладачем.",
};

const ru: HomeCopy = {
  heroTitle: "Добро пожаловать в бюро переводов Yena\u00A0Translations!",
  heroLine1: "Переводы на немецкий, английский, украинский и другие языки",
  heroLine2:
    "Если вам нужны решения для межъязыковой коммуникации — вы по адресу!",
  ctaOrder: "Заказать перевод",
  ctaMore: "Узнать больше",
  aboutPreviewLine1:
    "Ваш эксперт по межъязыковой коммуникации для немецкого, английского, украинского и других языков в регионе Рейн-Майн!",
  aboutPreviewLine2:
    "Если вам нужны решения для межъязыковой коммуникации, вы обратились по правильному адресу — особенно когда речь идёт о наших основных языках: немецком, украинском и английском.",
  aboutButton: "О нас",
  stats: {
    staff: "штатных и внештатных сотрудников",
    weekly: "ПЕРЕВОДОВ в неделю",
    clients: "довольных клиентов с 1991 года",
    years: "лет на рынке",
  },
  servicesBadge: "Услуги",
  servicesTitle: "Что мы переводим?",
  servicesLead:
    "Я — профессиональный квалифицированный переводчик. Кроме того, как опытный старший переводчик я консультирую по конференц-переводу, организую команды переводчиков, консультирую по проведению конференций и подбираю технические средства для перевода. Кроме того, я являюсь судебным присяжным переводчиком.",
};

const en: HomeCopy = {
  heroTitle: "Welcome to Yena\u00A0Translations!",
  heroLine1: "Translations into German, English, Ukrainian and other languages",
  heroLine2:
    "If you need cross-language communication solutions — you’re in the right place.",
  ctaOrder: "Request a translation",
  ctaMore: "Learn more",
  aboutPreviewLine1:
    "Your cross-language expert for German, English, Ukrainian and more in the Rhine‑Main region!",
  aboutPreviewLine2:
    "If you’re looking for reliable multilingual communication solutions, you’ve come to the right address — especially for our core languages: German, Ukrainian and English.",
  aboutButton: "About us",
  stats: {
    staff: "in-house and freelance specialists",
    weekly: "translations per week",
    clients: "happy clients since 1991",
    years: "years on the market",
  },
  servicesBadge: "Services",
  servicesTitle: "What do we translate?",
  servicesLead:
    "I am a qualified professional translator. As an experienced senior linguist, I also advise on conference interpreting, build interpreting teams, consult on conference planning and select the right technical solutions. I am also a sworn court translator.",
};

const de: HomeCopy = {
  heroTitle: "Willkommen bei Yena\u00A0Translations!",
  heroLine1: "Übersetzungen ins Deutsche, Englische, Ukrainische und weitere Sprachen",
  heroLine2:
    "Wenn Sie Lösungen für mehrsprachige Kommunikation suchen, sind Sie bei uns richtig.",
  ctaOrder: "Übersetzung anfragen",
  ctaMore: "Mehr erfahren",
  aboutPreviewLine1:
    "Ihre Expertin für mehrsprachige Kommunikation (Deutsch, Englisch, Ukrainisch u. a.) in der Rhein‑Main‑Region!",
  aboutPreviewLine2:
    "Wenn Sie zuverlässige Lösungen für mehrsprachige Kommunikation benötigen, sind Sie hier richtig — besonders für unsere Kernsprachen: Deutsch, Ukrainisch und Englisch.",
  aboutButton: "Über uns",
  stats: {
    staff: "festangestellte und freie Mitarbeitende",
    weekly: "Übersetzungen pro Woche",
    clients: "zufriedene Kund:innen seit 1991",
    years: "Jahre am Markt",
  },
  servicesBadge: "Leistungen",
  servicesTitle: "Was übersetzen wir?",
  servicesLead:
    "Ich bin qualifizierte professionelle Übersetzerin. Als erfahrene Senior-Linguistin berate ich außerdem zum Konferenzdolmetschen, stelle Dolmetscherteams zusammen, berate bei der Planung von Konferenzen und wähle passende technische Lösungen. Außerdem bin ich beeidigte Gerichtsdolmetscherin.",
};

export const homeCopyByLang: Record<UiLanguage, HomeCopy> = {
  UA: ua,
  RU: ru,
  EN: en,
  DE: de,
};

