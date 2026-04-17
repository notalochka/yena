import {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useRouter } from "next/router";
import type { UiLanguage } from "./language";
import {
  defaultLocaleSlug,
  localeSlugToUiLanguage,
  uiLanguageToLocaleSlug,
} from "./localeRouting";

type LanguageContextValue = {
  language: UiLanguage;
  setLanguage: (lang: UiLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const language = useMemo(
    () => localeSlugToUiLanguage(router.locale ?? defaultLocaleSlug),
    [router.locale],
  );

  const setLanguage = useCallback(
    (lang: UiLanguage) => {
      const slug = uiLanguageToLocaleSlug(lang);
      void router.push(router.pathname, router.asPath, { locale: slug });
    },
    [router],
  );

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
