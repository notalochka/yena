import type { WrittenCalculatorCopy } from "@/i18n/writtenTranslationCalculator";
import styles from "../WrittenCalculator.module.css";

export type WrittenStep2Props = {
  copy: WrittenCalculatorCopy;
  needsEditing: boolean;
  setNeedsEditing: (v: boolean) => void;
};

export default function Step2({
  copy,
  needsEditing,
  setNeedsEditing,
}: WrittenStep2Props) {
  const s = copy.step2;
  return (
    <>
      <div className={styles.step1ChoiceSection}>
        <h3 className={styles.sectionTitle}>{s.title}</h3>
        <div className={styles.choiceButtonRow}>
          <button
            type="button"
            aria-pressed={needsEditing}
            className={`${styles.choiceButton} ${
              needsEditing ? styles.choiceButtonSelected : ""
            }`}
            onClick={() => setNeedsEditing(!needsEditing)}
          >
            {s.toggleText}
          </button>
        </div>
      </div>

      <div className={styles.step2CostRow} aria-label={s.costAria}>
        <span className={styles.step2CostLabel}>{s.costLabel}</span>
        <span className={styles.step2CostValue}>0.00 €</span>
      </div>
    </>
  );
}
