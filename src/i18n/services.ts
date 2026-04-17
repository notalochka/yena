import { createElement, Fragment, type ReactNode } from "react";
import type { UiLanguage } from "./language";

export type ServicesAsideText =
  | string
  | {
      before: string;
      linkText: string;
      after: string;
      href: string;
    };

export type ServicesCard = {
  variant: "Orange" | "Blue" | "Olive";
  buttonColor: string;
  title: string;
  description: string;
  listTitle: string;
  items: string[];
  asideTitle: string;
  asideText: ServicesAsideText;
  learnMoreHref: string;
};

export type ServicesCopy = {
  introTitle: string;
  introLead: string;
  listAriaLabel: string;
  learnMore: string;
  cards: ServicesCard[];
};

const silabotUrl = "https://silabot.de/uk/homepage/";

export function renderServicesAsideText(
  asideText: ServicesAsideText,
  linkClassName: string,
): ReactNode {
  if (typeof asideText === "string") return asideText;
  return createElement(
    Fragment,
    null,
    asideText.before,
    " ",
    createElement(
      "a",
      { className: linkClassName, target: "_blank", href: asideText.href, rel: "noreferrer" },
      asideText.linkText,
    ),
    asideText.after,
  );
}

export const servicesCopyByLang: Record<UiLanguage, ServicesCopy> = {
  UA: {
    introTitle: "Послуги",
    introLead:
      "Я – професійний кваліфікований перекладач. Крім того, як досвідчений старший перекладач я надаю консультації з конференц-перекладу. Я організовую команди перекладачів, консультую з питань проведення конференцій та підбираю технічні засоби для перекладу. Крім того, я є судовим присяжним перекладачем.",
    listAriaLabel: "Перелік послуг",
    learnMore: "Дізнатися більше",
    cards: [
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Усний переклад",
        description:
          "Я надаю професійні послуги усного перекладу з фокусом на конференц-перекладі, багатомовних заходах та офіційних контекстах. Працюю з англійської, німецької, української та російської мов у різних форматах – синхронному, послідовному, віддаленому та переговорному.",
        listTitle: "Що входить в усний переклад",
        items: [
          "Аналіз потреби у робочих мовах та інших вимог заходу – оцінюємо, які саме типи перекладу потрібні (синхронний, послідовний, нашіптування, віддалений) залежно від формату та аудиторії",
          "Оцінка тематики та складності  – визначаємо рівень термінологічної насиченості для підготовки перекладачів та точної подачі змісту",
          "Підбір перекладачів – формуємо команду з потрібними міжмовними парами та досвідом",
          "Підтримка техніки (за потреби) – радіо-гід, кабіни, обладнання для віддаленого синхронного перекладу",
          "Рекомендації щодо формату та організації перекладу – поради, як краще побудувати багатомовну підтримку заходу для максимальної чіткості й комфорту",
        ],
        asideTitle: "Коли обрати усний переклад?",
        asideText:
          "Усний переклад варто обрати, якщо ви організовуєте міжнародний захід, переговори з партнерами та хочете забезпечити взаєморозуміння між учасниками. Ця послуга необхідна тоді, коли комунікація відбувається в реальному часі й важливо швидко та точно передати зміст без втрати деталей. Також усний переклад стане оптимальним рішенням, якщо ви працюєте з іноземними клієнтами, проводите презентації або супроводжуєте офіційні візити та потребуєте професійної міжмовної підтримки на місці або онлайн.",
        learnMoreHref: "/interpreting",
      },
      {
        variant: "Blue",
        buttonColor: "#456999",
        title: "Письмовий переклад",
        description:
          "Ми надаємо професійні послуги письмового перекладу спеціалізованих, юридичних, технічних та медичних текстів. Працюємо з документацією для промисловості й ІТ, договорами, фаховими, науково-популярними виданнями, рекламними матеріалами та контентом для веб-сайтів.",
        listTitle: "Що входить у письмовий переклад",
        items: [
          "Аналіз тематики, обсягу та вимог до тексту",
          "Підбір перекладача відповідної спеціалізації",
          "Формування та узгодження термінології, за потреби укладення глосарію",
          "Переклад із дотриманням стилю та структури оригіналу",
          "Редагування й коректура готового тексту",
          "Формування документа відповідно до вимог",
        ],
        asideTitle: "Коли обрати письмовий переклад?",
        asideText:
          "Письмовий переклад варто обрати, якщо вам потрібно перекласти договори, презентації, технічні матеріали чи маркетингові тексти для подальшого використання в роботі або публікації. Це рішення підходить у випадках, коли важлива точність формулювань і збереження стилю оригіналу.",
        learnMoreHref: "/written-translation",
      },
      {
        variant: "Olive",
        buttonColor: "#7e7b08",
        title: "Переклад офіційних документів",
        description:
          "Я є присяжним перекладачем української та російської мов, а також уповноваженою на виконання засвідчених перекладів з та на англійську мову на підставі британського диплому з перекладу для державних і муніципальних служб. Я маю право посвідчувати точність та повноту мого перекладу; засвідчені переклади визнаються державними установами в Німеччині та за кордоном.",
        listTitle: "Що входить у переклад офіційних документів",
        items: [
          "Перевірка вимог до оформлення для подання в установи",
          "Точний і вичерпний переклад із збереженням юридичних формулювань",
          "Дотримання структури оригіналу",
          "Засвідчення перекладу (аналогова та/або цифрове)",
          "Одержання апостилю (за потреби)",
          "Максимально наближене до оригіналу форматування",
        ],
        asideTitle: "Коли обрати переклад офіційних документів?",
        asideText: {
          before:
            "Цю послугу варто обрати, якщо вам потрібно подати документи до державних органів, консульства, навчального закладу чи роботодавця у Німеччині або за кордоном. Переклад офіційних документів необхідний тоді, коли важлива юридична точність і відповідність формальним вимогам, і коли переклад потребує засвідчення. Цю послугу ми надаємо через наш профільний портал Силабот,",
          linkText: "перейти за посиланням",
          after: ".",
          href: silabotUrl,
        },
        learnMoreHref: "/official-documents",
      },
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Віддалений переклад по телефону",
        description:
          "Ми підтримуємо людей, які через війну були змушені залишити Україну та звертаються до німецьких установ. Як кваліфікований перекладач, я і моя команда, допомагаємо там, де це найбільш необхідно – через віддалений переклад по телефону і професійним перекладом офіційних документів.",
        listTitle: "Що входить в переклад для біженців війни",
        items: [
          "Аналіз формату заходу та визначення потрібних мов",
          "Підбір перекладача",
          "Координація роботи перекладача, організація логістики",
          "За потреби, організація технічного обладнання (телефон, кабіна, гарнітура)",
          "Забезпечення перекладу в режимі реального часу",
        ],
        asideTitle: "Коли обрати цей вид перекладу?",
        asideText:
          "Це вид перекладу варто обрати коли ви маєте відвідати державну установу, відомство у справах іноземців, консульство, лікаря, батьківські збори, тощо.",
        learnMoreHref: "#",
      },
    ],
  },
  RU: {
    introTitle: "Услуги",
    introLead:
      "Я — квалифицированный профессиональный переводчик. Кроме того, как опытный старший переводчик я консультирую по конференц-переводу: организую команды переводчиков, помогаю с организацией конференций и подбираю технические решения. Также я являюсь судебным присяжным переводчиком.",
    listAriaLabel: "Список услуг",
    learnMore: "Узнать больше",
    cards: [
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Устный перевод",
        description:
          "Я оказываю профессиональные услуги устного перевода с фокусом на конференц-переводе, многоязычных мероприятиях и официальных контекстах. Работаю с английского, немецкого, украинского и русского языков в разных форматах — синхронном, последовательном, удалённом и переговорном.",
        listTitle: "Что входит в устный перевод",
        items: [
          "Анализ языков и требований мероприятия — определяем формат (синхронный, последовательный, шёпотный, удалённый) под аудиторию",
          "Оценка тематики и сложности — для подготовки и точной передачи терминологии",
          "Подбор переводчиков — формируем команду с нужными языковыми парами и опытом",
          "Техническая поддержка (при необходимости) — радиогид, кабины, решения для remote-синхрона",
          "Рекомендации по организации — как выстроить многоязычную поддержку максимально комфортно",
        ],
        asideTitle: "Когда выбрать устный перевод?",
        asideText:
          "Выбирайте устный перевод, если организуете международное мероприятие, переговоры или хотите обеспечить взаимопонимание участников в реальном времени. Он нужен, когда важны скорость и точность передачи смысла без потери деталей — на месте или онлайн.",
        learnMoreHref: "/interpreting",
      },
      {
        variant: "Blue",
        buttonColor: "#456999",
        title: "Письменный перевод",
        description:
          "Мы выполняем профессиональный письменный перевод специализированных, юридических, технических и медицинских текстов: документации для промышленности и IT, договоров, профессиональных и научно-популярных изданий, рекламы и контента для сайтов.",
        listTitle: "Что входит в письменный перевод",
        items: [
          "Анализ тематики, объёма и требований",
          "Подбор переводчика нужной специализации",
          "Согласование терминологии, при необходимости — глоссарий",
          "Перевод с сохранением стиля и структуры",
          "Редактирование и корректура",
          "Оформление документа по требованиям",
        ],
        asideTitle: "Когда выбрать письменный перевод?",
        asideText:
          "Письменный перевод подходит для договоров, презентаций, технических материалов и маркетинговых текстов для работы или публикации — когда важны точность формулировок и стиль оригинала.",
        learnMoreHref: "/written-translation",
      },
      {
        variant: "Olive",
        buttonColor: "#7e7b08",
        title: "Перевод официальных документов",
        description:
          "Я являюсь присяжным переводчиком украинского и русского языков, а также уполномочена выполнять заверенные переводы с и на английский на основании британского диплома для государственных и муниципальных служб. Заверенные переводы признаются в Германии и за рубежом.",
        listTitle: "Что входит в перевод официальных документов",
        items: [
          "Проверка требований к оформлению",
          "Точный перевод с сохранением юридических формулировок",
          "Сохранение структуры оригинала",
          "Заверение перевода (бумажное и/или цифровое)",
          "Апостиль (при необходимости)",
          "Форматирование максимально близко к оригиналу",
        ],
        asideTitle: "Когда выбрать перевод официальных документов?",
        asideText: {
          before:
            "Эта услуга нужна, если вы подаёте документы в госорганы, консульство, учебное заведение или работодателю в Германии или за рубежом. Важно соответствие формальным требованиям и юридическая точность, а также заверение. Мы предоставляем услугу через профильный портал Silabot,",
          linkText: "перейти по ссылке",
          after: ".",
          href: silabotUrl,
        },
        learnMoreHref: "/official-documents",
      },
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Удалённый перевод по телефону",
        description:
          "Мы поддерживаем людей, которые из‑за войны вынуждены были покинуть Украину и обращаются в немецкие учреждения. Как квалифицированный переводчик, я и моя команда помогаем там, где это наиболее нужно — через удалённый перевод по телефону и профессиональный перевод официальных документов.",
        listTitle: "Что входит в перевод для беженцев войны",
        items: [
          "Анализ формата и необходимых языков",
          "Подбор переводчика",
          "Координация работы и логистика",
          "При необходимости — организация техники",
          "Перевод в реальном времени",
        ],
        asideTitle: "Когда выбрать этот вид перевода?",
        asideText:
          "Подходит, когда нужно посетить госучреждение, ведомство по делам иностранцев, консульство, врача, родительское собрание и т. п.",
        learnMoreHref: "#",
      },
    ],
  },
  EN: {
    introTitle: "Services",
    introLead:
      "I’m a qualified professional translator. As an experienced senior linguist I also advise on conference interpreting: I build interpreting teams, consult on event organisation and select technical solutions. I am also a sworn court translator.",
    listAriaLabel: "Services list",
    learnMore: "Learn more",
    cards: [
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Interpreting",
        description:
          "Professional interpreting with a focus on conference interpreting, multilingual events and official settings. I work with English, German, Ukrainian and Russian in simultaneous, consecutive, remote and liaison formats.",
        listTitle: "What’s included",
        items: [
          "Needs analysis: languages, format and audience requirements",
          "Topic & complexity assessment for terminology preparation",
          "Interpreter selection: matching language pairs and experience",
          "Technical support if needed (tour guide systems, booths, RSI tools)",
          "Recommendations on setup and workflow for maximum clarity",
        ],
        asideTitle: "When to choose interpreting?",
        asideText:
          "Choose interpreting for international meetings, negotiations and events when communication happens in real time and accuracy matters — on-site or online.",
        learnMoreHref: "/interpreting",
      },
      {
        variant: "Blue",
        buttonColor: "#456999",
        title: "Written translation",
        description:
          "Professional written translation of specialised, legal, technical and medical texts: industry and IT documentation, contracts, publications, advertising materials and website content.",
        listTitle: "What’s included",
        items: [
          "Topic, volume and requirements analysis",
          "Assigning a specialist translator",
          "Terminology alignment and optional glossary",
          "Translation with consistent style and structure",
          "Editing and proofreading",
          "Formatting according to requirements",
        ],
        asideTitle: "When to choose written translation?",
        asideText:
          "Ideal for contracts, presentations, technical documentation and marketing texts — when wording accuracy and style consistency are important.",
        learnMoreHref: "/written-translation",
      },
      {
        variant: "Olive",
        buttonColor: "#7e7b08",
        title: "Certified translation of official documents",
        description:
          "I am a sworn translator for Ukrainian and Russian and authorised to provide certified translations to/from English based on a UK diploma for public authorities. Certified translations are recognised in Germany and abroad.",
        listTitle: "What’s included",
        items: [
          "Checking submission and formatting requirements",
          "Accurate translation with legal phrasing preserved",
          "Original structure retained",
          "Certification (paper and/or digital)",
          "Apostille support if required",
          "Formatting as close to the original as possible",
        ],
        asideTitle: "When to choose certified translation?",
        asideText: {
          before:
            "Choose this service when submitting documents to authorities, consulates, educational institutions or employers in Germany or abroad. Formal requirements and legal accuracy matter, and certification is required. We provide this via our specialised portal Silabot,",
          linkText: "follow the link",
          after: ".",
          href: silabotUrl,
        },
        learnMoreHref: "/official-documents",
      },
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Remote phone interpreting",
        description:
          "We support people displaced by the war who need help with German institutions. My team provides remote phone interpreting and professional translation of official documents where it’s most needed.",
        listTitle: "What’s included",
        items: [
          "Format review and required languages",
          "Interpreter selection",
          "Coordination and logistics",
          "Technical setup if needed",
          "Real-time interpreting",
        ],
        asideTitle: "When to choose this service?",
        asideText:
          "Useful for visits to public offices, immigration authorities, consulates, doctors, parent meetings, etc.",
        learnMoreHref: "#",
      },
    ],
  },
  DE: {
    introTitle: "Leistungen",
    introLead:
      "Ich bin qualifizierte professionelle Übersetzerin. Als erfahrene Senior-Linguistin berate ich zudem zum Konferenzdolmetschen: Ich stelle Teams zusammen, unterstütze bei der Veranstaltungsorganisation und wähle passende technische Lösungen. Außerdem bin ich beeidigte Gerichtsdolmetscherin.",
    listAriaLabel: "Leistungsübersicht",
    learnMore: "Mehr erfahren",
    cards: [
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Dolmetschen",
        description:
          "Professionelles Dolmetschen mit Schwerpunkt Konferenzdolmetschen, mehrsprachige Veranstaltungen und offizielle Kontexte — simultan, konsekutiv, remote und Verhandlungsdolmetschen (Deutsch/Englisch/Ukrainisch/Russisch).",
        listTitle: "Leistungsumfang",
        items: [
          "Bedarfsanalyse: Sprachen, Format und Zielgruppe",
          "Thema- und Komplexitätsanalyse für Terminologie",
          "Auswahl der Dolmetscher:innen",
          "Technik bei Bedarf (Empfänger, Kabinen, RSI-Tools)",
          "Empfehlungen zur Organisation für maximale Verständlichkeit",
        ],
        asideTitle: "Wann Dolmetschen wählen?",
        asideText:
          "Für internationale Meetings, Verhandlungen und Events, wenn Kommunikation in Echtzeit stattfindet und Präzision wichtig ist — vor Ort oder online.",
        learnMoreHref: "/interpreting",
      },
      {
        variant: "Blue",
        buttonColor: "#456999",
        title: "Schriftliche Übersetzung",
        description:
          "Professionelle Übersetzungen fachlicher, juristischer, technischer und medizinischer Texte: Industriedokumentation, IT, Verträge, Publikationen, Werbematerialien und Web-Content.",
        listTitle: "Leistungsumfang",
        items: [
          "Analyse von Thema, Umfang und Anforderungen",
          "Zuweisung einer Fachübersetzerin/eines Fachübersetzers",
          "Terminologieabstimmung, ggf. Glossar",
          "Übersetzung mit Stil- und Strukturtreue",
          "Lektorat und Korrektorat",
          "Formatierung nach Vorgaben",
        ],
        asideTitle: "Wann schriftliche Übersetzung wählen?",
        asideText:
          "Für Verträge, Präsentationen, technische Unterlagen und Marketingtexte — wenn genaue Formulierungen und Stiltreue zählen.",
        learnMoreHref: "/written-translation",
      },
      {
        variant: "Olive",
        buttonColor: "#7e7b08",
        title: "Beglaubigte Übersetzung amtlicher Dokumente",
        description:
          "Als beeidigte Übersetzerin (UA/RU) und autorisiert für beglaubigte Übersetzungen aus/ins Englische liefere ich beglaubigte Übersetzungen, die in Deutschland und im Ausland anerkannt werden.",
        listTitle: "Leistungsumfang",
        items: [
          "Prüfung der Formvorgaben",
          "Rechtskonforme, vollständige Übersetzung",
          "Strukturtreue zum Original",
          "Beglaubigung (Papier und/oder digital)",
          "Apostille-Unterstützung bei Bedarf",
          "Formatierung nah am Original",
        ],
        asideTitle: "Wann beglaubigte Übersetzung wählen?",
        asideText: {
          before:
            "Wenn Dokumente bei Behörden, Konsulaten, Bildungseinrichtungen oder Arbeitgebern in Deutschland oder im Ausland eingereicht werden. Formvorgaben und rechtliche Präzision sind entscheidend, oft ist eine Beglaubigung nötig. Diese Leistung bieten wir über das Portal Silabot an,",
          linkText: "Link folgen",
          after: ".",
          href: silabotUrl,
        },
        learnMoreHref: "/official-documents",
      },
      {
        variant: "Orange",
        buttonColor: "#c95118",
        title: "Telefon-Dolmetschen (remote)",
        description:
          "Wir unterstützen Menschen, die kriegsbedingt die Ukraine verlassen mussten und sich an deutsche Stellen wenden. Mein Team hilft dort, wo es am nötigsten ist — per Telefon-Dolmetschen und professioneller Übersetzung amtlicher Dokumente.",
        listTitle: "Leistungsumfang",
        items: [
          "Analyse des Formats und benötigter Sprachen",
          "Auswahl der Dolmetscher:innen",
          "Koordination und Logistik",
          "Technik bei Bedarf",
          "Dolmetschen in Echtzeit",
        ],
        asideTitle: "Wann diese Leistung wählen?",
        asideText:
          "Für Termine bei Behörden, Ausländerbehörde, Konsulat, Arzt, Elternabenden usw.",
        learnMoreHref: "#",
      },
    ],
  },
};

