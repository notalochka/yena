import styles from "../InterpretingCalculator.module.css";

export type InterpretingStep4Props = {
  recording: "yes" | "no" | "";
  setRecording: (v: "yes" | "no") => void;
};

export default function Step4({
  recording,
  setRecording,
}: InterpretingStep4Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>Запис чи трансляція</h3>

      <div
        className={styles.radioGroup}
        role="radiogroup"
        aria-label="Запис чи трансляція"
      >
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-recording"
            checked={recording === "yes"}
            onChange={() => setRecording("yes")}
          />
          Так
        </label>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-recording"
            checked={recording === "no"}
            onChange={() => setRecording("no")}
          />
          Ні
        </label>
      </div>

      <div className={styles.step4Summary}>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>Разом з записом</span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>Організація</span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>Разом з організацією</span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step4SummaryRow}>
          <span className={styles.step4SummaryLabel}>Разом із записом</span>
          <span className={styles.step4SummaryValue}>0.00 €</span>
        </div>
      </div>

      <div className={styles.step4TotalRow} aria-label="Разом">
        <span className={styles.step4TotalLabel}>Разом</span>
        <span className={styles.step4TotalValue}>0.00 €</span>
      </div>
    </>
  );
}
