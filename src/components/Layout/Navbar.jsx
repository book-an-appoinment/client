import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="bg-[#175D4E] text-white py-5 px-6 flex gap-4 ">
      <div className="flex justify-between items-center w-full lg:w-[1320px] mx-auto">
        <div className="text-2xl"> logo</div>
        <div className="flex items-center gap-10">
          <Link to="/" className="hover:underline text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:underline text-xl">
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:underline flex items-center gap-2 text-xl"
          >
            Pages
            <span className="">
              <FaChevronDown />
            </span>
          </Link>
          <Link to="/book-appointment" className="hover:underline text-xl">
            Pricing
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-12 rounded-full border-1 border-gray-500 flex justify-center items-center">
            <RiSearchLine className="text-2xl" />
          </div>
          <div className="w-12 h-12 rounded-full bg-light-green flex justify-center items-center text-black">
            <GoPerson className="text-2xl" />
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#337063] p-3 rounded-xl">
            <TbWorld className="text-3xl" />
            <h1 className="text-2xl">EN</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
