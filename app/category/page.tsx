import { Suspense } from "react";

import Breadcrumb from "@/components/shared/Breadcrumb";
import NewsPage from "@/components/shared/Newspage";

export const metadata = {
  title: "ニュース",
};

type SearchParams = Promise<{ page?: string }>;

async function NewsContent({ searchParams }: { searchParams: SearchParams }) {
  const { page } = await searchParams;
  const pageNumber = Number.parseInt(page ?? "1", 10) || 1;

  return <NewsPage page={pageNumber} perPage={2} />;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="w-full">
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "ニュース" }]}
      />

      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <NewsContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
