import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import Breadcrumb from "@/components/shared/Breadcrumb";

/* =====================================================================
   Edit the content in this block. Images go in /public/events/edgetech-2026/
   ===================================================================== */

const EVENT_TITLE = "EdgeTech+ 2026";
const ORGANIZER_URL = "#"; // <- official event website
const IMG = "/events";

const intro = [
  "EdgeTech+ 2026は、日本最大級の組込み・エッジテクノロジー総合展示会です。",
  "当社ブースでは、組込み機器の診断ツールや、PCに高負荷をかけて安定性をチェックできるツールなど、IT機器の開発・製造・リユースといったライフサイクル全体における品質向上を支援する「SHINDANツール」を中心に展示いたします。",
  "また、本展示会では、製品開発を担当するエンジニアがブースに常駐します。技術的な話題や、開発現場でのお困りごとについてのご相談にも直接お応えします。ぜひエンジニアとの対話を通じて、ウルトラエックスの技術力をご体感ください。",
];

const solutions: {
  title: string;
  image: string;
  description: string[];
  link?: { label: string; href: string };
}[] = [
  {
    title: "PCハードウェア診断ツール",
    image: `${IMG}/event-1-1.png`,
    description: [
      "PCのハードウェアを検査するツールです。CPU、メモリ、HDD、SSDなど、PCを構成するハードウェアの不良の有無を検出します。",
      "産業用PCの導入前検査や組込みシステムの評価、製造時の出荷検査、工場・設備での保守点検など、安定稼働が求められる現場でご活用いただけます。",
      "ご検討中の業務や診断内容に合わせて、複数の診断ツールをご用意しています。",
    ],
    link: {
      label: "▶【PCハードウェア診断ツール】ページ",
      href: "/solution/shindan/pc",
    },
  },
  {
    title: "負荷テストツール",
    image: `${IMG}/event-1-2.png`,
    description: [
      "CPU、メモリ、ドライブなど、PCを構成する各種デバイスに強力な負荷をかけ、PCの安定性を確認する診断ツールです。",
      "GPU搭載システムの評価、開発時の負荷試験、システム稼働前のエージング、安定性評価、不具合環境の再現など、さまざまな場面でご利用いただいています。",
    ],
    link: {
      label: "▶負荷テストツール「VR Stress Test」ページ",
      href: "/solution/shindan/pc",
    },
  },
  {
    title: "ＰＣ監視ツール",
    image: `${IMG}/event-1-3.png`,
    description: [
      "PCの温度や電圧などの状態をリアルタイムで監視し、グラフで表示します。",
      "異常な温度上昇や電圧変動を早期に把握できるため、故障の兆候を見逃しにくくなります。",
      "また、機器情報や起動日時、稼働時間を確認でき、Windowsのイベントログから異常終了の履歴を表示するため、トラブル発生時の原因調査にも役立ちます。",
    ],
  },
  {
    title: "ローカルAI",
    image: `${IMG}/event-1-4.png`,
    description: [
      "社内文書や資料を検索し、その内容をもとに対話形式で回答するチャットAIです。",
      "ローカル環境で動作するため、社内データを外部サービスへ送信することなく生成AIを活用できます。",
    ],
  },
];

const festa = {
  title: "「EdgeTech+フェスタ」について",
  image: `${IMG}/event-1-5.png`,
  text:
    "11月19日（木）17:00〜18:00に、展示会場で開催される交流イベント「EdgeTech+ フェスタ」に参加します。\n" +
    "このイベントでは、出展企業がそれぞれお酒やおつまみを用意し、来場者の皆さまと気軽に交流できるイベントとなっています。\n\n" +
    "当社ブースでは、日本酒をご用意する予定です。詳細はFacebookでお知らせします。\n" +
    "日本酒を味わいながら、当社の技術や取り組みについてお話しできればと思います。\n" +
    "ぜひ当社ブースへお立ち寄りください。皆さまのご来場を心よりお待ちしております。",
};

const access = {
  lines: [
    "会場：パシフィコ横浜",
    "住所：〒220-0012　神奈川県横浜市西区みなとみらい1-1-1",
    "みなとみらい線",
    "「みなとみらい駅」下車　徒歩5分",
    "JR京浜東北・根岸線/横浜市営地下鉄ブルーライン",
    "「桜木町駅」下車　徒歩12分",
  ],
  mapQuery: "パシフィコ横浜 神奈川県横浜市西区みなとみらい1-1-1",
};

/* =====================================================================
   Component
   ===================================================================== */

const inlineLink = "text-sky-600 hover:underline dark:text-sky-400";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const band = "bg-[#eef3fb] dark:bg-muted";
const h2Class =
  "text-center text-3xl font-bold text-neutral-900 dark:text-neutral-100";

// Info table rows
const infoRows: { label: string; content: ReactNode }[] = [
  {
    label: "名称",
    content: (
      <a href={ORGANIZER_URL} {...external} className={inlineLink}>
        EdgeTech+2026
      </a>
    ),
  },
  {
    label: "会期",
    content: (
      <>
        <p>2026年11月18日（水）〜11月20日（金）</p>
        <p>10:00〜17:00</p>
        <p>
          ※
          <Link href="#festa" className={inlineLink}>
            『EdgeTech+ フェスタ』
          </Link>
          開催の為、19日（木）のみ18:00まで
        </p>
      </>
    ),
  },
  {
    label: "会場",
    content: (
      <>
        <p>パシフィコ横浜</p>
        <p>みなとみらい線「みなとみらい駅」下車　徒歩5分</p>
        <p>
          JR京浜東北・根岸線/横浜市営地下鉄ブルーライン「桜木町駅」下車　徒歩12分
        </p>
        <p>
          <Link href="#access" className={inlineLink}>
            アクセス
          </Link>
        </p>
      </>
    ),
  },
  { label: "ブース番号", content: <p>CF-16（展示ホールC）</p> },
  {
    label: "来場案内",
    content: (
      <p>
        会場への入場には事前に来場登録が必要になります。詳しくは主催者
        <a href={ORGANIZER_URL} {...external} className={inlineLink}>
          ウェブサイト
        </a>
        よりご確認ください。
      </p>
    ),
  },
];

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  access.mapQuery
)}&hl=ja&z=16&output=embed`;

export default function EventDetail() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "ニュース", href: "/category" },
          { label: EVENT_TITLE },
        ]}
      />

      {/* 1. Title, introduction, information table */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-12 sm:px-6">
        <h1 className="text-center text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          {EVENT_TITLE}
        </h1>

        <div className="mt-14 space-y-0.5 text-[15px] leading-8 text-neutral-800 dark:text-neutral-200">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse border border-neutral-800 text-[13px] leading-5 dark:border-neutral-400">
            <tbody>
              {infoRows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="w-24 border border-neutral-800 px-3 py-2.5 text-left align-middle font-normal sm:w-[116px] dark:border-neutral-400"
                  >
                    {row.label}
                  </th>
                  <td className="border border-neutral-800 px-2.5 py-2.5 dark:border-neutral-400">
                    {row.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Booth map */}
      <section
        id="booth-map"
        className={`${band} scroll-mt-24 px-4 py-12 sm:px-6`}
      >
        <div className="mx-auto  max-w-5xl">
          <h2 className={h2Class}>ブースマップ</h2>
          <Image
            src={`${IMG}/event-map-1.png`}
            alt="ブースマップ（当社ブース CF-16）"
            width={693}
            height={643}
            sizes="(min-width: 768px) 693px, 100vw"
            className="mx-auto mt-10 h-auto w-full"
          />
        </div>
      </section>

      {/* 3. Exhibited solutions */}
      <section id="solutions" className="scroll-mt-24 px-4 py-14 sm:px-6">
        <div className="mx-auto  max-w-5xl">
          <h2 className={h2Class}>展示ソリューション</h2>

          <ul className="mt-10 divide-y divide-neutral-200 dark:divide-neutral-800">
            {solutions.map((item) => (
              <li key={item.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-lg font-bold text-[#2a5d8f] dark:text-sky-300">
                  ◆{item.title}
                </h3>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-[15px]">
                  <div className="relative aspect-[226/151] w-full shrink-0 overflow-hidden sm:w-[226px]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 226px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 text-xs leading-6 text-neutral-700 dark:text-neutral-300">
                    {item.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}

                    {item.link && (
                      <p className="mt-3 text-right">
                        <Link
                          href={item.link.href}
                          className="text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid dark:text-sky-400"
                        >
                          {item.link.label}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Festa */}
      <section id="festa" className={`${band} scroll-mt-24 px-4 py-12 sm:px-6`}>
        <div className="mx-auto max-w-5xl">
          <h2 className={h2Class}>{festa.title}</h2>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:justify-between">
            <p className="whitespace-pre-line text-xs leading-6 text-neutral-800 sm:max-w-[452px] dark:text-neutral-200">
              {festa.text}
            </p>

            <div className="relative aspect-[168/226] w-full max-w-[240px] shrink-0 sm:w-[240px]">
              <Image
                src={festa.image}
                alt="日本酒"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Access */}
      <section id="access" className="scroll-mt-24 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className={h2Class}>アクセス</h2>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-between">
            <div className="text-xs leading-6 text-neutral-800 dark:text-neutral-200">
              {access.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="aspect-[4/3] w-full shrink-0 bg-muted sm:w-[340px]">
              <iframe
                title="パシフィコ横浜の地図"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
