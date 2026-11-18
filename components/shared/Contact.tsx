import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/shared/Breadcrumb";

type Item = {
  title: string;
  href: string;
  image: string; // file inside /public/contact/
  description: string;
};

// ---- Edit the content here ----
const items: Item[] = [
  {
    title: "ソリューションに関するお問い合わせ",
    href: "/contact/solution",
    image: "/contacts/contact-1.png",
    description:
      "ウルトラエックスの診断ツールや消去ツールなどのソリューションに関するお問い合わせを受付けています。",
  },
  {
    title: "採用に関するお問い合わせ",
    href: "/contact/employment",
    image: "/contacts/contact-2.png",
    description:
      "新卒採用、中途採用、会社見学などウルトラエックスの採用に関するお問い合わせを受付けています。",
  },
  {
    title: "プレスリリースに関するお問い合わせ",
    href: "/contact/pressrelease",
    image: "/contacts/contact-3.png",
    description:
      "当社製品情報の掲載のご連絡、各種取材のお申込み、プレスリリースに関するお問い合わせを受付けています。",
  },
  {
    title: "当社へのご提案",
    href: "/contact/suggest",
    image: "/contacts/contact-4.png",
    description: "ウルトラエックスへのご提案を受付けています。",
  },
];

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="max-w-173.25">
          <ul className="mt-10 divide-y divide-blue-800 dark:divide-blue-400">
            {items.map((item) => (
              <li
                key={item.href}
                className="flex flex-col gap-4 py-8 first:pt-0 last:pb-0 sm:flex-row sm:gap-[34px] sm:px-5"
              >
                {/* Image: fixed width, height follows the photo (not cropped) */}
                <Link
                  href={item.href}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block shrink-0 self-start"
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={188}
                    height={140}
                    sizes="188px"
                    className="h-auto w-[188px]"
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
