import type { UiLanguage } from "./language";

export type WrittenTranslationCopy = {
  heroImageAlt: string;
  ctaOrder: string;
  ctaMore: string;
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
    ctaOrder: "Замовити переклад",
    ctaMore: "Дізнатися більше",
    heroTitle: "Письмовий переклад",
    heroParagraphs: [
      "В сучасному світі мало хто не користується Гугл перекладачем, DeepL або іншими подібними інструментами машинного перекладу. Здебільшого, також з власному досвіду, більшості відомо про те, яким хибним, формалістичним, дослівним і тому оманливим «правильним» може бути машинний переклад. Я як фахівець з перекладу глибоко переконана у життєздатності людського перекладу і відтоді моєї професії перекладача. Звісно що, якщо ви довірите переклад вашого виписного епікризу з лікарні, або кошторис стоматолога до медичної страховки, або конфіденційну угоду про купівлю бізнесу Гуглу або DeepL, це – ваше рішення, ваша відповідальність і вам же нести наслідки подібного вашого рішення.",
    ],
    descriptionParagraphs: [
      "З іншого боку, переклад виконаний кваліфікованим перекладачем – це не лише точність, вичерпність та влучна передача змісту, це також і збереження медичної, чи комерційної таємниці, використання, або свідоме уникання певних серверних потужностей, це захист персональних даних і належне видалення текстів після стікання строку їх зберігання.",
      "Переклад, виконаний перекладачем, не лише дорожчий, він триває довше аніж машинний переклад. Інколи може виникнути на перший погляд абсурдна ситуація, коли редагування машинного перекладу триває довше, аніж виконання з нуля фахівцем. Тоді постає умісне запитання: навіщо робити обхід через машинний переклад, якщо виконання і, особливо, редагування займає більше часу і зусиль. Таким чином, переклад, виконаний кваліфікованим перекладачем, попри його начебто «дороговизну» і довшу тривалість виконання, вже ж таки передає думку, а не окремі слова, відображає метафори, а не викидає їх з тексту, узгоджує і синхронізує термінологію, а не використовує кожного разу новий синонім, а то і просто однозвучне слово. Всі пам’ятаємо про «бавовну». З огляду на вищезазначене, Yena Translations і надалі пропонує професійний письмовий переклад як одну з ключових послуг.",
    ],
    accordionAriaLabel: "Напрями письмового перекладу",
    priceCalculatorTitle: "Калькулятор ціни",
  },
  RU: {
    heroImageAlt: "Иллюстрация: письменный перевод",
    ctaOrder: "Заказать перевод",
    ctaMore: "Узнать больше",
    heroTitle: "Письменный перевод",
    heroParagraphs: [
      "В современном мире почти все пользуются Google Translate, DeepL или аналогичными системами машинного перевода. По опыту многим известно, насколько ошибочным, формальным, дословным и поэтому обманчиво «правильным» может быть машинный перевод. Как специалист по переводу я убеждена в жизнеспособности человеческого перевода и в своей профессии переводчика. Разумеется, если вы доверите перевод выписки из больницы, сметы стоматолога для страховой или конфиденциального договора о продаже бизнеса Google или DeepL — это ваше решение, ваша ответственность и последствия тоже на вас.",
    ],
    descriptionParagraphs: [
      "С другой стороны, перевод, выполненный квалифицированным переводчиком, — это не только точность, полнота и удачная передача смысла, но и сохранение медицинской или коммерческой тайны, использование или сознательный отказ от определённых серверных мощностей, защита персональных данных и надлежащее удаление текстов по истечении срока хранения.",
      "Перевод, сделанный переводчиком, не только дороже, он длится дольше, чем машинный. Иногда кажется абсурдной ситуация, когда редактирование машинного перевода занимает больше времени, чем работа специалиста с нуля. Тогда уместен вопрос: зачем делать крюк через машинный перевод, если выполнение и особенно редактирование требуют больше времени и усилий. Таким образом, перевод квалифицированным переводчиком, несмотря на кажущуюся «дороговизну» и большую длительность, передаёт мысль, а не отдельные слова; сохраняет метафоры; выстраивает терминологию, а не подбирает каждый раз новый синоним. Со всем этим Yena Translations по-прежнему предлагает профессиональный письменный перевод как одну из ключевых услуг.",
    ],
    accordionAriaLabel: "Направления письменного перевода",
    priceCalculatorTitle: "Калькулятор цены",
  },
  EN: {
    heroImageAlt: "Illustration: written translation",
    ctaOrder: "Request a translation",
    ctaMore: "Learn more",
    heroTitle: "Written translation",
    heroParagraphs: [
      "Today almost everyone uses Google Translate, DeepL, or similar machine translation tools. From experience, most people also know how misleadingly “correct” machine output can be — formalistic, literal, and risky. As a language professional I firmly believe in human translation and in my work as a translator. Of course, if you choose to send your hospital discharge summary, a dentist’s estimate to an insurer, or a confidential business sale agreement through Google or DeepL, that is your decision, your responsibility, and your consequences.",
    ],
    descriptionParagraphs: [
      "By contrast, translation by a qualified translator is not only accuracy, completeness, and faithful meaning — it also means protecting medical or business confidentiality, consciously using or avoiding certain server infrastructures, safeguarding personal data, and properly deleting texts after the retention period.",
      "Human translation costs more and takes longer than machine translation. Sometimes editing machine output takes even longer than translating from scratch — which raises the question why take the detour at all. A qualified translator conveys ideas, not isolated words; preserves metaphors instead of stripping them; and keeps terminology consistent. For these reasons Yena Translations continues to offer professional written translation as a core service.",
    ],
    accordionAriaLabel: "Written translation focus areas",
    priceCalculatorTitle: "Price calculator",
  },
  DE: {
    heroImageAlt: "Illustration: schriftliche Übersetzung",
    ctaOrder: "Übersetzung anfragen",
    ctaMore: "Mehr erfahren",
    heroTitle: "Schriftliche Übersetzung",
    heroParagraphs: [
      "Heute nutzt fast jeder Google Translate, DeepL oder ähnliche MT-Tools. Aus Erfahrung weiß man, wie formalistisch, wörtlich und trügerisch „richtig“ maschinelle Übersetzungen sein können. Als Fachfrau für Übersetzung glaube ich fest an menschliche Übersetzung und an meinen Beruf. Natürlich: Wenn Sie Ihre Krankenhausentlassung, einen Zahnarztkostenvoranschlag für die Versicherung oder einen vertraulichen Unternehmensverkauf Google oder DeepL anvertrauen — das ist Ihre Entscheidung, Ihre Verantwortung und Ihre Folgen.",
    ],
    descriptionParagraphs: [
      "Eine qualifizierte Übersetzung bedeutet nicht nur Genauigkeit und sinngetreue Wiedergabe, sondern auch Wahrung von medizinischem oder Geschäftsgeheimnis, bewusster Umgang mit Server-Infrastruktur, Schutz personenbezogener Daten und ordnungsgemäße Löschung nach Ablauf der Aufbewahrungsfrist.",
      "Menschliche Übersetzung ist teurer und dauert länger als maschinelle. Manchmal dauert die Nachbearbeitung von MT länger als eine Übersetzung von Grund auf — dann stellt sich die Frage nach dem Umweg. Qualifizierte Übersetzer:innen vermitteln Gedanken, nicht nur Wörter; bewahren Metaphern; halten Terminologie konsistent. Deshalb bietet Yena Translations professionelle schriftliche Übersetzung weiterhin als Kernleistung an.",
    ],
    accordionAriaLabel: "Schwerpunkte der schriftlichen Übersetzung",
    priceCalculatorTitle: "Preisrechner",
  },
};
