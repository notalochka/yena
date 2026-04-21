import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import { layoutCopyByLang } from "@/i18n/layout";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import styles from "./Footer.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

export default function Footer() {
  const { language } = useLanguage();
  const copy = layoutCopyByLang[language].footer;
  const services = copy.services;
  const orderedServices = [services[0], services[3], services[2], services[1]];

  return (
    <footer className={`${sourceSans.className} ${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <ImageWithPlaceholder
              src="/logo2.png"
              alt="Yena logo"
              width={90}
              height={146}
              className={styles.logo}
              style={{ width: "auto", height: "auto" }}
            />
            <p className={styles.brandText}>{copy.brandLine}</p>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>{copy.servicesTitle}</h3>
            <ul className={styles.servicesList}>
              <li>
                <Link href="/interpreting">{orderedServices[0]}</Link>
              </li>
              <li>
                <Link href="/written-translation">{orderedServices[1]}</Link>
              </li>
              <li>
                <Link href="/official-documents">{orderedServices[2]}</Link>
              </li>
              <li>
                <Link href="/services">{orderedServices[3]}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contactsColumn}>
            <h3 className={styles.columnTitle}>{copy.contactsTitle}</h3>
            <p>{copy.contacts.company}</p>
            <p>{copy.contacts.ownerLine}</p>
            <p>{copy.contacts.addressLine1}</p>
            <p>{copy.contacts.addressLine2}</p>
            <p>{copy.contacts.country}</p>
            <a href={`mailto:${copy.contacts.email}`}>{copy.contacts.email}</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={plusJakarta.className}>
            ©2026 <span className={styles.bottomBrandLight}>Yena Translations</span>.{" "}
            {copy.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
