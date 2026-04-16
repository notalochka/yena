"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState, type SyntheticEvent } from "react";
import styles from "./ImageWithPlaceholder.module.css";

const DEFAULT_TEXT = "Завантаження...";

export type ImageWithPlaceholderProps = ImageProps & {
  /** Текст на плейсхолдері під час завантаження */
  placeholderText?: string;
  /** Якщо true — обгортка `inline-block` (іконки, невеликі зображення) */
  inline?: boolean;
};

export default function ImageWithPlaceholder({
  className,
  placeholderText = DEFAULT_TEXT,
  inline = false,
  onLoad,
  onLoadingComplete,
  alt,
  ...rest
}: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(event);
      onLoadingComplete?.(event.currentTarget);
    },
    [onLoad, onLoadingComplete],
  );

  return (
    <span className={inline ? styles.rootInline : styles.root}>
      {!loaded && (
        <span className={styles.placeholder} aria-hidden>
          {placeholderText}
        </span>
      )}
      <Image
        {...rest}
        alt={alt}
        className={`${styles.image} ${loaded ? styles.imageLoaded : ""} ${className ?? ""}`}
        onLoad={handleLoad}
      />
    </span>
  );
}
