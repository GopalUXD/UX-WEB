import Link from "next/link";

type Section = {
  title: string;
  lines?: string[]; // plain text lines
  list?: string[]; // bullet list
  rows?: [string, string][]; // two columns (label, value), e.g. executives
  button?: { label: string; href: string };
  link?: { label: string; href: string };
};

// ---- Edit the company information here ----
const sections: Section[] = [
  { title: "社名", lines: ["株式会社ウルトラエックス"] },
  { title: "英文社名", lines: ["ULTRA-X ASIA PACIFIC"] },
  {
    title: "事業内容",
    list: [
      "PCベンダー様への製品の品質向上を目的としたツール（PC診断ツール）の提供",
      "PCの製造をサポートするツール（OS自動インストールツール）の提供",
      "リユース企業様向け支援ツール（PC・モバイル製品データ消去ツール）の提供",
      "PC周辺機器・便利ツールの開発、提供",
    ],
  },
  {
    title: "本社所在地",
    lines: [
      "営業部 技術部",
      "〒101-0032",
      "東京都千代田区岩本町3-9-17　スリーセブンビル8F",
    ],
    button: { label: "アクセスはこちら", href: "/company/access" },
  },
  {
    title: "種子島事業所所在地",
    lines: [
      "開発センター＆ＩｏＴラボ",
      "〒891-3432",
      "鹿児島県西之表市安城3517-239",
    ],
    button: { label: "種子島事業所の紹介", href: "/company/profile" },
  },
  {
    title: "本店所在地",
    lines: ["国際営業部 特販営業部", "〒111-0036", "東京都台東区松が谷3-20-14"],
  },
  { title: "資本金", lines: ["3,810万円"] },
  { title: "法人番号", lines: ["4010501020079"] },
  { title: "適格請求書発行事業者登録番号", lines: ["T4010501020079"] },
  { title: "古物商許可番号", lines: ["東京都公安委員会　第306610307994号"] },
  { title: "設立", lines: ["2000年8月"] },
  { title: "従業員数", lines: ["15名（2021年3月現在）"] },
  {
    title: "役員",
    rows: [
      ["代表取締役CEO", "服部　達也"],
      ["取締役CTO", "飯泉　康一"],
      ["監査役", "花木　大悟（花木大悟公認会計士事務所　所長）"],
    ],
  },
  {
    title: "取引銀行",
    lines: [
      "三菱UFJ銀行　秋葉原支店",
      "三井住友銀行　浅草橋支店",
      "朝日信用金庫　本店",
    ],
  },
  {
    title: "グループ会社",
    link: {
      label: "株式会社オサムインビジョンテクノロジー",
      href: "https://www.osamu.co.jp/",
    }, // <- put the real URL
  },
];

export default function Company() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6">
        <h1 className="sr-only">企業情報</h1>

        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="border-b border-blue-800 pb-2 text-lg font-bold text-neutral-800 dark:border-blue-400 dark:text-neutral-100">
                {section.title}
              </h2>

              <div className="mt-5 text-[13px] leading-6 text-neutral-700 dark:text-neutral-300">
                {section.lines && (
                  <div>
                    {section.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ul className="list-disc space-y-0.5 pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.rows && (
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4">
                    {section.rows.map(([label, value]) => (
                      <div key={label} className="contents">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.link && (
                  <Link
                    href={section.link.href}
                    className="text-neutral-800 underline decoration-dotted underline-offset-4 hover:decoration-solid dark:text-neutral-100"
                  >
                    {section.link.label}
                  </Link>
                )}

                {section.button && (
                  <Link
                    href={section.button.href}
                    className="mt-1 inline-block rounded-sm bg-sky-400 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-sky-500"
                  >
                    {section.button.label}
                  </Link>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
