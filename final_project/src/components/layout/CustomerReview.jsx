import { reviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function CustomerReview() {
  const pages = [];

  for (let i = 0; i < reviews.length; i += 2) {
    pages.push(reviews.slice(i, i + 2));
  }

  return (
    <section className="max-w-[90%] mx-auto py-24 overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center gap-5 mb-16">
        <div className="w-14 h-[2px] bg-black"></div>

        <h2 className="text-4xl font-semibold">Customer Review</h2>

        <div className="w-14 h-[2px] bg-black"></div>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={700}
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-8">
              {page.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CustomerReview;
