"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type FaqQuestion = { q: string; href: string };
export type FaqTab = { label: string; questions: FaqQuestion[] };

const TEAL = "#5ab3bd";

export default function FaqTabs({
  idPrefix,
  tabs,
}: {
  idPrefix: string;
  tabs: FaqTab[];
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Only one tab: it is shown in grey, like the design
  const isSingle = tabs.length === 1;

  const go = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="bg-background shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className={cn(
          "flex border-b-2",
          isSingle ? "border-neutral-400" : "border-[#5ab3bd]"
        )}
      >
        {tabs.map((tab, i) => {
          const selected = i === active && !isSingle;
          return (
            <button
              key={tab.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${idPrefix}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  go(i + 1);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  go(i - 1);
                }
              }}
              style={selected ? { backgroundColor: TEAL } : undefined}
              className={cn(
                "h-12 flex-1 px-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-700 sm:text-sm",
                isSingle && "max-w-[33.333%]",
                selected
                  ? "text-white"
                  : "bg-[#d9d9d9] text-neutral-600 hover:bg-[#cfcfcf] dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${idPrefix}-panel-${i}`}
          aria-labelledby={`${idPrefix}-tab-${i}`}
          hidden={i !== active}
          className="px-5 pb-10 pt-6 sm:px-10"
        >
          <ul className="space-y-1 text-[15px] leading-7">
            {tab.questions.map((item) => (
              <li key={item.href} className="flex gap-1">
                <span aria-hidden="true">・</span>
                <Link
                  href={item.href}
                  className="text-sky-500 hover:underline dark:text-sky-400"
                >
                  {item.q}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
