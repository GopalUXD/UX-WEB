import Link from "next/link";

import Breadcrumb from "@/components/shared/Breadcrumb";

type Term = {
  term: string; // text shown in the list
  reading?: string; // hiragana reading. Needed only for terms that start with kanji
  slug?: string; // link: /words/[slug]. Default: the term itself (URL-encoded)
};

// ---- Terms. Within a group they are shown in the order written here ----
// A letter / kana in the index becomes a blue link only when it has at least one term.
const terms: Term[] = [
  // A
  { term: "ADBドライバ" },
  { term: "Android OS" },
  { term: "APK" },
  { term: "ATA" },
  // B
  { term: "BIOS" },
  { term: "Black Berry" },
  // C
  { term: "CD" },
  { term: "CSM" },
  // D
  { term: "DoD消去方式" },
  // E
  { term: "eMMC" },
  // F
  { term: "FD" },
  { term: "Felica" },
  { term: "Flash ROM" },
  { term: "FusionDrive" },
  // G
  { term: "GB" },
  { term: "G-list" },
  { term: "GPT" },
  // H
  { term: "HDD" },
  // I
  { term: "IDE" },
  { term: "IMEI" },
  { term: "IntelMac" },
  { term: "iOS" },
  { term: "iPad" },
  { term: "iPhone" },
  { term: "iPhoneを探す" },
  // J
  { term: "JITAD（旧RITEA）" },
  // L
  { term: "LAN" },
  { term: "Linux" },
  // M
  { term: "MBR" },
  // N
  { term: "NAND" },
  { term: "NSA消去方式" },
  // O
  { term: "OS" },
  // P
  { term: "PC/AT互換機" },
  { term: "P-list" },
  { term: "Purge" },
  // R
  { term: "RAID" },
  { term: "RAIDコマンド" },
  { term: "RAM" },
  { term: "ROM" },
  // S
  { term: "S.M.A.R.T." },
  { term: "SAS" },
  { term: "SCSI" },
  { term: "SDカード" },
  { term: "SecureBoot" },
  { term: "SecureErase" },
  { term: "Secureキー" },
  { term: "SSD" },
  { term: "Surface" },
  // T
  { term: "TB" },
  { term: "Trim" },
  // U
  { term: "UEFI" },
  { term: "UUID" },
  // W
  { term: "Windows Mobile" },
  { term: "WindowsPE" },
  { term: "WindowsRT" },

  // あ
  { term: "赤ロム", reading: "あかろむ" },
  { term: "暗号化", reading: "あんごうか" },
  // い
  { term: "イーサネット" },
  { term: "インデックス" },
  // お
  { term: "オールリセット" },
  { term: "おサイフケータイ" },
  // か
  { term: "型番", reading: "かたばん" },
  { term: "ガラケー" },
  // く
  { term: "黒ロム", reading: "くろろむ" },
  // こ
  { term: "ゴミ箱" },
  // さ
  { term: "サーバ" },
  // す
  { term: "スマートウォッチ" },
  { term: "スマートフォン" },
  // せ
  { term: "製造番号", reading: "せいぞうばんごう" },
  { term: "セクター" },
  { term: "セルフブート" },
  { term: "ゼロクリア（消去方式）" },
  // そ
  { term: "外付けHDD", reading: "そとづけHDD" },
  { term: "ソフトウェアRAID" },
  // た
  { term: "タブレット" },
  // て
  { term: "提供元不明のアプリ", reading: "ていきょうもとふめいのあぷり" },
  { term: "デスクトップパソコン" },
  { term: "デバイス種別" },
  { term: "デベロッパーモード" },
  // ね
  { term: "ネットワークブート" },
  // の
  { term: "ノートパソコン" },
  // は
  { term: "ハードウェアRAID" },
  { term: "バッテリ劣化度" },
  // ふ
  { term: "ファームウェア" },
  { term: "ファイル" },
  { term: "ファクトリーリセット" },
  { term: "フィジカルドライブ" },
  { term: "ブート" },
  { term: "ブート順番" },
  { term: "フォーマット" },
  { term: "復元", reading: "ふくげん" },
  { term: "プラッタ" },
  { term: "プリインストール" },
  // ほ
  { term: "ボリューム" },
  // め
  { term: "メモリ" },
  // ゆ
  { term: "ユーザー領域" },
  // ら
  { term: "ランダム消去方式" },
  // る
  { term: "ルート" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const KANA =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわ".split(
    ""
  );
const OTHER = "その他";

/* ---------- grouping helpers ---------- */

// katakana -> hiragana
const toHiragana = (text: string) =>
  text.replace(/[\u30a1-\u30f6]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60)
  );

function getGroup(t: Term): string {
  const first = t.term.charAt(0);
  if (/[A-Za-z]/.test(first)) return first.toUpperCase();

  const reading = toHiragana(t.reading ?? t.term);
  // "が" -> "か" (remove the dakuten / handakuten)
  const base = reading.charAt(0).normalize("NFD").charAt(0);
  return KANA.includes(base) ? base : OTHER;
}

// Group the terms (the order inside a group is the order written in `terms`)
const grouped = new Map<string, Term[]>();
for (const t of terms) {
  const key = getGroup(t);
  grouped.set(key, [...(grouped.get(key) ?? []), t]);
}

// Order of the sections: A-Z, kana, other
const orderedKeys = [...ALPHABET, ...KANA, OTHER].filter((k) => grouped.has(k));

/* ---------- pieces ---------- */

const linkClass =
  "text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid dark:text-sky-400";

function IndexRow({ keys }: { keys: string[] }) {
  return (
    <p className="text-lg leading-8">
      {keys.map((key, i) => (
        <span key={key}>
          {i > 0 && <span className="px-1">/</span>}
          {grouped.has(key) ? (
            <Link href={`#group-${key}`} className={linkClass}>
              {key}
            </Link>
          ) : (
            <span>{key}</span>
          )}
        </span>
      ))}
    </p>
  );
}

/* ---------- main component ---------- */

export default function Words() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "用語" }]} />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6">
        <h1 className="text-center text-4xl font-bold text-neutral-800">
          用語
        </h1>

        {/* Index: A-Z and kana. Letters that have terms are links */}
        <nav aria-label="用語索引" className="mt-12">
          <IndexRow keys={ALPHABET} />
          <IndexRow keys={KANA} />
        </nav>

        {/* Term groups */}
        <div className="mt-14 space-y-14">
          {orderedKeys.map((key) => (
            <section key={key} id={`group-${key}`} className="scroll-mt-24">
              <h2 className="border-b border-neutral-800 pb-3 text-xl font-bold dark:border-neutral-300">
                {key}
              </h2>
              <ul className="mt-5 space-y-0.5 text-lg leading-8">
                {grouped.get(key)!.map((t) => (
                  <li key={t.term}>
                    <Link
                      href={`/words/${encodeURIComponent(t.slug ?? t.term)}`}
                      className={linkClass}
                    >
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
