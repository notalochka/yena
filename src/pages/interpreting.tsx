import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import ContactSection from "@/components/ContactSection";
import InterpretingCalculator from "@/components/calculators/interpreting";
import TopicsAccordion from "@/components/TopicsAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { interpretingCopyByLang } from "@/i18n/interpreting";
import { interpretingAccordionItemsByLang } from "@/i18n/interpretingAccordion";
import { getSeo } from "@/i18n/seoPages";
import revealStyles from "@/styles/pageReveal.module.css";
import { Source_Sans_3 } from "next/font/google";
import styles from "./interpreting.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
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
            <div className={styles.heroImageCol}>
              <ImageWithPlaceholder
                src="/verbal.jpg"
                alt={copy.heroImageAlt}
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
                  {copy.ctaOrder}
                </a>
                <a
                  className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
                  href="#"
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
      </section>

      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
      >
        <TopicsAccordion
          items={interpretingAccordionItemsByLang[language]}
          variant="orange"
          aria-label={copy.accordionAriaLabel}
          idPrefix="interpreting-accordion"
        />
      </div>

      <section
        data-page-reveal
        className={`${styles.labelSection} ${revealStyles.reveal}`}
      >
        <div className={`${sourceSans.className} ${styles.labelContainer}`}>
          <h2 className={styles.labelTitle}>{copy.priceCalculatorTitle}</h2>
        </div>
      </section>

      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
      >
        <InterpretingCalculator />
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
