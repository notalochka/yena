import type { HomePageSectionsCopy } from "../homePageTypes";
import { homePageProcessFlowsDe } from "../homePageProcessFlows/de";

const silabotUrl = "https://silabot.de/uk/homepage/";

export const homePageSectionsDe: HomePageSectionsCopy = {
  learnMore: "Übersetzung anfragen",
  readFull: "Vollständig lesen",
  servicesCta: "Alle Leistungen ansehen",
  processBadge: "Prozess",
  processTitle: "Wie funktioniert das?",
  processLead:
    "Ein paar einfache Schritte — von Ihrer Anfrage bis zur fertigen Übersetzung.",
  processTabsAriaLabel: "Art der Übersetzung",
  processSecondaryTabsAriaLabel: "Format der mündlichen Übersetzung",
  processCta: "Übersetzungskosten berechnen",
  aboutPreview: {
    imageAlt: "Nataliia Yena — Übersetzerin und Dolmetscherin",
    quote:
      "Übersetzungsqualität und Vertraulichkeit sind nicht nur Worte. Sie sind das Fundament, auf dem ich seit 1991 jedes Projekt aufbaue.",
    author: "—Nataliia Yena",
    badge: "Über uns",
    title: "Eine Dolmetscherin, der Gerichte und Botschaften vertrauen",
    highlights: [
      {
        title: "Vereidigte Übersetzerin",
        text: "anerkannt von Gerichten und Behörden in Hessen für DE/UA/RU",
      },
      {
        title: "British Diploma in Translation",
        text: "befugt für beglaubigte Übersetzungen EN",
      },
      {
        title: "LSE, London",
        text: "Weiterbildung in Politikwissenschaft",
      },
      {
        title: "Konferenzdolmetscherin",
        text: "ich organisiere Teams und technische Ausstattung für Veranstaltungen",
      },
      {
        title: "Silabot",
        text: "unser spezialisiertes Portal für beglaubigte Übersetzungen amtlicher Dokumente mit Zustellung",
      },
    ],
  },
  serviceCards: [
    {
      title: "Dolmetschen",
      description:
        "Ich biete professionelles Dolmetschen mit Schwerpunkt Konferenzdolmetschen, mehrsprachige Veranstaltungen und offizielle Kontexte. Ich arbeite aus dem Englischen ins Ukrainische oder Russische, aus dem Deutschen ins Ukrainische oder Russische und umgekehrt — simultan, konsekutiv, remote und im Verhandlungsdolmetschen. Beim Dolmetschen betreue ich gern erfahrene Kolleg:innen, mit einigen von ihnen bin ich seit über 30 Jahren bekannt.",
      extraDescription: "",
      image: "/main_photo3.png",
      imageAlt: "Dolmetschen",
      href: "/interpreting",
      colorClass: "serviceCardOrange",
      ctaClass: "serviceCardCtaOrange",
      accentClass: "serviceAccentOrange",
    },
    {
      title: "Schriftliche Übersetzung",
      description:
        "Mein Team qualifizierter Übersetzer:innen liefert professionelle Übersetzungen fachlicher, juristischer, technischer, medizinischer und literarischer Texte. Wir arbeiten mit Industriedokumentation, IT, Verträgen, Fach- und Sachbüchern, Werbung und Webinhalten. Website-Lokalisierung übernehmen erfahrene Expert:innen mit CMS-Kenntnissen und praktischer Erfahrung in diesem Bereich.",
      extraDescription:
        "Auf Wunsch verzichten wir vollständig auf maschinelle Übersetzung — dann arbeiten ausschließlich Menschen. Parallel bieten wir Post-Editing von MT als separate Leistung an.",
      image: "/main_photo4.png",
      imageAlt: "Schriftliche Übersetzung",
      href: "/written-translation",
      colorClass: "serviceCardBlue",
      ctaClass: "serviceCardCtaBlue",
      accentClass: "serviceAccentBlue",
    },
    {
      title: "Beglaubigte Übersetzung amtlicher Dokumente",
      description:
        "Ich bin vereidigte Übersetzerin für Ukrainisch und Russisch und berechtigt, beglaubigte Übersetzungen aus dem Englischen und ins Englische auf Grundlage eines britischen Übersetzerdiploms für Behörden zu erstellen. Ich darf Richtigkeit und Vollständigkeit beglaubigen. Von mir als vereidigte Übersetzerin beglaubigte Übersetzungen werden in Deutschland und anderen Ländern anerkannt.",
      extraDescription: {
        before:
          "In Einzelfällen kann eine weitere Legalisierung nötig sein, z. B. eine Apostille. Mehr zu dieser Übersetzungsart finden Sie auf dem Portal Silabot, ",
        linkLabel: "Link folgen",
        after: ".",
        href: silabotUrl,
      },
      image: "/main_photo5.png",
      imageAlt: "Beglaubigte Übersetzung amtlicher Dokumente",
      href: "/official-documents",
      colorClass: "serviceCardOlive",
      ctaClass: "serviceCardCtaOlive",
      accentClass: "serviceAccentOlive",
    },
  ],
  processFlows: homePageProcessFlowsDe,
  benefitsItems: [
    {
      image: "/translate1.svg",
      alt: "Qualifizierte Übersetzer:innen",
      text: "Qualifizierte Übersetzer:innen",
      extraText:
        "Über 35 Jahre Erfahrung helfen mir, die besten Dolmetscher:innen für die Arbeitssprachen zusammenzustellen. Qualität ist unser wichtigster Hebel.",
    },
    {
      image: "/translate2.svg",
      alt: "Vereidigte Gerichtsdolmetscherin",
      text: "Vereidigte Gerichtsdolmetscherin",
      extraText: {
        before:
          "Seit den frühen 2000ern arbeite ich im Gerichtsdolmetschen. Über mein Silabot-Portal, ",
        linkLabel: "Link folgen",
        after:
          ", bietet mein Übersetzungsbüro Leistungen im Bereich des vereidigten Übersetzens an. Vereidigte Übersetzungen werden am häufigsten für amtliche Dokumente verwendet, deren Übersetzung eine Beglaubigung und manchmal auch Legalisierung erfordert, etwa in Form einer Apostille auf der Übersetzung.",
        href: silabotUrl,
      },
    },
    {
      image: "/translate3.svg",
      alt: "Vertraulichkeit",
      text: "Vertraulichkeit",
      extraText:
        "Vertraulichkeit ist so grundlegend wie Bank- oder ärztliche Schweigepflicht. Menschen schlagen MT hier oft: MT versteckt Fehler und liegt auf fremden Servern; Urheberrecht gilt auch für MT.",
    },
    {
      image: "/translate4.svg",
      alt: "Termintreue",
      text: "Termintreue",
      extraText:
        "Neben Textqualität ist strikte Einhaltung von Fristen zentral. Wir liefern zuverlässig — oft sogar vor dem vereinbarten Termin.",
    },
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqItems: [
    {
      question: "Wie lange dauert eine Übersetzung?",
      answer:
        "Im Mittel schafft eine Übersetzerin etwa drei Seiten mittlerer Komplexität pro Tag. Eine Seite hat rund 30 Zeilen bzw. ~1500 Zeichen inklusive Leerzeichen. Bearbeitung braucht zusätzliche Zeit. Große Projekte empfehlen wir einer Übersetzerin; Glossare sind möglich. Express nach Absprache.",
    },
    {
      question: "Welche Dateiformate akzeptieren Sie?",
      answer:
        "Wir bevorzugen offene Formate, meist Word. PDF und andere Formate nur nach Absprache. OCR und Satz sind separate Leistungen.",
    },
    {
      question: "Ist Express möglich?",
      answer:
        "Ja, unter bestimmten Bedingungen — abhängig von Komplexität, Umfang, Terminologie und weiteren Faktoren.",
    },
    {
      question: "Welche Sprachen bieten Sie?",
      answer:
        "Unsere Kernsprachen sind Deutsch, Ukrainisch und Englisch. Weitere Sprachen auf Anfrage.",
    },
    {
      question: "In welchem Format erhalte ich die Übersetzung?",
      answer: {
        before:
          "Das Format richtet sich nach dem Auftrag — offen (meist Word) oder geschützt (z. B. PDF). Beglaubigte Übersetzungen über Silabot,",
        linkText: "Link folgen",
        after:
          ", als Ausdruck mit Unterschrift und Stempel sowie digital mit qualifizierter Signatur.",
        href: silabotUrl,
      },
    },
    {
      question: "Werden Daten nach dem Auftrag gespeichert?",
      answer:
        "Fertige Übersetzungen bewahren wir in der Regel etwa zehn Jahre, danach löschen wir sie. Archivierung erfolgt auf Servern in Deutschland gemäß Datenschutz.",
    },
  ],
};
