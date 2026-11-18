import Breadcrumb from "@/components/shared/Breadcrumb";
import Faq from "@/components/shared/Faq";

export const metadata = {
  title: "よくあるご質問一覧",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "よくあるご質問一覧" },
        ]}
      />

      <div className="">
        <h1 className="text-center text-4xl font-bold text-neutral-800 my-4">
          よくあるご質問一覧
        </h1>

        <Faq />
      </div>
    </>
  );
}
