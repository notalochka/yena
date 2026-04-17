import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/language";
import { layoutCopyByLang } from "@/i18n/layout";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./Header.module.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const serviceDetailPaths = [
  "/interpreting",
  "/written-translation",
  "/official-documents",
] as const;

export default function Header() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langWrapRef = useRef<HTMLDivElement | null>(null);
  const langMenuId = useId();

  useEffect(() => {
    if (!isLangOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!langWrapRef.current?.contains(target)) setIsLangOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLangOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown, { capture: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown, { capture: true } as never);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLangOpen]);

  const copy = layoutCopyByLang[language].header;
  const menuItems = [
    { href: "/", label: copy.menu.home, pathname: "/" },
    { href: "/about", label: copy.menu.about, pathname: "/about" },
    {
      href: "/services",
      label: copy.menu.services,
      pathname: "/services",
      additionalActivePaths: [...serviceDetailPaths],
    },
    { href: "/contacts", label: copy.menu.contacts, pathname: "/contacts" },
  ] as const;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <ImageWithPlaceholder
            src="/logo.png"
            alt="Yena logo"
            width={230}
            height={70}
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.langWrap} ref={langWrapRef}>
            <button
              type="button"
              className={styles.langButton}
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
              aria-controls={langMenuId}
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <span className={styles.langCode}>{language}</span>
              <svg
                className={`${styles.langChevron} ${isLangOpen ? styles.langChevronOpen : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0.5 0.5L5.45385 5.45385L10.4077 0.5"
                  stroke="#C95118"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {isLangOpen && (
              <div id={langMenuId} role="menu" className={styles.langMenu}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={language === lang.code}
                    className={`${styles.langOption} ${
                      language === lang.code ? styles.langOptionActive : ""
                    }`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                  >
                    <span className={styles.langOptionCode}>{lang.code}</span>
                    <span className={styles.langOptionLabel}>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

        <button
          type="button"
          className={`${styles.burgerButton} ${
            isMenuOpen ? styles.burgerButtonOpen : ""
          }`}
          aria-label={isMenuOpen ? copy.burgerClose : copy.burgerOpen}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        <nav
          aria-label={copy.navLabel}
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <ul className={`${sourceSans.className} ${styles.menuList}`}>
            {menuItems.map((item) => {
              const isActive =
                (item.pathname !== undefined &&
                  router.pathname === item.pathname) ||
                ("additionalActivePaths" in item &&
                  item.additionalActivePaths?.includes(
                    router.pathname as (typeof serviceDetailPaths)[number],
                  ));

              return (
              <li key={item.label}>
                <Link
                  className={`${styles.menuLink} ${
                    isActive ? styles.menuLinkActive : ""
                  }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
              );
            })}
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}
