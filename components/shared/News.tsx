import Link from "next/link";

type NewsItem = {
  id: string; // used in the link: /news/[id]
  title: string;
  date: string; // YYYY-MM-DD
  body: string; // line breaks (\n) are kept
};

// Sample data from the design. Replace with your API / CMS data later.
const newsItems: NewsItem[] = [
  {
    id: "japan-it-week-kansai-2026",
    title: "Japan IT Week 関西 2026",
    date: "2026-10-27",
    body:
      "2026年11月18日（水）〜20日（金）に開催されます、Japan IT Week 関西@インテックス大阪に出展いたします。\n" +
      "【日時】2026年11月18日(水) ～ 20日（金）10時～17時\n" +
      "【ブース番号】9-52（5号館）\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026-thanks",
    title: "Japan IT Week 秋 2026 御礼",
    date: "2026-10-26",
    body:
      "「Japan IT Week 秋 2026」は大変盛況のうちに終了いたしました。\n" +
      "弊社ブースにお立ち寄りいただき心より御礼申し上げます。",
  },
  {
    id: "edgetech-plus-2026",
    title: "EdgeTech+ 2026",
    date: "2026-10-15",
    body:
      "2026年11月18日（水）〜20日（金）に開催されます、EdgeTech+ 2026に出展いたします。\n" +
      "【日時】2026年11月18日（水）〜20日（金）10:00〜17:00　※19日（木）のみ18:00まで\n" +
      "【会場】パシフィコ横浜\n" +
      "詳細はタイトルをクリックください。",
  },
];

export default function News() {
  return (
    <section aria-labelledby="news-heading" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2
          id="news-heading"
          className="text-center text-4xl font-bold text-neutral-800 dark:text-neutral-100 sm:text-5xl"
        >
          News
        </h2>

        <ul className="mt-6">
          {newsItems.map((item) => (
            <li key={item.id} className="border-b py-6 first:pt-2">
              <article>
                <h3 className="text-lg leading-snug">
                  <Link
                    href={`/news/${item.id}`}
                    className="text-sky-500 hover:underline focus-visible:underline dark:text-sky-400"
                  >
                    {item.title}
                  </Link>
                </h3>

                <time
                  dateTime={item.date}
                  className="block text-base text-muted-foreground"
                >
                  {item.date}
                </time>

                {/* whitespace-pre-line keeps the line breaks of the text */}
                <p className="mt-3 whitespace-pre-line leading-relaxed text-foreground">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
