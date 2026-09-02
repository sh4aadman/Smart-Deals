import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

function MainLayout() {
  return (
    <section className="font-inter bg-accent">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default MainLayout;
