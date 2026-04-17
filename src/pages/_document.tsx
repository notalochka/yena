import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";

type Props = DocumentInitialProps & {
  locale?: string;
};

function htmlLangFromNextLocale(locale: string | undefined): string {
  if (locale === "ua") return "uk";
  if (locale === "ru" || locale === "en" || locale === "de") return locale;
  return "uk";
}

export default class AppDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale };
  }

  render() {
    const lang = htmlLangFromNextLocale(this.props.locale);
    return (
      <Html lang={lang}>
        <Head>
          <link rel="icon" href="/logo_icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/logo_mess.jpg" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
