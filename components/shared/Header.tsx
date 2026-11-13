"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Active page styles (blue underline)
const ACTIVE_DESKTOP =
  "relative text-blue-600 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 " +
  "after:absolute after:inset-x-2.5 after:bottom-0 after:h-0.5 after:rounded-full " +
  "after:bg-blue-600 dark:after:bg-blue-400";
const ACTIVE_MOBILE =
  "text-blue-600 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 " +
  "underline decoration-2 underline-offset-8";
const ACTIVE_SUB = "font-medium text-blue-600 dark:text-blue-400";

type LeafItem = { label: string; href: string };
type SubItem = LeafItem & { children?: LeafItem[] }; // 3rd level
type MenuItem = {
  label: string;
  href: string;
  cta?: boolean; // set true to show as a filled button
  children?: SubItem[]; // 2nd level (omit for no submenu)
};

// Sub menu labels/links below are placeholders. Replace with your real pages.
const menuItems: MenuItem[] = [
  { label: "トップ", href: "/" },
  {
    label: "ニュース",
    href: "/news",
    children: [
      { label: "お知らせ", href: "/news/information" },
      { label: "展示会", href: "/news/event" },
    ],
  },
  {
    label: "ソリューション",
    href: "/solution",
    children: [
      {
        label: "SHINDAN",
        href: "/solution/shindan",
        children: [
          { label: "PC", href: "/solution/shindan/pc" },
          { label: "Mac", href: "/solution/shindan/mac" },
          { label: "Mobile", href: "/solution/shindan/mobile" },
        ],
      },
      {
        label: "SHOKYO",
        href: "/solution/shokyo",
        children: [
          { label: "PC", href: "/solution/shokyo/pc" },
          { label: "Mobile", href: "/solution/shokyo/mobile" },
        ],
      },
      { label: "MOBILE", href: "/solution/mobile" },
      { label: "TENKAI", href: "/solution/tenkai" },
      { label: "OTHER", href: "/solution/other" },
    ],
  },
  { label: "用語", href: "/words" },
  { label: "FAQ", href: "/faq" },
  {
    label: "企業情報",
    href: "/company",
    children: [
      { label: "種子島事業所", href: "/company/profile" },
      { label: "アクセス", href: "/company/access" },
    ],
  },
  {
    label: "採用情報",
    href: "/employment",
    children: [
      { label: "コミック", href: "/employment/comic" },
      { label: "研修", href: "/employment/training" },
    ],
  },
  { label: "リンク", href: "/link" },
  {
    label: "お問い合わせ",
    href: "/contact",
    children: [
      {
        label: "ソリューションに関するお問い合わせ",
        href: "/contact/solution",
      },
      { label: "採用に関するお問い合わせ", href: "/contact/employment" },
      {
        label: "プレスリリース・種子島事業所に関するお問い合わせ",
        href: "/contact/pressrelease",
      },
      { label: "当社へのご提案", href: "/contact/suggest" },
    ],
  },
];

const panelClass =
  "min-w-52 rounded-md border bg-popover p-1 text-popover-foreground shadow-md";
const subLinkClass =
  "flex items-center justify-between gap-2 rounded-sm px-3 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile panel
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown
  const [expanded, setExpanded] = useState<string | null>(null); // mobile level 2
  const [expandedSub, setExpandedSub] = useState<string | null>(null); // mobile level 3
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMobile = () => {
    setOpen(false);
    setExpanded(null);
    setExpandedSub(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: company logo */}
        <Link href="/" className="flex items-center" onClick={closeMobile}>
          <Image
            src="/ux-logo.png"
            alt="ux logo"
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Right: menu (desktop) */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {menuItems.map((item, index) => {
              const hasChildren = !!item.children?.length;
              const isOpen = openMenu === item.href;
              // Keep dropdowns of the last two items inside the screen
              const alignRight = index >= menuItems.length - 2;

              return (
                <li
                  key={item.href}
                  className={cn("relative", item.cta && "ml-3")}
                  onMouseEnter={() => hasChildren && setOpenMenu(item.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => hasChildren && setOpenMenu(item.href)}
                  onBlur={(e) => {
                    if (
                      !e.currentTarget.contains(e.relatedTarget as Node | null)
                    ) {
                      setOpenMenu(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenMenu(null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    onClick={() => setOpenMenu(null)}
                    className={cn(
                      buttonVariants({
                        variant: item.cta ? "default" : "ghost",
                        size: "sm",
                      }),
                      "gap-1",
                      !item.cta && isActive(item.href) && ACTIVE_DESKTOP
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {hasChildren && isOpen && (
                    // pt-2 keeps the hover area continuous between link and panel
                    <div
                      className={cn(
                        "absolute top-full pt-2",
                        alignRight ? "right-0" : "left-0"
                      )}
                    >
                      <ul className={panelClass}>
                        {item.children!.map((sub) => {
                          const subHasChildren = !!sub.children?.length;
                          return (
                            <li key={sub.href} className="group/sub relative">
                              <Link
                                href={sub.href}
                                aria-current={
                                  pathname === sub.href ? "page" : undefined
                                }
                                onClick={() => setOpenMenu(null)}
                                className={cn(
                                  subLinkClass,
                                  isActive(sub.href) && ACTIVE_SUB
                                )}
                              >
                                {sub.label}
                                {subHasChildren && (
                                  <ChevronRight className="size-4 text-muted-foreground" />
                                )}
                              </Link>

                              {/* Level 3 flyout */}
                              {subHasChildren && (
                                <div
                                  className={cn(
                                    "absolute top-0 hidden group-focus-within/sub:block group-hover/sub:block",
                                    alignRight
                                      ? "right-full pr-1"
                                      : "left-full pl-1"
                                  )}
                                >
                                  <ul className={panelClass}>
                                    {sub.children!.map((leaf) => (
                                      <li key={leaf.href}>
                                        <Link
                                          href={leaf.href}
                                          aria-current={
                                            pathname === leaf.href
                                              ? "page"
                                              : undefined
                                          }
                                          onClick={() => setOpenMenu(null)}
                                          className={cn(
                                            subLinkClass,
                                            isActive(leaf.href) && ACTIVE_SUB
                                          )}
                                        >
                                          {leaf.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => (open ? closeMobile() : setOpen(true))}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t xl:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {menuItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const isExpanded = expanded === item.href;

              return (
                <li key={item.href}>
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={closeMobile}
                      className={cn(
                        buttonVariants({
                          variant: item.cta ? "default" : "ghost",
                          size: "lg",
                        }),
                        "flex-1 justify-start",
                        !item.cta && isActive(item.href) && ACTIVE_MOBILE
                      )}
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-10 shrink-0"
                        aria-expanded={isExpanded}
                        aria-label={`${item.label} submenu`}
                        onClick={() => {
                          setExpanded(isExpanded ? null : item.href);
                          setExpandedSub(null);
                        }}
                      >
                        <ChevronDown
                          className={cn(
                            "size-5 transition-transform",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </Button>
                    )}
                  </div>

                  {/* Level 2 */}
                  {hasChildren && isExpanded && (
                    <ul className="ml-4 mt-1 flex flex-col border-l pl-2">
                      {item.children!.map((sub) => {
                        const subHasChildren = !!sub.children?.length;
                        const isSubExpanded = expandedSub === sub.href;

                        return (
                          <li key={sub.href}>
                            <div className="flex items-center gap-1">
                              <Link
                                href={sub.href}
                                aria-current={
                                  pathname === sub.href ? "page" : undefined
                                }
                                onClick={closeMobile}
                                className={cn(
                                  "block flex-1 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                  isActive(sub.href) && ACTIVE_SUB
                                )}
                              >
                                {sub.label}
                              </Link>

                              {subHasChildren && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="size-9 shrink-0"
                                  aria-expanded={isSubExpanded}
                                  aria-label={`${sub.label} submenu`}
                                  onClick={() =>
                                    setExpandedSub(
                                      isSubExpanded ? null : sub.href
                                    )
                                  }
                                >
                                  <ChevronDown
                                    className={cn(
                                      "size-4 transition-transform",
                                      isSubExpanded && "rotate-180"
                                    )}
                                  />
                                </Button>
                              )}
                            </div>

                            {/* Level 3 */}
                            {subHasChildren && isSubExpanded && (
                              <ul className="ml-4 mt-1 flex flex-col border-l pl-2">
                                {sub.children!.map((leaf) => (
                                  <li key={leaf.href}>
                                    <Link
                                      href={leaf.href}
                                      aria-current={
                                        pathname === leaf.href
                                          ? "page"
                                          : undefined
                                      }
                                      onClick={closeMobile}
                                      className={cn(
                                        "block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                        isActive(leaf.href) && ACTIVE_SUB
                                      )}
                                    >
                                      {leaf.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
