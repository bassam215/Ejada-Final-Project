import ebay from "@/assets/images/symbols.svg";
import amazon from "@/assets/images/shopping.svg";
import ajio from "@/assets/images/AJIO.svg";

export default function Brands() {
  return (
    <section className="bg-black">
      <div className="mx-auto flex h-30 w-[92%] max-w-[1450px] items-center justify-between">

        <img src={ebay} alt="eBay"/>

        <img src={amazon}alt="Amazon"/>

        <img src={ajio} alt="AJIO"/>

        <img src={ebay} alt="eBay"/>

        <img src={amazon} alt="Amazon"/>

        <img  src={ajio} alt="AJIO"/>

      </div>
    </section>
  );
}