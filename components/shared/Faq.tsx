import Link from "next/link";

import Breadcrumb from "@/components/shared/Breadcrumb";
import FaqTabs, { FaqTab } from "./Faqtabs";

// A question is a string, or { q, href } when it needs its own link.
// Default link: /faq/<section id>-<tab number>-<question number>
type Question = string | { q: string; href: string };
type Tab = { label: string; questions: Question[] };
type Section = {
  id: string; // used for the #anchor
  title: string; // section heading
  indexLabel: string; // text in the top "A / B" links
  tabs: Tab[];
};

// ---- Edit the FAQ content here ----
const sections: Section[] = [
  {
    id: "data-erase",
    title: "データ消去ツール",
    indexLabel: "データ消去",
    tabs: [
      {
        label: "データ消去ツール",
        questions: [
          "GPT/MBR両方対応していますか？",
          "Macは消去できますか？",
          "SSD/eMMCは消去できますか？",
          "surfaceの消去はできますか？",
          "windowsタブレットを消去できますか？",
          "消去時間はどれくらいかかりますか？",
          "消去方式はどのようなものがありますか？",
          "データ消去ツールは非ネットワーク環境で使用可能ですか？",
          "データ領域への書き込み密度を変更する機能はありますか？",
          "複数個所に点在するPCを現地で個別でデータ消去することは可能ですか？",
          "複数メーカーの機器で使用できますか？",
          "ブート（起動）とは何ですか？",
          "他の消去ソフトで消去できなかったものでも「FlashErase」シリーズは消去できますか？",
        ],
      },
      {
        label: "FlashErase",
        questions: [
          "Macの消去はできますか？",
          "surfaceの消去できますか？",
          "消去時間はどれくらいかかりますか？",
          "他の消去ソフトで消去できなかったものでも「FlashErase」シリーズは消去できますか？",
        ],
      },
      {
        label: "NextErase",
        questions: [
          "本当にメディア不要で消去できますか？",
          "windowsが起動しない場合でも使用できますか？",
          "ログの取得は可能ですか？",
        ],
      },
    ],
  },
  {
    id: "support",
    title: "サポート",
    indexLabel: "サポート",
    tabs: [
      {
        label: "ImageMaker",
        questions: [
          "使用する際に必要な機材は何ですか？",
          "「まるっとコピーWIMS」との違いは何ですか？",
          "ライセンスを振り分けることはできますか？",
          "ライセンスはどのようにカウントされますか？",
          "ライセンスは作業のどの時点で消費されますか？",
          "複数台同時にキッティングを行いたい場合はどうすればいいですか？",
          "キッティングを行うとPCにプレインストールされているWindowsOS及びデバイス情報などは上書きされますか？",
          "「ImageMaker」で複数のイメージを作成することは可能ですか？",
          "イメージ作成・展開時に必要な外付けHDDはUSBメモリではだめですか？",
          "ライセンスの有効期限はどのくらいですか？",
          "作成するイメージの容量によると思いますが、イメージ作成と展開にかかる時間は何分程ですか？",
        ],
      },
    ],
  },
];

// Turn plain strings into { q, href }
function toTabs(section: Section): FaqTab[] {
  return section.tabs.map((tab, ti) => ({
    label: tab.label,
    questions: tab.questions.map((item, n) =>
      typeof item === "string"
        ? { q: item, href: `/faq/${section.id}-${ti + 1}-${n + 1}` }
        : item
    ),
  }));
}

export default function Faq() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6">
        <h1 className="text-2xl font-bold text-neutral-800">
          ソリューションから探す
        </h1>

        {/* Links to each section */}
        <nav aria-label="FAQ sections" className="mt-3">
          <p className="text-base">
            {sections.map((section, i) => (
              <span key={section.id}>
                {i > 0 && <span className="px-0.5">/</span>}
                <Link
                  href={`#faq-${section.id}`}
                  className="text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid"
                >
                  {section.indexLabel}
                </Link>
              </span>
            ))}
          </p>
        </nav>

        {sections.map((section) => (
          <section
            key={section.id}
            id={`faq-${section.id}`}
            className="mt-16 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-neutral-800">
              {section.title}
            </h2>
            <div className="mt-10">
              <FaqTabs idPrefix={`faq-${section.id}`} tabs={toTabs(section)} />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
