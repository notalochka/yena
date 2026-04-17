import type { GetServerSideProps } from "next";

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
  const aiText = `# Yena Translations
> Професійні послуги перекладу: усний (конференц-) переклад, письмовий переклад, засвідчені переклади офіційних документів.

## Опис
Yena Translations надає конференц-переклад, письмовий переклад спеціалізованих текстів, локалізацію веб-сайтів та супровід міжнародних заходів. Працюємо з німецькою, українською, російською та англійською мовами.

## Послуги
- Усний переклад (синхронний, послідовний, віддалений RSI)
- Письмовий переклад (техніка, право, медицина, маркетинг)
- Засвідчені переклади офіційних документів (апостиль, нотаріальне посвідчення)
- Локалізація та редагування

## Контакти
- Сайт: ${origin}
- Email: contact@yena.de

## Сторінки (українська версія за замовчуванням)
- Головна: ${origin}/
- Про нас: ${origin}/about
- Послуги: ${origin}/services
- Контакти: ${origin}/contacts
- Усний переклад: ${origin}/interpreting
- Письмовий переклад: ${origin}/written-translation
- Офіційні документи: ${origin}/official-documents

Інші мови інтерфейсу доступні за префіксами шляху: /en, /ru, /de.`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(aiText);
  res.end();

  return { props: {} };
};

export default function AiTxt() {
  return null;
}
