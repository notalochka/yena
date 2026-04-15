import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import ContactSection from "@/components/ContactSection";
import InterpretingCalculator from "@/components/calculators/interpreting";
import TopicsAccordion, {
  interpretingAccordionItems,
} from "@/components/TopicsAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./interpreting.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

export default function InterpretingPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.heroSection}>
        <div className={`${sourceSans.className} ${styles.heroContainer}`}>
          <div className={styles.heroImageCol}>
            <Image
              src="/verbal.jpg"
              alt="Ілюстрація: конференц-переклад"
              width={650}
              height={430}
              className={styles.heroImage}
              priority
            />
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

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Усний переклад</h1>
            <p className={styles.heroDescription}>
            Моєю головною спеціалізацією є усне міжмовне посередництво, переклад, а ще точніше – конференц-переклад. Переважно я перекладаю з моєї пасивної (англійської) на мої активні мови (українську або російську). З німецької мови я перекладаю на українську або російську і навпаки.
            </p>
            <p className={styles.heroDescription}>
            Проте дедалі більше моєю активною мовою стає не тільки німецька, але також і англійська, тому вже кілька років я перекладаю з української на англійську. Я пропоную професійні послуги з перекладу як кваліфікований перекладач.
            </p>
            <p className={styles.heroDescription}>
            Я набула освіти конференц-перекладача в найкращих школах перекладу України та Німеччини. Крім того, я вчилась у Великобританії, країні однієї з провідних моїх робочих мов.
            </p>
          </div>
        </div>
      </section>

      <TopicsAccordion
        items={interpretingAccordionItems}
        variant="orange"
        aria-label="Послуги усного перекладу"
        idPrefix="interpreting-accordion"
      />

      <section className={styles.labelSection}>
        <div className={`${sourceSans.className} ${styles.labelContainer}`}>
          <h2 className={styles.labelTitle}>Калькулятор ціни</h2>
        </div>
      </section>

      <InterpretingCalculator />

      <ContactSection />
      <Footer />
    </div>
  );
}
