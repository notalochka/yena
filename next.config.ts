import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  i18n: {
    locales: ["ua", "ru", "en", "de"],
    defaultLocale: "ua",
    /** URL is the source of truth for UI language; do not override from Accept-Language */
    localeDetection: false,
  },
};

export default nextConfig;
