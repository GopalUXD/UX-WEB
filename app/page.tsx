import Access from "@/components/shared/Access";
import Banner from "@/components/shared/Banner";
import News from "@/components/shared/News";
import Solution from "@/components/shared/Solution";

export default function Home() {
  return (
    <div>
      <Banner />
      <News />
      <Solution />
      <Access />
    </div>
  );
}
