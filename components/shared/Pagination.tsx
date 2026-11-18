import Link from "next/link";

import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g. "/news" -> /news?page=2
};

type Item = number | "ellipsis-start" | "ellipsis-end";

// Example: 1 2 … 13  |  1 … 4 5 6 … 13  |  1 … 12 13
function getItems(current: number, total: number): Item[] {
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const items: Item[] = [];
  sorted.forEach((page, i) => {
    const prev = sorted[i - 1];
    if (prev !== undefined) {
      if (page - prev === 2)
        items.push(prev + 1); // only one page hidden: show it
      else if (page - prev > 2)
        items.push(i < sorted.length / 2 ? "ellipsis-start" : "ellipsis-end");
    }
    items.push(page);
  });
  return items;
}

const cellClass =
  "-ml-px flex h-10 min-w-10 items-center justify-center border border-neutral-200 px-3 text-base text-neutral-800 dark:border-neutral-700 dark:text-neutral-100";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const href = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav aria-label="Pagination" className="flex justify-center">
      <ul className="inline-flex rounded-md [&>li:first-child>*]:rounded-l-md [&>li:last-child>*]:rounded-r-md">
        {currentPage > 1 && (
          <li>
            <Link
              href={href(currentPage - 1)}
              aria-label="Previous page"
              className={cn(
                cellClass,
                "hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              «
            </Link>
          </li>
        )}

        {getItems(currentPage, totalPages).map((item) =>
          typeof item === "number" ? (
            <li key={item}>
              {item === currentPage ? (
                <span
                  aria-current="page"
                  className={cn(
                    cellClass,
                    "relative z-10 border-[#337ab7] bg-[#337ab7] text-white"
                  )}
                >
                  {item}
                </span>
              ) : (
                <Link
                  href={href(item)}
                  aria-label={`Page ${item}`}
                  className={cn(
                    cellClass,
                    "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  )}
                >
                  {item}
                </Link>
              )}
            </li>
          ) : (
            <li key={item}>
              <span className={cn(cellClass, "text-neutral-600")}>…</span>
            </li>
          )
        )}

        {currentPage < totalPages && (
          <li>
            <Link
              href={href(currentPage + 1)}
              aria-label="Next page"
              className={cn(
                cellClass,
                "hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              »
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
