const DEFAULT_SITE_URL = "http://localhost:3000";

/** Must match `next.config` `i18n.locales` */
export const SUPPORTED_LOCALES = ["ua", "ru", "en", "de"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: SupportedLocale = "ua";

const OG_LOCALE_MAP: Record<SupportedLocale, string> = {
  ua: "uk_UA",
  ru: "ru_RU",
  en: "en_US",
  de: "de_DE",
};

function normalizeSiteUrl(rawUrl: string): string {
  try {
    return new URL(rawUrl).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);
}

export function toAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${cleanPath}`;
}

export function resolveLocale(locale?: string): SupportedLocale {
  if (
    locale === "ua" ||
    locale === "ru" ||
    locale === "en" ||
    locale === "de"
  ) {
    return locale;
  }
  return DEFAULT_LOCALE;
}

function stripLocaleFromPath(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const [first, ...rest] = segments;
  const isLocalePrefix = SUPPORTED_LOCALES.includes(first as SupportedLocale);
  if (!isLocalePrefix) return cleanPath;

  if (rest.length === 0) return "/";
  return `/${rest.join("/")}`;
}

export function withLocalePath(path: string, locale: SupportedLocale): string {
  const strippedPath = stripLocaleFromPath(path);
  if (locale === DEFAULT_LOCALE) return strippedPath;
  if (strippedPath === "/") return `/${locale}`;
  return `/${locale}${strippedPath}`;
}

export function toOgLocale(locale: SupportedLocale): string {
  return OG_LOCALE_MAP[locale];
}

/** `hreflang` values for `<link rel="alternate">` (BCP 47) */
export function toHreflang(locale: SupportedLocale): string {
  if (locale === "ua") return "uk";
  return locale;
}

export function getAlternateLanguageUrls(path: string): Array<{
  locale: SupportedLocale;
  href: string;
  hreflang: string;
}> {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: toAbsoluteUrl(withLocalePath(path, locale)),
    hreflang: toHreflang(locale),
  }));
}

export const SITE_NAME = "Yena Translations";

/** Default Open Graph / messenger preview image (under `public/`) */
export const DEFAULT_OG_IMAGE_PATH = "/logo_mess.jpg";
