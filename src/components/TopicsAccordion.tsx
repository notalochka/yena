"use client";

import { Source_Sans_3 } from "next/font/google";
import { useState } from "react";
import styles from "./TopicsAccordion.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

export type TopicItem = {
  title: string;
  /** Один абзац; ігнорується, якщо задано paragraphs */
  description?: string;
  /** Кілька абзаців замість одного description */
  paragraphs?: string[];
  /** Типографіка тексту в панелі (наприклад, письмовий переклад) */
  bodyStyle?: "default" | "written";
};

/** Теми для сторінки «Усний переклад» */
export const interpretingAccordionItems: TopicItem[] = [
  {
    title: "Консультації з конференц-перекладу",
    description:
      "Як старший перекладач я надаю клієнтам кваліфіковані консультації щодо усної багатомовної комунікації. Завжди, коли під час міжнародних заходів використовується більше однієї мови, постає потреба у міжмовному посередництві. Я докладно проконсультую вас щодо вибору типу перекладу, складу групи кваліфікованих перекладачів та відповідних технічних засобів для комунікації під час заходу, у тому числі у випадках віддаленого перекладу. Як консультант-перекладач я забезпечую зв’язок між командою перекладачів та організатором. Звичайно, ми радо допоможемо вам з перекладом письмового спілкування під час підготовки заходу.",
  },
  {
    title: "Формування команди",
    description:
      "Підбираю перекладачів за мовними парами, досвідом у вашій галузі та типом заходу. Узгоджую зміни, ролі «на лінії» і резерв, організовую спільну підготовку матеріалів і термінології, щоб команда працювала злагоджено з першої хвилини до завершення програми.",
  },
  {
    title: "Надання технічних засобів",
    description:
      "Підказую, яке обладнання потрібне під обраний формат: кабінки, інфраструктура залу, радіорозподіл, гарнітури, мікрофони чи рішення для віддаленого підключення. Можу скоординувати вимоги до майданчику з технічною службою, щоб звук і канали перекладу були стабільними протягом усього заходу.",
  },
  {
    title: "Синхронний переклад",
    description:
      "Класичний синхронний переклад у кабінках для великих аудиторій: оригінал і переклад звучать паралельно, слухач обирає мову на приймачі. Підходить для конференцій, форумів і офіційних сесій, де важлива швидкість і повнота подачі без пауз між репліками.",
  },
  {
    title: "Переклад на виставках",
    description:
      "Супровід на стендах, короткі презентації продукту та перемовини з відвідувачами в шумному і динамічному середовищі. Формат узгоджується з вашими цілями — від чергування перекладачів на стенді до супроводу делегації між зонами експозиції.",
  },
  {
    title: "Нашіптування",
    description:
      "Шепітний переклад для одного слухача або невеликої групи без кабінки: перекладач працює поруч і передає зміст тихо, у реальному часі. Зручно для вузьких нарад, супроводу під час огляду об’єктів або коли технічне оснащення мінімальне.",
  },
  {
    title: "Віддалений синхронний переклад",
    description:
      "Синхронний переклад із підключенням перекладачів онлайн: вони працюють із віддаленої студії або дому, а учасники чують канал так само, як при звичайній кабінній схемі. Дозволяє залучити потрібні мовні пари без логістики подорожей і поєднується з гібридними та повністю дистанційними подіями.",
  },
  {
    title: "Телефонний переклад",
    description:
      "Переклад у телефонному або відеозв’язку: підтримка розмов з установами, партнерами чи клієнтами, коли сторони підключені з різних місць. Забезпечую послідовну й точну передачу реплік, домовляюсь про черговість слів і короткі паузи для синхрону з перекладачем.",
  },
  {
    title: "Суспільний переклад",
    description:
      "Переклад на заходах громадського й культурного характеру: дискусії, презентації для широкої аудиторії, зустрічі з експертами, робота зі ЗМІ та NGO. Акцент на зрозумілій, нейтральній подачі для різних слухачів і на збереженні тону публічної комунікації.",
  },
  {
    title: "Переклад під час переговорів",
    description:
      "Послідовний або змішаний формат для столу переговорів: перекладач допомагає сторонам узгоджувати умови, фіксувати домовленості та уникати двозначностей. Підходить для комерційних зустрічей, партнерських сесій і багатораундових дискусій.",
  },
  {
    title: "Переклад у сфері охорони здоров'я",
    description:
      "Супровід консультацій, обстежень і пояснень між пацієнтом і медичним персоналом з дотриманням конфіденційності та акуратності формулювань. Узгоджую стиль подачі з контекстом — від планового прийому до складних роз’яснень.",
  },
  {
    title: "Переклад для судових органів",
    description:
      "Усний переклад у судових процедурах відповідно до вимог процесу: чітка послідовна подача показань, запитань і рішень, дисципліна черговості виступів. Формат і роль перекладача узгоджуються з інстанцією та типом справи.",
  },
  {
    title: "Переклад у нотаріуса",
    description:
      "Мовний супровід під час укладення угод, засвідчення підписів і пояснення змісту документів сторонам. Перекладач забезпечує взаєморозуміння між учасниками акту, не змінюючи юридичного навантаження офіційних формулювань.",
  },
];

export type TopicsAccordionVariant = "orange" | "blue" | "olive";

export type TopicsAccordionProps = {
  items: TopicItem[];
  variant?: TopicsAccordionVariant;
  "aria-label"?: string;
  /** Префікс для id панелей (якщо на сторінці кілька акордеонів) */
  idPrefix?: string;
};

export default function TopicsAccordion({
  items,
  variant = "orange",
  "aria-label": ariaLabel = "Теми",
  idPrefix = "topics-accordion",
}: TopicsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sectionClass =
    variant === "blue"
      ? `${styles.section} ${styles.sectionBlue}`
      : variant === "olive"
      ? `${styles.section} ${styles.sectionOlive}`
      : `${styles.section} ${styles.sectionOrange}`;

  const dividerClass =
    variant === "blue" ? styles.dividerBlue : variant === "olive" ? styles.dividerOlive : styles.dividerOrange;

  return (
    <section
      className={`${sourceSans.className} ${sectionClass}`}
      aria-label={ariaLabel}
    >
      <ul className={styles.list}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${idPrefix}-panel-${index}`;
          const triggerId = `${idPrefix}-trigger-${index}`;
          const descClass =
            item.bodyStyle === "written"
              ? styles.descriptionWritten
              : styles.description;
          return (
            <li key={`${item.title}-${index}`} className={styles.item}>
              <div className={styles.itemInner}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  id={triggerId}
                  onClick={() => {
                    setOpenIndex(isOpen ? null : index);
                  }}
                >
                  <span className={styles.title}>{item.title}</span>
                  <span
                    className={`${styles.iconWrap} ${isOpen ? styles.iconWrapOpen : ""}`}
                    aria-hidden="true"
                  >
                    <span className={styles.iconLineH} />
                    <span className={styles.iconLineV} />
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={styles.panel}
                  >
                    {item.paragraphs?.length ? (
                      item.paragraphs.map((text, pIndex) => (
                        <p key={pIndex} className={descClass}>
                          {text}
                        </p>
                      ))
                    ) : item.description != null ? (
                      <p className={descClass}>{item.description}</p>
                    ) : null}
                  </div>
                )}
              </div>
              <div className={`${styles.divider} ${dividerClass}`} aria-hidden />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
