import styles from "../InterpretingCalculator.module.css";
import type { InterpretingCalculatorCopy } from "@/i18n/interpretingCalculator";

export type InterpretingStep5Props = {
  copy: InterpretingCalculatorCopy;
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
}: InterpretingStep5Props) {
  return (
    <>
      <div className={styles.step5Summary}>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{copy.step5.estimatedCost}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{copy.step5.vat}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>{copy.step5.subtotalCost}</span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
      </div>

      <div className={styles.step5GrandTotal} aria-label={copy.step5.grandTotalAria}>
        <span className={styles.step5GrandTotalLabel}>{copy.step5.grandTotalLabel}</span>
        <span className={styles.step5GrandTotalValue}>0.00 €</span>
      </div>

      <div className={styles.step5Divider} aria-hidden />

      <div className={styles.step5Form}>
        <div className={styles.step5Grid2}>
          <div className={styles.step5Field}>
            <label className={styles.step5FieldLabel} htmlFor="calc-first-name">
              {copy.step5.firstName}
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
              {copy.step5.lastName}
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
            {copy.step5.phone}
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
            {copy.step5.email}
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
          <h3 className={styles.step5SectionTitle}>{copy.step5.mailingAddressTitle}</h3>
          <div className={styles.step5Grid2}>
            <input
              id="calc-country"
              className={styles.step5Control}
              placeholder={copy.step5.countryPlaceholder}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              aria-label={copy.step5.countryPlaceholder}
            />
            <input
              id="calc-city"
              className={styles.step5Control}
              placeholder={copy.step5.cityPlaceholder}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              aria-label={copy.step5.cityPlaceholder}
            />
          </div>
          <div className={styles.step5Grid2}>
            <input
              id="calc-street"
              className={styles.step5Control}
              placeholder={copy.step5.streetPlaceholder}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              aria-label={copy.step5.streetPlaceholder}
            />
            <input
              id="calc-house-number"
              className={styles.step5Control}
              placeholder={copy.step5.houseNumberPlaceholder}
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              aria-label={copy.step5.houseNumberPlaceholder}
            />
          </div>
          <div className={styles.step5GridHalf}>
            <input
              id="calc-postal-code"
              className={styles.step5Control}
              placeholder={copy.step5.postalCodePlaceholder}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              aria-label={copy.step5.postalCodePlaceholder}
            />
          </div>
        </div>
      </div>
    </>
  );
}
