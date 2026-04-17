import type { GetServerSideProps } from "next";
import {
  SUPPORTED_LOCALES,
  toHreflang,
  withLocalePath,
} from "@/lib/seo";

type SitemapPage = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
};

const PAGES: SitemapPage[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "weekly", priority: "0.9" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/contacts", changefreq: "weekly", priority: "0.9" },
  { path: "/interpreting", changefreq: "weekly", priority: "0.9" },
  { path: "/written-translation", changefreq: "weekly", priority: "0.9" },
  { path: "/official-documents", changefreq: "weekly", priority: "0.9" },
];

function getOrigin(req: Parameters<GetServerSideProps>[0]["req"]): string {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol =
    typeof forwardedProto === "string"
      ? forwardedProto.split(",")[0]?.trim()
      : req.headers.host?.includes("localhost")
        ? "http"
        : "https";
  const host = req.headers.host ?? "localhost:3000";

  return `${protocol}://${host}`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const origin = getOrigin(req);
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = PAGES.flatMap(({ path, changefreq, priority }) =>
    SUPPORTED_LOCALES.map((locale) => {
      const localizedPath = withLocalePath(path, locale);
      const localizedUrl = `${origin}${localizedPath}`;
      const alternateTags = SUPPORTED_LOCALES.map((alternateLocale) => {
        const href = `${origin}${withLocalePath(path, alternateLocale)}`;
        const hreflang = toHreflang(alternateLocale);
        return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`;
      }).join("\n");
      const xDefaultHref = `${origin}${withLocalePath(path, "ua")}`;

      return `  <url>
    <loc>${localizedUrl}</loc>
${alternateTags}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}" />
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }),
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function SitemapXml() {
  return null;
}
