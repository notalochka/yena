import { useLanguage } from "@/i18n/LanguageContext";
import { contactCopyByLang } from "@/i18n/contact";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import revealStyles from "@/styles/pageReveal.module.css";
import styles from "./ContactQuestion.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
});

export default function ContactQuestion() {
  const { language } = useLanguage();
  const copy = contactCopyByLang[language].contactQuestion;

  return (
    <section
      data-page-reveal
      className={`${sourceSans.className} ${styles.questionSection} ${revealStyles.reveal}`}
    >
      <div className={styles.questionContainer}>
        <div className={styles.questionContent}>
          <h2 className={styles.questionTitle}>{copy.questionTitle}</h2>
          <p className={styles.questionText}>{copy.questionText}</p>
        </div>

        <Link
          className={`${styles.questionButton} ${dmSans.className}`}
          href="/contacts"
        >
          {copy.questionButton}
        </Link>
      </div>
    </section>
  );
}
