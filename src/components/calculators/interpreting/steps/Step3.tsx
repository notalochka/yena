import styles from "../InterpretingCalculator.module.css";

export type InterpretingStep3Props = {
  location: "online" | "offline" | "";
  setLocation: (v: "online" | "offline") => void;
};

export default function Step3({ location, setLocation }: InterpretingStep3Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>Де?</h3>

      <div
        className={styles.radioGroup}
        role="radiogroup"
        aria-label="Формат перекладу"
      >
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-location"
            checked={location === "online"}
            onChange={() => setLocation("online")}
          />
          Онлайн
        </label>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="calc-location"
            checked={location === "offline"}
            onChange={() => setLocation("offline")}
          />
          Офлайн
        </label>
      </div>

      <div className={styles.step3TotalRow} aria-label="Разом">
        <span className={styles.step3TotalLabel}>Разом</span>
        <span className={styles.step3TotalValue}>0.00 €</span>
      </div>
    </>
  );
}
