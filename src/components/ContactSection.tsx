import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { useState } from "react";
import styles from "./ContactSection.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
});

export default function ContactSection() {
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
        <h2 className={styles.contactTitle}>Маєте запитання?</h2>

        <div className={styles.contactGrid}>
          <form className={styles.contactForm} action="#">
            <label className={styles.contactLabel} htmlFor="contact-name">
              ІМ’Я *
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
              EMAIL *
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
              ВАШ ЗАПИТ *
            </label>
            <textarea
              className={styles.contactInput}
              id="contact-request"
              name="request"
              rows={1}
              value={contactRequest}
              onChange={(event) => setContactRequest(event.target.value)}
            />
            <p className={styles.contactHint}>Що ви хочете дізнатися/замовити?</p>

            <label className={styles.contactConsent}>
              <input
                type="checkbox"
                name="consent"
                checked={isConsentChecked}
                onChange={(event) => setIsConsentChecked(event.target.checked)}
              />
              <span>
                Продовжуючи, я приймаю умови{" "}
                <a className={styles.contactConsentLink} href="">
                  Публічної оферти
                </a>{" "}
                та надаю згоду на обробку своїх персональних даних відповідно до{" "}
                <a className={styles.contactConsentLink} href="">
                  Політики конфіденційності
                </a>
              </span>
            </label>

            <button
              className={styles.contactSubmit}
              type="submit"
              disabled={!isContactFormValid}
            >
              Написати
            </button>
          </form>

          <aside className={styles.contactAside}>
            <Image
              src="/main_photo1.jpg"
              alt="Ілюстрація Yena Translations"
              width={450}
              height={300}
              className={styles.contactImage}
            />
            <p className={styles.contactAsideText}>
              Хочете спитати ще щось? Пишіть на{" "}
              <a className={styles.contactEmail} href="mailto:contact@yena.de">
                contact@yena.de
              </a>
            </p>
            <a className={styles.contactAsideButton} href="#">
              ПРОКОНСУЛЬТУЙТЕ МЕНЕ
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
