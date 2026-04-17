import type { WrittenCalculatorCopy } from "@/i18n/writtenTranslationCalculator";
import styles from "../WrittenCalculator.module.css";

export type WrittenStep5Props = {
  copy: WrittenCalculatorCopy;
  firstName: string;
  setFirstName: (v: string) => void;
  lastName: string;
  setLastName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  address: string;
  setAddress: (v: string) => void;
};

/** Останній крок («Фініш») — підсумок + контактні дані. */
export default function Step5({
  copy,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  email,
  setEmail,
  address,
  setAddress,
}: WrittenStep5Props) {
  const s = copy.step5;
  return (
    <>
      <div className={styles.step5Summary}>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.recalculation}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.editingCost}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.formattingCost}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.deliveryCost}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.estimatedNoVat}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
            {s.apostilleTranslation}
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
            {s.apostilleDocument}
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.certification}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.officeFee}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.orderTotalNoVat}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
            {s.shippingPackaging}
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.vat}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
            {s.grandEstimatedWithVat}
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
      </div>

      <div className={styles.step5GrandTotal} aria-label={s.grandTotalAria}>
        <span className={styles.step5GrandTotalLabel}>{s.grandTotalLabel}</span>
        <span className={styles.step5GrandTotalValue}>0.00 €</span>
      </div>

      <div className={styles.step5Divider} aria-hidden />

      <div className={styles.step5Form}>
        <div className={styles.step5Grid2}>
          <div className={styles.step5Field}>
            <label className={styles.step5FieldLabel} htmlFor="calc-first-name">
              {s.firstName}
            </label>
            <input
              id="calc-first-name"
              className={styles.step5Control}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.step5Field}>
            <label className={styles.step5FieldLabel} htmlFor="calc-last-name">
              {s.lastName}
            </label>
            <input
              id="calc-last-name"
              className={styles.step5Control}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.step5Field}>
          <label className={styles.step5FieldLabel} htmlFor="calc-phone">
            {s.phone}
          </label>
          <input
            id="calc-phone"
            className={styles.step5Control}
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.step5Field}>
          <label className={styles.step5FieldLabel} htmlFor="calc-email">
            {s.email}
          </label>
          <input
            id="calc-email"
            className={styles.step5Control}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.step5Field}>
          <label className={styles.step5FieldLabel} htmlFor="calc-address">
            {s.address}
          </label>
          <input
            id="calc-address"
            className={styles.step5Control}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
