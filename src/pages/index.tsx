import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { useState } from "react";
import styles from "./index.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "800"],
});

const serviceCards = [
  {
    title: "Усний переклад",
    description:
      "Я надаю професійні послуги усного перекладу з фокусом на конференц-переклад, багатомовні заходи та офіційні контексти. Працюю з англійської, німецької, української та російської мов у різних форматах — синхронному, послідовному, віддаленому та переговорному перекладі.",
    extraDescription:
      "Маю спеціалізовану освіту конференц-перекладача, багаторічний практичний досвід та міжнародну підготовку в країнах моїх робочих мов. Супроводжую заходи повністю: від консультацій щодо формату перекладу, формування команди та підбору технічних рішень — до координації роботи перекладачів під час події.",
    image: "/main_photo3.png",
    imageAlt: "Усний переклад",
    colorClass: "serviceCardOrange",
    accentClass: "serviceAccentOrange",
  },
  {
    title: "Письмовий переклад",
    description:
      "Ми надаємо професійні послуги письмового перекладу спеціалізованих, юридичних, технічних та публічних текстів. Працюємо з документами для помовної роботи (у договорах, фаховими та технічними матеріалами та контентом для веб-сайтів).",
    extraDescription:
      "Кожен проєкт реалізується індивідуально: ми формуємо команду перекладачів із відповідною галузевою спеціалізацією, редактора та фахівця з верстки. Це дозволяє зберігати термінологічну точність, внутрішню узгодженість тексту та високу якість готового продукту — від робочого документа до повністю зверстаної публікації.",
    image: "/main_photo4.png",
    imageAlt: "Письмовий переклад",
    colorClass: "serviceCardBlue",
    accentClass: "serviceAccentBlue",
  },
  {
    title: "Переклад офіційних документів",
    description:
      "Як присяжний перекладач української та російської мов, а також уповноважено на виконання засвідчених перекладів з та на німецьку мову у Гіссені Бундесланду Гессен. Це переклади для офіційних служб, для правових процедур та послуг у Німеччині.",
    extraDescription:
      "Засвідчені переклади виконуються відповідно до стандарту ISO 9:1995 (E). За потреби можливе альтернативне написання власних імен — згідно з вимогами транслітерації України або Російської Федерації, а також відповідно до написання імен у закордонному паспорті власника документа за умови надання офіційного посвідчення особи з фотографією.",
    image: "/main_photo5.png",
    imageAlt: "Переклад офіційних документів",
    colorClass: "serviceCardOlive",
    accentClass: "serviceAccentOlive",
  },
  {
    title: "Синхронний/віддалений переклад під час війни",
    description:
      "Ми підтримуємо людей, які через війну були змушені залишити Україну та вирішують питання в Німеччині. Укладемо усний та письмовий переклад для офіційних документів.",
      extraDescription:
      "Для біженців з України ми виконуємо переклади документів переважно з української мови німецькою. Для зручності просимо користуватися нашою електронною системою замовлень Syllabot, створеною спеціально для перекладу документів та метрик (доступна кількома мовами).",
    image: "/main_photo6.png",
    imageAlt: "Синхронний та віддалений переклад",
    colorClass: "serviceCardOrange",
    accentClass: "serviceAccentOrange",
  },
];

const processSteps = [
  { number: "1", title: "Залишаєте\nзаявку" },
  { number: "2", title: "Проводимо\nаналіз тексту" },
  { number: "3", title: "Починаємо\nпереклад" },
  { number: "4", title: "Редагуємо\nкоректуємо" },
  { number: "5", title: "Верстаємо і\nготуємо до видачі" },
  { number: "6", title: "Отримуєте\nпереклад" },
];

const processTabs = [
  { label: "Усно" },
  { label: "Письмово" },
  { label: "ТБ" },
  { label: "Voice-Over" },
  { label: "Schriftdolmetschen" },
];

const benefitsItems = [
  { image: "/translate1.png", alt: "Кваліфіковані перекладачі", text: "Кваліфіковані перекладачі" },
  { image: "/translate2.png", alt: "Судовий присяжний перекладач", text: "Судовий присяжний перекладач" },
  { image: "/translate3.png", alt: "Конфіденційність", text: "Конфіденційність" },
  { image: "/translate4.png", alt: "Дотримання термінів", text: "Дотримання термінів" },
];

const faqItems = [
  "Скільки часу займає переклад?",
  "Які документи ви приймаєте?",
  "Чи можливий терміновий переклад?",
  "Якими мовами ви працюєте?",
  "У якому форматі я отримаю готовий переклад?",
  "Чи зберігаються мої дані після виконання замовлення?",
];

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={`${sourceSans.className} ${styles.heroContent}`}>
            <h1 className={styles.heroTitle}>
              Ласкаво просимо до бюро перекладів Yena&nbsp;Translations!
            </h1>

            <div className={styles.heroBody}>
              <p className={styles.heroDescription}>
                Переклад на німецьку, англійську, українську та російську
              </p>
              <p className={styles.heroDescription}>
                Якщо вам потрібні рішення з міжмовної комунікації, то ви звернулися
                за правильною адресою!
              </p>

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
            <Image
              src="/main_photo1.jpg"
              alt="Yena translations illustration"
              width={650}
              height={430}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.aboutPreviewSection}>
        <div className={styles.aboutPreviewContainer}>
          <div className={styles.aboutPreviewImageWrap}>
            <Image
              src="/main_photo2.jpg"
              alt="Мовна експертка Yena Translations"
              width={560}
              height={380}
              className={styles.aboutPreviewImage}
            />
          </div>

          <div className={`${sourceSans.className} ${styles.aboutPreviewContent}`}>
            <p className={styles.aboutPreviewText}>
              Ваш мовний експерт для німецької, англійської, української та
              російської в регіоні Рейн-Майн!
            </p>
            <p className={styles.aboutPreviewText}>
              Якщо вам потрібні рішення з міжмовної комунікації, то ви звернулися
              за правильною адресою, надто коли йдеться про мої чотири робочі мови:
              німецьку, російську, англійську та українську.
            </p>

            <a className={styles.aboutPreviewButton} href="#">
              Про нас
            </a>
          </div>
        </div>
      </section>

      <section className={`${sourceSans.className} ${styles.statsSection}`}>
        <div className={styles.statsContainer}>
          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>ЧИСЛО</p>
            <p className={styles.statsLabel}>ШТАТНИХ СПІВРОБІТНИКІВ</p>
          </article>

          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>ЧИСЛО</p>
            <p className={styles.statsLabel}>ПЕРЕКЛАДІВ ЩОДНЯ</p>
          </article>

          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>ЧИСЛО</p>
            <p className={styles.statsLabel}>ЗАДОВОЛЕНИХ КЛІЄНТІВ</p>
          </article>
        </div>
      </section>

      <section className={`${sourceSans.className} ${styles.servicesSection}`}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.servicesTitle}>Послуги</h2>
          <p className={styles.servicesLead}>
            Я – професійний кваліфікований перекладач. Крім того, як досвідчений
            старший перекладач я надаю консультації з конференц-перекладу. Я
            організовую команди перекладачів, консультую з питань проведення
            конференцій та підбираю технічні засоби для перекладу. Крім того, я є
            судовим присяжним перекладачем.
          </p>

          <div className={styles.servicesGrid}>
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className={styles.serviceCard}
              >
                <div className={styles.serviceCardInner}>
                  <div
                    className={`${styles.serviceCardFace} ${styles.serviceCardFront} ${styles[service.colorClass]}`}
                  >
                    <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                    <p className={styles.serviceCardText}>{service.description}</p>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={270}
                      height={170}
                      className={styles.serviceCardImage}
                    />
                  </div>

                  <div
                    className={`${styles.serviceCardFace} ${styles.serviceCardBack}`}
                  >
                    <h3
                      className={`${styles.serviceCardBackTitle} ${styles[service.accentClass]}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`${styles.serviceCardBackText} ${styles[service.accentClass]}`}
                    >
                      {service.description}
                    </p>
                    <p
                      className={`${styles.serviceCardBackText} ${styles[service.accentClass]}`}
                    >
                      {service.extraDescription}
                    </p>
                    <a
                      className={`${styles.serviceCardBackButton} ${styles[service.accentClass]}`}
                      href="#"
                    >
                      Дізнатися більше
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className={styles.servicesCta} href="#">
            Переглянути всі послуги
          </a>
        </div>
      </section>

      <section className={`${sourceSans.className} ${styles.processSection}`}>
        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>Як це працює?</h2>

          <div className={styles.processTabs} role="tablist" aria-label="Тип перекладу">
            <span
              aria-hidden="true"
              className={styles.processTabSlider}
              style={{ transform: `translateX(${activeTabIndex * 100}%)` }}
            />

            {processTabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={activeTabIndex === index}
                className={`${styles.processTab} ${
                  activeTabIndex === index ? styles.processTabActive : ""
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <p className={styles.processStepNumber}>{step.number}</p>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepText}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sourceSans.className} ${styles.benefitsSection}`}>
        <div className={styles.benefitsContainer}>
          {benefitsItems.map((item) => (
            <article key={item.text} className={styles.benefitCard}>
              <Image
                src={item.image}
                alt={item.alt}
                width={112}
                height={112}
                className={styles.benefitIcon}
              />
              <p className={styles.benefitText}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sourceSans.className} ${styles.faqSection}`}>
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>Відповіді на часті запитання</h2>

          <div className={styles.faqList}>
            {faqItems.map((question, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `faq-answer-${index}`;

              return (
                <article key={question} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestionButton}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className={styles.faqQuestionText}>{question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={panelId} className={styles.faqAnswer}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
