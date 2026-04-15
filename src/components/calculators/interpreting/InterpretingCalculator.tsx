"use client";

import { Source_Sans_3 } from "next/font/google";
import { useCallback, useMemo, useState } from "react";
import styles from "./InterpretingCalculator.module.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

type StepMeta = {
  label: string;
};

const stepsMeta: StepMeta[] = [
  { label: "Сторінка 1" },
  { label: "Сторінка 2" },
  { label: "Сторінка 3" },
  { label: "Сторінка 4" },
  { label: "Фініш" },
];

export default function InterpretingCalculator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMin, setEndMin] = useState("");
  const [complexity, setComplexity] = useState("");
  const [type, setType] = useState<"sync" | "cons">("sync");
  const [interpreters, setInterpreters] = useState<string>("0");
  const [training, setTraining] = useState<string>("");
  const [location, setLocation] = useState<"online" | "offline" | "">("");
  const [recording, setRecording] = useState<"yes" | "no" | "">("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const progressPercent =
    stepsMeta.length <= 0
      ? 0
      : Math.min(
          100,
          ((currentStepIndex + 0.5) / stepsMeta.length) * 100,
        );

  const canGoNextFromStep1 = useMemo(() => {
    return (
      fromLang.trim() !== "" &&
      toLang.trim() !== "" &&
      startDate.trim() !== "" &&
      endDate.trim() !== "" &&
      complexity.trim() !== ""
    );
  }, [complexity, endDate, fromLang, startDate, toLang]);

  const canProceedFromStep2 = useMemo(() => training.trim() !== "", [training]);
  const canProceedFromStep3 = useMemo(() => location.trim() !== "", [location]);
  const canProceedFromStep4 = useMemo(
    () => recording.trim() !== "",
    [recording],
  );

  const canProceedFromStep5 = useMemo(() => {
    const first = firstName.trim();
    const last = lastName.trim();
    const p = phone.trim();
    const e = email.trim();
    const a = address.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

    return first !== "" && last !== "" && p !== "" && emailOk && a !== "";
  }, [address, email, firstName, lastName, phone]);

  const canProceedFromCurrentStep = useMemo(() => {
    switch (currentStepIndex) {
      case 1:
        return canProceedFromStep2;
      case 2:
        return canProceedFromStep3;
      case 3:
        return canProceedFromStep4;
      case 4:
        return canProceedFromStep5;
      default:
        return false;
    }
  }, [
    canProceedFromStep2,
    canProceedFromStep3,
    canProceedFromStep4,
    canProceedFromStep5,
    currentStepIndex,
  ]);

  const goNext = useCallback(() => {
    setCurrentStepIndex((i) => Math.min(i + 1, stepsMeta.length - 1));
  }, []);

  const goBack = useCallback(() => {
    setCurrentStepIndex((i) => Math.max(i - 1, 0));
  }, []);

  return (
    <div className={`${sourceSans.className} ${styles.calculator}`}>
      <div className={styles.container}>
        <div className={styles.stepper} aria-label="Кроки калькулятора">
          <div className={styles.stepperLabels}>
            {stepsMeta.map((step, idx) => (
              <div
                key={step.label}
                className={`${styles.stepLabelCell} ${
                  idx === currentStepIndex
                    ? styles.stepActive
                    : idx < currentStepIndex
                      ? styles.stepCompleted
                      : ""
                }`}
              >
                <span className={styles.stepLabel}>{step.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.stepperMiddle}>
            <div className={styles.stepperTrackWrap} aria-hidden>
              <div className={styles.stepperTrackBg} />
              <div
                className={styles.stepperProgress}
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <ol className={styles.stepDots}>
              {stepsMeta.map((step, idx) => (
                <li
                  key={step.label}
                  className={`${styles.stepDotCell} ${
                    idx === currentStepIndex
                      ? styles.stepActive
                      : idx < currentStepIndex
                        ? styles.stepCompleted
                        : ""
                  }`}
                >
                  <span className={styles.stepDot} aria-hidden />
                </li>
              ))}
            </ol>
          </div>
        </div>

        {currentStepIndex === 0 && (
          <Step1
            fromLang={fromLang}
            setFromLang={setFromLang}
            toLang={toLang}
            setToLang={setToLang}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            startHour={startHour}
            setStartHour={setStartHour}
            startMin={startMin}
            setStartMin={setStartMin}
            endHour={endHour}
            setEndHour={setEndHour}
            endMin={endMin}
            setEndMin={setEndMin}
            complexity={complexity}
            setComplexity={setComplexity}
            type={type}
            setType={setType}
            interpreters={interpreters}
            setInterpreters={setInterpreters}
            canGoNext={canGoNextFromStep1}
            onNext={goNext}
          />
        )}
        {currentStepIndex === 1 && (
          <Step2 training={training} setTraining={setTraining} />
        )}
        {currentStepIndex === 2 && (
          <Step3 location={location} setLocation={setLocation} />
        )}
        {currentStepIndex === 3 && (
          <Step4 recording={recording} setRecording={setRecording} />
        )}
        {currentStepIndex === 4 && (
          <Step5
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            address={address}
            setAddress={setAddress}
          />
        )}

        {currentStepIndex >= 1 && (
          <div className={styles.footerRow}>
            <button
              type="button"
              className={styles.prevButton}
              onClick={goBack}
            >
              Попередня сторінка
            </button>
            {currentStepIndex < stepsMeta.length - 1 ? (
              <button
                type="button"
                className={styles.nextButton}
                disabled={!canProceedFromCurrentStep}
                onClick={() => {
                  if (!canProceedFromCurrentStep) return;
                  goNext();
                }}
              >
                Наступна сторінка
              </button>
            ) : (
              <button
                type="button"
                className={styles.nextButton}
                disabled={!canProceedFromCurrentStep}
                onClick={() => {
                  if (!canProceedFromCurrentStep) return;
                  // TODO: submit / request quote
                }}
              >
                Запит цінової пропозиції
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
