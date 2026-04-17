import type { HomePageSectionsCopy } from "../homePageTypes";

const silabotUrl = "https://silabot.de/uk/homepage/";

export const homePageSectionsDe: HomePageSectionsCopy = {
  learnMore: "Mehr erfahren",
  servicesCta: "Alle Leistungen ansehen",
  processTitle: "Wie funktioniert das?",
  processTabsAriaLabel: "Art der Übersetzung",
  serviceCards: [
    {
      title: "Dolmetschen",
      description:
        "Ich biete professionelles Dolmetschen mit Schwerpunkt Konferenzdolmetschen, mehrsprachige Veranstaltungen und offizielle Kontexte. Ich arbeite aus dem Englischen ins Ukrainische oder Russische, aus dem Deutschen ins Ukrainische oder Russische und umgekehrt — simultan, konsekutiv, remote und im Verhandlungsdolmetschen. Beim Dolmetschen betreue ich gern erfahrene Kolleg:innen, mit einigen bin ich seit über 30 Jahren bekannt.",
      extraDescription:
        "Ich habe eine spezialisierte Ausbildung als Konferenzdolmetscherin, langjährige Praxis und internationale Vorbereitung in den Ländern meiner Arbeitssprachen. Ich begleite Veranstaltungen ganzheitlich: von der Beratung zum Dolmetschformat über Teamfindung und technische Lösungen bis zur Koordination während der Veranstaltung.",
      image: "/main_photo3.png",
      imageAlt: "Dolmetschen",
      href: "/interpreting",
      colorClass: "serviceCardOrange",
      accentClass: "serviceAccentOrange",
    },
    {
      title: "Schriftliche Übersetzung",
      description:
        "Mein Team qualifizierter Übersetzer:innen liefert professionelle Übersetzungen fachlicher, juristischer, technischer, medizinischer und literarischer Texte. Wir arbeiten mit Industriedokumentation, IT, Verträgen, Fach- und Sachbüchern, Werbung und Webinhalten. Website-Lokalisierung übernehmen erfahrene Expert:innen mit CMS-Kenntnissen.",
      extraDescription:
        "Auf Wunsch verzichten wir vollständig auf maschinelle Übersetzung — dann arbeiten ausschließlich Menschen. Parallel bieten wir Post-Editing von MT als separate Leistung an.",
      image: "/main_photo4.png",
      imageAlt: "Schriftliche Übersetzung",
      href: "/written-translation",
      colorClass: "serviceCardBlue",
      accentClass: "serviceAccentBlue",
    },
    {
      title: "Beglaubigte Übersetzung amtlicher Dokumente",
      description:
        "Ich bin vereidigte Übersetzerin für Ukrainisch und Russisch und berechtigt, beglaubigte Übersetzungen aus dem Englischen und ins Englische auf Grundlage eines britischen Übersetzerdiploms für Behörden zu erstellen. Ich darf Richtigkeit und Vollständigkeit beglaubigen.",
      extraDescription: {
        before:
          "Von mir als vereidigte Übersetzerin beglaubigte Übersetzungen werden in Deutschland und anderen Ländern anerkannt. In Einzelfällen kann eine weitere Legalisierung nötig sein, z. B. eine Apostille. Mehr zu dieser Übersetzungsart finden Sie auf dem Portal Silabot,",
        linkLabel: "Link folgen",
        after: ".",
        href: silabotUrl,
      },
      image: "/main_photo5.png",
      imageAlt: "Beglaubigte Übersetzung amtlicher Dokumente",
      href: "/official-documents",
      colorClass: "serviceCardOlive",
      accentClass: "serviceAccentOlive",
    },
  ],
  processFlows: [
    {
      label: "Mündlich",
      steps: [
        {
          number: "1",
          title: "Anfrage\nstellen",
          text: "Die Anfrage für mündliches Dolmetschen stellen Sie auf unserer Website. Im Formular geben Sie Datum, Ort, Sprachenzahl, Ablauf, Dolmetschart, Technikbedarf und Techniktyp an. Aufnahme und spätere Nutzung stimmen wir separat ab.",
        },
        {
          number: "2",
          title: "Wir prüfen\ndie Anfrage",
          text: "Unser Büro wertet die Angaben aus und erstellt ein Angebot — nur Dolmetschen oder inklusive Technik und schriftlicher Materialien.",
        },
        {
          number: "3",
          title: "Team &\nTechnik",
          text: "Nach Annahme des Angebots wählen wir Dolmetscher:innen und Technik. Teams arbeiten zu zweit oder zu dritt je nach Dauer und Terminologie. Technik kann stationär oder mobil sein.",
        },
        {
          number: "4",
          title: "Vorbereitungs-\nmaterialien",
          text: "Für den Erfolg brauchen wir Vorbereitungsmaterialien. Jede Profi-Simultan:in bereitet sich vor: Programm, Präsentationen, Audio/Video, Glossare und Hintergrundinfos zum Thema.",
        },
        {
          number: "5",
          title: "Sprech-\ntempo",
          text: "Organisator:innen informieren über Simultan- oder Konsekutivdolmetschen. Redner:innen sollten etwa 100 Wörter pro Minute oder eine A4-Seite in ~3 Minuten anstreben — das unterstützt Qualität und Figuren der Sprache.",
        },
        {
          number: "6",
          title: "Übertragung\noder Aufnahme",
          text: "Mehrsprachige Kommunikation ist analog, digital oder hybrid. Simultan dolmetschen dient vor allem der Echtzeit-Kommunikation. Zusätzliche Optionen wie Aufnahme, Streaming, TV, Dokumentation oder Schulungsmaterialien werden vorab vereinbart.",
        },
        {
          number: "7",
          title: "Umsetzung\nvor Ort",
          text: "Ziel ist reibungslose Kommunikation. Die Vorbereitung mündet im Simultandolmetschen mit voller technischer Ausstattung und fundierter Vorbereitung jeder Dolmetscherin.",
        },
        {
          number: "8",
          title: "Feedback",
          text: "Gerne nehmen wir Ihr Feedback entgegen — damit wachsen wir und verbessern unsere Arbeit für Sie.",
        },
      ],
    },
    {
      label: "Schriftlich",
      steps: [
        {
          number: "1",
          title: "Anfrage\nstellen",
          text: "Schriftliche Übersetzung bestellen Sie online mit Ausgangstext, Zweck und Frist. Express ist teils möglich; sonst Standardfrist nach Auftragsreihenfolge.",
        },
        {
          number: "2",
          title: "Text-\nanalyse",
          text: "Wir bewerten Komplexität und erstellen ein Angebot nach Komplexität, Umfang und Termin.",
        },
        {
          number: "3",
          title: "Übersetzung\nstarten",
          text: "Das Angebot enthält die Eckdaten. Nach Annahme beginnen wir mit der Übersetzung.",
        },
        {
          number: "4",
          title: "Redaktion\n& Korrektorat",
          text: "Besonders bei technischen, medizinischen und Fachtexten binden wir Fachredakteur:innen ein — zeit- und kostenintensiver, aber qualitätsorientiert und nach Absprache im Leistungsumfang.",
        },
        {
          number: "5",
          title: "Layout &\nAuslieferung",
          text: "Layout ist nötig, wenn keine offenen Formate vorliegen; meist durch Layoutspezialist:in. Beglaubigte und legalisierte Übersetzungen laufen über Silabot.",
        },
        {
          number: "6",
          title: "Lieferung",
          text: "Lieferung digital (optional qualifizierte Signatur) und/oder Papier mit Siegel und Unterschrift per Post. Beglaubigte Übersetzungen über Silabot.",
        },
      ],
    },
    {
      label: "TV",
      steps: [
        {
          number: "1",
          title: "Anfrage\nstellen",
          text: "Ort, Zeit, Thema, Dauer und ob im Studio des Auftraggebers oder remote.",
        },
        {
          number: "2",
          title: "Prüfung",
          text: "Wir prüfen die Angaben, klären Logistik und unterbreiten ein Angebot.",
        },
        {
          number: "3",
          title: "Dolmetschen",
          text: "Dolmetscher:in im Studio oder vom Büro aus. Tests von Ton und Verbindung. Simultandolmetschen für TV live oder aufgezeichnet mit Schnitt.",
        },
        {
          number: "4",
          title: "Feedback",
          text: "Wir freuen uns über Feedback — so werden wir besser!",
        },
      ],
    },
    {
      label: "Voice-Over",
      steps: [
        {
          number: "1",
          title: "Anfrage\nstellen",
          text: "Zeit, Ort, Thema und Dauer angeben.",
        },
        {
          number: "2",
          title: "Prüfung",
          text: "Analyse, Logistik, Angebot.",
        },
        {
          number: "3",
          title: "Studio",
          text: "Dolmetscher:in im Studio des Auftraggebers; Tests; live oder Aufnahme mit Schnitt vor Ausstrahlung.",
        },
        {
          number: "4",
          title: "Feedback",
          text: "Wir freuen uns über Feedback — so werden wir besser!",
        },
      ],
    },
    {
      label: "Schriftdolmetschen",
      steps: [
        {
          number: "1",
          title: "Anfrage\nstellen",
          text: "Wann und wo gesprochene Inhalte schriftlich mit gleichzeitiger Übersetzung erfasst werden, Thema, Dauer, Anzahl Dolmetscher:innen.",
        },
        {
          number: "2",
          title: "Prüfung",
          text: "Analyse, Logistik, Angebot.",
        },
        {
          number: "3",
          title: "Dolmetschen",
          text: "Dolmetscher:in vor Ort; Tests; mündliche Beiträge werden in Text mit Zielsprache übertragen — z. B. für barrierefreie Teilnahme.",
        },
        {
          number: "4",
          title: "Feedback",
          text: "Wir freuen uns über Feedback — so werden wir besser!",
        },
      ],
    },
  ],
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
      extraText:
        "Seit den frühen 2000ern im Gerichtsdolmetschen. Über Silabot bieten wir vereidigtes Dolmetschen — oft für Urkunden, die Beglaubigung und manchmal Legalisierung brauchen.",
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
