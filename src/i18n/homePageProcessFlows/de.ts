import type { ProcessFlowCopy } from "../homePageTypes";

const silabotUrl = "https://silabot.de/uk/homepage/";

export const homePageProcessFlowsDe: ProcessFlowCopy[] = [
  {
    label: "Mündlich",
    steps: [
      {
        number: "1",
        title: "Anfrage\nstellen",
        text: {
          before: "Eine Anfrage für mündliches Dolmetschen stellen Sie auf unserer Website, ",
          linkLabel: "Link folgen",
          after:
            ". Im Online-Formular geben Sie Informationen zur Veranstaltung an: Datum und Ort, Anzahl der Sprachen, Ablauf, Dolmetscheart, Bedarf an Technik und Art der Technik. Aufnahme und spätere Nutzung des Dolmetschens stimmen wir separat ab.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "Analyse der\nAnfrage",
        text: "Unser Büro erhält die Angaben aus dem Formular, analysiert sie und erstellt einen Kostenvoranschlag. Dieser kann nur das mündliche Dolmetschen umfassen oder auch Technik und Übersetzung schriftlicher Materialien einschließen.",
      },
      {
        number: "3",
        title: "Team und\nTechnik zusammenstellen",
        text: "Nach Annahme des Kostenvoranschlags stellen wir das Dolmetscherteam und die Technik zusammen. Dolmetscher arbeiten je nach Dauer und Terminologiebelastung zu zweit oder zu dritt. Die Technik kann stationär oder mobil sein, abhängig vom Programmablauf.",
      },
      {
        number: "4",
        title: "Vorbereitungs-\nmaterialien bereitstellen",
        text: "Für den Erfolg der Veranstaltung sind Vorbereitungsmaterialien erforderlich. Jeder professionelle Simultandolmetscher bereitet sich gründlich vor. Dazu sollten rechtzeitig Programm, Präsentationen sowie Video- und Audiomaterialien für die Konferenz sowie vorhandene Glossare und Hintergrundinformationen zum Thema bereitgestellt werden.",
      },
      {
        number: "5",
        title: "Sprech-\ntempo",
        text: "Organisatoren sollten die Teilnehmer informieren, dass Simultan- (oder Konsekutiv-)dolmetschen angeboten wird. Referenten sollten etwa 100 Wörter pro Minute anstreben, also ungefähr eine A4-Seite in etwa drei Minuten. Dieses Tempo entspricht dem natürlichen Sprechrhythmus und ermöglicht eine qualitativ hochwertige Übersetzung in die Zielsprache mit korrekter Wiedergabe von Eigennamen, Zahlen, Vergleichen, Metaphern und anderen Stilmitteln.",
      },
      {
        number: "6",
        title: "Übertragung\noder Aufzeichnung",
        text: "Heute gibt es analoge, digitale und hybride Formen mehrsprachiger Kommunikation. Simultandolmetschen dient vor allem der unmittelbaren Verständigung. Zusätzliche Optionen — Audio-/Videoaufzeichnung, Streaming, Fernsehübertragung, Dokumentation, Schulungsmaterialien, Werbung, Imagefilme — vereinbaren wir im Voraus mit dem Auftraggeber.",
      },
      {
        number: "7",
        title: "Mehrsprachige\nKommunikation vor Ort",
        text: "Unser Ziel ist eine reibungslose Kommunikation aller Teilnehmer. Alle Vorbereitungsschritte münden in den eigentlichen Einsatz: Simultandolmetschen mit vollem Einsatz, basierend auf gründlicher Vorbereitung jedes Dolmetschers anhand der Materialien von Auftraggeber und Referenten.",
      },
      {
        number: "8",
        title: "Feedback\nerhalten",
        text: "Auf Wunsch geben Sie uns Feedback — dafür sind wir Ihnen sehr dankbar, denn so können wir wachsen und unsere Arbeit für Sie verbessern. Feedback ist für uns sehr wertvoll.",
      },
    ],
  },
  {
    label: "Schriftlich",
    steps: [
      {
        number: "1",
        title: "Anfrage\nstellen",
        text: {
          before: "Eine Anfrage für schriftliche Übersetzung stellen Sie über unsere Website, ",
          linkLabel: "Link folgen",
          after:
            ". Im Formular geben Sie den Ausgangstext sowie Angaben zu Zweck und Fristen an. In manchen Fällen ist eine Eilübersetzung möglich; ansonsten gilt die Standardfrist entsprechend der Auftragsreihenfolge.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "Textanalyse",
        text: "Unser Büro erhält die Anfrage, prüft die Textkomplexität und erstellt auf Basis von Komplexität, Umfang und Fristen einen Kostenvoranschlag.",
      },
      {
        number: "3",
        title: "Übersetzung\nbeginnen",
        text: "Der Kostenvoranschlag enthält die wesentlichen Parameter. Nach Prüfung nehmen Sie ihn an oder lehnen ab. Nach Annahme beginnen wir mit der Übersetzung.",
      },
      {
        number: "4",
        title: "Redigieren &\nkorrigieren",
        text: "Dies betrifft besonders komplexe Fachtexte aus Technik, Medizin und anderen Bereichen. Gegebenenfalls binden wir einen erfahrenen Fachredakteur in der Zielsprache ein. Das ist aufwendiger und teurer — Qualität steht für uns im Vordergrund, daher nehmen wir diese Leistung nach Absprache meist in den Leistungsumfang auf.",
      },
      {
        number: "5",
        title: "Layout &\nAuslieferung",
        text: {
          before:
            "Layout ist nötig, wenn Ausgangstexte nicht in offenem Format vorliegen. Es wird in der Regel vom Layouter als separate Leistung erbracht. Übersetzungen mit Beglaubigung und Legalisation erledigen wir über unser Silabot-Portal, ",
          linkLabel: "Link folgen",
          after: ".",
          href: silabotUrl,
        },
      },
      {
        number: "6",
        title: "Übersetzung\nerhalten",
        text: {
          before:
            "Die fertige Übersetzung liefern wir elektronisch (mit oder ohne qualifizierte elektronische Signatur) und/oder in Papierform mit eigenhändiger Unterschrift des beeidigten Übersetzers und Stempel, per Post. Beglaubigte und legalisierte Übersetzungen stellen wir über das Silabot-Portal bereit, ",
          linkLabel: "Link folgen",
          after: ".",
          href: silabotUrl,
        },
      },
    ],
  },
  {
    label: "TV-Veranstaltungen",
    steps: [
      {
        number: "1",
        title: "Anfrage\nstellen",
        text: {
          before: "In Ihrer Anfrage auf unserer Website, ",
          linkLabel: "über den Link",
          after:
            ", geben Sie an, wann und wo der Einsatz stattfindet, sowie Thema und Dauer der Veranstaltung. Außerdem müssen wir wissen, ob der Dolmetscher im Studio des Auftraggebers oder remote arbeitet, z. B. vom eigenen Büro oder einem Dolmetsch-Hub.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "Analyse der\nVeranstaltung",
        text: "Wir analysieren die bereitgestellten Informationen und stimmen die Logistik ab.",
      },
      {
        number: "3",
        title: "Kostenvoranschlag\nerstellen",
        text: "Nach Prüfung der Anfrage senden wir einen Kostenvoranschlag.",
      },
      {
        number: "4",
        title: "Vor Ort oder\nremote dolmetschen",
        text: "Der Dolmetscher fährt ins Studio des Auftraggebers oder bereitet sich im eigenen Büro vor. Verbindung und Ton werden getestet. Zur vereinbarten Zeit erfolgt Simultandolmetschen für das Fernsehen live oder zur Aufzeichnung mit anschließender Bearbeitung.",
      },
      {
        number: "5",
        title: "Feedback\nerhalten",
        text: "Wir freuen uns immer über Feedback — so wachsen wir!",
      },
    ],
  },
  {
    label: "Voice-Over",
    steps: [
      {
        number: "1",
        title: "Anfrage\nstellen",
        text: {
          before: "In Ihrer Anfrage auf unserer Website, ",
          linkLabel: "über den Link",
          after:
            ", geben Sie an, wann und wo der Einsatz stattfindet, sowie Thema und Dauer des Dolmetschens.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "Analyse der\nVeranstaltung",
        text: "Wir analysieren die bereitgestellten Informationen und stimmen die Logistik ab.",
      },
      {
        number: "3",
        title: "Kostenvoranschlag\nerstellen",
        text: "Nach Prüfung der Anfrage senden wir einen Kostenvoranschlag.",
      },
      {
        number: "4",
        title: "Arbeit\nim Studio",
        text: "Der Dolmetscher fährt ins Studio des Auftraggebers. Nach Tests von Verbindung und Ton erfolgt zur vereinbarten Zeit entweder live Simultandolmetschen im Studio oder Aufnahme mit Bearbeitung vor der Ausstrahlung.",
      },
      {
        number: "5",
        title: "Feedback\nerhalten",
        text: "Wir freuen uns immer über Feedback — so wachsen wir!",
      },
    ],
  },
  {
    label: "Echtzeit-Untertitelung",
    steps: [
      {
        number: "1",
        title: "Anfrage\nstellen",
        text: {
          before: "In Ihrer Anfrage auf unserer Website, ",
          linkLabel: "über den Link",
          after:
            ", geben Sie an, wann und wo gesprochene Sprache in Schriftform mit gleichzeitiger Übersetzung in die Zielsprache wiedergegeben werden soll. Sie nennen Thema und Dauer der Veranstaltung sowie die Anzahl der eingesetzten Dolmetscher.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "Analyse der\nVeranstaltung",
        text: "Wir analysieren die bereitgestellten Informationen und stimmen die Logistik ab.",
      },
      {
        number: "3",
        title: "Kostenvoranschlag\nerstellen",
        text: "Nach Prüfung der Anfrage senden wir einen Kostenvoranschlag.",
      },
      {
        number: "4",
        title: "Durchführung\ndes Dolmetschens",
        text: "Der Dolmetscher fährt zur Veranstaltung des Auftraggebers. Verbindung und Ton werden getestet. Zur vereinbarten Zeit wird gesprochener Vortrag in Schriftform mit gleichzeitiger Übersetzung übertragen. Diese Form ist nötig, wenn unter den Teilnehmern Menschen mit Einschränkungen, z. B. beim Hören, sind, damit sie in Echtzeit dem Geschehen folgen können.",
      },
      {
        number: "5",
        title: "Feedback\nerhalten",
        text: "Wir freuen uns immer über Feedback — so wachsen wir!",
      },
    ],
  },
];
