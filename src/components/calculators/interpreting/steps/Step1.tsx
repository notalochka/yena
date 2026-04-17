import { useCallback, useRef } from "react";
import type { InterpretingCalculatorCopy } from "@/i18n/interpretingCalculator";
import styles from "../InterpretingCalculator.module.css";

export type InterpretingStep1Props = {
  copy: InterpretingCalculatorCopy;
  fromLang: string;
  setFromLang: (v: string) => void;
  toLang: string;
  setToLang: (v: string) => void;
  startDate: string;
  setStartDate: (v: string) => void;
  endDate: string;
  setEndDate: (v: string) => void;
  startHour: string;
  setStartHour: (v: string) => void;
  startMin: string;
  setStartMin: (v: string) => void;
  endHour: string;
  setEndHour: (v: string) => void;
  endMin: string;
  setEndMin: (v: string) => void;
  complexity: string;
  setComplexity: (v: string) => void;
  type: "sync" | "cons";
  setType: (v: "sync" | "cons") => void;
  interpreters: string;
  setInterpreters: (v: string) => void;
  canGoNext: boolean;
  onNext: () => void;
};

export default function Step1({
  copy,
  fromLang,
  setFromLang,
  toLang,
  setToLang,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startHour,
  setStartHour,
  startMin,
  setStartMin,
  endHour,
  setEndHour,
  endMin,
  setEndMin,
  complexity,
  setComplexity,
  type,
  setType,
  interpreters,
  setInterpreters,
  canGoNext,
  onNext,
}: InterpretingStep1Props) {
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);

  const openDatePicker = useCallback((ref: React.RefObject<HTMLInputElement | null>) => {
    const el = ref.current;
    if (!el) return;

    try {
      // Chromium підтримує showPicker() для input[type=date]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (el as any).showPicker?.();
    } catch {
      // ignore
    }

    el.focus();
    el.click();
  }, []);

  return (
    <>
      <h3 className={styles.sectionTitle}>{copy.step1.sectionLanguage}</h3>
      <div className={styles.card}>
        <div className={styles.grid2}>
          <div className={styles.row}>
            <label className={styles.fieldLabel} htmlFor="calc-from-lang">
              {copy.step1.fromLabel}
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
                {copy.step1.chooseLanguage}
              </option>
              <option value="uk" disabled={toLang === "uk"}>
                {copy.step1.languages.uk}
              </option>
              <option value="de" disabled={toLang === "de"}>
                {copy.step1.languages.de}
              </option>
              <option value="en" disabled={toLang === "en"}>
                {copy.step1.languages.en}
              </option>
              <option value="ru" disabled={toLang === "ru"}>
                {copy.step1.languages.ru}
              </option>
            </select>
          </div>
          <div className={styles.row}>
            <label className={styles.fieldLabel} htmlFor="calc-to-lang">
              {copy.step1.toLabel}
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
                {copy.step1.chooseLanguage}
              </option>
              <option value="uk" disabled={fromLang === "uk"}>
                {copy.step1.languages.uk}
              </option>
              <option value="de" disabled={fromLang === "de"}>
                {copy.step1.languages.de}
              </option>
              <option value="en" disabled={fromLang === "en"}>
                {copy.step1.languages.en}
              </option>
              <option value="ru" disabled={fromLang === "ru"}>
                {copy.step1.languages.ru}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.grid2}>
        <div>
          <h3 className={styles.sectionTitle}>{copy.step1.sectionStart}</h3>
          <div className={styles.dateCard}>
            <label className={styles.fieldLabel} htmlFor="calc-start-date">
              {copy.step1.dateLabel}
            </label>
            <div className={styles.dateFieldWrap}>
              <button
                type="button"
                className={styles.dateIconButton}
                aria-label={copy.step1.pickStartDateAria}
                onClick={() => openDatePicker(startDateRef)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  aria-hidden
                  focusable="false"
                >
                  <path
                    d="M22.1 2.6H19.5V1.3C19.5 0.955218 19.363 0.624558 19.1192 0.380761C18.8754 0.136964 18.5448 0 18.2 0C17.8552 0 17.5246 0.136964 17.2808 0.380761C17.037 0.624558 16.9 0.955218 16.9 1.3V2.6H9.1V1.3C9.1 0.955218 8.96304 0.624558 8.71924 0.380761C8.47544 0.136964 8.14478 0 7.8 0C7.45522 0 7.12456 0.136964 6.88076 0.380761C6.63696 0.624558 6.5 0.955218 6.5 1.3V2.6H3.9C2.86566 2.6 1.87368 3.01089 1.14228 3.74228C0.410892 4.47368 0 5.46566 0 6.5V22.1C0 23.1343 0.410892 24.1263 1.14228 24.8577C1.87368 25.5891 2.86566 26 3.9 26H22.1C23.1343 26 24.1263 25.5891 24.8577 24.8577C25.5891 24.1263 26 23.1343 26 22.1V6.5C26 5.46566 25.5891 4.47368 24.8577 3.74228C24.1263 3.01089 23.1343 2.6 22.1 2.6ZM23.4 22.1C23.4 22.4448 23.263 22.7754 23.0192 23.0192C22.7754 23.263 22.4448 23.4 22.1 23.4H3.9C3.55522 23.4 3.22456 23.263 2.98076 23.0192C2.73696 22.7754 2.6 22.4448 2.6 22.1V13H23.4V22.1ZM23.4 10.4H2.6V6.5C2.6 6.15522 2.73696 5.82456 2.98076 5.58076C3.22456 5.33696 3.55522 5.2 3.9 5.2H6.5V6.5C6.5 6.84478 6.63696 7.17544 6.88076 7.41924C7.12456 7.66304 7.45522 7.8 7.8 7.8C8.14478 7.8 8.47544 7.66304 8.71924 7.41924C8.96304 7.17544 9.1 6.84478 9.1 6.5V5.2H16.9V6.5C16.9 6.84478 17.037 7.17544 17.2808 7.41924C17.5246 7.66304 17.8552 7.8 18.2 7.8C18.5448 7.8 18.8754 7.66304 19.1192 7.41924C19.363 7.17544 19.5 6.84478 19.5 6.5V5.2H22.1C22.4448 5.2 22.7754 5.33696 23.0192 5.58076C23.263 5.82456 23.4 6.15522 23.4 6.5V10.4Z"
                    fill="#454545"
                  />
                </svg>
              </button>
              <input
                ref={startDateRef}
                id="calc-start-date"
                className={`${styles.control} ${styles.dateControl}`}
                type="date"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className={styles.timeRow}>
              <div className={styles.row}>
                <label className={styles.fieldLabel} htmlFor="calc-start-hour">
                  {copy.step1.timeLabel}
                </label>
                <input
                  id="calc-start-hour"
                  className={styles.control}
                  inputMode="numeric"
                  placeholder={copy.step1.hoursPlaceholder}
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.fieldLabel} htmlFor="calc-start-min">
                  &nbsp;
                </label>
                <input
                  id="calc-start-min"
                  className={styles.control}
                  inputMode="numeric"
                  placeholder={copy.step1.minutesPlaceholder}
                  value={startMin}
                  onChange={(e) => setStartMin(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className={styles.sectionTitle}>{copy.step1.sectionEnd}</h3>
          <div className={styles.dateCard}>
            <label className={styles.fieldLabel} htmlFor="calc-end-date">
              {copy.step1.dateLabel}
            </label>
            <div className={styles.dateFieldWrap}>
              <button
                type="button"
                className={styles.dateIconButton}
                aria-label={copy.step1.pickEndDateAria}
                onClick={() => openDatePicker(endDateRef)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  aria-hidden
                  focusable="false"
                >
                  <path
                    d="M22.1 2.6H19.5V1.3C19.5 0.955218 19.363 0.624558 19.1192 0.380761C18.8754 0.136964 18.5448 0 18.2 0C17.8552 0 17.5246 0.136964 17.2808 0.380761C17.037 0.624558 16.9 0.955218 16.9 1.3V2.6H9.1V1.3C9.1 0.955218 8.96304 0.624558 8.71924 0.380761C8.47544 0.136964 8.14478 0 7.8 0C7.45522 0 7.12456 0.136964 6.88076 0.380761C6.63696 0.624558 6.5 0.955218 6.5 1.3V2.6H3.9C2.86566 2.6 1.87368 3.01089 1.14228 3.74228C0.410892 4.47368 0 5.46566 0 6.5V22.1C0 23.1343 0.410892 24.1263 1.14228 24.8577C1.87368 25.5891 2.86566 26 3.9 26H22.1C23.1343 26 24.1263 25.5891 24.8577 24.8577C25.5891 24.1263 26 23.1343 26 22.1V6.5C26 5.46566 25.5891 4.47368 24.8577 3.74228C24.1263 3.01089 23.1343 2.6 22.1 2.6ZM23.4 22.1C23.4 22.4448 23.263 22.7754 23.0192 23.0192C22.7754 23.263 22.4448 23.4 22.1 23.4H3.9C3.55522 23.4 3.22456 23.263 2.98076 23.0192C2.73696 22.7754 2.6 22.4448 2.6 22.1V13H23.4V22.1ZM23.4 10.4H2.6V6.5C2.6 6.15522 2.73696 5.82456 2.98076 5.58076C3.22456 5.33696 3.55522 5.2 3.9 5.2H6.5V6.5C6.5 6.84478 6.63696 7.17544 6.88076 7.41924C7.12456 7.66304 7.45522 7.8 7.8 7.8C8.14478 7.8 8.47544 7.66304 8.71924 7.41924C8.96304 7.17544 9.1 6.84478 9.1 6.5V5.2H16.9V6.5C16.9 6.84478 17.037 7.17544 17.2808 7.41924C17.5246 7.66304 17.8552 7.8 18.2 7.8C18.5448 7.8 18.8754 7.66304 19.1192 7.41924C19.363 7.17544 19.5 6.84478 19.5 6.5V5.2H22.1C22.4448 5.2 22.7754 5.33696 23.0192 5.58076C23.263 5.82456 23.4 6.15522 23.4 6.5V10.4Z"
                    fill="#454545"
                  />
                </svg>
              </button>
              <input
                ref={endDateRef}
                id="calc-end-date"
                className={`${styles.control} ${styles.dateControl}`}
                type="date"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className={styles.timeRow}>
              <div className={styles.row}>
                <label className={styles.fieldLabel} htmlFor="calc-end-hour">
                  {copy.step1.timeLabel}
                </label>
                <input
                  id="calc-end-hour"
                  className={styles.control}
                  inputMode="numeric"
                  placeholder={copy.step1.hoursPlaceholder}
                  value={endHour}
                  onChange={(e) => setEndHour(e.target.value)}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.fieldLabel} htmlFor="calc-end-min">
                  &nbsp;
                </label>
                <input
                  id="calc-end-min"
                  className={styles.control}
                  inputMode="numeric"
                  placeholder={copy.step1.minutesPlaceholder}
                  value={endMin}
                  onChange={(e) => setEndMin(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>{copy.step1.complexityTitle}</h3>
      <select
        className={`${styles.control} ${styles.selectControl}`}
        required
        value={complexity}
        onChange={(e) => setComplexity(e.target.value)}
        aria-label={copy.step1.complexityAria}
      >
        <option value="" disabled hidden>
          {copy.step1.complexityPlaceholder}
        </option>
        <option value="general">{copy.step1.complexityOptions.general}</option>
        <option value="business">{copy.step1.complexityOptions.business}</option>
        <option value="technical">{copy.step1.complexityOptions.technical}</option>
        <option value="medical">{copy.step1.complexityOptions.medical}</option>
        <option value="legal">{copy.step1.complexityOptions.legal}</option>
      </select>

      <h3 className={styles.sectionTitle}>{copy.step1.typeTitle}</h3>
      <div
        className={styles.radioGroup}
        role="radiogroup"
        aria-label={copy.step1.typeAria}
      >
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-type"
            checked={type === "sync"}
            onChange={() => setType("sync")}
          />
          {copy.step1.typeSync}
        </label>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-type"
            checked={type === "cons"}
            onChange={() => setType("cons")}
          />
          {copy.step1.typeCons}
        </label>
      </div>

      <h3 className={styles.sectionTitle}>{copy.step1.interpretersTitle}</h3>
      <input
        className={styles.control}
        type="number"
        min={0}
        value={interpreters}
        onChange={(e) => setInterpreters(e.target.value)}
        aria-label={copy.step1.interpretersAria}
      />

      <div className={styles.footerRow}>
        <div className={styles.priceWrap} aria-label={copy.step1.priceAria}>
          <span className={styles.priceLabel}>{copy.step1.priceLabel}</span>
          <span className={styles.priceValue}>0.00 €</span>
        </div>
        <button
          className={styles.nextButton}
          type="button"
          disabled={!canGoNext}
          onClick={onNext}
        >
          {copy.nav.next}
        </button>
      </div>
    </>
  );
}
