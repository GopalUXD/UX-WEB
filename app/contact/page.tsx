import Breadcrumb from "@/components/shared/Breadcrumb";
import Company from "@/components/shared/Company";
import Contact from "@/components/shared/Contact";

export const metadata = {
  title: "お問い合わせ",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "トップ", href: "/" }, { label: "お問い合わせ" }]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold text-neutral-800 my-4">
          お問い合わせ
        </h1>

        <Contact />
      </div>
    </>
  );
}
