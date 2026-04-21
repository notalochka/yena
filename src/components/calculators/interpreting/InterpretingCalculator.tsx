"use client";

import { Source_Sans_3 } from "next/font/google";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { interpretingCalculatorCopyByLang } from "@/i18n/interpretingCalculator";
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

export default function InterpretingCalculator() {
  const { language } = useLanguage();
  const copy = interpretingCalculatorCopyByLang[language];
  const stepsMeta: StepMeta[] = copy.steps.map((label) => ({ label }));

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const calculatorAnchorRef = useRef<HTMLDivElement>(null);
  const skipScrollOnMount = useRef(true);
  const shouldScrollAfterNav = useRef(false);

  useEffect(() => {
    if (skipScrollOnMount.current) {
      skipScrollOnMount.current = false;
      return;
    }
    if (!shouldScrollAfterNav.current) return;
    shouldScrollAfterNav.current = false;
    calculatorAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentStepIndex]);

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
    shouldScrollAfterNav.current = true;
    setCurrentStepIndex((i) => Math.min(i + 1, stepsMeta.length - 1));
  }, []);

  const goBack = useCallback(() => {
    shouldScrollAfterNav.current = true;
    setCurrentStepIndex((i) => Math.max(i - 1, 0));
  }, []);

  return (
    <div
      ref={calculatorAnchorRef}
      className={`${sourceSans.className} ${styles.calculator}`}
    >
      <div className={styles.container}>
        <div className={styles.stepper} aria-label={copy.stepperAriaLabel}>
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
            copy={copy}
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
          <Step2 copy={copy} training={training} setTraining={setTraining} />
        )}
        {currentStepIndex === 2 && (
          <Step3 copy={copy} location={location} setLocation={setLocation} />
        )}
        {currentStepIndex === 3 && (
          <Step4 copy={copy} recording={recording} setRecording={setRecording} />
        )}
        {currentStepIndex === 4 && (
          <Step5
            copy={copy}
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
              {copy.nav.prev}
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
                {copy.nav.next}
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
                {copy.nav.quote}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
