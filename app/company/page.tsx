import Breadcrumb from "@/components/shared/Breadcrumb";
import Company from "@/components/shared/Company";

export const metadata = {
  title: "企業情報",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "企業情報" }]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold text-neutral-800 my-4">
          企業情報
        </h1>

        <Company />
      </div>
    </>
  );
}
