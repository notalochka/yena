import type { UiLanguage } from "./language";

export type WrittenTranslationCopy = {
  heroImageAlt: string;
  heroBreadcrumbServices: string;
  heroBreadcrumbAriaLabel: string;
  ctaOrder: string;
  ctaMore: string;
  heroBadge: string;
  topicsBadge: string;
  topicsTitle: string;
  heroTitle: string;
  heroParagraphs: string[];
  descriptionParagraphs: string[];
  accordionAriaLabel: string;
  priceCalculatorTitle: string;
};

export const writtenTranslationCopyByLang: Record<
  UiLanguage,
  WrittenTranslationCopy
> = {
  UA: {
    heroImageAlt: "Ілюстрація: письмовий переклад",
    heroBreadcrumbServices: "Послуги",
    heroBreadcrumbAriaLabel: " Письмовий переклад",
    ctaOrder: "Замовити переклад",
    ctaMore: "Дізнатися більше",
    heroTitle: "Письмовий переклад",
    heroBadge: "КАЛЬКУЛЯТОР",
    topicsBadge: "ТИПИ ПОСЛУГ",
    topicsTitle: "Послуги",
    heroParagraphs: [
      "В сучасному світі мало хто не користується Гугл перекладачем, DeepL або іншими подібними інструментами машинного перекладу. Здебільшого, також з власного досвіду, більшості відомо про те, яким хибним, формалістичним, дослівним і тому оманливим «правильним» може бути машинний переклад. Я, як фахівець з перекладу, глибоко переконана у життєздатності людського перекладу і відтоді моєї професії перекладача.",
    ],
    descriptionParagraphs: [
      "Звісно що, якщо ви довірите переклад вашого виписного епікризу з лікарні, або кошторису стоматолога до медичної страховки, або конфіденційної угоди про купівлю бізнесу Гуглу або DeepL, це – ваше рішення, ваша відповідальність і вам же нести наслідки подібного вашого рішення.",
      "З іншого боку, переклад виконаний кваліфікованим перекладачем – це не лише точність, вичерпність та влучна передача змісту, це також і збереження медичної, чи комерційної таємниці, використання, або свідоме уникання певних серверних потужностей, це захист персональних даних і належне видалення текстів після стікання строку їх зберігання.",
      "Переклад, виконаний перекладачем, не лише дорожчий, він триває довше аніж машинний переклад. Інколи може виникнути на перший погляд абсурдна ситуація, коли редагування машинного перекладу триває довше, аніж виконання з нуля фахівцем. Тоді постає умісне запитання: навіщо робити обхід через машинний переклад, якщо виконання і, особливо, редагування займає більше часу і зусиль. Таким чином, переклад, виконаний кваліфікованим перекладачем, попри його начебто «дороговизну» і довшу тривалість виконання, вже ж таки передає думку, а не окремі слова, відображає метафори, а не викидає їх з тексту, узгоджує і синхронізує термінологію, а не використовує кожного разу новий синонім, а то і просто однозвучне слово. Всі пам’ятаємо про «бавовну». З огляду на вищезазначене, Yena Translations і надалі пропонує професійний письмовий переклад як одну з ключових послуг.",
    ],
    accordionAriaLabel: "Напрями письмового перекладу",
    priceCalculatorTitle: "Ціновий калькулятор",
  },
  RU: {
    heroImageAlt: "Иллюстрация: письменный перевод",
    heroBreadcrumbServices: "Услуги",
    heroBreadcrumbAriaLabel: "Письменный перевод",
    ctaOrder: "Заказать перевод",
    ctaMore: "Узнать больше",
    heroTitle: "Письменный перевод",
    heroBadge: "КАЛЬКУЛЯТОР",
    topicsBadge: "ТИПЫ УСЛУГ",
    topicsTitle: "Услуги",
    heroParagraphs: [
      "В современном мире мало кто не пользуется Google переводчиком, DeepL или другими подобными инструментами машинного перевода. По большей части, также из собственного опыта, большинству известно, каким ошибочным, формалистическим, дословным и поэтому обманчиво «правильным» может быть машинный перевод. Я, как специалист по переводу, глубоко убеждена в жизнеспособности человеческого перевода и, следовательно, в моей профессии переводчика.",
    ],
    descriptionParagraphs: [
      "Конечно, если вы доверите перевод вашей выписки из стационара, сметы стоматолога для медицинской страховки или конфиденциального соглашения о покупке бизнеса Google или DeepL, это — ваше решение, ваша ответственность, и вам же нести последствия подобного вашего решения.",
      "С другой стороны, перевод, выполненный квалифицированным переводчиком, — это не только точность, полнота и удачная передача смысла, но и сохранение медицинской или коммерческой тайны, использование или сознательный отказ от определённых серверных мощностей, защита персональных данных и надлежащее удаление текстов по истечении срока хранения.",
      "Перевод, выполненный переводчиком, не только дороже — он длится дольше, чем машинный. Иногда может возникнуть на первый взгляд абсурдная ситуация, когда редактирование машинного перевода занимает больше времени, чем работа специалиста с нуля. Тогда уместен вопрос: зачем делать крюк через машинный перевод, если выполнение и особенно редактирование требуют больше времени и усилий. Таким образом, перевод квалифицированным переводчиком, несмотря на кажущуюся «дороговизну» и большую длительность, передаёт мысль, а не отдельные слова; сохраняет метафоры, а не выбрасывает их из текста; выстраивает и синхронизирует терминологию, а не подбирает каждый раз новый синоним или просто созвучное слово. Все помним про «хлопок». С учётом вышесказанного Yena Translations по-прежнему предлагает профессиональный письменный перевод как одну из ключевых услуг.",
    ],
    accordionAriaLabel: "Направления письменного перевода",
    priceCalculatorTitle: "Калькулятор цены",
  },
  EN: {
    heroImageAlt: "Illustration: written translation",
    heroBreadcrumbServices: "Services",
    heroBreadcrumbAriaLabel: "Written translation",
    ctaOrder: "Request a translation",
    ctaMore: "Learn more",
    heroTitle: "Written translation",
    heroBadge: "CALCULATOR",
    topicsBadge: "TYPES OF SERVICES",
    topicsTitle: "Services",
    heroParagraphs: [
      "In today's world, few people do not use Google Translate, DeepL, or similar machine translation tools. For the most part — also from personal experience — most know how flawed, formalistic, literal and therefore deceptively “correct” machine translation can be. As a translation professional, I am deeply convinced of the viability of human translation and, therefore, of my profession as a translator.",
    ],
    descriptionParagraphs: [
      "Of course, if you entrust the translation of your hospital discharge summary, a dentist's estimate to a health insurer, or a confidential business purchase agreement to Google or DeepL, that is your decision, your responsibility, and you bear the consequences of such a choice.",
      "On the other hand, translation by a qualified translator is not only accuracy, completeness and apt conveyance of meaning — it also means preserving medical or commercial confidentiality, using or consciously avoiding certain server capacities, protecting personal data, and properly deleting texts after the retention period expires.",
      "Translation by a human translator is not only more expensive — it also takes longer than machine translation. Sometimes an apparently absurd situation arises when editing machine output takes longer than a specialist working from scratch. Then the question arises: why take the detour through machine translation if execution and especially editing require more time and effort? Thus, translation by a qualified translator, despite its apparent “expense” and longer turnaround, conveys ideas rather than isolated words; preserves metaphors instead of stripping them from the text; and aligns and synchronises terminology instead of reaching for a new synonym each time — or simply a homophone. We all remember “cotton”. In light of the above, Yena Translations continues to offer professional written translation as one of its core services.",
    ],
    accordionAriaLabel: "Written translation focus areas",
    priceCalculatorTitle: "Price calculator",
  },
  DE: {
    heroImageAlt: "Illustration: schriftliche Übersetzung",
    heroBreadcrumbServices: "Leistungen",
    heroBreadcrumbAriaLabel: "Schriftliche Übersetzung",
    ctaOrder: "Übersetzung anfragen",
    ctaMore: "Mehr erfahren",
    heroTitle: "Schriftliche Übersetzung",
    heroBadge: "RECHNER",
    topicsBadge: "TYPEN DER LEISTUNGEN",
    topicsTitle: "Leistungen",
    heroParagraphs: [
      "In der heutigen Welt nutzt kaum jemand nicht Google Translate, DeepL oder ähnliche maschinelle Übersetzungstools. Meistens weiß man — auch aus eigener Erfahrung —, wie fehlerhaft, formalistisch, wörtlich und deshalb trügerisch „richtig“ maschinelle Übersetzungen sein können. Als Fachfrau für Übersetzung bin ich zutiefst überzeugt von der Lebensfähigkeit menschlicher Übersetzung und damit von meinem Beruf als Übersetzerin.",
    ],
    descriptionParagraphs: [
      "Natürlich: Wenn Sie die Übersetzung Ihrer Krankenhausentlassung, eines Zahnarztkostenvoranschlags für die Krankenkasse oder einer vertraulichen Vereinbarung zum Unternehmenskauf Google oder DeepL anvertrauen, ist das Ihre Entscheidung, Ihre Verantwortung — und Sie tragen die Folgen.",
      "Andererseits ist eine Übersetzung durch eine qualifizierte Übersetzerin nicht nur Genauigkeit, Vollständigkeit und treffende Sinnwiedergabe — sie bedeutet auch Wahrung medizinischer oder geschäftlicher Geheimnisse, bewussten Einsatz oder bewussten Verzicht auf bestimmte Serverkapazitäten, Schutz personenbezogener Daten und ordnungsgemäße Löschung von Texten nach Ablauf der Aufbewahrungsfrist.",
      "Eine Übersetzung durch eine Übersetzerin ist nicht nur teurer — sie dauert auch länger als maschinelle Übersetzung. Manchmal entsteht scheinbar absurd die Situation, dass die Nachbearbeitung maschineller Übersetzung länger dauert als die Arbeit einer Fachkraft von Grund auf. Dann stellt sich die Frage: Warum den Umweg über maschinelle Übersetzung, wenn Ausführung und vor allem Bearbeitung mehr Zeit und Mühe kosten? So vermittelt eine qualifizierte Übersetzerin trotz scheinbarer „Teuerung“ und längerer Dauer Gedanken statt einzelner Wörter; bewahrt Metaphern statt sie aus dem Text zu werfen; stimmt Terminologie ab, statt jedes Mal ein neues Synonym oder schlicht ein homophones Wort zu wählen. Wir erinnern uns alle an „Baumwolle“. Vor diesem Hintergrund bietet Yena Translations weiterhin professionelle schriftliche Übersetzung als eine der Kernleistungen an.",
    ],
    accordionAriaLabel: "Schwerpunkte der schriftlichen Übersetzung",
    priceCalculatorTitle: "Preisrechner",
  },
};
