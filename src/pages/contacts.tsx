import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePageReveal } from "@/hooks/usePageReveal";
import revealStyles from "@/styles/pageReveal.module.css";
import styles from "./contacts.module.css";

export default function ContactsPage() {
  usePageReveal();

  return (
    <div className={`${revealStyles.pageReveal} ${styles.page}`}>
      <Header />
      <div data-page-reveal className={revealStyles.reveal}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
