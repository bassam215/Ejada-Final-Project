import { FiHeart, FiArrowUpRight } from "react-icons/fi";


function ProductCard({ product }) {
  return (
    <div className="relative border rounded-xl p-5  border-[#DEDEDE]">

      {product.isNew && (
        <span className="absolute top-4 left-0 bg-black text-white text-xs px-2 py-1 rounded">
          New
        </span>
      )}

      <button className="absolute top-4 right-4">
        <FiHeart className="text-xl text-gray-700 hover:text-red-500 transition" />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain mt-4"
      />

      <h3 className="mt-7 text-lg">
        {product.title || product.name}
      </h3>

      <div className="flex gap-3 mt-3">
        <span>₹ {product.price}</span>

        <del className="text-gray-400">
          ₹ {product.oldprice}
        </del>
      </div>

      <button className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition">
        <FiArrowUpRight className="text-lg" />
      </button>

    </div>
  );
}

export default ProductCard;