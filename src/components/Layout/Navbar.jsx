import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="bg-[#175D4E] text-white py-5 px-6">
      <div className="flex justify-between items-center w-full lg:w-[1320px] mx-auto">
        <div className="text-2xl">logo</div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center gap-10 ${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-[#175D4E] p-5"
              : "hidden"
          } lg:static lg:flex-row lg:bg-transparent lg:p-0`}
        >
          <Link
            to="/"
            className="hover:underline text-xl block lg:inline-block"
          >

            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline text-xl block lg:inline-block"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="hover:underline flex items-center gap-2 text-xl"
          >
            Pages <FaChevronDown />

          </Link>
          <Link
            to="/book-appointment"
            className="hover:underline text-xl block lg:inline-block"
          >
            Pricing
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-gray-500 flex justify-center items-center">
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
