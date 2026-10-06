import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="absolute top-[20px] w-full bg-white">
          <Navbar />
        </div>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
