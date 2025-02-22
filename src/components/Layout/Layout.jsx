import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

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
