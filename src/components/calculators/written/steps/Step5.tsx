import styles from "../WrittenCalculator.module.css";

export type WrittenStep5Props = {
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
  return (
    <>
      <div className={styles.step5Summary}>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Перерахунок вартості
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Вартість редагування або виправлення тексту
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Форматування витрат
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Вартість доставки
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Оціненна вартість (без ПДВ)
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Поставить апостоль на перекладі
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Поставить апостоль на документі
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Засвідчення
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Канцелярський збір
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Загальна вартість замовлення (без ПДВ)
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Доставка та упаковка
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          ПДВ
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
        <div className={styles.step5SummaryRow}>
          <span className={styles.step5SummaryLabel}>
          Загальна оціненна вартість замовлення (з ПДВ)
          </span>
          <span className={styles.step5SummaryValue}>0.00 €</span>
        </div>
      </div>

      <div className={styles.step5GrandTotal} aria-label="Всього">
        <span className={styles.step5GrandTotalLabel}>Всього</span>
        <span className={styles.step5GrandTotalValue}>0.00 €</span>
      </div>

      <div className={styles.step5Divider} aria-hidden />

      <div className={styles.step5Form}>
        <div className={styles.step5Grid2}>
          <div className={styles.step5Field}>
            <label className={styles.step5FieldLabel} htmlFor="calc-first-name">
              Ім’я
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
              Прізвище
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
            Номер телефону
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
            Адреса електронної пошти
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
            Адреса
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
