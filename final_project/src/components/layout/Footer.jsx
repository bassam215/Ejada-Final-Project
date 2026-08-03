import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-28">

      <div className="max-w-[90%] mx-auto px-8 py-16">

        <div className="grid grid-cols-3 gap-15">

          {/* Left */}

          <div >

            <h2 className="text-4xl font-bold mb-6">
              StepUp
            </h2>

            <p className="text-gray-300 leading-8 max-w-[310px]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua.
            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Center */}

          <div className="translate-x-25 ">

            <h3 className="text-xl mb-5">
              Subscribe for news latter
            </h3>

            <div className="flex bg-white rounded-md overflow-hidden">

              <input
                type="email"
                placeholder="Enter Email..."
                className="flex-1 px-5 py-4 outline-none text-black"
              />

              <button className="px-8 text-black font-semibold border-l">
                SUBSCRIBE
              </button>

            </div>

          </div>

          {/* Right */}

          <div className=" flex flex-col items-end">

            <h3 className="text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 mr-8">

              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Shop</a>
              </li>

              <li>
                <a href="#">Category</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Privacy</a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center mt-16">

          <div className="w-16 h-[2px] bg-gray-500 mb-5"></div>

          <p className="text-gray-400 text-sm">
            www.stepup.com © all right reserve
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;