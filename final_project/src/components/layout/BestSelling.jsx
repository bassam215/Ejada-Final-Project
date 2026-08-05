import { useEffect, useState } from "react";
import { productService } from "../../services/productService";

import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

function BestSelling() {
    const [activeTab, setActiveTab] = useState("Men");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load best selling products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const displayedProducts = products
    .filter((item) => item.category === activeTab)
    .slice(-6);

  return (
    <section className="max-w-[90%] mx-auto">
      <h2 className="text-4xl text-center mb-10">Best Selling</h2>

      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-3 gap-8 mt-12">
        {loading && (
          <div className="col-span-3 text-center text-gray-500">
            Loading products...
          </div>
        )}

        {!loading && displayedProducts.length === 0 && (
          <div className="col-span-3 text-center text-gray-500">
            No products found for this category.
          </div>
        )}

        {!loading && displayedProducts.length > 0 &&
          displayedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </section>
  );
}

export default BestSelling;