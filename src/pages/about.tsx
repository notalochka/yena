import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePageReveal } from "@/hooks/usePageReveal";
import revealStyles from "@/styles/pageReveal.module.css";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import styles from "./about.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
});

const expertiseCards = [
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
];

export default function AboutPage() {
  const heroReveal = usePageReveal();

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Header />

      <section
        className={`${styles.heroSection} ${revealStyles.reveal} ${
          heroReveal ? revealStyles.revealVisible : ""
        }`}
      >
        <div className={styles.heroContainer}>
          <div className={`${sourceSans.className} ${styles.heroContent}`}>
            <h1 className={styles.heroTitle}>
              Ласкаво просимо до бюро перекладів Yena&nbsp;Translations!
            </h1>

            <p className={styles.heroDescription}>
              Ми пропонуємо професійні рішення у сфері міжмовної комунікації. Ми
              працюємо з чотирма мовами: німецькою, українською, англійською та
              російською, забезпечуючи як усний, так і письмовий переклад.
            </p>
            <p className={styles.heroDescription}>
              Понад 35 років досвіду дозволяють нам надавати послуги найвищої
              якості: від конференц-перекладу та локалізації веб-сайтів до створення
              іншомовних рекламних матеріалів.
            </p>

          </div>

          <div className={styles.heroImageWrap}>
            <ImageWithPlaceholder
              src="/main_photo1.jpg"
              alt="Yena translations illustration"
              width={650}
              height={430}
              className={styles.heroImage}
              priority
            />

            <div className={styles.heroActions}>
              <a className={`${styles.heroButton} ${styles.heroButtonPrimary}`} href="/services">
                Замовити переклад
              </a>
              <a className={`${styles.heroButton} ${styles.heroButtonSecondary}`} href="#expertise">
                Дізнатися більше
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        data-page-reveal
        className={`${sourceSans.className} ${styles.expertiseSection} ${revealStyles.reveal}`}
      >
        <div className={styles.expertiseContainer}>
          <h2 className={styles.expertiseTitle}>Професійна експертиза</h2>
          <p className={styles.expertiseDescription}>
            Я — кваліфікований професійний перекладач і судовий присяжний
            перекладач. Працюю для судів і нотаріусів (переважно в федеральній землі Гессен), а
            також для міжнародних організацій, державних установ та приватних
            компаній.
          </p>
          <p className={styles.expertiseSubtitle}>
            Як старший конференц-перекладач і консультант я:
          </p>

          <div className={styles.expertiseGrid}>
            {expertiseCards.map((card) => (
              <article key={card.text} className={styles.expertiseCard}>
                <ImageWithPlaceholder
                  src={card.icon}
                  alt={card.alt}
                  width={110}
                  height={110}
                  className={styles.expertiseIcon}
                  inline
                />
                <p className={styles.expertiseCardText}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.questionSection} ${revealStyles.reveal}`}
      >
        <div className={styles.questionContainer}>
          <div className={styles.questionContent}>
            <h2 className={styles.questionTitle}>Є запитання?</h2>
            <p className={styles.questionText}>Ми допоможемо визначитися з перекладом!</p>
          </div>

          <a className={`${styles.questionButton} ${dmSans.className}`} href="/contacts">
            НАПИСАТИ НАМ
          </a>
        </div>
      </section>
      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.experienceSection} ${revealStyles.reveal}`}
      >
        <div className={styles.experienceContainer}>
          <h2 className={styles.experienceTitle}>Досвід та освіта</h2>

          <div className={styles.experienceTextGroup}>
            <p className={styles.experienceText}>
            Перекладацьку діяльність я розпочала у 1991 році в Україні. Перекладацьку освіту я здобула в Україні та Німеччині.
            </p>
            <p className={styles.experienceText}>
              Додатково навчалася політології в London School of Economics and
              Political Science (LSE).
            </p>
            <p className={styles.experienceText}>
            Я маю практичний досвід роботи у банківському секторі – протягом трьох з половиною років працювала у банківській школі в рамках проекту TACIS Європейського Союзу.
            </p>
            <p className={styles.experienceText}>
            Я постійно підвищую кваліфікацію та поглиблюю знання у сфері підприємництва, навчаюсь в академії персоналу.
            </p>
          </div>

          <h2 className={styles.practiceTitle}>Міжнародна практика</h2>

          <p className={styles.practiceText}>
          Я перекладаю на міжнародних політичних заходах у Німеччині та поза нею. За роки роботи я сформувала мережу колег-синхроністів та письмових перекладачів, яких залучаю до реалізації перекладацьких проектів. Як керівник групи перекладачів я пропоную клієнтам повний супровід заходу:
          </p>

          <ul className={styles.practiceList}>
            <li>формування команди перекладачів</li>
            <li>технічне забезпечення конференц-перекладу, або</li>
            <li>організацію віддаленого синхронного перекладу</li>
            <li>координацію та управління процесом, у тому числі логістикою </li>
            <li>супровід конференцій через письмовий переклад</li>
          </ul>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${styles.videoSection} ${revealStyles.reveal}`}
      >
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <button
              type="button"
              className={styles.videoPlayButton}
              aria-label="Відтворити відео"
            >
              <span className={styles.videoPlayIcon} />
            </button>
          </div>
        </div>
      </section>
      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.statsSection} ${revealStyles.reveal}`}
      >
        <div className={styles.statsContainer}>
          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>10+</p>
            <p className={styles.statsLabel}>штатних та позаштатних співробітників</p>
          </article>

          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>20+</p>
            <p className={styles.statsLabel}>ПЕРЕКЛАДІВ щотижня </p>
          </article>

          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>150+</p>
            <p className={styles.statsLabel}>задоволених клієнтів з 1991 року</p>
          </article>
          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>35+</p>
            <p className={styles.statsLabel}>років на ринку</p>
          </article>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.teamworkSection} ${revealStyles.reveal}`}
      >
        <div className={styles.teamworkContainer}>
          <h2 className={styles.teamworkTitle}>Командна робота</h2>

          <div className={styles.teamworkTextGroup}>
            <p className={styles.teamworkText}>
            У сфері письмового перекладу ми працюємо з фаховими та науково-популярними виданнями, технічною документацією та спеціалізованими текстами.
            </p>
            <p className={styles.teamworkText}>
            Залежно від обсягу проекту до роботи залучається команда професійних перекладачів та редакторів. Замовник отримує комплексну послугу з одних рук:
            </p>
          </div>

          <ul className={styles.teamworkList}>
            <li>переклад</li>
            <li>редагування</li>
            <li>форматування</li>
            <li>верстка</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
