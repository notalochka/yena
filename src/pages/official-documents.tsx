import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePageReveal } from "@/hooks/usePageReveal";
import revealStyles from "@/styles/pageReveal.module.css";
import { Source_Sans_3 } from "next/font/google";
import styles from "./official-documents.module.css";
import TopicsAccordion, {
  type TopicItem,
} from "@/components/TopicsAccordion";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
});

const officialDocumentTypes: { icon: string; label: string }[] = [
  {
    icon: "/official_icon1.png",
    label:
      "РАЦС (свідоцтво про народження, шлюб, зміну прізвища, тощо)",
  },
  {
    icon: "/official_icon2.png",
    label:
      "Муніципальні сервісні центри (свідоцтво про реєстрацію, посвідчення водія)",
  },
  {
    icon: "/official_icon3.png",
    label: "Суди, органи юстиції (рішення про розірвання шлюбу)",
  },
  {
    icon: "/official_icon4.png",
    label:
      "Документи про освіту (дипломи, атестати, кваліфікаційні сертифікати, тощо)",
  },
  {
    icon: "/official_icon5.png",
    label:
      "Професійні посвідчення (трудові книжки, характеристики з роботи)",
  },
  {
    icon: "/official_icon6.png",
    label: "Медицина (лікарські довідки, епікризи, ветеринарні довідки)",
  },
];

const officialDocumentsAccordionItems: TopicItem[] = [
  {
    title: "РАЦС",
    bodyStyle: "written",
    paragraphs: [
      "Переклад здійснюється для документів, виданих українською та російською мовами. Документи, видані німецькою мовою, до перекладу не приймаються.",
      "Перелік документів: Атестат про повну загальну середню освіту, Атестат про повну загальну середню освіту, засвідчений апостилем, Додаток до атестата про повну загальну середню освіту, Додаток до атестата, засвідчений апостилем, Атестат з додатком, засвідчений апостилем, Диплом, Диплом, засвідчений апостилем, Додаток до диплома, Додаток до диплома, засвідчений апостилем, Атестат музичної школи, Довідка з університету",
    ],
  },
  {
    title: "Освіта",
    description:
      "Дипломи, додатки до них, атестати, академічні довідки, сертифікати та інші документи про освіту подаються до університетів, роботодавців і професійних асоціацій. Переклад виконується з урахуванням назв спеціальностей, балів і ступенів так, щоб приймаюча сторона могла однозначно зіставити ваш освітній шлях із власними вимогами.",
  },
  {
    title: "Державна адміністрація",
    description:
      "Документи з муніципальних і державних сервісів — реєстрація місця проживання, посвідчення водія, довідки з органів влади тощо — перекладаються для подання до іноземних установ або супроводу заяв. Важливо точно передати назви органів, номери, дати та статус документа, щоб уникнути зайвих запитів і затримок.",
  },
  {
    title: "Суди",
    description:
      "Рішення судів, витяги, судові листи та інші процесуальні документи потребують вичерпного й нейтрального перекладу без спрощення юридичних формулювань. Текст узгоджується з метою подання: сімейні справи, цивільні чи адміністративні провадження — з відповідною термінологією.",
  },
  {
    title: "Трудові документи",
    description:
      "Трудові книжки, накази, довідки про стаж, характеристики з місця роботи та інші кадрові документи перекладаються для працевлаштування, пенсії чи ліцензування професії за кордоном. Зберігається хронологія, посади, підстави та реквізити роботодавця так, як це зафіксовано в оригіналі.",
  },
  {
    title: "Медицина",
    description:
      "Виписки з історії хвороби, епікризи, довідки лікарів, результати обстежень і ветеринарні документи перекладаються для страхових компаній, лікарів за кордоном або офіційних інстанцій. Увага приділяється діагнозам, датам, дозам і формулюванням без зміни змісту, який може мати правове або медичне значення.",
  },
];

export default function OfficialDocumentsPage() {
  usePageReveal();

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Header />
      <section className={styles.heroSection}>
        <div
          data-page-reveal
          className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
        >
          <div className={styles.heroContainer}>
            <div className={`${sourceSans.className} ${styles.heroContent}`}>
              <h1 className={styles.heroTitle}>
              Переклад офіційних документів
              </h1>

              <div className={styles.heroBody}>
                <div className={styles.heroActions}>
                  <a
                    className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
                    href="#"
                  >
                    Замовити переклад
                  </a>
                  <a
                    className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
                    href="#"
                  >
                    Дізнатися більше
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <ImageWithPlaceholder
                src="/official.png"
                alt="Переклад офіційних документів"
                width={650}
                height={430}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.introSection} ${revealStyles.reveal}`}
      >
        <p className={styles.introLead}>
        Я є присяжним перекладачем німецької, української та російської мови. Крім того, на підставі мого британського диплому з перекладу для державних та муніципальних служб я вповноважена на виконання засвідчених перекладів на англійську мову та з неї на українську або російську. Я виконую переклади відповідно до стандарту ISO 9: 1995 (E) або Постанови Кабінету міністрів України від 27 січня 2010 р. № 55. Крім того, я маю право посвідчувати їх точність та вичерпність. Йдеться як про переклади на німецьку мову, призначені для німецьких державних установ, так і про переклади на українську, російську та англійську для державних установ за кордоном. 
        </p>
        <p className={styles.introLead}>
        Я пропоную своїм клієнтам 10-річний сервіс. Це означає, що одного разу перекладений документ ви можете повторно замовляти протягом 10 років лише з оплатою виготовлення, засвідчення та накладних витрат.
        </p>
        <p className={styles.introLead}>
        У засвідчених перекладах російською та українською написання власних імен кирилицею може за бажанням замовника здійснюватися не тільки відповідно до вищезазначеного стандарту ISO або Постанови КМУ, але й згідно з вимогами транслітерації інших країн.
        </p>
        <p className={styles.introLead}>
        У засвідчених перекладах німецькою та англійською, паралельно з транслітерацією імен з кирилиці латинським алфавітом відповідно до стандарту ISO або Постанови Кабінету Міністрів України, у перекладеному документі може наводитися написання імен згідно з закордонним паспортом особи, якій виданий офіційний документ. Для цього мені потрібно підтвердження відповідного написання імен на підставі офіційного посвідчення особи з фотографією.
        </p>
        <p className={styles.introLead}>
        Зрештою, за бажанням замовника на засвідчений переклад може бути проставлений апостиль. Це, зокрема, необхідно, якщо переклад документа виданого в Німеччині призначений для використання в іншій країні.
        </p>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.docTypesSection} ${revealStyles.reveal}`}
        aria-labelledby="official-doc-types-heading"
      >
        <h2 id="official-doc-types-heading" className={styles.docTypesTitle}>
          Основні види офіційних документів, які я перекладаю:
        </h2>
        <div className={styles.docTypesCard}>
          <ul className={styles.docTypesGrid}>
            {officialDocumentTypes.map((item) => (
              <li key={item.icon} className={styles.docTypesItem}>
                <ImageWithPlaceholder
                  src={item.icon}
                  alt=""
                  width={120}
                  height={120}
                  className={styles.docTypesIcon}
                  inline
                />
                <p className={styles.docTypesCaption}>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.docTypesFootnote}>
        Для перекладу офіційних документів ми маємо окремий сайт, Силабот: 
        <a className={styles.docTypesLink} href="https://silabot.de/uk/homepage/" target="_blank" rel="noopener noreferrer">
        <span> перейти за посиланням</span>
        </a>.
        </p>
        <p className={styles.docTypesFootnote}>
        Ми його спеціально створили для перекладу офіційних документів, які потребують засвідчення.
        </p>
      </section>
      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
      >
        <TopicsAccordion
          items={officialDocumentsAccordionItems}
          variant="olive"
          aria-label="Основні види офіційних документів, які я перекладаю"
          idPrefix="official-documents-accordion"
        />
      </div>
      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
      >
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
