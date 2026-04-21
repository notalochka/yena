"use client";

import { Source_Sans_3 } from "next/font/google";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { writtenTranslationCalculatorCopyByLang } from "@/i18n/writtenTranslationCalculator";
import styles from "./WrittenCalculator.module.css";
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

export default function WrittenCalculator() {
  const { language } = useLanguage();
  const calculatorCopy = writtenTranslationCalculatorCopyByLang[language];
  const stepsMeta: StepMeta[] = calculatorCopy.steps.map((label) => ({
    label,
  }));
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
  const [complexity, setComplexity] = useState("");
  const [volumeUnit, setVolumeUnit] = useState<"words" | "symbols" | "pages">(
    "words",
  );
  const [goal, setGoal] = useState("");
  const [needsEditing, setNeedsEditing] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [addFormatting, setAddFormatting] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("");
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
      complexity.trim() !== "" &&
      volumeUnit.trim() !== "" &&
      goal.trim() !== ""
    );
  }, [complexity, fromLang, goal, toLang, volumeUnit]);

  const canProceedFromStep2 = useMemo(() => true, []);
  const canProceedFromStep3 = useMemo(() => files.length > 0, [files.length]);
  const canProceedFromStep4 = useMemo(
    () => deliveryTime.trim() !== "",
    [deliveryTime],
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

  const stepCount = stepsMeta.length;
  const goNext = useCallback(() => {
    shouldScrollAfterNav.current = true;
    setCurrentStepIndex((i) => Math.min(i + 1, stepCount - 1));
  }, [stepCount]);

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
        <div
          className={styles.stepper}
          aria-label={calculatorCopy.stepperAriaLabel}
        >
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
            copy={calculatorCopy}
            fromLang={fromLang}
            setFromLang={setFromLang}
            toLang={toLang}
            setToLang={setToLang}
            complexity={complexity}
            setComplexity={setComplexity}
            volumeUnit={volumeUnit}
            setVolumeUnit={setVolumeUnit}
            goal={goal}
            setGoal={setGoal}
            canGoNext={canGoNextFromStep1}
            onNext={goNext}
          />
        )}
        {currentStepIndex === 1 && (
          <Step2
            copy={calculatorCopy}
            needsEditing={needsEditing}
            setNeedsEditing={setNeedsEditing}
          />
        )}
        {currentStepIndex === 2 && (
          <Step3
            copy={calculatorCopy}
            files={files}
            setFiles={setFiles}
            addFormatting={addFormatting}
            setAddFormatting={setAddFormatting}
          />
        )}
        {currentStepIndex === 3 && (
          <Step4
            copy={calculatorCopy}
            deliveryTime={deliveryTime}
            setDeliveryTime={setDeliveryTime}
          />
        )}
        {currentStepIndex === 4 && (
          <Step5
            copy={calculatorCopy}
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
              {calculatorCopy.nav.prev}
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
                {calculatorCopy.nav.next}
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
                {calculatorCopy.nav.quote}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
