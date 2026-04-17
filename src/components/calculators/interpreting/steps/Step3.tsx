import styles from "../InterpretingCalculator.module.css";
import type { InterpretingCalculatorCopy } from "@/i18n/interpretingCalculator";

export type InterpretingStep3Props = {
  copy: InterpretingCalculatorCopy;
  location: "online" | "offline" | "";
  setLocation: (v: "online" | "offline") => void;
};

export default function Step3({ copy, location, setLocation }: InterpretingStep3Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>{copy.step3.title}</h3>

      <div
        className={styles.radioGroup}
        role="radiogroup"
        aria-label={copy.step3.aria}
      >
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-location"
            checked={location === "online"}
            onChange={() => setLocation("online")}
          />
          {copy.step3.online}
        </label>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-location"
            checked={location === "offline"}
            onChange={() => setLocation("offline")}
          />
          {copy.step3.offline}
        </label>
      </div>

      <div className={styles.step3TotalRow} aria-label={copy.step3.totalAria}>
        <span className={styles.step3TotalLabel}>{copy.step3.totalLabel}</span>
        <span className={styles.step3TotalValue}>0.00 €</span>
      </div>
    </>
  );
}
