import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Seo } from "@/components/Seo";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { getSeo } from "@/i18n/seoPages";
import revealStyles from "@/styles/pageReveal.module.css";
import styles from "./contacts.module.css";

export default function ContactsPage() {
  usePageReveal();
  const { language } = useLanguage();
  const seo = getSeo("contacts", language);

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Seo title={seo.title} description={seo.description} path={seo.path} />
      <Header />
      <div data-page-reveal className={revealStyles.reveal}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
