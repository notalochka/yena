import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Image from "next/image";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useState } from "react";
import revealStyles from "@/styles/pageReveal.module.css";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/i18n/LanguageContext";
import { homeCopyByLang } from "@/i18n/home";
import { getSeo } from "@/i18n/seoPages";
import { homePageSectionsByLang, renderFaqAnswer } from "@/i18n/homePageContent";
import styles from "./index.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "800"],
});

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const heroReveal = usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("home", language);
  const copy = homeCopyByLang[language];
  const sections = homePageSectionsByLang[language];

  const activeFlow =
    sections.processFlows[activeTabIndex] ?? sections.processFlows[0];

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Seo title={seo.title} description={seo.description} path={seo.path} />
      <Header />

      <section
        className={`${styles.heroSection} ${revealStyles.reveal} ${
          heroReveal ? revealStyles.revealVisible : ""
        }`}
      >
        <div className={styles.heroContainer}>
          <div className={`${sourceSans.className} ${styles.heroContent}`}>
            <h1 className={styles.heroTitle}>
              {copy.heroTitle}
            </h1>

            <div className={styles.heroBody}>
              <p className={styles.heroDescription}>
                {copy.heroLine1}
              </p>
              <p className={styles.heroDescription}>
                {copy.heroLine2}
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
                  href="/services"
                >
                  {copy.ctaOrder}
                </Link>
                <Link
                  className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
                  href="/#about-preview"
                >
                  {copy.ctaMore}
                </Link>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      <section
        id="about-preview"
        data-page-reveal
        className={`${styles.aboutPreviewSection} ${revealStyles.reveal}`}
      >
        <div className={styles.aboutPreviewContainer}>
          <div className={styles.aboutPreviewImageWrap}>
            <ImageWithPlaceholder
              src="/main_photo2.jpg"
              alt="Мовна експертка Yena Translations"
              width={560}
              height={380}
              className={styles.aboutPreviewImage}
            />
          </div>

          <div className={`${sourceSans.className} ${styles.aboutPreviewContent}`}>
            <p className={styles.aboutPreviewText}>
              {copy.aboutPreviewLine1}
            </p>
            <p className={styles.aboutPreviewText}>
              {copy.aboutPreviewLine2}
            </p>

            <Link className={styles.aboutPreviewButton} href="/about">
              {copy.aboutButton}
            </Link>
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
            <p className={styles.statsLabel}>{copy.stats.staff}</p>
          </article>

          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>20+</p>
            <p className={styles.statsLabel}>{copy.stats.weekly}</p>
          </article>

          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>150+</p>
            <p className={styles.statsLabel}>{copy.stats.clients}</p>
          </article>
          <article className={styles.statsItem}>
            <p className={styles.statsNumber}>35+</p>
            <p className={styles.statsLabel}>{copy.stats.years}</p>
          </article>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.servicesSection} ${revealStyles.reveal}`}
      >
        <div className={styles.servicesContainer}>
          <h2 className={styles.servicesTitle}>{copy.servicesTitle}</h2>
          <p className={styles.servicesLead}>
            {copy.servicesLead}
          </p>

          <div className={styles.servicesGrid}>
            {sections.serviceCards.map((service) => (
              <article
                key={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.serviceCardInner}>
                  <div
                    className={`${styles.serviceCardFace} ${styles.serviceCardFront} ${styles[service.colorClass]}`}
                  >
                    <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                    <p className={styles.serviceCardText}>{service.description}</p>
                    <div className={styles.serviceCardImageWrap}>
                      <ImageWithPlaceholder
                        src={service.image}
                        alt={service.imageAlt}
                        width={270}
                        height={170}
                        className={styles.serviceCardImage}
                      />
                    </div>
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
                      {typeof service.extraDescription === "string" ? (
                        service.extraDescription
                      ) : (
                        <>
                          {service.extraDescription.before}{" "}
                          <a
                            className={styles.servicesLink}
                            target="_blank"
                            href={service.extraDescription.href}
                            rel="noreferrer"
                          >
                            {service.extraDescription.linkLabel}
                          </a>
                          {service.extraDescription.after}
                        </>
                      )}
                    </p>
                    <Link
                      className={`${styles.serviceCardBackButton} ${styles[service.accentClass]}`}
                      href={service.href}
                    >
                      {sections.learnMore}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link className={styles.servicesCta} href="/services">
            {sections.servicesCta}
          </Link>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.processSection} ${revealStyles.reveal}`}
      >
        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>{sections.processTitle}</h2>

          <div
            className={styles.processTabs}
            role="tablist"
            aria-label={sections.processTabsAriaLabel}
          >
            <span
              aria-hidden="true"
              className={styles.processTabSlider}
              style={{ transform: `translateX(${activeTabIndex * 100}%)` }}
            />

            {sections.processFlows.map((tab, index) => (
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
            {activeFlow.steps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <p className={styles.processStepNumber}>{step.number}</p>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepText}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.benefitsSection} ${revealStyles.reveal}`}
      >
        <div className={styles.benefitsContainer}>
          {sections.benefitsItems.map((item) => (
            <article key={item.image} className={styles.benefitCard}>
              <Image
                src={item.image}
                alt={item.alt}
                width={112}
                height={112}
                className={styles.benefitIcon}
              />
              <p className={styles.benefitText}>{item.text}</p>
              <p className={styles.benefitExtraText}>{item.extraText}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.faqSection} ${revealStyles.reveal}`}
      >
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>{sections.faqTitle}</h2>

          <div className={styles.faqList}>
            {sections.faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `faq-answer-${index}`;

              return (
                <article key={item.question} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestionButton}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className={styles.faqQuestionText}>{item.question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={panelId} className={styles.faqAnswer}>
                      {renderFaqAnswer(item.answer, styles.faqAnswerLink)}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
