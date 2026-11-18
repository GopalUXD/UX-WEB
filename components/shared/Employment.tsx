import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/shared/Breadcrumb";

type Item = {
  title: string;
  href: string;
  image: string; // file inside /public/employment/
  description: string;
};

// ---- Edit the content here ----
const items: Item[] = [
  {
    title: "コミック",
    href: "/employment/comic",
    image: "/employment/employment-1.png",
    description:
      "ウルトラエックスのスタッフや営業部、管理部、技術部の仕事についてコミックでご紹介いたします。",
  },
  {
    title: "研修",
    href: "/employment/training",
    image: "/employment/employment-2.png",
    description: "ウルトラエックスの新人社員研修についてご紹介いたします",
  },
  {
    title: "採用に関するお問い合わせ",
    href: "/contact/employment",
    image: "/employment/employment-3.png",
    description:
      "新卒採用、中途採用、会社見学などウルトラエックスの採用に関するお問い合わせを受付けています。",
  },
];

export default function Employment() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6">
        <div className="max-w-[693px]">
          <ul className="mt-10 divide-y divide-blue-800 dark:divide-blue-400">
            {items.map((item) => (
              <li
                key={item.href}
                className="flex flex-col gap-4 py-8 first:pt-0 last:pb-0 sm:flex-row sm:gap-[15px]"
              >
                {/* Image (the title is the real link for keyboard / screen readers) */}
                <Link
                  href={item.href}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="relative block aspect-[226/151] w-full shrink-0 overflow-hidden bg-muted sm:w-[226px]"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 226px, 100vw"
                    className="object-cover"
                  />
                </Link>

                <div>
                  <h2 className="text-lg font-bold leading-snug">
                    <Link
                      href={item.href}
                      className="text-sky-500 hover:underline dark:text-sky-400"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[13px] leading-6 text-neutral-700 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
