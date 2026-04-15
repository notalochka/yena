import styles from "../WrittenCalculator.module.css";

export type WrittenStep1Props = {
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
  return (
    <>
      <h3 className={styles.sectionTitle}>Мова</h3>
      <div className={styles.card}>
        <div className={styles.grid2}>
          <div className={styles.row}>
            <label className={styles.fieldLabel} htmlFor="calc-from-lang">
              Перекласти з
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
                Оберіть мову
              </option>
              <option value="uk" disabled={toLang === "uk"}>
                Українська
              </option>
              <option value="de" disabled={toLang === "de"}>
                Німецька
              </option>
              <option value="en" disabled={toLang === "en"}>
                Англійська
              </option>
              <option value="ru" disabled={toLang === "ru"}>
                Російська
              </option>
            </select>
          </div>
          <div className={styles.row}>
            <label className={styles.fieldLabel} htmlFor="calc-to-lang">
              Перекласти на
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
                Оберіть мову
              </option>
              <option value="uk" disabled={fromLang === "uk"}>
                Українська
              </option>
              <option value="de" disabled={fromLang === "de"}>
                Німецька
              </option>
              <option value="en" disabled={fromLang === "en"}>
                Англійська
              </option>
              <option value="ru" disabled={fromLang === "ru"}>
                Російська
              </option>
            </select>
          </div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Об’єм</h3>
      <div className={styles.card}>
        <div className={styles.row}>
          <label className={styles.fieldLabel} htmlFor="calc-written-complexity">
            Рівень складності тексту
          </label>
          <select
            id="calc-written-complexity"
            className={`${styles.control} ${styles.selectControl}`}
            required
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
          >
            <option value="" disabled hidden>
              Оберіть складність
            </option>
            <option value="general">Загальна тематика</option>
            <option value="business">Бізнес / переговори</option>
            <option value="technical">Технічна тематика</option>
            <option value="medical">Медична тематика</option>
            <option value="legal">Юридична тематика</option>
          </select>
        </div>

        <div className={styles.row} style={{ marginTop: 22 }}>
          <div className={styles.fieldLabel}>Варіанти</div>
          <div className={styles.radioGroup} role="radiogroup" aria-label="Варіанти обʼєму">
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="calc-volume-unit"
                checked={volumeUnit === "words"}
                onChange={() => setVolumeUnit("words")}
              />
              Слова
            </label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="calc-volume-unit"
                checked={volumeUnit === "symbols"}
                onChange={() => setVolumeUnit("symbols")}
              />
              Символи
            </label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="calc-volume-unit"
                checked={volumeUnit === "pages"}
                onChange={() => setVolumeUnit("pages")}
              />
              Сторінки
            </label>
          </div>
        </div>

        <div className={styles.row} style={{ marginTop: 22 }}>
          <label className={styles.fieldLabel} htmlFor="calc-written-goal">
            Мета перекладу
          </label>
          <select
            id="calc-written-goal"
            className={`${styles.control} ${styles.selectControl}`}
            required
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="" disabled hidden>
              Оберіть мету перекладу
            </option>
            <option value="personal">Особисте використання</option>
            <option value="business">Бізнес</option>
            <option value="website">Сайт / маркетинг</option>
            <option value="official">Офіційні документи</option>
          </select>
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.priceWrap} aria-label="Ціна">
          <span className={styles.priceLabel}>Ціна</span>
          <span className={styles.priceValue}>0.00 €</span>
        </div>
        <button
          className={styles.nextButton}
          type="button"
          disabled={!canGoNext}
          onClick={onNext}
        >
          Наступна сторінка
        </button>
      </div>
    </>
  );
}
