import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { productService } from "../../services/productService";


export default function TrendingProducts() {
  const swiperRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrendingProducts = async () => {
      try {
        const data = await productService.getProducts();
        const trending = data
          .filter((product) => product.isTrending)
          .slice(-9);
        setProducts(trending);
      } catch (error) {
        console.error("Failed to load trending products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingProducts();
  }, []);

  return (
    <div className="w-full mt-15">
      <section className="relative py-12 w-full">
        <div className="flex items-center gap-8 w-[90%] mx-auto">
          {/* Left */}

          <div className="shrink-0 w-full max-w-[350px] self-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-gray-800" />
              <span className="text-sm">Our Trending Shoe</span>
            </div>

            <h2 className="text-[42px] font-bold leading-tight mb-4">
              Most Popular
              <br />
              Products
            </h2>

            <p className="text-[16px] text-gray-500 mb-6">
              Lorem Ipsum Dolor Sit Amet,
              <br />
              Consectetur Adipiscing Elit,
            </p>

            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>

          {/* Left Arrow */}

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="shrink-0 p-2 text-gray-400 hover:text-gray-700"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Slider */}

          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="py-16 text-center text-gray-500">
                Loading trending products...
              </div>
            ) : products.length === 0 ? (
              <div className="py-16 text-center text-gray-500">
                No trending products found.
              </div>
            ) : (
              <Swiper
                modules={[Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                pagination={{ clickable: true }}
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={24}
                speed={600}
                loop={true}
                className="pb-22"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="border border-gray-200 rounded-lg p-6 bg-[#d9d9d918]">
                      <img
                        src={product.image }
                        alt={product.title }
                        className="rotate-[345deg]"
                      />

                      <p className="text-sm text-gray-800 mb-2">
                        {product.title }
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">
                          {product.price}
                        </span>

                        <button className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <ArrowUpRight size={18} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* Right Arrow */}

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="shrink-0 p-2 text-gray-400 hover:text-gray-700"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
}
