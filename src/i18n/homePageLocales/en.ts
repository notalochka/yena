import type { HomePageSectionsCopy } from "../homePageTypes";
import { homePageProcessFlowsEn } from "../homePageProcessFlows/en";

const silabotUrl = "https://silabot.de/uk/homepage/";

export const homePageSectionsEn: HomePageSectionsCopy = {
  learnMore: "Request a translation",
  readFull: "Read in full",
  servicesCta: "View all services",
  processBadge: "Process",
  processTitle: "How does it work?",
  processLead:
    "A few simple steps — from your request to the finished translation.",
  processTabsAriaLabel: "Translation type",
  processSecondaryTabsAriaLabel: "Oral interpreting format",
  processCta: "Calculate translation cost",
  aboutPreview: {
    imageAlt: "Nataliia Yena — interpreter and translator",
    quote:
      "Translation quality and confidentiality are not just words. They are the foundation on which I have built every project since 1991.",
    author: "—Nataliia Yena",
    badge: "About us",
    title: "An interpreter trusted by courts and embassies",
    highlights: [
      {
        title: "Sworn translator",
        text: "recognised by courts and authorities in Hesse for DE/UA/RU",
      },
      {
        title: "British Diploma in Translation",
        text: "authorised for certified translations EN",
      },
      {
        title: "LSE, London",
        text: "further education in political science",
      },
      {
        title: "Conference interpreter",
        text: "I organise teams and technical support for events",
      },
      {
        title: "Silabot",
        text: "our specialised portal for sworn translations of official documents with delivery",
      },
    ],
  },
  serviceCards: [
    {
      title: "Interpreting",
      description:
        "I provide professional interpreting services with a focus on conference interpreting, multilingual events and official settings. I work from English into Ukrainian or Russian, from German into Ukrainian or Russian and vice versa in various formats — simultaneous, consecutive, remote and liaison. For interpreting I gladly involve experienced and trusted colleagues, some of whom I have known for more than 30 years.",
      extraDescription: "",
      image: "/main_photo3.png",
      imageAlt: "Interpreting",
      href: "/interpreting",
      colorClass: "serviceCardOrange",
      ctaClass: "serviceCardCtaOrange",
      accentClass: "serviceAccentOrange",
    },
    {
      title: "Written translation",
      description:
        "My team of qualified translators provides professional written translation of specialised, legal, technical, medical and literary texts. We work with industry documentation, IT, contracts, professional and popular science publications, advertising and website content. Website localisation is carried out by experienced specialists who are familiar with different content management systems and have practical skills in this area.",
      extraDescription:
        "If the client wishes, we can avoid machine translation altogether — in that case the translation is produced exclusively by human linguists. At the same time, keeping pace with technology, we also offer post-editing of machine translation as a separate service.",
      image: "/main_photo4.png",
      imageAlt: "Written translation",
      href: "/written-translation",
      colorClass: "serviceCardBlue",
      ctaClass: "serviceCardCtaBlue",
      accentClass: "serviceAccentBlue",
    },
    {
      title: "Certified translation of official documents",
      description:
        "I am a sworn translator for Ukrainian and Russian, and I am authorised to provide certified translations from English and into English on the basis of a UK diploma in translation for public authorities. I am entitled to certify the accuracy and completeness of a translation. Translations certified by me as a sworn translator are recognised by authorities in Germany and other countries.",
      extraDescription: {
        before:
          "In some cases a certified translation may require further legalisation, for example obtaining an apostille. You can read more about this type of translation on the separate portal of my translation agency called Silabot, ",
        linkLabel: "follow the link",
        after: ".",
        href: silabotUrl,
      },
      image: "/main_photo5.png",
      imageAlt: "Certified translation of official documents",
      href: "/official-documents",
      colorClass: "serviceCardOlive",
      ctaClass: "serviceCardCtaOlive",
      accentClass: "serviceAccentOlive",
    },
  ],
  processFlows: homePageProcessFlowsEn,
  benefitsItems: [
    {
      image: "/translate1.svg",
      alt: "Qualified translators",
      text: "Qualified translators",
      extraText:
        "More than 35 years of professional experience help me assemble the most qualified and talented interpreters for my agency’s languages. Translation quality is the main lever of our work.",
    },
    {
      image: "/translate2.svg",
      alt: "Sworn court interpreter",
      text: "Sworn court interpreter",
      extraText: {
        before:
          "I have worked in legal interpreting since the early 2000s. Through my Silabot portal, ",
        linkLabel: "follow the link",
        after:
          ", my translation agency provides sworn translation services. Sworn translation is most often used for official documents whose translation requires certification and sometimes legalisation, for example in the form of an apostille on the translation.",
        href: silabotUrl,
      },
    },
    {
      image: "/translate3.svg",
      alt: "Confidentiality",
      text: "Confidentiality",
      extraText:
        "Confidentiality in translation is as fundamental as banking secrecy or medical confidentiality. Human translators outperform machine translation here: MT often hides errors and is stored on third-party servers and cannot guarantee data protection in the same way. Copyright applies to MT output too.",
    },
    {
      image: "/translate4.svg",
      alt: "Deadlines",
      text: "Deadlines",
      extraText:
        "Alongside quality, strict adherence to deadlines is central. We aim to deliver flawless work not only on time but sometimes even ahead of the agreed deadline.",
    },
  ],
  faqTitle: "Frequently asked questions",
  faqItems: [
    {
      question: "How long does a translation take?",
      answer:
        "On average, a translator completes about three pages of medium-complexity text per day. One page is about 30 lines or roughly 1,500 characters including spaces. Editing and revision take additional time. For large projects we recommend a single translator; glossaries can be compiled on request. Rush jobs are possible in some cases by separate agreement and depend on complexity, legibility and volume.",
    },
    {
      question: "Which file formats do you accept?",
      answer:
        "We prefer open formats, usually Word. PDFs and other formats require agreement with us. OCR and formatting are separate services, usually performed by a typesetter.",
    },
    {
      question: "Is rush translation possible?",
      answer:
        "Yes, under certain conditions we can offer a rush service. As noted above, feasibility depends on complexity, volume, terminology and other factors.",
    },
    {
      question: "Which languages do you work with?",
      answer:
        "Our main languages are German, Ukrainian and English. Other languages are available on request.",
    },
    {
      question: "In what format will I receive the finished translation?",
      answer: {
        before:
          "The format depends on the order. We can deliver open formats (usually Word) and protected formats such as PDF. Certified translations via our Silabot portal,",
        linkText: "follow the link",
        after:
          ", are available in paper form (print, sworn translator’s signature and stamp) and digitally with a qualified electronic signature.",
        href: silabotUrl,
      },
    },
    {
      question: "Are my data stored after the order is completed?",
      answer:
        "As a rule we retain completed translations for about ten years, after which they are usually deleted. Archiving is carried out on servers in Germany in line with data protection requirements.",
    },
  ],
};
