import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import SilabotFlagIcon from "@/components/SilabotFlagIcon";
import Link from "next/link";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { getSeo } from "@/i18n/seoPages";
import {
  renderServicesAsideText,
  servicesCopyByLang,
  silabotUrl,
} from "@/i18n/services";
import revealStyles from "@/styles/pageReveal.module.css";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import styles from "./services.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
});

export default function ServicesPage() {
  usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("services", language);
  const copy = servicesCopyByLang[language];

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Seo title={seo.title} description={seo.description} path={seo.path} />
      <Header />

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.introSection} ${revealStyles.reveal}`}
      >
        <div className={styles.introContainer}>
          <h1 className={styles.introTitle}>{copy.introTitle}</h1>
          <p className={styles.introLead}>{copy.introLead}</p>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.showcaseSection} ${revealStyles.reveal}`}
        aria-label={copy.listAriaLabel}
      >
        <div className={styles.showcaseInner}>
          <span className={styles.heroBadge}>{copy.servicesBadge}</span>
          {copy.cards.map((card) => (
            <article
              key={card.title}
              className={`${styles.serviceCard} ${styles[`card${card.variant}`]}`}
            >
              <div className={styles.cardGrid}>
                <div className={styles.cardMain}>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <div className={styles.cardFooter}>
                    {card.showSilabotNote && (
                      <p className={styles.cardSilabotNote}>
                        <SilabotFlagIcon className={styles.cardSilabotIcon} />
                        <span>
                          {copy.silabotNote.before}{" "}
                          <a
                            className={styles.cardSilabotLink}
                            href={silabotUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {copy.silabotNote.linkText}
                          </a>
                        </span>
                      </p>
                    )}
                    <div className={styles.cardActions}>
                      <Link
                        className={styles.cardButtonPrimary}
                        href={card.learnMoreHref}
                      >
                        {copy.learnMore}
                      </Link>
                      <Link
                        className={styles.cardButtonSecondary}
                        href={card.calculateHref}
                      >
                        {copy.calculateCost}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.cardSide}>
                  <div className={styles.cardCallout}>
                    <h3 className={styles.cardCalloutTitle}>{card.asideTitle}</h3>
                    <p className={styles.cardCalloutText}>
                      {renderServicesAsideText(
                        card.asideText,
                        styles.servicesLink,
                      )}
                    </p>
                  </div>

                  <div className={styles.cardListBlock}>
                    <h3 className={styles.cardListTitle}>{card.listTitle}</h3>
                    <ul className={styles.cardList}>
                      {card.items.map((item) => (
                        <li key={item} className={styles.cardListItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
      data-page-reveal
      className={`${sourceSans.className} ${styles.questionSection} ${revealStyles.reveal}`}
    >
      <div className={styles.questionContainer}>
        <div className={styles.questionContent}>
          <h2 className={styles.questionTitle}>Не знаєте, яка послуга підходить?</h2>
          <p className={styles.questionText}>Залиште запит — разом визначимо найкращий формат для вашої ситуації.</p>
          <Link
            className={`${styles.questionButton} ${dmSans.className}`}
            href="/contacts"
          >
            НАПИСАТИ НАМ
          </Link>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}
