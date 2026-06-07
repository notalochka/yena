import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import TopicsAccordion from "@/components/TopicsAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { writtenTranslationCopyByLang } from "@/i18n/writtenTranslation";
import { writtenTranslationAccordionItemsByLang } from "@/i18n/writtenTranslationAccordion";
import { getSeo } from "@/i18n/seoPages";
import revealStyles from "@/styles/pageReveal.module.css";
import { Source_Sans_3 } from "next/font/google";
import styles from "./written-translation.module.css";
import WrittenCalculator from "@/components/calculators/written";
import ContactQuestion from "@/components/ContactQuestion";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

export default function WrittenTranslationPage() {
  usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("writtenTranslation", language);
  const copy = writtenTranslationCopyByLang[language];

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
                src="/writen.png"
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
              {copy.heroParagraphs.map((p) => (
                <p key={p} className={styles.heroDescription}>
                  {p}
                </p>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.descriptionSection} ${revealStyles.reveal}`}
      >
        {copy.descriptionParagraphs.map((p) => (
          <p key={p} className={styles.descriptionText}>
            {p}
          </p>
        ))}
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
        <WrittenCalculator />
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
          items={writtenTranslationAccordionItemsByLang[language]}
          variant="blue"
          aria-label={copy.accordionAriaLabel}
          idPrefix="written-accordion"
        />
      </div>
      <ContactQuestion />
      <Footer />
    </div>
  );
}
