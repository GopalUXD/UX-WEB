import Breadcrumb from "@/components/shared/Breadcrumb";
import NewsPage from "@/components/shared/Newspage";

export const metadata = {
  title: "ニュース",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "ニュース" }]}
      />
      <NewsPage />
    </>
  );
}
