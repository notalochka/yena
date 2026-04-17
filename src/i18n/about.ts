import type { UiLanguage } from "./language";

export type AboutExpertiseCard = {
  icon: string;
  alt: string;
  text: string;
};

export type AboutCopy = {
  heroTitle: string;
  heroDescription1: string;
  heroDescription2: string;
  heroImageAlt: string;
  ctaOrder: string;
  ctaMore: string;
  expertiseTitle: string;
  expertiseDescription: string;
  expertiseSubtitle: string;
  expertiseCards: AboutExpertiseCard[];
  questionTitle: string;
  questionText: string;
  questionButton: string;
  experienceTitle: string;
  experienceParagraphs: string[];
  practiceTitle: string;
  practiceIntro: string;
  practiceList: string[];
  videoPlayLabel: string;
  stats: {
    staff: string;
    weekly: string;
    clients: string;
    years: string;
  };
  teamworkTitle: string;
  teamworkParagraphs: string[];
  teamworkList: string[];
};

const ua: AboutCopy = {
  heroTitle: "Ласкаво просимо до бюро перекладів Yena\u00A0Translations!",
  heroDescription1:
    "Ми пропонуємо професійні рішення у сфері міжмовної комунікації. Ми працюємо з чотирма мовами: німецькою, українською, англійською та російською, забезпечуючи як усний, так і письмовий переклад.",
  heroDescription2:
    "Понад 35 років досвіду дозволяють нам надавати послуги найвищої якості: від конференц-перекладу та локалізації веб-сайтів до створення іншомовних рекламних матеріалів.",
  heroImageAlt: "Ілюстрація Yena Translations",
  ctaOrder: "Замовити переклад",
  ctaMore: "Дізнатися більше",
  expertiseTitle: "Професійна експертиза",
  expertiseDescription:
    "Я — кваліфікований професійний перекладач і судовий присяжний перекладач. Працюю для судів і нотаріусів (переважно в федеральній землі Гессен), а також для міжнародних організацій, державних установ та приватних компаній.",
  expertiseSubtitle: "Як старший конференц-перекладач і консультант я:",
  expertiseCards: [
    {
      icon: "/abillities1.png",
      alt: "Організація команд перекладачів",
      text: "Організовую команди перекладачів",
    },
    {
      icon: "/abillities2.png",
      alt: "Консультації для міжнародних заходів",
      text: "Консультую щодо проведення міжнародних заходів",
    },
    {
      icon: "/abillities3.png",
      alt: "Підбір технічних рішень",
      text: "Підбираю технічні рішення для синхронного та віддаленого перекладу",
    },
    {
      icon: "/abillities4.png",
      alt: "Координація перекладацької команди",
      text: "Забезпечую координацію роботи перекладацької команди",
    },
  ],
  questionTitle: "Є запитання?",
  questionText: "Ми допоможемо визначитися з перекладом!",
  questionButton: "НАПИСАТИ НАМ",
  experienceTitle: "Досвід та освіта",
  experienceParagraphs: [
    "Перекладацьку діяльність я розпочала у 1991 році в Україні. Перекладацьку освіту я здобула в Україні та Німеччині.",
    "Додатково навчалася політології в London School of Economics and Political Science (LSE).",
    "Я маю практичний досвід роботи у банківському секторі – протягом трьох з половиною років працювала у банківській школі в рамках проекту TACIS Європейського Союзу.",
    "Я постійно підвищую кваліфікацію та поглиблюю знання у сфері підприємництва, навчаюсь в академії персоналу.",
  ],
  practiceTitle: "Міжнародна практика",
  practiceIntro:
    "Я перекладаю на міжнародних політичних заходах у Німеччині та поза нею. За роки роботи я сформувала мережу колег-синхроністів та письмових перекладачів, яких залучаю до реалізації перекладацьких проектів. Як керівник групи перекладачів я пропоную клієнтам повний супровід заходу:",
  practiceList: [
    "формування команди перекладачів",
    "технічне забезпечення конференц-перекладу, або",
    "організацію віддаленого синхронного перекладу",
    "координацію та управління процесом, у тому числі логістикою",
    "супровід конференцій через письмовий переклад",
  ],
  videoPlayLabel: "Відтворити відео",
  stats: {
    staff: "штатних та позаштатних співробітників",
    weekly: "ПЕРЕКЛАДІВ щотижня",
    clients: "задоволених клієнтів з 1991 року",
    years: "років на ринку",
  },
  teamworkTitle: "Командна робота",
  teamworkParagraphs: [
    "У сфері письмового перекладу ми працюємо з фаховими та науково-популярними виданнями, технічною документацією та спеціалізованими текстами.",
    "Залежно від обсягу проекту до роботи залучається команда професійних перекладачів та редакторів. Замовник отримує комплексну послугу з одних рук:",
  ],
  teamworkList: ["переклад", "редагування", "форматування", "верстка"],
};

const ru: AboutCopy = {
  heroTitle: "Добро пожаловать в бюро переводов Yena\u00A0Translations!",
  heroDescription1:
    "Мы предлагаем профессиональные решения в сфере межъязыковой коммуникации. Работаем с четырьмя языками: немецким, украинским, английским и русским — как с устным, так и с письменным переводом.",
  heroDescription2:
    "Более 35 лет опыта позволяют нам оказывать услуги высочайшего качества: от конференц-перевода и локализации сайтов до создания рекламных материалов на иностранных языках.",
  heroImageAlt: "Иллюстрация Yena Translations",
  ctaOrder: "Заказать перевод",
  ctaMore: "Узнать больше",
  expertiseTitle: "Профессиональная экспертиза",
  expertiseDescription:
    "Я — квалифицированный профессиональный переводчик и судебный присяжный переводчик. Работаю для судов и нотариусов (преимущественно в федеральной земле Гессен), а также для международных организаций, государственных учреждений и частных компаний.",
  expertiseSubtitle: "Как старший конференц-переводчик и консультант я:",
  expertiseCards: [
    {
      icon: "/abillities1.png",
      alt: "Организация команд переводчиков",
      text: "Организую команды переводчиков",
    },
    {
      icon: "/abillities2.png",
      alt: "Консультации по международным мероприятиям",
      text: "Консультирую по проведению международных мероприятий",
    },
    {
      icon: "/abillities3.png",
      alt: "Подбор технических решений",
      text: "Подбираю технические решения для синхронного и удалённого перевода",
    },
    {
      icon: "/abillities4.png",
      alt: "Координация команды переводчиков",
      text: "Обеспечиваю координацию работы команды переводчиков",
    },
  ],
  questionTitle: "Есть вопрос?",
  questionText: "Поможем определиться с переводом!",
  questionButton: "НАПИСАТЬ НАМ",
  experienceTitle: "Опыт и образование",
  experienceParagraphs: [
    "Переводческую деятельность я начала в 1991 году в Украине. Переводческое образование получила в Украине и Германии.",
    "Дополнительно изучала политологию в London School of Economics and Political Science (LSE).",
    "Имею практический опыт в банковском секторе — около трёх с половиной лет работала в банковской школе в рамках проекта TACIS Европейского Союза.",
    "Постоянно повышаю квалификацию и углубляю знания в предпринимательстве, обучаюсь в академии персонала.",
  ],
  practiceTitle: "Международная практика",
  practiceIntro:
    "Я перевожу на международных политических мероприятиях в Германии и за её пределами. За годы работы сформировала сеть коллег-синхронистов и письменных переводчиков, которых привлекаю к проектам. Как руководитель группы переводчиков предлагаю клиентам полное сопровождение мероприятия:",
  practiceList: [
    "формирование команды переводчиков",
    "техническое обеспечение конференц-перевода или",
    "организацию удалённого синхронного перевода",
    "координацию и управление процессом, включая логистику",
    "сопровождение конференций через письменный перевод",
  ],
  videoPlayLabel: "Воспроизвести видео",
  stats: {
    staff: "штатных и внештатных сотрудников",
    weekly: "ПЕРЕВОДОВ в неделю",
    clients: "довольных клиентов с 1991 года",
    years: "лет на рынке",
  },
  teamworkTitle: "Командная работа",
  teamworkParagraphs: [
    "В сфере письменного перевода мы работаем с профессиональными и научно-популярными изданиями, технической документацией и специализированными текстами.",
    "В зависимости от объёма проекта подключается команда профессиональных переводчиков и редакторов. Заказчик получает комплексную услугу из одних рук:",
  ],
  teamworkList: ["перевод", "редактирование", "форматирование", "вёрстка"],
};

const en: AboutCopy = {
  heroTitle: "Welcome to Yena\u00A0Translations!",
  heroDescription1:
    "We offer professional solutions in cross-language communication. We work with four languages — German, Ukrainian, English and Russian — providing both interpreting and written translation.",
  heroDescription2:
    "More than 35 years of experience allow us to deliver top-quality services: from conference interpreting and website localisation to creating advertising materials in foreign languages.",
  heroImageAlt: "Yena Translations illustration",
  ctaOrder: "Request a translation",
  ctaMore: "Learn more",
  expertiseTitle: "Professional expertise",
  expertiseDescription:
    "I am a qualified professional translator and sworn court interpreter. I work for courts and notaries (mainly in the federal state of Hesse) as well as for international organisations, public authorities and private companies.",
  expertiseSubtitle: "As a senior conference interpreter and consultant I:",
  expertiseCards: [
    {
      icon: "/abillities1.png",
      alt: "Building interpreter teams",
      text: "I assemble teams of interpreters",
    },
    {
      icon: "/abillities2.png",
      alt: "Consulting for international events",
      text: "I advise on organising international events",
    },
    {
      icon: "/abillities3.png",
      alt: "Selecting technical solutions",
      text: "I select technical solutions for simultaneous and remote interpreting",
    },
    {
      icon: "/abillities4.png",
      alt: "Coordinating the interpreting team",
      text: "I coordinate the interpreting team’s work",
    },
  ],
  questionTitle: "Any questions?",
  questionText: "We’ll help you choose the right translation solution!",
  questionButton: "CONTACT US",
  experienceTitle: "Experience and education",
  experienceParagraphs: [
    "I began my translation work in 1991 in Ukraine. I completed my translator training in Ukraine and Germany.",
    "I also studied political science at the London School of Economics and Political Science (LSE).",
    "I have practical experience in the banking sector — for about three and a half years I worked at a banking school as part of the EU TACIS project.",
    "I continuously develop my skills and deepen my knowledge of business; I train at a staff academy.",
  ],
  practiceTitle: "International practice",
  practiceIntro:
    "I interpret at international political events in Germany and abroad. Over the years I have built a network of simultaneous and written colleagues whom I involve in projects. As team lead I offer clients full event support:",
  practiceList: [
    "building the interpreter team",
    "technical support for conference interpreting, or",
    "organising remote simultaneous interpreting",
    "coordination and process management, including logistics",
    "conference support through written translation",
  ],
  videoPlayLabel: "Play video",
  stats: {
    staff: "in-house and freelance specialists",
    weekly: "translations per week",
    clients: "happy clients since 1991",
    years: "years on the market",
  },
  teamworkTitle: "Teamwork",
  teamworkParagraphs: [
    "In written translation we work with professional and popular science publications, technical documentation and specialised texts.",
    "Depending on project size, a team of professional translators and editors is involved. Clients receive an integrated service from a single source:",
  ],
  teamworkList: ["translation", "editing", "formatting", "typesetting"],
};

const de: AboutCopy = {
  heroTitle: "Willkommen bei Yena\u00A0Translations!",
  heroDescription1:
    "Wir bieten professionelle Lösungen für mehrsprachige Kommunikation. Wir arbeiten mit vier Sprachen — Deutsch, Ukrainisch, Englisch und Russisch — und liefern sowohl Dolmetschen als auch schriftliche Übersetzung.",
  heroDescription2:
    "Mehr als 35 Jahre Erfahrung ermöglichen höchste Qualität: von Konferenzdolmetschen und Website-Lokalisierung bis zur Erstellung fremdsprachiger Werbematerialien.",
  heroImageAlt: "Yena Translations Illustration",
  ctaOrder: "Übersetzung anfragen",
  ctaMore: "Mehr erfahren",
  expertiseTitle: "Fachliche Expertise",
  expertiseDescription:
    "Ich bin qualifizierte Übersetzerin und beeidigte Gerichtsdolmetscherin. Ich arbeite für Gerichte und Notare (vor allem in Hessen) sowie für internationale Organisationen, Behörden und Unternehmen.",
  expertiseSubtitle: "Als erfahrene Konferenzdolmetscherin und Beraterin:",
  expertiseCards: [
    {
      icon: "/abillities1.png",
      alt: "Teams von Dolmetscher:innen",
      text: "Ich stelle Teams von Dolmetscher:innen zusammen",
    },
    {
      icon: "/abillities2.png",
      alt: "Beratung zu internationalen Veranstaltungen",
      text: "Ich berate zur Organisation internationaler Veranstaltungen",
    },
    {
      icon: "/abillities3.png",
      alt: "Technische Lösungen",
      text: "Ich wähle technische Lösungen für Simultan- und Remote-Dolmetschen",
    },
    {
      icon: "/abillities4.png",
      alt: "Koordination des Dolmetschteams",
      text: "Ich koordiniere die Arbeit des Dolmetschteams",
    },
  ],
  questionTitle: "Haben Sie Fragen?",
  questionText: "Wir helfen Ihnen bei der Wahl der passenden Übersetzungslösung!",
  questionButton: "UNS SCHREIBEN",
  experienceTitle: "Erfahrung und Ausbildung",
  experienceParagraphs: [
    "Meine Tätigkeit als Übersetzerin begann 1991 in der Ukraine. Die Übersetzerausbildung absolvierte ich in der Ukraine und in Deutschland.",
    "Zusätzlich studierte ich Politikwissenschaft an der London School of Economics and Political Science (LSE).",
    "Ich habe praktische Erfahrung im Bankensektor — rund dreieinhalb Jahre arbeitete ich in einer Bankschule im Rahmen des EU-TACIS-Projekts.",
    "Ich bilde mich kontinuierlich weiter und vertiefe unternehmerisches Wissen in einer Personalakademie.",
  ],
  practiceTitle: "Internationale Praxis",
  practiceIntro:
    "Ich dolmetsche bei internationalen politischen Veranstaltungen in Deutschland und im Ausland. Im Laufe der Jahre habe ich ein Netzwerk von Simultan- und Schriftkolleg:innen aufgebaut. Als Teamleitung biete ich Kund:innen vollständige Veranstaltungsbetreuung:",
  practiceList: [
    "Zusammenstellung des Dolmetschteams",
    "technische Ausstattung für Konferenzdolmetschen oder",
    "Organisation von Remote-Simultandolmetschen",
    "Koordination und Prozesssteuerung inklusive Logistik",
    "Konferenzbegleitung durch schriftliche Übersetzung",
  ],
  videoPlayLabel: "Video abspielen",
  stats: {
    staff: "festangestellte und freie Mitarbeitende",
    weekly: "Übersetzungen pro Woche",
    clients: "zufriedene Kund:innen seit 1991",
    years: "Jahre am Markt",
  },
  teamworkTitle: "Teamarbeit",
  teamworkParagraphs: [
    "Im Bereich Schriftübersetzung arbeiten wir mit Fach- und Sachpublikationen, technischer Dokumentation und Spezialtexten.",
    "Je nach Projektumfang kommt ein Team aus Übersetzer:innen und Lektor:innen zum Einsatz. Kund:innen erhalten eine integrierte Leistung aus einer Hand:",
  ],
  teamworkList: ["Übersetzung", "Redaktion", "Formatierung", "Satz"],
};

export const aboutCopyByLang: Record<UiLanguage, AboutCopy> = {
  UA: ua,
  RU: ru,
  EN: en,
  DE: de,
};
