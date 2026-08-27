import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

function MainLayout() {
  return (
    <section className="font-inter">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default MainLayout;
