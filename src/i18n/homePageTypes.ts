export type ProcessStepText =
  | string
  | {
      before: string;
      linkLabel: string;
      after: string;
      href: string;
    };

export type ProcessStepCopy = {
  number: string;
  title: string;
  text: ProcessStepText;
};

export type ProcessFlowCopy = {
  label: string;
  steps: ProcessStepCopy[];
};

export type ServiceCardExtra =
  | string
  | {
      before: string;
      linkLabel: string;
      after: string;
      href: string;
    };

export type ServiceCardCopy = {
  title: string;
  description: ServiceCardExtra;
  extraDescription: ServiceCardExtra;
  image: string;
  imageAlt: string;
  href: string;
  colorClass: "serviceCardOrange" | "serviceCardBlue" | "serviceCardOlive";
  ctaClass: "serviceCardCtaOrange" | "serviceCardCtaBlue" | "serviceCardCtaOlive";
  accentClass: "serviceAccentOrange" | "serviceAccentBlue" | "serviceAccentOlive";
};

export type BenefitItemCopy = {
  image: string;
  alt: string;
  text: string;
  extraText: ProcessStepText;
};

export type FaqAnswerCopy =
  | string
  | {
      before: string;
      linkText: string;
      after: string;
      href: string;
    };

export type FaqItemCopy = {
  question: string;
  answer: FaqAnswerCopy;
};

export type AboutPreviewHighlightCopy = {
  title: string;
  text: string;
};

export type AboutPreviewCopy = {
  imageAlt: string;
  quote: string;
  author: string;
  badge: string;
  title: string;
  highlights: AboutPreviewHighlightCopy[];
};

export type HomePageSectionsCopy = {
  learnMore: string;
  readFull: string;
  servicesCta: string;
  processBadge: string;
  processTitle: string;
  processLead: string;
  processTabsAriaLabel: string;
  processSecondaryTabsAriaLabel: string;
  processCta: string;
  aboutPreview: AboutPreviewCopy;
  serviceCards: ServiceCardCopy[];
  processFlows: ProcessFlowCopy[];
  benefitsItems: BenefitItemCopy[];
  faqTitle: string;
  faqItems: FaqItemCopy[];
};
