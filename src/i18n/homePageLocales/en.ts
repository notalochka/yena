import type { HomePageSectionsCopy } from "../homePageTypes";

const silabotUrl = "https://silabot.de/uk/homepage/";

export const homePageSectionsEn: HomePageSectionsCopy = {
  learnMore: "Learn more",
  servicesCta: "View all services",
  processTitle: "How does it work?",
  processTabsAriaLabel: "Translation type",
  serviceCards: [
    {
      title: "Interpreting",
      description:
        "I provide professional interpreting services with a focus on conference interpreting, multilingual events and official settings. I work from English into Ukrainian or Russian, from German into Ukrainian or Russian and vice versa in various formats — simultaneous, consecutive, remote and liaison. For interpreting I gladly involve experienced and trusted colleagues, some of whom I have known for more than 30 years.",
      extraDescription:
        "I have specialised training as a conference interpreter, many years of practical experience and international preparation in the countries of my working languages. I support events end to end: from advising on the interpreting format, building a team and selecting technical solutions to coordinating interpreters during the event.",
      image: "/main_photo3.png",
      imageAlt: "Interpreting",
      href: "/interpreting",
      colorClass: "serviceCardOrange",
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
      accentClass: "serviceAccentBlue",
    },
    {
      title: "Certified translation of official documents",
      description:
        "I am a sworn translator for Ukrainian and Russian, and I am authorised to provide certified translations from English and into English on the basis of a UK diploma in translation for public authorities. I am entitled to certify the accuracy and completeness of a translation.",
      extraDescription: {
        before:
          "Translations certified by me as a sworn translator are recognised by authorities in Germany and other countries. In some cases a certified translation may require further legalisation, for example obtaining an apostille. You can read more about this type of translation on the separate portal of my translation agency called Silabot,",
        linkLabel: "follow the link",
        after: ".",
        href: silabotUrl,
      },
      image: "/main_photo5.png",
      imageAlt: "Certified translation of official documents",
      href: "/official-documents",
      colorClass: "serviceCardOlive",
      accentClass: "serviceAccentOlive",
    },
  ],
  processFlows: [
    {
      label: "Oral",
      steps: [
        {
          number: "1",
          title: "Submit a\nrequest",
          text: "You submit a request for oral interpreting on our website. In the online form you provide details about the event: date and venue, number of languages, schedule, interpreting type, equipment needs and equipment type. We also agree separately on recording and subsequent use of the interpreting.",
        },
        {
          number: "2",
          title: "We review\nyour request",
          text: "Our office receives the information from the enquiry form, analyses it and prepares a quote. The quote may cover oral interpreting only, or also equipment and translation of written materials.",
        },
        {
          number: "3",
          title: "We assemble\nthe team & gear",
          text: "After you accept the quote, we select a team of interpreters and equipment. Interpreters may work in pairs or trios depending on the duration and terminology load of the event. Equipment may be stationary or mobile depending on the programme.",
        },
        {
          number: "4",
          title: "You provide\nprep materials",
          text: "For a successful event, preparatory materials must be provided. Every professional simultaneous interpreter prepares thoroughly. You should share the programme, presentations, video and audio materials to be used during the conference in good time, as well as any glossaries and background reading on the conference topic.",
        },
        {
          number: "5",
          title: "Speaking\npace",
          text: "Organisers should inform participants that simultaneous (or consecutive) interpreting will be provided. Speakers should aim for roughly 100 words per minute, or about one A4 page every three minutes. This pace is close to natural speech and helps ensure quality in the target language, including names, figures, comparisons and figures of speech.",
        },
        {
          number: "6",
          title: "Broadcast\nor recording",
          text: "Today multilingual communication may be analogue, digital or hybrid. Simultaneous interpreting is primarily for real-time communication. Additional options — audio/video recording, streaming, TV broadcast, documentation, training materials, advertising, image films — are agreed in advance with the client.",
        },
        {
          number: "7",
          title: "We deliver\nmultilingual communication",
          text: "Our goal is seamless communication among participants. All preparation leads to the core moment: providing simultaneous interpreting with full technical support, based on solid preparation by each interpreter using materials from the client and speakers.",
        },
        {
          number: "8",
          title: "We receive\nfeedback",
          text: "If you wish, you can share feedback with us — we are very grateful for it, because it helps us grow and improve our work for you.",
        },
      ],
    },
    {
      label: "Written",
      steps: [
        {
          number: "1",
          title: "Submit a\nrequest",
          text: "You submit a written translation request via our website. In the form you provide the source text and information on purpose and deadlines. In some cases an urgent translation can be ordered; otherwise the deadline follows our standard queue.",
        },
        {
          number: "2",
          title: "We analyse\nthe text",
          text: "Our office receives the enquiry, assesses text complexity and prepares a quote based on complexity, volume and deadlines.",
        },
        {
          number: "3",
          title: "We start\ntranslating",
          text: "The quote sets out the main parameters. After reviewing it you accept or decline. Once accepted, we begin the translation.",
        },
        {
          number: "4",
          title: "Editing &\nrevision",
          text: "This especially applies to complex technical, medical and sector-specific texts. We may involve a subject-matter editor in the target language. This takes more time and costs more, but we prioritise quality and usually include this in the scope after agreement.",
        },
        {
          number: "5",
          title: "Typesetting &\ndelivery prep",
          text: "Typesetting is required when sources are not supplied in an open format. It is usually done by a typesetter as a separate line item. Translations requiring certification or legalisation are handled via our Silabot portal.",
        },
        {
          number: "6",
          title: "You receive\nthe translation",
          text: "We deliver the finished translation electronically (with or without a qualified electronic signature if required) and/or in paper form with the sworn translator’s signature and stamp, sent by post. Certified and legalised translations are provided via Silabot.",
        },
      ],
    },
    {
      label: "TV",
      steps: [
        {
          number: "1",
          title: "Submit a\nrequest",
          text: "In your request you indicate when and where the assignment takes place, the topic and duration, and whether the interpreter works on the client’s premises or remotely (e.g. from an office or interpreting hub).",
        },
        {
          number: "2",
          title: "We review\nthe event",
          text: "We analyse the information, align logistics and, after review, send a quote.",
        },
        {
          number: "3",
          title: "We interpret",
          text: "The interpreter goes to the studio or works from their office. Audio and connection are tested. At the agreed time, simultaneous interpreting for television is provided live or recorded for later editing.",
        },
        {
          number: "4",
          title: "We receive\nfeedback",
          text: "We always appreciate feedback — it helps us grow!",
        },
      ],
    },
    {
      label: "Voice-Over",
      steps: [
        {
          number: "1",
          title: "Submit a\nrequest",
          text: "You indicate when and where the assignment takes place and provide topic and duration.",
        },
        {
          number: "2",
          title: "We review\nthe event",
          text: "We analyse the information, align logistics and send a quote after review.",
        },
        {
          number: "3",
          title: "Studio\nwork",
          text: "The interpreter travels to the client’s studio. After audio and connection tests, live simultaneous interpreting in the studio or recorded interpreting with editing before broadcast is provided at the agreed time.",
        },
        {
          number: "4",
          title: "We receive\nfeedback",
          text: "We always appreciate feedback — it helps us grow!",
        },
      ],
    },
    {
      label: "Schriftdolmetschen",
      steps: [
        {
          number: "1",
          title: "Submit a\nrequest",
          text: "You indicate when and where spoken content is to be rendered in writing with simultaneous translation into the target language, plus topic, duration and number of interpreters involved.",
        },
        {
          number: "2",
          title: "We review\nthe event",
          text: "We analyse the information, align logistics and send a quote after review.",
        },
        {
          number: "3",
          title: "We interpret",
          text: "The interpreter travels to the client’s event. After tests, spoken contributions are transferred into written form with simultaneous translation. This supports participants with accessibility needs (e.g. hearing) so they can follow the event in real time.",
        },
        {
          number: "4",
          title: "We receive\nfeedback",
          text: "We always appreciate feedback — it helps us grow!",
        },
      ],
    },
  ],
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
      extraText:
        "I have worked in legal interpreting since the early 2000s. Through my Silabot portal my agency provides sworn interpreting services. Sworn translation is often used for official documents that require certification and sometimes legalisation, such as an apostille.",
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
