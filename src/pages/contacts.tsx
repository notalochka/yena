import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./contacts.module.css";

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
