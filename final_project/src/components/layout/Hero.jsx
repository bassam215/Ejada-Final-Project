import shoe from "@/assets/images/shoe.png";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)]">
      {/* Left Side */}
      <div className="flex w-5/12 items-center bg-white">
        <div className="mx-auto w-[80%]">
          <h1 className="text-[82px] font-bold leading-none">
            Find Your
            <br />
            Sole Mate
            <br />
            With Us
          </h1>

          <p className="mt-8 max-w-md text-[18px] ">
            Lorem Ipsum Dolor Sit Amet, Consectetur <br/>
            Adipiscing Elit, Sed Do Eiusmod.
          </p>

          <button className="mt-5 bg-black px-10 py-4 font-semibold text-white  transition hover:scale-105">
            Shop Now
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="relative flex w-7/12 items-center justify-center overflow-hidden bg-[#dddddd]">

        {/* Ultimate */}
        <h1
          className="absolute  left-0 top-1/2 -translate-x-[45%] -translate-y-1/2 -rotate-90 text-[120px] font-black text-[#ffffff]">
          ULTIMATE
        </h1>

        {/* Shoe */}
        <div className="relative z-100 flex flex-col items-center">

          <img
            src={shoe}
            alt="shoe"
            className="w-[880px] -translate-x-8"
          />

          <div className=" text-center -translate-y-10" >

            <h2 className="text-[22px] font-semibold ">
              Trendy StepUp Pro
            </h2>

            <p className=" text-[18px] text-gray-500">
              ₹3999.00
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}