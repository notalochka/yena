import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/i18n/LanguageContext";
import { aboutCopyByLang } from "@/i18n/about";
import { getSeo } from "@/i18n/seoPages";
import { usePageReveal } from "@/hooks/usePageReveal";
import revealStyles from "@/styles/pageReveal.module.css";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import styles from "./about.module.css";
import ContactQuestion from "@/components/ContactQuestion";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
});

export default function AboutPage() {
  const heroReveal = usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("about", language);
  const copy = aboutCopyByLang[language];

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
            <span className={styles.heroBadge}>{copy.heroBadge}</span>
            <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>

            <p className={styles.heroDescription}>{copy.heroDescription1}</p>
            <p className={styles.heroDescription}>{copy.heroDescription2}</p>

          </div>

          <div className={styles.heroImageWrap}>
            <ImageWithPlaceholder
              src="/main_photo6.png"
              alt={copy.heroImageAlt}
              width={650}
              height={430}
              className={styles.heroImage}
              priority
            />

            <div className={styles.heroActions}>
              <Link className={`${styles.heroButton} ${styles.heroButtonPrimary}`} href="/services">
                {copy.ctaOrder}
              </Link>
              <a className={`${styles.heroButton} ${styles.heroButtonSecondary}`} href="#expertise">
                {copy.ctaMore}
              </a>
            </div>
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
        id="expertise"
        data-page-reveal
        className={`${sourceSans.className} ${styles.expertiseSection} ${revealStyles.reveal}`}
      >
        <div className={styles.expertiseContainer}>
          <h2 className={styles.expertiseTitle}>{copy.expertiseTitle}</h2>
          <p className={styles.expertiseDescription}>{copy.expertiseDescription}</p>
          <p className={styles.expertiseSubtitle}>{copy.expertiseSubtitle}</p>

          <div className={styles.expertiseGrid}>
            {copy.expertiseCards.map((card) => (
              <article key={card.icon} className={styles.expertiseCard}>
                <ImageWithPlaceholder
                  src={card.icon}
                  alt={card.alt}
                  width={110}
                  height={110}
                  className={styles.expertiseIcon}
                  inline
                />
                <p className={styles.expertiseCardText}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.experienceSection} ${revealStyles.reveal}`}
      >
        <div className={styles.experienceContainer}>
          <h2 className={styles.experienceTitle}>{copy.experienceTitle}</h2>

          <div className={styles.experienceTextGroup}>
            {copy.experienceParagraphs.map((paragraph, index) => (
              <p key={`experience-${index}`} className={styles.experienceText}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.experienceActions}>
              <Link className={`${styles.heroButton} ${styles.heroButtonPrimary}`} href="/services">
                {copy.ctaOrder}
              </Link>
              <a className={`${styles.heroButton} ${styles.heroButtonSecondary}`} href="#expertise">
                {copy.ctaMore}
              </a>
            </div>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${sourceSans.className} ${styles.practiceSection} ${revealStyles.reveal}`}
      >
        <div className={styles.practiceContainer}>
          <h2 className={styles.practiceTitle}>{copy.practiceTitle}</h2>
          <p className={styles.practiceText}>{copy.practiceIntro}</p>
          <ul className={styles.practiceList}>
            {copy.practiceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        data-page-reveal
        className={`${styles.videoSection} ${revealStyles.reveal}`}
      >
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <button
              type="button"
              className={styles.videoPlayButton}
              aria-label={copy.videoPlayLabel}
            >
              <span className={styles.videoPlayIcon} />
            </button>
          </div>
        </div>
      </section>

      <ContactQuestion />
      <Footer />
    </div>
  );
}
