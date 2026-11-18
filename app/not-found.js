import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100dvh-11rem)] items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold tracking-tight text-sky-500 sm:text-8xl">
          404
        </p>

        <h1 className="mt-6 text-2xl font-bold text-neutral-800">
          ページが見つかりません
        </h1>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          お探しのページは移動または削除された可能性があります。
          <br />
          URLをご確認のうえ、トップページからもう一度お探しください。
        </p>

        <Link
          href="/"
          className={cn(buttonVariants({ size: "lg" }), "mt-8")}
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}