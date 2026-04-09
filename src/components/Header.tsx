import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Header.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const menuItems = [
  { href: "/", label: "Головна", pathname: "/" },
  { href: "/about", label: "Про нас", pathname: "/about" },
  { href: "/services", label: "Послуги", pathname: "/services" },
  { href: "/contacts", label: "Контакти", pathname: "/contacts" },
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="Yena logo"
            width={42}
            height={64}
            className={styles.logo}
            priority
          />
        </div>

        <button
          type="button"
          className={`${styles.burgerButton} ${
            isMenuOpen ? styles.burgerButtonOpen : ""
          }`}
          aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        <nav
          aria-label="Головне меню"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <ul className={`${sourceSans.className} ${styles.menuList}`}>
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  className={`${styles.menuLink} ${
                    item.pathname && router.pathname === item.pathname
                      ? styles.menuLinkActive
                      : ""
                  }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
