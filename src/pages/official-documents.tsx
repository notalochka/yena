import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { officialDocumentsCopyByLang } from "@/i18n/officialDocuments";
import { officialDocumentsAccordionItemsByLang } from "@/i18n/officialDocumentsAccordion";
import { getSeo } from "@/i18n/seoPages";
import revealStyles from "@/styles/pageReveal.module.css";
import { Source_Sans_3 } from "next/font/google";
import styles from "./official-documents.module.css";
import TopicsAccordion from "@/components/TopicsAccordion";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
});

export default function OfficialDocumentsPage() {
  usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("officialDocuments", language);
  const copy = officialDocumentsCopyByLang[language];

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Seo title={seo.title} description={seo.description} path={seo.path} />
      <Header />
      <section className={styles.heroSection}>
        <div
          data-page-reveal
          className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
        >
          <div className={styles.heroContainer}>
            <div className={`${sourceSans.className} ${styles.heroContent}`}>
              <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>

              <div className={styles.heroBody}>
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
            </div>

            <div className={styles.heroImageWrap}>
              <ImageWithPlaceholder
                src="/official.png"
                alt={copy.heroImageAlt}
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
        {copy.introParagraphs.map((text, index) => (
          <p key={`intro-${index}`} className={styles.introLead}>
            {text}
          </p>
        ))}
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.docTypesSection} ${revealStyles.reveal}`}
        aria-labelledby="official-doc-types-heading"
      >
        <h2 id="official-doc-types-heading" className={styles.docTypesTitle}>
          {copy.docTypesTitle}
        </h2>
        <div className={styles.docTypesCard}>
          <ul className={styles.docTypesGrid}>
            {copy.documentTypes.map((item) => (
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
          {copy.silabotLead}{" "}
          <a
            className={styles.docTypesLink}
            href="https://silabot.de/uk/homepage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{copy.silabotLinkText}</span>
          </a>
          {copy.silabotAfterLink}
        </p>
        <p className={styles.docTypesFootnote}>
          {copy.silabotSecondParagraph}
        </p>
      </section>
      <div
        data-page-reveal
        className={`${revealStyles.reveal} ${revealStyles.revealFullWidth}`}
      >
        <TopicsAccordion
          items={officialDocumentsAccordionItemsByLang[language]}
          variant="olive"
          aria-label={copy.accordionAriaLabel}
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
