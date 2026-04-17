export type ProcessStepCopy = {
  number: string;
  title: string;
  text: string;
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
  description: string;
  extraDescription: ServiceCardExtra;
  image: string;
  imageAlt: string;
  href: string;
  colorClass: "serviceCardOrange" | "serviceCardBlue" | "serviceCardOlive";
  accentClass: "serviceAccentOrange" | "serviceAccentBlue" | "serviceAccentOlive";
};

export type BenefitItemCopy = {
  image: string;
  alt: string;
  text: string;
  extraText: string;
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

export type HomePageSectionsCopy = {
  learnMore: string;
  servicesCta: string;
  processTitle: string;
  processTabsAriaLabel: string;
  serviceCards: ServiceCardCopy[];
  processFlows: ProcessFlowCopy[];
  benefitsItems: BenefitItemCopy[];
  faqTitle: string;
  faqItems: FaqItemCopy[];
};
