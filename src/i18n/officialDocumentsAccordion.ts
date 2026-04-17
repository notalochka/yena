import type { UiLanguage } from "./language";
import type { TopicItem } from "@/components/TopicsAccordion";

export const officialDocumentsAccordionItemsByLang: Record<
  UiLanguage,
  TopicItem[]
> = {
  UA: [
    {
      title: "РАЦС",
      description:
        "Переклад з німецької можливий для таких документів: свідоцтво про походження, витяг з запису про розірвання шлюбу, свідоцтво про зміну імені/прізвища. Переклад з української або з російської доступний для документів про дошлюбне ім’я/прізвище (у т.ч. з апостилем), довідок/свідоцтв про відсутність перешкод для укладання шлюбу (у т.ч. з апостилем), свідоцтв про розірвання шлюбу (у т.ч. з апостилем), свідоцтв про народження (українська; а з апостилем — українська й російська), а також свідоцтв про шлюб (у т.ч. з апостилем). Свідоцтво про смерть приймається українською, російською та німецькою, а свідоцтво про смерть з апостилем — українською або російською (без німецької).",
    },
    {
      title: "Освіта",
      description:
        "Переклад з української або з російської доступний для всіх перелічених документів: атестат про повну загальну середню освіту (у т.ч. з апостилем), додаток до атестату (у т.ч. з апостилем), атестат з додатком засвідчений апостилем, диплом (у т.ч. з апостилем), додаток до диплому (у т.ч. з апостилем), атестат музичної школи та довідка з університету. З німецької мови переклад для жодного з цих документів не надається.",
    },
    {
      title: "Державна адміністрація",
      description:
        "Переклад з німецької можливий для таких документів: свідоцтво про статус резидента, довідка з місця проживання (у т.ч. з місця проживання (Німеччина)), тимчасовий дозвіл на проживання, свідоцтво про натуралізацію (Німеччина), запевнення у прийнятті у громадянство (Німеччина), довідка про несудимість, посвідчення особи (Німеччина) та закордонний паспорт. Переклад з української або з російської доступний для документів про вихід з громадянства (Україна/Білорусь), а також для розгорнутої довідки про несудимість. Дозвіл на виїзд неповнолітніх дітей закордон приймається лише російською (для одного варіанту), а інший варіант цього документа не приймається жодною з трьох мов. Водійське посвідчення приймається українською, російською та німецькою. Окремо: внутрішній паспорт (Україна) — лише українською, а внутрішній паспорт (Росія/Білорусь) — лише російською.",
    },
    {
      title: "Суди",
      description:
        "Переклад апостиля можливий з української, російської та німецької. Послуга «апостиль замовити (Німеччина)» не доступна (не приймається жодною з трьох мов). Постанову суду про розірвання шлюбу можна перекласти з української або з російської, але не з німецької.",
    },
    {
      title: "Трудові документи",
      description:
        "Переклад трудової книжки та довідки про доходи (у т.ч. засвідченої довідки про доходи) можливий з української або з російської. З німецької для цих документів переклад не передбачений.",
    },
    {
      title: "Медицина",
      description:
        "Переклад ветеринарного паспорта міжнародного зразка можливий з української або з російської. Переклад сертифіката лікаря-спеціаліста можливий лише з української.",
    },
  ],
  RU: [
    {
      title: "ЗАГС",
      description:
        "Перевод с немецкого возможен для: свидетельства о происхождении, выписки из акта о расторжении брака, свидетельства о смене имени/фамилии. Перевод с украинского или русского доступен для документов о добрачном имени/фамилии (в т.ч. с апостилем), справок/свидетельств об отсутствии препятствий для брака (в т.ч. с апостилем), свидетельств о расторжении брака (в т.ч. с апостилем), свидетельств о рождении (украинский; с апостилем — украинский и русский), а также свидетельств о браке (в т.ч. с апостилем). Свидетельство о смерти принимается на украинском, русском и немецком; свидетельство о смерти с апостилем — на украинском или русском (немецкий не принимается).",
    },
    {
      title: "Образование",
      description:
        "Перевод с украинского или русского доступен для всех перечисленных документов: аттестата о полном общем среднем образовании (в т.ч. с апостилем), приложения к аттестату (в т.ч. с апостилем), аттестата с приложением, заверенного апостилем, диплома (в т.ч. с апостилем), приложения к диплому (в т.ч. с апостилем), аттестата музыкальной школы и справки из вуза. С немецкого перевод ни для одного из этих документов не предоставляется.",
    },
    {
      title: "Государственное управление",
      description:
        "Перевод с немецкого возможен для: свидетельства о статусе резидента, справки о месте жительства (в т.ч. о месте жительства в Германии), временного вида на жительство, свидетельства о натурализации (Германия), подтверждения принятия в гражданство (Германия), справки о несудимости, удостоверения личности (Германия) и загранпаспорта. С украинского или русского доступен перевод документов о выходе из гражданства (Украина/Беларусь), а также развёрнутой справки о несудимости. Разрешение на выезд несовершеннолетних детей за границу принимается только на русском (для одного варианта); другой вариант не принимается ни на одном из трёх языков. Водительское удостоверение принимается на украинском, русском и немецком. Отдельно: внутренний паспорт (Украина) — только на украинском; внутренний паспорт (Россия/Беларусь) — только на русском.",
    },
    {
      title: "Суды",
      description:
        "Перевод апостиля возможен с украинского, русского и немецкого. Услуга «заказать апостиль (Германия)» недоступна (не принимается ни на одном из трёх языков). Постановление суда о расторжении брака можно перевести с украинского или русского, но не с немецкого.",
    },
    {
      title: "Трудовые документы",
      description:
        "Перевод трудовой книжки и справки о доходах (в т.ч. заверенной справки о доходах) возможен с украинского или русского. С немецкого для этих документов перевод не предусмотрен.",
    },
    {
      title: "Медицина",
      description:
        "Перевод ветеринарного паспорта международного образца возможен с украинского или русского. Перевод сертификата врача-специалиста возможен только с украинского.",
    },
  ],
  EN: [
    {
      title: "Civil registry (standesamt)",
      description:
        "From German, translation is possible for: certificate of descent, excerpt from the marriage dissolution record, certificate of name/surname change. From Ukrainian or Russian, translation is available for documents on pre-marital name/surname (incl. with apostille), certificates of no impediment to marriage (incl. with apostille), certificates of divorce (incl. with apostille), birth certificates (Ukrainian; with apostille — Ukrainian and Russian), and marriage certificates (incl. with apostille). Death certificates are accepted in Ukrainian, Russian, and German; a death certificate with apostille is accepted in Ukrainian or Russian only (not German).",
    },
    {
      title: "Education",
      description:
        "From Ukrainian or Russian, translation is available for all listed documents: certificate of complete general secondary education (incl. with apostille), supplement to the certificate (incl. with apostille), certificate with supplement certified with apostille, diploma (incl. with apostille), diploma supplement (incl. with apostille), music school certificate, and university certificate. From German, no translation is provided for any of these documents.",
    },
    {
      title: "Public administration",
      description:
        "From German, translation is possible for: certificate of resident status, certificate of residence (incl. residence in Germany), temporary residence permit, naturalisation certificate (Germany), assurance of acceptance into citizenship (Germany), criminal record certificate, ID card (Germany), and passport. From Ukrainian or Russian, translation is available for documents on renunciation of citizenship (Ukraine/Belarus) and for an extended criminal record certificate. Permission for minors to travel abroad is accepted in Russian only (one variant); the other variant is not accepted in any of the three languages. Driving licences are accepted in Ukrainian, Russian, and German. Separately: internal passport (Ukraine) — Ukrainian only; internal passport (Russia/Belarus) — Russian only.",
    },
    {
      title: "Courts",
      description:
        "Translation of an apostille is possible from Ukrainian, Russian, and German. The “order apostille (Germany)” service is not available (not accepted in any of the three languages). A court decision on divorce may be translated from Ukrainian or Russian, but not from German.",
    },
    {
      title: "Employment documents",
      description:
        "Translation of the employment record book and income certificate (incl. certified income certificate) is possible from Ukrainian or Russian. From German, translation is not provided for these documents.",
    },
    {
      title: "Healthcare",
      description:
        "Translation of an international-format veterinary passport is possible from Ukrainian or Russian. Translation of a specialist physician’s certificate is possible from Ukrainian only.",
    },
  ],
  DE: [
    {
      title: "Standesamt",
      description:
        "Aus dem Deutschen ist eine Übersetzung u. a. möglich für: Abstammungsurkunde, Auszug aus dem Register zur Auflösung der Ehe, Urkunde über Namens-/Vornamensänderung. Aus dem Ukrainischen oder Russischen sind Übersetzungen u. a. möglich für Dokumente zum Ehenamen vor der Ehe (ggf. mit Apostille), Bescheinigungen/Urkunden über Ehefähigkeit (ggf. mit Apostille), Scheidungsurkunden (ggf. mit Apostille), Geburtsurkunden (ukrainisch; mit Apostille — Ukrainisch und Russisch) sowie Heiratsurkunden (ggf. mit Apostille). Sterbeurkunden werden auf Ukrainisch, Russisch und Deutsch angenommen; Sterbeurkunden mit Apostille nur auf Ukrainisch oder Russisch (nicht Deutsch).",
    },
    {
      title: "Bildung",
      description:
        "Aus dem Ukrainischen oder Russischen sind Übersetzungen für alle genannten Dokumente möglich: Zeugnis über den allgemeinen Sekundarschulabschluss (ggf. mit Apostille), Anhang zum Zeugnis (ggf. mit Apostille), Zeugnis mit apostilliertem Anhang, Diplom (ggf. mit Apostille), Diplomanhang (ggf. mit Apostille), Musikschulzeugnis und Hochschulbescheinigung. Aus dem Deutschen wird für keines dieser Dokumente eine Übersetzung angeboten.",
    },
    {
      title: "Staatsverwaltung",
      description:
        "Aus dem Deutschen ist u. a. möglich: Bescheinigung über den Aufenthaltsstatus, Meldebescheinigung (inkl. Wohnsitz in Deutschland), Aufenthaltserlaubnis auf Zeit, Einbürgerungsurkunde (Deutschland), Zusicherung der Einbürgerung (Deutschland), Führungszeugnis, Personalausweis (Deutschland) und Reisepass. Aus dem Ukrainischen oder Russischen u. a. für Dokumente zum Verzicht auf die Staatsangehörigkeit (Ukraine/Belarus) sowie für eine ausführliche Führungszeugnis-Bescheinigung. Die Genehmigung zur Ausreise Minderjähriger wird nur auf Russisch (eine Variante) angenommen; die andere Variante wird in keiner der drei Sprachen akzeptiert. Führerscheine werden auf Ukrainisch, Russisch und Deutsch angenommen. Separat: Innenpass (Ukraine) — nur Ukrainisch; Innenpass (Russland/Belarus) — nur Russisch.",
    },
    {
      title: "Gerichte",
      description:
        "Die Übersetzung einer Apostille ist aus Ukrainisch, Russisch und Deutsch möglich. Der Service „Apostille bestellen (Deutschland)“ ist nicht verfügbar (wird in keiner der drei Sprachen angenommen). Ein gerichtlicher Beschluss über die Scheidung kann aus Ukrainisch oder Russisch übersetzt werden, nicht jedoch aus dem Deutschen.",
    },
    {
      title: "Arbeitsunterlagen",
      description:
        "Übersetzung des Arbeitsbuches und der Einkommensbescheinigung (einschließlich beglaubigter Einkommensbescheinigung) ist aus Ukrainisch oder Russisch möglich. Aus dem Deutschen ist für diese Dokumente keine Übersetzung vorgesehen.",
    },
    {
      title: "Medizin",
      description:
        "Die Übersetzung eines Tierpasses in internationaler Form ist aus Ukrainisch oder Russisch möglich. Die Übersetzung eines Facharztzertifikats ist nur aus dem Ukrainischen möglich.",
    },
  ],
};
