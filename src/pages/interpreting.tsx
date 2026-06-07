import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import InterpretingCalculator from "@/components/calculators/interpreting";
import TopicsAccordion from "@/components/TopicsAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import Link from "next/link";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { interpretingCopyByLang } from "@/i18n/interpreting";
import { interpretingAccordionItemsByLang } from "@/i18n/interpretingAccordion";
import { getSeo } from "@/i18n/seoPages";
import revealStyles from "@/styles/pageReveal.module.css";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import styles from "./interpreting.module.css";
import ContactQuestion from "@/components/ContactQuestion";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

export default function InterpretingPage() {
  usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("interpreting", language);
  const copy = interpretingCopyByLang[language];

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Seo title={seo.title} description={seo.description} path={seo.path} />
      <Header />

      <section className={styles.heroSection}>
        <div
          data-page-reveal
          className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
        >
          <div className={`${sourceSans.className} ${styles.heroContainer}`}>
            <nav
              className={`${dmSans.className} ${styles.heroBreadcrumb}`}
              aria-label={copy.heroBreadcrumbAriaLabel}
            >
              <Link href="/services" className={styles.heroBreadcrumbLink}>
                {copy.heroBreadcrumbServices}
              </Link>
              <span className={styles.heroBreadcrumbSeparator} aria-hidden>
                |
              </span>
              <span className={styles.heroBreadcrumbCurrent}>
                {copy.heroTitle}
              </span>
            </nav>

            <div className={styles.heroGrid}>
            <div className={styles.heroImageCol}>
              <ImageWithPlaceholder
                src="/verbal.png"
                alt={copy.heroImageAlt}
                width={650}
                height={430}
                className={styles.heroImage}
                priority
              />
              <div className={styles.heroActions}>
                <a
                  className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
                  href="#price-calculator"
                >
                  {copy.ctaOrder}
                </a>
                <a
                  className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
                  href="#topics"
                >
                  {copy.ctaMore}
                </a>
              </div>
            </div>

            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>
              {copy.heroParagraphs.map((text, index) => (
                <p key={`hero-${index}`} className={styles.heroDescription}>
                  {text}
                </p>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${styles.labelSection} ${revealStyles.reveal}`}
        id="price-calculator"
      >
        <div className={`${sourceSans.className} ${styles.labelContainer}`}>
          <span className={styles.heroBadge}>{copy.heroBadge}</span>
          <h2 className={styles.labelTitle}>{copy.priceCalculatorTitle}</h2>
        </div>
      </section>

      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
      >
        <InterpretingCalculator />
      </div>
      <section
        data-page-reveal
        className={`${styles.topicsSection} ${revealStyles.reveal}`}
        id="topics"
      >
        <div className={`${sourceSans.className} ${styles.topicsContainer}`}>
          <span className={styles.topicsBadge}>{copy.topicsBadge}</span>
          <h2 className={styles.topicsTitle}>{copy.topicsTitle}</h2>
        </div>
      </section>
      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
        id="topics"
      >
        <TopicsAccordion
          items={interpretingAccordionItemsByLang[language]}
          variant="orange"
          aria-label={copy.accordionAriaLabel}
          idPrefix="interpreting-accordion"
        />
      </div>
     
      <ContactQuestion />
      <Footer />
    </div>
  );
}
