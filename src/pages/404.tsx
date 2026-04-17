import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/i18n/LanguageContext";
import type { UiLanguage } from "@/i18n/language";
import { getSeo } from "@/i18n/seoPages";
import Link from "next/link";
import revealStyles from "@/styles/pageReveal.module.css";
import styles from "./404.module.css";

const notFoundUi: Record<
  UiLanguage,
  { title: string; description: string; back: string }
> = {
  UA: {
    title: "Сторінку не знайдено",
    description:
      "Можливо, посилання застаріло або сторінку перенесено. Спробуйте повернутися на головну.",
    back: "На головну",
  },
  RU: {
    title: "Страница не найдена",
    description:
      "Ссылка могла устареть или страница была перенесена. Вернитесь на главную.",
    back: "На главную",
  },
  EN: {
    title: "Page not found",
    description:
      "The link may be outdated or the page has moved. Try returning to the home page.",
    back: "Back to home",
  },
  DE: {
    title: "Seite nicht gefunden",
    description:
      "Der Link ist möglicherweise veraltet oder die Seite wurde verschoben.",
    back: "Zur Startseite",
  },
};

export default function NotFoundPage() {
  const { language } = useLanguage();
  const seo = getSeo("notFound", language);
  const ui = notFoundUi[language];

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        noindex
      />
      <Header />
      <main className={styles.main}>
        <section className={styles.card} aria-label={ui.title}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>{ui.title}</h1>
          <p className={styles.description}>{ui.description}</p>
          <Link href="/" className={styles.button}>
            {ui.back}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
