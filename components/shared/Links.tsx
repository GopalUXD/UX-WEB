import Image from "next/image";

import { cn } from "@/lib/utils";

type LinkItem = {
  title: string; // shown in blue, e.g. 【ワンビ株式会社】
  href: string; // external site URL
  image: string; // logo inside /public/link/
  description: string[]; // one entry per line
};

type LinkGroup = {
  title: string;
  grey?: boolean; // grey background band
  showTitle?: boolean; // show `title` as a heading above the rows
  items: LinkItem[];
};

// ---- Edit the content here. Put the real URLs in `href` ----
const groups: LinkGroup[] = [
  {
    title: "リンク",
    items: [
      {
        title: "【特定非営利活動法人「元気な日本をつくる会」】",
        href: "#",
        image: "/links/link-1.png",
        description: [
          "NPO法人である「元気な日本をつくる会」は官民連携による地域活性化を推進するため、民間事業者としての発想力や行動力、経験を基に、全国の自治体と連携した取組みを展開しています。",
        ],
      },
      {
        title: "【一般社団法人日本ITAD（旧RITEA）協会】",
        href: "#",
        image: "/links/link-2.png",
        description: [
          "ウルトラエックスのデータ消去ツール「FlashErase」「FlashEraseUEFI」",
          "「Mobile Pliers(for Android / iPhone / iPad)」は当協会の認定ツールです。",
        ],
      },
      {
        title: "【ULTRA-X,INC.のホームページ】",
        href: "#",
        image: "/links/link-3.png",
        description: [
          "ウルトラエックスグループ(ULTRA-X,INC. / ULTRA-X B.V. / 株式会社ウルトラエックス)は世界で展開しています。",
        ],
      },
      {
        title: "【日本デザイン福祉専門学校】",
        href: "#",
        image: "/links/link-4.png",
        description: [
          "UXコミックの作者ハヤシミドリさんの母校で観光・保育・デザインの学校です。",
          "学生ひとりひとりの対話を通じ、〈学生自らが、自らの意志で学ぶ〉環境を作り出し、創造力を養い、表現できる人材を育成します。",
        ],
      },
      {
        title: "【伝統工芸王国】",
        href: "#",
        image: "/links/link-5.png",
        description: [
          "「伝統工芸×IT」をコンセプトに、伝統工芸の九谷焼や山中漆器でひとつひとつ職人が手作業で製作したiPhoneカバーやUSBメモリ、マウスなどを販売しています。",
        ],
      },
      {
        title: "【データ適正消去実行証明協議会（ADEC）】",
        href: "#",
        image: "/links/link-6.png",
        description: [
          "「データ適正消去実行証明協議会（ADEC）」は、データの適正消去が実行されたことを証明するための第三者的な証明制度の普及・啓発を目的とした組織です。",
        ],
      },
    ],
  },
  {
    title: "UX ITパートナーズ",
    grey: true,
    showTitle: true,
    items: [
      {
        title: "【株式会社オサムインビジョンテクノロジー】",
        href: "#",
        image: "/links/link-7.png",
        description: ["高音質Web会議システムの企画・開発・販売をしています。"],
      },
      {
        title: "【ワンビ株式会社】",
        href: "#",
        image: "/links/link-8.png",
        description: ["遠隔データ消去製品の開発・販売をしています。"],
      },
    ],
  },
];

function Row({ item }: { item: LinkItem }) {
  const external = item.href.startsWith("http");

  return (
    <li className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:gap-[15px]">
      <div className="relative h-32 w-50 shrink-0">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>

      <div className="text-[13px] leading-6 text-neutral-700">
        <a
          href={item.href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="font-bold text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid text-lg"
        >
          {item.title}
        </a>
        <div>
          {item.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function Links() {
  return (
    <>
      {groups.map((group) => (
        <section
          key={group.title}
          className={cn(group.grey && "bg-[#f4f6f8] mb-4")}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="max-w-220">
              {group.showTitle && (
                <h2 className="mb-10 text-center text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  {group.title}
                </h2>
              )}
              <ul className="divide-y divide-blue-800">
                {group.items.map((item) => (
                  <Row key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
