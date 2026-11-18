import Image from "next/image";
import Link from "next/link";

type SolutionItem = {
  name: string;
  href: string;
  image: string; // file inside /public/solutions/
  description: string;
};

const solutions: SolutionItem[] = [
  {
    name: "SHINDAN",
    href: "/solution/shindan",
    image: "/shindan.png",
    description:
      "開発・製造・リユースといった機器のライフサイクルにおける品質向上をサポートいたします。デバイスを構成するハードウェア(CPUやメモリ、HDDなど)に対して、不良がないか診断する各種ツールをご紹介いたします。",
  },
  {
    name: "SHOKYO",
    href: "/solution/shokyo",
    image: "/shokyo.png",
    description:
      "IT機器の廃棄やリユースの世界ではデータの消去は不可欠です。PC、タブレット、Mac、サーバー、スマートフォンなどあらゆる機器に対応した各種データ消去ツールをご紹介いたします。また、データ適正消去実行証明協議会（ADEC）についてもご紹介いたします。",
  },
  {
    name: "MOBILE",
    href: "/solution/mobile",
    image: "/mobile.png",
    description:
      "iPhoneやAndroidなどのモバイル機器のリユースにおいても情報漏洩対策、品質向上は非常に重要です。モバイル製品のリユースに役立つ、データ消去・診断・サポートツールをご紹介いたします。",
  },
  {
    name: "TENKAI",
    href: "/solution/tenkai",
    image: "/tenkai.png",
    description:
      "PC製造時、キッティング時のWindowsインストール、リユース時のOS再インストール業務などで業務効率化をサポートいたします。用途に応じたWindowsOSのバックアップ/展開ツールをご紹介いたします。",
  },
];

// Real pixel size (or just the ratio) of your 4 card images
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 300;

export default function Solution() {
  return (
    <>
      <section
        aria-label="Solutions"
        className="bg-[#eef3fb] px-4 py-12 dark:bg-muted sm:px-6 sm:py-16"
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {solutions.map((item) => (
            <li
              key={item.name}
              // vertical divider between columns (desktop only)
              className="lg:border-l-2 lg:border-blue-900 lg:px-7 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <Link
                href={item.href}
                tabIndex={-1}
                aria-hidden="true"
                className="block"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="block h-auto w-full"
                />
              </Link>

              <p className="mt-6 text-base leading-8 text-foreground">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-6 inline-block text-base text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid dark:text-sky-400"
              >
                詳しく見る
                <span className="sr-only">（{item.name}）</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
