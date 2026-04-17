import type { UiLanguage } from "./language";

export type ContactCopy = {
  title: string;
  subtitle?: string;
  nameLabel: string;
  emailLabel: string;
  requestLabel: string;
  requestHint: string;
  consentPrefix: string;
  consentOffer: string;
  consentMiddle: string;
  consentPrivacy: string;
  submit: string;
  asideAlt: string;
  asideTextBeforeEmail: string;
  consultMe: string;
};

export const contactCopyByLang: Record<
  UiLanguage,
  {
    contact: ContactCopy;
    contactSection: ContactCopy;
  }
> = {
  UA: {
    contact: {
      title: "Контакти для з’єднання",
      subtitle: "Напишіть нам якщо маєте якесь запитання",
      nameLabel: "ІМ’Я *",
      emailLabel: "EMAIL *",
      requestLabel: "ВАШ ЗАПИТ *",
      requestHint: "Що ви хочете дізнатися/замовити?",
      consentPrefix: "Продовжуючи, я приймаю умови",
      consentOffer: "Публічної оферти",
      consentMiddle: "та надаю згоду на обробку своїх персональних даних відповідно до",
      consentPrivacy: "Політики конфіденційності",
      submit: "Написати",
      asideAlt: "Ілюстрація Yena Translations",
      asideTextBeforeEmail: "Хочете спитати ще щось? Пишіть на",
      consultMe: "ПРОКОНСУЛЬТУЙТЕ МЕНЕ",
    },
    contactSection: {
      title: "Маєте запитання?",
      nameLabel: "ІМ’Я *",
      emailLabel: "EMAIL *",
      requestLabel: "ВАШ ЗАПИТ *",
      requestHint: "Що ви хочете дізнатися/замовити?",
      consentPrefix: "Продовжуючи, я приймаю умови",
      consentOffer: "Публічної оферти",
      consentMiddle: "та надаю згоду на обробку своїх персональних даних відповідно до",
      consentPrivacy: "Політики конфіденційності",
      submit: "Написати",
      asideAlt: "Ілюстрація Yena Translations",
      asideTextBeforeEmail: "Хочете спитати ще щось? Пишіть на",
      consultMe: "ПРОКОНСУЛЬТУЙТЕ МЕНЕ",
    },
  },
  RU: {
    contact: {
      title: "Контакты для связи",
      subtitle: "Напишите нам, если у вас есть вопрос",
      nameLabel: "ИМЯ *",
      emailLabel: "EMAIL *",
      requestLabel: "ВАШ ЗАПРОС *",
      requestHint: "Что вы хотите узнать/заказать?",
      consentPrefix: "Продолжая, я принимаю условия",
      consentOffer: "Публичной оферты",
      consentMiddle:
        "и даю согласие на обработку персональных данных в соответствии с",
      consentPrivacy: "Политикой конфиденциальности",
      submit: "Написать",
      asideAlt: "Иллюстрация Yena Translations",
      asideTextBeforeEmail: "Хотите спросить ещё? Пишите на",
      consultMe: "ПРОКОНСУЛЬТИРУЙТЕ МЕНЯ",
    },
    contactSection: {
      title: "Есть вопрос?",
      nameLabel: "ИМЯ *",
      emailLabel: "EMAIL *",
      requestLabel: "ВАШ ЗАПРОС *",
      requestHint: "Что вы хотите узнать/заказать?",
      consentPrefix: "Продолжая, я принимаю условия",
      consentOffer: "Публичной оферты",
      consentMiddle:
        "и даю согласие на обработку персональных данных в соответствии с",
      consentPrivacy: "Политикой конфиденциальности",
      submit: "Написать",
      asideAlt: "Иллюстрация Yena Translations",
      asideTextBeforeEmail: "Хотите спросить ещё? Пишите на",
      consultMe: "ПРОКОНСУЛЬТИРУЙТЕ МЕНЯ",
    },
  },
  EN: {
    contact: {
      title: "Get in touch",
      subtitle: "Write to us if you have a question",
      nameLabel: "NAME *",
      emailLabel: "EMAIL *",
      requestLabel: "YOUR REQUEST *",
      requestHint: "What would you like to ask or order?",
      consentPrefix: "By continuing, I accept the terms of the",
      consentOffer: "Public offer",
      consentMiddle: "and consent to the processing of my personal data under the",
      consentPrivacy: "Privacy policy",
      submit: "Send",
      asideAlt: "Yena Translations illustration",
      asideTextBeforeEmail: "Have another question? Email us at",
      consultMe: "CONSULT ME",
    },
    contactSection: {
      title: "Any questions?",
      nameLabel: "NAME *",
      emailLabel: "EMAIL *",
      requestLabel: "YOUR REQUEST *",
      requestHint: "What would you like to ask or order?",
      consentPrefix: "By continuing, I accept the terms of the",
      consentOffer: "Public offer",
      consentMiddle: "and consent to the processing of my personal data under the",
      consentPrivacy: "Privacy policy",
      submit: "Send",
      asideAlt: "Yena Translations illustration",
      asideTextBeforeEmail: "Have another question? Email us at",
      consultMe: "CONSULT ME",
    },
  },
  DE: {
    contact: {
      title: "Kontakt",
      subtitle: "Schreiben Sie uns, wenn Sie eine Frage haben",
      nameLabel: "NAME *",
      emailLabel: "EMAIL *",
      requestLabel: "IHRE ANFRAGE *",
      requestHint: "Was möchten Sie wissen oder bestellen?",
      consentPrefix: "Mit dem Fortfahren akzeptiere ich die Bedingungen des",
      consentOffer: "Öffentlichen Angebots",
      consentMiddle:
        "und willige in die Verarbeitung meiner personenbezogenen Daten gemäß der",
      consentPrivacy: "Datenschutzerklärung",
      submit: "Senden",
      asideAlt: "Yena Translations Illustration",
      asideTextBeforeEmail: "Noch eine Frage? Schreiben Sie an",
      consultMe: "BERATEN SIE MICH",
    },
    contactSection: {
      title: "Haben Sie Fragen?",
      nameLabel: "NAME *",
      emailLabel: "EMAIL *",
      requestLabel: "IHRE ANFRAGE *",
      requestHint: "Was möchten Sie wissen oder bestellen?",
      consentPrefix: "Mit dem Fortfahren akzeptiere ich die Bedingungen des",
      consentOffer: "Öffentlichen Angebots",
      consentMiddle:
        "und willige in die Verarbeitung meiner personenbezogenen Daten gemäß der",
      consentPrivacy: "Datenschutzerklärung",
      submit: "Senden",
      asideAlt: "Yena Translations Illustration",
      asideTextBeforeEmail: "Noch eine Frage? Schreiben Sie an",
      consultMe: "BERATEN SIE MICH",
    },
  },
};

