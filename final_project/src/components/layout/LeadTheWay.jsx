import { ChevronLeft, ChevronRight } from "lucide-react";

import dshop from "@/assets/images/d-shop.png";
import shop1 from "@/assets/images/shoe1.png";
import shop2 from "@/assets/images/shoe2.png";
import shop3 from "@/assets/images/shoe3.png";


export default function LeadTheWay() {

  return (
    <section className="w-[90%] mx-auto mt-32 mb-20 overflow-visible">
      <div className="relative h-[500px] rounded-[24px] bg-[#FD8B92] overflow-visible">

        {/* Background Text */}
        <span
          className=" absolute  bottom-[-20px] left-1/2 -translate-x-1/2 text-[350px] font-black leading-none text-white/10 select-none z-10"
        >
          StepUP
        </span>

        {/* Left Arrow */}
        <button className="absolute left-8 top-1/2 -translate-y-1/2 text-white z-30">
          <ChevronLeft  />
        </button>

        {/* Right Arrow */}
        <button className="absolute right-8 top-1/2 -translate-y-1/2 text-white z-30">
          <ChevronRight />
        </button>

        {/* IMAGE */}
        <img
          src={dshop}
          alt=""
          className="absolute  bottom-[-71px] h-[950px] z-20 max-w-none"
        />

        {/* CONTENT */}
        <div className="absolute right-[120px] top-1/2 -translate-y-1/2 z-20">

          <h2 className="text-white text-[50px]  leading-[55px]">
            Are you ready
            <br />
            to lead the way
          </h2>

          <p className="text-white text-[18px]  w-[420px] leading-7">
            Lorem ipsum dolor sit amet, consectetur  <br/>adipiscing  elit, sed do.
          </p>

          <button
            className="   mt-3 w-[150px] h-[52px] font-semibold transition bg-white text-[#F08080]" >
            Explore
          </button>

          {/* Thumbnails */}
          <div className="flex gap-7 mt-8">
            
              <div
                className="w-[60px] h-[54px] bg-white rounded-md shadow-md">
                <img
                src={shop1}
                alt=""
                className="w-[60px] h-[60px] object-contain scale-125 rotate-350"
              />
              </div>
              
             <div
                className="w-[60px] h-[54px] bg-white rounded-md shadow-md">
                <img
                src={shop2}
                alt=""
                className="w-[60px] h-[54px] object-contain scale-125 rotate-350"
              />
              <div className="flex justify-center gap-2 mt-5">
            
              
            
          </div>
              </div>
              
              <div
                className="w-[60px] h-[54px] bg-white rounded-md shadow-md ">
                <img
                src={shop3}
                alt=""
                className="w-[60px] h-[54px] object-contain rotate-350 scale-125"
              />
              </div>
          </div>
          

          
        </div>
      </div>
    </section>
  );
}