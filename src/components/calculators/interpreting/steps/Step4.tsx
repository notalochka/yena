import styles from "../InterpretingCalculator.module.css";
import type { InterpretingCalculatorCopy } from "@/i18n/interpretingCalculator";

export type InterpretingStep4Props = {
  copy: InterpretingCalculatorCopy;
  recording: "yes" | "no" | "";
  setRecording: (v: "yes" | "no") => void;
};

export default function Step4({
  copy,
  recording,
  setRecording,
}: InterpretingStep4Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>{copy.step4.title}</h3>

      <div
        className={styles.radioGroup}
        role="radiogroup"
        aria-label={copy.step4.aria}
      >
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-recording"
            checked={recording === "yes"}
            onChange={() => setRecording("yes")}
          />
          {copy.step4.yes}
        </label>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-recording"
            checked={recording === "no"}
            onChange={() => setRecording("no")}
          />
          {copy.step4.no}
        </label>
      </div>

      <div className={styles.step4Summary}>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>
            {copy.step4.summaryWithRecording}
          </span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>{copy.step4.organisation}</span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>
            {copy.step4.totalWithOrganisation}
          </span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>
            {copy.step4.summaryWithRecording}
          </span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
      </div>

      <div className={styles.step4TotalRow} aria-label={copy.step4.totalAria}>
        <span className={styles.step4TotalLabel}>{copy.step4.totalLabel}</span>
        <span className={styles.step4TotalValue}>0.00 €</span>
      </div>
    </>
  );
}
