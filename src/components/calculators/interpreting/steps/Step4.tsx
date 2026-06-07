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
      <div className={styles.step1ChoiceSection}>
        <h3 className={styles.sectionTitle}>{copy.step4.title}</h3>
        <div
          className={styles.choiceButtonRow}
          role="radiogroup"
          aria-label={copy.step4.aria}
        >
          <button
            type="button"
            role="radio"
            aria-checked={recording === "yes"}
            className={`${styles.choiceButton} ${
              recording === "yes" ? styles.choiceButtonSelected : ""
            }`}
            onClick={() => setRecording("yes")}
          >
            {copy.step4.yes}
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={recording === "no"}
            className={`${styles.choiceButton} ${
              recording === "no" ? styles.choiceButtonSelected : ""
            }`}
            onClick={() => setRecording("no")}
          >
            {copy.step4.no}
          </button>
        </div>
      </div>

      <div className={styles.step4Summary}>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>
            {copy.step4.withRecordingOrBroadcast}
          </span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span
            className={`${styles.step4SummaryLabel} ${styles.step4SummaryLabelAccent}`}
          >
            {copy.step4.projectFee}
          </span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>
            {copy.step4.withProjectFee}
          </span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>
            {copy.step4.withRecordingAndProjectFee}
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
