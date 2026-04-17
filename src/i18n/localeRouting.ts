import type { UiLanguage } from "./language";

/** Lowercase URL segments — must match `next.config` `i18n.locales` */
export const defaultLocaleSlug = "ua";

export const localeSlugs = ["ua", "ru", "en", "de"] as const;
export type LocaleSlug = (typeof localeSlugs)[number];

export function uiLanguageToLocaleSlug(lang: UiLanguage): LocaleSlug {
  switch (lang) {
    case "UA":
      return "ua";
    case "RU":
      return "ru";
    case "EN":
      return "en";
    case "DE":
      return "de";
  }
}

export function localeSlugToUiLanguage(slug: string | undefined): UiLanguage {
  switch (slug) {
    case "ru":
      return "RU";
    case "en":
      return "EN";
    case "de":
      return "DE";
    case "ua":
    default:
      return "UA";
  }
}
