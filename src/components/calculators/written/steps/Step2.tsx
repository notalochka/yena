import styles from "../WrittenCalculator.module.css";

export type WrittenStep2Props = {
  needsEditing: boolean;
  setNeedsEditing: (v: boolean) => void;
};

export default function Step2({
  needsEditing,
  setNeedsEditing,
}: WrittenStep2Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>Редагування або виправлення тексту</h3>

      <label className={styles.step2ToggleCard}>
        <input
          className={styles.step2ToggleInput}
          type="checkbox"
          checked={needsEditing}
          onChange={(e) => setNeedsEditing(e.target.checked)}
        />
        <span className={styles.step2ToggleDot} aria-hidden />
        <span className={styles.step2ToggleText}>
          Редагування або виправлення тексту
        </span>
      </label>
    </>
  );
}
