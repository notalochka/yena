export type UiLanguage = "UA" | "RU" | "EN" | "DE";

export const languages: { code: UiLanguage; label: string }[] = [
  { code: "UA", label: "Українська" },
  { code: "RU", label: "Русский" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
] as const;
