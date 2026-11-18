import Breadcrumb from "@/components/shared/Breadcrumb";
import Links from "@/components/shared/Links";

export const metadata = {
  title: "リンク",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "リンク" }]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold text-neutral-800 pt-4">
          リンク
        </h1>

        <Links />
      </div>
    </>
  );
}
