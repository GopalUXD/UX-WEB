import Breadcrumb from "@/components/shared/Breadcrumb";
import Solution from "@/components/shared/Solution";

export const metadata = {
  title: "ソリューション",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "ソリューション" }]}
      />

      <div className="">
        <h1 className="text-center text-4xl font-bold text-neutral-800 my-4">
          ソリューション
        </h1>

        <Solution />
      </div>
    </>
  );
}
