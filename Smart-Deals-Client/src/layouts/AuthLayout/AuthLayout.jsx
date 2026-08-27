import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar/Navbar";

function AuthLayout() {
  return (
    <section className="font-inter">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default AuthLayout;
