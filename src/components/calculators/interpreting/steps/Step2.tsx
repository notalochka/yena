import styles from "../InterpretingCalculator.module.css";
import type { InterpretingCalculatorCopy } from "@/i18n/interpretingCalculator";

export type InterpretingStep2Props = {
  copy: InterpretingCalculatorCopy;
  training: string;
  setTraining: (v: string) => void;
};

export default function Step2({ copy, training, setTraining }: InterpretingStep2Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>{copy.step2.title}</h3>

      <div className={styles.step2SelectWrap}>
        <select
          className={`${styles.control} ${styles.selectControl}`}
          required
          value={training}
          onChange={(e) => setTraining(e.target.value)}
          aria-label={copy.step2.selectAria}
        >
          <option value="" disabled hidden>
            {copy.step2.placeholder}
          </option>
          <option value="none">{copy.step2.options.none}</option>
          <option value="basic">{copy.step2.options.basic}</option>
          <option value="advanced">{copy.step2.options.advanced}</option>
        </select>
      </div>

      <div className={styles.step2Summary}>
        <div className={styles.step2SummaryRow}>
          <span className={styles.step2SummaryLabel}>{copy.step2.costLabel}</span>
          <span className={styles.step2SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step2SummaryRow}>
          <span className={styles.step2SummaryLabel}>
            {copy.step2.totalWithTrainingLabel}
          </span>
          <span className={styles.step2SummaryValue}>0.00 €</span>
        </div>
      </div>
    </>
  );
}
