import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-primary-button text-white py-4 px-6 flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/book-appointment" className="hover:underline">
          Book Appointment
        </Link>
      </nav>

      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Layout;
