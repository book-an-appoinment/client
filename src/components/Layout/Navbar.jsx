import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa"; // Import FaChevronUp for toggling the dropdown
import logo from "../../assets/logo/logo.png";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // New state to handle search bar visibility
  const [activeLink, setActiveLink] = useState(""); // State to track the active link
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state to manage dropdown visibility

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as the active one
    if (link === "pages") {
      setDropdownOpen(!dropdownOpen); // Toggle the dropdown when "Pages" is clicked
    }
  };

  return (
    <nav className="bg-[#175D4E] text-white py-4 px-6">
      <div className="flex justify-between items-center w-full lg:w-[1320px] mx-auto">
        <div className="text-xl">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

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
            onClick={() => handleLinkClick("home")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "home" ? "text-[#a7eb94]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "about" ? "text-[#a7eb94]" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => handleLinkClick("services")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "services" ? "text-[#a7eb94]" : ""
            }`}
          >
            Services
          </Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleLinkClick("pages")}
              className={`hover:text-[#a7eb94] flex items-center gap-2 text-lg ${
                activeLink === "pages" ? "text-[#a7eb94]" : ""
              }`}
            >
              Pages {dropdownOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-[#175D4E] text-white p-4 rounded-lg shadow-lg">
                <Link
                  to="/contact"
                  onClick={() => setActiveLink("contact")}
                  className="block hover:text-[#a7eb94] text-lg py-2"
                >
                  Contact
                </Link>
                <Link
                  to="/team"
                  onClick={() => setActiveLink("team")}
                  className="block hover:text-[#a7eb94] text-lg py-2"
                >
                  Team
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/book-appointment"
            onClick={() => handleLinkClick("pricing")}
            className={`hover:text-[#a7eb94] text-lg block lg:inline-block ${
              activeLink === "pricing" ? "text-[#a7eb94]" : ""
            }`}
          >
            Pricing
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Icon or Search Bar */}
          <div className="relative">
            {searchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-md text-white focus:outline-[#A7EB94]"
                onBlur={() => setSearchOpen(false)} // Close when the input loses focus
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
                onClick={() => setSearchOpen(true)} // Open search bar when clicked
              >
                <RiSearchLine className="text-xl" />
              </div>
            )}
          </div>

          {/* Get Started Button */}
          <div className="flex items-center justify-center gap-2 bg-[#A7EB94] text-[#004D3F] p-3 rounded-xl">
            <button className="text-lg">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
