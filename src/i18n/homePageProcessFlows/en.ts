import type { ProcessFlowCopy } from "../homePageTypes";

const silabotUrl = "https://silabot.de/uk/homepage/";

export const homePageProcessFlowsEn: ProcessFlowCopy[] = [
  {
    label: "Oral",
    steps: [
      {
        number: "1",
        title: "Submit a\nrequest",
        text: {
          before: "You submit a request for oral interpreting on our website, ",
          linkLabel: "follow the link",
          after:
            ". In the online form you provide details about the event: date and venue, number of languages, schedule, interpreting type, equipment needs and equipment type. We also agree separately on recording and subsequent use of the interpreting.",
          href: silabotUrl,
        },
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
        text: "If you wish, you can share feedback with us — we are very grateful for it, because it helps us grow and improve our work for you. Feedback is very valuable to us.",
      },
    ],
  },
  {
    label: "Written",
    steps: [
      {
        number: "1",
        title: "Submit a\nrequest",
        text: {
          before: "You submit a written translation request via our website, ",
          linkLabel: "follow the link",
          after:
            ". In the form you provide the source text and information on purpose and deadlines. In some cases an urgent translation can be ordered; otherwise the deadline follows our standard queue.",
          href: silabotUrl,
        },
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
        text: {
          before:
            "Typesetting is required when sources are not supplied in an open format. It is usually done by a typesetter as a separate line item. Translations requiring certification or legalisation are handled via our Silabot portal, ",
          linkLabel: "follow the link",
          after: ".",
          href: silabotUrl,
        },
      },
      {
        number: "6",
        title: "You receive\nthe translation",
        text: {
          before:
            "We deliver the finished translation electronically (with or without a qualified electronic signature if required) and/or in paper form with the sworn translator’s signature and stamp, sent by post. Certified and legalised translations are provided via the Silabot portal, ",
          linkLabel: "follow the link",
          after: ".",
          href: silabotUrl,
        },
      },
    ],
  },
  {
    label: "TV events",
    steps: [
      {
        number: "1",
        title: "Submit a\nrequest",
        text: {
          before: "In your request on our website, ",
          linkLabel: "use this link",
          after:
            ", you indicate when and where the assignment takes place, the topic and duration of the event. We also need to know whether the interpreter works on the client’s premises or remotely, e.g. from an office or interpreting hub.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "We review\nthe event",
        text: "We analyse the information provided and align logistics.",
      },
      {
        number: "3",
        title: "We prepare\na quote",
        text: "After reviewing the enquiry we send a quote.",
      },
      {
        number: "4",
        title: "On-site or\nremote interpreting",
        text: "The interpreter either goes to the client’s studio or prepares to work from their office. Audio and connection are tested. At the agreed time, simultaneous interpreting for television is provided live or recorded for later editing.",
      },
      {
        number: "5",
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
        text: {
          before: "In your request on our website, ",
          linkLabel: "use this link",
          after:
            ", you indicate when and where the assignment takes place and provide the topic and duration of the interpreting.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "We review\nthe event",
        text: "We analyse the information provided and align logistics.",
      },
      {
        number: "3",
        title: "We prepare\na quote",
        text: "After reviewing the enquiry we send a quote.",
      },
      {
        number: "4",
        title: "Studio\nwork",
        text: "The interpreter travels to the client’s studio. After audio and connection tests, live simultaneous interpreting in the studio or recorded interpreting with editing before broadcast is provided at the agreed time.",
      },
      {
        number: "5",
        title: "We receive\nfeedback",
        text: "We always appreciate feedback — it helps us grow!",
      },
    ],
  },
  {
    label: "Real-time subtitling",
    steps: [
      {
        number: "1",
        title: "Submit a\nrequest",
        text: {
          before: "In your request on our website, ",
          linkLabel: "use this link",
          after:
            ", you indicate when and where spoken content is to be rendered in writing with simultaneous translation into the target language. You also provide the topic and duration of the event and the number of interpreters involved.",
          href: silabotUrl,
        },
      },
      {
        number: "2",
        title: "We review\nthe event",
        text: "We analyse the information provided and align logistics.",
      },
      {
        number: "3",
        title: "We prepare\na quote",
        text: "After reviewing the enquiry we send a quote.",
      },
      {
        number: "4",
        title: "Providing\ninterpreting",
        text: "The interpreter travels to the client’s event. After tests, spoken contributions are transferred into written form with simultaneous translation. This supports participants with accessibility needs (e.g. hearing) so they can follow the event in real time.",
      },
      {
        number: "5",
        title: "We receive\nfeedback",
        text: "We always appreciate feedback — it helps us grow!",
      },
    ],
  },
];
