import revealStyles from "@/styles/pageReveal.module.css";
import { useEffect, useState } from "react";

/** Герой + поява секцій з [data-page-reveal] при скролі (як на головній). */
export function usePageReveal() {
  const [heroReveal, setHeroReveal] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setHeroReveal(true);
      document
        .querySelectorAll<HTMLElement>("[data-page-reveal]")
        .forEach((el) => {
          el.classList.add(revealStyles.revealVisible);
        });
      return;
    }

    const id = requestAnimationFrame(() => {
      setHeroReveal(true);
    });

    const revealClass = revealStyles.revealVisible;

    const isRoughlyInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight ?? document.documentElement.clientHeight;
      return rect.bottom > 8 && rect.top < vh - 8;
    };

    const nodes = document.querySelectorAll<HTMLElement>("[data-page-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add(revealClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 12% 0px", threshold: 0 },
    );

    nodes.forEach((node) => {
      if (isRoughlyInViewport(node)) {
        node.classList.add(revealClass);
      } else {
        observer.observe(node);
      }
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, []);

  return heroReveal;
}
