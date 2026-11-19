import Link from "next/link";

// ---- Edit these values ----
const COMPANY_NAME = "株式会社ウルトラエックス";
const ADDRESS = "〒101-0032 東京都千代田区岩本町3丁目9-17 8F";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/UltraX.Japan"; // <- your real Facebook page URL

const routes = [
  { from: "JR秋葉原駅昭和通り出口より", time: "徒歩約5分" },
  { from: "日比谷線秋葉原駅4番出口より", time: "徒歩約4分" },
  { from: "都営新宿線岩本町駅A4番出口より", time: "徒歩約2分" },
];

const footerLinks = [
  { label: "サイトマップ", href: "/sitemap" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

// Google Maps embed (no API key needed)
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${COMPANY_NAME} ${ADDRESS}`
)}&hl=ja&z=16&output=embed`;

// Facebook Page Plugin (the small follow card)
const facebookSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_PAGE_URL
)}&tabs=&width=340&height=130&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`;

export default function Access() {
  return (
    <section
      aria-labelledby="access-heading"
      className="px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="access-heading" className="text-4xl font-bold text-neutral-800">
          アクセス
        </h2>

        <div className="mt-10 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:gap-12">
          {/* Left: routes + map */}
          <div className="w-full lg:w-175 lg:shrink-0">
            <ul className="space-y-1 text-base leading-7 sm:text-sm">
              {routes.map((route) => (
                <li
                  key={route.from}
                  className="grid grid-cols-1 sm:grid-cols-[374px_1fr]"
                >
                  <span>■{route.from}</span>
                  <span className="pl-4 sm:pl-0">{route.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-1 aspect-14/9 w-full overflow-hidden bg-muted">
              <iframe
                title={`${COMPANY_NAME} の地図`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Right: Facebook card */}
          <div className="w-full max-w-85">
            <iframe
              title={`${COMPANY_NAME} Facebook`}
              src={facebookSrc}
              width={340}
              height={600}
              loading="lazy"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="block w-full border-0"
            />
          </div>
        </div>

        {/* Bottom right links */}
        <nav
          aria-label="Site links"
          className="mt-12 flex flex-col items-end gap-2"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
