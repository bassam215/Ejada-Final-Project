import { useState } from "react";
import { products } from "../../data/products";

import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

function BestSelling() {
  const [activeTab, setActiveTab] = useState("man");

  const displayedProducts = products
    .filter((item) => item.category === activeTab)
    .slice(0, 6);

  return (
    <section className="max-w-[90%] mx-auto  ">

      <h2 className="text-4xl text-center mb-10">
        Best Selling
      </h2>

      <CategoryTabs activeTab={activeTab}  setActiveTab={setActiveTab}
      />

      <div className="grid grid-cols-3 gap-8 mt-12">

        {displayedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
}

export default BestSelling;