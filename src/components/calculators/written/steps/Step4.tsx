import styles from "../WrittenCalculator.module.css";

export type WrittenStep4Props = {
  deliveryTime: string;
  setDeliveryTime: (v: string) => void;
};

export default function Step4({
  deliveryTime,
  setDeliveryTime,
}: WrittenStep4Props) {
  return (
    <>
      <h3 className={styles.sectionTitle}>Термін доставки (робочі дні)</h3>

      <div className={styles.step4SelectCard}>
        <select
          className={`${styles.control} ${styles.selectControl}`}
          required
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          aria-label="Час доставки"
        >
          <option value="" disabled hidden>
            Час доставки
          </option>
          <option value="1">1 робочий день</option>
          <option value="2">2 робочі дні</option>
          <option value="3">3 робочі дні</option>
          <option value="5">5 робочих днів</option>
        </select>
      </div>

      <div className={styles.step4CostRow} aria-label="Вартість доставки">
        <span className={styles.step4CostLabel}>Вартість доставки</span>
        <span className={styles.step4CostValue}>0.00 €</span>
      </div>
    </>
  );
}
