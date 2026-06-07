import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import { contactCopyByLang } from "@/i18n/contact";
import { Source_Sans_3 } from "next/font/google";
import { useState } from "react";
import styles from "./Contact.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
});

export default function ContactSection() {
  const { language } = useLanguage();
  const copy = contactCopyByLang[language].contact;
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactRequest, setContactRequest] = useState("");
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  const isContactFormValid =
    contactName.trim() !== "" &&
    contactEmail.trim() !== "" &&
    contactRequest.trim() !== "" &&
    isConsentChecked;

  return (
    <section className={`${sourceSans.className} ${styles.contactSection}`}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>{copy.title}</h2>
        {copy.subtitle && <p className={styles.contactText}>{copy.subtitle}</p>}
        <div className={styles.contactGrid}>
          <form className={styles.contactForm} action="#">
            <label className={styles.contactLabel} htmlFor="contact-name">
              {copy.nameLabel}
            </label>
            <input
              className={styles.contactInput}
              id="contact-name"
              name="name"
              type="text"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
            />

            <label className={styles.contactLabel} htmlFor="contact-email">
              {copy.emailLabel}
            </label>
            <input
              className={styles.contactInput}
              id="contact-email"
              name="email"
              type="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
            />

            <label className={styles.contactLabel} htmlFor="contact-request">
              {copy.requestLabel}
            </label>
            <textarea
              className={styles.contactInput}
              id="contact-request"
              name="request"
              rows={1}
              value={contactRequest}
              onChange={(event) => setContactRequest(event.target.value)}
            />
            <p className={styles.contactHint}>{copy.requestHint}</p>

            <label className={styles.contactConsent}>
              <input
                type="checkbox"
                name="consent"
                checked={isConsentChecked}
                onChange={(event) => setIsConsentChecked(event.target.checked)}
              />
              <span>
                {copy.consentPrefix}{" "}
                <a className={styles.contactConsentLink} href="">
                  {copy.consentOffer}
                </a>{" "}
                {copy.consentMiddle}{" "}
                <a className={styles.contactConsentLink} href="">
                  {copy.consentPrivacy}
                </a>
              </span>
            </label>

            <button
              className={styles.contactSubmit}
              type="submit"
              disabled={!isContactFormValid}
            >
              {copy.submit}
            </button>
          </form>

          <aside className={styles.contactAside}>
            <ImageWithPlaceholder
              src="/main_photo1.png"
              alt={copy.asideAlt}
              width={450}
              height={300}
              className={styles.contactImage}
            />
            <p className={styles.contactAsideText}>
              {copy.asideTextBeforeEmail}{" "}
              <a className={styles.contactEmail} href="mailto:contact@yena.de">
                contact@yena.de
              </a>
            </p>
            <a className={styles.contactAsideButton} href="mailto:contact@yena.de">
              {copy.consultMe}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
