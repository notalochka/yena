import Head from "next/head";
import { useRouter } from "next/router";
import {
  DEFAULT_OG_IMAGE_PATH,
  SITE_NAME,
  getAlternateLanguageUrls,
  resolveLocale,
  SUPPORTED_LOCALES,
  toAbsoluteUrl,
  toOgLocale,
  withLocalePath,
} from "@/lib/seo";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  noindex?: boolean;
};

export function Seo({
  title,
  description,
  path,
  imagePath = DEFAULT_OG_IMAGE_PATH,
  noindex = false,
}: SeoProps) {
  const router = useRouter();
  const locale = resolveLocale(router.locale);
  const localizedPath = withLocalePath(path, locale);
  const canonicalUrl = toAbsoluteUrl(localizedPath);
  const ogImageUrl = toAbsoluteUrl(imagePath);
  const robotsContent = noindex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large";
  const ogLocale = toOgLocale(locale);
  const alternateLanguageUrls = getAlternateLanguageUrls(path);
  const alternateOgLocales = SUPPORTED_LOCALES.filter((value) => value !== locale).map(
    (value) => toOgLocale(value),
  );

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      {alternateLanguageUrls.map(({ locale: altLocale, href, hreflang }) => (
        <link key={altLocale} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={toAbsoluteUrl(withLocalePath(path, "ua"))}
      />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      {alternateOgLocales.map((value) => (
        <meta key={value} property="og:locale:alternate" content={value} />
      ))}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
