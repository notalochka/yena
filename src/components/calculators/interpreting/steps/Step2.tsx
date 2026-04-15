import styles from "../InterpretingCalculator.module.css";

export type InterpretingStep2Props = {
  training: string;
  setTraining: (v: string) => void;
};

export default function Step2({ training, setTraining }: InterpretingStep2Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>Навчання перекладачів</h3>

      <div className={styles.step2SelectWrap}>
        <select
          className={`${styles.control} ${styles.selectControl}`}
          required
          value={training}
          onChange={(e) => setTraining(e.target.value)}
          aria-label="Навчання перекладачів"
        >
          <option value="" disabled hidden>
            Навчання перекладачів
          </option>
          <option value="none">Не потрібно</option>
          <option value="basic">Базове навчання</option>
          <option value="advanced">Поглиблене навчання</option>
        </select>
      </div>

      <div className={styles.step2Summary}>
        <div className={styles.step2SummaryRow}>
          <span className={styles.step2SummaryLabel}>Вартість навчання</span>
          <span className={styles.step2SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step2SummaryRow}>
          <span className={styles.step2SummaryLabel}>Разом з навчанням</span>
          <span className={styles.step2SummaryValue}>0.00 €</span>
        </div>
      </div>
    </>
  );
}
