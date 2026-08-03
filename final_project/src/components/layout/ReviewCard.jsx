import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function ReviewCard({ review }) {
  return (
    <div className="w-full h-[260px] bg-[#F3F3F3] rounded-3xl border border-gray-200 shadow-sm p-8 flex items-center gap-8">

      {/* Image */}
      <div className="w-[120px] h-[160px] flex-shrink-0">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1">

        <h3 className="text-[24px] font-semibold text-black">
          {review.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mt-1 text-[#FBBF24] text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />


        </div>

        {/* Review */}
        <p className="mt-1 text-[#6B7280] leading-7 text-[18px]">
          {review.review}
        </p>

      </div>

    </div>
  );
}

export default ReviewCard;