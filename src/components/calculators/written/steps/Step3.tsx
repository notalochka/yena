import type { WrittenCalculatorCopy } from "@/i18n/writtenTranslationCalculator";
import styles from "../WrittenCalculator.module.css";

export type WrittenStep3Props = {
  copy: WrittenCalculatorCopy;
  files: File[];
  setFiles: (files: File[]) => void;
  addFormatting: boolean;
  setAddFormatting: (v: boolean) => void;
};

export default function Step3({
  copy,
  files,
  setFiles,
  addFormatting,
  setAddFormatting,
}: WrittenStep3Props) {
  const s = copy.step3;
  return (
    <>
      <h3 className={styles.sectionTitle}>{s.titleFiles}</h3>

      <div className={styles.step3UploadWrap}>
        <label className={styles.step3UploadBox}>
          <input
            className={styles.step3FileInput}
            type="file"
            multiple
            onChange={(e) => {
              const next = Array.from(e.target.files ?? []);
              if (next.length === 0) return;
              setFiles([...files, ...next]);
              e.currentTarget.value = "";
            }}
          />
          <div className={styles.step3UploadIcon} aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M31.5 54V17.325L19.8 29.025L13.5 22.5L36 0L58.5 22.5L52.2 29.025L40.5 17.325V54H31.5ZM9 72C6.525 72 4.407 71.1195 2.646 69.3585C0.884999 67.5975 0.003 65.478 0 63V49.5H9V63H63V49.5H72V63C72 65.475 71.1195 67.5945 69.3585 69.3585C67.5975 71.1225 65.478 72.003 63 72H9Z"
                fill="#456999"
              />
            </svg>
          </div>
          <div className={styles.step3UploadText}>{s.uploadText}</div>
        </label>
      </div>

      {files.length > 0 ? (
        <ul className={styles.step3FilesList} aria-label={s.filesAria}>
          {files.map((f, idx) => (
            <li key={`${f.name}-${idx}`} className={styles.step3FileRow}>
              <span className={styles.step3FileName}>{f.name}</span>
              <button
                type="button"
                className={styles.step3RemoveFile}
                onClick={() => setFiles(files.filter((_, i) => i !== idx))}
              >
                {s.remove}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <h3 className={styles.sectionTitle}>{s.titleFormatting}</h3>

      <div className={styles.choiceButtonRow}>
        <button
          type="button"
          aria-pressed={addFormatting}
          className={`${styles.choiceButton} ${
            addFormatting ? styles.choiceButtonSelected : ""
          }`}
          onClick={() => setAddFormatting(!addFormatting)}
        >
          {s.addFormatting}
        </button>
      </div>

      <div
        className={styles.step3CostRow}
        aria-label={s.formattingCostAria}
      >
        <span className={styles.step3CostLabel}>{s.formattingCostLabel}</span>
        <span className={styles.step3CostValue}>0.00 €</span>
      </div>
    </>
  );
}
