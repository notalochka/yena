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
      <h3 className={styles.sectionTitle}>{s.title}</h3>

      <label className={styles.step2ToggleCard}>
        <input
          className={styles.step2ToggleInput}
          type="checkbox"
          checked={needsEditing}
          onChange={(e) => setNeedsEditing(e.target.checked)}
        />
        <span className={styles.step2ToggleDot} aria-hidden />
        <span className={styles.step2ToggleText}>{s.toggleText}</span>
      </label>
    </>
  );
}
