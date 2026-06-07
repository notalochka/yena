import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useState } from "react";
import revealStyles from "@/styles/pageReveal.module.css";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/i18n/LanguageContext";
import { homeCopyByLang } from "@/i18n/home";
import { getSeo } from "@/i18n/seoPages";
import { homePageSectionsByLang, hasServiceCardContinuedText, renderFaqAnswer, renderProcessStepText, renderServiceCardDescription } from "@/i18n/homePageContent";
import styles from "./index.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "800"],
});

const PRIMARY_PROCESS_TAB_COUNT = 2;

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [expandedServiceCards, setExpandedServiceCards] = useState<
    Record<string, boolean>
  >({});
  const heroReveal = usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("home", language);
  const copy = homeCopyByLang[language];
  const sections = homePageSectionsByLang[language];

  const activeFlow =
    sections.processFlows[activeTabIndex] ?? sections.processFlows[0];
  const primaryProcessTabs = sections.processFlows.slice(
    0,
    PRIMARY_PROCESS_TAB_COUNT,
  );
  const secondaryProcessTabs = sections.processFlows.slice(
    PRIMARY_PROCESS_TAB_COUNT,
  );
  const primarySliderIndex =
    activeTabIndex < PRIMARY_PROCESS_TAB_COUNT ? activeTabIndex : 0;
  const isSecondaryProcessTabActive =
    activeTabIndex >= PRIMARY_PROCESS_TAB_COUNT;

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
                  className={`${dmSans.className} ${styles.heroButton} ${styles.heroButtonPrimary}`}
                  href="/services"
                >
                  {copy.ctaOrder}
                </Link>
                <Link
                  className={`${dmSans.className} ${styles.heroButton} ${styles.heroButtonSecondary}`}
                  href="/about"
                >
                  {copy.ctaMore}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.heroImageWrap}>
            <ImageWithPlaceholder
              src="/main_photo1.png"
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
          <div className={styles.servicesIntro}>
            <span className={styles.servicesBadge}>{copy.servicesBadge}</span>
            <h2 className={styles.servicesTitle}>{copy.servicesTitle}</h2>
            <div className={styles.servicesIntroRow}>
              <p className={styles.servicesLead}>{copy.servicesLead}</p>
              <Link className={styles.servicesIntroButton} href="/services">
                {copy.ctaMore}
              </Link>
            </div>
          </div>

          <div className={styles.servicesGrid}>
            {sections.serviceCards.map((service) => (
              <article
                key={service.href}
                className={styles.serviceCard}
              >
                <div
                  className={`${styles.serviceCardFace} ${styles[service.colorClass]}`}
                >
                  <div className={styles.serviceCardImageWrap}>
                    <ImageWithPlaceholder
                      src={service.image}
                      alt={service.imageAlt}
                      width={270}
                      height={170}
                      className={styles.serviceCardImage}
                    />
                  </div>
                  <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                  <div className={styles.serviceCardBody}>
                    <p className={styles.serviceCardText}>
                      {renderServiceCardDescription(
                        service.description,
                        styles.serviceCardLink,
                      )}
                    </p>
                    {hasServiceCardContinuedText(service.extraDescription) &&
                      expandedServiceCards[service.href] && (
                        <p className={styles.serviceCardText}>
                          {renderServiceCardDescription(
                            service.extraDescription,
                            styles.serviceCardLink,
                          )}
                        </p>
                      )}
                    {hasServiceCardContinuedText(service.extraDescription) &&
                      !expandedServiceCards[service.href] && (
                        <button
                          type="button"
                          className={`${sourceSans.className} ${styles.serviceCardReadMore}`}
                          aria-expanded={false}
                          onClick={() =>
                            setExpandedServiceCards((prev) => ({
                              ...prev,
                              [service.href]: true,
                            }))
                          }
                        >
                          {sections.readFull}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            aria-hidden="true"
                            className={styles.serviceCardReadMoreIcon}
                          >
                            <path
                              d="M11.7375 9C11.7375 9.33146 11.6057 9.64938 11.3713 9.88379L6.87134 14.3838L6.77954 14.4668C6.55715 14.6489 6.2775 14.75 5.98755 14.75C5.69756 14.75 5.41793 14.649 5.19556 14.4668L5.10376 14.3838L0.60083 9.88086C0.373132 9.64511 0.247396 9.32872 0.250244 9.00098C0.253208 8.67339 0.384802 8.35958 0.616455 8.12793C0.848177 7.89641 1.16194 7.76554 1.4895 7.76269C1.81714 7.75993 2.13273 7.88566 2.36841 8.11328L4.73755 10.4092L4.73755 1.5C4.73755 1.16853 4.86941 0.850621 5.10376 0.616211C5.33813 0.38184 5.65611 0.250056 5.98755 0.25C6.31902 0.25 6.63693 0.381857 6.87134 0.616211C7.10576 0.850631 7.23755 1.16848 7.23755 1.5L7.23755 10.4092L9.60669 8.11328L9.60767 8.11328C9.8417 7.88104 10.1577 7.75006 10.4875 7.75C10.819 7.75 11.1369 7.88192 11.3713 8.11621L11.4543 8.20801C11.6366 8.43043 11.7375 8.70995 11.7375 9Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </svg>
                        </button>
                      )}
                  </div>
                  <Link
                    className={`${styles.serviceCardCta} ${styles[service.ctaClass]}`}
                    href={service.href}
                  >
                    {sections.learnMore}
                  </Link>
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
        <div className={styles.processIntro}>
          <span className={styles.processBadge}>{sections.processBadge}</span>
          <h2 className={styles.processTitle}>{sections.processTitle}</h2>
          <p className={styles.processLead}>{sections.processLead}</p>
        </div>

        <div className={styles.processPanel}>
          <div className={styles.processContainer}>
            <div className={styles.processTabsWrap}>
              <div
                className={styles.processTabsPrimary}
                role="tablist"
                aria-label={sections.processTabsAriaLabel}
              >
                <span
                  aria-hidden="true"
                  className={`${styles.processTabSlider} ${
                    isSecondaryProcessTabActive
                      ? styles.processTabSliderMuted
                      : ""
                  }`}
                  style={{
                    transform: `translateX(${primarySliderIndex * 100}%)`,
                  }}
                />

                {primaryProcessTabs.map((tab, index) => {
                  const isDirectActive = activeTabIndex === index;
                  const isMutedActive =
                    isSecondaryProcessTabActive &&
                    index === primarySliderIndex;

                  return (
                    <button
                      key={tab.label}
                      type="button"
                      role="tab"
                      aria-selected={activeTabIndex === index}
                      className={`${styles.processTab} ${
                        isDirectActive ? styles.processTabActive : ""
                      } ${isMutedActive ? styles.processTabActiveMuted : ""}`}
                      onClick={() => setActiveTabIndex(index)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div
                className={styles.processTabsSecondary}
                role="tablist"
                aria-label={sections.processSecondaryTabsAriaLabel}
              >
                {secondaryProcessTabs.map((tab, index) => {
                  const flowIndex = index + PRIMARY_PROCESS_TAB_COUNT;

                  return (
                    <button
                      key={tab.label}
                      type="button"
                      role="tab"
                      aria-selected={activeTabIndex === flowIndex}
                      className={`${styles.processTabSecondary} ${
                        activeTabIndex === flowIndex
                          ? styles.processTabSecondaryActive
                          : ""
                      }`}
                      onClick={() => setActiveTabIndex(flowIndex)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

          <div className={styles.processGrid}>
            {activeFlow.steps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <p className={styles.processStepNumber}>{step.number}</p>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepText}>
                  {renderProcessStepText(step.text, styles.processStepLink)}
                </p>
              </article>
            ))}
          </div>
        </div>
        
        </div>
        <div className={styles.processCtaContainer}>
          <Link className={styles.processCta} href="/services">
            {sections.processCta}
          </Link>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.aboutPreviewSection} ${revealStyles.reveal}`}
      >
        <div className={styles.aboutPreviewContainer}>
          <div className={styles.aboutPreviewMedia}>
            <div className={styles.aboutPreviewImageWrap}>
              <Image
                src="/verbal.jpg"
                alt={sections.aboutPreview.imageAlt}
                width={420}
                height={420}
                className={styles.aboutPreviewImage}
              />
            </div>
            <blockquote className={styles.aboutPreviewQuote}>
              {sections.aboutPreview.quote}
            </blockquote>
            <p className={styles.aboutPreviewAuthor}>
              {sections.aboutPreview.author}
            </p>
          </div>

          <div className={styles.aboutPreviewContent}>
            <span className={styles.aboutPreviewBadge}>
              {sections.aboutPreview.badge}
            </span>
            <h2 className={styles.aboutPreviewTitle}>
              {sections.aboutPreview.title}
            </h2>
            <ul className={styles.aboutPreviewList}>
              {sections.aboutPreview.highlights.map((item) => (
                <li key={item.title} className={styles.aboutPreviewListItem}>
                  <span className={styles.aboutPreviewHighlightTitle}>
                    {item.title}
                  </span>
                  {" — "}
                  {item.text}
                </li>
              ))}
            </ul>
            <Link
              className={`${dmSans.className} ${styles.aboutPreviewButton}`}
              href="/services"
            >
              {sections.learnMore}
            </Link>
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
              <p className={styles.benefitExtraText}>
                {renderProcessStepText(item.extraText, styles.benefitExtraTextLink)}
              </p>
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
          <span className={styles.faqBadge}>FAQ</span>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
