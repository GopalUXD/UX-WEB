import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronDown, Home } from "lucide-react";

import { cn } from "@/lib/utils";
import Pagination from "@/components/shared/Pagination";

type Category = "お知らせ" | "展示会";

type Post = {
  id: string; // link: /news/[id]
  title: string;
  date: string; // YYYY-MM-DD
  category: Category;
  excerpt: string; // line breaks (\n) are kept
  image?: string; // optional thumbnail inside /public/news/
  isNew?: boolean; // shows red 新着!!
};

// ---- Sample data. Replace with your API / CMS data later ----
const posts: Post[] = [
  {
    id: "edgetech-plus-2026",
    title: "EdgeTech+ 2026",
    date: "2026-11-16",
    category: "展示会",
    image: "/news/news-1.png",
    isNew: true,
    excerpt:
      "2026年11月18日（水）〜20日（金）に開催されます、EdgeTech+ 2026に出展いたします。\n\n" +
      "【日時】2026年11月18日（水）〜20日（金）10:00〜17:00　※19日（木）のみ18:00まで\n" +
      "【会場】パシフィコ横浜\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-kansai-2026",
    title: "Japan IT Week 関西 2026",
    date: "2026-10-27",
    category: "展示会",
    image: "/news/news-2.png",
    excerpt:
      "2026年11月18日（水）〜20日（金）に開催されます、Japan IT Week 関西＠インテックス大阪に出展いたします。\n" +
      "【日時】2026年11月18日(水) ～ 20日（金）10時～17時\n" +
      "【ブース番号】9-52（5号館）\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026-thanks",
    title: "Japan IT Week 秋 2026 御礼",
    date: "2026-10-26",
    category: "展示会",
    image: "/news/news-3.png",
    excerpt:
      "「Japan IT Week 秋 2026」は大変盛況のうちに終了いたしました。\n\n" +
      "弊社ブースにお立ち寄りいただき心より御礼申し上げます。",
  },
  {
    id: "reuse-tech-conference-2027",
    title: "Reuse×Tech Conference for 2027",
    date: "2026-09-30",
    category: "展示会",
    image: "/news/news-4.png",
    excerpt:
      "2026年10月20日（火）〜21日（水）に開催されます、Reuse×Tech Conference for 2027に出展いたします。\n\n" +
      "【日時】2026年10月20日(火)～10月21日（水）10時～18時\n" +
      "【会場】TODA HALL&CONFERENCE TOKYO\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026",
    title: "Japan IT Week 秋 2026",
    date: "2026-09-29",
    category: "展示会",
    image: "/news/news-5.png",
    excerpt:
      "2026年10月21日（水）～23日（金）に開催されます、Japan IT Week＠幕張メッセに出展いたします。\n" +
      "【日時】2026年10月21日(水)～23日（金）10時～17時\n" +
      "【ブース番号】A7-27（3ホール）\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "edgetech-plus-2026",
    title: "EdgeTech+ 2026",
    date: "2026-11-16",
    category: "展示会",
    image: "/news/news-1.png",
    isNew: true,
    excerpt:
      "2026年11月18日（水）〜20日（金）に開催されます、EdgeTech+ 2026に出展いたします。\n\n" +
      "【日時】2026年11月18日（水）〜20日（金）10:00〜17:00　※19日（木）のみ18:00まで\n" +
      "【会場】パシフィコ横浜\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-kansai-2026",
    title: "Japan IT Week 関西 2026",
    date: "2026-10-27",
    category: "展示会",
    image: "/news/news-2.png",
    excerpt:
      "2026年11月18日（水）〜20日（金）に開催されます、Japan IT Week 関西＠インテックス大阪に出展いたします。\n" +
      "【日時】2026年11月18日(水) ～ 20日（金）10時～17時\n" +
      "【ブース番号】9-52（5号館）\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026-thanks",
    title: "Japan IT Week 秋 2026 御礼",
    date: "2026-10-26",
    category: "展示会",
    image: "/news/news-3.png",
    excerpt:
      "「Japan IT Week 秋 2026」は大変盛況のうちに終了いたしました。\n\n" +
      "弊社ブースにお立ち寄りいただき心より御礼申し上げます。",
  },
  {
    id: "reuse-tech-conference-2027",
    title: "Reuse×Tech Conference for 2027",
    date: "2026-09-30",
    category: "展示会",
    image: "/news/news-4.png",
    excerpt:
      "2026年10月20日（火）〜21日（水）に開催されます、Reuse×Tech Conference for 2027に出展いたします。\n\n" +
      "【日時】2026年10月20日(火)～10月21日（水）10時～18時\n" +
      "【会場】TODA HALL&CONFERENCE TOKYO\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026",
    title: "Japan IT Week 秋 2026",
    date: "2026-09-29",
    category: "展示会",
    image: "/news/news-5.png",
    excerpt:
      "2026年10月21日（水）～23日（金）に開催されます、Japan IT Week＠幕張メッセに出展いたします。\n" +
      "【日時】2026年10月21日(水)～23日（金）10時～17時\n" +
      "【ブース番号】A7-27（3ホール）\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "edgetech-plus-2026",
    title: "EdgeTech+ 2026",
    date: "2026-11-16",
    category: "展示会",
    image: "/news/news-1.png",
    isNew: true,
    excerpt:
      "2026年11月18日（水）〜20日（金）に開催されます、EdgeTech+ 2026に出展いたします。\n\n" +
      "【日時】2026年11月18日（水）〜20日（金）10:00〜17:00　※19日（木）のみ18:00まで\n" +
      "【会場】パシフィコ横浜\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-kansai-2026",
    title: "Japan IT Week 関西 2026",
    date: "2026-10-27",
    category: "展示会",
    image: "/news/news-2.png",
    excerpt:
      "2026年11月18日（水）〜20日（金）に開催されます、Japan IT Week 関西＠インテックス大阪に出展いたします。\n" +
      "【日時】2026年11月18日(水) ～ 20日（金）10時～17時\n" +
      "【ブース番号】9-52（5号館）\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026-thanks",
    title: "Japan IT Week 秋 2026 御礼",
    date: "2026-10-26",
    category: "展示会",
    image: "/news/news-3.png",
    excerpt:
      "「Japan IT Week 秋 2026」は大変盛況のうちに終了いたしました。\n\n" +
      "弊社ブースにお立ち寄りいただき心より御礼申し上げます。",
  },
  {
    id: "reuse-tech-conference-2027",
    title: "Reuse×Tech Conference for 2027",
    date: "2026-09-30",
    category: "展示会",
    image: "/news/news-4.png",
    excerpt:
      "2026年10月20日（火）〜21日（水）に開催されます、Reuse×Tech Conference for 2027に出展いたします。\n\n" +
      "【日時】2026年10月20日(火)～10月21日（水）10時～18時\n" +
      "【会場】TODA HALL&CONFERENCE TOKYO\n\n" +
      "詳細はタイトルをクリックください。",
  },
  {
    id: "japan-it-week-autumn-2026",
    title: "Japan IT Week 秋 2026",
    date: "2026-09-29",
    category: "展示会",
    image: "/news/news-5.png",
    excerpt:
      "2026年10月21日（水）～23日（金）に開催されます、Japan IT Week＠幕張メッセに出展いたします。\n" +
      "【日時】2026年10月21日(水)～23日（金）10時～17時\n" +
      "【ブース番号】A7-27（3ホール）\n\n" +
      "詳細はタイトルをクリックください。",
  },
];

// Second variable: older posts (no thumbnail)
const olderPosts: Post[] = [
  {
    id: "japan-it-week-autumn-2026-thanks",
    title: "Japan IT Week 秋 2026 御礼",
    date: "2026-10-26",
    category: "展示会",
    excerpt:
      "「Japan IT Week 秋 2026」は大変盛況のうちに終了いたしました。\n" +
      "弊社ブースにお立ち寄りいただき心より御礼申し上げます。",
  },
  {
    id: "shokyo-adec",
    title: "「SHOKYO for iPhone/iPad」ADEC消去技術認証取得のお知らせ",
    date: "2026-04-14",
    category: "お知らせ",
    excerpt: "詳細はタイトルをクリックください。",
  },
  {
    id: "important-notice",
    title:
      "※重要なお知らせ※当社名及び当社代表取締役名を騙った迷惑メールにご注意ください",
    date: "2026-01-07",
    category: "お知らせ",
    excerpt: "詳細はタイトルをクリックください。",
  },
  {
    id: "new-year-2026",
    title: "謹賀新年",
    date: "2026-01-01",
    category: "お知らせ",
    excerpt: "詳細はタイトルをクリックください。",
  },
];

// Both lists together (the page uses this one)
const allPosts: Post[] = [...posts, ...olderPosts];

const categoryLinks: Record<Category, string> = {
  お知らせ: "/category/information",
  展示会: "/category/event",
};

// Months that have posts. Links are /YYYY/MM (same path style as the old site).
const archiveYears: { year: number; months: number[] }[] = [
  { year: 2026, months: [11, 10, 9, 8, 7, 6, 4, 3, 2, 1] },
  { year: 2025, months: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { year: 2024, months: [12, 11, 10, 9, 8, 7, 6, 4, 3, 2, 1] },
  { year: 2023, months: [12, 11, 10, 9, 6, 4, 3, 1] },
  { year: 2022, months: [12, 11, 10, 7, 6, 3, 2, 1] },
  { year: 2021, months: [12, 11, 10, 9, 7, 6, 5, 4, 1] },
  { year: 2020, months: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { year: 2019, months: [12, 11, 10, 7] },
];

const byDateDesc = (a: Post, b: Post) => b.date.localeCompare(a.date);

// Sidebar lists use ALL posts
const sortedPosts = [...allPosts].sort(byDateDesc);

// Left (main) list uses ONLY the `posts` variable
const mainPosts = [...posts].sort(byDateDesc);

/* ---------- small pieces ---------- */

function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-1.5 py-0.5 text-[10px] font-bold leading-none text-white",
        category === "お知らせ" ? "bg-neutral-500" : "bg-neutral-300"
      )}
    >
      {category}
    </span>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="border-t pb-16 pt-6 first:pt-6">
      {post.image && (
        <Link href={`/news/${post.id}`} className="group relative block">
          <div className="relative aspect-[616/125] w-full overflow-hidden border bg-muted">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 616px, 100vw"
              className="object-cover"
            />
            {/* Hover effect: image gets darker */}
            <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
          </div>
          <span className="absolute right-0 top-0 bg-neutral-300 px-2 py-1 text-[11px] leading-none text-white">
            {post.category}
          </span>
        </Link>
      )}

      <h2 className="mt-2 border-b pb-2 text-base">
        <Link href={`/news/${post.id}`} className="hover:text-sky-600">
          {post.title}
        </Link>
        {post.isNew && (
          <span className="ml-2 text-xs font-bold text-red-600">新着!!</span>
        )}
      </h2>

      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="size-3" aria-hidden="true" />
        <time dateTime={post.date}>{post.date}</time>
        {!post.image && <CategoryBadge category={post.category} />}
      </div>

      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>
    </article>
  );
}

function WidgetTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-b text-base font-bold">
      {/* short blue line on the left, like the design */}
      <span className="-mb-px inline-block border-b-2 border-sky-500 pb-1.5 pr-8">
        {children}
      </span>
    </h3>
  );
}

function PostLinkList({
  items,
  showBadge,
}: {
  items: Post[];
  showBadge?: boolean;
}) {
  return (
    <ul>
      {items.map((post) => (
        <li key={post.id} className="border-b py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <time dateTime={post.date}>{post.date}</time>
            {showBadge && <CategoryBadge category={post.category} />}
          </div>
          <Link
            href={`/news/${post.id}`}
            className="mt-1 block text-[15px] leading-snug hover:text-sky-600"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Sidebar() {
  const categories: Category[] = ["お知らせ", "展示会"];

  return (
    <aside aria-label="Sidebar" className="space-y-10">
      {categories.map((category) => (
        <section key={category}>
          <WidgetTitle>
            <Link href={categoryLinks[category]}>{category}</Link>
          </WidgetTitle>
          <PostLinkList
            items={sortedPosts.filter((p) => p.category === category)}
            showBadge
          />
        </section>
      ))}

      <section>
        <WidgetTitle>月別アーカイブ</WidgetTitle>
        <ul>
          {archiveYears.map(({ year, months }, i) => (
            <li key={year} className="border-b">
              {/* Latest year is open, older years are collapsed */}
              <details open={i === 0} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-medium [&::-webkit-details-marker]:hidden">
                  {year}年
                  <ChevronDown
                    className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="pb-2">
                  {months.map((month) => (
                    <li key={month}>
                      <Link
                        href={`/${year}/${String(month).padStart(2, "0")}`}
                        className="block px-6 py-1.5 text-sm text-sky-500 hover:underline"
                      >
                        {year}年{month}月
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

/* ---------- main component ---------- */

type NewsPageProps = {
  page?: number; // current page (1, 2, 3 ...)
  perPage?: number; // posts per page
};

export default function NewsPage({ page = 1, perPage = 10 }: NewsPageProps) {
  const totalPages = Math.max(1, Math.ceil(mainPosts.length / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const pagePosts = mainPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
        <main>
          <h1 className="sr-only">ニュース</h1>
          {pagePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          <div className="border-t pt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/news"
            />
          </div>
        </main>

        <Sidebar />
      </div>
    </>
  );
}
