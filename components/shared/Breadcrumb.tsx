import { Fragment } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

type Crumb = { label: string; href?: string };

// Usage: <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "用語" }]} />
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b">
      <ol className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2 text-xs sm:px-6">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={item.label}>
              <li className="flex items-center gap-1.5">
                {i === 0 && (
                  <Home className="size-3.5 text-sky-500" aria-hidden="true" />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-sky-500 underline decoration-dotted underline-offset-4 hover:decoration-solid"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="text-muted-foreground">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
