export type UiLanguage = "UA" | "RU" | "EN" | "DE";

export const languages: { code: UiLanguage; label: string }[] = [
  { code: "UA", label: "Українська" },
  { code: "RU", label: "Русский" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
] as const;

const slavicLanguages: UiLanguage[] = ["UA", "RU"];

/** Лого в хедері/футері: оливкове для словʼянських мов, фіолетове для германських */
export function getLogoSrc(language: UiLanguage): string {
  return slavicLanguages.includes(language)
    ? "/Logo_olive.svg"
    : "/Logo_lila.svg";
}
