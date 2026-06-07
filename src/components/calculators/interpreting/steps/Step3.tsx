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
      <div className={styles.step1ChoiceSection}>
        <h3 className={styles.sectionTitle}>{copy.step3.title}</h3>
        <div
          className={styles.choiceButtonRow}
          role="radiogroup"
          aria-label={copy.step3.aria}
        >
          <button
            type="button"
            role="radio"
            aria-checked={location === "online"}
            className={`${styles.choiceButton} ${
              location === "online" ? styles.choiceButtonSelected : ""
            }`}
            onClick={() => setLocation("online")}
          >
            {copy.step3.online}
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={location === "offline"}
            className={`${styles.choiceButton} ${
              location === "offline" ? styles.choiceButtonSelected : ""
            }`}
            onClick={() => setLocation("offline")}
          >
            {copy.step3.offline}
          </button>
        </div>
      </div>

      <div className={styles.step3TotalRow} aria-label={copy.step3.totalAria}>
        <span className={styles.step3TotalLabel}>{copy.step3.totalLabel}</span>
        <span className={styles.step3TotalValue}>0.00 €</span>
      </div>
    </>
  );
}
