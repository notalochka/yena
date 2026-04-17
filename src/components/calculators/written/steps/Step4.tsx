import type { WrittenCalculatorCopy } from "@/i18n/writtenTranslationCalculator";
import styles from "../WrittenCalculator.module.css";

export type WrittenStep4Props = {
  copy: WrittenCalculatorCopy;
  deliveryTime: string;
  setDeliveryTime: (v: string) => void;
};

export default function Step4({
  copy,
  deliveryTime,
  setDeliveryTime,
}: WrittenStep4Props) {
  const s = copy.step4;
  const d = s.deliveryDays;
  return (
    <>
      <h3 className={styles.sectionTitle}>{s.title}</h3>

      <div className={styles.step4SelectCard}>
        <select
          className={`${styles.control} ${styles.selectControl}`}
          required
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          aria-label={s.selectAria}
        >
          <option value="" disabled hidden>
            {s.placeholder}
          </option>
          <option value="1">{d.d1}</option>
          <option value="2">{d.d2}</option>
          <option value="3">{d.d3}</option>
          <option value="5">{d.d5}</option>
        </select>
      </div>

      <div className={styles.step4CostRow} aria-label={s.deliveryCostAria}>
        <span className={styles.step4CostLabel}>{s.deliveryCostLabel}</span>
        <span className={styles.step4CostValue}>0.00 €</span>
      </div>
    </>
  );
}
