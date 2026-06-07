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
  country: string;
  setCountry: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  street: string;
  setStreet: (v: string) => void;
  houseNumber: string;
  setHouseNumber: (v: string) => void;
  postalCode: string;
  setPostalCode: (v: string) => void;
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
  country,
  setCountry,
  city,
  setCity,
  street,
  setStreet,
  houseNumber,
  setHouseNumber,
  postalCode,
  setPostalCode,
}: WrittenStep5Props) {
  const s = copy.step5;
  return (
    <>
      <div className={styles.step5Summary}>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.estimatedCost}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.editing}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.formatting}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.officeFee}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.estimatedNetto}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.totalEstimatedNetto}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.shippingPackaging}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.vat}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{s.totalEstimatedBrutto}</span>
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

        <div className={styles.step5MailingSection}>
          <h3 className={styles.step5SectionTitle}>{s.mailingAddressTitle}</h3>
          <div className={styles.step5Grid2}>
            <input
              id="calc-country"
              className={styles.step5Control}
              placeholder={s.countryPlaceholder}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              aria-label={s.countryPlaceholder}
            />
            <input
              id="calc-city"
              className={styles.step5Control}
              placeholder={s.cityPlaceholder}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              aria-label={s.cityPlaceholder}
            />
          </div>
          <div className={styles.step5Grid2}>
            <input
              id="calc-street"
              className={styles.step5Control}
              placeholder={s.streetPlaceholder}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              aria-label={s.streetPlaceholder}
            />
            <input
              id="calc-house-number"
              className={styles.step5Control}
              placeholder={s.houseNumberPlaceholder}
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              aria-label={s.houseNumberPlaceholder}
            />
          </div>
          <div className={styles.step5GridHalf}>
            <input
              id="calc-postal-code"
              className={styles.step5Control}
              placeholder={s.postalCodePlaceholder}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              aria-label={s.postalCodePlaceholder}
            />
          </div>
        </div>
      </div>
    </>
  );
}
