import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import styles from "./Footer.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

const services = [
  "Усний переклад",
  "Віддалений синхронний переклад у воєнний час",
  "Переклад офіційних документів",
  "Письмовий переклад",
];

export default function Footer() {
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
            <p className={styles.brandText}>Бюро перекладів Yena Translations</p>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Послуги</h3>
            <ul className={styles.servicesList}>
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.contactsColumn}>
            <h3 className={styles.columnTitle}>Контакти</h3>
            <p>Yena Translations</p>
            <p>Власник Наталія Єна</p>
            <p>Дармштадтер Ландштрассе 199</p>
            <p>60598 Франкфурт-на-Майні</p>
            <p>Німеччина</p>
            <a href="mailto:contact@yena.de">contact@yena.de</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={plusJakarta.className}>
            ©2026 <span className={styles.bottomBrandLight}>Yena Translations</span>. All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
