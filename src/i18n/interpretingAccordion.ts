import type { UiLanguage } from "./language";
import type { TopicItem } from "@/components/TopicsAccordion";

// NOTE: For non-UA languages we use shorter, clear descriptions.
export const interpretingAccordionItemsByLang: Record<UiLanguage, TopicItem[]> = {
  UA: [
    {
      title: "Консультації з конференц-перекладу",
      description:
        "Як старший перекладач я надаю клієнтам кваліфіковані консультації щодо усної багатомовної комунікації. Завжди, коли під час міжнародних заходів використовується більше однієї мови, постає потреба у міжмовному посередництві. Я докладно проконсультую вас щодо вибору типу перекладу, складу групи кваліфікованих перекладачів та відповідних технічних засобів для комунікації під час заходу, у тому числі у випадках віддаленого перекладу. Як консультант-перекладач я забезпечую зв’язок між командою перекладачів та організатором. Звичайно, ми радо допоможемо вам з перекладом письмового спілкування під час підготовки заходу.",
    },
    {
      title: "Формування команди",
      description:
        "Я підбираю команду перекладачів відповідно до мовних пар, тематики та тривалості заходу. За потреби залучаю перевірених колег для синхронного, послідовного або віддаленого формату та допомагаю узгодити ролі й графік роботи.",
    },
    {
      title: "Надання технічних засобів",
      bodyStyle: "written",
      paragraphs: [
        "На бажання я зможу підібрати для вашого заходу відповідні технічні засоби для перекладу від перевіреного постачальника. В той час, як деякі формати заходів вимагають наявності звукоізольованих кабін для перекладу згідно зі стандартом ISO, для інших заходів достатньо використання системи «радіо-гід». Надійне та якісне обладнання для конференц-перекладу є незамінним, якщо переклад записується та/або передається в ефір, а особливо у випадку віддаленого синхронного перекладу, так званого RSI. Тож обладнання для конференц-перекладу є невід’ємною складовою пакету комунікацій під час медійного перекладу (телебачення, радіо, Інтернет-трансляцій у форматах аудіо та/або відео).",
      ],
    },
    {
      title: "Синхронний переклад",
      bodyStyle: "written",
      paragraphs: [
        "Синхронний переклад є головним видом конференц-перекладу. Перекладачі знаходяться в звукоізольованій кабіні удвох чи утрьох і перекладають промову доповідача на відповідні цільові мови з невеликою затримкою (décalage). Вони змінюють один одного кожних 15–30 хвилин залежно від інтенсивності й складності теми.",
        "Високоякісний синхронний переклад легко впізнати за точністю цифр і назв, природністю мовлення та тим, що аудиторія так само реагує на гумор і інтонацію, як і мовою оригіналу.",
        "Зібрати злагоджену команду професіоналів і організувати роботу до, під час і після конференції — моя спеціалізація.",
      ],
    },
    {
      title: "Переклад на виставках",
      description:
        "У Франкфурті-на-Майні переклад на виставках має стабільний попит. Я виконую переклад для Messe Frankfurt та експонентів: на форумах і прес-конференціях переважно синхронно, на стендах — послідовно. Для спеціалізованих виставок особливо важливі термінологічна підготовка й орієнтація на місцевості.",
    },
    {
      title: "Нашіптування",
      description:
        "Нашіптування — тихий синхронний переклад для 1–2 слухачів або невеликої групи. Може виконуватись із системою «радіо-гід» або без неї; зазвичай перекладачі працюють парами та чергуються кожні 15–30 хвилин.",
    },
    {
      title: "Віддалений синхронний переклад",
      bodyStyle: "written",
      paragraphs: [
        "RSI (Remote Simultaneous Interpretation) — віддалений синхронний переклад, що став можливим завдяки технологіям і розвитку віртуальної комунікації. Він затребуваний у міжнародних організаціях, бізнесі та державних установах.",
        "Ключову роль відіграють якість звуку/відео, надійність і безпека зв’язку. Для бездоганної роботи потрібні професійне обладнання, стабільний інтернет і належні умови робочого місця або RSI-хабу.",
        "Перекладач працює з офісної станції, переговорної замовника або хабу; часто використовується відео, але можливий і лише аудіоканал. Ретельна підготовка до кожного сеансу — обов’язкова.",
      ],
    },
    {
      title: "Телефонний переклад",
      description:
        "Телефонний переклад підходить для коротких дзвінків і телеконференцій. Зазвичай це послідовний переклад без відео. У держсекторі часто працюють за викликом, у приватному — за попереднім плануванням із часом на підготовку.",
    },
    {
      title: "Суспільний переклад",
      description:
        "Суспільний (громадський) переклад — це переклад для органів влади та державного управління. Він вимагає професійної етики, прозорості, неупередженості, культурного посередництва та знання адміністративної системи й термінології.",
    },
    {
      title: "Переклад під час переговорів",
      description:
        "Переклад під час переговорів зазвичай послідовний: перекладач сидить за столом і передає зміст між сторонами. Часто працює один перекладач, інколи — двоє (із «контрольним» перекладачем) залежно від складності та тривалості.",
    },
    {
      title: "Переклад у сфері охорони здоров'я",
      description:
        "Медичний переклад потребує високої кваліфікації, знання процесів у лікарні, термінології та суворої конфіденційності. Через ризики відповідальності залучаються лише професійні перекладачі зі страхуванням професійної відповідальності.",
    },
    {
      title: "Переклад для судових органів",
      description:
        "Переклад для судів у Німеччині регулюється законодавством (зокрема JVEG). Він може бути синхронним або послідовним, із/без «радіо-гід». Залежно від ситуації перекладач перекладає пошепки або голосно для всіх учасників процесу; важливі юридична термінологія і підготовка.",
    },
    {
      title: "Переклад у нотаріуса",
      description:
        "Мовний супровід під час укладення угод, засвідчення підписів і пояснення змісту документів сторонам. Перекладач забезпечує взаєморозуміння, не змінюючи юридичного навантаження формулювань.",
    },
  ],
  RU: [
    {
      title: "Консультации по конференц‑переводу",
      description:
        "Я консультирую по формату устного многоязычного сопровождения: какой тип перевода выбрать, сколько переводчиков нужно и какая техника потребуется, включая удалённые форматы. Также координирую взаимодействие переводчиков и организаторов.",
    },
    {
      title: "Формирование команды",
      description:
        "Подбираю команду под языковые пары, тематику и длительность мероприятия, согласовываю график и роли (синхронный/последовательный/удалённый формат).",
    },
    {
      title: "Техническое обеспечение",
      bodyStyle: "written",
      paragraphs: [
        "При необходимости помогаю подобрать оборудование у проверенных поставщиков: кабины по ISO, системы «радиогид», решения для RSI. Качественная техника критична для записи, эфира и удалённого синхрона.",
      ],
    },
    {
      title: "Синхронный перевод",
      bodyStyle: "written",
      paragraphs: [
        "Основной формат конференц‑перевода: команда в кабине переводит с небольшой задержкой, смена каждые 15–30 минут.",
        "Качество видно по точности цифр/имён, естественности речи и совпадению реакции аудитории на оригинал и перевод.",
        "Сбор и координация сильной команды — моя специализация.",
      ],
    },
    {
      title: "Перевод на выставках",
      description:
        "Перевод на выставках востребован: на форумах и пресс‑конференциях чаще синхронно, на стендах — последовательно. Важно знание терминологии и логистики площадки.",
    },
    {
      title: "Шёпотный перевод",
      description:
        "Тихий синхронный перевод для 1–2 слушателей или небольшой группы, иногда с «радиогидом». Обычно работают парами и сменяются каждые 15–30 минут.",
    },
    {
      title: "Удалённый синхронный перевод (RSI)",
      bodyStyle: "written",
      paragraphs: [
        "RSI стал возможен благодаря технологиям и виртуальным форматам. Важны качество звука/видео, безопасность и надёжность связи.",
        "Для стабильной работы нужны профессиональная гарнитура, интернет‑резервирование и корректные условия рабочего места/хаба.",
        "Тщательная подготовка к каждому сеансу обязательна.",
      ],
    },
    {
      title: "Телефонный перевод",
      description:
        "Для коротких звонков и телеконференций: чаще последовательный перевод без видео. В госсекторе бывает работа «по вызову», в частном — заранее согласованные сессии.",
    },
    {
      title: "Общественный перевод",
      description:
        "Перевод для органов власти и госуправления требует профессиональной этики, нейтральности, культурного посредничества и знания административной системы и терминологии.",
    },
    {
      title: "Перевод на переговорах",
      description:
        "Обычно последовательный: переводчик за столом передаёт смысл между сторонами. Иногда работает пара переводчиков, если нужно взаимоконтролирование.",
    },
    {
      title: "Медицинский перевод",
      description:
        "Требует высокой квалификации, медицинской терминологии и строгой конфиденциальности; обычно выполняется профессионалами со страхованием ответственности.",
    },
    {
      title: "Судебный перевод",
      description:
        "В Германии регулируется нормами (в т.ч. JVEG). Возможен синхронный или последовательный формат, с/без «радиогида». Важны юридическая терминология и подготовка.",
    },
    {
      title: "Перевод у нотариуса",
      description:
        "Языковое сопровождение сделок, удостоверения подписей и объяснения содержания документов сторонам без искажения юридического смысла.",
    },
  ],
  EN: [
    {
      title: "Conference interpreting consulting",
      description:
        "I advise on multilingual communication for events: which interpreting mode to choose, how many interpreters are needed and what technical setup is required, including remote formats. I also coordinate between the interpreting team and organisers.",
    },
    {
      title: "Team building",
      description:
        "I assemble the right team based on language pairs, subject matter and event duration, and help align roles and schedules for simultaneous, consecutive or remote interpreting.",
    },
    {
      title: "Technical solutions",
      bodyStyle: "written",
      paragraphs: [
        "If needed, I help source reliable equipment: ISO booths, tour‑guide systems, and RSI setups. High‑quality audio is essential for recording, broadcasting and remote simultaneous interpreting.",
      ],
    },
    {
      title: "Simultaneous interpreting",
      bodyStyle: "written",
      paragraphs: [
        "The core conference format: a team in a soundproof booth interprets with a short delay and rotates every 15–30 minutes depending on intensity.",
        "Quality shows in accurate numbers and names, natural delivery, and audience reactions matching those of the source language.",
        "Building and coordinating a strong team is my expertise.",
      ],
    },
    {
      title: "Trade fair interpreting",
      description:
        "Interpreting at trade fairs is in demand: panels and press conferences often require simultaneous interpreting, while booth support is typically consecutive. Terminology preparation and on‑site logistics matter a lot.",
    },
    {
      title: "Whispered interpreting",
      description:
        "A quiet simultaneous mode for one or two listeners (or a small group), sometimes with a tour‑guide system. Typically delivered by two interpreters rotating every 15–30 minutes.",
    },
    {
      title: "Remote simultaneous interpreting (RSI)",
      bodyStyle: "written",
      paragraphs: [
        "RSI emerged with virtual communication and new technology. The key is audio/video quality, security and connection reliability.",
        "Professional headsets, redundant internet and proper workstation/hub conditions are important for stable delivery.",
        "Thorough preparation for each session is essential.",
      ],
    },
    {
      title: "Telephone interpreting",
      description:
        "Often used for short calls and teleconferences. Typically consecutive, audio‑only. In public services it may be on‑demand; in private business it’s usually scheduled with preparation time.",
    },
    {
      title: "Public service interpreting",
      description:
        "Interpreting for public authorities requires professional ethics, neutrality, cultural mediation and knowledge of administrative systems and terminology.",
    },
    {
      title: "Negotiation interpreting",
      description:
        "Most often consecutive, seated at the table. Sometimes two interpreters work together depending on complexity and duration.",
    },
    {
      title: "Medical interpreting",
      description:
        "Requires high qualifications, medical terminology and strict confidentiality; typically performed by professionals with liability insurance.",
    },
    {
      title: "Court interpreting",
      description:
        "In Germany this work is regulated (e.g. JVEG). It may be simultaneous or consecutive, with or without tour‑guide systems. Legal terminology and preparation are crucial.",
    },
    {
      title: "Notary interpreting",
      description:
        "Language support for signing deeds, certifying signatures and explaining documents to the parties without changing legal meaning.",
    },
  ],
  DE: [
    {
      title: "Beratung zum Konferenzdolmetschen",
      description:
        "Ich berate zur mehrsprachigen Kommunikation bei Veranstaltungen: Dolmetschmodus, Teamgröße und Technik — auch für Remote‑Formate. Zudem koordiniere ich die Abstimmung zwischen Team und Organisation.",
    },
    {
      title: "Teamzusammenstellung",
      description:
        "Ich stelle Teams passend zu Sprachkombinationen, Thema und Dauer zusammen und unterstütze bei Rollen- und Einsatzplanung (simultan, konsekutiv, remote).",
    },
    {
      title: "Technische Lösungen",
      bodyStyle: "written",
      paragraphs: [
        "Auf Wunsch unterstütze ich bei der Auswahl zuverlässiger Technik: ISO‑Kabinen, Empfängersysteme, RSI‑Setups. Hohe Audioqualität ist für Aufzeichnung, Broadcast und RSI entscheidend.",
      ],
    },
    {
      title: "Simultandolmetschen",
      bodyStyle: "written",
      paragraphs: [
        "Kernformat der Konferenz: Team in der Kabine dolmetscht mit kurzem Zeitversatz und wechselt alle 15–30 Minuten.",
        "Qualität zeigt sich in präzisen Zahlen/Namen, natürlichem Sprachfluss und stimmigen Reaktionen des Publikums.",
        "Teamaufbau und Koordination sind mein Schwerpunkt.",
      ],
    },
    {
      title: "Dolmetschen auf Messen",
      description:
        "Auf Messen ist Dolmetschen stark gefragt: Panels/PKs oft simultan, am Stand meist konsekutiv. Terminologie und Logistik vor Ort sind wichtig.",
    },
    {
      title: "Flüsterdolmetschen",
      description:
        "Leises Simultandolmetschen für 1–2 Personen (oder kleine Gruppen), teils mit Empfängersystem. Üblich sind zwei Dolmetscher:innen im Wechsel.",
    },
    {
      title: "Remote Simultaneous Interpreting (RSI)",
      bodyStyle: "written",
      paragraphs: [
        "RSI entstand mit virtuellen Formaten. Wichtig sind Audio/Video‑Qualität, Sicherheit und stabile Verbindung.",
        "Professionelle Headsets, redundantes Internet und passende Arbeitsumgebung/Hub sind zentral.",
        "Sorgfältige Vorbereitung ist entscheidend.",
      ],
    },
    {
      title: "Telefondolmetschen",
      description:
        "Für kurze Gespräche und Telefonkonferenzen, meist konsekutiv und ohne Video. Im öffentlichen Bereich teils auf Abruf, im privaten Bereich meist geplant.",
    },
    {
      title: "Behördendolmetschen",
      description:
        "Dolmetschen für Behörden erfordert Ethik, Neutralität, kulturelle Vermittlung sowie Kenntnis von Verwaltungssystemen und Terminologie.",
    },
    {
      title: "Verhandlungsdolmetschen",
      description:
        "Meist konsekutiv am Tisch. Je nach Komplexität arbeiten manchmal zwei Dolmetscher:innen zusammen.",
    },
    {
      title: "Medizinisches Dolmetschen",
      description:
        "Erfordert hohe Qualifikation, medizinische Terminologie und strikte Vertraulichkeit; typischerweise durch Profis mit Haftpflichtversicherung.",
    },
    {
      title: "Gerichtsdolmetschen",
      description:
        "In Deutschland gesetzlich geregelt (z. B. JVEG). Simultan oder konsekutiv, ggf. mit Empfängersystem. Juristische Terminologie und Vorbereitung sind wichtig.",
    },
    {
      title: "Dolmetschen beim Notar",
      description:
        "Sprachliche Begleitung bei Beurkundungen, Unterschriftsbeglaubigungen und Erläuterung von Dokumenten ohne Veränderung der Rechtswirkung.",
    },
  ],
};

