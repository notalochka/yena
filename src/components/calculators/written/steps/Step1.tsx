import type { WrittenCalculatorCopy } from "@/i18n/writtenTranslationCalculator";
import styles from "../WrittenCalculator.module.css";

export type WrittenStep1Props = {
  copy: WrittenCalculatorCopy;
  fromLang: string;
  setFromLang: (v: string) => void;
  toLang: string;
  setToLang: (v: string) => void;
  complexity: string;
  setComplexity: (v: string) => void;
  volumeUnit: "words" | "symbols" | "pages";
  setVolumeUnit: (v: "words" | "symbols" | "pages") => void;
  goal: string;
  setGoal: (v: string) => void;
  canGoNext: boolean;
  onNext: () => void;
};

export default function Step1({
  copy,
  fromLang,
  setFromLang,
  toLang,
  setToLang,
  complexity,
  setComplexity,
  volumeUnit,
  setVolumeUnit,
  goal,
  setGoal,
  canGoNext,
  onNext,
}: WrittenStep1Props) {
  const s = copy.step1;
  const L = s.languages;
  return (
    <>
      <h3 className={styles.sectionTitle}>{s.sectionLanguage}</h3>
      <div className={styles.card}>
        <div className={styles.grid2}>
          <div className={styles.row}>
            <label className={styles.fieldLabel} htmlFor="calc-from-lang">
              {s.fromLabel}
            </label>
            <select
              id="calc-from-lang"
              className={`${styles.control} ${styles.selectControl}`}
              required
              value={fromLang}
              onChange={(e) => {
                const next = e.target.value;
                setFromLang(next);
                if (next !== "" && next === toLang) setToLang("");
              }}
            >
              <option value="" disabled hidden>
                {s.chooseLanguage}
              </option>
              <option value="uk" disabled={toLang === "uk"}>
                {L.uk}
              </option>
              <option value="de" disabled={toLang === "de"}>
                {L.de}
              </option>
              <option value="en" disabled={toLang === "en"}>
                {L.en}
              </option>
              <option value="ru" disabled={toLang === "ru"}>
                {L.ru}
              </option>
            </select>
          </div>
          <div className={styles.row}>
            <label className={styles.fieldLabel} htmlFor="calc-to-lang">
              {s.toLabel}
            </label>
            <select
              id="calc-to-lang"
              className={`${styles.control} ${styles.selectControl}`}
              required
              value={toLang}
              onChange={(e) => {
                const next = e.target.value;
                setToLang(next);
                if (next !== "" && next === fromLang) setFromLang("");
              }}
            >
              <option value="" disabled hidden>
                {s.chooseLanguage}
              </option>
              <option value="uk" disabled={fromLang === "uk"}>
                {L.uk}
              </option>
              <option value="de" disabled={fromLang === "de"}>
                {L.de}
              </option>
              <option value="en" disabled={fromLang === "en"}>
                {L.en}
              </option>
              <option value="ru" disabled={fromLang === "ru"}>
                {L.ru}
              </option>
            </select>
          </div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>{s.sectionVolume}</h3>
      <div className={styles.card}>
        <div className={styles.row}>
          <label className={styles.fieldLabel} htmlFor="calc-written-complexity">
            {s.complexityLabel}
          </label>
          <select
            id="calc-written-complexity"
            className={`${styles.control} ${styles.selectControl}`}
            required
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
          >
            <option value="" disabled hidden>
              {s.complexityPlaceholder}
            </option>
            <option value="general">{s.complexityOptions.general}</option>
            <option value="business">{s.complexityOptions.business}</option>
            <option value="technical">{s.complexityOptions.technical}</option>
            <option value="medical">{s.complexityOptions.medical}</option>
            <option value="legal">{s.complexityOptions.legal}</option>
          </select>
        </div>

        <div className={styles.row} style={{ marginTop: 22 }}>
          <div className={styles.fieldLabel}>{s.optionsLabel}</div>
          <div
            className={styles.choiceButtonRow}
            role="radiogroup"
            aria-label={s.volumeAria}
          >
            {(
              [
                ["words", s.words],
                ["symbols", s.symbols],
                ["pages", s.pages],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={volumeUnit === value}
                className={`${styles.choiceButton} ${styles.choiceButtonWhite} ${
                  volumeUnit === value ? styles.choiceButtonSelected : ""
                }`}
                onClick={() => setVolumeUnit(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.row} style={{ marginTop: 22 }}>
          <label className={styles.fieldLabel} htmlFor="calc-written-goal">
            {s.goalLabel}
          </label>
          <select
            id="calc-written-goal"
            className={`${styles.control} ${styles.selectControl}`}
            required
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="" disabled hidden>
              {s.goalPlaceholder}
            </option>
            <option value="personal">{s.goalOptions.personal}</option>
            <option value="business">{s.goalOptions.business}</option>
            <option value="website">{s.goalOptions.website}</option>
            <option value="official">{s.goalOptions.official}</option>
          </select>
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.priceWrap} aria-label={s.priceAria}>
          <span className={styles.priceLabel}>{s.priceLabel}</span>
          <span className={styles.priceValue}>0.00 €</span>
        </div>
        <button
          className={styles.nextButton}
          type="button"
          disabled={!canGoNext}
          onClick={onNext}
        >
          {s.next}
        </button>
      </div>
    </>
  );
}
