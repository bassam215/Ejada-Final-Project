import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-auto flex h-20 w-[90%] items-center justify-between">  
        <h1 className="text-3xl font-black  ">
          StepUp
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-15">
            <li>
              <Link to="/" className="text-[18px] transition-colors hover:text-gray-500">Home</Link>
            </li>
            <li>
              <a href="#" className="text-[18px] transition-colors  hover:text-gray-500">Shop</a>
            </li>
            <li>
              <a href="#" className="text-[18px] transition-colors  hover:text-gray-500">Collection</a>
            </li>
            <li>
              <a href="#" className="text-[18px] transition-colors  hover:text-gray-500">Customize</a>
            </li>
            <li>
              <Link to="/dashboard" className="text-[18px] transition-colors hover:text-gray-500">Dashboard</Link>
            </li>

          </ul>
        </nav>

        <div className="flex items-center gap-5 text-xl">
          <FiSearch className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
          <FiMenu className="cursor-pointer lg:hidden" />
        </div>

      </div>
    </header>
  );
}