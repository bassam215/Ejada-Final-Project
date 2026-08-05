import ebay from "@/assets/images/symbols.svg";
import amazon from "@/assets/images/shopping.svg";
import ajio from "@/assets/images/AJIO.svg";

export default function Brands() {
  return (
    <section className="bg-black">
       <div className="max-w-[90%] mx-auto flex h-30 items-center justify-between">

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