import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import Link from "next/link";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { getSeo } from "@/i18n/seoPages";
import { renderServicesAsideText, servicesCopyByLang } from "@/i18n/services";
import revealStyles from "@/styles/pageReveal.module.css";
import { Source_Sans_3 } from "next/font/google";
import styles from "./services.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
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
        <div className={styles.showcaseBackdrop} aria-hidden />
        <div className={styles.showcaseBackdrop2} aria-hidden />
        <div className={styles.showcaseInner}>
          {copy.cards.map((card) => (
            <article
              key={card.title}
              className={`${styles.serviceCard} ${styles[`card${card.variant}`]}`}
            >
              <div className={styles.cardGrid}>
                <div className={styles.cardCol}>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <Link
                    className={styles.cardButton}
                    href={card.learnMoreHref}
                    style={{ color: card.buttonColor }}
                  >
                    {copy.learnMore}
                  </Link>
                </div>

                <div className={styles.cardCol}>
                  <p className={styles.cardListTitle}>{card.listTitle}</p>
                  <ul className={styles.cardList}>
                    {card.items.map((item) => (
                      <li key={item} className={styles.cardListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardCol}>
                  <div className={`${styles.cardAside} ${styles[`cardAside${card.variant}`]}`}>
                    <h3 className={styles.cardAsideTitle}>{card.asideTitle}</h3>
                    <p className={styles.cardAsideText}>
                      {renderServicesAsideText(card.asideText, styles.servicesLink)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
