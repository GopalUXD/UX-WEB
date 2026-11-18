import Breadcrumb from "@/components/shared/Breadcrumb";
import Employment from "@/components/shared/Employment";

export const metadata = {
  title: "採用情報",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "採用情報" }]}
      />

      <div className="">
        <h1 className="text-center text-4xl font-bold text-neutral-800 my-4">
          採用情報
        </h1>

        <Employment />
      </div>
    </>
  );
}
